import React from 'react';
import GravityRacchena from '@/components/Projects/GravityRacchena';
import Head from 'next/head';

const GravityRacchenaProject = (pageProps) => {
	return (
		<>
			<Head>
                <title>Gravity Rachenahalli</title>
				<meta name="description" content="" />
                <link rel="canonical" href={'/'} />
				<meta property="og:title" content="Gravity Rachenahalli"/>
            </Head>
			<GravityRacchena {...pageProps} />
		</>
	)
}

export default GravityRacchenaProject