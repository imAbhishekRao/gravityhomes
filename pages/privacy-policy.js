import React from 'react';
import PrivacyPolicyPage from '@/components/Static/PrivacyPolicy';
import Head from 'next/head';

const privacypolicy = (pageProps) => {
	return (
		<>
			<Head>
                <title>Gravity Homes - Privacy Policy</title>
				<meta name="description" content="Learn about Gravity Real Estate's commitment to privacy. Understand our policies for a secure real estate experience." />
                <link rel="canonical" href={'https://www.gravityhomes.in/privacy-policy/'} />
				<meta property="og:title" content="Gravity Homes - Privacy Policy"/>
                <meta property="og:description" content="Learn about Gravity Real Estate's commitment to privacy. Understand our policies for a secure real estate experience."/>
            </Head>
			<PrivacyPolicyPage {...pageProps} />
		</>
	)
}

export default privacypolicy