import Header from './components/header';

export interface IHomePage {

}

const HomePage = () => {
  return (
    <div className="flex flex-col items-start w-full h-full">
      <Header />
    </div>
  );
};

export default HomePage;
