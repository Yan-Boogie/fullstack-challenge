import React from 'react';
import { AppProps } from 'next/app';
import {
  Mainnet,
  DAppProvider,
  Config,
} from '@usedapp/core';
import { getDefaultProvider } from 'ethers';
import { ApolloProvider } from '@apollo/client';

/** API */
import apolloClient from '../api/apollo';

/** Standard Layout */
import Layout from '@@components/layout/';

import '../../styles/index.css';

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <DAppProvider config={config}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </DAppProvider>
    </ApolloProvider>
  );
}

export default MyApp;