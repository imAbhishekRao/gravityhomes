import React from 'react';
import FaqsPage from '@/components/Static/Faqs';
import Head from 'next/head';

const faqs = (pageProps) => {
	return (
		<>
			<Head>
                <title>Gravity Homes - Frequently Asked Questions</title>
				<meta name="description" content="Get answers to common queries about Gravity Real Estate. Our FAQ section ensures you have all the information you need." />
                <link rel="canonical" href={'https://www.gravityhomes.in/faqs/'} />
				<meta property="og:title" content="Gravity Homes - Frequently Asked Questions"/>
                <meta property="og:description" content="Get answers to common queries about Gravity Real Estate. Our FAQ section ensures you have all the information you need."/>
            </Head>
		
			<FaqsPage {...pageProps} />
		</>
	)
}

export default faqs