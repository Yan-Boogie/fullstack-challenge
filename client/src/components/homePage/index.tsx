import CircularProgress from '@mui/material/CircularProgress';
import Header from './components/header';
import Pagination from './components/Pagination';
import type { IArticleListQuery, IArticleCountQuery } from '@@interfaces/index';
import ArticleItem from './components/articleItem';

/** Constants */
import { AMOUNT_PER_PAGE } from '@@constants/pagination';

export interface IHomePage {
  articleListQuery: IArticleListQuery;
  articleCountQuery: IArticleCountQuery;
  page: number;
  setPage: (page: number) => void;
}

const HomePage = (props: IHomePage) => {
  const {
    articleListQuery,
    articleCountQuery,
    page,
    setPage,
  } = props;

  const {
    data: queriedArticleList,
  } = articleListQuery;

  const {
    data: queriedArticleCount,
  } = articleCountQuery;

  return (
    <div className="flex flex-col items-center w-full h-full">
      <Header />
      {articleListQuery.loading || articleListQuery.error ? <CircularProgress className="text-gray-400 mt-6" size={24} /> : (
        queriedArticleList.articles.map(({ id, ...rest }) => <ArticleItem key={id} id={id} {...rest} />)
      )}
      {articleCountQuery.loading || articleCountQuery.error ? <CircularProgress className="text-gray-400 mt-6" size={24} /> : (
        <Pagination
          page={page}
          pageCount={Math.ceil(queriedArticleCount.articlesCount / AMOUNT_PER_PAGE)}
          setPage={setPage} />
      )}
    </div>
  );
};

export default HomePage;
