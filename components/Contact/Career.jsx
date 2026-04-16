import Link from 'next/link';
import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const CareerPage = () => {
	return (
		<>
			<div className='carer_page'>
				<div className='career-banner' style={{ backgroundImage: 'url(/images/contact-team-career.webp)' }}>
					<div className='gravity-head-center position-relative z-index-1'>
						<h1 className='mb-0 text-center career-heading'>Career</h1>
					</div>
				</div>
				<Container>
					<div className='spacer-5' />
					<Row className='justify-content-center'>
						<Col xxl={6} xl={7} lg={8} md={10} sm={12}>
							<div className='career_content_block'>
								<p className='mb-0'>Thank you for your interest in working with us. We are thrilled to meet people who design the difference by contributing to Gravity Homes! </p>
								<div className='spacer-2_5' />
								<p className='mb-0'>You can also reach us at <Link href='mailto:hr@gravityhomes.in'>(hr@gravityhomes.in)</Link> and connect with our team. We value your interest and hope to potentially welcome you to our team in the future. Have a good day!</p>
							</div>
						</Col>
					</Row>
					<div className='spacer-5' />
				</Container>
			</div>
		</>
	)
}

export default CareerPage