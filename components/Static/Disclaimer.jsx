import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import staticStyle from './static.module.css';

const Disclaimer = () => {
	return (
		<>
			<div className={`static-page-style ${staticStyle.StaticPage} ${staticStyle.StaticPageDisclim}`}>
				<div className={staticStyle.staticTermsBanner} style={{ backgroundImage: 'url(/images/disclaimer.jpeg)', backgroundSize: '108.161% 281.287%', backgroundPosition: '-80.786px -176px'}}>
					<div className='gravity-head-center position-relative z-index-1'>
						<h1 className={`mb-0 text-center ${staticStyle.staticHeadText}`}>Disclaimer</h1>
					</div>
				</div>
				<Container>
					<div className='spacer-5' />
					<Row>
						<Col md={12}>
							<div className={`border-0 ${staticStyle.paraPadding}`}>
								<p className='mb-0'>The artistic work contained in this web site like 360 degree view, elevations, walkthrough, E-Brochures, other similar material, etc are for representation purpose only and do not form part of any agreement or legal binding on part of Gravity Homes. Expressed views are not a part of the actual deliverables. These are artistic representations only. Soft furnishing/furniture, gadgets are not part of the offering. The product and technology displayed if any, or referred to is for representation purposes only and the company does not guarantee the use of all of them. Specifications are indicative and are subject to change as decided by the company or the competent authority. Marginal variation may be necessary during construction. The extent/number/variety of the equipment/appliances and their brand thereof is tentative and liable to change at the sole discretion of the company. Applicant/allottee or any person shall not have any right to raise objection in this regard.</p>
							</div>
							<div className={`border-0 ${staticStyle.paraPadding}`}>
								<p className='mb-0'>Gravity Homes makes all reasonable efforts to include accurate and up-to-date information on this website. However, Gravity Homes does not make any warranties or representations, express or implied, as to the timeliness, accuracy or completeness of the information contained or referred to on its website and therefore, any advice or information received via this website should not be acted upon without consulting our sales team.</p>
							</div>
							<div className={`border-0 ${staticStyle.paraPadding}`}>
								<p className='mb-0'>Any access and use of this site is and will be at the risk of the User and neither Gravity Homes nor its directors / employees shall be liable or responsible for any loss or damage arising directly or indirectly (including special, incidental or consequential loss or damage) from the use of this website howsoever arising, including due to any unavailability of the website or any part thereof or any contents or associated services or any computer viruses or technical bugs.</p>
							</div>
							<div className={`border-0 ${staticStyle.paraPadding}`}>
								<p className='mb-0'>Gravity Homes reserves the right to make any changes in any way, at any time and for any reason, without prior notice, to the contents and information on this site, including materials, equipment, specifications, prices and/or availability. It is clearly understood that dimensions and floor plan layouts are approximate and building illustrations are design concepts only. Images are for illustrative purposes only and view shots are representational and are not intended to reflect actual views from any particular unit.</p>
							</div>
							<div className={`border-0 ${staticStyle.paraPadding}`}>
								<p className='mb-0'>Except with specific prior permission of Gravity Homes, any reproduction, retransmission, or other use of any information proprietary or otherwise on this site is strictly prohibited. Copyright in all the designs, plans, views shared on this website shall remain the property of Gravity Homes and cannot be used on any other work except by Agreement with Gravity Homes.</p>
							</div>
							<div className={`border-0 ${staticStyle.paraPadding}`}>
								<p className='mb-0'>It is the responsibility of the User to evaluate the accuracy, completeness and usefulness of any opinions, advice, services or other information provided. All information contained on any page is distributed with the understanding that the authors, publishers, and distributors are not rendering legal or other professional advice or opinions on specific facts or matters, and accordingly assume no liability whatsoever in connection with its use. Consult your own legal or tax advisor with respect to your personal situation.</p>
							</div>
							<div className={`border-0 ${staticStyle.paraPadding}`}>
								<p className='mb-0'>In no event shall Gravity Homes and its group companies (that is, its affiliates, subsidiaries, ultimate holding company and its subsidiaries) ("we", "our", "us", or "Gravity", “Gravity Homes”) be liable for any direct, indirect, special, incidental, or consequential damages arising out of the use of the information herein.</p>
							</div>
							<div className={`border-0 ${staticStyle.paraPadding}`}>
								<p className='mb-0'>Any use of this website and any legal dispute arising in connection therewith shall exclusively be governed by Indian law and all arbitration shall fall within the jurisdiction of Bangalore Courts.</p>
							</div>
						</Col>
					</Row>
					<div className='spacer-5' />
				</Container>
			</div>
		</>
	)
}

export default Disclaimer