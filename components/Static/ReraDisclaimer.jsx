import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import staticStyle from './static.module.css';

const ReraDisclaimer = () => {
	return (
		<>
			<div className={`static-page-style ${staticStyle.StaticPage} ${staticStyle.StaticPageRera}`}>
				<div className={staticStyle.staticTermsBanner} style={{ backgroundImage: 'url(/images/rera-disclaimer.jpeg)'}}>
					<div className='gravity-head-center position-relative z-index-1'>
						<h1 className={`mb-0 text-center ${staticStyle.staticHeadText}`}>Rera Disclaimer</h1>
					</div>
				</div>
				<Container>
					<div className='spacer-5' />
					<Row>
						<Col md={12}>
							<div className={`border-0 ${staticStyle.paraPadding}`}>
								<p className='mb-0'>We always encourage our valuable customers to check the legitimacy of the real estate properties in Bengaluru by going through the RERA (Real Estate Regulatory Authority) approvals and clearances certificates.</p>
							</div>
							<div className={`border-0 ${staticStyle.paraPadding}`}>
								<p className='mb-0'>To carry forward the same practice of staying honest with all our customers, here we present our RERA Disclaimer.</p>
							</div>
							<div className={`border-0 ${staticStyle.paraPadding}`}>
								<p className='mb-0'>This Website and all brochures are a guide only and do not constitute an offer or contract. Changes may be made during the development of a real estate project and standard fittings and specifications are subject to change without notice.</p>
							</div>
							<div className={`border-0 ${staticStyle.paraPadding}`}>
								<p className='mb-0'>Standard fittings and finishes are subject to availability and vendor discretion. Fittings, finishes and fixtures shown in the images contained in this brochure are not standard and will not be provided as part of a dwelling unit. The information contained herein is believed to be correct but is not guaranteed.</p>
							</div>
							<div className={`border-0 ${staticStyle.paraPadding}`}>
								<p className='mb-0'>By using or accessing the Website you agree with the Disclaimer without any qualification or limitation. Gravity Homes reserves the right to terminate, revoke, modify, alter, add and delete any one or more of the terms and conditions of the website. Gravity Homes shall be under no obligation to notify the visitor of the amendment to the terms and conditions and the visitor shall be bound by such amended terms and conditions.</p>
							</div>
							<div className={`border-0 ${staticStyle.paraPadding}`}>
								<p className='mb-0'>The visuals and information contained herein marked as “artistic impression” are artistic impressions being indicative in nature and are for general information purposes only. The visuals contained marked as “generic image” and other visuals /image /photographs are general images and do not have any correlation with the project.</p>
							</div>
							<div className={`border-0 ${staticStyle.paraPadding}`}>
								<p className='mb-0'>The imagery used on the Website may not represent actuals or may be indicative of style only. Photographs of interiors, surrounding views and location may not represent actuals or may have been digitally enhanced or altered. These photographs may not represent actuals or may be indicative only. Computer generated images, walkthroughs and render images are the artist’s impression and are an indicative of the actual designs.</p>
							</div>
							<div className={`border-0 ${staticStyle.paraPadding}`}>
								<p className='mb-0'>No information given on this Website creates a warranty or expands the scope of any warranty that cannot be disclaimed under the applicable laws. The information on this website is presented as general information and no representation or warranty is expressly or impliedly given as to its accuracy. Any interested party should verify all the information including designs, plans, specifications, facilities, features, payment schedules, terms of sales etc. independently with Gravity Homes prior to concluding any decision for buying in any of the project.</p>
							</div>
							<div className={`border-0 ${staticStyle.paraPadding}`}>
								<p className='mb-0'>While enough care is taken by Gravity Homes to ensure that information in the Website is up to date, accurate and correct, the readers/ users are requested to make an independent enquiry with Gravity Homes before relying upon the same. Nothing on the website should be misconstrued as advertising, marketing, booking, selling or an offer for sale or invitation to purchase a unit in any project by Gravity Homes. Gravity Homes is not responsible for the consequences of any action taken by the viewer relying on such material/ information on this website without independently verifying with Gravity Homes.</p>
							</div>
						</Col>
					</Row>
					<div className='spacer-5' />
				</Container>
			</div>
		</>
	)
}

export default ReraDisclaimer