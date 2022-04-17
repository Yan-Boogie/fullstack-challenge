import CircularProgress from '@mui/material/CircularProgress';
import Header from './components/header';
import type { IArticleListQuery } from '@@interfaces/index';
import ArticleItem from './components/articleItem';

export type IHomePage = IArticleListQuery;

const HomePage = (props: IHomePage) => {
  const {
    data,
    loading,
    error,
  } = props;

  return (
    <div className="flex flex-col items-center w-full h-full">
      <Header />
      {loading || error ? <CircularProgress className="text-gray-400 mt-6" size={24} /> : (
        data.articles.map(({ id, ...rest }) => <ArticleItem key={id} {...rest} />)
      )}
    </div>
  );
};

export default HomePage;
