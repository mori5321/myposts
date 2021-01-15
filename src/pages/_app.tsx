import * as React from 'react';
import { AppProps } from "next/app"
import "assets/stylesheets/reset.css";
import "tailwindcss/tailwind.css";
import "assets/stylesheets/global.css";
import "assets/stylesheets/markdown.css";
import Head from 'next/Head';
import { Header } from '@/components/modules/Header';

const MossApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="max-w-4xl mx-auto continer">
          <Header />
          <div className="pt-14" />
          <Component {...pageProps} />
        </div>
    </>
  )
}

export default MossApp
