import React from 'react';
import GravityRajankunte from '@/components/Projects/GravityRajankunte';
import Head from 'next/head';

const GravityRajankunteProject = (pageProps) => {
	return (
		<>
			<Head>
                <title>Gravity Rajankunte - Luxury 4 BHK Duplex Villas in Bangalore</title>
				<meta name="description" content="Explore 4 BHK luxury duplex villas in Rajankunte, Bangalore by Gravity Homes. Discover premium villas with serene surroundings and world-class amenities." />
                <link rel="canonical" href={'https://www.gravityhomes.in/project/gravity-rajankunte/'} />
				<meta property="og:title" content="Gravity Rajankunte - Luxury 4 BHK Duplex Villas in Bangalore"/>
                <meta property="og:description" content="Explore 4 BHK luxury duplex villas in Rajankunte, Bangalore by Gravity Homes. Discover premium villas with serene surroundings and world-class amenities."/>
            </Head>
			<GravityRajankunte {...pageProps} />
		</>
	)
}

export default GravityRajankunteProject