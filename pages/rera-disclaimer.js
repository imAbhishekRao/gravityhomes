import React from 'react';
import ReraDisclaimerPage from '@/components/Static/ReraDisclaimer';
import Head from 'next/head';

const reradisclaimer = (pageProps) => {
	return (
		<>
			<Head>
                <title>Gravity Homes - Rera Disclaimer</title>
				<meta name="description" content="Understand Gravity Real Estate's compliance with RERA regulations. Our commitment to transparency ensures a trustworthy real estate journey" />
                <link rel="canonical" href={'https://www.gravityhomes.in/rera-disclaimer/'} />
				<meta property="og:title" content="Gravity Homes - Rera Disclaimer"/>
                <meta property="og:description" content="Understand Gravity Real Estate's compliance with RERA regulations. Our commitment to transparency ensures a trustworthy real estate journey"/>
            </Head>
			<ReraDisclaimerPage {...pageProps} />
		</>
	)
}

export default reradisclaimer