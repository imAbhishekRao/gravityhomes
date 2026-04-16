import React, { useState, useEffect } from 'react'
import Head from "next/head"
//import GoTop from './GoTop'

const Layout = ({ children }) => {
    return(
        <>
            <Head>
                <meta charSet="UTF-8" />
                <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=3, user-scalable=no" />
                <title>Gravity Homes Real Estate - Luxury Villas, Villaments and Apartments in Bangalore</title>            
                <meta name="description" content='Gravity Homes - Leading Villa, Villaments And Apartment Developers In Bangalore Offers Your 3.5 And 4 BHK Villas And Independent Homes With Premium Class Amenities.' />
            </Head>
            {children}
        </>
    );
}

export default Layout;