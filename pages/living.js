import React from 'react';
import LivingPage from '@/components/Living/Index';
import Head from 'next/head';

const living = (pageProps) => {
	return (
		<>
			<Head>
                <title>Gravity Homes - Living with Gravity</title>
				<meta name="description" content="Discover a lifestyle of comfort and elegance with Gravity. Our insights provide a glimpse into the art of luxurious living in Bangalore." />
                <link rel="canonical" href={'https://www.gravityhomes.in/living/'} />
				<meta property="og:title" content="Gravity Homes - Living with Gravity"/>
                <meta property="og:description" content="Discover a lifestyle of comfort and elegance with Gravity. Our insights provide a glimpse into the art of luxurious living in Bangalore."/>
            </Head>
			<LivingPage {...pageProps} />
		</>
	)
}

export default living