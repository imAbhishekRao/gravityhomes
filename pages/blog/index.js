import React from 'react';
import BlogList from '@/components/Blog/Index';
import Head from 'next/head';

const blog = (pageProps) => {
	return (
		<>
			<Head>
                <title>Gravity Homes Real Estate Blog - Insights and Updates</title>
				<meta name="description" content="Stay updated with Gravity's real estate blog. Explore insights, trends, and news about luxurious living in Bangalore." />
                <link rel="canonical" href={'https://www.gravityhomes.in/blog/'} />
				<meta property="og:title" content="Gravity Homes Real Estate Blog - Insights and Updates"/>
                <meta property="og:description" content="Stay updated with Gravity's real estate blog. Explore insights, trends, and news about luxurious living in Bangalore."/>
            </Head>
			<BlogList {...pageProps} />
		</>
	)
}

export default blog