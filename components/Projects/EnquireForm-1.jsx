import { formSubmitDataLayer } from '@/src/util/TagManagerDataLayer';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useState, useCallback, useEffect } from 'react';
import { Form } from 'react-bootstrap';
import Modal from 'react-bootstrap/Modal';

import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const EnquireForm = () => {
	const [msgShow, setMsgShow] = useState(false);

	const msgHandleClose = () => setMsgShow(false);
	const msgHandleShow = () => setMsgShow(true);

	const [modalShow, setModalShow] = useState(false);

	const handleClose = () => { setModalShow(false); msgHandleClose(); resetForm()}
	const handleShow = () => setModalShow(true);

	const location = useRouter();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [message, setMessage] = useState("");

	const [errorMessage, setErroMessage] = useState("");
	const [errorMessageStatus, setErrorMessageStatus] = useState(false);
	const [validForm, setValidForm] = useState(false);
	const { executeRecaptcha } = useGoogleReCaptcha();

	const showError = (msg) => {
        setErroMessage(msg);
        setErrorMessageStatus(true);
        return true;
    }

	const resetForm = () =>{
		setName("");
		setEmail("");
		setMobile("");
		setMessage("");
	}

	useEffect( ()=>{
        if(errorMessageStatus){
            setTimeout( ()=>{
                setErrorMessageStatus(false);
                setErroMessage("");
            }, 3000)
        }
        return;
    }, [errorMessageStatus])

	const handleEnquirySubmit = (e) => {
		e.preventDefault();
		if (!executeRecaptcha) {
			showError("something went wrong")
			return;
		}
	
		if(name == ''){
			showError("Invalid Name")
			return;
		}

		if (email == '' || (!/\S+@\S+\.\S+/.test(email)) ){
			showError("Invalid Email")
			return;
		}

		if (mobile == '' || (!/(0|91)?[6-9][0-9]{9}/.test(mobile)) ){
			showError("Invalid Mobile")
			return;
		}

		if (message == ''){
			showError("Invalid Message")
			return;
		}

		executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
			submitEnquiryForm(gReCaptchaToken);
		});
	}

	const submitEnquiryForm = async (gReCaptchaToken ) => {

		var formdata = new FormData();
		formdata.append("name", name);
		formdata.append("email", email);
		formdata.append("msg", message);
		formdata.append("mobileno", mobile);
		formdata.append("site_url", window.location.origin+location.pathname);
		formdata.append("token", gReCaptchaToken);
		try {

			let response = await axios.post("https://api.gravityhomes.in/aranya_contacts/",formdata,{headers: {
				"Content-Type": "multipart/form-data",
			}}).catch(err => {
				console.log("err", err);
			});

			if(response && response.status === 200  && response?.data && response?.data?.status){
				formSubmitDataLayer('project-enquire-form', window.location.origin + location.pathname)
				setMsgShow(true);
			}else{
				showError(response?.data && response?.data?.msg ? response?.data?.msg : 'Invalid request');
			}

		} catch (error) {
			console.log("err", error);
		}	
		  
	}

	return (
		<>
			<button className="link-explore" type='button' onClick={handleShow}>
				Enquire Now
				<span className="ms-3">
					<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M0.5 8H14.5M14.5 8L9.53226 3M14.5 8L9.53226 13" stroke="#EFEFEF" strokeWidth="1.5"></path>
					</svg>
				</span>
			</button>

			<Modal
				show={modalShow}
				onHide={handleClose}
				size="md"
				aria-labelledby="contained-modal-title-vcenter"
				className='enquire-modal'
				centered
			>
				<Modal.Body>
					<div className='p-0 p-md-2 d-flex flex-column column-gap'>
						<div className='modal-body-head'>
							<h3 className='mb-0'>Make an Enquiry</h3>
							<button type='button' className='close-btn' onClick={handleClose}>
								<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M7.62529 33.2273L32.374 8.47852" stroke="black" strokeWidth="1.5" />
									<path d="M32.3747 33.2273L7.62598 8.47852" stroke="black" strokeWidth="1.5" />
								</svg>
							</button>
						</div>

						{msgShow ?
							<div className='thank-you-msg'>
								<p className='text-center'>Thank you for choosing a home that breathes with you!</p>
								<p className='text-center'>We are glad to see your interest in Gravity Homes and will get back to you shortly. </p>
								<p className='text-center mt-5'>Have a great day! Stay connected to nature’s calm.</p>
							</div> :
							<Form>
								<div className='newsletter-form row w-auto enquire_form_modal'>
									<div className='col-md-12'>
										<div className='input-newsletter mb-md-3 mb-2'>
											<input type='text' className='input-newsletter-text' placeholder='Name' name="name" value={name} onChange={(e) => setName(e?.target?.value)}/>
											{/* {errors.name && <p>{errors.name}</p>}  */}
										</div>
										<div className='input-newsletter mb-md-3 mb-2'> 
											<input type='email' className='input-newsletter-text' placeholder='Email' name="email" value={email} onChange={(e) => setEmail(e?.target?.value)}  />
											{/* {errors.email && <p>{errors.email}</p>} */}
										</div>
										<div className='input-newsletter mb-md-3 mb-2'>
											<input type='text' className='input-newsletter-text' placeholder='Mobile Number' name="mobile" maxLength={10} minLength={10} value={mobile} onChange={(e) => setMobile(e?.target?.value)} />
											{/* {errors.mobile && <p>{errors.mobile}</p>} */}
										</div>
										<div className='input-newsletter'>
											<input type='text' className='input-newsletter-text' placeholder='Message' name="message" value={message} onChange={(e) => setMessage(e?.target?.value)} />
											{/* {errors.message && <p>{errors.message}</p>} */}
										</div>
									</div>
									<div className='text-center explore-all-btn'>
										<button className="link-explore" type='button' onClick={handleEnquirySubmit}>
											Submit
											<span className='ms-3'>
												<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M0.5 8H14.5M14.5 8L9.53226 3M14.5 8L9.53226 13" stroke="#17574B" strokeWidth="1.5"/>
												</svg>
											</span>
										</button>
									</div>
									{errorMessageStatus ? <p className='text-danger'>{errorMessage}</p> :''}
								</div>
							</Form> 
						}
					</div>
				</Modal.Body>
			</Modal>
		</>
	)
}

export default EnquireForm