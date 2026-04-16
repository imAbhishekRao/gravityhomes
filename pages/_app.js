import 'bootstrap/dist/css/bootstrap.css';
import '@/public/css/style.css';
import Layout from '@/components/_App/Layout';
import Header from '@/components/Header/Header';
import Footer from '@/components/_App/Footer';
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

import TagManager from 'react-gtm-module';
import { useEffect } from 'react';
import Script from 'next/script';
import Image from 'next/image';
import ChatButton from '@/components/_App/ChatButton';
import Organization from './common/Organization';

const tagManagerArgs = {
    gtmId: 'GTM-WZV2LRD'
}
export default function App({ Component, pageProps }) {

    useEffect(() => {
        TagManager.initialize(tagManagerArgs);
    }, []);

    return (  
        <>  
            <Script strategy="lazyOnload" id="facebookevent">
                {`
                    !function(f,b,e,v,n,t,s)
                    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                    n.queue=[];t=b.createElement(e);t.async=!0;
                    t.src=v;s=b.getElementsByTagName(e)[0];
                    s.parentNode.insertBefore(t,s)}(window, document,'script',
                    'https://connect.facebook.net/en_US/fbevents.js');
                    fbq('init', '708341899597225');
                    fbq('track', 'PageView');
                `}
            </Script>
            <noscript>
                <img height="1" width="1" alt='' style={{display:"none"}} src="https://www.facebook.com/tr?id=708341899597225&ev=PageView&noscript=1" />
            </noscript>
            <Layout>
                <GoogleReCaptchaProvider
                    reCaptchaKey="6LcbxbIiAAAAAMTs3Mjbtq8Skvber4mxeKnSs5uY"
                    scriptProps={{
                        async: true,
                        defer: false,
                        appendTo: "head",
                        nonce: undefined,
                        strategy:"lazyOnload"
                    }}
                >
                    <Header {...pageProps} />
                    <div className="body-inner">
                        <Component {...pageProps} />
                    </div>
                    <ChatButton />
                </GoogleReCaptchaProvider>
                    <Footer {...pageProps} />
                    <Organization />
                    
                
                {/* <Script id="zsiqchat" strategy="lazyOnload">
                    {`
                        var $zoho=$zoho || {};$zoho.salesiq = $zoho.salesiq || {widgetcode: "siq7f0321272635125e82370381f627f25ad14568f0d990b192552e446350e59db7", values:{},ready:function(){}};var d=document;s=d.createElement("script");s.type="text/javascript";s.id="zsiqscript";s.defer=true;s.src="https://salesiq.zohopublic.com/widget";t=d.getElementsByTagName("script")[0];t.parentNode.insertBefore(s,t);
                        `}
                </Script> */}
            </Layout>
        </>
    )
}
