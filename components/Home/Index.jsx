import React, { useRef } from 'react';
import { Col, Row } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Chatbot from './Chatbot';
import HomeBanner from './Banner.jsx'
import YourHomes from './YourHomes';

import homeStyle from './home.module.css';
import Image from 'next/image';
import Link from 'next/link';
import Journey from './Journey';
import Living from './Living';
import NewsLetter from './NewsLetter';
import Contact from './Contact';
import FAQs from './FAQ';
import { Parallax, ParallaxBanner, ParallaxProvider } from 'react-scroll-parallax'; 

import Enquire from './Enquire';
import LivingPalette from './LivingPalette';


const Index = () => {

	const scrollSection = useRef(null);

	return (
		<>
			{/* <Chatbot homeStyle={homeStyle} /> */}
			<Enquire />
			<div className={homeStyle.gravityHomeBanner}>
				<HomeBanner homeStyle={homeStyle}  scrollSection={scrollSection} />
			</div>
			
			<div className='about-widget' id='scrollSection' ref={scrollSection}>
				<div className='spacer-5' />
				<div className='position-relative'>
					<Row>
						<ParallaxProvider>
							<Parallax speed={1}>
								<Col sm={9}>
									<Image src='/images/new_img/interior1.webp' className='img-fluid w-100' alt='Interiors' width='1032' height='482' priority quality={75} />
								</Col>
							</Parallax>
						</ParallaxProvider>
					</Row>
					<Row className='justify-content-end'>
						<Col sm={9} md={8} lg={7}>
						
							<ParallaxProvider>
								<Parallax speed={20}>
								
									<div className='about-widget-content d-flex flex-column home-fonts'>
										<h6 className='mb-0'>A Quality Lifestyle Is Incomplete Without A <span>Rooted Experience</span></h6>
										<p className='mb-0'>We believe that the most engaging experiences have one thing in common—a reflective understanding of space. Creating an environment that exudes your warmth, we are keen on designing spaces that see, support and speak of your own novel ideas of a living that feels grounded in your dreams.</p>
										<div className='d-inline-block'>
											
											<Link href='/about'>
												Know more
												<span className='ms-3'>
													<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
														<path d="M0.5 8H14.5M14.5 8L9.53226 3M14.5 8L9.53226 13" stroke="#17574B" strokeWidth="1.5" />
													</svg>
												</span>
											</Link>
											
										</div>
									</div>
									
								</Parallax>
							</ParallaxProvider>
							
						</Col>
					</Row>
				</div>
			</div>
			<div className='about-widget'>
				<div className='spacer-5' />
				<div className='container'>
					<div className='gravity-head-center home-fonts'>
						<h6 className='mb-0 text-center'>A Living <span>Palette</span></h6>
					</div>
				</div>
				<div className='spacer-4' />
				<div className='position-relative living_palette_widget'>
					<Container>
						<LivingPalette />
					</Container>
					{/* <Row>

						<Col sm={12} md={7} lg={7} xxl={7} className='pe-0 d-flex order-2 order-md-1'>

							<div className='block-left-content margin-top-64 d-flex flex-column justify-content-center' style={{ backgroundImage: 'url(/images/nav_bg.jpg)' }}>
								<ParallaxProvider>
									<Parallax speed={-3}>
										<p className='mb-0 z-index-1 position-relative'><span>People</span> who build a life together, enriching journeys along the way.</p>
										<span className='z-index-1 position-relative'>Community</span>
									</Parallax>
								</ParallaxProvider>
							</div>

						</Col>

						<Col sm={12} md={5} lg={5} xxl={5} className='ps-0 order-1 order-md-2 position-relative height-sm'>
							<Image src='/images/about-1.jpg' className='img-fluid img-cover-fit' alt='' fill={true} />
							
						</Col>
					</Row>
					<Row>
						<Col sm={12} md={5} lg={5} xxl={5} className='pe-0 position-relative height-sm'>
							<Image src='/images/about-2.jpg' className='img-fluid img-cover-fit' alt='' fill={true} />
							
						</Col>
						<Col sm={12} md={7} lg={7} xxl={7} className='ps-0 d-flex'>

							<div className='block-left-content right-content d-flex flex-column justify-content-center block-right-content-2'>
								<ParallaxProvider>
									<Parallax speed={-3}>
										<p className='mb-0 z-index-1 position-relative'>
											A communion with
											<span className='z-index-1 position-relative'>the world around you,</span> nature is where we thrive the most.</p>
										<span className='z-index-1 position-relative'>Nature</span>
									</Parallax>
								</ParallaxProvider>
							</div>

						</Col>
					</Row>
					<Row>
						<Col sm={12} md={7} lg={7} xxl={7} className='pe-0 d-flex order-2 order-md-1'>
							<div className='block-left-content margin-bottom-64 d-flex flex-column justify-content-center'>
								<ParallaxProvider>
									<Parallax speed={-3}>
										<p className='mb-0 z-index-1 position-relative'>
											Spending
											<span className='z-index-1 position-relative'>time with yourself,</span>
											embracing personal moments of reflection.</p>
										<span className='z-index-1 position-relative'>Private Comfort</span>
									</Parallax>
								</ParallaxProvider>
							</div>
						</Col>
						<Col sm={12} md={5} lg={5} xxl={5} className='ps-0 order-1 order-md-2 position-relative height-sm'>
							<Image src='/images/about-3.jpg' className='img-fluid img-cover-fit' alt='' fill={true} />							
						</Col>
					</Row> */}

				</div>
				<div className='spacer-5' />
			</div>
			<div className='about-widget your-homes'>
				<Container>
					<div className='gravity-head-center home-fonts'>
						<h6 className='mb-0 text-center'>Your <span>Homes</span></h6>
					</div>
				</Container>

				<Container className='p-sm-1_2'>


					{/* <ParallaxProvider>
						<Parallax speed={-5}> */}
							<YourHomes homeStyle={homeStyle} />
							<div className='text-center explore-all-links'>
								<Link href='/project' className='link-explore'>
									Explore All Projects
									<span className='ms-3'>
										<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M0.5 8H14.5M14.5 8L9.53226 3M14.5 8L9.53226 13" stroke="#17574B" strokeWidth="1.5" />
										</svg>
									</span>
								</Link>
							</div>
						{/* </Parallax>
					</ParallaxProvider> */}

					<div className='spacer-5' />
				</Container>
			</div>
			<div className='about-widget journey-explore'>
				<Journey homeStyle={homeStyle} />
			</div>
			<div className='about-widget living-more'>
				<div className='spacer-5' />
				<Container>
					<div className='gravity-head-center home-fonts'>
						<h6 className='mb-0 text-center'>More from the World Of <span>Living</span></h6>
					</div>
					<div className='spacer-5' />
					<Living />
					<div className='text-center explore-all-links'>
						<Link href='/blog/' className='link-explore'>
							Explore More
							<span className='ms-3'>
								<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M0.5 8H14.5M14.5 8L9.53226 3M14.5 8L9.53226 13" stroke="#17574B" strokeWidth="1.5" />
								</svg>
							</span>
						</Link>
					</div>
				</Container>
				<div className='spacer-5' />
			</div>


			<ParallaxProvider>
				<ParallaxBanner
					layers={[{ image: '/images/newsletter.jpg', speed: -15 }]}
					className="about-widget news-letter aspect-[2/1]"
				>
					{/* <div className='' style={{ backgroundImage: 'url(/images/newsletter.jpg)' }}> */}
						<Container className='z-index-1 position-relative'>
					
							<NewsLetter />
					
						</Container>
					{/* </div> */}
				</ParallaxBanner>
			</ParallaxProvider>

			<div className='about-widget contact-widget'>
				<div className='spacer-5' />
				<Container>
					<div className='gravity-head-center home-fonts'>
						<h6 className='mb-0 text-center'>Contact <span className='contact_us_'>Us</span></h6>
						<p className='text-start text-md-center mb-0'>We’d love to know more about the spaces that make you feel at home.</p>
					</div>
					<div className='spacer-4' />
					<Row className='justify-content-center'>
						<Col sm={10} md={10} xl={12}>
							<h5>Your home Built to Converse</h5>
						</Col>
						<Col sm={10} md={10} xl={10} className='col-10'>
							<Contact />
						</Col>
					</Row>


				</Container>
				<div className='spacer-5' />
			</div>
			<ParallaxProvider>
				<ParallaxBanner
					layers={[{ image: '/images/faq.jpg', speed: -15 }]}
					className="about-widget faqs-widget aspect-[2/1]"
				>
				{/* <div className='about-widget faqs-widget' style={{ backgroundImage: 'url(/images/faq.jpg)' }}> */}
					<div className='spacer-5' />
					
					<Container className='z-index-1 position-relative'>
						<div className='gravity-head-center'>
							<h6 className='mb-0 text-center faqs-head text_bold'>FAQ’< span>s</span></h6>
						</div>
						<div className='spacer-5' />
						
								<FAQs />

								<div className='text-center explore-all-links'>
									<Link href='/faqs' className='link-explore'>
										View All
										<span className='ms-3'>
											<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
												<path d="M0.5 8H14.5M14.5 8L9.53226 3M14.5 8L9.53226 13" stroke="#17574B" strokeWidth="1.5" />
											</svg>
										</span>
									</Link>
								</div>
							
					</Container>
					
					<div className='spacer-5' />

				{/* </div> */}
			</ParallaxBanner>
			</ParallaxProvider>
		</>
	)
}

export default Index