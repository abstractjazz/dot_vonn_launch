import '../styles/globals.css'
import Layout from '../components/Layout'
import Head from 'next/head'
import Script from 'next/script'

function MyApp({ Component, pageProps }) {
return (
  <>
  <Script id="loads-GA" async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}/>
  <Script id="GA-param" async >
    {`
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS, {page_path: window.location.pathname,});
    `}
</Script>
  <Head>
    <title>Dot Vonn</title>
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <link rel='dot vonn icon' href="/tab-favicon.png"/>
    <meta name="description" content="The best websites for creative entrepreneurs"/>
        <meta name="author" content="Dot Vonn Web And Content Studio"/>
        <meta name="robots" content="index, follow"/>
        <meta property="og:title" content="Dot Vonn Web and Content Studio."/>
        <meta property="og:site_name" content="Dot Vonn"/>
        <meta property="og:description" content="Top-tier creative and technical services, accessibly priced."/>
        <meta property="twitter:title" content="Dot Vonn Web and Content Studio"/>
        <meta property="twitter:description" content="Websites and content for creative entrepreneur"/>
  </Head>
<Layout>
  <Component {...pageProps} />
</Layout>
  </>
  )
}

export default MyApp
