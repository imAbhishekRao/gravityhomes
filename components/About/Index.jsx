import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Index = () => {
	return (
		<>
			<div className='about-banner_bg' style={{ backgroundImage: 'url(/images/about/banner_1.webp)' }}>
				<Container className='z-index-1 position-relative'>
					<Row>
						<Col sm={12}>
							<h4>
								Founder <span>Inspirations</span>
							</h4>
						</Col>
					</Row>
				</Container>
			</div>
			<div className='about-section_widget'>
				<Container>
					<div className='spacer-4' />
					<div className='spacer-4' />
					<Row>
						<Col xl={4} lg={5} md={7} sm={12}>
							<div className='about_head_style'>
								<h4 className='mb-0'><span className='border-style_bottom'>A Shared Vision for Sustainable Living</span> <span className='about_span_style'>Surya & Namitha Surya</span></h4>
							</div>
						</Col>
					</Row>
					<div className='spacer-5 pb-md-3' />
					<Row className='justify-content-between'>
						<Col sm={12} md={5}>
							<p className='mb-2'>From farmland to flourishing communities, Surya N.C.'s journey is one of vision and innovation, deeply influenced by his upbringing. Born to farmer parents in Devanahalli, Surya's work ethic was instilled from a young age. He began his career in exports in 1986, but his entrepreneurial spirit, alongside Namitha's keen eye for detail and collaborative approach, yearned to create a deeper impact.</p>
							<p className='mb-2'>Entering the real estate industry together, Surya was captivated by the evolving landscape. While the apartment market thrived, they saw a burgeoning opportunity in the villa and villaments sector. This unexplored territory ignited their passion for innovation, leading them to establish Gravity in 2008.</p>
							<p className='mb-2'>Growing up on a farm instilled in Surya a deep respect for nature and its influence on well-being. This translates into his design philosophy, where he prioritizes maximizing spatial comfort and co-creating with nature. He champions the use of "Materials with Life" - elements that foster a connection with the outdoors and promote a sense of harmony.</p>
							<p className='mb-0'>Surya goes beyond aesthetics. He believes nature is a vital factor affecting productivity and happiness within a home. His vision for Gravity Living extends beyond bricks and mortar. He aspires to create "live spaces" - vibrant communities where residents are enriched by their surroundings. By incorporating nature and fostering a sense of connection, he aims to inspire and improve lives, offering not just a place to live, but a quality investment for the future, with a strong focus on sustainable living practices.</p>
						</Col>
						<Col sm={12} md={6}>
							<div className='position-relative h-100 d-none d-md-block'>
								<Image
									src='/images/about/aranya_banner_1.webp'
									className='img-fluid'
									fill={true}
									style={{ objectFit: 'cover' }}
									alt='aranya-banner'
								/>
							</div>
						</Col>
					</Row>
					<div className='spacer-5 pb-3' />
				</Container>
			</div>
			<div className='inspiration-section_widget'>
				<div className='founder_inspiration_ceo'>
					<div className='row justify-content-center'>
						<div className='col-md-6 col-12 bg-white p-0 order-last order-md-first'>
							<div className='ceo_msg d-flex flex-column align-items-center'>
								<p className='mb-0'>“We all know that home is a feeling. When your home inspires you, motivates you, and fuels your well-being, that's when you know you've found something truly special."</p>
								<div className='d-flex flex-column name-info text-md-end align-items-center align-items-md-end justify-content-end w-100'>
									<p className='mb-0'>~ Surya N.C.</p>
									<span>Founder & CEO</span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div className='about_teams'>
				<Container>
					<Row>
						<Col md={12} xs={12}>
							<div className='about_teams_style'>
								<Swiper
									modules={[Navigation, Pagination, A11y]}
									navigation
									pagination={{ clickable: true }}
									breakpoints={
										{
											1900: {
												spaceBetween: 50,
												slidesPerView: 2,

											},
											768: {
												slidesPerView: 2,
												spaceBetween: 16
											},
											320: {
												slidesPerView: 1.3,
												spaceBetween: 16,
												pagination: false,
												navigation: false,
											}
										}
									}
								>
									<SwiperSlide>
										<div className='grid_about_box'>
											<div className='grid_about_media'>
												<Image
													src='/images/about/Surya.webp'
													className='img-fluid'
													fill={true}
													style={{ objectFit: 'cover' }}
													alt='Surya N.C'
												/>
											</div>
											<div className='grid_about_info'>
												<h6>Surya N.C. <span>Founder & M.D., Gravity Homes</span></h6>
											</div>
										</div>
									</SwiperSlide>
									<SwiperSlide>
										<div className='grid_about_box'>
											<div className='grid_about_media'>
												<Image
													src='/images/about/Namitha.webp'
													className='img-fluid'
													fill={true}
													style={{ objectFit: 'cover' }}
													alt='Namitha Surya'
												/>
											</div>
											<div className='grid_about_info'>
												<h6>Namitha Surya <span>Director, Gravity Homes</span></h6>
											</div>
										</div>
									</SwiperSlide>
								</Swiper>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
			<div className='spacer-4 mb-2'></div>
			<Row>
				<Col sm={12} md={6}>
					<div className='position-relative d-md-none d-block about-mobile-media'>
						<Image
							src='/images/about/aranya_banner_1.webp'
							className='img-fluid'
							fill={true}
							style={{ objectFit: 'cover' }}
							alt='aranya-banner'
						/>
					</div>
				</Col>
			</Row>
			<div className='about_banner_gravity' style={{ backgroundImage: 'url(/images/about/about_bnr.jpg)' }}>
				<Container className='z-index-1 position-relative'>
					<Row className='justify-content-center'>
						<Col sm={12} lg={8} xl={7} xxl={6}>
							<div className='about_gravity_content'>
								<h2 className='mb-0'>Grounded & Growing</h2>
								<div className='d-none d-md-block'>
									<svg xmlns="http://www.w3.org/2000/svg" width="886" height="4" viewBox="0 0 886 4" fill="none">
										<path d="M0 2L110.741 1.03125L221.481 0.46875L443 0L664.481 0.46875L775.222 1.03125L886 2L775.222 2.96875L664.481 3.53125L443 4L221.481 3.53125L110.741 2.96875L0 2Z" fill="url(#paint0_radial_4943_23040)" />
										<defs>
											<radialGradient id="paint0_radial_4943_23040" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(443 2) scale(313.258 257.594)">
												<stop stop-color="#AF6A28" />
												<stop offset="1" stop-color="#AF6A28" stop-opacity="0" />
											</radialGradient>
										</defs>
									</svg>
								</div>
								<p className='mb-0 text-center px-3'>With 20 projects,  100+ Acres of expansive landscape, and 1000+ homes designed for luxury living in Bangalore, we are happy to count these numbers and all the more, your appreciation that follows. Thank you for receiving Gravity Living with so much warmth and embracing our projects to be your homes.</p>
							</div>
						</Col>
					</Row>
				</Container>
			</div>
		</>
	)
}

export default Index