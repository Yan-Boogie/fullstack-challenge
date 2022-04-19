import Image from 'next/image';
import { useEthers } from '@usedapp/core';
import ButtonBase from '@mui/material/ButtonBase';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const ConnectSection = () => {
  const { activateBrowserWallet } = useEthers();
  return (
    <div className="flex flex-col w-full py-6 px-8">
      <span className="text-gray-400 text-sm mb-2">連接加密錢包</span>
      <ButtonBase
        onClick={() => activateBrowserWallet()}
        className="w-full h-14 px-4 bg-neutral-100 hover:bg-neutral-200 duration-150 rounded-lg flex flex-row justify-between items-center">
        <div className="flex flex-row">
          <Image alt="" width={24} height={24} src="/assets/MetaMask_Fox.png" />
          <span className="ml-2">MetaMask</span>
        </div>
        <ChevronRightIcon className="w-6 h-6" color="disabled" />
      </ButtonBase>
    </div>
  );
};

export default ConnectSection;
