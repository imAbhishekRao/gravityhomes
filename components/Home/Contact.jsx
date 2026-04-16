import React,{ useState,useCallback,useEffect } from 'react'
import { Form } from 'react-bootstrap';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import { useRouter } from 'next/router';
import { useForm } from "react-hook-form";
import axios from "axios";
import { formSubmitDataLayer } from '@/src/util/TagManagerDataLayer';


const Contact = () => {
	const { executeRecaptcha } = useGoogleReCaptcha();

	const location = useRouter();
	const [contactName, setContactName] 				= useState("");
	const [contactEmail, setContactEmail] 				= useState("");
	const [contactMobile, setContactMobile] 			= useState("");
	const [contactMessage, setContactMessage] 			= useState("");
	const [contactNotification, setContactNotification] = useState("");

	const [btnDisableStatus, setBtnDisableStatus] = useState(false);
	const [buttonName, setButtonName] = useState('Enquire Now');

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


	const handleContactSubmit = (e) => {
		// // e.preventDefault();
		// // contactValidateForm();
		// // if (isContactFormValid) {
		// 	if (!executeRecaptcha) {
		// 		// console.log("Execute recaptcha not yet available");
		// 		return;
		// 	}
		// 	executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
		// 		// console.log(gReCaptchaToken, "response Google reCaptcha server");
		// 		submitContactForm(gReCaptchaToken);
		// 	});
		// // }
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

		if (contactMobile == '' || (!/(0|91)?[6-9][0-9]{9}/.test(contactMobile)) ){
			showError("Invalid Mobile")
			return;
		}

		if (contactMessage == ''){
			showError("Invalid Message")
			return;
		}

		executeRecaptcha("enquiryFormSubmit").then((gReCaptchaToken) => {
			submitContactForm(gReCaptchaToken);
		});
	}
	  
	const submitContactForm = async (gReCaptchaToken) => {

		const contactData = {
			site_url: window.location.origin + location.pathname,
			name: contactName,
			email: contactEmail,
			phone:contactMobile,
			message: contactMessage,
			token: gReCaptchaToken,
		}

		// axios.post("https://www.gravityhomes.in/contacts-form/",{data:contactData},{headers: {
		// 	"Content-Type": "application/x-www-form-urlencoded",
		// }}).then((resp) => {
		// 	console.log(resp.status);
		// }).then((res) => {
		// 	// (res)
		// 	// console.log(res, "response from backend");
		// 	// if (res?.status === "success") {
		// 	// 	setContactNotification(res?.message);
		// 	// } else {
		// 	// 	setContactNotification(res?.message);
		// 	// }
		// });

		var formdata = new FormData();
		formdata.append("name", contactName);
		formdata.append("site_url", window.location.origin + location.pathname);
		formdata.append("email", contactEmail);
		formdata.append("msg", contactMessage);
		formdata.append("mobileno", contactMobile);
		formdata.append("token", gReCaptchaToken);

		setButtonName('Please Wait...');
		setBtnDisableStatus(false);

		try {
			let response = await axios.post("https://api.gravityhomes.in/contacts-form/",formdata,{headers: {
				"Content-Type": "multipart/form-data",
			}}).catch(err => {
				console.log("err", err);
			});

			// console.log("response", response)
			setButtonName('Enquire Now');
			setBtnDisableStatus(false);

			if(response && response.status === 200 && response?.data && response?.data?.status){
				// setContactNotification("Thank you. We will contact soon.");
				resetForm();
				formSubmitDataLayer('contact-form', window.location.origin + location.pathname);
				// setTimeout( ()=> { setContactNotification("")}, 800)
				setTimeout( ()=> { window.location.href= '/thank-you'}, 800);
			}else{
				setContactNotification(response?.data && response?.data?.msg ? response?.data?.msg : 'Invalid request');
				setTimeout( ()=> { setContactNotification("")}, 3000)
			}

		} catch (error) {
			setButtonName('Enquire Now');
			setBtnDisableStatus(false);
			console.log("err", err);
		}	
	};

	const resetForm = () =>{
		setContactName("");
		setContactEmail("");
		setContactMobile("");
		setContactMessage("");
	}

	return (
		<>
			
			<Form>
				<div className='newsletter-form row w-100'>
					<div className='col-md-6'>
						<div className='input-newsletter mb-2 mb-md-4'>
							<input type='text' className='input-newsletter-text' placeholder='Name' name="name"  value={contactName} {...register("name",{ required: true, onChange:(e) => setContactName(e?.target?.value)})} />
							{errors.name && <p> Name is required. </p>}
						</div>
						<div className='input-newsletter mb-2 mb-md-0'> 
							<input type='email' className='input-newsletter-text' placeholder='Email' name="email" value={contactEmail} {...register("email",{ required: true, pattern: {value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i}, onChange:(e) => setContactEmail(e?.target?.value)})} />
							{errors.email && <p> Email is Invalid. </p>}
						</div>
					</div>
					<div className='col-md-6'>
						<div className='input-newsletter mb-2 mb-md-4'>
							<input type='text' className='input-newsletter-text' placeholder='Mobile Number' name="mobile" maxLength={10} minLength={10} value={contactMobile} {...register("mobile",{ required: true, maxLength: 10 , minLength:10, pattern: {value: /^[0-9]+$/i },onChange:(e) => setContactMobile(e?.target?.value)})}  />
							{errors.mobile && <p> Mobile is Invalid. </p>}
						</div>
						<div className='input-newsletter mb-2 mb-md-0'>
							<input type='text' className='input-newsletter-text' placeholder='Message' name="message" value={contactMessage} {...register("message",{ required: true, onChange:(e) => setContactMessage(e?.target?.value)})}  />
							{errors.message && <p> Message is required. </p>}
						</div>
					</div>
				</div>
				<div className='spacer-4' />
				{contactNotification && <p>{contactNotification}</p>}
				<div className='text-center explore-all-btn'>
					<button className="link-explore" type='submit' onClick={handleContactSubmit} disabled={btnDisableStatus}>{buttonName}
						{ btnDisableStatus ? '' : <span className='ms-3'>
							<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
								<path d="M0.5 8H14.5M14.5 8L9.53226 3M14.5 8L9.53226 13" stroke="#17574B" strokeWidth="1.5"/>
							</svg>
						</span>}
					</button>
				</div>
			</Form>
		</>
	)
}

export default Contact