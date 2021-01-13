import * as React from 'react';
import { AppProps } from "next/app"
import "assets/stylesheets/reset.css";
import { basicColorSet } from '@/consts/colors';
import "tailwindcss/tailwind.css";
import "assets/stylesheets/global.css";
import Head from 'next/Head';
import { Header } from '@/components/modules/Header';

const MossApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
        <Head>
          <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>
        <div className="flex">
          <Header />
          <Component {...pageProps} />
        </div>
        <style jsx global>{`
          body {
            font-family: 'Source Sans Pro', sans-serif;
            color: ${basicColorSet.textPrimary};
            background-color: ${basicColorSet.backgroundPrimary};
          }
        `}</style>
    </>
  )
}

export default MossApp
