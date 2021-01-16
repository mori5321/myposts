import * as React from 'react';
import { AppProps } from "next/app"
import "assets/stylesheets/reset.css";
import "tailwindcss/tailwind.css";
import "assets/stylesheets/global.css";
import "assets/stylesheets/markdown.css";
import { Header } from '@/components/modules/Header';

const MossApp = ({ Component, pageProps }: AppProps) => {
  return (
    <>
        <div className="max-w-4xl mx-auto continer">
          <Header />
          <div className="pt-14" />
          <Component {...pageProps} />
        </div>
    </>
  )
}

export default MossApp
