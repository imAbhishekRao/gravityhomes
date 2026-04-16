import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Contact from '../Home/Contact';
import Link from 'next/link';

const Index = () => {
	return (
		<>
			<div className='contact-banner' style={{ backgroundImage: 'url(/images/contact_banner.webp)' }}>
				<Container>
					<Row className='justify-content-center'>
						<Col md={12} sm={12}>
							<div className='gravity-head-center position-relative z-index-1'>
								<h1 className='text-center contact-head-txt'>Contact Us</h1>
							</div>
						</Col>
						<Col md={4} sm={12}>
							<div className='gravity-head-center position-relative z-index-1'>
								<p>We’d love to know more about the spaces that make you feel at home.</p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>

			<div className='about-widget contact-widget contact-page-lyout'>
				<div className='spacer-4' />
				<Container>
					<Row className='justify-content-center'>
						<Col sm={10} md={10} xl={12}>
							<h5>Your home Built to Converse</h5>
						</Col>
						<Col sm={10} md={10} xl={10} className='col-10'>
							<Contact />
							
							<div className='scroll-down-style'>
								<Link href='#contactScroll' role='button'>
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 7L12 18L23 7" stroke="#121212" strokeWidth="1.5" />
									</svg>
								</Link>
							</div>
						</Col>
					</Row>
				</Container>
				<div className='spacer-5' id='contactScroll' />
			</div>

			<div className='about-widget contact-widget'>
				<Container>
					<Row className='justify-content-center'>
						<Col sm={8}  className='px-0 px-md-3'>
							<div className='contact-block-widget position-relative'> 
								<div className='z-index-1 position-relative w-100 flex-col-contact'>
									<h6 className='mb-0'>Corporate
										<span>Office</span>
									</h6>
									<p className='mb-0 text-center'>Gravity Homes#18B, Bharat Apartments, 3rd floor, 5th Main Road, <span className='d-block'>39th Cross, 5th Block, Jayanagar, Bengaluru, Karnataka 560041</span></p>
									<div className='d-flex flex-column align-items-center info-contact-num-flex'>
										<div className='info-contact-num d-flex align-items-center'>
											<div className='contact-num-style'>
												<span className='me-2 me-md-4'>
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M20.9984 15.46L15.7284 14.85L13.2084 17.37C10.3696 15.9262 8.06222 13.6188 6.61844 10.78L9.14844 8.25L8.53844 3H3.02844C2.44844 13.18 10.8184 21.55 20.9984 20.97V15.46Z" fill="white" />
													</svg>
												</span>+91 9513145554
											</div>
											<div className='contact-num-style'>
												+91 9739011616
											</div>
										</div>
										<div className='info-contact-num d-flex align-items-center'>
											<div className='contact-num-style'>
												<span className='me-2 me-md-4'>
													<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M20.6283 4.84521H3.37516C3.21248 4.84541 3.05653 4.91013 2.94152 5.02518C2.82651 5.14024 2.76185 5.29622 2.76172 5.4589V6.69345C2.76172 6.75033 2.8234 6.81562 2.8738 6.84202L11.9424 12.0219C11.9657 12.0352 11.992 12.0421 12.0188 12.0419C12.0461 12.0419 12.073 12.0346 12.0965 12.0207L20.8911 6.84706C20.9405 6.81946 21.0716 6.7465 21.1208 6.7129C21.1803 6.67234 21.2417 6.63562 21.2417 6.5629V5.45866C21.2415 5.29602 21.1768 5.1401 21.0618 5.0251C20.9468 4.9101 20.7909 4.84541 20.6283 4.84521ZM21.1652 8.55489C21.1416 8.54143 21.1148 8.53443 21.0876 8.5346C21.0605 8.53477 21.0338 8.5421 21.0104 8.55586L16.0335 11.4841C16.0136 11.4957 15.9967 11.5115 15.9838 11.5305C15.971 11.5495 15.9625 11.5712 15.9592 11.5939C15.9559 11.6166 15.9577 11.6398 15.9645 11.6617C15.9713 11.6836 15.983 11.7037 15.9987 11.7205L20.9763 17.0862C20.9905 17.1017 21.0079 17.114 21.0272 17.1225C21.0465 17.1309 21.0673 17.1352 21.0884 17.1351C21.129 17.1351 21.168 17.1189 21.1967 17.0901C21.2255 17.0614 21.2417 17.0224 21.2417 16.9818V8.6881C21.2418 8.66112 21.2348 8.63459 21.2214 8.6112C21.2079 8.58781 21.1885 8.56838 21.1652 8.55489ZM14.5992 12.4674C14.5756 12.4416 14.5439 12.4248 14.5093 12.4196C14.4748 12.4145 14.4395 12.4213 14.4094 12.4391L12.4145 13.6129C12.2976 13.6804 12.1652 13.7164 12.0302 13.7173C11.8952 13.7182 11.7624 13.6839 11.6446 13.6179L9.889 12.615C9.86066 12.5988 9.82791 12.5921 9.79551 12.5958C9.7631 12.5996 9.73272 12.6135 9.70876 12.6356L3.04204 18.8195C3.02456 18.8358 3.01114 18.856 3.00285 18.8784C2.99456 18.9009 2.99163 18.9249 2.99429 18.9487C2.99694 18.9725 3.00512 18.9953 3.01816 19.0154C3.0312 19.0354 3.04875 19.0522 3.0694 19.0643C3.17308 19.1252 3.27316 19.1543 3.37492 19.1543H20.4516C20.4815 19.1543 20.5108 19.1456 20.5357 19.1292C20.5607 19.1127 20.5803 19.0893 20.592 19.0619C20.604 19.0345 20.6077 19.0043 20.6027 18.9749C20.5976 18.9455 20.5841 18.9183 20.5637 18.8965L14.5992 12.4674ZM8.24188 11.9041C8.25954 11.8878 8.27311 11.8675 8.2815 11.845C8.28989 11.8224 8.29286 11.7983 8.29017 11.7744C8.28749 11.7505 8.27922 11.7275 8.26603 11.7074C8.25285 11.6873 8.23512 11.6706 8.21428 11.6586L2.99044 8.6749C2.96713 8.66166 2.94075 8.65478 2.91394 8.65493C2.88713 8.65509 2.86084 8.66228 2.83768 8.67579C2.81452 8.6893 2.79532 8.70866 2.78199 8.73191C2.76866 8.75517 2.76167 8.78153 2.76172 8.80833V16.6371C2.76155 16.667 2.77015 16.6963 2.78646 16.7214C2.80277 16.7464 2.82607 16.7662 2.85348 16.7781C2.88089 16.7901 2.9112 16.7937 2.94066 16.7886C2.97012 16.7835 2.99744 16.7699 3.01924 16.7495L8.24188 11.9041Z" fill="white" />
													</svg>
												</span>hr@gravityhomes.in
											</div>
											<div className='contact-num-style'>marketing@gravityhomes.in</div>
										</div>
									</div>
								</div>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<div className='padding-120'>
			<div className='contact-team-widget'>
				<div className='team-media-block' style={{ backgroundImage: 'url(/images/contact-team.webp)' }} />

				<div className='team-content-info'>
					
					<h5>The Most Rewarding of Journeys Are All With A <span>Team Effort</span></h5>
					<p>Become a part of Team Gravity, our close source of everyday inspiration. We are looking for people who recognize and appreciate the positive impact we are creating in the lives of our clients. As we design community spaces for them, we also value active collaboration and a balanced approach to support your growth. Meet us today to learn how you cancontribute to Gravity Living.</p>
					<div className="btn-border">
						<Link href='/career' type='button' className='btn-bordered-theme d-inline-block'>
							Join Now <span>
								<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0.5 8.5H14.5M14.5 8.5L9.53226 3.5M14.5 8.5L9.53226 13.5" stroke="#17574B" strokeWidth="1.5" />
								</svg>
							</span>
						</Link>
					</div>
				</div>
			</div>
			</div>
		</>
	)
}

export default Index