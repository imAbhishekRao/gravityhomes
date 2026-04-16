import React from 'react';
import GravityMaanasa from '@/components/Projects/GravityMaanasa';
import Head from 'next/head';

const GravityMaanasaProject = (pageProps) => {
	return (
		<>
			<Head>
                <title>Gravity Manasa Nilayam - Luxury 4 BHK Duplex Villas in Bangalore</title>
				<meta name="description" content="Explore 3 & 4 BHK luxury villas in Kanakapura Road, Bangalore by Gravity Homes" />
                <link rel="canonical" href={'https://www.gravityhomes.in/project/gravity-maanasa-nilayam/'} />
				<meta property="og:title" content="Gravity Manasa Nilayam - Luxury 4 BHK Duplex Villas in Bangalore"/>
                <meta property="og:description" content="Explore 3 & 4 BHK luxury villas in Kanakapura Road, Bangalore by Gravity Homes"/>
            </Head>
			<GravityMaanasa {...pageProps} />
		</>
	)
}

export default GravityMaanasaProject