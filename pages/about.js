import React from 'react';
import AboutPage from '@/components/About/Index';
import Head from 'next/head';

const about = (pageProps) => {
	return (
		<>
			<Head>
                <title>Gravity Homes - About Us</title>
				<meta name="description" content="Discover the story behind Gravity Real Estate. Our mission is to redefine luxury living in Bangalore. Learn more about us." />
                <link rel="canonical" href={'https://www.gravityhomes.in/about/'} />
				<meta property="og:title" content="Gravity Homes - About Us"/>
                <meta property="og:description" content="Discover the story behind Gravity Real Estate. Our mission is to redefine luxury living in Bangalore. Learn more about us."/>
            </Head>
			<AboutPage {...pageProps} />
		</>
	)
}

export default about