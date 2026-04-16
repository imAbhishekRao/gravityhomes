import React from 'react';
import BlogStyle2Page from '@/components/Blog/BlogStyle2';
import Head from 'next/head';

const blogStyle2 = (pageProps) => {
	return (
		<>
			<Head>
                <title>Gravity Homes Real Estate Blog - Insights and Updates</title>
				<meta name="description" content="Stay updated with Gravity's real estate blog. Explore insights, trends, and news about luxurious living in Bangalore." />
                <link rel="canonical" href={'https://www.gravityhomes.in/blog/sustainable-luxury-living-the-rise-of-eco-friendly-villas-in-bangalore/'} />
				<meta property="og:title" content="Gravity Homes Real Estate Blog - Insights and Updates"/>
                <meta property="og:description" content="Stay updated with Gravity's real estate blog. Explore insights, trends, and news about luxurious living in Bangalore."/>
            </Head>
			<BlogStyle2Page {...pageProps} />
		</>
	)
}

export default blogStyle2