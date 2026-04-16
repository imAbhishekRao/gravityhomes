import React from 'react';
import BlogStyle3Page from '@/components/Blog/BlogStyle3';
import Head from 'next/head';

const blogStyle3 = (pageProps) => {
	return (
		<>
			<Head>
                <title>Gravity Homes Real Estate Blog - Insights and Updates</title>
				<meta name="description" content="Stay updated with Gravity's real estate blog. Explore insights, trends, and news about luxurious living in Bangalore." />
                <link rel="canonical" href={'https://www.gravityhomes.in/blog/sustainable-living-materials-that-everyone-is-rooting-for-nature-inclusive-living-for-a-better-tomorrow/'} />
				<meta property="og:title" content="Gravity Homes Real Estate Blog - Insights and Updates"/>
                <meta property="og:description" content="Stay updated with Gravity's real estate blog. Explore insights, trends, and news about luxurious living in Bangalore."/>
            </Head>
			<BlogStyle3Page {...pageProps} />
		</>
	)
}

export default blogStyle3