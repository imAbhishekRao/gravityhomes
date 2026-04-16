import React from 'react'
import staticStyle from './static.module.css';
import { Col, Container, Row } from 'react-bootstrap';
import Link from 'next/link';

const SitemapScreen = () => {


    const sitemapList = [

        {
            'heading' : 'Home Directory', 
            'list':[
                { 'link' : '/about/', 'name' : 'About Us'},
                { 'link' : '/project/', 'name' : 'Projects'},
                { 'link' : '/project/gravity-smera/', 'name' : 'Gravity Smera Gardens'},
                { 'link' : '/living/', 'name' : 'Living'},
                { 'link' : '/blog/  ', 'name' : 'Blogs'},
                { 'link' : '/contact/', 'name' : 'Contact'},
                { 'link' : '/faqs/', 'name' : "FAQ's"},
                { 'link' : '/career/', 'name' : 'Career'},
            ]
        },

        {
            'heading' : 'Projects', 
            'list':[
                {'link' : '/project/gravity-thanisandra/',      'name' : 'Gravity Sky Forest'},
                {'link' : '/project/gravity-rajankunte/',       'name' : 'Gravity Lake Estates'},
                {'link' : '/project/gravity-sundridge/',        'name' : 'Gravity Sundridge'},
                {'link' : '/project/gravity-forest-view/',      'name' : 'Gravity Forest View'},
                {'link' : '/project/gravity-maanasa-nilayam/',  'name' : 'Gravity Manaasa Nilayam'},
                {'link' : 'project/gravity-racchena/',          'name' : 'Gravity Racchena Halli'}
            ]
        },

        {
            'heading' : 'Social', 
            'list':[
                {'link':'https://www.facebook.com/GravityHomes/',           'name':'Gravity Homes Facebook'},
                {'link':'https://www.linkedin.com/company/gravity-homes/',  'name':'Gravity Homes Linkedin'},
                {'link':'https://www.instagram.com/gravityhomesin/',        'name':'Gravity Homes Instagram'},
                {'link':'https://www.youtube.com/@GravityHomes',            'name':'Gravity Homes Youtube'}
            ]
        },

        {
            'heading' : 'Legal Terms', 
            'list':[
                {'link':'/terms/','name':'Terms of Use'},
                {'link':'/privacy-policy/','name':'Privacy Policy'},
                {'link':'/disclaimer/','name':'Disclaimer'},
                {'link':'/rera-disclaimer/','name':'RERA Disclaimer'}
            ]
        },

        {
            'heading' : 'Investments', 
            'list':[
                {'link':'/invest-with-gravity/','name':'Invest with Gravity'},
            ]
        },

        {
            'heading' : 'Others', 
            'list':[
                {'link':'https://maps.app.goo.gl/2YXVweCENtR4KTsC8/','name':'Gravity Google map Location'},
            ]
        }
    ]


    // const homePageDirectory = [
    //     { 'link' : '/about/', 'name' : 'About Us'},
    //     { 'link' : '/project/', 'name' : 'Projects'},
    //     { 'link' : '/project/gravity-smera/', 'name' : 'Gravity Smera Gardens'},
    //     { 'link' : '/living/', 'name' : 'Living'},
    //     { 'link' : '/blog/  ', 'name' : 'Blogs'},
    //     { 'link' : '/contact/', 'name' : 'Contact'},
    //     { 'link' : '/faqs/', 'name' : "FAQ's"},
    //     { 'link' : '/career/', 'name' : 'Career'},
    // ];

    // const projectList = [
    //     {'link' : '/project/gravity-thanisandra/',      'name' : 'Gravity Sky Forest'},
    //     {'link' : '/project/gravity-rajankunte/',       'name' : 'Gravity Lake Estates'},
    //     {'link' : '/project/gravity-sundridge/',        'name' : 'Gravity Sundridge'},
    //     {'link' : '/project/gravity-forest-view/',      'name' : 'Gravity Forest View'},
    //     {'link' : '/project/gravity-maanasa-nilayam/',  'name' : 'Gravity Manaasa Nilayam'},
    //     {'link' : 'project/gravity-racchena/',          'name' : 'Gravity Racchena Halli'}
    // ];

    // const socialLinks = [
    //     {'link':'https://www.facebook.com/GravityHomes/',           'name':'Gravity Homes Facebook'},
    //     {'link':'https://www.linkedin.com/company/gravity-homes/',  'name':'Gravity Homes Linkedin'},
    //     {'link':'https://www.instagram.com/gravityhomesin/',        'name':'Gravity Homes Instagram'},
    //     {'link':'https://www.youtube.com/@GravityHomes',            'name':'Gravity Homes Youtube'}
    // ];

    // const legalTermsList = [
    //     {'link':'/terms/','name':'Terms of Use'},
    //     {'link':'/privacy-policy/','name':'Privacy Policy'},
    //     {'link':'/disclaimer/','name':'Disclaimer'},
    //     {'link':'/rera-disclaimer/','name':'RERA Disclaimer'}
    // ];


	return (
		<>
			<div className={`static-page-style ${staticStyle.StaticPage} ${staticStyle.StaticPageRera}`}>
				<div className={staticStyle.staticTermsBanner} style={{ backgroundImage: 'url(/images/sitemap.jpeg)'}}>
					<div className='gravity-head-center position-relative z-index-1'>
						<h1 className={`mb-0 text-center ${staticStyle.staticHeadText}`}>Sitemap</h1>
					</div>
				</div>
				<Container>
					<div className='spacer-5' />
					<div className={` ${staticStyle.sitemap_block}`}>
						<Row>
                            {sitemapList.map( (sitemapLis , idx ) => (
                                <Col lg={4} key={idx}>
                                    <div className={` ${staticStyle.sitemap_lists}`}>
                                        <h3 className={` ${staticStyle.sitemap_lists__heading}`}>{sitemapLis?.heading}</h3>
                                        <ul className={` ${staticStyle.sitemap_list__flex}`}>
                                            {sitemapLis.list.map( (lis , idx) => (
                                                <li key={'list-'+idx}>
                                                    <Link href={`${lis.link}`} className='pb-0' target='_blank'>{lis.name}</Link>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </Col>
                            ))}
							{/* <Col lg={4}>
								<div className={` ${staticStyle.sitemap_lists}`}>
									<h3 className={` ${staticStyle.sitemap_lists__heading}`}>Home Directory</h3>
									<ul className={` ${staticStyle.sitemap_list__flex}`}>
                                        {homePageDirectory.map( (homePageDirector , idx) => (
                                            <li key={idx}>
                                                <Link href={`${homePageDirector.link}`} className='pb-0' target='_blank'>{homePageDirector.name}</Link>
                                            </li>
                                        ))}
									</ul>
								</div>
							</Col>
							<Col lg={4}>
								<div className={` ${staticStyle.sitemap_lists}`}>
									<h3 className={` ${staticStyle.sitemap_lists__heading}`}>Projects</h3>
									<ul className={` ${staticStyle.sitemap_list__flex}`}>
                                        {projectList.map( (projectLis , idx) => (
                                            <li key={idx}>
                                                <Link href={`${projectLis.link}`} className='pb-0' target='_blank'>{projectLis.name}</Link>
                                            </li>
                                        ))}
									
									</ul>
								</div>
							</Col>
							<Col lg={4}>
								<div className={` ${staticStyle.sitemap_lists}`}>
									<h3 className={` ${staticStyle.sitemap_lists__heading}`}>Social</h3>
									<ul className={` ${staticStyle.sitemap_list__flex}`}>
                                        {socialLinks.map( (socialLink , idx) => (
                                            <li key={idx}>
                                                <Link href={`${socialLink.link}`} className='pb-0' target='_blank'>{socialLink.name}</Link>
                                            </li>
                                        ))}
										
									</ul>
								</div>
							</Col>
							<Col lg={4}>
								<div className={` ${staticStyle.sitemap_lists}`}>
									<h3 className={` ${staticStyle.sitemap_lists__heading}`}>Legal Terms</h3>
									<ul className={` ${staticStyle.sitemap_list__flex}`}>
                                        {legalTermsList.map( (legalTermsLis , idx) => (
                                            <li key={idx}>
                                                <Link href={`${legalTermsLis.link}`} className='pb-0' target='_blank'>{legalTermsLis.name}</Link>
                                            </li>
                                        ))}
						
									</ul>
								</div>
							</Col>
							<Col lg={4}>
								<div className={` ${staticStyle.sitemap_lists}`}>
									<h3 className={` ${staticStyle.sitemap_lists__heading}`}>Investments</h3>
									<ul className={` ${staticStyle.sitemap_list__flex}`}>
										<li>
                                            <Link href={`/invest-with-gravity/`} className='pb-0' target='_blank'> Invest with Gravity</Link>
                                        </li>
									</ul>
								</div>
							</Col>
							<Col lg={4}>
								<div className={` ${staticStyle.sitemap_lists}`}>
									<h3 className={` ${staticStyle.sitemap_lists__heading}`}>Others</h3>
									<ul className={` ${staticStyle.sitemap_list__flex}`}>
										<li>
                                            <Link href={`https://maps.app.goo.gl/2YXVweCENtR4KTsC8`} className='pb-0' target='_blank'> Gravity Google map Location</Link>
                                        </li>
									</ul>
								</div>
							</Col> */}
						</Row>
					</div>
				</Container>
			</div>
		</>
	)
}

export default SitemapScreen
