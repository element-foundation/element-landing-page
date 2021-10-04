import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import SEO from "next-seo.config";

import { GlobalStyle } from "styles/globalStyles";
import "public/assets/fonts/style.css";
import { Header } from "components/Layout/Header";
import { Footer } from "components/Layout/Footer";

import PreviewImage from "public/assets/png/Preview.png";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content={PreviewImage.src} key="ogimage" />
      </Head>
      <GlobalStyle />
      <Header />
      <DefaultSeo {...SEO} />
      <div className="main">
        <Component {...pageProps} />
      </div>
      <Footer />
    </>
  );
}
