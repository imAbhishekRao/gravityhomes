import React, { useRef, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import staticStyle from './static.module.css';

import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

const InvestWithGravity = () => {
	const [showMore, setShowMore] = useState(false);
	const [showMore2, setShowMore2] = useState(false);
	const [showMore3, setShowMore3] = useState(false);

	const navigationPrevRef = useRef(null)
	const navigationNextRef = useRef(null)
	return (
		<>
			<div className={`static-page-style ${staticStyle.StaticPage} ${staticStyle.StaticPageInvest}`}>
				<div className={staticStyle.staticBanner} style={{ backgroundImage: 'url(/images/static-banner.webp)' }}>
					<div className='gravity-head-center  position-relative z-index-1'>
						<h1 className={`mb-0 text-center ${staticStyle.staticHeadText}`}><span>Invest with</span>
							Gravity
						</h1>
					</div>
				</div>
				<Container>
					<div className='spacer-5' />
					<Row>
						<Col md={12}>
							<div className={` ${staticStyle.investGravityHead}`}>
								<h2>“Beyond Walls,<br />We Build Homes”</h2>
								<h6>Building A Community</h6>
							</div>
						</Col>
					</Row>
					<Row>
						<Col md={12}>
							<div className={` ${staticStyle.gridInvestGravity}`}>
								<div className={` ${staticStyle.gridCols}`}>
									<div className={`position-relative ${staticStyle.gridColsMedia}`}>
										<Image
											src='/images/invest/1.svg'
											style={{ objectFit: 'contain' }}
											className='img-fluid'
											width='49'
											height='52'
											alt='Luxury Living'
										/>
									</div>
									<div className={` ${staticStyle.gridColsContent}`}>
										<h5>Affordable Luxury Living </h5>
										<p>A Unique Nature-Inclusive Model for Enriched Lifesyles Redefining The Urban Green</p>
									</div>
								</div>
								<div className={` ${staticStyle.gridCols}`}>
									<div className={`position-relative ${staticStyle.gridColsMedia}`}>
										<Image
											src='/images/invest/2.svg'
											style={{ objectFit: 'contain' }}
											className='img-fluid'
											width='50'
											height='43'
											alt='Luxury Living'
										/>
									</div>
									<div className={` ${staticStyle.gridColsContent}`}>
										<h5>Proven Appreciation & Long-Term Value</h5>
										<p>Proven Value Appreciation (60%-100%)* and Guaranteed Long-Term Returns</p>
									</div>
								</div>
								<div className={` ${staticStyle.gridCols}`}>
									<div className={`position-relative ${staticStyle.gridColsMedia}`}>
										<Image
											src='/images/invest/3.svg'
											style={{ objectFit: 'contain' }}
											className='img-fluid'
											width='67'
											height='53'
											alt='Luxury Living'
										/>
									</div>
									<div className={` ${staticStyle.gridColsContent}`}>
										<h5>Experience Calm within City Limits</h5>
										<p>Tucked Away from the Noise, Sustainable Luxury Living & No Surging Maintenance Costs</p>
									</div>
								</div>
								<div className={` ${staticStyle.gridCols}`}>
									<div className={`position-relative ${staticStyle.gridColsMedia}`}>
										<Image
											src='/images/invest/4.svg'
											style={{ objectFit: 'contain' }}
											className='img-fluid'
											width='49'
											height='52'
											alt='Luxury Living'
										/>
									</div>
									<div className={` ${staticStyle.gridColsContent}`}>
										<h5>Sustainability at the Core</h5>
										<p>Locally Sourced Natural Impact: Versatile Indian Kota Stones, Traditional Mud Blocks etc.</p>
									</div>
								</div>
								<div className={` ${staticStyle.gridCols}`}>
									<div className={`position-relative ${staticStyle.gridColsMedia}`}>
										<Image
											src='/images/invest/5.svg'
											style={{ objectFit: 'contain' }}
											className='img-fluid'
											width='49'
											height='49'
											alt='Luxury Living'
										/>
									</div>
									<div className={` ${staticStyle.gridColsContent}`}>
										<h5>Seamless Connectivity and Convenience</h5>
										<p>Strategically Positioned: Maximised & Hassle-Free Location Advantage</p>
									</div>
								</div>
								<div className={` ${staticStyle.gridCols}`}>
									<div className={`position-relative ${staticStyle.gridColsMedia}`}>
										<Image
											src='/images/invest/6.svg'
											style={{ objectFit: 'contain' }}
											className='img-fluid'
											width='53'
											height='44'
											alt='Luxury Living'
										/>
									</div>
									<div className={` ${staticStyle.gridColsContent}`}>
										<h5>Resale & Future Opportunities</h5>
										<p>An Average of N% High Resale Potential</p>
									</div>
								</div>
							</div>
						</Col>
					</Row>
					<Row className='justify-content-center'>
						<Col md={12} sm={12}>
							<div className='gravity-head-center'>
								<h6 className='mb-0 text-center ms-2 ms-md-0'>ESTEEMED <span>INVESTORS</span></h6>
							</div>
							<div className='spacer-4 mb-2' />
						</Col>
						<Col md={12} sm={12}>
							<div className={` ${staticStyle.gridInvestorsSec}`}>
								<div className={` ${staticStyle.gridInvestors}`}>
									<h6>PROCESS & AGREEMENT</h6>
									<ul className={` ${showMore ? `${staticStyle.showLess}` : `${staticStyle.showMore}`}`}>
										<li>Only an existing project property will be offered under the Sale Agreement.</li>
										<li>Cancellation/Rebooking is applicable only after successful Sanctioned Approvals.</li>
										<li>Once Sanctioned, Investors can sell the property to their contacts for potentially higher and quicker return rates.</li>
										<li>Please note, the Selling Price will be decided as per The Prevailing Market Rate for enhanced market compatibility.</li>
									</ul>
									<div className={` ${staticStyle.gridInvestorsLink}`}>
										<button href='/' onClick={() => setShowMore(!showMore)}>
											{showMore ?
											"See Less" : "See More"}
											<span>
												<svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
													<path d="M0.515625 4.9441H11.423M11.423 4.9441L7.55266 1.07373M11.423 4.9441L7.55266 8.81447" stroke="#121212" strokeWidth="1.05556" />
												</svg>
											</span>
										</button>
									</div>
								</div>
								<div className={` ${staticStyle.gridInvestors}`}>
									<h6>RETURNS ON BUY-BACK</h6>
									<ul className={` ${showMore2 ? `${staticStyle.showLess}` : `${staticStyle.showMore}`}`}>
										<li>Minimum 30% Return Guaranteed Buy-Back for a secure investment with Gravity Homes.</li>
										<li>Fixed Term Advantage: A reserved 2-year period is valid for your Sanctioned offer.</li>
										<li>Villa Ownership Simplified: Hassle-Free Villa Acquisition through our Assured Sale Agreement as mentioned in 1.</li>
										<li>Professional Peace of Mind: Gravity Homes is Committed to Providing a Straighforward, Secure and Sound Investment Plan.</li>
									</ul>
									<div className={` ${staticStyle.gridInvestorsLink}`}>
										<button href='/' onClick={() => setShowMore2(!showMore2)}>
											{showMore2 ?
											"See Less" : "See More"}
											<span>
												<svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
													<path d="M0.515625 4.9441H11.423M11.423 4.9441L7.55266 1.07373M11.423 4.9441L7.55266 8.81447" stroke="#121212" strokeWidth="1.05556" />
												</svg>
											</span>
										</button>
									</div>
								</div>
								<div className={` ${staticStyle.gridInvestors}`}>
									<h6>INVESTMENT PARTNERING</h6>
									<ul className={` ${showMore3 ? `${staticStyle.showLess}` : `${staticStyle.showMore}`}`}>
										<li>Enhanced Investment Opportunities: Exclusive Property Mortgage Offering for all investors committing an investment sum of 5 crore or more.</li>
										<li>Streamlined Sales Process: Once the sale is concluded, a prompt No Objection Certificate (NOC) will be obtained from the investor, similar to all standard procedures followed with the banks.</li>
										<li>Tailored Returns: A range of return plans available for individual consultations.</li>
										<li>Personalised Financial Goals: Gravity Homes is Committed to Providing Steady Investment Opportunities Personalised to Your Financial Goals.</li>
									</ul>
									<div className={` ${staticStyle.gridInvestorsLink}`}>
										<button href='/' onClick={() => setShowMore3(!showMore3)}>
											{showMore3 ?
											"See Less" : "See More"}
											<span>
												<svg xmlns="http://www.w3.org/2000/svg" width="13" height="10" viewBox="0 0 13 10" fill="none">
													<path d="M0.515625 4.9441H11.423M11.423 4.9441L7.55266 1.07373M11.423 4.9441L7.55266 8.81447" stroke="#121212" strokeWidth="1.05556" />
												</svg>
											</span>
										</button>
									</div>
								</div>
							</div>
						</Col>
						<Col md={12} sm={12}>							
							<div className='text-center explore-all-btn'>
								<Link href='/' className='link-explore'>
									Consult Now
									<span className='ms-3'>
										<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M0.5 8H14.5M14.5 8L9.53226 3M14.5 8L9.53226 13" stroke="#17574B" strokeWidth="1.5" />
										</svg>
									</span>
								</Link>
							</div>
							<div className='spacer-5' />
						</Col>
					</Row>

				</Container>
			</div>
		</>
	)
}

export default InvestWithGravity