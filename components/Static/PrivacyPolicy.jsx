import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import staticStyle from './static.module.css';
import Link from 'next/link';

const PrivacyPolicy = () => {
	return (
		<>
			<div className={`static-page-style ${staticStyle.StaticPage} ${staticStyle.StaticPagePolicy}`}>
				<div className={staticStyle.staticBanner} style={{ backgroundImage: 'url(/images/privacy.jpeg)', backgroundSize: '100% 296.597%', backgroundPosition: '0px -413.504px'}}>
					<div className='gravity-head-center position-relative z-index-1'>
						<h1 className={`mb-0 text-center ${staticStyle.staticHeadText}`}>Privacy Policy</h1>
					</div>
				</div>
				<Container>
					<div className='spacer-5' />
					<Row>
						<Col md={12}>
							<h3 className={staticStyle.paraPaddingHead}>Welcome to Gravity Homes. 
								<span className='d-block'>Please read these terms of use carefully before using this site.</span>
							</h3>
							<div className={staticStyle.paraPadding}>
								<h6 className='mb-2'>Privacy Policy</h6>
								<p className='mb-0'>Gravity Homes and its group companies (that is, our subsidiaries, our ultimate holding company and its subsidiaries) ("we", "our", "us", or "Gravity", “Gravity Homes”) are committed to protecting and respecting your privacy. This privacy policy (together with our terms of use and any other documents referred to on it) sets out the basis on which any personal data we collect from you, or that you provide to us, will be processed by us. Please read the following carefully to understand our views and practices regarding your personal data and how we will treat it. By visiting <Link href='https://www.gravityhomes.in/' target='_blank'>www.gravityhomes.in</Link>, or any other of our websites to which this privacy policy applies ("Sites") or otherwise providing us with information you are accepting and consenting to the practices described in this policy.</p>
							</div>
							<div className={staticStyle.paraPadding}>
								<h6 className='mb-2'>Personal Identification Information</h6>
								<p className='mb-0'>We may collect personal identification information from Users in a variety of ways, including, but not limited to, when Users visit our site, subscribe to the newsletter, fill out a form, and in connection with other activities, services, features or resources we make available on our Site. Users may be asked for, as appropriate, name, email address, mailing address, phone number. Users may, however, visit our Site anonymously. Users can always refuse to supply personal identification information, except that it may prevent them from engaging in certain Site related activities.</p>
							</div>
							<div className={staticStyle.paraPadding}>
								<h6 className='mb-2'>Non-Personal Identification Information</h6>
								<p className='mb-0'>We may collect non-personal identification information about Users whenever they interact with our Site. Non-personal identification information may include the browser name, the type of computer and technical information about Users means the type of connection to our Sites, such as the operating system and the Internet service providers utilised and other similar information.</p>
							</div>
							<div className={staticStyle.paraPadding}>
								<h6 className='mb-2'>Web Browser Cookies</h6>
								<p className='mb-0'>Our Site may use "cookies" to enhance User experience. User's web browser places cookies on their hard drive for record-keeping purposes and sometimes to track information about them. Users may choose to set their web browser to refuse cookies or to alert the Users when cookies are being sent. If they do so, note that some parts of the Site may not function properly. This is a standard operating procedure that is used across the internet.</p>
							</div>
							<div className={staticStyle.paraPadding}>
								<h6 className='mb-2'>How We Use Collected Information</h6>
								<p className='mb-2'>Gravity Homes may collect and use User's personal information for the following purposes:</p>
								<p className='mb-2'>To improve customer service:</p>
								<p className='mb-2'>Information provided by Users helps us respond to the customer service requests and support needs, more efficiently.</p>
								<p className='mb-2'>To personalise User experience:</p>
								<p className='mb-2'>We may use information in the aggregate to understand how our Users as a group use the services and resources provided on our Site.</p>
								<p className='mb-2'>To improve our Site::</p>
								<p className='mb-2'>We may use feedback provided by the User/s to improve our products and services.</p>
								<p className='mb-2'>To run a promotion, contest, survey or other Site feature.</p>
								<p className='mb-2'>To send the User/s information they agreed to receive about topics of interest to them.</p>
								<p className='mb-2'>To send periodic emails.</p>
							</div>
							<div className={staticStyle.paraPadding}>
								<h6 className='mb-2'>How we protect User's information</h6>
								<p className='mb-0'>We adopt appropriate data collection, storage, and processing practices and security measures to protect against unauthorised access, alteration, disclosure or destruction of User's personal information and data stored on our Site. As with data security, there are limits to its effectiveness and we indemnify ourselves in the event of an attack that is difficult to defend against. We also will do our best to retrieve any data that is lost as per available resources.</p>
							</div>
							<div className={staticStyle.paraPadding}>
								<h6 className='mb-2'>Sharing personal information of Users</h6>
								<p className='mb-0'>We do not sell, trade, or rent User's personal identification information to others. We may share generic aggregated demographic information not linked to any personal identification information regarding User's with our subsidiaries, our business partners, trusted affiliates and advertisers for the purposes outlined above.</p>
							</div>
							<div className={staticStyle.paraPadding}>
								<h6 className='mb-2'>Changes to this Privacy Policy</h6>
								<p className='mb-0'>Gravity Homes shall update this privacy policy at its sole discretion. Users are advised to check this page for any changes in the privacy policy and to stay informed about how the personal information of the Users is protected by us. The Users hereby acknowledge and agree that it is their responsibility to review this privacy policy periodically and become aware of modifications.</p>
							</div>
							<div className={staticStyle.paraPadding}>
								<h6 className='mb-2'>Your Acceptance of these Terms</h6>
								<p className='mb-0'>By using this Site, the Users signify their acceptance of this policy as may be modified from time to time. Users are advised not to access this site if they do not agree to our privacy policy. The above mentioned privacy policy shall be applicable to the information and data collected by our call centres as well.</p>
							</div>
							<div className={staticStyle.paraPadding}>
								<h6 className='mb-2'>Contact Us</h6>
								<p className='mb-4'>If you have any queries regarding our Terms of Use, the practices of this site, or your dealings with this site, please email your queries at <Link href='mailto:info@gravityhomes.in'>info@gravityhomes.in</Link></p>
								<p className='mb-0'>Thank you for visiting our websites.</p>
							</div>
						</Col>
					</Row>
					<div className='spacer-5' />
				</Container>
			</div>
		</>
	)
}

export default PrivacyPolicy