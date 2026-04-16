import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=3, user-scalable=no" /> */}
        {/* <meta http-equiv="Content-Type" content="text/html;" /> */}
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="theme-color"    content="#911D1D" />
        <meta name="copyright"      content="Gravityhomes" />
        <meta name="author"         content="Gravityhomes" />
        <meta name="reply-to"       content="" />
        <meta name="robots"         content="index, follow" />
        <meta name="distribution"   content="global" />
        <meta name="country"        content="IND" />
        <meta name="web_author"     content="Gravityhomes" />
        <meta property="og:site_name"   content="Gravityhomes" />
        <meta property="og:image"   content="https://www.gravityhomes.in/images/gravity-logo.png" />
        <meta property="og:type" content="website" />
        <meta property="og:image:url" content="https://www.gravityhomes.in/images/gravity-logo.png" />
        <meta name="referrer" content="origin-when-cross-origin" />
        <link rel="manifest" href="/manifest.json" />
        <link href="/images/favicon16.png" rel="icon" type="image/png" sizes="16x16" />
        <link href="/images/favicon.png" rel="icon" type="image/png" sizes="32x32" />
        <link rel="apple-touch-icon" href="/images/favicon.png" />
        <link fetchpriority="high" rel="preload" as="image" href="https://www.gravityhomes.in/images/home_banner/Hero_1.webp" />
        <link fetchpriority="high" rel="preload" as="image" href="https://www.gravityhomes.in/images/home_banner/1h.webp" />
        <link fetchpriority="high" rel="preload" as="image" href="https://www.gravityhomes.in/images/home_banner/3h.webp" />
        <link fetchpriority="high" rel="preload" as="image" href="https://www.gravityhomes.in/images/faq.jpg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
