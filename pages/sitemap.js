import React from 'react';
import SitemapPage from '@/components/Static/SitemapScreen';
import Head from 'next/head';

const sitemap = (pageProps) => {
	return (
		<>
			<Head>
                <title>Gravity Homes - Sitemap</title>
				<meta name="description" content="Get answers to common queries about Gravity Real Estate. Our FAQ section ensures you have all the information you need." />
                <link rel="canonical" href={'https://www.gravityhomes.in/sitemap/'} />
				<meta property="og:title" content="Gravity Homes - Sitemap"/>
                <meta property="og:description" content="Get answers to common queries about Gravity Real Estate. Our FAQ section ensures you have all the information you need."/>
            </Head>
		
			<SitemapPage {...pageProps} />
		</>
	)
}

export default sitemap
