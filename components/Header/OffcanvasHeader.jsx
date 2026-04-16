import React, { useState, useCallback, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Col, Offcanvas, Row, Container, Form } from 'react-bootstrap';
import Link from 'next/link';
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";
import axios from 'axios';
import { formSubmitDataLayer } from '@/src/util/TagManagerDataLayer';

const OffcanvasHeader = ({  toggleOffCanvas }) => {
	const isMobile = window.screen.width < 768;

	const [showtopNav, setShowtopNav] = useState(true);


	const location = useRouter();
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [mobile, setMobile] = useState("");
	const [message, setMessage] = useState("");
	const [notification, setNotification] = useState("");

	const [errors, setErrors] = useState({});
	const [errorMessage, setErroMessage] = useState("");
	const [errorMessageStatus, setErrorMessageStatus] = useState(false);
	const [isFormValid, setIsFormValid] = useState(false);

	const { executeRecaptcha } = useGoogleReCaptcha();
	const [btnDisableStatus, setBtnDisableStatus] = useState(false);
	const [buttonName, setButtonName] = useState('Submit');

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

	// Validate form 
	const validateForm = () => {
		let errors = {};
		// console.log(name);
		if (name == '') {
			errors.name = 'Name is required.';
		}

		if (email == '') {
			errors.email = 'Email is required.';
		} else if (!/\S+@\S+\.\S+/.test(email)) {
			errors.email = 'Email is invalid.';
		}

		if (mobile == '') {
			errors.mobile = 'Mobile is required.';
		} else if (!/(0|91)?[6-9][0-9]{9}/.test(mobile)) {
			errors.mobile = 'Mobile is invalid.';
		}

		setErrors(errors);
		setIsFormValid(Object.keys(errors).length === 0);
	};

	const handleHeaderSubmit =(e) => {
		e.preventDefault();
		// validateForm();
		// if (isFormValid) {
		if (!executeRecaptcha) {
			// console.log("Execute recaptcha not yet available");
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
			// console.log(gReCaptchaToken, "response Google reCaptcha server");
			submitEnquiryForm(gReCaptchaToken);
		});
		// }
	};

	const submitEnquiryForm = async (gReCaptchaToken) => {

		try{
			// const response = await fetch("https://www.gravityhomes.in/contacts-form/", {
			// 	method: "POST",
			// 	headers: {
			// 		"Content-Type": "application/x-www-form-urlencoded",
			// 	},
			// 	body: JSON.stringify({
			// 		site_url: location.pathname,
			// 		name: name,
			// 		email: email,
			// 		phone: mobile,
			// 		message: message,
			// 		token: gReCaptchaToken,
			// 	}),
			// }).then((res) => res.json()).then((res) => {
			// 	console.log(res, "response from backend");
			// 	if (res?.status === "success") {
			// 		setNotification(res?.message);
			// 	} else {
			// 		setNotification(res?.message);
			// 	}
			// });

			var formdata = new FormData();
			formdata.append("name", name);
			formdata.append("email", email);
			formdata.append("msg", message);
			formdata.append("mobileno", mobile);
			formdata.append("token", gReCaptchaToken);

			setButtonName('Please Wait...');
			setBtnDisableStatus(true);

			const response = await axios.post("https://api.gravityhomes.in/contacts-form/",
				formdata,
				{headers: {
					"Content-Type": "multipart/form-data",
				},
			}).catch(err => {
				console.log("err", err);
			});

			setButtonName('Submit');
			setBtnDisableStatus(false);

			if(response && response.status === 200 && response?.data && response?.data?.status ){
				// showError(response?.data && response?.data?.msg ? response?.data?.msg : 'Thank you .We will contact soon');
				formSubmitDataLayer('contact-form-header', window.location.origin + location.pathname)
				resetForm()
				setTimeout( ()=> { window.location.href= '/thank-you'}, 500);
			}else{
				showError(response?.data && response?.data?.msg ? response?.data?.msg : 'Invalid request');
			}

		} catch (error) {
			setButtonName('Submit');
			setBtnDisableStatus(false);
			console.log("err", error);
		}	
	};


	return (
		<>
			<Offcanvas.Header className='p-0'>

				<Navbar collapseOnSelect expand="lg" className="bg-body-tertiary bg-transparent p-0" fixed="top">
					<Container>
						<Navbar.Brand href="/">
							<Image className="light img-fluid" src="/images/gravity_homes_whites.png" alt="Light" width={105} height={45} />
						</Navbar.Brand>
						<Navbar id="responsive-navbar-nav" className='p-0'>

							<Nav className="ms-auto">
								<Nav.Link href="https://www.facebook.com/GravityHomes/" target='_black' title="Gravity Homes Facebook" className='d-none d-md-flex align-items-center'>
									<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M30 20C30 14.4775 25.5225 10 20 10C14.4775 10 10 14.4775 10 20C10 24.9917 13.6567 29.1283 18.4375 29.8783V22.8908H15.8983V19.9992H18.4375V17.7975C18.4375 15.2917 19.9308 13.9067 22.215 13.9067C23.3083 13.9067 24.4533 14.1025 24.4533 14.1025V16.5633H23.1917C21.9492 16.5633 21.5617 17.3342 21.5617 18.125V20H24.335L23.8917 22.8917H21.5617V29.8792C26.3433 29.1283 30 24.9908 30 20Z" fill="#787878" />
									</svg>
								</Nav.Link>
								<Nav.Link href="https://www.youtube.com/@GravityHomes" target='_black' title="Gravity Homes Youtube" className='d-none d-md-flex align-items-center'>
									<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
										<g clipPath="url(#clip0_344_947)">
											<path d="M29.3725 7.73289C29.203 7.09448 28.8688 6.51181 28.4033 6.04322C27.9377 5.57463 27.3573 5.23657 26.72 5.06289C24.3812 4.43164 15 4.43164 15 4.43164C15 4.43164 5.61875 4.43164 3.27875 5.06289C2.64176 5.23687 2.06162 5.57506 1.59635 6.04362C1.13108 6.51218 0.796989 7.09469 0.6275 7.73289C0 10.0879 0 15.0004 0 15.0004C0 15.0004 0 19.9129 0.6275 22.2679C0.796982 22.9063 1.13122 23.489 1.59674 23.9576C2.06226 24.4262 2.64272 24.7642 3.28 24.9379C5.61875 25.5691 15 25.5691 15 25.5691C15 25.5691 24.3813 25.5691 26.7213 24.9379C27.3586 24.7643 27.9391 24.4263 28.4046 23.9577C28.8702 23.4891 29.2044 22.9064 29.3738 22.2679C30 19.9129 30 15.0004 30 15.0004C30 15.0004 30 10.0879 29.3725 7.73289ZM11.9312 19.4604V10.5404L19.7725 15.0004L11.9312 19.4604Z" fill="#787878" />
										</g>
										<defs>
											<clipPath id="clip0_344_947">
												<rect width="30" height="30" fill="white" />
											</clipPath>
										</defs>
									</svg>
								</Nav.Link>
								<Nav.Link href="https://www.instagram.com/gravityhomesin/" target='_black' title="Gravity Homes Instagram" className='d-none d-md-flex align-items-center'>
									<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M20 10C17.2833 10 16.9442 10.0125 15.8775 10.06C14.8125 10.11 14.0875 10.2775 13.45 10.525C12.7925 10.78 12.2342 11.1225 11.6783 11.6783C11.1225 12.2342 10.7792 12.7917 10.525 13.45C10.2775 14.0875 10.1092 14.8125 10.06 15.8775C10.01 16.9442 10 17.2833 10 20C10 22.7167 10.0125 23.0558 10.06 24.1225C10.11 25.1867 10.2775 25.9125 10.525 26.55C10.7761 27.2174 11.1697 27.822 11.6783 28.3217C12.1777 28.8307 12.7824 29.2243 13.45 29.475C14.0883 29.7217 14.8133 29.8908 15.8775 29.94C16.9442 29.99 17.2833 30 20 30C22.7167 30 23.0558 29.9875 24.1225 29.94C25.1867 29.89 25.9125 29.7217 26.55 29.475C27.2172 29.2236 27.8218 28.8301 28.3217 28.3217C28.8309 27.8224 29.2245 27.2177 29.475 26.55C29.7217 25.9125 29.8908 25.1867 29.94 24.1225C29.99 23.0558 30 22.7167 30 20C30 17.2833 29.9875 16.9442 29.94 15.8775C29.89 14.8133 29.7217 14.0867 29.475 13.45C29.2238 12.7827 28.8302 12.1781 28.3217 11.6783C27.8226 11.1689 27.2178 10.7752 26.55 10.525C25.9125 10.2775 25.1867 10.1092 24.1225 10.06C23.0558 10.01 22.7167 10 20 10ZM20 11.8C22.6692 11.8 22.9875 11.8133 24.0417 11.8592C25.0167 11.905 25.5458 12.0667 25.8975 12.205C26.3658 12.3858 26.6975 12.6025 27.0492 12.9517C27.3983 13.3017 27.615 13.6342 27.7958 14.1025C27.9325 14.4542 28.0958 14.9833 28.14 15.9583C28.1875 17.0133 28.1983 17.33 28.1983 20C28.1983 22.67 28.1858 22.9875 28.1367 24.0417C28.0858 25.0167 27.9233 25.5458 27.7858 25.8975C27.6232 26.3315 27.3675 26.7246 27.0367 27.0492C26.7134 27.3802 26.3206 27.6353 25.8867 27.7958C25.5367 27.9325 24.9992 28.0958 24.0242 28.14C22.9625 28.1875 22.65 28.1983 19.975 28.1983C17.2992 28.1983 16.9867 28.1858 15.9258 28.1367C14.95 28.0858 14.4125 27.9233 14.0625 27.7858C13.6283 27.6252 13.2356 27.3692 12.9133 27.0367C12.5788 26.7156 12.3223 26.3222 12.1633 25.8867C12.0258 25.5367 11.8642 24.9992 11.8133 24.0242C11.7758 22.9742 11.7625 22.65 11.7625 19.9875C11.7625 17.3242 11.7758 16.9992 11.8133 15.9367C11.8642 14.9617 12.0258 14.425 12.1633 14.075C12.3383 13.6 12.5625 13.275 12.9133 12.9242C13.2625 12.575 13.5883 12.35 14.0625 12.1758C14.4125 12.0375 14.9383 11.875 15.9133 11.825C16.9758 11.7875 17.2883 11.775 19.9625 11.775L20 11.8ZM20 14.865C19.3257 14.865 18.6579 14.9978 18.0349 15.2559C17.4119 15.5139 16.8458 15.8922 16.369 16.369C15.8922 16.8458 15.5139 17.4119 15.2559 18.0349C14.9978 18.6579 14.865 19.3257 14.865 20C14.865 20.6743 14.9978 21.3421 15.2559 21.9651C15.5139 22.5881 15.8922 23.1542 16.369 23.631C16.8458 24.1078 17.4119 24.4861 18.0349 24.7441C18.6579 25.0022 19.3257 25.135 20 25.135C21.3619 25.135 22.668 24.594 23.631 23.631C24.594 22.668 25.135 21.3619 25.135 20C25.135 18.6381 24.594 17.332 23.631 16.369C22.668 15.406 21.3619 14.865 20 14.865ZM20 23.3333C18.1583 23.3333 16.6667 21.8417 16.6667 20C16.6667 18.1583 18.1583 16.6667 20 16.6667C21.8417 16.6667 23.3333 18.1583 23.3333 20C23.3333 21.8417 21.8417 23.3333 20 23.3333ZM26.5383 14.6625C26.5268 14.973 26.3953 15.267 26.1715 15.4826C25.9477 15.6982 25.6491 15.8186 25.3383 15.8186C25.0276 15.8186 24.729 15.6982 24.5052 15.4826C24.2814 15.267 24.1499 14.973 24.1383 14.6625C24.1383 14.3442 24.2648 14.039 24.4898 13.814C24.7148 13.5889 25.0201 13.4625 25.3383 13.4625C25.6566 13.4625 25.9618 13.5889 26.1869 13.814C26.4119 14.039 26.5383 14.3442 26.5383 14.6625Z" fill="#787878" />
									</svg>
								</Nav.Link>
								<Nav.Link href="https://www.linkedin.com/company/gravity-homes/" target='_black' title="Gravity Homes Linkedin" className='d-none d-md-flex align-items-center'>
									<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
										<g clipPath="url(#clip0_4754_719)">
											<path d="M0.5 22.6211C0.5 16.2133 0.5 9.80624 0.5 3.3985C0.519531 3.31964 0.538411 3.24077 0.557943 3.16256C0.963542 1.5383 2.28906 0.501304 3.9668 0.501304C10.0137 0.5 16.0599 0.501955 22.1061 0.5C22.9115 0.5 23.623 0.756153 24.2487 1.25477C24.9414 1.80684 25.3288 2.54075 25.5 3.3985V22.6211C25.3815 23.1809 25.1829 23.705 24.832 24.1651C24.2695 24.9017 23.5176 25.3201 22.6191 25.4993H3.38086C2.82031 25.3814 2.29557 25.1819 1.83594 24.8313C1.09896 24.2694 0.678385 23.5186 0.5 22.6204V22.6211ZM10.5286 15.5811C10.5286 17.0932 10.5286 18.6047 10.5286 20.1169C10.5286 20.6266 10.6953 20.7954 11.1973 20.7967C11.832 20.798 12.4661 20.798 13.1009 20.7967C13.6204 20.7954 13.7682 20.6481 13.7689 20.1312C13.7695 18.5708 13.7643 17.0098 13.7715 15.4494C13.7741 14.8556 13.9036 14.286 14.2272 13.7782C14.6003 13.1936 15.1536 12.955 15.832 13.0117C16.5391 13.071 17.0013 13.4536 17.224 14.1256C17.3529 14.5148 17.4076 14.9163 17.4076 15.3249C17.4089 16.9342 17.4076 18.5435 17.4076 20.1534C17.4076 20.6324 17.5384 20.7687 18.0104 20.7706C18.7103 20.7739 19.4095 20.7732 20.1094 20.7706C20.5853 20.7687 20.7389 20.6181 20.7402 20.1436C20.7474 18.2254 20.7467 16.3072 20.6908 14.3896C20.668 13.6159 20.5286 12.8547 20.2077 12.1396C19.7962 11.2219 19.11 10.6216 18.1296 10.3739C17.3763 10.1836 16.6159 10.1914 15.8561 10.329C15.0872 10.4678 14.4603 10.8432 13.9844 11.467C13.944 11.5198 13.9141 11.6221 13.8255 11.5843C13.7487 11.5511 13.7767 11.4553 13.7747 11.3849C13.7702 11.2304 13.7747 11.0759 13.7715 10.9214C13.763 10.5428 13.6139 10.3928 13.2318 10.3909C12.5566 10.3883 11.8815 10.3896 11.2064 10.3902C10.6751 10.3902 10.5286 10.5369 10.5286 11.0707C10.528 12.5744 10.5286 14.0781 10.5286 15.5817V15.5811ZM8.98503 15.5993C8.98503 14.0787 8.98568 12.5587 8.98503 11.0381C8.98503 10.5356 8.83463 10.3896 8.32552 10.3883C7.69075 10.387 7.05599 10.387 6.42122 10.3883C5.91862 10.3896 5.74349 10.561 5.74349 11.059C5.74284 14.0755 5.74284 17.0919 5.74349 20.1084C5.74349 20.6103 5.93099 20.7947 6.44206 20.7967C7.06836 20.7987 7.69531 20.7993 8.32161 20.7967C8.80599 20.7947 8.98438 20.6168 8.98503 20.1364C8.98633 18.6243 8.98503 17.1121 8.98503 15.5993ZM5.28255 7.32814C5.2806 8.49549 6.20508 9.43015 7.36263 9.43146C8.52344 9.43276 9.46354 8.50266 9.46875 7.34899C9.47396 6.17903 8.5345 5.22742 7.37109 5.22547C6.22526 5.22351 5.2845 6.17056 5.28255 7.32879V7.32814Z" fill="#979797"/>
										</g>
										<defs>
											<clipPath id="clip0_4754_719">
											<rect width="25" height="25" fill="white" transform="translate(0.5 0.5)"/>
											</clipPath>
										</defs>
									</svg>
								</Nav.Link>
								<Nav.Link eventKey={2} href="#" className='d-flex align-items-center navOffCanvas' onClick={toggleOffCanvas} title="Gravity Homes Close">
									{/* <button type='button' onClick={toggleOffCanvas}> */}
									<svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M10.565 36.4355L37.4351 9.56543" stroke="#121212" strokeWidth="1.5" />
										<path d="M37.435 36.4355L10.5649 9.56543" stroke="#121212" strokeWidth="1.5" />
									</svg>
									{/* </button> */}
								</Nav.Link>
							</Nav>
						</Navbar>
					</Container>
				</Navbar>
			</Offcanvas.Header>
			<Offcanvas.Body className='p-0 overflow-x-hidden'>
				<Row className='h-100'>
					{isMobile ?
						<>
							{showtopNav ?
								<Col xl={6} sm={12} className='bgNavMob'>
									<div className='nav-left-content h-100- d-flex flex-column justify-content-center align-items-end z-index-1 position-relative'>
										<div className='nav-links-offCanvas d-flex flex-column'>
											<Link href='/about' onClick={toggleOffCanvas} title="Gravity Homes About Us">About Us</Link>
											<Link href='/project' onClick={toggleOffCanvas} title="Gravity Homes Project">Projects</Link>
											<Link href='/living' onClick={toggleOffCanvas} title="Gravity Homes Living">Living</Link>
											<Link href='/blog' onClick={toggleOffCanvas} title="Gravity Homes Blog">Blog</Link>
											<Link href='/contact' onClick={toggleOffCanvas} title="Gravity Homes Contact">Contact</Link>
										</div>
									</div>
								</Col> :
								<Col xl={6} sm={6} className='bgNav'>
									<div className='nav-left-content h-100- d-flex flex-column justify-content-center align-items-center text-white z-index-1 position-relative'>
										<div className='nav-form-offCanvas d-flex flex-column'>
											<Form className='newsletter-form mt-0 w-100' onSubmit={handleHeaderSubmit} >
												<div className='text-center get-in-tuh'>Get In touch</div>
												<div className='input-newsletter mb-0'>
													<input type='text' className='input-newsletter-text' placeholder='Name' name="name" value={name} onChange={(e) => setName(e?.target?.value)} />
													{errors.name && <p>{errors.name}</p>}
												</div>
												<div className='input-newsletter mb-0'>
													<input type='text' className='input-newsletter-text' placeholder='Email' name="email" value={email} onChange={(e) => setEmail(e?.target?.value)} />
													{errors.email && <p>{errors.email}</p>}
												</div>
												<div className='input-newsletter mb-0'>
													<input type='text' className='input-newsletter-text' placeholder='Mobile Number' name="mobile" maxLength={10} minLength={10} value={mobile} onChange={(e) => setMobile(e?.target?.value)} />
													{errors.mobile && <p>{errors.mobile}</p>}
												</div>
												<div className='input-newsletter mb-0'>
													<input type='text' className='input-newsletter-text' placeholder='Message' name="message" value={message} onChange={(e) => setMessage(e?.target?.value)} />
													{errors.message && <p>{errors.message}</p>}
												</div>
												{notification && <p>{notification}</p>}
												<div className='text-center explore-all-head'>
													<button className="link-explore" type='submit'>Submit
														<span className="ms-3">
															<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 8H14.5M14.5 8L9.53226 3M14.5 8L9.53226 13" stroke="#fff" strokeWidth="1.5"></path></svg>
														</span>
													</button>
												</div>
												{errorMessageStatus ? <p className=''>{errorMessage}</p> :''}
											</Form>
											<h3 className='header-offcanvas-headtxt d-none d-md-flex'>
												A Culture <span>Committed to</span> Belonging.
											</h3>
										</div>
									</div>
								</Col>
							}
							<Col sm={12} className='d-flex d-md-none'>
								<div className='mobile-nav-bottom'>
									<h3 className='header-offcanvas-headtxt d-flex d-md-none'>
										A Culture <span>Committed to</span> Belonging.
									</h3>
									<div className='flex-col-custm d-flex flex-column align-items-center'>
										<div className='mobile-number-txt'>
											<span className='me-3'>
												<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M21.5 15.46L16.23 14.85L13.71 17.37C10.8712 15.9262 8.5638 13.6188 7.12002 10.78L9.65002 8.25L9.04002 3H3.53002C2.95002 13.18 11.32 21.55 21.5 20.97V15.46Z" fill="#17574B" />
												</svg>
											</span> (+91)95389 44994
										</div>
										<div className='flex-btn-nextPrev'>
											<button type='button' className='btn-nxtPrv' onClick={() => setShowtopNav(!showtopNav)}>
												{showtopNav ?
													<span style={{ display: 'inline-block' }}>
														Get In Touch
														<span className='ms-4'>
															<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M1 8.5H15M15 8.5L10.0323 3.5M15 8.5L10.0323 13.5" stroke="#17574B" />
															</svg>
														</span>
													</span> :
													<span>
														<span className='me-4'>
															<svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
																<g clipPath="url(#clip0_773_4056)">
																	<path d="M15.5 8.5L1.5 8.5M1.5 8.5L6.46774 13.5M1.5 8.5L6.46774 3.5" stroke="#17574B" />
																</g>
																<defs>
																	<clipPath id="clip0_773_4056">
																		<rect width="16" height="16" fill="white" transform="translate(0.5 0.5)" />
																	</clipPath>
																</defs>
															</svg>
														</span> Back
													</span>
												}
											</button>
										</div>
										<div className='links-social-nav d-flex justify-content-center'>
											<Link href="https://www.facebook.com/GravityHomes/" target='_black' title="Gravity Homes Facebook" className='d-flex d-md-none align-items-center'>
												<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M30 20C30 14.4775 25.5225 10 20 10C14.4775 10 10 14.4775 10 20C10 24.9917 13.6567 29.1283 18.4375 29.8783V22.8908H15.8983V19.9992H18.4375V17.7975C18.4375 15.2917 19.9308 13.9067 22.215 13.9067C23.3083 13.9067 24.4533 14.1025 24.4533 14.1025V16.5633H23.1917C21.9492 16.5633 21.5617 17.3342 21.5617 18.125V20H24.335L23.8917 22.8917H21.5617V29.8792C26.3433 29.1283 30 24.9908 30 20Z" fill="#787878" />
												</svg>
											</Link>
											<Link href="https://www.youtube.com/@GravityHomes" target='_black' title="Gravity Homes Youtube" className='d-flex d-md-none align-items-center'>
												<svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
													<g clipPath="url(#clip0_344_947)">
														<path d="M29.3725 7.73289C29.203 7.09448 28.8688 6.51181 28.4033 6.04322C27.9377 5.57463 27.3573 5.23657 26.72 5.06289C24.3812 4.43164 15 4.43164 15 4.43164C15 4.43164 5.61875 4.43164 3.27875 5.06289C2.64176 5.23687 2.06162 5.57506 1.59635 6.04362C1.13108 6.51218 0.796989 7.09469 0.6275 7.73289C0 10.0879 0 15.0004 0 15.0004C0 15.0004 0 19.9129 0.6275 22.2679C0.796982 22.9063 1.13122 23.489 1.59674 23.9576C2.06226 24.4262 2.64272 24.7642 3.28 24.9379C5.61875 25.5691 15 25.5691 15 25.5691C15 25.5691 24.3813 25.5691 26.7213 24.9379C27.3586 24.7643 27.9391 24.4263 28.4046 23.9577C28.8702 23.4891 29.2044 22.9064 29.3738 22.2679C30 19.9129 30 15.0004 30 15.0004C30 15.0004 30 10.0879 29.3725 7.73289ZM11.9312 19.4604V10.5404L19.7725 15.0004L11.9312 19.4604Z" fill="#787878" />
													</g>
													<defs>
														<clipPath id="clip0_344_947">
															<rect width="30" height="30" fill="white" />
														</clipPath>
													</defs>
												</svg>
											</Link>
											<Link href="https://www.instagram.com/gravityhomesin/" target='_black' title="Gravity Homes Instagram" className='d-flex d-md-none align-items-center'>
												<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M20 10C17.2833 10 16.9442 10.0125 15.8775 10.06C14.8125 10.11 14.0875 10.2775 13.45 10.525C12.7925 10.78 12.2342 11.1225 11.6783 11.6783C11.1225 12.2342 10.7792 12.7917 10.525 13.45C10.2775 14.0875 10.1092 14.8125 10.06 15.8775C10.01 16.9442 10 17.2833 10 20C10 22.7167 10.0125 23.0558 10.06 24.1225C10.11 25.1867 10.2775 25.9125 10.525 26.55C10.7761 27.2174 11.1697 27.822 11.6783 28.3217C12.1777 28.8307 12.7824 29.2243 13.45 29.475C14.0883 29.7217 14.8133 29.8908 15.8775 29.94C16.9442 29.99 17.2833 30 20 30C22.7167 30 23.0558 29.9875 24.1225 29.94C25.1867 29.89 25.9125 29.7217 26.55 29.475C27.2172 29.2236 27.8218 28.8301 28.3217 28.3217C28.8309 27.8224 29.2245 27.2177 29.475 26.55C29.7217 25.9125 29.8908 25.1867 29.94 24.1225C29.99 23.0558 30 22.7167 30 20C30 17.2833 29.9875 16.9442 29.94 15.8775C29.89 14.8133 29.7217 14.0867 29.475 13.45C29.2238 12.7827 28.8302 12.1781 28.3217 11.6783C27.8226 11.1689 27.2178 10.7752 26.55 10.525C25.9125 10.2775 25.1867 10.1092 24.1225 10.06C23.0558 10.01 22.7167 10 20 10ZM20 11.8C22.6692 11.8 22.9875 11.8133 24.0417 11.8592C25.0167 11.905 25.5458 12.0667 25.8975 12.205C26.3658 12.3858 26.6975 12.6025 27.0492 12.9517C27.3983 13.3017 27.615 13.6342 27.7958 14.1025C27.9325 14.4542 28.0958 14.9833 28.14 15.9583C28.1875 17.0133 28.1983 17.33 28.1983 20C28.1983 22.67 28.1858 22.9875 28.1367 24.0417C28.0858 25.0167 27.9233 25.5458 27.7858 25.8975C27.6232 26.3315 27.3675 26.7246 27.0367 27.0492C26.7134 27.3802 26.3206 27.6353 25.8867 27.7958C25.5367 27.9325 24.9992 28.0958 24.0242 28.14C22.9625 28.1875 22.65 28.1983 19.975 28.1983C17.2992 28.1983 16.9867 28.1858 15.9258 28.1367C14.95 28.0858 14.4125 27.9233 14.0625 27.7858C13.6283 27.6252 13.2356 27.3692 12.9133 27.0367C12.5788 26.7156 12.3223 26.3222 12.1633 25.8867C12.0258 25.5367 11.8642 24.9992 11.8133 24.0242C11.7758 22.9742 11.7625 22.65 11.7625 19.9875C11.7625 17.3242 11.7758 16.9992 11.8133 15.9367C11.8642 14.9617 12.0258 14.425 12.1633 14.075C12.3383 13.6 12.5625 13.275 12.9133 12.9242C13.2625 12.575 13.5883 12.35 14.0625 12.1758C14.4125 12.0375 14.9383 11.875 15.9133 11.825C16.9758 11.7875 17.2883 11.775 19.9625 11.775L20 11.8ZM20 14.865C19.3257 14.865 18.6579 14.9978 18.0349 15.2559C17.4119 15.5139 16.8458 15.8922 16.369 16.369C15.8922 16.8458 15.5139 17.4119 15.2559 18.0349C14.9978 18.6579 14.865 19.3257 14.865 20C14.865 20.6743 14.9978 21.3421 15.2559 21.9651C15.5139 22.5881 15.8922 23.1542 16.369 23.631C16.8458 24.1078 17.4119 24.4861 18.0349 24.7441C18.6579 25.0022 19.3257 25.135 20 25.135C21.3619 25.135 22.668 24.594 23.631 23.631C24.594 22.668 25.135 21.3619 25.135 20C25.135 18.6381 24.594 17.332 23.631 16.369C22.668 15.406 21.3619 14.865 20 14.865ZM20 23.3333C18.1583 23.3333 16.6667 21.8417 16.6667 20C16.6667 18.1583 18.1583 16.6667 20 16.6667C21.8417 16.6667 23.3333 18.1583 23.3333 20C23.3333 21.8417 21.8417 23.3333 20 23.3333ZM26.5383 14.6625C26.5268 14.973 26.3953 15.267 26.1715 15.4826C25.9477 15.6982 25.6491 15.8186 25.3383 15.8186C25.0276 15.8186 24.729 15.6982 24.5052 15.4826C24.2814 15.267 24.1499 14.973 24.1383 14.6625C24.1383 14.3442 24.2648 14.039 24.4898 13.814C24.7148 13.5889 25.0201 13.4625 25.3383 13.4625C25.6566 13.4625 25.9618 13.5889 26.1869 13.814C26.4119 14.039 26.5383 14.3442 26.5383 14.6625Z" fill="#787878" />
												</svg>
											</Link>
											<Link href="https://www.linkedin.com/company/gravity-homes/" target='_black' title="Gravity Homes Linkedin" className='d-flex d-md-none align-items-center'>
												<svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
													<g clipPath="url(#clip0_4754_719)">
														<path d="M0.5 22.6211C0.5 16.2133 0.5 9.80624 0.5 3.3985C0.519531 3.31964 0.538411 3.24077 0.557943 3.16256C0.963542 1.5383 2.28906 0.501304 3.9668 0.501304C10.0137 0.5 16.0599 0.501955 22.1061 0.5C22.9115 0.5 23.623 0.756153 24.2487 1.25477C24.9414 1.80684 25.3288 2.54075 25.5 3.3985V22.6211C25.3815 23.1809 25.1829 23.705 24.832 24.1651C24.2695 24.9017 23.5176 25.3201 22.6191 25.4993H3.38086C2.82031 25.3814 2.29557 25.1819 1.83594 24.8313C1.09896 24.2694 0.678385 23.5186 0.5 22.6204V22.6211ZM10.5286 15.5811C10.5286 17.0932 10.5286 18.6047 10.5286 20.1169C10.5286 20.6266 10.6953 20.7954 11.1973 20.7967C11.832 20.798 12.4661 20.798 13.1009 20.7967C13.6204 20.7954 13.7682 20.6481 13.7689 20.1312C13.7695 18.5708 13.7643 17.0098 13.7715 15.4494C13.7741 14.8556 13.9036 14.286 14.2272 13.7782C14.6003 13.1936 15.1536 12.955 15.832 13.0117C16.5391 13.071 17.0013 13.4536 17.224 14.1256C17.3529 14.5148 17.4076 14.9163 17.4076 15.3249C17.4089 16.9342 17.4076 18.5435 17.4076 20.1534C17.4076 20.6324 17.5384 20.7687 18.0104 20.7706C18.7103 20.7739 19.4095 20.7732 20.1094 20.7706C20.5853 20.7687 20.7389 20.6181 20.7402 20.1436C20.7474 18.2254 20.7467 16.3072 20.6908 14.3896C20.668 13.6159 20.5286 12.8547 20.2077 12.1396C19.7962 11.2219 19.11 10.6216 18.1296 10.3739C17.3763 10.1836 16.6159 10.1914 15.8561 10.329C15.0872 10.4678 14.4603 10.8432 13.9844 11.467C13.944 11.5198 13.9141 11.6221 13.8255 11.5843C13.7487 11.5511 13.7767 11.4553 13.7747 11.3849C13.7702 11.2304 13.7747 11.0759 13.7715 10.9214C13.763 10.5428 13.6139 10.3928 13.2318 10.3909C12.5566 10.3883 11.8815 10.3896 11.2064 10.3902C10.6751 10.3902 10.5286 10.5369 10.5286 11.0707C10.528 12.5744 10.5286 14.0781 10.5286 15.5817V15.5811ZM8.98503 15.5993C8.98503 14.0787 8.98568 12.5587 8.98503 11.0381C8.98503 10.5356 8.83463 10.3896 8.32552 10.3883C7.69075 10.387 7.05599 10.387 6.42122 10.3883C5.91862 10.3896 5.74349 10.561 5.74349 11.059C5.74284 14.0755 5.74284 17.0919 5.74349 20.1084C5.74349 20.6103 5.93099 20.7947 6.44206 20.7967C7.06836 20.7987 7.69531 20.7993 8.32161 20.7967C8.80599 20.7947 8.98438 20.6168 8.98503 20.1364C8.98633 18.6243 8.98503 17.1121 8.98503 15.5993ZM5.28255 7.32814C5.2806 8.49549 6.20508 9.43015 7.36263 9.43146C8.52344 9.43276 9.46354 8.50266 9.46875 7.34899C9.47396 6.17903 8.5345 5.22742 7.37109 5.22547C6.22526 5.22351 5.2845 6.17056 5.28255 7.32879V7.32814Z" fill="#979797"/>
													</g>
													<defs>
														<clipPath id="clip0_4754_719">
														<rect width="25" height="25" fill="white" transform="translate(0.5 0.5)"/>
														</clipPath>
													</defs>
												</svg>
											</Link>
										</div>
									</div>
								</div>
							</Col>
						</> :
						<>
							<Col xl={6} sm={6} className='bgNavMob order-first order-md-2'>
								<div className='nav-left-content h-100 d-flex flex-column justify-content-between align-items-end z-index-1 position-relative'>
									<div className='nav-links-offCanvas d-flex flex-column'>
										<Link href='/about' onClick={toggleOffCanvas} title="Gravity Homes About Us">About Us</Link>
										<Link href='/project' onClick={toggleOffCanvas} title="Gravity Homes Projects">Projects</Link>
										<Link href='/living' onClick={toggleOffCanvas} title="Gravity Homes Living">Living</Link>
										<Link href='/blog' onClick={toggleOffCanvas} title="Gravity Homes Blog">Blog</Link>
										<Link href='/contact' onClick={toggleOffCanvas} title="Gravity Homes Contact">Contact</Link>
									</div>
									<div className='navOffCanvas-mobile'>
										<span className='me-3'>
											<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M20.9999 15.46L15.7299 14.85L13.2099 17.37C10.3711 15.9262 8.06368 13.6188 6.6199 10.78L9.1499 8.25L8.5399 3H3.0299C2.4499 13.18 10.8199 21.55 20.9999 20.97V15.46Z" fill="#17574B" />
											</svg>
										</span> (+91) 95389 44994
									</div>
								</div>
							</Col>
							<Col xl={6} sm={6} className='bgNav order-last order-md-1'>
								<div className='nav-left-content h-100 d-flex flex-column justify-content-center align-items-center text-white z-index-1 position-relative'>
									<div className='nav-form-offCanvas d-flex flex-column'>
										<Form className='newsletter-form m-auto' onSubmit={handleHeaderSubmit}>
											<div className='text-center get-in-tuh'>Get In touch</div>
											<div className='input-newsletter mb-2 mb-md-0'>
												<input type='text' className='input-newsletter-text' placeholder='Name' value={name} onChange={(e) => setName(e?.target?.value)}/>
												{errors.name && <p>{errors.name}</p>}
											</div>
											<div className='input-newsletter mb-2 mb-md-0'>
												<input type='text' className='input-newsletter-text' placeholder='Email' value={email} onChange={(e) => setEmail(e?.target?.value)}/>
												{errors.email && <p>{errors.email}</p>}
											</div>
											<div className='input-newsletter mb-2 mb-md-0'>
												<input type='text' className='input-newsletter-text' placeholder='Mobile Number'  maxLength={10} minLength={10} value={mobile} onChange={(e) => setMobile(e?.target?.value)}/>
												{errors.mobile && <p>{errors.mobile}</p>}
											</div>
											<div className='input-newsletter mb-2 mb-md-0'>
												<input type='text' className='input-newsletter-text' placeholder='Message' value={message} onChange={(e) => setMessage(e?.target?.value)}/>
												{errors.message && <p>{errors.message}</p>}
											</div>
											<div className='text-center explore-all-head'>
												<button className="link-explore" type='submit'  disabled={btnDisableStatus}>{buttonName}
													{btnDisableStatus ? '' : <span className="ms-3">
														<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 8H14.5M14.5 8L9.53226 3M14.5 8L9.53226 13" stroke="#fff" strokeWidth="1.5"></path></svg>
													</span> }
												</button>
											</div>
											{errorMessageStatus ? <p className=''>{errorMessage}</p> :''}
										</Form>
										<h3 className='header-offcanvas-headtxt d-none d-md-block'>
											A Culture <span>Committed to</span> Belonging.
										</h3>
									</div>
								</div>
							</Col>
						</>
					}
				</Row>
			</Offcanvas.Body>
		</>
	)
}

export default OffcanvasHeader