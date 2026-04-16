import React, { useRef, useState } from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import { Swiper, SwiperSlide } from 'swiper/react';

// Master Plan Zoom Image
import ImageZoom from "react-image-zooom";

// Scroll
import { Link, Element, animateScroll as scroll, scrollSpy } from 'react-scroll';

import Image from 'next/image';
import LinkTag from 'next/link';

import livingStyles from '../Living/living.module.css';
import projectStyle from './projects.module.css';

import EnquireForm from './EnquireForm';
import Modal from 'react-bootstrap/Modal';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { whatsappShareURL } from '@/src/util/util';


const GravityAranya = () => {
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
	const sliderRef = useRef();

	// Modal
	const [modalShow, setModalShow] = useState(false);

	const handleClose = () => setModalShow(false);
	const handleShow = () => setModalShow(true);

	// Modal Floor North
	const [modalNorthShow, setModalNorthShow] = useState(false);

	const handleNorthClose = () => setModalNorthShow(false);
	const handleNorthShow = () => setModalNorthShow(true);

	// Modal Floor East
	const [modalEastShow, setModalEastShow] = useState(false);

	const handleEastClose = () => setModalEastShow(false);
	const handleEastShow = () => setModalEastShow(true);

	const whatsappShare = () => {
		const whatsappLink = whatsappShareURL();
		openInNewTab(whatsappLink);
	}
	const openInNewTab = url => {
		window.open(url, '_blank', 'noopener,noreferrer');
	};

	// 
	// // Updating scrollSpy when the component mounts.
    // scrollSpy.update();

	// // Function to handle the activation of a link.
	// const handleSetActive = (to) => {
	// 	console.log(to);
	// };


	return (
		<>
			<div className={`gravityBgProject-html ${projectStyle.gravityBgProject} ${projectStyle.GravityAranyaBg}`} style={{ backgroundImage: 'url(/images/projects/22.webp)' }}>
				<Container className={`z-index-1 position-relative ${projectStyle.projectsContainer}`}>
					<Row className={`justify-content-between align-items-md-end ${projectStyle.projectsRow}`}>
						<Col sm={12} md={6} className='order-last order-md-first'>
							<div className={projectStyle.projectLogoFlex}>
								<div className={projectStyle.projectLogoMda}>
									<Image src='/images/aranya-logo.svg' className='img-fluid' alt='Smera Gardens' width='147' height='56' />
									{/* <Image src='/images/Aranya_white_logo.svg' className='img-fluid' alt='Smera Gardens' width='147' height='56' /> */}
								</div>
								<p className='mb-0'>Starting from ₹2.8 Cr*</p>
								<div className="explore-all-btn white-btn">
									{/* <EnquireForm /> */}
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

									{/* <WhatsappShareButton url={shareUrl}> */}
									<button className="link-explore ms-4" type='button' onClick={() => whatsappShare()}>
										Schedule Model Villament Tour
										<span className="ms-3">
											<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M0.5 8H14.5M14.5 8L9.53226 3M14.5 8L9.53226 13" stroke="#EFEFEF" strokeWidth="1.5"></path>
											</svg>
										</span>
									</button>
									{/* </WhatsappShareButton> */}
								</div>
							</div>
						</Col>
						<Col sm={12} md={6} className='order-first order-md-last align-items-center d-md-flex d-none align-items-md-center justify-content-md-end'>
							<h2 className='text-white'>
								ECO LUXURY <br />Villaments
							</h2>
						</Col>
					</Row>
					<div className='spacer-4' />
				</Container>
			</div>
			<div className={`d-md-block d-none ${projectStyle.projectHeader}`}>
				<Container>
					{/* <ul className={` ${projectStyle.projectHeaderScroll}`}> */}
					<ul 
						// items={ ['aboutSection', 'assetsSection', 'highlightsSection', 'pricingSection', 'layoutSection', 'amenitiesSection', 'gallerySection', 'locationSection', 'faqsSection'] } 
						className={` ${projectStyle.projectHeaderScroll}`} 
						// currentClassName={` ${projectStyle.projectHeaderLinksActive}`} 
						// spy={true}
						// offset={ -117 }
						// scrollOffset={200}
						// smooth
					>
						<li className={` ${projectStyle.projectHeaderLinks}`}>
							<Link 
								to='aboutSection' 
								activeClass={` ${projectStyle.projectHeaderLinksActive}`} 
								spy={true} 
								smooth={true} 
								offset={-117} 
								//scrollOffset={117}
								duration={500} 
								//onSetActive={handleSetActive}
							>About</Link>
						</li>
						<li className={` ${projectStyle.projectHeaderLinks}`}>
							<Link 
								to='assetsSection' 
								activeClass={` ${projectStyle.projectHeaderLinksActive}`} 
								spy={true} 
								smooth={true} 
								offset={-117} 
								//scrollOffset={117}
								duration={500} 
								//onSetActive={handleSetActive}
							>Assets</Link>
						</li>
						<li className={` ${projectStyle.projectHeaderLinks}`}>
							<Link 
								to='highlightsSection' 
								activeClass={` ${projectStyle.projectHeaderLinksActive}`} 
								spy={true} 
								smooth={true} 
								offset={-117} 
								//scrollOffset={117}
								duration={500} 
								//onSetActive={handleSetActive}
							>Highlights</Link>
						</li>
						<li className={` ${projectStyle.projectHeaderLinks}`}>
							<Link 
								to='pricingSection' 
								activeClass={` ${projectStyle.projectHeaderLinksActive}`} 
								spy={true} 
								smooth={true} 
								offset={-117} 
								//scrollOffset={117}
								duration={500} 
								//onSetActive={handleSetActive}
							>Pricing</Link>
						</li>
						<li className={` ${projectStyle.projectHeaderLinks}`}>
							<Link 
								to='layoutSection' 
								activeClass={` ${projectStyle.projectHeaderLinksActive}`} 
								spy={true} 
								smooth={true} 
								offset={-117} 
								//scrollOffset={117}
								duration={500} 
								//onSetActive={handleSetActive}
							>Layout</Link>
						</li>
						<li className={` ${projectStyle.projectHeaderLinks}`}>
							<Link 
								to='amenitiesSection' 
								activeClass={` ${projectStyle.projectHeaderLinksActive}`} 
								spy={true} 
								smooth={true} 
								offset={-117} 
								//scrollOffset={117}
								duration={500} 
								//onSetActive={handleSetActive}
							>Amenities</Link>
						</li>
						<li className={` ${projectStyle.projectHeaderLinks}`}>
							<Link 
								to='gallerySection' 
								activeClass={` ${projectStyle.projectHeaderLinksActive}`} 
								spy={true} 
								smooth={true} 
								offset={-117} 
								//scrollOffset={117}
								duration={500} 
								//onSetActive={handleSetActive}
							>Gallery</Link>
						</li>
						<li className={` ${projectStyle.projectHeaderLinks}`}>
							<Link 
								to='locationSection' 
								activeClass={` ${projectStyle.projectHeaderLinksActive}`} 
								spy={true} 
								smooth={true} 
								offset={-117} 
								//scrollOffset={117}
								duration={500} 
								//onSetActive={handleSetActive}
							>Location</Link>
						</li>
						<li className={` ${projectStyle.projectHeaderLinks}`}>
							<Link 
								to='faqsSection' 
								activeClass={` ${projectStyle.projectHeaderLinksActive}`} 
								spy={true} 
								smooth={true} 
								offset={-117} 
								//scrollOffset={117}
								duration={500} 
								//onSetActive={handleSetActive}
							>FAQ's</Link>
						</li>
					</ul>
				</Container>
			</div>
			<div className={`gravityBgProject-html ${projectStyle.projectInfoHighlights}`}>
				<Container>
					<Row className='justify-content-center'>
						<Col sm={12} md={10} lg={7} className='text-center'>
							<LinkTag href='#aboutSections' role='button' className={`mb-md-3 mb-0 ${projectStyle.iconArrowDown}`}>
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
							<Col md={12} className='order-first'>
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
										<span>Gravity Aranya,</span>
										<span>Banashankari 6th Stage</span>
										<span>Thurahalli Forest Bangalore </span>
										<span>560004</span>
									</div>
									<div className={` ${projectStyle.aboutHighlightedIco}`}>
										<span>
											<svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M20.9984 15.6153L15.7284 15.0053L13.2084 17.5253C10.3696 16.0815 8.06222 13.7741 6.61844 10.9353L9.14844 8.40527L8.53844 3.15527H3.02844C2.44844 13.3353 10.8184 21.7053 20.9984 21.1253V15.6153Z" fill="#17574B" />
											</svg>
										</span>
									</div>
									<div className={` ${projectStyle.aboutHighlightedNum}`}>
										<span className='mb-2'>+91 9513145554</span>
										<span>+91 9739011616</span>
									</div>
								</div>
							</Col>
							<Col sm={12} md={6} lg={7} className=''>
								<div className={`mb-3 mb-md-2 ${projectStyle.overViewTxt} ${projectStyle.overViewTxttext}`}>
									{/* <h1 className='mb-3'>Overview of <span>Gravity Aranya</span></h1> */}
									<h1 className={` ${projectStyle.fontFamilyAvenir}`}>Gravity Aranya - Overview</h1>

									<p className='mb-2'>Nestled in Turahalli Forest, Gravity Aranya presents luxury forest villaments with nature-inclusive living attuning to a sustainable lifestyle. A project as close to nature as it is to our hearts, embrace mindful spaces guided by biophilic architecture amidst an expansive landscape with duplex and triplex homes and an array of enhanced modern amenities crafted with a homegrown touch of luxury and sustainability for sublime comfort.</p>
									<p className='mb-0'>With 250+ tree friends and a lifetime green focus with private front yard and backyards, Welcome Home to Aranya where you experience a world that seeks a connection with nature and serves as an extension of your energy.</p>
								</div>
								<div className={`mb-4 mb-md-2 ${projectStyle.overViewRera}`}>
									<h6 className='mb-2'>RERA Numbers</h6>
									<div className='d-flex flex-column flex-md-row'>
										<p className='mb-2'>Phase1 :
											<span> PRM/KA/RERA/1251/310/PR/080922/005224</span>
										</p>
										<p className='mb-0 ms-0 ms-md-2'>Phase2 :
											<span> ACK/KA/RERA/1251/310/PR/310823/007407</span>
										</p>
									</div>
									<div className={` ${projectStyle.aboutHighlighted}`}>
										<div className={` ${projectStyle.projectHighlightFlex}`}>
											<span>4.5</span>
											<span>ACRES</span>
										</div>
										<div className={` ${projectStyle.projectHighlightFlex}`}>
											<span>108</span>
											<span>Villaments</span>
										</div>
										<div className={` ${projectStyle.projectHighlightFlex}`}>
											<span>3 & 4 BHK</span>
											<span>Duplex & Triplex </span>
										</div>
										<div className={` ${projectStyle.projectHighlightFlex}`}>
											<span>3200 & 3700</span>
											<span>sq.ft Built up </span>
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
								<LinkTag href='/images/projects/aranya/G_Aranya_E-Brochure.pdf' target='_blank' className={`d-flex flex-column align-items-center ${projectStyle.assetsFlexCol}`}>
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
								<LinkTag href='/images/projects/aranya/G_Aranya_Master_plan.pdf' target='_blank' className={`d-flex flex-column align-items-center ${projectStyle.assetsFlexCol}`}>
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
								<LinkTag href='/images/projects/aranya/G_Aranya_Floor_Plans_plan.pdf' target='_blank' className={`d-flex flex-column align-items-center ${projectStyle.assetsFlexCol}`}>
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
					<div className={`position-relative w-100 ${projectStyle.ecoVillas}`} style={{ backgroundImage: 'url(/images/projects/aranya/eco_villa.webp)' }}>
						<div className={` ${projectStyle.ecoVillasContainer}`}>
							<h2>
								ECO LUXURY VILLAMENTS
								<span>Seek the lifestyle that inspires your life choices</span>
							</h2>
						</div>
					</div>
				</div>
				<Element className={projectStyle.projectHighlight} name="highlightsSection" id='highlightsSection'>
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
												<Image src='/images/projects/aranya/highlights_1.svg' className='img-fluid' alt='Aranya' fill={true} />
											</div>
											<div className="highlights-content">
												<p className="mb-0">EXCLUSIVE 210 SQ. FT.
													<span>Front yard gardens</span>
												</p>
											</div>
										</div>
									</div>
									<div className="highlights-lists">
										<div className="grid-column">
											<div className="highlights-media">
												<Image src='/images/projects/aranya/highlights_2.svg' className='img-fluid' alt='Aranya' fill={true} />
											</div>
											<div className="highlights-content">
												<p className="mb-0">EXCLUSIVE 350 SQ. FT.
													<span>Backyard Gardens</span>
												</p>
											</div>
										</div>
									</div>
									<div className="highlights-lists">
										<div className="grid-column">
											<div className="highlights-media">
												<Image src='/images/projects/aranya/highlights_3.svg' className='img-fluid' alt='Aranya' fill={true} />
											</div>
											<div className="highlights-content">
												<p className="mb-0">EXCLUSIVE 700 SQ. FT. <span>Terrace Gardens</span></p>
											</div>
										</div>
									</div>
									<div className="highlights-lists">
										<div className="grid-column">
											<div className="highlights-media">
												<Image src='/images/projects/aranya/highlights_4.svg' className='img-fluid' alt='Aranya' fill={true} />
											</div>
											<div className="highlights-content">
												<p className="mb-0">1 ACRE COMMUNITY <span>Courtyard</span></p>
											</div>
										</div>
									</div>
									<div className="highlights-lists">
										<div className="grid-column">
											<div className="highlights-media">
												<Image src='/images/projects/aranya/highlights_5.svg' className='img-fluid' alt='Aranya-5' fill={true} />
											</div>
											<div className="highlights-content">
												<p className="mb-0">ADORNING <span>250+ Trees</span></p>
											</div>
										</div>
									</div>
									<div className="highlights-lists">
										<div className="grid-column">
											<div className="highlights-media">
												<Image src='/images/projects/aranya/highlights_6.svg' className='img-fluid' alt='Aranya-6' fill={true} />
											</div>
											<div className="highlights-content">
												<p className="mb-0">Traditional <span>Mud Block Designs</span></p>
											</div>
										</div>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
					<div className='spacer-5' />
				</Element>

				<Element className={projectStyle.gravityPricingStyle} name="pricingSection" id="pricingSection">
					<Container>
						<div className='spacer-4 mb-2' />
						<Row className='justify-content-center'>
							<Col md={12}>
								<h2 className={`mb-0 text-center ${projectStyle.projectStyleHeading} ${projectStyle.projectStyleHeadingTxtBlc}`}>Pricing</h2>
								<div className='spacer-4 mb-2' />
							</Col>
							<Col>
								<div className={projectStyle.pricing_flex_block}>
									<p className={`mb-0 ${projectStyle.price_plan_text}`}>Gravity Aranya Price Plan </p>
									<div className={projectStyle.pricing_villa_box}>3 & 4  BHK VILLAMENTS</div>
									<div className={`d-flex align-items-center justify-content-between ${projectStyle.pricing_villa_content}`}>
										<p className={`mb-0 flex-grow-1`}>₹ 2.8 Crore*Onwards</p>
										<p className={`mb-0 flex-grow-0 flex-md-grow-1 text-end`}>3200 & 3700 sqft. Built Up</p>

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
										<div className="main-floor-heading">Master Plan</div>
										<div className="main-floor-content">
											<div className="main-layout-media">
												<div className='position-relative floor_height floor_height_none'>
													{/* <Image src='/images/projects/aranya/G_Aranya_Master_plan.webp' className='img-fluid' alt="Master Plan" fill={true} /> */}
													<ImageZoom className="gallery-img" src="/images/projects/aranya/G_Aranya_Master_plan.webp" alt="Master Plan" zoom="300" />
												</div>
											</div>
										</div>
									</div>
									<div className="floor-layout-grid">
										<div className="floor-layout-Heading">Floor Plans</div>
										<div className="floor-layout-content">
											<div className="floor-layout-block" onClick={handleNorthShow} role='button'>
												<div className="floor-layout-media position-relative">
													<div className='position-relative floor_height'>
														<Image src='/images/projects/aranya/north_floor.png' className='img-fluid' alt="FLoor Plan" fill={true} style={{ objectFit: 'contain', transform: 'rotate(-7.83deg)'}} />
													</div>
												</div>
												<div className="floor-layout-box d-flex">
													<h6>NORTH FACING <span>VILLAMENTS</span></h6>
													<LinkTag href='/'>
														<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M1.58594 15.7382H28.8585M28.8585 15.7382L19.1811 5.99805M28.8585 15.7382L19.1811 25.4784" stroke="#121212" strokeWidth="2.92206" />
														</svg>
													</LinkTag>
												</div>
											</div>
											<div className="floor-layout-block" onClick={handleEastShow} role='button'>
												<div className="floor-layout-media position-relative">
													<div className='position-relative floor_height'>
														<Image src='/images/projects/aranya/east_floor.png' className='img-fluid' alt="FLoor Plan" fill={true} style={{ objectFit: 'contain', transform: 'rotate(-8.124deg)'}} />
													</div>
												</div>
												<div className="floor-layout-box d-flex">
													<h6>EAST FACING <span>VILLAMENTS</span></h6>
													<LinkTag href='/'>
														<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M1.58594 15.7382H28.8585M28.8585 15.7382L19.1811 5.99805M28.8585 15.7382L19.1811 25.4784" stroke="#121212" strokeWidth="2.92206" />
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
					<div className='spacer-5' />
				</Element>
				<Modal
					show={modalNorthShow}
					onHide={handleNorthClose}
					size='xl'
					aria-labelledby="contained-modal-title-vcenter"
					className='enquire-modal'
					centered
				>
					<div className='north-floor-modal popup-floor-modal'>
						{/* <div className='row justify-content-center'>
							<div className='col-12 col-sm-5 mb-4'>
								<div className='east-floor-media position-relative'>
									<Image src='/images/projects/aranya/north-floor-modal/1.png'
										className='img-fluid'
										alt=''
										fill={true}
										style={{ objectFit: 'contain', transform: 'rotate(-19.102deg)'}}
									/>
								</div>
							</div>
							<div className='col-12 col-sm-5 mb-4'>
								<div className='east-floor-media position-relative'>
									<Image src='/images/projects/aranya/north-floor-modal/2.png'
										className='img-fluid'
										alt=''
										fill={true}
										style={{ objectFit: 'contain', transform: 'rotate(-15.919deg)'}}
									/>
								</div>
							</div>
							<div className='col-12 col-sm-5 mb-4'>
								<div className='d-flex flex-xl-row flex-column align-items-center h-100'>
									<div className='east-floor-media position-relative col-12 col-xl-10'>
										<Image src='/images/projects/aranya/north-floor-modal/3.png'
											className='img-fluid'
											alt=''
											fill={true}
											style={{ objectFit: 'contain', transform: 'rotate(90deg)'}}
										/>
									</div>
									<h5 className='col mb-xl-0 text-nowrap'>3200 SQFT </h5>
								</div>
							</div>
							<div className='col-12 col-sm-5 mb-4'>
								<div className='d-flex flex-xl-row flex-column align-items-center h-100'>
									<div className='east-floor-media position-relative col-12 col-xl-10'>
										<Image src='/images/projects/aranya/north-floor-modal/4.png'
											className='img-fluid'
											alt=''
											fill={true}
											style={{ objectFit: 'contain', transform: 'rotate(90deg)'}}
										/>
									</div>
									<h5 className='col mb-xl-0 text-nowrap'>3700 SQFT </h5>
								</div>
							</div>

							<div className='col-12 col-lg-12'>
								<div className='floor-modal-heading d-flex align-items-center justify-content-between flex-column flex-md-row px-xl-4'>
									<div className='d-flex flex-column flex-xl-row align-items-center'>
										<h4>East-Facing Floor Plans</h4>
										<div className='ms-xl-3'>
											<span>3200 sqft - 3700 SQ.FT</span>
											<span>DUPLEX</span>
											<span>TRIPLEX</span>
										</div>
									</div>
									<div className='position-relative border-center-modal col'>&nbsp;</div>
									<div className='floor-modal-brand'>
										<Image src='/images/aranya-logo-dark.svg' className='img-fluid pb-2' alt='Smera Gardens' width='147' height='56' />
									</div>
								</div>
							</div>
						</div> */}
						<div className='project-floor-modal position-relative'>
							<Image 
								src='/images/projects/aranya/floor_plans/A_North facing_FLOOR_PLAN_POP_UP.webp'
								className='img-fluid pb-2' 
								alt='Floor Plans' 
								fill="true" 
							/>
						</div>
					</div>
				</Modal>
				<Modal
					show={modalEastShow}
					onHide={handleEastClose}
					size='xl'
					aria-labelledby="contained-modal-title-vcenter"
					className='enquire-modal'
					centered
				>
					<div className='east-floor-modal popup-floor-modal'>
						{/* <div className='row justify-content-center'>
							<div className='col-12 col-sm-5 mb-4'>
								<div className='east-floor-media position-relative'>
									<Image src='/images/projects/aranya/east-floor-modal/1.png'
										className='img-fluid'
										alt=''
										fill={true}
										style={{ objectFit: 'contain', transform: 'rotate(-18.43deg)'}}
									/>
								</div>
							</div>
							<div className='col-12 col-sm-5 mb-4'>
								<div className='east-floor-media position-relative'>
									<Image src='/images/projects/aranya/east-floor-modal/2.png'
										className='img-fluid'
										alt=''
										fill={true}
										style={{ objectFit: 'contain', transform: 'rotate(343deg)'}}
									/>
								</div>
							</div>
							<div className='col-12 col-sm-5 mb-4'>
								<div className='d-flex flex-xl-row flex-column align-items-center h-100'>
									<div className='east-floor-media position-relative col-12 col-xl-10'>
										<Image src='/images/projects/aranya/east-floor-modal/3.png'
											className='img-fluid'
											alt=''
											fill={true}
											style={{ objectFit: 'contain', transform: 'rotate(90deg)'}}
										/>
									</div>
									<h5 className='col mb-xl-0 text-nowrap'>3200 SQFT </h5>
								</div>
							</div>
							<div className='col-12 col-sm-5 mb-4'>
								<div className='d-flex flex-xl-row flex-column align-items-center h-100'>
									<div className='east-floor-media position-relative col-12 col-xl-10'>
										<Image src='/images/projects/aranya/east-floor-modal/4.png'
											className='img-fluid'
											alt=''
											fill={true}
											style={{ objectFit: 'contain', transform: 'rotate(90deg)'}}
										/>
									</div>
									<h5 className='col mb-xl-0 text-nowrap'>3700 SQFT </h5>
								</div>
							</div>

							<div className='col-12 col-lg-12'>
								<div className='floor-modal-heading d-flex align-items-center justify-content-between flex-column flex-md-row px-xl-4'>
									<div className='d-flex flex-column flex-xl-row align-items-center'>
										<h4>East-Facing Floor Plans</h4>
										<div className='ms-xl-3'>
											<span>3200 sqft - 3700 SQ.FT</span>
											<span>DUPLEX</span>
											<span>TRIPLEX</span>
										</div>
									</div>
									<div className='position-relative border-center-modal col'>&nbsp;</div>
									<div className='floor-modal-brand'>
										<Image src='/images/aranya-logo-dark.svg' className='img-fluid pb-2' alt='Smera Gardens' width='147' height='56' />
									</div>
								</div>
							</div>
						</div> */}
						<div className='project-floor-modal position-relative'>
							<Image 
								src='/images/projects/aranya/floor_plans/A_East_facing_FLOOR_PLAN_POP_UP.webp'
								className='img-fluid pb-2' 
								alt='Floor Plans' 
								fill="true" 
							/>
						</div>
					</div>
				</Modal>

				<Element className={` ${projectStyle.gravityAmenities} ${projectStyle.gravityAmenitiesGrid}`} name="amenitiesSection" id="amenitiesSection">
					<div className='spacer-2_5' />
					<Container>
						<Row className='justify-content-center'>
							<Col sm={12} md={12}>
								<h2 className={`mb-0 text-center ${projectStyle.projectStyleHeading} ${projectStyle.projectStyleHeadingTxtBlc}`}>amenities</h2>
								<div className='spacer-2_5' />
							</Col>
							<Col sm={12} md={12} lg={11}>
								<div className="d-grid grid-custom-amenities">
									<div className="amenities-lists position-relative">
										<div className="amenities-media position-relative">
											<Image src='/images/projects/aranya/amenities_1.png' className='img-fluid' alt='Amenities' fill={true} />
										</div>
										<div className="amenities-content">
											<p className="mb-0">SPANNING 4 ACRES</p>
										</div>
									</div>
									<div className="amenities-lists position-relative">
										<div className="amenities-media position-relative">
											<Image src='/images/projects/aranya/amenities_2.png' className='img-fluid' alt='Amenities' fill={true} />
										</div>
										<div className="amenities-content">
											<p className="mb-0">CENTRAL COURTYARD 1 ACRE</p>
										</div>
									</div>
									<div className="amenities-lists position-relative">
										<div className="amenities-media position-relative">
											<Image src='/images/projects/aranya/amenities_3.png' className='img-fluid' alt='Amenities' fill={true} />
										</div>
										<div className="amenities-content">
											<p className="mb-0">Community CLUBHOUSE</p>
										</div>
									</div>
									<div className="amenities-lists position-relative">
										<div className="amenities-media position-relative">
											<Image src='/images/projects/aranya/amenities_4.png' className='img-fluid' alt='Amenities' fill={true} />
										</div>
										<div className="amenities-content">
											<p className="mb-0">SECURE GATED COMMUNITY </p>
										</div>
									</div>
									<div className="amenities-lists position-relative">
										<div className="amenities-media position-relative">
											<Image src='/images/projects/aranya/amenities_5.png' className='img-fluid' alt='Amenities' fill={true} />
										</div>
										<div className="amenities-content">
											<p className="mb-0">ADORNING 250+ TREES</p>
										</div>
									</div>
									<div className="amenities-lists position-relative">
										<div className="amenities-media position-relative">
											<Image src='/images/projects/aranya/amenities_6.png' className='img-fluid' alt='Amenities' fill={true} />
										</div>
										<div className="amenities-content">
											<p className="mb-0">SWIMMING POOL</p>
										</div>
									</div>
									<div className="amenities-lists position-relative">
										<div className="amenities-media position-relative">
											<Image src='/images/projects/aranya/amenities_7.png' className='img-fluid' alt='Amenities' fill={true} />
										</div>
										<div className="amenities-content">
											<p className="mb-0">RAINWATER RECHARGE BASINS</p>
										</div>
									</div>
									<div className="amenities-lists position-relative">
										<div className="amenities-media position-relative">
											<Image src='/images/projects/aranya/amenities_8.png' className='img-fluid' alt='Amenities' fill={true} />
										</div>
										<div className="amenities-content">
											<p className="mb-0">GROUNDWATER REPLENISHMENT</p>
										</div>
									</div>
									<div className="amenities-lists position-relative">
										<div className="amenities-media position-relative">
											<Image src='/images/projects/aranya/amenities_9.png' className='img-fluid' alt='Amenities' fill={true} />
										</div>
										<div className="amenities-content">
											<p className="mb-0">LUSH  FOREST WALKWAY</p>
										</div>
									</div>
								</div>
							</Col>
						</Row>
						<div className='spacer-5' />
					</Container>
				</Element>

				<div className={projectStyle.projectHighlight}>
					<div className='spacer-5' />
					<div className="d-grid grid-custom">
						<div className="gri">
							<div className='gri-media'>
								<Image src='/images/projects/aranya/Component_18.webp' className='img-fluid' alt='Aranya' fill={true} style={{objectFit: 'cover'}} />
							</div>
						</div>
						<div className="gri">
							<div className='gri-media d-none d-md-block'>
								<div className="grid-col-banner-1 grid-highlight-banner text-center">
									<Image src='/images/projects/aranya/brand-logo.svg' className='img-fluid' width='164' height='64' alt='Aranya Logo' />
								</div>
							</div>
							<div className='gri-media d-block d-md-none'>
								<div className='grid-col-banner-1 grid-highlight-banner text-center'>
									<Image src='/images/projects/aranya/brand-logo.svg' className='img-fluid' width='89' height='34' alt='Aranya Logo' />
								</div>
							</div>
						</div>
						<div className="gri">
							<div className='gri-media'>
								<Image src='/images/projects/aranya/Component_20.webp' className='img-fluid w-100' alt='Aranya' fill={true} style={{objectFit: 'cover'}} />
							</div>
						</div>
						<div className="gri">
							<div className='gri-media'>
								<Image src='/images/projects/aranya/Component_1.jpg' className='img-fluid w-100' alt='Aranya' fill={true} style={{objectFit: 'cover'}} />
							</div>
						</div>
						<div className="gri combined">
							<div className='gri-media'>
								<Image src='/images/projects/aranya/Component_33.webp' className='img-fluid w-100' alt='Aranya' fill={true} style={{objectFit: 'cover'}} />
							</div>
						</div>
						<div className="gri">
							<div className='gri-media d-none d-md-block'>
								<div className="grid-col-banner-2 grid-highlight-banner text-center">
									<Image src='/images/projects/gravity_homes.png' className='img-fluid' width='164' height='64' alt='Gravity Homes' />
								</div>
							</div>
							<div className='gri-media d-block d-md-none'>
								<div className='grid-col-banner-2 grid-highlight-banner text-center'>
									<Image src='/images/projects/gravity_homes.png' className='img-fluid' width='86' height='39' alt='Gravity Homes' />
								</div>
							</div>
						</div>
						<div className="gri">
							<div className='gri-media'>
								<Image src='/images/projects/aranya/Component_33.jpg' className='img-fluid w-100' alt='Aranya' fill={true} style={{objectFit: 'cover'}} />
							</div>
						</div>
					</div>	
				</div>

				<Element className={`${projectStyle.gravityAmenities} ${projectStyle.gravityAmenitiesSpotlight}`} name="gallerySection" id="gallerySection">
					<div className='spacer-5' />
					<Container>
						<Row className='justify-content-center'>
							<Col md={12}>
								<h2 className={`mb-0 ${projectStyle.projectStyleHeading} ${projectStyle.projectStyleHeadingTxtBlc}`}>Gallery</h2>
								<div className='spacer-4' />
							</Col>
							<Col sm={10} md={10} lg={10} className='position-relative col-10'>
								<Swiper
									onSwiper={it => (sliderRef.current = it)}
									pagination={{
										clickable: true,
									}}
									spaceBetween={32}
									slidesPerView={3}
									modules={[Navigation, Pagination, Autoplay]}
									autoplay={{
										delay: 4500,
										disableOnInteraction: false,
									}}
									className="gallery-swiper"
									breakpoints={{
										320: {
											slidesPerView: 1,
											spaceBetween: 0,
										},
										768: {
											slidesPerView: 3,
											spaceBetween: 32,
										},
										1024: {
											slidesPerView: 3,
											spaceBetween: 32,
										},
										1200: {
											slidesPerView: 3,
											slidesPerGroup: 3,
											spaceBetween: 32,
										},
									}}
								>
									<SwiperSlide>
										<div className="carousel-flex">
											<div className="carousel-media position-relative">
												<Image src='/images/projects/aranya/Component_18.webp' className='img-fluid' alt='Aranya' fill={true} />
											</div>
											<div className="carousel-cation-title">Elevation</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="carousel-flex">
											<div className="carousel-media position-relative">
												<Image src='/images/projects/aranya/Component_19.webp' className='img-fluid' alt='Aranya' fill={true} />
											</div>
											<div className="carousel-cation-title">Backyard</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="carousel-flex">
											<div className="carousel-media position-relative">
												<Image src='/images/projects/aranya/Component_20.webp' className='img-fluid' alt='Aranya' fill={true} />
											</div>
											<div className="carousel-cation-title">Frontyard</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="carousel-flex">
											<div className="carousel-media position-relative">
												<Image src="/images/projects/aranya/Component_21.webp" className="img-fluid" alt="Aranya" fill={true} />
											</div>
											<div className="carousel-cation-title">Tree-Shaded Benches</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="carousel-flex">
											<div className="carousel-media position-relative">
												<Image src="/images/projects/aranya/Component_22.webp" className="img-fluid" alt="Aranya" fill={true} />
											</div>
											<div className="carousel-cation-title">Basketball Court</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="carousel-flex">
											<div className="carousel-media position-relative">
												<Image src="/images/projects/aranya/Component_23.webp" className="img-fluid" alt="Aranya" fill={true} />
											</div>
											<div className="carousel-cation-title">Paved Walkway</div>r
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="carousel-flex">
											<div className="carousel-media position-relative">
												<Image src="/images/projects/aranya/Component_24.webp" className="img-fluid" alt="Aranya" fill={true} />
											</div>
											<div className="carousel-cation-title">Sports Arena</div>
										</div>
									</SwiperSlide>
									
									<SwiperSlide>
										<div className="carousel-flex">
											<div className="carousel-media position-relative">
												<Image src="/images/projects/aranya/Component_29.webp" className="img-fluid" alt="Aranya" fill={true} />
											</div>
											<div className="carousel-cation-title">Bathroom</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="carousel-flex">
											<div className="carousel-media position-relative">
												<Image src="/images/projects/aranya/Component_31.webp" className="img-fluid" alt="Aranya" fill={true} />
											</div>
											<div className="carousel-cation-title">Kids Room</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="carousel-flex">
											<div className="carousel-media position-relative">
												<Image src="/images/projects/aranya/Component_33.webp" className="img-fluid" alt="Aranya" fill={true} />
											</div>
											<div className="carousel-cation-title">Dressing Room</div>
										</div>
									</SwiperSlide>
								</Swiper>
								<div className='navigation-custom-arrow'>
									<button className='prev-arrow-swipe' onClick={() => sliderRef.current?.slidePrev()}>
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
									<button className='nxt-arrow-swipe' onClick={() => sliderRef.current?.slideNext()}>
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
							<Col sm={12} md={10} className='px-0 px-md-3'>
								<div className='spacer-5' />
								<h2 className={`mb-0 text-center d-none d-md-block ${projectStyle.projectStyleSubHeading}`}>An Extension of Your Energy</h2>
								<div className='spacer-4 d-none d-md-block' />
								<div className={`video ${livingStyles.videoGalleryDiv} ${projectStyle.videoGalleryDv}`}>
									<video src='https://gravityhomes.objectstore.e2enetworks.net/videos/Gravity_Aranya.mp4' controls='controls' ref={videoRef} type="video/mp4" autoPlay={false} loop={true} />
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
						</Row>
					</Container>
				</Element>

				<Element className='location-widget-block' name='locationSection' id='locationSection'>
					<Container>
						<Row>
							<Col md={12} className='order-first'>
								<h2 className={`mb-0 ${projectStyle.projectStyleHeading} ${projectStyle.projectStyleHeadingTxtBlc}`}>Location</h2>
								<div className='spacer-4' />
							</Col>
							<Col lg={7} md={6} sm={12} className='order-2'>
								<div className='d-flex flex-column align-items-center'>
									<div className='map_point'>
										<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3889.234544694443!2d77.48707057592343!3d12.89263441660294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae3f6fb5a41beb%3A0x266b2aa916915002!2sGravity%20Aranya!5e0!3m2!1sen!2sin!4v1701407576259!5m2!1sen!2sin" style={{ border: 0, width: '100%', height: '380px' }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
									</div>
								</div>
							</Col>
							<Col lg={5} md={6} sm={12} className='order-last order-3'>
								<div className="location-lists-card d-flex flex-column align-items-md-start align-items-center">
									<h6 className="mb-4 text-center text-md-start">Ease of Access &amp; Prime Landmarks</h6>
									<ul className="m-0 location-lists">
										<li>5 mins to NICE ROAD TOLL PLAZA</li>
										<li>10 mins to KANAKAPURA ROAD</li>
										<li>10 mins to RR NAGAR</li>
										<li>10 mins ART OF LIVING</li>
										<li>5 mins to MYSORE ROAD</li>
									</ul>
								</div>
							</Col>
							<Col lg={7} md={6} sm={12} className='order-3 order-md-last text-center text-md-start'>
								<div className='explore-all-head- d-inline-block'>
									<div className='spacer-2_5' />
									{/* <LinkTag href={"https://maps.app.goo.gl/Ec3YDELSgmhid6nf9"} type='button' className='btn-bordered-location'>Take A Location Tour</LinkTag> */}
									<button type='button' onClick={()=>whatsappShare()} className='btn-bordered-location'>Take A Location Tour</button>
								</div>
							</Col>
						</Row>
					</Container>
				</Element>

				<div className='financial-widget-block'>
					<div className='spacer-5' />
					<Container>
						<Row className='justify-content-center'>
							<Col lg={12} xl={8} sm={12} className='p-xs-0'>
								<div className='flex_financial_block flex-column flex-md-row justify-content-md-between'>
									<div className='heading_financial col-xl-4 col-lg-3 col-md-4'>
										<h3 className='mb-0'>Our Official Financial Partner</h3>
									</div>
									<div className='banner_financial col-12 col-md-7 p-xs-0'>
										<div className='banner_aditya_birla position-relative-'>
											<Image src='/images/projects/aranya/aditya_birla.jpg' className='img-fluid d-none d-md-block' fill={true} alt='Aditya Birla' />
											<Image src='/images/projects/aranya/aditya_birla_sm.png' className='img-fluid d-block d-md-none' height='88' width='390' alt='Aditya Birla' />
										</div>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
					<div className='spacer-5' />
				</div>

				{/* FAQ */}
				<Element className='about-widget faqs-widget' style={{ backgroundImage: 'url(/images/projects/faq.jpg)', backgroundSize: '100% 207.852%', backgroundPosition: '0px -183.545px' }} name="faqsSection" id='faqsSection'>
					<div className='spacer-5' />
					<Container className='z-index-1 position-relative'>
						<div className='gravity-head-center'>
							<h6 className={`mb-0 text-center faqs-head ${projectStyle.faqsTitle}`}>Faq's</h6>
						</div>
						<div className='spacer-2_5' />
						<div className='project-gravity-faq'>
							<Accordion defaultActiveKey={['0']} alwaysOpen>
								<Accordion.Item eventKey="0">
									<Accordion.Header>What are some key amenities at Gravity Aranya?</Accordion.Header>
									<Accordion.Body>
										Gravity Aranya offers quality family time with an exclusive combination of community lifestyle and mindful comfort that is supported by 550 sq.ft. Private Garden, 250+ Tree Friends, 3+ acres of Luxurious Landscape, 1 acre of Courtyard View, and a Lifetime Green Focus with Urban Amenities of Guests Comfort, Cinematic Home Theatre, Workspace Focus, Sports Arena, Kids’, Play Arena, Fitness & Wellness Gym and many more.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="1">
									<Accordion.Header>What is the total land area of Gravity Aranya?</Accordion.Header>
									<Accordion.Body>
										Gravity Aranya covers 4.5 acres of comfortable and welcoming natural luxury spaces with 108 units of villaments that offer mindful private comfort with each villament offering you both a front yard and backyard along with a variety of careful thought over amenities.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="2">
									<Accordion.Header>How is the transportation connectivity from Gravity Aranya?</Accordion.Header>
									<Accordion.Body>
										Your gateway to invaluable comfort, Gravity Aranya is just a 5 mins Drive to the Nice Road, conveniently connecting you to Mysore Road, Tumkur Road and nearby to commercial and IT hubs, schools, hospitals and Namma Metro.
									</Accordion.Body>
								</Accordion.Item>
								<Accordion.Item eventKey="3">
									<Accordion.Header>When is the completion date of Gravity Aranya?</Accordion.Header>
									<Accordion.Body>
										Gravity Aranya is nearing its scheduled completion and is ready to move in, inviting you to a seamless life beyond apartments where your home is your peace of mind!
									</Accordion.Body>
								</Accordion.Item>
							</Accordion>
						</div>
					</Container>
					<div className='spacer-5' />
				</Element>

				<div className={projectStyle.otherProjects}>
					<div className='spacer-5' />
					<Container>
						<Row className='align-items-center justify-content-between'>
							<Col md={12} sm={12}>
								<div className={`gravity-head-center d-flex align-items-center justify-content-center ${projectStyle.gravityHeadCenter}`}>
									<h6 className='mb-0 text-center d-md-flex d-none flex-column flex-row align-items-start justify-content-center'>
										<span className='d-block'>Ongoing Projects</span> @Gravity Homes 
									</h6>
									<h6 className='mb-0-xs text-center d-flex d-md-none flex-row flex-row align-items-start justify-content-center'>
									Ongoing<span className='d-inline-block ms-2'>Projects</span>
									</h6>
								</div>
								<div className='spacer-5' />
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
							<Col md={6} sm={12}>
								<div className={projectStyle.projectItemBox}>
									
									<LinkTag href='/project/gravity-thanisandra' className={`position-relative ${projectStyle.projectItemFlx}`}>
										{/* <div className={projectStyle.projectMda}> */}
										<div className={projectStyle.projectMda} style={{backgroundImage: 'url(/images/projects/thumbnail/sky_forest.webp)', backgroundSize: 'cover', backgroundPosition: '50%', height: '408px'}}>
											{/* <Image src='/images/projects/Thanisandra/sky_forest_banner.webp' className='img-fluid' alt='Gravity Aranya' width='624' height='408' /> */}
											<div className={projectStyle.projectInfoHover}>
												<h4 className='mb-0'>A Leap Forward in Home Apartments</h4>
												<div className={`position-relative ${projectStyle.logoEffect}`}>
													<Image src='/images/sky-forest.png' className='img-fluid' fill='true' style={{objectFit: 'contain'}} alt='Sky Forest' />
												</div>
											</div>
										</div>
										<div className={projectStyle.projectCnt}>
											<h4>Gravity Sky Forest</h4>
											<div className={projectStyle.projectInfFlx}>
												<div className={projectStyle.projectInfPlc}>
													<span className='me-2 me-md-3'>
														<svg width="14" height="21" viewBox="0 0 14 21" fill="none" xmlns="http://www.w3.org/2000/svg">
															<path d="M7 10.0181C6.33696 10.0181 5.70107 9.75467 5.23223 9.28583C4.76339 8.81699 4.5 8.18111 4.5 7.51807C4.5 6.85503 4.76339 6.21914 5.23223 5.7503C5.70107 5.28146 6.33696 5.01807 7 5.01807C7.66304 5.01807 8.29893 5.28146 8.76777 5.7503C9.23661 6.21914 9.5 6.85503 9.5 7.51807C9.5 7.84637 9.43534 8.17146 9.3097 8.47478C9.18406 8.77809 8.99991 9.05369 8.76777 9.28583C8.53562 9.51798 8.26002 9.70213 7.95671 9.82777C7.65339 9.9534 7.3283 10.0181 7 10.0181ZM7 0.518066C5.14348 0.518066 3.36301 1.25556 2.05025 2.56832C0.737498 3.88107 0 5.66155 0 7.51807C0 12.7681 7 20.5181 7 20.5181C7 20.5181 14 12.7681 14 7.51807C14 5.66155 13.2625 3.88107 11.9497 2.56832C10.637 1.25556 8.85652 0.518066 7 0.518066Z" fill="#17574B" />
														</svg>
													</span> Thanisandrsa, North Bengaluru
												</div>
												<div className={projectStyle.projectInfSpn}>
													<span>2300 - 2700 sq. ft.</span>
													<span>4 BHK</span>
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

export default GravityAranya