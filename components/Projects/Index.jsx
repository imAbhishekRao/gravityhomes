import React from 'react';
import projectStyle from './projects.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import Link from 'next/link';
import ProjectLists from './ProjectLists';
import ProjectsFaq from './ProjectsFaq';
import Image from 'next/image';

const Index = () => {
	return (
		<>
			<div className={`static-page-style ${projectStyle.StaticPage} ${projectStyle.StaticPageAll}`}>
				<div className={projectStyle.staticTermsBanner} style={{ backgroundImage: 'url(/images/projects/project-banner.webp)', backgroundSize: '100% 278.638%', backgroundPosition: '0px -468.5px' }}>
					<div className='gravity-head-center position-relative z-index-1'>
						<h1 className={`mb-0 text-center text-white ${projectStyle.staticHeadText}`}>Projects</h1>
					</div>
				</div>
				<div className={projectStyle.projectHighlights}>
					<Container>
						<Row className='justify-content-center'>
							<Col sm={12}>
								<div className={projectStyle.projectHighlightsFlex}>
									<div className={`d-flex flex-column align-items-center ${projectStyle.projectHighlightsItm}`}>
										<div className={projectStyle.highlightsCount}>20+</div>
										<div className={`d-flex align-items-center ${projectStyle.highlightsDesc}`}>
											<span className='me-2'>
												<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
													<rect x="8.25" y="6.375" width="22.875" height="27.25" stroke="#17574B" strokeWidth="1.5" />
													<path d="M11.875 11.25H25" stroke="#17574B" strokeWidth="1.5" />
													<path d="M14.375 19.375H27.5" stroke="#17574B" strokeWidth="1.5" />
													<path d="M11.875 27.5H25" stroke="#17574B" strokeWidth="1.5" />
												</svg>
											</span> Projects
										</div>
									</div>
									<div className={`d-flex flex-column align-items-center ${projectStyle.projectHighlightsItm}`}>
										<div className={projectStyle.highlightsCount}>100+</div>
										<div className={`d-flex align-items-center ${projectStyle.highlightsDesc}`}>
											<span className='me-2'>
												<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M2.83689 27.375L11.2634 17.1189L19.6899 27.375H2.83689Z" stroke="#17574B" strokeWidth="1.5" />
													<path d="M16.707 20.625L24.375 11.25L38.1772 28.125H22.4999" stroke="#17574B" strokeWidth="1.5" />
												</svg>
											</span> Acres
										</div>
									</div>
									<div className={`d-flex flex-column align-items-center ${projectStyle.projectHighlightsItm}`}>
										<div className={projectStyle.highlightsCount}>1000+</div>
										<div className={`d-flex align-items-center ${projectStyle.highlightsDesc}`}>
											<span className='me-2 position-relative'>
												{/* <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
													<path d="M8.875 34.875V19.7355L20.6128 10.3452L31.75 19.7239V34.875H23.75H17.5H8.875Z" stroke="#17574B" strokeWidth="1.5" />
													<path d="M3.125 18.4375L20.625 4.375L30.8125 13.125M37.1875 18.4375L30.8125 13.125M30.8125 13.125V7.5" stroke="#17574B" strokeWidth="1.5" />
												</svg> */}
												{/* <svg xmlns="http://www.w3.org/2000/svg" width="36" height="34" viewBox="0 0 36 34" fill="none">
													<path d="M6.875 32.375V17.2355L18.6128 7.84523L29.75 17.2239V32.375H21.75H15.5H6.875Z" stroke="#17574B" strokeWidth="1.5"/>
													<path d="M1.125 15.9375L18.625 1.875L28.8125 10.625M35.1875 15.9375L28.8125 10.625M28.8125 10.625V5" stroke="#17574B" strokeWidth="1.5"/>
												</svg> */}
												<Image
													src='/images/projects/home.png'
													style={{ objectFit: 'contain' }}
													className='img-fluid'
													width='34'
													height='31'
													alt='Home'
												/>
											</span> Homes
										</div>
									</div>
								</div>
							</Col>
							<Col sm={12} md={10} lg={7} className='text-center'>
								<p className={projectStyle.projectParaText}>Thank you for receiving Gravity Living with so much warmth, <span className='d-block'>embracing our projects to be your homes.</span></p>
								{/* <Link href='#allProjectsSectionss' role='button' className={`mb-4 d-inline-block ${projectStyle.iconArrowDown}`}>
									<svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M1 7L12 18L23 7" stroke="#121212" strokeWidth="1.5" />
									</svg>
								</Link> */}
							</Col>
							<Col sm={12} md={12} lg={12} id='allProjectsSectionss'>
								<ProjectLists projectStyle={projectStyle} />
								<div className='spacer-5' />
							</Col>
						</Row>
					</Container>
				</div>
				<div className='about-widget faqs-widget' style={{ backgroundImage: 'url(/images/faq.jpg)' }}>
					<div className='spacer-5' />
					<Container className='z-index-1 position-relative'>
						<div className='gravity-head-center'>
							<h6 className={`mb-0 text-center faqs-head text_bold ${projectStyle.faqsTitle}`}>Faq'< span>s</span></h6>
						</div>
						<div className='spacer-5' />
						<ProjectsFaq />
						<div className='text-center explore-all-links'>
							<Link href='/faqs' className='link-explore mt-3 mt-md-4'>
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
				</div>
			</div>
		</>
	)
}

export default Index