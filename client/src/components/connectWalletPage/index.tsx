import Header from './components/header';
import InfoBoard from './components/infoBoard';
import ConnectSection from './components/connectSection';

const ConnectWallet = () => {
  return (
    <div className="flex flex-col items-start w-full h-full">
      <Header />
      <InfoBoard />
      <ConnectSection />
    </div>
  );
};

export default ConnectWallet;
