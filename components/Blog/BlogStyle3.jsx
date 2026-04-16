import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import OtherSuggestions from './OtherSuggestions'
import { FacebookShareButton,FacebookIcon, LinkedinShareButton, LinkedinIcon,TwitterShareButton,TwitterIcon } from "react-share";
import { useRouter } from 'next/router'
import BreadcrumbBlock from '../Breadcrumb/BreadcrumbBlock'

const BlogStyle3 = () => {

	const location = useRouter();
	const pathurl = (typeof window !== 'undefined' ) ? window.location.origin + location.pathname : '';
	
	return (
		<>
			<div className='blog-banner-style blog_3_sm' style={{ backgroundImage: 'url(/images/blog/3.png)' }}>
				<Container className='z-index-1 position-relative'>
					<Row>
						<Col sm={12}>
							<Link href='https://ifj.co.in/wp-content/uploads/2019/12/featured-and-insta-1-8.jpg' className='blog-link-txt'>
							Photo via : <span>https://ifj.co.in/wp-content/uploads/2019/12/featured-and-insta-1-8.jpg</span>
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
							<h1 className='heading-center-blog text-center'>Sustainable Living Materials That Everyone Is Rooting For: <span>Nature-Inclusive Living for a Better Tomorrow</span></h1>
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
								<p className='mb-5'>Like everything around us, living spaces are changing around the world with the rising environmental concerns. In architecture, traditional and sustainable materials are being utilised to curb the concrete and get closer to earth elements that are not only as durable but also more advantageous with their capabilities of climate control, proper ventilation and more. Increasingly, luxury living in the cities is looking for a sense of space and calm that one usually finds missing in urban dwellings. A rooted experience in tradition and luxury, let's look at some masterpieces of materials that improve the scope of this breathable innovation:</p>

								<h6 className='mb-2'>Traditional Mud Blocks</h6>
								<p className='mb-5'>Mud blocks are generally associated with earthen buildings, but increasingly, this sustainable material is becoming characteristic of luxury living spaces designed in sync with the environment. These air-dried bricks contain a mixture of clay, sand, and other binding materials like rice husks or straw, all of which make them highly breathable and energy-efficient. With their high density and high thermal mass, they are known to provide indoor air with an average difference of up to 2°C for comfortable climate control.</p>

								<h6 className='mb-2'>Rajasthani Kota Stones</h6>
								<p className='mb-5'>The famous Kota Stones are a fine grain variety of limestone quartered in Kota, Rajasthan. Multi-purpose and multi-beneficial, they are used in flooring, garden paving, wall cladding and more. Not only are they non-slippery, highly durable and fireproof but are also completely non-toxic and non-porous which means they have great resistance to heat and provide a comfortable, non-slippery barefoot experience at home.</p>
								
								<h6 className='mb-2'>Historical Cobble Stones</h6>
								<p className='mb-5'>Elegant, rustic-looking natural cobblestones have a rich history around various architectural styles, their versatility reflected in designs ranging from Roman to Victorian, and more. Rounded and smooth, these are typically used for paving roads and landscaping in gardens. Their harmonious appearance and timeless aesthetics lend them a classic and attractive aura that's hard to miss. In short, an effortless, low-maintenance and durable material that is as modern as traditional.</p>

								<h6 className='mb-2'>A Home that Values Your Being and The Earth's:</h6>
								<p>With more than a decade of experience, Gravity Homes offers a unique amalgamation of enriching community living and private comfort with a host of integrated amenities and meaningful differentiators of locations, proven appreciation and promising investments. We don't just create luxury. We create memorable luxury. Have a look at Our Projects as we work towards redefining the journey of community lifestyles with luxury and sustainability.</p>
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

export default BlogStyle3