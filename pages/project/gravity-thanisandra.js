import React from 'react';
import GravityThanisandra from '@/components/Projects/GravityThanisandra';
import Head from 'next/head';

const GravityThanisandraProject = (pageProps) => {
	return (
		<>
			<Head>
                <title>Gravity Thanisandra - Luxury 4 BHK Duplex Villas in Bangalore</title>
				<meta name="description" content="Explore 4 BHK luxury duplex villas in Thanisandra, Bangalore by Gravity Homes. Discover premium villas with serene surroundings and world-class amenities." />
                <link rel="canonical" href={'https://www.gravityhomes.in/project/gravity-thanisandra/'} />
				<meta property="og:title" content="Gravity Thanisandra - Luxury 4 BHK Duplex Villas in Bangalore"/>
                <meta property="og:description" content="Explore 4 BHK luxury duplex villas in Thanisandra, Bangalore by Gravity Homes. Discover premium villas with serene surroundings and world-class amenities."/>
            </Head>
			<GravityThanisandra {...pageProps} />
		</>
	)
}

export default GravityThanisandraProject