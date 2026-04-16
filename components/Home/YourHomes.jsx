import React from 'react';
import { Navigation, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

import Image from 'next/image';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Link from 'next/link';

const YourHomes = ({ homeStyle }) => {
	return (
		<>
			<Swiper
				// install Swiper modules
				modules={[Navigation, Pagination, A11y]}
				spaceBetween={50}
				slidesPerView={1}
				navigation
				pagination={{ clickable: true }}
				
			//scrollbar={{ draggable: true }}
			//onSwiper={(swiper) => console.log(swiper)}
			//onSlideChange={() => console.log('slide change')}
			>
				<SwiperSlide>
					<div className='gravity-projects-wrap position-relative'>
						
						<div className='gravity-projects-box'>
							<div className='project-logo'>
								<Image src='/images/smera-without-white.png' className='img-fluid' alt='Smera White' width='141' height='80' />
							</div>
							<Link href='/project/gravity-smera'>
								<h4 className='d-flex align-items-center justify-content-between mb-0'>Gravity Smera Gardens
									<span>
										<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
											<g clipPath="url(#clip0_547_1953)">
												<path d="M1 8H15M15 8L10.0323 3M15 8L10.0323 13" stroke="#17574B" strokeWidth="1.5" />
											</g>
											<defs>
												<clipPath id="clip0_547_1953">
													<rect width="16" height="16" fill="white" transform="translate(0.5)" />
												</clipPath>
											</defs>
										</svg>
									</span>
								</h4>
								<div className='gravity-projects-sq'>
									<span>2100 - 3000 sqft.  </span>
									<span>3 & 4 BHK Duplex Villas</span>
								</div>
								<div className='gravity-projects-pin'>
									<span className='me-2 me-md-3'>
										<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12.5 11.5C11.837 11.5 11.2011 11.2366 10.7322 10.7678C10.2634 10.2989 10 9.66304 10 9C10 8.33696 10.2634 7.70107 10.7322 7.23223C11.2011 6.76339 11.837 6.5 12.5 6.5C13.163 6.5 13.7989 6.76339 14.2678 7.23223C14.7366 7.70107 15 8.33696 15 9C15 9.3283 14.9353 9.65339 14.8097 9.95671C14.6841 10.26 14.4999 10.5356 14.2678 10.7678C14.0356 10.9999 13.76 11.1841 13.4567 11.3097C13.1534 11.4353 12.8283 11.5 12.5 11.5ZM12.5 2C10.6435 2 8.86301 2.7375 7.55025 4.05025C6.2375 5.36301 5.5 7.14348 5.5 9C5.5 14.25 12.5 22 12.5 22C12.5 22 19.5 14.25 19.5 9C19.5 7.14348 18.7625 5.36301 17.4497 4.05025C16.137 2.7375 14.3565 2 12.5 2Z" fill="#17574B" />
										</svg>
									</span>
									Chandapura, Bengaluru
								</div>
							</Link>
						</div>
						<div className='gravity-projects-media position-relative'>
							<button type='button' className='btn new-launch-btn'>New Launch</button>
							<Image src='/images/new_img/smera_1.webp' className='img-fluid w-100 d-none d-md-block' alt='Smera' fill={true}  />
							<Image src='/images/new_img/smera_1_sm.webp' className='img-fluid w-100 d-md-none' alt='Smera' fill={true}  />
						</div>
						<div className='about-gravity-project'>
							<div className='about-gravity-hover'>
							Life Begins in Your
							<span>Home Garden</span>
							</div>
						</div>
					</div>
				</SwiperSlide>
				<SwiperSlide>
				<div className='gravity-projects-wrap position-relative'>
						
						<div className='gravity-projects-box'>
							<div className='project-logo'>
								<Image src='/images/aranya-logo.svg' className='img-fluid' alt='Aranya Logo' width='141' height='80' />
							</div>
							<Link href='/project/gravity-aranya'>
								<h4 className='d-flex align-items-center justify-content-between mb-0'>Gravity Aranya
									<span>
										<svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
											<g clipPath="url(#clip0_547_1954)">
												<path d="M1 8H15M15 8L10.0323 3M15 8L10.0323 13" stroke="#17574B" strokeWidth="1.5" />
											</g>
											<defs>
												<clipPath id="clip0_547_1954">
													<rect width="16" height="16" fill="white" transform="translate(0.5)" />
												</clipPath>
											</defs>
										</svg>
									</span>
								</h4>
								<div className='gravity-projects-sq'>
									<span>3200 - 3700 sqft.</span>
									<span>3 & 4 BHK Villaments</span>
								</div>
								<div className='gravity-projects-pin'>
									<span className='me-2 me-md-3'>
										<svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M12.5 11.5C11.837 11.5 11.2011 11.2366 10.7322 10.7678C10.2634 10.2989 10 9.66304 10 9C10 8.33696 10.2634 7.70107 10.7322 7.23223C11.2011 6.76339 11.837 6.5 12.5 6.5C13.163 6.5 13.7989 6.76339 14.2678 7.23223C14.7366 7.70107 15 8.33696 15 9C15 9.3283 14.9353 9.65339 14.8097 9.95671C14.6841 10.26 14.4999 10.5356 14.2678 10.7678C14.0356 10.9999 13.76 11.1841 13.4567 11.3097C13.1534 11.4353 12.8283 11.5 12.5 11.5ZM12.5 2C10.6435 2 8.86301 2.7375 7.55025 4.05025C6.2375 5.36301 5.5 7.14348 5.5 9C5.5 14.25 12.5 22 12.5 22C12.5 22 19.5 14.25 19.5 9C19.5 7.14348 18.7625 5.36301 17.4497 4.05025C16.137 2.7375 14.3565 2 12.5 2Z" fill="#17574B" />
										</svg>
									</span>
									Banshankari, Bengaluru
								</div>
							</Link>
						</div>
						<div className='gravity-projects-media position-relative'>
							<Image src='/images/new_img/G_aranya_1.webp' className='img-fluid w-100 d-none d-md-block' alt='Gravity Aranya' fill={true}  />
							<Image src='/images/new_img/G_aranya_sm.webp' className='img-fluid w-100 d-md-none' alt='Gravity Aranya' fill={true}  />
						</div>
						<div className='about-gravity-project'>
							<div className='about-gravity-hover'>Home that converse <span>with nature</span></div>
						</div>
					</div>
				</SwiperSlide>
			</Swiper>
		</>
	)
}

export default YourHomes