import React from 'react';
import BlogStyle1Page from '@/components/Blog/BlogStyle1';
import Head from 'next/head';

const blogStyle1 = (pageProps) => {
	return (
		<>
			<Head>
                <title>Gravity Homes Real Estate Blog - Insights and Updates</title>
				<meta name="description" content="Stay updated with Gravity's real estate blog. Explore insights, trends, and news about luxurious living in Bangalore." />
                <link rel="canonical" href={'https://www.gravityhomes.in/blog/how-physiological-routines-influence-design-homes-that-build-good-health/'} />
				<meta property="og:title" content="Gravity Homes Real Estate Blog - Insights and Updates"/>
                <meta property="og:description" content="Stay updated with Gravity's real estate blog. Explore insights, trends, and news about luxurious living in Bangalore."/>
            </Head>

			<BlogStyle1Page {...pageProps} />
		</>
	)
}

export default blogStyle1