import { Fragment } from 'react';

import { AppProps } from 'next/app';
import '../styles/main.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Online IT course with live classes</title>
        <meta
          property="og:title"
          content="Online IT courses with live classes"
        />
        <meta
          property="og:description"
          content="Learn latest cutting edge tecnologies from professionals in live classess!"
        />
        <meta property="og:url" content="https://www.liveitcourses.com/" />
        <meta property="og:type" content="website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
