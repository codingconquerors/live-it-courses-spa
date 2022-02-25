import { Fragment } from 'react';

import { AppProps } from 'next/app';
import '../styles/main.css';
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Head>
        <title>Online IT courses with live classes | </title>
        <meta name="title" content="Online IT courses with live classes" />
        <meta
          name="description"
          content="Learn online IT courses in live classes. We teach online live courses based on java, spring boot, apache camel, kafka, microservices, docker, kubernetes and other open source technologies. Click contact us link to know more."
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
