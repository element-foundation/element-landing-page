import type { AppProps } from "next/app";
import Head from "next/head";
import { DefaultSeo } from "next-seo";
import { ThemeProvider } from "next-themes";
import SEO from "next-seo.config";

import { Transition } from "components/Layout/Transition";
import { GlobalStyle } from "styles/globalStyles";
import "public/assets/fonts/style.css";
import { Header } from "components/Layout/Header";
import { Footer } from "components/Layout/Footer";

import PreviewImage from "public/assets/png/Preview.png";

export default function App({ Component, pageProps, router }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta property="og:image" content={PreviewImage.src} key="ogimage" />
        <meta property="og:url" content="Website url here" />
        <meta
          property="og:description"
          content={
            "Element is an open source protocol for fixed and variable yield markets"
          }
          key="ogdescription"
        />
      </Head>
      <ThemeProvider>
        <GlobalStyle />
        <DefaultSeo {...SEO} />
        <Header />
        <Transition location={router.pathname}>
          <div className="main">
            <Component {...pageProps} />
          </div>
        </Transition>
        <Footer />
      </ThemeProvider>
    </>
  );
}
