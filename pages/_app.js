import Script from "next/script";
import { GlobalStyles } from "../styled/global.styled";


export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyles />
      <Script 
        strategy="lazyOnload"
          src={"https://www.googletagmanager.com/gtag/js?id=G-GTSMJHETRL"}
      />
      <Script id="my-script" strategy="lazyOnload">
        {
          `
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-GTSMJHETRL');
          `
        }
      </Script>
      <Component {...pageProps} />
    </>
  )
}