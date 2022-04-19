import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useEthers } from '@usedapp/core';
import ConnectWalletComponent from '@@components/connectWalletPage';

const ConnectWallet = () => {
  const { account } = useEthers();
  const router = useRouter();

  useEffect(() => {
    if (!!account) {
      router.replace('/');
    }
  }, [account, router]);

  return (
    <ConnectWalletComponent />
  );
};

export default ConnectWallet;
