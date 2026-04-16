import Link from 'next/link'
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import {EffectCube, Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import Image from 'next/image';
import 'swiper/css/effect-cube';
import { Swiper, SwiperSlide } from 'swiper/react';
import LazyLoadBackgroundImage from '../Common/LazyLoadBackgroundImage';
const Journey = ({ homeStyle }) => {

	return (
		<>
			<LazyLoadBackgroundImage
				src="images/home_banner/journey.jpg"
				className={homeStyle.JourneyBanner}
				style={{}} // Add any specific height or other styles needed
				>
				{/* <div className={homeStyle.JourneyBanner} style={{ backgroundImage: 'url(/images/home_banner/journey.jpg)' }}> */}

					<Container>
						<Row>
							<Col md={12}>

								<p className={`mb-0 d-flex flex-column ${homeStyle.JourneyParaText}`}>Our Companions in
									<span>the Journey</span>
								</p>
							</Col>
						</Row>
					</Container>
				{/* </div> */}
			</LazyLoadBackgroundImage>
			<Container>
				<div className={homeStyle.journeyAbsolute}>
					<Row className='justify-content-between'>
						<Col md={5} sm={12} className='order-md-1 order-2'>
							<div className='d-flex align-items-center justify-content-center justify-content-md-start h-100 pt-65-md'>
								<div className='d-inline-block'>
									<Link href='/living' className={homeStyle.linkJourney}>
										Know Their Story
										<span className='ms-3'>
											<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M0.5 8H14.5M14.5 8L9.53226 3M14.5 8L9.53226 13" stroke="#17574B" strokeWidth="1.5" />
											</svg>
										</span>
									</Link>
								</div>
							</div>
						</Col>
						<Col md={6} sm={12} className='order-md-2 order-1'>
							{/* <div className=''> */}
							<ParallaxProvider>
								<Parallax speed={-3}>
									<div className={`testimonial-Carrousel testm-testimonial-Carrousel`}>
										<Swiper
											modules={[EffectCube, Navigation, Autoplay, Pagination, A11y]}
											spaceBetween={50}
											effect={'cube'}
											grabCursor={true}
											cubeEffect={{
												shadow: false,
												slideShadows: false,
												shadowOffset: 20,
												shadowScale: 0.94,
											}}
											slidesPerView={1}
											navigation
											autoplay={{
												delay: 4500,
												disableOnInteraction: false,
											}}
											pagination={{ clickable: true }}
										>
											<SwiperSlide>
												<div className='testm-slider-Carousel'>

													<div className='testm-slider-Content'>
														<div className={`text-center testm-svg-Icon`}>
															<svg width="55" height="50" viewBox="0 0 55 50" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M31.0027 37.1333C31.0027 21.6611 48.755 0 48.755 0L54.4553 3.7459C51.8494 8.30612 46.4749 18.2409 46.4749 24.5926C46.4749 31.9216 51.8494 31.9216 51.8494 38.9248C51.8494 46.2537 46.6377 49.1853 40.9374 49.1853C35.0743 49.1853 31.0027 46.0909 31.0027 37.1333ZM0.546875 37.1333C0.546875 21.6611 18.2992 0 18.2992 0L23.9995 3.7459C21.3936 8.30612 16.0191 18.2409 16.0191 24.5926C16.0191 31.9216 21.3936 31.9216 21.3936 38.9248C21.3936 46.2537 16.1819 49.1853 10.4817 49.1853C4.61851 49.1853 0.546875 46.0909 0.546875 37.1333Z" fill="#C6E2D5" />
															</svg>
														</div>
														<p className='px-3'>We want as much greenery to be preserved, and we are having a forest close to our homes, Turahalli, address also, we say like, forest, so it is feeling more of a village, no traffic, less pollution, it's nice.</p>
														<div className='testm-slider-Media position-relative'>
															<Image src='/images/living/media-8.webp' className='img-fluid' alt='Living' 
																sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
																fill={true} 
																style={{
																	objectFit: 'cover',
																	objectPosition: '0px -1px',    														
																}}
															/>
														</div>
														<div className={`text-center testm-carousel-Info`}>
															<h6>Narahari</h6>
															<span className='testm-span-First'>Business man</span>
															<span className='testm-span-Last'>Community, Gravity Aranya</span>
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className='testm-slider-Carousel'>

													<div className='testm-slider-Content'>
														<div className={`text-center testm-svg-Icon`}>
															<svg width="55" height="50" viewBox="0 0 55 50" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M31.0027 37.1333C31.0027 21.6611 48.755 0 48.755 0L54.4553 3.7459C51.8494 8.30612 46.4749 18.2409 46.4749 24.5926C46.4749 31.9216 51.8494 31.9216 51.8494 38.9248C51.8494 46.2537 46.6377 49.1853 40.9374 49.1853C35.0743 49.1853 31.0027 46.0909 31.0027 37.1333ZM0.546875 37.1333C0.546875 21.6611 18.2992 0 18.2992 0L23.9995 3.7459C21.3936 8.30612 16.0191 18.2409 16.0191 24.5926C16.0191 31.9216 21.3936 31.9216 21.3936 38.9248C21.3936 46.2537 16.1819 49.1853 10.4817 49.1853C4.61851 49.1853 0.546875 46.0909 0.546875 37.1333Z" fill="#C6E2D5" />
															</svg>
														</div>
														<p className='px-3'>The design itself, when we go for villas, they just make it with four walls and it looks very contemporary but this one is a combination of contemporary as well as into the nature. If you’re looking for a home in South Bangalore, Aranya is the place.</p>
														<div className='testm-slider-Media position-relative'>
															<Image src='/images/testimonials-2.webp' className='img-fluid' alt='Testimonials' fill={true} 
																sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
																style={{
																	objectFit: 'cover',
																	objectPosition: '0px 0px',
    																transform: 'scale(1)'
																}}
															/>
														</div>
														<div className={`text-center testm-carousel-Info`}>
															<h6>Guruprasad</h6>
															<span className='testm-span-First'>IT Professional</span>
															<span className='testm-span-Last'>Community, Gravity Aranya</span>
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className='testm-slider-Carousel'>

													<div className='testm-slider-Content'>
														<div className={`text-center testm-svg-Icon`}>
															<svg width="55" height="50" viewBox="0 0 55 50" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M31.0027 37.1333C31.0027 21.6611 48.755 0 48.755 0L54.4553 3.7459C51.8494 8.30612 46.4749 18.2409 46.4749 24.5926C46.4749 31.9216 51.8494 31.9216 51.8494 38.9248C51.8494 46.2537 46.6377 49.1853 40.9374 49.1853C35.0743 49.1853 31.0027 46.0909 31.0027 37.1333ZM0.546875 37.1333C0.546875 21.6611 18.2992 0 18.2992 0L23.9995 3.7459C21.3936 8.30612 16.0191 18.2409 16.0191 24.5926C16.0191 31.9216 21.3936 31.9216 21.3936 38.9248C21.3936 46.2537 16.1819 49.1853 10.4817 49.1853C4.61851 49.1853 0.546875 46.0909 0.546875 37.1333Z" fill="#C6E2D5" />
															</svg>
														</div>
														<p className='px-3'>It's a Namma area! We would say, don't look for anything else, first visit, experience, you'll not get such good developers and locality where they choose to build the property. Definitely you'll miss it if you don't go for it.</p>
														<div className='testm-slider-Media position-relative'>
															<Image src='/images/testimonials-3.webp' className='img-fluid' alt='Testimonials' fill={true}
																sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
																style={{
																	objectFit: 'cover',
																	objectPosition: '0px 0px',
																}}
															/>
														</div>
														<div className={`text-center testm-carousel-Info`}>
															<h6>Rashmi & Manoj Nayak</h6>
															<span className='testm-span-First'>Entrepreneur and Aerospace Engineer</span>
															<span className='testm-span-Last'>1st Community Member, Gravity Aranya</span>
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className='testm-slider-Carousel'>

													<div className='testm-slider-Content'>
														<div className={`text-center testm-svg-Icon`}>
															<svg width="55" height="50" viewBox="0 0 55 50" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M31.0027 37.1333C31.0027 21.6611 48.755 0 48.755 0L54.4553 3.7459C51.8494 8.30612 46.4749 18.2409 46.4749 24.5926C46.4749 31.9216 51.8494 31.9216 51.8494 38.9248C51.8494 46.2537 46.6377 49.1853 40.9374 49.1853C35.0743 49.1853 31.0027 46.0909 31.0027 37.1333ZM0.546875 37.1333C0.546875 21.6611 18.2992 0 18.2992 0L23.9995 3.7459C21.3936 8.30612 16.0191 18.2409 16.0191 24.5926C16.0191 31.9216 21.3936 31.9216 21.3936 38.9248C21.3936 46.2537 16.1819 49.1853 10.4817 49.1853C4.61851 49.1853 0.546875 46.0909 0.546875 37.1333Z" fill="#C6E2D5" />
															</svg>
														</div>
														<p className='px-3'>I was given more freedom and flexibility while designing and adding customization,this is something no other build gave me as a choice. They were very accommodating.</p>
														<div className='testm-slider-Media position-relative'>
															<Image src='/images/living/media-9.png' className='img-fluid' alt='Living' fill={true}
																sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
																style={{
																	objectFit: 'cover',
																	objectPosition: '-45px 16px',
    																transform: 'scale(1.5)'
																}}
															/>
														</div>
														<div className={`text-center testm-carousel-Info`}>
															<h6>Somu Sharma</h6>
															<span className='testm-span-First'>IT Professional</span>
															<span className='testm-span-Last'>Community, Gravity Forest View</span>
														</div>
													</div>
												</div>
											</SwiperSlide>
											<SwiperSlide>
												<div className='testm-slider-Carousel'>

													<div className='testm-slider-Content'>
														<div className={`text-center testm-svg-Icon`}>
															<svg width="55" height="50" viewBox="0 0 55 50" fill="none" xmlns="http://www.w3.org/2000/svg">
																<path d="M31.0027 37.1333C31.0027 21.6611 48.755 0 48.755 0L54.4553 3.7459C51.8494 8.30612 46.4749 18.2409 46.4749 24.5926C46.4749 31.9216 51.8494 31.9216 51.8494 38.9248C51.8494 46.2537 46.6377 49.1853 40.9374 49.1853C35.0743 49.1853 31.0027 46.0909 31.0027 37.1333ZM0.546875 37.1333C0.546875 21.6611 18.2992 0 18.2992 0L23.9995 3.7459C21.3936 8.30612 16.0191 18.2409 16.0191 24.5926C16.0191 31.9216 21.3936 31.9216 21.3936 38.9248C21.3936 46.2537 16.1819 49.1853 10.4817 49.1853C4.61851 49.1853 0.546875 46.0909 0.546875 37.1333Z" fill="#C6E2D5" />
															</svg>
														</div>
														<p className='px-3'>Whatever we asked, they were very open and transparent,they answered all our questions honestly and patiently and that helped build trust and made our choice of choosing Gravity as our builder, very quick.</p>
														<div className='testm-slider-Media position-relative'>
															<Image src='/images/living/media-10.png' className='img-fluid' alt='Living' fill={true}
																sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
																style={{
																	objectFit: 'cover',
																	objectPosition: '-16px 7px',
    																transform: 'scale(1.2)'
																}}
															/>
														</div>
														<div className={`text-center testm-carousel-Info`}>
															<h6>Ravindra</h6>
															<span className='testm-span-First'>Doctor</span>
															<span className='testm-span-Last'>Community, Gravity Forest View</span>
														</div>
													</div>
												</div>
											</SwiperSlide>
										</Swiper>
									</div>
								</Parallax>
							</ParallaxProvider>
							{/* </div> */}
						</Col>
					</Row>
				</div>
			</Container>
		</>
	)
}

export default Journey