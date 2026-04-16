import React from 'react';
import GravitySmeraPage from '@/components/Projects/GravitySmera'
import Head from 'next/head';

const GravitySmeraProject = (pageProps) => {
	return (
		<>
			<Head>
                <title>Gravity Smera Gardens - Luxury 4 BHK Duplex Villas in South Bangalore</title>
				<meta name="description" content="Experience premium living with Gravity Smera 4 BHK Duplex Villas. Explore meticulously designed spaces that redefine luxury in Bangalore." />
                <link rel="canonical" href={'https://www.gravityhomes.in/project/gravity-smera/'} />
				<meta property="og:title" content="Gravity Smera Gardens - Luxury 4 BHK Duplex Villas in South Bangalore"/>
                <meta property="og:description" content="Experience premium living with Gravity Smera 4 BHK Duplex Villas. Explore meticulously designed spaces that redefine luxury in Bangalore."/>
            </Head>
			<GravitySmeraPage {...pageProps} />
		</>
	)
}

export default GravitySmeraProject