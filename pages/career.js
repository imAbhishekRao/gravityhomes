import React from 'react';
import CareerPage from '@/components/Contact/Career';
import Head from 'next/head';

const career = (pageProps) => {
	return (
		<>
			<Head>
                <title>Gravity Homes - Career</title>
                <link rel="canonical" href={'https://www.gravityhomes.in/career/'} />
				<meta property="og:title" content="Gravity Homes - Career"/>
            </Head>
			<CareerPage {...pageProps} />
		</>
	)
}

export default career