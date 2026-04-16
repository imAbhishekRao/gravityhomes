import React, { useRef, useState } from 'react';
import { Container, Col, Row, Accordion } from 'react-bootstrap';

// Master Plan Zoom Image
import ImageZoom from "react-image-zooom";

import livingStyles from '../Living/living.module.css';
import projectStyle from './projects.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectFade, Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import EnquireForm from './EnquireForm';
import Modal from 'react-bootstrap/Modal';

// Scroll
import { Link, Element, animateScroll as scroll, scrollSpy } from 'react-scroll';

import Image from 'next/image';
import LinkTag from 'next/link';
import { whatsappShareURL } from '@/src/util/util';

const GravityThanisandra = () => {

	const [modalShow, setModalShow] = useState(false);

	const handleClose = () => setModalShow(false);
	const handleShow = () => setModalShow(true)

	const whatsappShare = () => {
		const whatsappLink = whatsappShareURL();
		openInNewTab(whatsappLink);
	}
	const openInNewTab = url => {
		window.open(url, '_blank', 'noopener,noreferrer');
	};

	// Video
	const videoRef = useRef();
	const [stop, setStop] = useState(false);

	const handleVideo = () => {
		setStop(!stop);
		if (stop === true) {
			videoRef.current.pause();
		} else {
			videoRef.current.play();
		}
	};

	// Custom Navigation
	const navigationPrevRef = useRef(null);
	const navigationNextRef = useRef(null);

	// Modal Floor North
	const [modalNorthShow, setModalNorthShow] = useState(false);

	const handleNorthClose = () => setModalNorthShow(false);
	const handleNorthShow = () => setModalNorthShow(true);


	return (
		<>
			<div className={`gravityBgProject-html ${projectStyle.gravityBgProject} ${projectStyle.gravityThanisandraBg}`} style={{ backgroundImage: 'url(/images/projects/Thanisandra/sky_forest_banner.webp)', backgroundSize: '100% 165.762%', backgroundPosition: '0px -54.763px' }}>
				<Container className={`z-index-1 position-relative ${projectStyle.projectsContainer}`}>
					<Row className={`justify-content-between align-items-md-end ${projectStyle.projectsRow}`}>
						<Col sm={12} md={6} className='order-md-first d-flex flex-column justify-content-between'>
							<div className='align-items-start d-flex justify-content-start flex-column'>
								<button type='button' className='btn new-launch-btn mb-2 d-none d-md-inline-block'>New Launch</button>
								<h2 className={`text-white ${projectStyle.projectsRowThanisandra}`}>
									INDIA’S FIRST BI-LEVEL<br /><span>MIYAWAKI APARTMENTS</span>
								</h2>
							</div> 
							<div className={`spacer-4 ${projectStyle.spacer__0}`} />

							<div className={projectStyle.projectLogoFlex}>
								<div className={`ps-0 pb-0 ${projectStyle.projectLogoMda}`}>
									<Image src='/images/sky-forest.png' className='img-fluid' alt='Sky Forest' width='147' height='56' />
								</div>
								<p className='mb-0'>Starting from ₹2 Cr*</p>
								<div className="explore-all-btn white-btn">

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
										<EnquireForm handleClose={handleClose} />
									</Modal>



									<button className="link-explore ms-4" type='button' onClick={() => whatsappShare()}>
										Schedule Site Visit
										<span className="ms-3">
											<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M0.5 8H14.5M14.5 8L9.53226 3M14.5 8L9.53226 13" stroke="#EFEFEF" strokeWidth="1.5"></path>
											</svg>
										</span>
									</button>
								</div>
							</div>
						</Col>
					</Row>
					<div className='spacer-4' />
				</Container>
			</div>
			<div className={`d-md-block d-none ${projectStyle.projectHeader}`}>
				<Container>
					<ul className={` ${projectStyle.projectHeaderScroll}`}>
						<li className={` ${projectStyle.projectHeaderLinks}`}>
							<Link
								to='aboutSection'
								activeClass={` ${projectStyle.projectHeaderLinksActive}`}
								spy={true}
								smooth={true}
								offset={-117}
								duration={500}
							>About</Link>
						</li>
						<li className={` ${projectStyle.projectHeaderLinks}`}>
							<Link 
								to='assetsSection' 
								activeClass={` ${projectStyle.projectHeaderLinksActive}`} 
								spy={true} 
								smooth={true} 
								offset={-117} 
								duration={500}
							>Assets</Link>
						</li>
						<li className={` ${projectStyle.projectHeaderLinks}`}>
							<Link 
								to='highlightsSection' 
								activeClass={` ${projectStyle.projectHeaderLinksActive}`} 
								spy={true} 
								smooth={true} 
								offset={-117} 
								duration={500}
							>Highlights</Link>
						</li>
						<li className={` ${projectStyle.projectHeaderLinks}`}>
							<Link 
								to='pricingSection' 
								activeClass={` ${projectStyle.projectHeaderLinksActive}`} 
								spy={true} 
								smooth={true} 
								offset={-117} 
								duration={500}
							>Pricing</Link>
						</li>
						<li className={` ${projectStyle.projectHeaderLinks}`}>
							<Link
								to='layoutSection'
								activeClass={` ${projectStyle.projectHeaderLinksActive}`}
								spy={true}
								smooth={true}
								offset={-117}
								duration={500}
							>Layout</Link>
						</li>
						<li className={` ${projectStyle.projectHeaderLinks}`}>
							<Link
								to='amenitiesSection'
								activeClass={` ${projectStyle.projectHeaderLinksActive}`}
								spy={true}
								smooth={true}
								offset={-117}
								duration={500}
							>Amenities</Link>
						</li>
						{/* <li className={` ${projectStyle.projectHeaderLinks}`}>
							<Link 
								to='gallerySection' 
								activeClass={` ${projectStyle.projectHeaderLinksActive}`} 
								spy={true} 
								smooth={true} 
								offset={-117} 
								duration={500}
							>Gallery</Link>
						</li> */}
						<li className={` ${projectStyle.projectHeaderLinks}`}>
							<Link
								to='faqsSection'
								activeClass={` ${projectStyle.projectHeaderLinksActive}`}
								spy={true}
								smooth={true}
								offset={-117}
								duration={500}
							>FAQ's</Link>
						</li>
					</ul>
				</Container>
			</div>
			<div className={`gravityBgProject-html ${projectStyle.projectInfoHighlights} ${projectStyle.overViewInfoThans}`}>
				<Container>
					<Row className='justify-content-center'>
						<Col sm={12} md={10} lg={7} className='text-center'>
							<LinkTag href='#aboutSections' role='button' className={`mb-0 ${projectStyle.iconArrowDown}`}>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1 7L12 18L23 7" stroke="#121212" strokeWidth="1.5" />
								</svg>
							</LinkTag>
						</Col>
					</Row>
				</Container>

				<Element className={`scrollSection ${projectStyle.overViewInfo}`} name="aboutSection" id='aboutSection'>
					<div className='spacer-5' id='aboutSections' />
					<Container>
						<Row className='justify-content-between'>
							<Col md={12} className='order-first d-md-none'>
								<h2 className={`mb-0 ${projectStyle.projectStyleHeading} ${projectStyle.projectStyleHeadingTxtBlc}`}>About</h2>
								<div className='spacer-4' />
							</Col>
							<Col sm={12} md={5} lg={4} className='order-last order-md-0'>
								<div className={`mb-4 ${projectStyle.aboutHighlightedLocat}`}>
									<div className={` ${projectStyle.aboutHighlightedIco}`}>
										<span>
											<svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M7 9.65527C6.33696 9.65527 5.70107 9.39188 5.23223 8.92304C4.76339 8.4542 4.5 7.81831 4.5 7.15527C4.5 6.49223 4.76339 5.85635 5.23223 5.38751C5.70107 4.91867 6.33696 4.65527 7 4.65527C7.66304 4.65527 8.29893 4.91867 8.76777 5.38751C9.23661 5.85635 9.5 6.49223 9.5 7.15527C9.5 7.48358 9.43534 7.80867 9.3097 8.11198C9.18406 8.4153 8.99991 8.69089 8.76777 8.92304C8.53562 9.15519 8.26002 9.33934 7.95671 9.46497C7.65339 9.59061 7.3283 9.65527 7 9.65527ZM7 0.155273C5.14348 0.155273 3.36301 0.892771 2.05025 2.20553C0.737498 3.51828 0 5.29876 0 7.15527C0 12.4053 7 20.1553 7 20.1553C7 20.1553 14 12.4053 14 7.15527C14 5.29876 13.2625 3.51828 11.9497 2.20553C10.637 0.892771 8.85652 0.155273 7 0.155273Z" fill="#17574B" />
											</svg>
										</span>
									</div>
									<div className={` ${projectStyle.aboutHighlightedAdr}`}>
										<span>Thanisandra, North Bengaluru</span>
									</div>
									<div className={` ${projectStyle.aboutHighlightedIco}`}>
										<span>
											<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M20.9984 15.6153L15.7284 15.0053L13.2084 17.5253C10.3696 16.0815 8.06222 13.7741 6.61844 10.9353L9.14844 8.40527L8.53844 3.15527H3.02844C2.44844 13.3353 10.8184 21.7053 20.9984 21.1253V15.6153Z" fill="#17574B" />
											</svg>
										</span>
									</div>
									<div className={` ${projectStyle.aboutHighlightedNum}`}>
										<span>+91 9513145554</span>
									</div>
								</div>
							</Col>
							<Col sm={12} md={6} lg={7}>
								<div className={`mb-2 ${projectStyle.overViewTxt} ${projectStyle.overViewTxttext}`}>
									<h1 className={` ${projectStyle.fontFamilyAvenir}`}>Gravity Sky Forest - Overview</h1>

									<p className='mb-0'>Located in the prime northern hub of Bangalore, Gravity Thanisandra brings the home to your apartment. Meet luxury home apartments with a blend of biophilia. Spanning across 4 acres and 3 community towers, each housing 27 floors, the project showcases avante-garde urban green infrastructure.</p>
								</div>
								<div className={`pt-4 ${projectStyle.overViewRera}`}>
									<div className={` ${projectStyle.aboutHighlighted}`}>
										<div className={` ${projectStyle.projectHighlightFlex}`}>
											<span>4+</span>
											<span>ACRES</span>
										</div>
										<div className={` ${projectStyle.projectHighlightFlex}`}>
											<span>28</span>
											<span>FLOORS</span>
										</div>
										<div className={` ${projectStyle.projectHighlightFlex}`}>
											<span>3</span>
											<span>TOWERS </span>
										</div>
										<div className={` ${projectStyle.projectHighlightFlex}`}>
											<span>252</span>
											<span>UNITS </span>
										</div>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
					<div className='spacer-5' />
				</Element>

				<Element className={` ${projectStyle.projectAssets} ${projectStyle.projectAssetsTxt}`} name="assetsSection" id='assetsSection'>
					<Container>
						<Row className='justify-content-center'>
							<Col sm={12} md={10}>
								<h2 className={`mb-0 text-center ${projectStyle.projectStyleHeading}`}><span>Project</span> Assets</h2>
								<div className='spacer-4' />
							</Col>
							<div className={`d-flex justify-content-center ${projectStyle.assetsFlex}`}>
								<LinkTag href='https://gravityhomes.objectstore.e2enetworks.net/images/projects/Thanisandra/G_sky_forest_Brochure_1.pdf' target='_blank' className={`d-flex flex-column align-items-center ${projectStyle.assetsFlexCol}`}>
									<div className={projectStyle.assetsFlexMda}>
										<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect x="22.25" y="14.75" width="35.5" height="53.5" stroke="#787878" strokeWidth="1.5" />
											<path d="M61.5 17V66" stroke="#787878" strokeWidth="1.5" />
											<path d="M25 31L19 31" stroke="#787878" strokeWidth="1.5" />
											<path d="M47.5 25L33.5 25" stroke="#787878" strokeWidth="1.5" />
											<path d="M25 52L19 52" stroke="#787878" strokeWidth="1.5" />
										</svg>
									</div>
									<h6 className='mb-0'>Brochure</h6>
								</LinkTag>
								<LinkTag href='/images/projects/Thanisandra/SKY_FOREST_MASTER_PLAN.pdf' target='_blank' className={`d-flex flex-column align-items-center ${projectStyle.assetsFlexCol}`}>
									<div className={projectStyle.assetsFlexMda}>
										<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect x="15.75" y="15.75" width="48.5" height="48.5" stroke="#787878" strokeWidth="1.5" />
											<rect x="34.75" y="34.75" width="10.5" height="10.5" stroke="#787878" strokeWidth="1.5" />
											<path d="M40 31L40 24" stroke="#787878" strokeWidth="1.5" />
											<path d="M40 31L40 24" stroke="#787878" strokeWidth="1.5" />
											<path d="M57 36L57 29" stroke="#787878" strokeWidth="1.5" />
											<path d="M23 36L23 29" stroke="#787878" strokeWidth="1.5" />
											<path d="M57 51L57 44" stroke="#787878" strokeWidth="1.5" />
											<path d="M23 51L23 44" stroke="#787878" strokeWidth="1.5" />
											<path d="M40 56L40 49" stroke="#787878" strokeWidth="1.5" />
											<path d="M49 40L56 40" stroke="#787878" strokeWidth="1.5" />
											<path d="M43 57L50 57" stroke="#787878" strokeWidth="1.5" />
											<path d="M43 23L50 23" stroke="#787878" strokeWidth="1.5" />
											<path d="M24 40L31 40" stroke="#787878" strokeWidth="1.5" />
											<path d="M30 57L37 57" stroke="#787878" strokeWidth="1.5" />
											<path d="M30 23L37 23" stroke="#787878" strokeWidth="1.5" />
										</svg>
									</div>
									<h6 className='mb-0'>Master Plan</h6>
								</LinkTag>
								<LinkTag href='/images/projects/Thanisandra/sky_Forest_Floor_Plan.pdf' target='_blank' className={`d-flex flex-column align-items-center ${projectStyle.assetsFlexCol}`}>
									<div className={projectStyle.assetsFlexMda}>
										<svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path fillRule="evenodd" clipRule="evenodd" d="M38 59.25H40.75V50.75H42V49.25H40.75V28.75H52V27.25H48.75V16.5H63.5V27.25H57V28.75H63.5V49.25H47V50.75H63.5V63.5H36V65H65V15H15V65H30V63.5H16.5V28.75H32V27.25H16.5V16.5H47.25V27.25H37V28.75H39.25V49.25H22V50.75H39.25V57.75H38V59.25Z" fill="#787878" />
										</svg>
									</div>
									<h6 className='mb-0'>Floor Plan</h6>
								</LinkTag>
							</div>
						</Row>
					</Container>
				</Element>

				<div className={`position-relative w-100`}>
					<div className='spacer-5' />
					<div className={`position-relative w-100 ${projectStyle.ecoVillas} ${projectStyle.ecoVillasThan}`} style={{ backgroundImage: 'url(/images/projects/Thanisandra/Sky_forest_mid_Banner.webp)'}}>
						<div className={` ${projectStyle.ecoVillasContainer}`}>
							<h2 className='fw-normal'>Embrace The Urban Green</h2>
						</div>
					</div>
				</div>
				<Element className={projectStyle.projectHighlight} name="highlightsSection" id="highlightsSection">
					<div className='spacer-5' />
					<Container>
						<Row className='justify-content-center'>
							<Col md={12}>
								<h2 className={`mb-0 text-center ${projectStyle.projectStyleHeading} ${projectStyle.projectStyleHeadingSM} ${projectStyle.projectStyleHeadingBlack}`}><span>Signature</span> Highlights</h2>
								<div className='spacer-5' />
							</Col>
							<Col sm={12} md={12} lg={11}>
								<div className="d-grid grid-custom-highlights mt-0">
									<div className="highlights-lists">
										<div className="grid-column">
											<div className="highlights-media">
												<Image src='/images/projects/aranya/highlights_1.svg' className='img-fluid' alt='Aranya Highlights' fill={true} />
											</div>
											<div className="highlights-content">
												<p className="mb-0">
													<span>35,000 SQ. FT.<br />Central Atrium</span>
												</p>
											</div>
										</div>
									</div>
									<div className="highlights-lists">
										<div className="grid-column">
											<div className="highlights-media">
												<Image src='/images/projects/aranya/highlights_2.svg' className='img-fluid' alt='Aranya Highlights' fill={true} />
											</div>
											<div className="highlights-content">
												<p className="mb-0">
													<span>31,000 SQ. FT.<br />Forest Clubhouse on the 16th Floor</span>
												</p>
											</div>
										</div>
									</div>
									<div className="highlights-lists">
										<div className="grid-column">
											<div className="highlights-media">
												<Image src='/images/projects/aranya/highlights_8.svg' className='img-fluid' alt='Aranya Highlights' fill={true} />
											</div>
											<div className="highlights-content">
												<p className="mb-0"><span>Interconnecting Forest Bridge</span></p>
											</div>
										</div>
									</div>
									<div className="highlights-lists">
										<div className="grid-column">
											<div className="highlights-media">
												<Image src='/images/projects/aranya/highlights_4.svg' className='img-fluid' alt='Aranya Highlights' fill={true} />
											</div>
											<div className="highlights-content">
												<p className="mb-0">1 ACRE MIYAWAKI <span>Entrance Stretch</span></p>
											</div>
										</div>
									</div>
									<div className="highlights-lists">
										<div className="grid-column">
											<div className="highlights-media">
												<Image src='/images/projects/aranya/highlights_5.svg' className='img-fluid' alt='Aranya Highlights' fill={true} />
											</div>
											<div className="highlights-content">
												<p className="mb-0">LUSH <span>1500+ Trees</span></p>
											</div>
										</div>
									</div>
									<div className="highlights-lists">
										<div className="grid-column">
											<div className="highlights-media">
												<Image src='/images/projects/aranya/highlights_7.svg' className='img-fluid' alt='Aranya Highlights' fill={true} />
											</div>
											<div className="highlights-content">
												<p className="mb-0"><span>Breathable<br />Mud Block Designs</span></p>
											</div>

										</div>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
					<div className='spacer-5' />
				</Element>

				<div className={projectStyle.projectHighlight}>
					<div className={projectStyle.highlightsGridThanisandra}>
						<div className={projectStyle.highlightsGridColThanisandra} style={{backgroundImage: 'url(/images/projects/skyForest/1.webp)', backgroundSize: 'cover', backgroundPosition: '50%'}}>
							<div className={projectStyle.highlightOverlayTxtThan}>
								Miyawaki Entrance Stretch
							</div>
						</div>
						{/* <div className={projectStyle.highlightsGridColThanisandra} style={{backgroundImage: 'url(/images/projects/skyForest/2.webp)', backgroundSize: '259.883% 448.746%', backgroundPosition: '-411px -948px'}}> */}
						<div className={projectStyle.highlightsGridColThanisandra} style={{backgroundImage: 'url(/images/projects/skyForest/2.webp)', backgroundSize: '191% 249%', backgroundPosition: '0px -396px'}}>
							<div className={projectStyle.highlightOverlayTxtThan}>
								<div className={` ${projectStyle.borderBgCenter}`}>A Vertical Forest on the <br />14th & 15th Floors</div>
							</div>
						</div>
						<div className={projectStyle.highlightsGridColThanisandra} style={{backgroundImage: 'url(/images/projects/skyForest/4.webp)', backgroundSize: 'cover', backgroundPosition: '50%'}}>	
							<div className={projectStyle.highlightOverlayTxtThan}>
								Forest Haven Clubhouse <br />on the 16th Floor
							</div>
						</div>
						<div className={projectStyle.highlightsGridColThanisandra} style={{backgroundImage: 'url(/images/projects/skyForest/3.webp)', backgroundSize: 'cover', backgroundPosition: '50%'}}>
							<div className={projectStyle.highlightOverlayTxtThan}>
								Space Potential & Biophilia
							</div>
						</div>
					</div>
					<div className='spacer-5' />
				</div>

				<Element className={projectStyle.gravityPricingStyle} name="pricingSection" id="pricingSection">
					<Container>
						<Row className='justify-content-center'>
							<Col md={12}>
								<h2 className={`mb-0 text-center ${projectStyle.projectStyleHeading} ${projectStyle.projectStyleHeadingTxtBlc}`}>Pricing</h2>
								<div className='spacer-4 mb-2' />
							</Col>
							<Col>
								<div className={` ${projectStyle.pricing_flex_block} ${projectStyle.pricing_flex_blockaatha}`}>
									<p className={`mb-0 text-dark ${projectStyle.price_plan_text}`}>Gravity Sky Forest Price Plan</p>
									<div className={projectStyle.pricing_villa_box}>3 & 4 & 5  BHK APARTMENTS</div>
									<div className={`d-flex align-items-center justify-content-between ${projectStyle.pricing_villa_content}`}>
										<p className={`mb-0 flex-grow-1`}>₹ 2 Crore*Onwards</p>
										<p className={`mb-0 flex-grow-0 flex-md-grow-1 text-end`}>2100-5000 sq.ft.</p>

									</div>
								</div>
							</Col>
						</Row>
						<div className='spacer-4 mb-2' />
					</Container>
				</Element>

				<Element className={projectStyle.gravityAmenities} name="layoutSection" id='layoutSection'>
					<div className='spacer-5' />
					<Container>
						<Row className='justify-content-center'>
							<Col md={12}>
								<h2 className={`mb-0 ${projectStyle.projectStyleHeading} ${projectStyle.projectStyleHeadingTxtBlc}`}>Layout</h2>
								<div className='spacer-2_5 mb-3' />
							</Col>
							<Col md={12} sm={12}>
								<div className="grid-custom-layout">
									<div className="main-floor-grid">
										<div className="main-floor-heading text-start">Master Plan</div>
										<div className="main-floor-content">
											<div className="main-layout-media">
												<div className='position-relative floor_height'>
													{/* <Image src='/images/projects/Thanisandra/mpl.png' className='img-fluid' alt="Master Plan" fill={true} /> */}
													<ImageZoom className="gallery-img" src="/images/projects/skyForest/master_plan.jpg" alt="Master Plan" zoom="300" />
												</div>
											</div>
										</div>
									</div>
									<div className="floor-layout-grid floor-layout-grid-smera">
										<div className="floor-layout-Heading text-start">Floor Plans</div>
										<div className="floor-layout-content floor-layout-content-sky">
											<div className="floor-layout-block" onClick={handleNorthShow} role='button'>
												<div className="floor-layout-media position-relative">
													<div className='position-relative floor_height'>
														<Image src='/images/projects/Thanisandra/fpl.png' className='img-fluid' alt="FLoor Plan" fill={true} />
													</div>
												</div>
												<div className="floor-layout-box d-flex">
													<h6>FLOOR PLAN <span>Tower A</span></h6>
													<LinkTag href='/'>
														<svg xmlns="http://www.w3.org/2000/svg" width="39" height="39" viewBox="0 0 39 39" fill="none">
															<path d="M1.80469 19.6387H26.3047M26.3047 19.6387L17.6111 10.8887M26.3047 19.6387L17.6111 28.3887" stroke="#4A3121" strokeWidth="2.625" />
														</svg>
													</LinkTag>
												</div>
											</div>
										</div>
									</div>
								</div>

							</Col>
						</Row>

					</Container>
					<div className='spacer-2_5' />
				</Element>


				<Element className={projectStyle.gravityAmenities} id="amenitiesSection" name="amenitiesSection">
					<div className='spacer-2_5' />
					<Container>
						<Row className='justify-content-center'>
							<Col sm={12} md={10}>
								<div className='gravity-head-center'>
									<h6 className='mb-0 text-center'>
										Enhanced <span>amenities</span>
									</h6>
								</div>
								<div className='spacer-4' />
							</Col>
						</Row>
						<Row className='ps-4 ps-md-0'>
							<Col lg={4} md={4} sm={6}>
								<div className={`d-flex align-items-start ${projectStyle.amenitiesFlex}`}>
									<span>
										<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect y="0.486328" width="40" height="40" rx="20" fill="#C6E2D5" />
											<path fillRule="evenodd" clipRule="evenodd" d="M28.0607 15.547L16.5303 27.0773L12 22.547L13.0607 21.4863L16.5303 24.956L27 14.4863L28.0607 15.547Z" fill="#121212" />
										</svg>
									</span>
									<p className='mb-0'>Miyawaki Entrance Stretch</p>
								</div>
							</Col>
							<Col lg={4} md={4} sm={6}>
								<div className={`d-flex align-items-start ${projectStyle.amenitiesFlex}`}>
									<span>
										<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect y="0.486328" width="40" height="40" rx="20" fill="#C6E2D5" />
											<path fillRule="evenodd" clipRule="evenodd" d="M28.0607 15.547L16.5303 27.0773L12 22.547L13.0607 21.4863L16.5303 24.956L27 14.4863L28.0607 15.547Z" fill="#121212" />
										</svg>
									</span>
									<p className='mb-0'>Integrated Forest Pool</p>
								</div>
							</Col>
							<Col lg={4} md={4} sm={6}>
								<div className={`d-flex align-items-start ${projectStyle.amenitiesFlex}`}>
									<span>
										<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect y="0.486328" width="40" height="40" rx="20" fill="#C6E2D5" />
											<path fillRule="evenodd" clipRule="evenodd" d="M28.0607 15.547L16.5303 27.0773L12 22.547L13.0607 21.4863L16.5303 24.956L27 14.4863L28.0607 15.547Z" fill="#121212" />
										</svg>
									</span>
									<p className='mb-0'>Walk-In Farm</p>
								</div>
							</Col>
							<Col lg={4} md={4} sm={6}>
								<div className={`d-flex align-items-start ${projectStyle.amenitiesFlex}`}>
									<span>
										<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect y="0.486328" width="40" height="40" rx="20" fill="#C6E2D5" />
											<path fillRule="evenodd" clipRule="evenodd" d="M28.0607 15.547L16.5303 27.0773L12 22.547L13.0607 21.4863L16.5303 24.956L27 14.4863L28.0607 15.547Z" fill="#121212" />
										</svg>
									</span>
									<p className='mb-0'>Designer - Modelled Driveways</p>
								</div>
							</Col>
							<Col lg={4} md={4} sm={6}>
								<div className={`d-flex align-items-start ${projectStyle.amenitiesFlex}`}>
									<span>
										<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect y="0.486328" width="40" height="40" rx="20" fill="#C6E2D5" />
											<path fillRule="evenodd" clipRule="evenodd" d="M28.0607 15.547L16.5303 27.0773L12 22.547L13.0607 21.4863L16.5303 24.956L27 14.4863L28.0607 15.547Z" fill="#121212" />
										</svg>
									</span>
									<p className='mb-0'>Luxe Forest Clubhouse</p>
								</div>
							</Col>
							<Col lg={4} md={4} sm={6}>
								<div className={`d-flex align-items-start ${projectStyle.amenitiesFlex}`}>
									<span>
										<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect y="0.486328" width="40" height="40" rx="20" fill="#C6E2D5" />
											<path fillRule="evenodd" clipRule="evenodd" d="M28.0607 15.547L16.5303 27.0773L12 22.547L13.0607 21.4863L16.5303 24.956L27 14.4863L28.0607 15.547Z" fill="#121212" />
										</svg>
									</span>
									<p className='mb-0'>Biophilic Central Atrium</p>
								</div>
							</Col>
							<Col lg={4} md={4} sm={6}>
								<div className={`d-flex align-items-start ${projectStyle.amenitiesFlex}`}>
									<span>
										<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect y="0.486328" width="40" height="40" rx="20" fill="#C6E2D5" />
											<path fillRule="evenodd" clipRule="evenodd" d="M28.0607 15.547L16.5303 27.0773L12 22.547L13.0607 21.4863L16.5303 24.956L27 14.4863L28.0607 15.547Z" fill="#121212" />
										</svg>
									</span>
									<p className='mb-0'>Cobblestones Paved Roads</p>
								</div>
							</Col>
							<Col lg={4} md={4} sm={6}>
								<div className={`d-flex align-items-start ${projectStyle.amenitiesFlex}`}>
									<span>
										<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect y="0.486328" width="40" height="40" rx="20" fill="#C6E2D5" />
											<path fillRule="evenodd" clipRule="evenodd" d="M28.0607 15.547L16.5303 27.0773L12 22.547L13.0607 21.4863L16.5303 24.956L27 14.4863L28.0607 15.547Z" fill="#121212" />
										</svg>
									</span>
									<p className='mb-0'>Immersive Forest Bridge</p>
								</div>
							</Col>
							<Col lg={4} md={4} sm={6}>
								<div className={`d-flex align-items-start ${projectStyle.amenitiesFlex}`}>
									<span>
										<svg width="40" height="41" viewBox="0 0 40 41" fill="none" xmlns="http://www.w3.org/2000/svg">
											<rect y="0.486328" width="40" height="40" rx="20" fill="#C6E2D5" />
											<path fillRule="evenodd" clipRule="evenodd" d="M28.0607 15.547L16.5303 27.0773L12 22.547L13.0607 21.4863L16.5303 24.956L27 14.4863L28.0607 15.547Z" fill="#121212" />
										</svg>
									</span>
									<p className='mb-0'>The Meditative Relaxation Zone</p>
								</div>
							</Col>
						</Row>
					</Container>
					<div className='spacer-5' />
				</Element>

				{/* <Element className={`${projectStyle.gravityAmenities} ${projectStyle.gravityAmenitiesSpotlight}`} name="gallerySection" id="gallerySection">
					<div className='spacer-5' />
					<Container>
						<Row className='justify-content-center'>
							<Col md={12}>
								<h2 className={`mb-0 ${projectStyle.projectStyleHeading} ${projectStyle.projectStyleHeadingTxtBlc}`}>Gallery</h2>
								<div className='spacer-4' />
							</Col>
							<Col sm={12} md={10} className='px-0 px-md-3'>
								<div className={`video ${livingStyles.videoGalleryDiv} ${projectStyle.videoGalleryDv}`}>
									<video src='/images/ttt.mp4' controls='controls' ref={videoRef} type="video/mp4" autoPlay={false} loop={true} />
									<div className={`${stop === true ? `${livingStyles.playingVideo}` : `${livingStyles.startVideo}`} ${livingStyles.videoOverlay}`}>
										<button type='button' onClick={handleVideo}>
											<svg width="64" height="64" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
												<circle cx="32" cy="32" r="22" fill="#17574B" />
												<circle cx="32" cy="32" r="28.75" stroke="#C6E2D5" strokeWidth="0.5" />
												<path d="M27.5 22.8397L42.5 31.5L27.5 40.1603L27.5 22.8397Z" stroke="white" strokeWidth="1.5" />
											</svg>
										</button>
										<p className='mb-0'>Take A Virtual Site Tour</p>
									</div>
								</div>
								<div className='spacer-5' />
							</Col>
							<Col sm={10} md={10} lg={10} className='position-relative col-10'>
								<h2 className={`pb-3 fw-bold text-center text-capitalize ${projectStyle.projectStyleSubHeading}`} style={{ fontVariant: 'normal', fontFeatureSettings: 'normal'}}>Gallery</h2>
								<Swiper 
									onInit={(swiper) => {
										swiper.params.navigation.prevEl = navigationPrevRef.current;
										swiper.params.navigation.nextEl = navigationNextRef.current;
										swiper.navigation.init();
										swiper.navigation.update();
									}}
									pagination={{
										clickable: true,
									}}
									spaceBetween={0}
									slidesPerView={1}
									modules={[Navigation, Pagination, Autoplay]}
									autoplay={{
										delay: 4500,
										disableOnInteraction: false,
									}}
									className="gallery-swiper gallery-swiper-tha"
									breakpoints={{
										320: {
											slidesPerView: 1,
										},
										768: {
											slidesPerView: 1,
										},
										1024: {
											slidesPerView: 1,
										},
										1200: {
											slidesPerView: 1,
										},
									}}
								>
									<SwiperSlide>
										<div className="carousel-flex">
											<div className="carousel-media position-relative">
												<Image src='/images/projects/smera/7smera_amenities.webp' className='img-fluid' alt='' fill={true} />
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="carousel-flex">
											<div className="carousel-media position-relative">
												<Image src='/images/projects/smera/4SG.webp' className='img-fluid' alt='' fill={true} />
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="carousel-flex">
											<div className="carousel-media position-relative">
												<Image src='/images/projects/smera/3SG.webp' className='img-fluid' alt='' fill={true} />
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="carousel-flex">
											<div className="carousel-media position-relative">
												<Image src="/images/projects/smera/6SG.webp" className="img-fluid" alt="" fill={true} />
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="carousel-flex">
											<div className="carousel-media position-relative">
												<Image src="/images/projects/smera/SG8.webp" className="img-fluid" alt="" fill={true} />
											</div>
										</div>
									</SwiperSlide>
								</Swiper>
								<div className='navigation-custom-arrow tha-arrow-swipe'>
									<button className='prev-arrow-swipe' ref={navigationPrevRef}>
										<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g clipPath="url(#clip0_1429_11030)">
												<path d="M17.5 0.888428L6.5 11.8884L17.5 22.8884" stroke="#121212" strokeWidth="1.5" />
											</g>
											<defs>
												<clipPath id="clip0_1429_11030">
													<rect width="24" height="24" fill="white" transform="translate(24 24.3884) rotate(-180)" />
												</clipPath>
											</defs>
										</svg>
									</button>
									<button className='nxt-arrow-swipe' ref={navigationNextRef}>
										<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<g clipPath="url(#clip0_61_416)">
												<path d="M6.5 23.5L17.5 12.5L6.5 1.5" stroke="#121212" strokeWidth="1.5" />
											</g>
											<defs>
												<clipPath id="clip0_61_416">
													<rect width="24" height="24" fill="white" />
												</clipPath>
											</defs>
										</svg>
									</button>
								</div>
							</Col>
						</Row>
					</Container>
					<div className='spacer-5' />
				</Element> */}

				{/* FAQ */}
				<Element className='about-widget faqs-widget' style={{ backgroundImage: 'url(/images/faq.jpg)' }} name="faqsSection" id="faqsSection">
					<div className='spacer-5' />
					<Container className='z-index-1 position-relative'>
						<div className='gravity-head-center'>
							<h6 className={`mb-0 text-center faqs-head ${projectStyle.faqsTitle}`}>Faq's</h6>
						</div>
						<div className='spacer-5' />
						<Row className='justify-content-center'>
							<Col sm={10} md={10} xl={10} xxl={10} className='col-10'>
								<Accordion defaultActiveKey={['0']} alwaysOpen>
									<Accordion.Item eventKey="0">
										<Accordion.Header className='faq-ques'>What are some key amenities at Gravity Sky Forest?</Accordion.Header>
										<Accordion.Body>
											Gravity Sky Forest brings the home to your apartment with quality community engagement without compromising on personal comfort, with Alternative Balconies, a Forest Clubhouse on the 16th Floor overlooking the First-in-India Miyawaki Corridor on 14th and 15th Floors, with an Integrated Forest Pool Within The Forest, immerse yourself in the luxury of nature with Traditional Mud Block Designs, CobbleStone Paved Roads, Biophilic Architecture, and more. Take a Leap Forward with Luxury Home Apartments.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="1">
										<Accordion.Header className='faq-ques'>What is the total land area of Gravity Sky Forest?</Accordion.Header>
										<Accordion.Body>
											Enveloped by a Lush Miyawaki Forest throughout the project, Gravity Sky Forest is spread over 4 acres of expansive landscape with 3 towers, 27 floors each, and a total of 252 units that will soon be transformed into 252 quality lifestyle homes that invite your peace.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="2">
										<Accordion.Header className='faq-ques'>Where is Gravity Sky Forest located?</Accordion.Header>
										<Accordion.Body>
											Located in Thanisandra, a convenient 20 min Drive to Airport Road, 15 min drive to Manyata Tech Park, Providing Connectivity to Upcoming Airport Metro and Jakkur Flyover, IFCI Financial City and more.
										</Accordion.Body>
									</Accordion.Item>
									<Accordion.Item eventKey="3">
										<Accordion.Header className='faq-ques'>Can we book a site visit to Gravity Sky Forest?</Accordion.Header>
										<Accordion.Body>
											Yes, we encourage site visits for all our projects so that you can feel assured of your home and take the experience firsthand. In fact, you can visit us anytime during the course of our developments and take a look at the progress at different stages.<br/>
											Gravity Sky Forest is an upcoming Luxury Home Apartment project by Gravity Homes. Please call us at (+91 9513145554) to know more about our upcoming projects and our team will schedule a site visit at your convenience. You can also mail us at (marketing@gravityhomes.in) to enquire for any further information about Gravity.
										</Accordion.Body>
									</Accordion.Item>
								</Accordion>
							</Col>
						</Row>
					</Container>
					<div className='spacer-5' />
				</Element>
				
				<div className={projectStyle.otherProjects}>
					<div className='spacer-5' />
					<Container>
						<Row className='align-items-center justify-content-between'>
							<Col md={12} sm={12}>
								<div className={`gravity-head-center d-flex align-items-center justify-content-center ${projectStyle.gravityHeadCenter}`}>
									<h6 className='mb-0 text-center d-flex flex-column flex-row align-items-start justify-content-center'>
										<span className='d-block'>Ongoing Projects</span> @Gravity Homes 
									</h6>
								</div>
								<div className='spacer-5' />
							</Col>
							<Col md={6} sm={12}>
								<div className={projectStyle.projectItemBox}>
									<LinkTag href='/project/gravity-aranya' className={`position-relative ${projectStyle.projectItemFlx}`}>
										<div className={projectStyle.projectMda} style={{backgroundImage: 'url(/images/projects/thumbnail/aranya_1.webp)', backgroundSize: 'cover', backgroundPosition: '50%', height: '408px'}}>
											{/* <Image src='/images/projects/project-2.jpg' className='img-fluid' alt='Gravity Aranya' width='624' height='408' /> */}
											<div className={projectStyle.projectInfoHover}>
												<h4 className='mb-0'>Homes that Converse with Nature</h4>
												<div className={`position-relative ${projectStyle.logoEffect}`}>
													<Image src='/images/aranya-logo.svg' className='img-fluid' fill='true' style={{objectFit: 'contain'}} alt='Aranya Logo' />
												</div>
											</div>
										</div>
										<div className={projectStyle.projectCnt}>
											<h4>Gravity Aranya</h4>
											<div className={projectStyle.projectInfFlx}>
												<div className={projectStyle.projectInfPlc}>
													<span className='me-2 me-md-3'>
														<svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M7 10.0181C6.33696 10.0181 5.70107 9.75467 5.23223 9.28583C4.76339 8.81699 4.5 8.18111 4.5 7.51807C4.5 6.85503 4.76339 6.21914 5.23223 5.7503C5.70107 5.28146 6.33696 5.01807 7 5.01807C7.66304 5.01807 8.29893 5.28146 8.76777 5.7503C9.23661 6.21914 9.5 6.85503 9.5 7.51807C9.5 7.84637 9.43534 8.17146 9.3097 8.47478C9.18406 8.77809 8.99991 9.05369 8.76777 9.28583C8.53562 9.51798 8.26002 9.70213 7.95671 9.82777C7.65339 9.9534 7.3283 10.0181 7 10.0181ZM7 0.518066C5.14348 0.518066 3.36301 1.25556 2.05025 2.56832C0.737498 3.88107 0 5.66155 0 7.51807C0 12.7681 7 20.5181 7 20.5181C7 20.5181 14 12.7681 14 7.51807C14 5.66155 13.2625 3.88107 11.9497 2.56832C10.637 1.25556 8.85652 0.518066 7 0.518066Z" fill="#17574B" />
														</svg>
													</span> Banshankari, Bengaluru
												</div>
												<div className={projectStyle.projectInfSpn}>
													<span>3200 - 3700 sqft.</span>
													<span>3 & 4 BHK Villaments</span>
												</div>
											</div>
										</div>		
									</LinkTag>
								</div>
							</Col>
							<Col md={6} sm={12}>
								<div className={projectStyle.projectItemBox}>
									<LinkTag href='/project/gravity-smera' className={`position-relative ${projectStyle.projectItemFlx}`}>
										<div className={projectStyle.projectMda} style={{backgroundImage: 'url(/images/projects/smera/7SG.webp)', backgroundSize: '135.931% 115.196%', backgroundPosition: '-112.105px -1.947px', height: '408px'}}>
											<button type="button" className="btn new-launch-btn">New Launch</button>
											{/* <Image src='/images/projects/smera/7SG.webp' className='img-fluid' alt='Gravity Smera Gardens' width='624' height='408' /> */}
											<div className={projectStyle.projectInfoHover}>
												<h4 className='mb-0'>Life Begins in Your Home Garden</h4>
												<div className={`position-relative ${projectStyle.logoEffect}`}>
													<Image src='/images/Smera_logo.png' className='img-fluid' fill='true' alt='Smera Logo' />
												</div>
											</div>
										</div>
										<div className={projectStyle.projectCnt}>
											<h4>Gravity Smera Gardens</h4>
											<div className={projectStyle.projectInfFlx}>
												<div className={projectStyle.projectInfPlc}>
													<span className='me-2 me-md-3'>
														<svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M7 10.0181C6.33696 10.0181 5.70107 9.75467 5.23223 9.28583C4.76339 8.81699 4.5 8.18111 4.5 7.51807C4.5 6.85503 4.76339 6.21914 5.23223 5.7503C5.70107 5.28146 6.33696 5.01807 7 5.01807C7.66304 5.01807 8.29893 5.28146 8.76777 5.7503C9.23661 6.21914 9.5 6.85503 9.5 7.51807C9.5 7.84637 9.43534 8.17146 9.3097 8.47478C9.18406 8.77809 8.99991 9.05369 8.76777 9.28583C8.53562 9.51798 8.26002 9.70213 7.95671 9.82777C7.65339 9.9534 7.3283 10.0181 7 10.0181ZM7 0.518066C5.14348 0.518066 3.36301 1.25556 2.05025 2.56832C0.737498 3.88107 0 5.66155 0 7.51807C0 12.7681 7 20.5181 7 20.5181C7 20.5181 14 12.7681 14 7.51807C14 5.66155 13.2625 3.88107 11.9497 2.56832C10.637 1.25556 8.85652 0.518066 7 0.518066Z" fill="#17574B" />
														</svg>
													</span> Chandapura, Bengaluru
												</div>
												<div className={projectStyle.projectInfSpn}>
													<span>2100 - 3000 sqft.</span>
													<span>3 & 4 BHK Duplex Villas</span>
												</div>
											</div>
										</div>
									</LinkTag>
								</div>
							</Col>
							
							<Col sm={12}>
								<div className="text-center explore-all-links">
									<LinkTag className="link-explore" href="/project">Explore All
										<span className="ms-3">
											<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M0.5 8H14.5M14.5 8L9.53226 3M14.5 8L9.53226 13" stroke="#17574B" strokeWidth="1.5"></path>
											</svg>
										</span>
									</LinkTag>
								</div>
							</Col>
						</Row>
					</Container>
				</div>

			</div>
		</>
	)
}

export default GravityThanisandra