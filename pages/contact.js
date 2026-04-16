import React from 'react';
import ContactPage from '@/components/Contact/Index';
import Head from 'next/head';

const contact = (pageProps) => {
	return (
		<>
			<Head>
                <title>Gravity Homes - Contact</title>
				<meta name="description" content="Contact Gravity Homes For Details About Project Specifications And Amenities." />
                <link rel="canonical" href={'https://www.gravityhomes.in/contact/'} />
				<meta property="og:title" content="Gravity Homes - Contact"/>
                <meta property="og:description" content="Contact Gravity Homes For Details About Project Specifications And Amenities."/>
            </Head>
			<ContactPage {...pageProps} />
		</>
	)
}

export default contact