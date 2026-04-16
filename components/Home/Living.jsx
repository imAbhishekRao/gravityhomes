import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// import { Parallax, ParallaxProvider } from 'react-scroll-parallax'

const Living = () => {
	return (
		<>
			<div className='grid-style'>
				<Link href='/blog/how-physiological-routines-influence-design-homes-that-build-good-health/' className="grid-section-1">
				{/* <ParallaxProvider>
						<Parallax translateX={['0', '0']} translateY={['0', '0']} easing="easeInQuad" speed={-15}> */}
					<div className='flex-article'>
						<div className='article-media'>
							<Image src='/images/article/1.jpg' className='img-fluid' alt='Article-1' width='500' height='350' />
						</div>
						<div className='article-content-box'>
							<div className='article-info d-flex align-items-center justify-content-between'>
								<p className='mb-0'>Article</p>
								<span>By Gravity Homes</span>
							</div>
							<h6>How Physiological Routines Influence Design: Homes that Build Good Health</h6>
							<p className='mb-0 article-time'>November 06, 2023</p>
						</div>
					</div>
					{/* </Parallax>
					</ParallaxProvider> */}
				</Link>
				<Link href='/blog/sustainable-luxury-living-the-rise-of-eco-friendly-villas-in-bangalore/' className="grid-section-2">
					<div className='flex-article'>
						<div className='article-media'>
							<Image src='/images/article/2.jpg' className='img-fluid' alt='Article-2' width='500' height='350' />
						</div>
						<div className='article-content-box'>
							<div className='article-info d-flex align-items-center justify-content-between'>
								<p className='mb-0'>Article</p>
								<span>By Gravity Homes</span>
							</div>
							<h6>Sustainable Luxury Living: The Rise of Eco-Friendly Villas in Bangalore</h6>
							<p className='mb-0 article-time'>November 06, 2023</p>
						</div>
					</div>
				</Link>
				<Link href='/blog/sustainable-living-materials-that-everyone-is-rooting-for-nature-inclusive-living-for-a-better-tomorrow/' className="grid-section-3">
					<div className='flex-article'>
						<div className='article-media'>
							<Image src='/images/article/3.jpg' className='img-fluid' alt='Article-3' width='500' height='350' />
						</div>
						<div className='article-content-box'>
							<div className='article-info d-flex align-items-center justify-content-between'>
								<p className='mb-0'>Article</p>
								<span>By Gravity Homes</span>
							</div>
							<h6>Sustainable Living Materials That Everyone Is Rooting For: Nature-Inclusive Living for a Better Tomorrow</h6>
							<p className='mb-0 article-time'>November 06, 2023</p>
						</div>
					</div>
				</Link>
				<Link href='/blog/remarkable-evolution-of-north-bangalore-the-epicentre-of-growth-and-investment-opportunity/' className="grid-section-4">
					<div className='flex-article d-flex'>
						<div className='article-media'>
							<Image src='/images/article/4.jpg' className='img-fluid' alt='Article-4' width='500' height='350' />
						</div>
						<div className='article-content-box'>
							<div className='article-info d-flex align-items-center justify-content-between'>
								{/* <p className='mb-0 d-flex align-items-center'>
									<span className='me-3'>
										<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M10.6035 9.81402V11.5044C10.6035 11.9039 10.2766 12.23 9.87726 12.23H2.32638C1.92702 12.23 1.59998 11.9039 1.59998 11.5044V4.49562C1.59998 4.09626 1.92686 3.77002 2.32638 3.77002H9.87726C10.2766 3.77002 10.6035 4.0961 10.6035 4.49562V6.16474V6.14138L14.4 4.3625V11.6095L10.6035 9.81402Z" fill="#17574B" />
										</svg>
									</span> Video
								</p> */}
								<p className='mb-0'>Article</p>
								<span>By Gravity Homes</span>
							</div>
							<h6>Remarkable Evolution of North Bangalore: The Epicentre of Growth and Investment Opportunity</h6>
							<p className='mb-0 article-time'>November 06, 2023</p>
						</div>
					</div>
				</Link>
			</div>
		</>
	)
}

export default Living