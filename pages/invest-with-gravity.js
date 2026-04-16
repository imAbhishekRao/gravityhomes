import React from 'react';
import InvestWithGravityPage from '@/components/Static/InvestWithGravity';
import Head from 'next/head';

const investwithgravity = (pageProps) => {
	return (
		<>
			<Head>
                <title>Gravity Homes - Invest with Gravity Real Estate</title>
				<meta name="description" content="Explore lucrative real estate investment opportunities with Gravity. Invest wisely for a secure and rewarding future" />
                <link rel="canonical" href={'https://www.gravityhomes.in/invest-with-gravity/'} />
				<meta property="og:title" content="Gravity Homes - Invest with Gravity Real Estate"/>
                <meta property="og:description" content="Explore lucrative real estate investment opportunities with Gravity. Invest wisely for a secure and rewarding future"/>
            </Head>
			<InvestWithGravityPage {...pageProps} />
		</>
	)
}

export default investwithgravity