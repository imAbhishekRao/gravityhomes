import React from 'react';
import Accordion from 'react-bootstrap/Accordion';

const FAQs = () => {
	return (
		<>
			<Accordion defaultActiveKey={['0']} alwaysOpen>
				<Accordion.Item eventKey="0">
					<Accordion.Header className='faq_home'>What is the starting price of Gravity Smera Gardens?</Accordion.Header>
					<Accordion.Body>
					Gravity Smera Gardens brings you Luxury Private Garden Homes with all-exclusive 400 sq. ft. backyard gardens and a host of modern comforts embracing luxury with nature starting from INR 1.5 Cr*
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="1">
					<Accordion.Header className='faq_home'>What is Gravity’s history, mission and vision?</Accordion.Header>
					<Accordion.Body>
						With over a decade of experience and some credible projects to our name, Gravity is committed to provide you more than just a living space but homes that touch lives and stay with you for a lifetime. Our mission is to empower your lifestyle choices with meaningful and quality living that enriches your lives. We design with a vision to bring a distinct community life where your home has it all— a communion with nature, with people, and your own mindful private comfort.
					</Accordion.Body>
				</Accordion.Item>
				<Accordion.Item eventKey="2">
					<Accordion.Header className='faq_home'>How are you committed to the community and environment?</Accordion.Header>
					<Accordion.Body>
						With each project, we incorporate sought-after sustainable and natural materials projects, sourcing everything from Versatile Indian Stones to Renewable Materials from across the globe to inspire the changing perceptions of luxury. From Energy-Efficient Biophilic Architecture to Serene Pond Ecosystems, Rainwater Recharge Basins, Groundwater Replenishment and Eco-Friendly, Light-Diffusing Designs, we make sure to minimise our environmental footprint and embrace nature in the best ways before you move in and embrace your home!
					</Accordion.Body>
				</Accordion.Item>
			</Accordion>
		</>
	)
}

export default FAQs