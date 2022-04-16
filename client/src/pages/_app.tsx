import React from 'react';
import { AppProps } from 'next/app';
import {
  Mainnet,
  DAppProvider,
  Config,
} from '@usedapp/core';
import { getDefaultProvider } from 'ethers';

import '../../styles/index.css';

const config: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DAppProvider config={config}>
      <Component {...pageProps} />
    </DAppProvider>
  );
}

export default MyApp;