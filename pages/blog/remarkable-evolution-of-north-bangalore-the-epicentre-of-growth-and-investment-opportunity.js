import React from 'react';
import BlogStyle4Page from '@/components/Blog/BlogStyle4';
import Head from 'next/head';

const blogStyle4 = (pageProps) => {
	return (
		<>
			<Head>
                <title>Gravity Homes Real Estate Blog - Insights and Updates</title>
				<meta name="description" content="Stay updated with Gravity's real estate blog. Explore insights, trends, and news about luxurious living in Bangalore." />
                <link rel="canonical" href={'https://www.gravityhomes.in/blog/remarkable-evolution-of-north-bangalore-the-epicentre-of-growth-and-investment-opportunity/'} />
				<meta property="og:title" content="Gravity Homes Real Estate Blog - Insights and Updates"/>
                <meta property="og:description" content="Stay updated with Gravity's real estate blog. Explore insights, trends, and news about luxurious living in Bangalore."/>
            </Head>
			<BlogStyle4Page {...pageProps} />
		</>
	)
}

export default blogStyle4