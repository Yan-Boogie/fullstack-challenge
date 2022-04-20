import React from 'react';
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

interface IApp {
  Component: () => JSX.Element;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  pageProps: any;
}

function MyApp({ Component, pageProps }: IApp) {
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