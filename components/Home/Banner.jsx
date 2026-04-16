import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css/effect-fade';
import { EffectFade, Autoplay, Navigation, Pagination, A11y } from 'swiper/modules';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';
import Link from 'next/link';

const HomeBanner = ({ homeStyle, scrollSection }) => {
	return (
		<>
			<Swiper
				modules={[EffectFade, Autoplay, Navigation, Pagination, A11y]}
				spaceBetween={50}
				effect={'fade'}
				slidesPerView={1}
				autoplay={{
					delay: 45000000,
					disableOnInteraction: false,
				}}
				navigation={false}
				pagination={{ clickable: true }}
				className={`home-banner-style home-banner-style-bullet ${homeStyle.homeBanner}`}
			>
				<SwiperSlide>
					<div className={`gravity-bg-banner ${homeStyle.gravityBg}`} style={{ backgroundImage: 'url(/images/home_banner/Hero_1.webp)', backgroundSize: '106.904% 119.752%', backgroundPosition: '-54.129px -24.264px' }}>
						<Container className='z-index-1 position-relative h-100'>
							<Row className='h-100 align-items-center'>
								<Col>
									<ParallaxProvider>
										<Parallax speed={-10}>
											<h2 className='text-white'>
											<span>Meaningful Homes</span><br /> are made with <span>You</span>
											</h2>
										</Parallax>
									</ParallaxProvider>
								</Col>
							</Row>
						</Container>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={`gravity-bg-banner ${homeStyle.gravityBg}`} style={{ backgroundImage: 'url(/images/home_banner/Hero_2.webp)', backgroundSize: '100% 107.602%', backgroundPosition: '0px -28.123px' }}>
						<Container className='z-index-1 position-relative h-100'>
							<Row className='h-100 align-items-center'>
								<Col>
									<ParallaxProvider>
										<Parallax speed={-10}>
											<h2 className='text-white'>
											Meaningful <span>Homes</span><br /> are made with <span>You</span>
											</h2>
										</Parallax>
									</ParallaxProvider>
								</Col>
							</Row>
						</Container>
					</div> 
				</SwiperSlide>
				<SwiperSlide>
					<div className={`gravity-bg-banner ${homeStyle.gravityBg}`} style={{ backgroundImage: 'url(/images/home_banner/Hero_4.webp)', backgroundSize: '110.939% 141.454%', backgroundPosition: '-29.302px -19.787px' }}>
						<Container className='z-index-1 position-relative h-100'>
							<Row className='h-100 align-items-center'>
								<Col>
									<ParallaxProvider>
										<Parallax speed={-10}>
											<h2 className='text-white'>
											Meaningful <span>Homes</span><br /> are made with <span>You</span>
											</h2>
										</Parallax>
									</ParallaxProvider>
								</Col>
							</Row>
						</Container>
					</div>
				</SwiperSlide>
				<SwiperSlide>
					<div className={`gravity-bg-banner ${homeStyle.gravityBg}`} style={{ backgroundImage: 'url(/images/home_banner/Hero_3.webp)', backgroundSize: '121.194% 129.632%', backgroundPosition: '-31.54px -61.3px' }}>
						<Container className='z-index-1 position-relative h-100'>
							<Row className='h-100 align-items-center'>
								<Col>
									<ParallaxProvider>
										<Parallax speed={-10}>
											<h2 className='text-white'>
											Meaningful <span>Homes</span><br /> are made with <span>You</span>
											</h2>
										</Parallax>
									</ParallaxProvider>
								</Col>
							</Row>
						</Container>
					</div>
				</SwiperSlide>
			</Swiper>
			<div className='scroll-to-about position-relative w-100 text-center'>
				<Container>
					<Row>
						<Col>
							<div className='scroll-icon text-center' title='Gravity Scroll'>
								<svg className="svg-cursor-pointer" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={() => scrollSection.current.scrollIntoView()}>
									<path d="M1 7L12 18L23 7" stroke="#121212" strokeWidth="1.5" />
								</svg>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}

export default HomeBanner