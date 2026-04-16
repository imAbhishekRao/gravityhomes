import React, {useRef, useState} from 'react';
import { Container, Col, Row } from 'react-bootstrap';

import livingStyles from '../Living/living.module.css';
import projectStyle from './projects.module.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectFade, Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';
import Link from 'next/link';

const GravitySundridge = () => {
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
	const sliderRef = useRef();
	return (
		<>
			<div className={`gravityBgProject-html ${projectStyle.gravityBgProject} ${projectStyle.gravitySundridgeBg}`} style={{ backgroundImage: 'url(/images/projects/sundridge/SR_banner_1.webp)', backgroundSize: '100% 100%' }}> 
			{/* backgroundSize: '108.333% 139.955%', backgroundPosition: '0px -182.575px'         */}
				<Container className={`z-index-1 position-relative ${projectStyle.projectsContainer}`}>
					<Row className={`justify-content-between align-items-md-end ${projectStyle.projectsRow}`}>
						<Col sm={12} md={6} className='order-last order-md-first'>
							<div className={projectStyle.projectLogoFlex}>
								<div className={`ps-0 pb-0 ${projectStyle.projectLogoMda}`}>
									<Image src='/images/sundridge-logo.png' className='img-fluid' alt='Smera Gardens' width='147' height='56' />
								</div>
								
							</div>
						</Col>
						<Col sm={12} md={6} className='order-first order-md-last align-items-center d-flex align-items-md-center justify-content-md-end'>
							<h2 className='text-white'>
								<span>The Verdant  </span> Oasis
							</h2>
						</Col>
					</Row>
					<div className='spacer-4' />
				</Container>
			</div>
			<div className={`gravityBgProject-html ${projectStyle.projectInfoHighlights}`}>
				<Container>
					<Row className='justify-content-center'>
						<Col sm={12} md={10} lg={7} className='text-center'>
							<Link href='#aboutSections' role='button' className={`mb-0 ${projectStyle.iconArrowDown}`}>
								<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1 7L12 18L23 7" stroke="#121212" strokeWidth="1.5" />
								</svg>
							</Link>
						</Col>
					</Row>
				</Container>

				<div className={`scrollSection ${projectStyle.overViewInfo}`} name="aboutSection" id='aboutSection'>
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
										<span>Rajankunte, Bengaluru</span>
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
									<h1 className={` ${projectStyle.fontFamilyAvenir}`}>Gravity Sundridge - Overview</h1>

									<p className='mb-0'>
									Exuding a contemporary architectural aesthetic, Gravity Sundridge presents 25 villas across three plot sizes, integrating cutting-edge modern amenities such as home automation, solar lighting, lush landscaping gardens, and more. Each villa follows vastu science principles, overlooking a serene water body, nestled amidst open spaces at the north-east corner. The main road gracefully branches into avenues, concluding in cul-de-sacs, crafting cosy nooks and retreats within the community. With fortified spaces and a verdant oasis, the community is built on thoughtful craftsmanship and meticulous attention-to-detail that ignites your spark of imagination.
									</p>
								</div>
								<div className={`pt-4 ${projectStyle.overViewRera}`}>
									<div className={` ${projectStyle.aboutHighlighted}`}>
										<div className={` ${projectStyle.projectHighlightFlex}`}>
											<span>3.5</span>
											<span>ACRES</span>
										</div>
										<div className={` ${projectStyle.projectHighlightFlex}`}>
											<span>4200 </span>
											<span>sq. ft.</span>
										</div>
										<div className={` ${projectStyle.projectHighlightFlex}`}>
											<span>4 </span>
											<span>BHK </span>
										</div>
										<div className={` ${projectStyle.projectHighlightFlex}`}>
											<span>25</span>
											<span>UNITS </span>
										</div>
									</div>
								</div>
							</Col>
						</Row>
					</Container>
					<div className='spacer-5' />
				</div>

				<div className={`position-relative w-100`}>
					<div className='spacer-5' />
					
					<div className={`position-relative w-100 ${projectStyle.ecoVillas} ${projectStyle.ecoVillasMn}`} style={{ backgroundImage: 'url(/images/projects/sundridge/SR_banner_Mid.png)'}}>
						{/* backgroundSize:100% */}
						<div className={` ${projectStyle.ecoVillasContainer}`}>
							<h2 className='fw-normal'>&nbsp;</h2>
						</div>
					</div>
				</div>

				<div className={`${projectStyle.gravityAmenities} ${projectStyle.gravityAmenitiesSpotlight}`} name="gallerySection" id="gallerySection">
					<div className='spacer-5' />
					<Container>
						<Row className='justify-content-center'>
							<Col md={12}>
								<h2 className={`mb-0 ${projectStyle.projectStyleHeading} ${projectStyle.projectStyleHeadingTxtBlc}`}>Gallery</h2>
								<div className='spacer-5' />
							</Col>
							
							<Col sm={10} md={10} lg={10} className='position-relative col-10'>
								{/* <h2 className={`mb-0 fw-bold text-center text-capitalize ${projectStyle.projectStyleSubHeading}`} style={{ fontVariant: 'normal', fontFeatureSettings: 'normal'}}>Gallery</h2>
								<div className='spacer-4' /> */}
								<Swiper 
									onSwiper={it => (sliderRef.current = it)}
									pagination={{
										clickable: true,
									}}
									spaceBetween={0}
									slidesPerView={1}
									modules={[Navigation, Pagination]}
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
												<Image src='/images/projects/sundridge/G_Sunridge1.webp' className='img-fluid' alt='Sundridge' fill={true} />
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="carousel-flex">
											<div className="carousel-media position-relative">
												<Image src='/images/projects/sundridge/G_Sunridge2.webp' className='img-fluid' alt='Sundridge' fill={true} />
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="carousel-flex">
											<div className="carousel-media position-relative">
												<Image src='/images/projects/sundridge/G_Sunridge3.webp' className='img-fluid' alt='Sundridge' fill={true} />
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="carousel-flex">
											<div className="carousel-media position-relative">
												<Image src="/images/projects/sundridge/G_Sunridge4.webp" className="img-fluid" alt="Sundridge" fill={true} />
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="carousel-flex">
											<div className="carousel-media position-relative">
												<Image src="/images/projects/sundridge/G_Sunridge5.webp" className="img-fluid" alt="Sundridge" fill={true} />
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="carousel-flex">
											<div className="carousel-media position-relative">
												<Image src="/images/projects/sundridge/G_Sunridge6.webp" className="img-fluid" alt="Sundridge" fill={true} />
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="carousel-flex">
											<div className="carousel-media position-relative">
												<Image src="/images/projects/sundridge/G_Sunridge7.webp" className="img-fluid" alt="Sundridge" fill={true} />
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="carousel-flex">
											<div className="carousel-media position-relative">
												<Image src="/images/projects/sundridge/G_Sunridge8.webp" className="img-fluid" alt="Sundridge" fill={true} />
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="carousel-flex">
											<div className="carousel-media position-relative">
												<Image src="/images/projects/sundridge/G_Sunridge9.webp" className="img-fluid" alt="Sundrige" fill={true} />
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className="carousel-flex">
											<div className="carousel-media position-relative">
												<Image src="/images/projects/sundridge/G_Sunridge10.webp" className="img-fluid" alt="Sundridge" fill={true} />
											</div>
										</div>
									</SwiperSlide>
								</Swiper>
								<div className='navigation-custom-arrow tha-arrow-swipe'>
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
								<div className='spacer-4' />
							</Col>
							<Col sm={12} md={10} className='px-0 px-md-3'>
								<div className={`video ${livingStyles.videoGalleryDiv} ${projectStyle.videoGalleryDv}`}>
									<video src='https://gravityhomes.objectstore.e2enetworks.net/videos/Gravity_Sundridge.mp4' controls='controls' ref={videoRef} type="video/mp4" autoPlay={false} loop={true} />
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
							</Col>
						</Row>
					</Container>
					<div className='spacer-5' />
				</div>

				<div className={projectStyle.otherProjects}>
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
									<Link href='/project/gravity-aranya' className={`position-relative ${projectStyle.projectItemFlx}`}>
										{/* <div className={projectStyle.projectMda}> */}
										<div className={projectStyle.projectMda} style={{backgroundImage: 'url(/images/projects/thumbnail/aranya_1.webp)', backgroundSize: 'cover', backgroundPosition: '50%', height: '408px'}}>
											{/* <Image src='/images/projects/project-2.jpg' className='img-fluid' alt='Gravity Aranya' width='624' height='408' /> */}
											<div className={projectStyle.projectInfoHover}>
												<h4 className='mb-0'>Home that Converse with Nature</h4>
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
									</Link>
								</div>
							</Col>
							<Col md={6} sm={12}>
								<div className={projectStyle.projectItemBox}>
									<Link href='/project/gravity-thanisandra' className={`position-relative ${projectStyle.projectItemFlx}`}>
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
									</Link>
								</div>
							</Col>
							<Col sm={12}>
								<div className="text-center explore-all-links">
									<Link className="link-explore" href="/project">Explore All
										<span className="ms-3">
											<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M0.5 8H14.5M14.5 8L9.53226 3M14.5 8L9.53226 13" stroke="#17574B" strokeWidth="1.5"></path>
											</svg>
										</span>
									</Link>
								</div>
							</Col>
						</Row>
					</Container>
				</div>

				
			</div>
		</>
	)
}

export default GravitySundridge