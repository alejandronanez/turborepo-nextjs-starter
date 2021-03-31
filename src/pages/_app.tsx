import 'tailwindcss/tailwind.css';
import React from "react";
import Head from "next/head";
import {GoogleAnalytics} from "../components/GoogleAnalytics";

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <title>Title - MAKE ME DYNAMIC PLEASE</title>
      <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <GoogleAnalytics />
    </Head>
    <Component {...pageProps} /></>;
}

export default MyApp;
