import { formSubmitDataLayer } from '@/src/util/TagManagerDataLayer';
import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useCallback, useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { useForm } from 'react-hook-form';

const NewsLetter = () => {

	const { executeRecaptcha } = useGoogleReCaptcha();

	const location = useRouter();
	const [contactName, setContactName] 				= useState("");
	const [contactEmail, setContactEmail] 				= useState("");
	const [contactNotification, setContactNotification] = useState("");

	const [btnDisableStatus, setBtnDisableStatus] = useState(false);
	const [buttonName, setButtonName] = useState('Subscribe');

	const { register, handleSubmit, formState: { errors }  } = useForm();

	const showError = (msg) => {
        setContactNotification(msg);
        return true;
    }

	useEffect( ()=>{
        if(contactNotification){
            setTimeout( ()=>{
                setContactNotification("");
            }, 3000)
        }
        return;
    }, [contactNotification])

	const handleContactNewsLetterSubmit = (e) => {
		// // e.preventDefault();
		// if (!executeRecaptcha) {
		// 	return;
		// }
		// executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
		// 	submitContactNewsLetterForm(gReCaptchaToken);
		// 	console.log(contactName)
		// });
		e.preventDefault();
		if (!executeRecaptcha) {
			showError("something went wrong")
			return;
		}
	
		if(contactName == ''){
			showError("Invalid Name")
			return;
		}

		if (contactEmail == '' || (!/\S+@\S+\.\S+/.test(contactEmail)) ){
			showError("Invalid Email")
			return;
		}


		executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
			submitContactNewsLetterForm(gReCaptchaToken);
		});
	};
	  
	const submitContactNewsLetterForm = async (gReCaptchaToken) => {

		// const contactData = JSON.stringify({
		// 	site_url:location.pathname,contactName
		// 	name: contactName,
		// 	email: contactEmail,
		// 	token: gReCaptchaToken,
		// })

		// console.log(contactName)

		var formdata = new FormData();
		formdata.append("name", contactName);
		formdata.append("email", contactEmail);
		formdata.append("site_url", window.location.origin+location.pathname);
		formdata.append("token", gReCaptchaToken);

		setButtonName('Please Wait...');
		setBtnDisableStatus(false);

		try {
			let response = await axios.post("https://api.gravityhomes.in/subscribe-api/",formdata,{headers: {
				"Content-Type": "multipart/form-data",
			}}).catch(err => {
				console.log("err", err);
			});

			setButtonName('Subscribe');
			setBtnDisableStatus(false);
			if(response && response.status === 200 && response?.data && response?.data?.status ){
				setContactNotification(response?.message);
				formSubmitDataLayer('newsletter-subscribe', window.location.origin + location.pathname)
				resetForm();
				// window.location.href= '/thank-you';
			}else{
				setContactNotification(response?.data && response?.data?.msg ? response?.data?.msg : 'Invalid request');
			}

			setTimeout( ()=> { setContactNotification("")}, 3000)

		} catch (error) {
			setButtonName('Subscribe');
			setBtnDisableStatus(false);
			console.log("err", error);
		}	
	};

	const resetForm = () =>{
		setContactName("");
		setContactEmail("");
	}

	// console.log(contactName)

	return (
		<>
			<div className='newsletter-flex justify-content-md-between'>
				<div className='newsletter-content'>
					<h3 className='mb-0'>
						Subscribe To Our <span>Newsletter</span>
					</h3>
					<p className='mb-0'>Get Closer to the Elements.<br />
						Stories of Homes tucked away from the noise.</p>
				</div>
				<Form  className='newsletter-form'>
					<div className='newsletter-form'>
						<div className='input-newsletter mb-2 mb-md-0'>
							<input type='text' className='input-newsletter-text' placeholder='Name' value={contactName} {...register("name",{ required: true, onChange:(e) => setContactName(e?.target?.value)})}/>
							{errors.name && <p className='text-danger'> Name is required. </p>}
						</div>
						<div className='input-newsletter mb-2 mb-md-0'>
							<input type='text' className='input-newsletter-text' placeholder='Email' value={contactEmail} {...register("email",{ required: true, onChange:(e) => setContactEmail(e?.target?.value)})}/>
							{errors.email && <p className='text-danger'> Invalid Email. </p>}
						</div>
						<div className='button-newsletter'>
							<button type='submit' className='btn btn-newsletter' onClick={handleContactNewsLetterSubmit} disabled={btnDisableStatus}>{buttonName}								
								{ btnDisableStatus ? '' : <span>
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M0.5 8H14.5M14.5 8L9.53226 3M14.5 8L9.53226 13" stroke="#EFE1CA" strokeWidth="1.5" />
									</svg>
								</span>}
							</button>
						</div>
					</div>
					{contactNotification ? <p className='text-danger mt-2'>{contactNotification}</p> : ''}
				</Form>
			</div>
		</>
	)
}

export default NewsLetter