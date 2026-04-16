import React from 'react';
import staticStyle from './static.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion';
import Contact from '../Home/Contact';
import Link from 'next/link';

const Faqs = () => {
	return (
		<>
			<div className={staticStyle.StaticPage}>
				<div className={`about-widget faqs-widget ${staticStyle.faqWidget}`} style={{ backgroundImage: 'url(/images/faq.jpg)' }}>
					<div className='spacer-5' />
					<div className='spacer-5' />
					<Container className='z-index-1 position-relative'>
						<div className='gravity-head-center'>
							<h6 className={`mb-0 text-center ${staticStyle.faqHead}`}>FAQ<small>'s</small>
								<span> (Frequently Asked Questions)</span>
							</h6>
						</div>
						<div className='spacer-5' />
						
						<Row className='justify-content-center'>
							<Col xl={11}>
								<div className={staticStyle.faqAccordion}>
									<Accordion defaultActiveKey={['0']} alwaysOpen className={staticStyle.AccordionStyle}>
										<Accordion.Item eventKey="0">
											<Accordion.Header>What is the starting price of Gravity Smera Gardens?</Accordion.Header>
											<Accordion.Body>
											Gravity Smera Gardens brings you Luxury Private Garden Homes with all-exclusive 400 sq. ft. backyard gardens and a host of modern comforts embracing luxury with nature starting from INR 1.5 Cr*
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="1">
											<Accordion.Header>What is Gravity’s history, mission and vision?</Accordion.Header>
											<Accordion.Body>
											With over a decade of experience and some credible projects to our name, Gravity is committed to provide you more than just a living space but homes that touch lives and stay with you for a lifetime. Our mission is to empower your lifestyle choices with meaningful and quality living that enriches your lives. We design with a vision to bring a distinct community life where your home has it all— a communion with nature, with people, and your own mindful private comfort.
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="2">
											<Accordion.Header>How are you committed to the community and environment?</Accordion.Header>
											<Accordion.Body>
												With each project, we incorporate sought-after sustainable and natural materials projects, sourcing everything from Versatile Indian Stones to Renewable Materials from across the globe to inspire the changing perceptions of luxury. From Energy-Efficient Biophilic Architecture to Serene Pond Ecosystems, Rainwater Recharge Basins, Groundwater Replenishment and Eco-Friendly, Light-Diffusing Designs, we make sure to minimise our environmental footprint and embrace nature in the best ways before you move in and embrace your home!
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="3">
											<Accordion.Header>Where are your projects located?</Accordion.Header>
											<Accordion.Body>
												Find Gravity homes located all over, from Talaghattapura, Kanakapura Main Road and Banashankari in South Bangalore to Rajanakunte and Hoskote Town in North Bangalore, with upcoming projects in Thanisandra, Chandrapura, Hosur Road, Yelahanka and more. Call us at (+91 9513145554/+91 9739011616) or mail us at (marketing@gravityhomes.in) today.
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="4">
											<Accordion.Header>Can we book a site visit for your project?</Accordion.Header>
											<Accordion.Body>
												Yes, we encourage site visits for all our projects so that you can feel assured of your home and take the experience firsthand. In fact, you can visit us anytime during the course of our developments and take a look at the progress at different stages. Please call us at (+91 9513145554/+91 9739011616) to know more about our upcoming projects and our team will schedule a site visit at your convenience. You can also mail us at (marketing@gravityhomes.in) to enquire for any further information about Gravity.
											</Accordion.Body>
										</Accordion.Item>
										<Accordion.Item eventKey="5">
											<Accordion.Header>What is the process for purchasing a home with Gravity?</Accordion.Header>
											<Accordion.Body>
											We are excited to see your interest in purchasing your home with Gravity. Our easy 4-step process will ensure you a hassle-free buying experience. First, an Initial Consultation with our team to understand your requirements, preferences, and budget. This is followed by Property Selection where we will assist you in choosing a home that meets your lifestyle, then Scheduling Site Visit, we encourage site visits so that you can feel assured of your home and take the experience firsthand. Next, Legal Formalities where our legal experts will guide you through all necessary documentation, ensuring compliance and transparency, and creating personalised financial plans. Throughout the process, and after, our team will be available to provide you with all the guidance and support you need for a seamless and enjoyable purchase.
											</Accordion.Body>
										</Accordion.Item>
									</Accordion>
								</div>
							</Col>
						</Row>
						
					</Container>
					<div className='spacer-5' />
					<div className='spacer-5' />
				</div>
				<div className='about-widget contact-widget faq_contact'>
					<div className='spacer-5' />
					<Container>
						<div className='gravity-head-center'>
							<h6 className='mb-0 text-center'>Contact <span>Us</span></h6>
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
						<div className='spacer-4' />
					</Container>
					<div className='spacer-5' />
				</div>
			</div>
		</>
	)
}

export default Faqs