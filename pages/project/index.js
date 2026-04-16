import React from 'react';
import ProjectPage from '@/components/Projects/Index';
import Head from 'next/head';

const projects = (pageProps) => {
	return (
		<>
			<Head>
                <title>Gravity Homes - Ongoing, Upcoming and Completed Projects in Bangalore</title>
				<meta name="description" content="Explore Gravity's premium real estate ongoing, upcoming and completed projects in Bangalore. Find your dream home with our meticulously designed living spaces." />
                <link rel="canonical" href={'https://www.gravityhomes.in/project/'} />
				<meta property="og:title" content="Gravity Homes - Ongoing, Upcoming and Completed Projects in Bangalore"/>
                <meta property="og:description" content="Explore Gravity's premium real estate ongoing, upcoming and completed projects in Bangalore. Find your dream home with our meticulously designed living spaces."/>
            </Head>
			<ProjectPage {...pageProps} />
		</>
	)
}

export default projects
