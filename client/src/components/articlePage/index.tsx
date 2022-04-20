import CircularProgress from '@mui/material/CircularProgress';
import type { IArticleQuery } from '@@interfaces/index';
import Header from './components/header';

export interface IArticlePage {
  articleQuery: IArticleQuery;
}

const ArticlePage = (props: IArticlePage) => {
  const { articleQuery } = props;

  const { data, loading, error } = articleQuery;

  return (
    <div className="flex flex-col items-center w-full h-full">
      <Header articleQuery={articleQuery} />
      { loading || error ? <CircularProgress className="text-gray-400 mt-6" size={24} /> : null }
    </div>
  );
};

export default ArticlePage;
