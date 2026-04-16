import Head from 'next/head';
import React, { useEffect } from 'react';
const Organization = ({}) => {

    const articleData = {
        "@context": "https://schema.org",
        "@type": "Organization",
        "name": "Gravity Homes",
        "url": "https://www.gravityhomes.in",
        "logo": "https://www.gravityhomes.in/images/gravity-logo.png",
        "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "09538944994",
            "contactType": "customer service"
        },
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "#18B, Bharat Apartments, 3rd floor, 5th Main Road, 39th Cross, 5th Block Jayanagar",
            "addressLocality": "Bengaluru",
            "addressCountry": "IN",
            "addressRegion": "Karnataka",
            "postalCode": "560041"
        },
        "sameAs": [
            "https://www.youtube.com/@GravityHomes",
            "https://www.instagram.com/gravityhomesin/",
            "https://www.linkedin.com/company/gravity-homes/",
            "https://www.facebook.com/GravityHomes/"
        ]
    };

    const localBusinessData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": "Gravity Homes" ,
        "image": "https://www.gravityhomes.in/images/gravity-logo.png",
        "@id": "https://www.gravityhomes.in",
        "url": "https://www.gravityhomes.in",
        "telephone": "09538944994",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "#18B, Bharat Apartments, 3rd floor, 5th Main Road, 39th Cross, 5th Block Jayanagar",
          "addressLocality": "Bengaluru",
          "addressCountry": "IN",
          "addressRegion": "Karnataka",
          "postalCode": "560041"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 12.920937,
          "longitude": 77.58089
        },
        "openingHoursSpecification": [
          {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
              "Monday",
              "Tuesday",
              "Wednesday",
              "Thursday",
              "Friday",
              "Saturday",
              "Sunday"
            ],
            "opens": "09:30",
            "closes": "18:30"
          },
        ],
        "sameAs": [
            "https://www.youtube.com/@GravityHomes",
            "https://www.instagram.com/gravityhomesin/",
            "https://www.linkedin.com/company/gravity-homes/",
            "https://www.facebook.com/GravityHomes/"
        ]
    }

    return (
        
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(articleData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessData) }}
            />
        </>
    );
};

export default Organization;