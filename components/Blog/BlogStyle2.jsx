import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import OtherSuggestions from './OtherSuggestions'
import { FacebookShareButton,FacebookIcon, LinkedinShareButton, LinkedinIcon,TwitterShareButton,TwitterIcon } from "react-share";
import { useRouter } from 'next/router'
import BreadcrumbBlock from '../Breadcrumb/BreadcrumbBlock'


const BlogStyle2 = () => {

	const location = useRouter();
	const pathurl = (typeof window !== 'undefined' ) ? window.location.origin + location.pathname : '';
	
	return (
		<>
			<div className='blog-banner-style' style={{ backgroundImage: 'url(/images/blog/2.jpeg)' }}>
				<Container className='z-index-1 position-relative'>
					<Row>
						<Col sm={12}>
							<Link href='https://static.dezeen.com/uploads/2018/12/stepping-park-house-vtn-architects-residential-architecture-vietnam_dezeen_1704_hero2-1-852x480.jpg' className='blog-link-txt'>
							Photo via : <span>https://static.dezeen.com/uploads/2018/12/stepping-park-house-vtn-architects-residential-architecture-vietnam_dezeen_1704_hero2-1-852x480.jpg</span>
							</Link>
						</Col>
					</Row>
				</Container>
			</div>
			<div className='blog-content-wrapper'>
				<div className='spacer-4' />
				<Container>
					<Row className='justify-content-center position-relative'>
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
							<h1 className='heading-center-blog text-center'>Sustainable Luxury Living: <span>The Rise of Eco-Friendly Villas in Bangalore</span></h1>
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
								<p className='mb-5'>Post-COVID, our workspaces have quickly adapted to hybrid and work-from-home models, and Namma Bengaluru is one of the most inspiring markets for sustainable living homes. At Gravity Homes, we meet homeowners actively seeking luxury and safety with a keen emphasis on connection to nature. Preserving greenery is a priority, and today, people dream of the calm of nature with lush surroundings that nurture their family’s lifestyles, also allowing quality moments with themselves.</p>

								<h6 className='mb-2'>Biophilic Architecture</h6>
								<p className='mb-5'>In Architectural Design, Biophilia refers to incorporating natural elements and creating a nature-like environment that has a proven positive impact on human well-being by improving quality of life, empowering lifestyle choices, reducing city stress and more. In short, it creates a space that promotes human comfort, health, and productivity.</p>

								<h6 className='mb-2'>Your Home of Quality Sunlight</h6>
								<p className='mb-5'>Experience a quality balance of daylight and electric light with strategized indoor skylights that provide an inlet for natural lighting without compromising privacy. Take in the expanse of your surroundings with domal aluminium windows that not only sport modern aesthetics but are also recyclable and better for the environment.</p>
								
								<h6 className='mb-2'>Thermal Comfort and the Science of Natural Textures</h6>
								<p className='mb-5'>One of the earliest building materials utilised in construction—mud blocks are made from natural soil, having high density and thermal mass, which makes them an outstanding choice for thermal comfort with an average difference of 2-3°C that allows for comfortable climate control and healthy indoor air. What’s more? The natural colours and textures are a soothing experience for the eyes and evoke a tangible connection to the earth in the comfort of your home.</p>

								<h6 className='mb-2'>All of It and More: Luxury Forest Villaments at Gravity Aranya</h6>
								<p>Witness luxury living embraced in the lush and rich landscape of Turahalli Forest in the heart of South Bangalore. Experience Duplex and Triplex Forest Villaments at Gravity Aranya that come with an array of modern amenities harmoniously complemented by a personal front yard and backyard for each villament unit. A homegrown touch of luxury and sustainability for sublime comfort.</p>
							</div>
						</Col>
					</Row>
					<div className='spacer-5' />
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
							<Link className="link-explore" href="/faqs/">Explore All
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

export default BlogStyle2