import React from 'react';
import GravitySundridge from '@/components/Projects/GravitySundridge';
import Head from 'next/head';

const GravitySundridgeProject = (pageProps) => {
	return (
		<>
			<Head>
                <title>Gravity Sunridge - Luxury 3 & 4 BHK Villas with Private Courtyard in Bangalore</title>
				<meta name="description" content="Explore 3 & 4 BHK luxury villas with private courtyard in Rajanukunte, Yelahanka, Bangalore at Gravity Sundridge by Gravity Homes. Discover premium villas with serene surroundings and world-class amenities." />
                <link rel="canonical" href={'https://www.gravityhomes.in/project/gravity-sundridge/'} />
				<meta property="og:title" content="Gravity Sunridge - Luxury 3 & 4 BHK Villas with Private Courtyard in Bangalore"/>
                <meta property="og:description" content="Explore 3 & 4 BHK luxury villas with private courtyard in Rajanukunte, Yelahanka, Bangalore at Gravity Sundridge by Gravity Homes. Discover premium villas with serene surroundings and world-class amenities."/>
            </Head>
			<GravitySundridge {...pageProps} />
		</>
	)
}

export default GravitySundridgeProject