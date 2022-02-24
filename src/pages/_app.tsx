import { Fragment } from 'react';

import { AppProps } from 'next/app';
import '../styles/main.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Online IT course with live classes</title>
        <meta name="title" content="Online IT courses with live classes" />
        <meta
          name="description"
          content="Learn spring boot, java based online courses from professionals in live classess."
        />
        <meta name="url" content="https://www.liveitcourses.com/" />
        <meta name="type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
