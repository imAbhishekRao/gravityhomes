import React from 'react';
import { Parallax, ParallaxProvider } from 'react-scroll-parallax';

import { EffectCube, Autoplay, Pagination, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';
import LazyLoadBackgroundImage from '../Common/LazyLoadBackgroundImage';

const LivingPalette = () => {
	return (
		<>
			<Swiper
				modules={[Pagination, Autoplay, A11y]}
				autoplay={{
					delay: 4500,
					disableOnInteraction: false,
				}}
				loop={true}
				pagination={{ clickable: true }}
				className='living--palette'

				breakpoints={
					{
						1200: {
							slidesPerView: 1,
							spaceBetween: 30,

						},
						991: {
							slidesPerView: 1,
							spaceBetween: 16
						}
					}
				}
			>
				<SwiperSlide>

					<LazyLoadBackgroundImage
						src="/images/new_img/LivingPalette_1.webp"
						className={`living-palette-1 living_palette`}
						style={{ backgroundSize: 'cover', backgroundPosition: '50%'}} // Add any specific height or other styles needed
						>
							<ParallaxProvider>
								<Parallax speed={-5}>

									<div className='living_palette_overlay'>
										<h5 className='position-relative'>
											<span className='d-block'>People</span>
											who build a life together, enriching
											journeys along the way.
										</h5>
										<p className='mb-0'>Community</p>
									</div>
								</Parallax>
							</ParallaxProvider>

					</LazyLoadBackgroundImage>
				</SwiperSlide>
				<SwiperSlide>
					<LazyLoadBackgroundImage
						src="/images/new_img/LivingPalette_2.webp"
						className={`living-palette-1 living_palette`}
						style={{ backgroundSize: 'cover', backgroundPosition: '50%'}} // Add any specific height or other styles needed
						>
						<ParallaxProvider>
							<Parallax speed={-5}>
								<div className='living_palette_overlay'>
									<h5 className='position-relative'>
										A communion with
										<span className='d-block'>The World Around You</span>
										nature is where we thrive the most
									</h5>
									<p className='mb-0'>Nature</p>
								</div>
							</Parallax>
						</ParallaxProvider>
					</LazyLoadBackgroundImage>
				</SwiperSlide>
				<SwiperSlide>
					<LazyLoadBackgroundImage
						src="/images/new_img/LivingPalette_3.webp"
						className={`living-palette-1 living_palette`}
						style={{ backgroundSize: 'cover', backgroundPosition: '50%'}} // Add any specific height or other styles needed
						>
						<ParallaxProvider>
							<Parallax speed={-5}>

								<div className='living_palette_overlay'>
									<h5 className='position-relative'>
										Spending
										<span className='d-block'>Time With Yourself</span>
										embracing personal moments of reflection
									</h5>
									<p className='mb-0'>Private Comfort</p>
								</div>
							</Parallax>
						</ParallaxProvider>
					</LazyLoadBackgroundImage>
				</SwiperSlide>
			</Swiper>
		</>
	)
}

export default LivingPalette