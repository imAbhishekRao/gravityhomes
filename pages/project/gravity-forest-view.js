import React from 'react';
import GravityForestView from '@/components/Projects/GravityForestView';
import Head from 'next/head';

const GravityForestViewProject = (pageProps) => {
	return (
		<>
			<Head>
                <title>Luxury 3 & 4 BHK Villas & Independent Houses in Banashankari 6th Stage, Bangalore at Gravity Forestview</title>
				<meta name="description" content="Explore 3 & 4 BHK luxury villas in Banashankari 6th Stage, Bangalore at Gravity Forest View by Gravity Homes. Discover premium villas nestled in lush green surroundings with top-notch amenities." />
                <link rel="canonical" href={'https://www.gravityhomes.in/project/gravity-forest-view/'} />
				<meta property="og:title" content="Luxury 3 & 4 BHK Villas & Independent Houses in Banashankari 6th Stage, Bangalore at Gravity Forestview"/>
                <meta property="og:description" content="Explore 3 & 4 BHK luxury villas in Banashankari 6th Stage, Bangalore at Gravity Forest View by Gravity Homes. Discover premium villas nestled in lush green surroundings with top-notch amenities."/>
            </Head>
			<GravityForestView {...pageProps} />
		</>
	)
}

export default GravityForestViewProject