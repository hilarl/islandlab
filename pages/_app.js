import Head from "next/head";
import Script from "next/script";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import "../styles/globals.css";

const GA_TRACKING_ID = "G-LXNJ6QTLFR";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta property="og:title" content="The Island Lab" />
        <meta
          property="og:description"
          content="We help build ideas that help save our planet"
        />
        <meta property="og:image" content="https://theislandlab.com/og.png" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@theecoorghq" />
        <meta name="twitter:creator" content="@theecoorghq" />
        <meta property="og:url" content="https://theislandlab.com" />

        <title>The Island Lab</title>
      </Head>
      <main>
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </main>

      {/* <Script
        strategy="beforeInteractive"
        src={`https://cdn.jsdelivr.net/npm/cookieconsent@3/build/cookieconsent.min.js`}
      />
      <Script
        id="cookie-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.cookieconsent.initialise({
            container: document.getElementById("cookieconsent"),
            palette:{
              popup: { background: "#000000" },
              button: { background: "#000000" },
            },
            revokable: true,
            onStatusChange: function(status) {
              console.log(this.hasConsented() ?
              'enable cookies' : 'disable cookies');
            },
            "theme": "edgeless",
            position: "bottom"
          });
          `,
        }}
      /> */}

      <Script
        strategy="beforeInteractive"
        src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
        crossOrigin="anonymous"
      />
      <Script
        strategy="afterInteractive"
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
      />
      <Script
        id="gtag-init"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
    
          gtag('config', '${GA_TRACKING_ID}');
          `,
        }}
      />
    </>
  );
}

export default MyApp;
