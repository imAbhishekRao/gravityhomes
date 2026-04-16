import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import OtherSuggestions from './OtherSuggestions'
import { FacebookShareButton,FacebookIcon, LinkedinShareButton, LinkedinIcon,TwitterShareButton,TwitterIcon } from "react-share";
import { useRouter } from 'next/router'
import BreadcrumbBlock from '../Breadcrumb/BreadcrumbBlock'

const BlogStyle4 = () => {

	const location = useRouter();
	const pathurl = (typeof window !== 'undefined' ) ? window.location.origin + location.pathname : '';
	
	return (
		<>
			<div className='blog-banner-style' style={{ backgroundImage: 'url(/images/blog/4.jpeg)' }}>
				<Container className='z-index-1 position-relative'>
					<Row>
						<Col sm={12}>
							<Link href='https://1.bp.blogspot.com/-X5oZm4_N1M0/U_jH0wAsY1I/AAAAAAAAs1Q/TA7KYbOiHZA/s1600/lebua_sky_bar_bangkok.passion4luxury-5.jpg' className='blog-link-txt'>
							Photo via : <span>https://1.bp.blogspot.com/-X5oZm4_N1M0/U_jH0wAsY1I/AAAAAAAAs1Q/TA7KYbOiHZA/s1600/lebua_sky_bar_bangkok.passion4luxury-5.jpg</span>
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
							<h1 className='heading-center-blog text-center'>Remarkable Evolution of North Bangalore: <span> The Epicentre of Growth and Investment Opportunity</span></h1>
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
								<p className='mb-5'>North Bangalore, once a dormant region, has transformed into a bustling nexus of growth and opportunity. The meteoric rise of this area as a prime real estate destination is not accidental; it's a result of strategic advantages and a confluence of key factors driving its exponential growth.</p>

								<h6 className='mb-2'>Tech Giants and Economic Boom</h6>
								<p className='mb-5'>The presence of mighty tech parks such as Manyatha and other IT giants within North Bangalore is the catalyst behind its immense growth. The locality houses significant tech hubs and corporations, making it an attractive hub for tech-driven businesses and professionals seeking a vibrant work environment.</p>

								<h6 className='mb-2'>Connectivity at Its Best</h6>
								<p className='mb-5'>Proximity to the Kempegowda International Airport is a game-changer. The convenience of reaching and departing from the airport is a major draw for businesses and residents. North Bangalore is well-connected to the city via the purple line of the metro, state-level buses, the NICE Peripheral Ring Road, and ongoing metro expansions, ensuring seamless transit options.</p>
								
								<h6 className='mb-2'>Abundant Recreational Options</h6>
								<p className='mb-5'>The area isn't just about work; it offers a plethora of recreational activities. Restaurants, cafes, breweries, theme parks, malls, shopping centres, local markets, and cinema halls dot the landscape, providing ample options for leisure and entertainment.</p>

								<h6 className='mb-2'>Essential Amenities Within Reach</h6>
								<p className='mb-5'>Access to essential amenities, including numerous esteemed educational institutions and multispeciality healthcare centres, makes North Bangalore an ideal place for families and professionals seeking a well-rounded living environment. This availability of necessities adds a layer of convenience and comfort for residents.</p>

								<h6 className='mb-2'>Affordable Real Estate Potential</h6>
								<p className='mb-5'>Compared to South Bangalore, the price point in North Bangalore is relatively lower. This affordability combined with the promising developmental phase of the area makes it an attractive investment opportunity for both property buyers and investors.</p>

								<h6 className='mb-2'>Investment and Rental Opportunities</h6>
								<p className='mb-5'>The thriving IT centres in North Bangalore not only offer excellent job prospects but also present lucrative opportunities for capital investment and rental income. The high demand for housing and commercial spaces from the booming job market amplifies the potential for significant returns on investment.</p>
								<p className='mb-5'>North Bangalore has emerged as the hotspot for real estate investment and a burgeoning residential haven. Its strategic location, infrastructure development, and the confluence of business and leisure opportunities make it an enticing prospect for those seeking a blend of urban convenience and a high-quality lifestyle.</p>
								<p>As the region continues to flourish, real estate and property investments in the area are on the rise. Look out for our upcoming projects that have already garnered significant attention from both homebuyers and investors. We believe in providing excellent value with each project through our innovative designs, quality construction, and Sustainable development at strategic locations. To know more about us, check out our project portfolio.</p>
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

export default BlogStyle4