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

/** Components */
import Layout from '@@components/layout/';
import { SnackbarProvider } from '@@components/snackbar';

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
        <SnackbarProvider>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </SnackbarProvider>
      </DAppProvider>
    </ApolloProvider>
  );
}

export default MyApp;