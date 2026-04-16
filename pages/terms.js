import React from 'react';
import TermsPage from '@/components/Static/Terms';
import Head from 'next/head';

const terms = (pageProps) => {
	return (
		<>
			<Head>
                <title>Gravity Homes - Terms and Conditions</title>
				<meta name="description" content="Review the terms and conditions of Gravity Real Estate. Ensure a clear understanding of our policies for a smooth real estate transaction." />
                <link rel="canonical" href={'https://www.gravityhomes.in/terms/'} />
				<meta property="og:title" content="Gravity Homes - Terms and Conditions"/>
                <meta property="og:description" content="Review the terms and conditions of Gravity Real Estate. Ensure a clear understanding of our policies for a smooth real estate transaction."/>
            </Head>
			<TermsPage {...pageProps} />
		</>
	)
}

export default terms