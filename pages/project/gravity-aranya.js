import React from 'react';
import GravityAranyaPage from '@/components/Projects/GravityAranya';
import Head from 'next/head';

const GravityAranyaProject = (pageProps) => {
	return (
		<>
			<Head>
                <title>Gravity Aranya - Luxury Forest View 3 & 4 BHK Villaments, Villas, Apartments in South Bangalore</title>
				<meta name="description" content="Explore our luxury 3 & 4 BHK villaments designed for a life of comfort and sophistication in south Bangalore" />
                <link rel="canonical" href={'https://www.gravityhomes.in/project/gravity-aranya/'} />
				<meta property="og:title" content="Gravity Aranya - Luxury Forest View 3 & 4 BHK Villaments, Villas, Apartments in South Bangalore"/>
                <meta property="og:description" content="Explore our luxury 3 & 4 BHK villaments designed for a life of comfort and sophistication in south Bangalore"/>
            </Head>
			<GravityAranyaPage {...pageProps} />
		</>
	)
}

export default GravityAranyaProject