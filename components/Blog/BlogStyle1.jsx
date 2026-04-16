import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import OtherSuggestions from './OtherSuggestions'
import { FacebookShareButton, FacebookIcon, LinkedinShareButton, LinkedinIcon, TwitterShareButton, TwitterIcon } from "react-share";
import { useRouter } from 'next/router'
import BreadcrumbBlock from '../Breadcrumb/BreadcrumbBlock'

const BlogStyle1 = () => {

	const location = useRouter();
	const pathurl = (typeof window !== 'undefined') ? window.location.origin + location.pathname : '';

	return (
	
		<>
			<div className='blog-banner-style' style={{ backgroundImage: 'url(/images/blog/1.jpeg)' }}>
				<Container className='z-index-1 position-relative'>
					<Row>
						<Col sm={12}>
							<Link href='https://www.gettyimages.in/detail/photo/original-facade-with-exposed-brickwork-royalty-free-image/1350389707?adppopup=true' className='blog-link-txt'>
								Photo via : Mario Marco via <span>https://www.gettyimages.in/detail/photo/original-facade-with-exposed-brickwork-royalty-free-image/1350389707?adppopup=true</span>
							</Link>
						</Col>
					</Row>
				</Container>
			</div>
			<div className='blog-content-wrapper'>
				<div className='spacer-4' />
				<Container>
					<Row className='position-relative'>
						<Col xs={6} sm={6} lg={6}>
							<Link href='/blog/' className='blog-link-back'>
								<span className='me-3'>
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M15.5 8L1.5 8M1.5 8L6.46774 13M1.5 8L6.46774 3" stroke="#17574B" strokeWidth="1.5" />
									</svg>
								</span>
								Back
							</Link>
						</Col>
						<Col xs={6} sm={6} lg={6}>
							<BreadcrumbBlock
								breadcrumb_item_first={'Home'}
								breadcrumb_item_second={'Blog'}
								breadcrumb_item_last={'Article'}
							/>
						</Col>
						<Col sm={12} lg={12}>
							<h1 className='heading-center-blog text-center'>How Physiological Routines Influence Design: <span>Homes that Build Good Health</span></h1>
						</Col>
						<Col sm={12} lg={12}>
							<div className='blog-flex-social d-flex align-items-center justify-content-between'>
								<div className='blog-by-muted'>By Gravity Homes, November 06, 2023</div>
								<ul className='blog-social-flex'>
									<li>
										<FacebookShareButton url={pathurl}>
											<FacebookIcon size={32} round={true} />
										</FacebookShareButton>
									</li>
									<li>
										<TwitterShareButton url={pathurl}>
											<TwitterIcon size={32} round={true} />
										</TwitterShareButton>

									</li>
									<li>
										<LinkedinShareButton url={pathurl}>
											<LinkedinIcon size={32} round={true} />
										</LinkedinShareButton>
									</li>
								</ul>
							</div>
						</Col>
					</Row>
					<div className='spacer-2_5' />
					<Row>
						<Col sm={12}>
							<div className='blog-desc-text'>
								<p className='mb-5'>The term ‘Circadian Rhythm’ refers to your daily cycle and everyday routine of the body. The concept holds immense value in human-centric design thinking where homes are strategically planned to influence behaviour as well as to improve the physiological functions of the body temperature, blood pressure, metabolic rate etc. This makes way for a comfortable experience that is responsive to your needs.</p>

								<h6 className='mb-2'>Wavelength For Wellness</h6>
								<p className='mb-5'>Architects often amplify that spaces affect our biological clocks with research linking quality daylight with human health. It is also important to note that the time of the day, with the duration, colours and lighting could also have a psychological impact and drive us subconsciously. We often associate a particular hue, dimness, and temperature with the start of the end of the day, thereby changing our connection with what spectrum we experience.</p>

								<h6 className='mb-2'>How Do We Achieve It?</h6>
								<p className='mb-5'>By optimising our intake of electric light, with different apertures of height and materials that aid climate control and ventilation, we can create a space that champions your lifestyle.</p>
								<p className='mb-5'>Material Focus : Sustainability and Design</p>

								<ul>
									<li><strong>A Palatial High Roof Airflow</strong> that stimulates a sense of calm for a comfortable ambience</li>
									<li><strong>Indoor Skylights</strong> that allow room for natural lighting and engaging with the outdoors</li>
									<li><strong>Traditional Mud Block Designs</strong> are again gaining appreciation in sustainable living communities for their remarkable and environment-friendly climate control</li>
									<li><strong>Rajasthani Kota Stone Flooring</strong> is another traditional flooring option that allows a comfortable barefoot experience throughout the season</li>
								</ul>
								<div className='blog-images-flex d-flex mt-4'>
									<div className='blog-images-media position-relative col-6' style={{ backgroundImage: 'url(/images/blog/1_1.jpeg)' }}>
										<span>Photo via{' : '}
											<Link href='https://ifj.co.in/wp-content/uploads/2019/12/insta-2-12.jpg' className='blog-img-liink'>https://ifj.co.in/wp-content/uploads/2019/12/insta-2-12.jpg</Link>
										</span>
									</div>
									<div className='blog-images-media position-relative col-6' style={{ backgroundImage: 'url(/images/blog/1_2.jpeg)' }}>
										<span>Photo via{' : '}
											<Link href='https://earthstoneglobal.co.in/images/ty3.jpg' className='blog-img-liink'>https://earthstoneglobal.co.in/images/ty3.jpg</Link>
										</span>
									</div>
								</div>
								<div className='spacer-4' />
								<h6 className='mb-2'>Homes that Converse with Nature</h6>
								<p className='mb-5'>Nestled in Turahalli Forest in the heart of South Bangalore, Gravity Aranya presents luxury forest villaments and mindful spaces guided by biophilic architecture. Explore the expansive landscape that enriches your quality of living and provides you with an array of modern amenities harmoniously complemented by a personal front yard and backyard for each villament unit. Experience a world which seeks a connection with nature and serves as an extension of your energy.</p>
								<div className='spacer-4' />
								<div className='d-inline-block btn-border btn-center-align'>
									<Link href="/project/gravity-aranya/" className='btn-bordered-theme'>Know more
										<span className="ms-3">
											<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 8H14.5M14.5 8L9.53226 3M14.5 8L9.53226 13" stroke="#17574B" strokeWidth="1.5"></path></svg>
										</span>
									</Link>
								</div>
								<div className='spacer-5' />
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<div className='blog-suggestion'>
				<div className='spacer-5' />
				<Container>
					<Row>
						<Col sm={12}>
							<div className="gravity-head-center">
								<h6 className="mb-0 text-start">Next Read on <span>Homes</span></h6>
							</div>
						</Col>
						<Col sm={12}>
							<OtherSuggestions />
						</Col>
						<div className="text-center explore-all-links">
							<Link className="link-explore" href="/faqs">Explore All
								<span className="ms-3">
									<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M0.5 8H14.5M14.5 8L9.53226 3M14.5 8L9.53226 13" stroke="#17574B" strokeWidth="1.5"></path></svg>
								</span>
							</Link>
						</div>
					</Row>
				</Container>
				<div className='spacer-5' />
			</div>
		</>
	)
}

export default BlogStyle1