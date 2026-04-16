import Index from '@/components/Home/Index';
import Head from 'next/head';

const index = (pageProps) => {
    return (
        <>
            <Head>
                <link rel="canonical" href={'https://www.gravityhomes.in/'} />
                <meta property="og:title" content="Gravity Homes Real Estate - Luxury Villas, Villaments and Apartments in Bangalore"/>
                <meta property="og:description" content="Gravity Homes - Leading Villa, Villaments And Apartment Developers In Bangalore Offers Your 3.5 And 4 BHK Villas And Independent Homes With Premium Class Amenities."/>
            </Head>
            <Index {...pageProps} />
        </>   
    )
}
export default index