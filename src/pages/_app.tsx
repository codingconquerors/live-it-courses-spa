import { Fragment } from 'react';

import { AppProps } from 'next/app';
import '../styles/main.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>We provide the end to end solution to all your IT needs</title>
        <meta
          name="title"
          content="IT solution providers on reasonable rates"
        />
        <meta
          name="description"
          content="Coding conquerors is one stop for providing you all kind of IT solutions you need in your organization."
        />
        <meta name="url" content="https://www.codingconquerors.com/" />
        <meta name="type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta
          httpEquiv="Content-Type"
          content="text/html; charset=utf-8"
        ></meta>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Fragment>
  );
}

export default MyApp;
