import React from 'react';
import DisclaimerPage from '@/components/Static/Disclaimer';
import Head from 'next/head';

const disclaimer = (pageProps) => {
	return (
		<>
			<Head>
                <title>Gravity Homes - Disclaimer</title>
				<meta name="description" content="Read Gravity Real Estate's disclaimer to understand our policies. Ensure a transparent and informed real estate experience." />
                <link rel="canonical" href={'https://www.gravityhomes.in/disclaimer/'} />
				<meta property="og:title" content="Gravity Homes - Disclaimer"/>
                <meta property="og:description" content="Read Gravity Real Estate's disclaimer to understand our policies. Ensure a transparent and informed real estate experience."/>
            </Head>
			<DisclaimerPage {...pageProps} />
		</>
	)
}

export default disclaimer