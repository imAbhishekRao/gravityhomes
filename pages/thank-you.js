import React from 'react';
import ThankYouPage from '@/components/Static/ThankYou';
import Head from 'next/head';

const thankyou = (pageProps) => {
	return (
		<>
			<Head>
                <title>Gravity Homes - Thank You</title>
				<meta name="description" content="" />
                <link rel="canonical" href='/' />
				<meta property="og:title" content="Gravity Homes - Thank You"/>
            </Head>
			<ThankYouPage {...pageProps} />
		</>
	)
}

export default thankyou
