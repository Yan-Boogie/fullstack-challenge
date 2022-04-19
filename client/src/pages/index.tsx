import { useState } from 'react';
/** GraphQL */
import { useQuery } from '@apollo/client';
import { ARTICLE_LIST_QUERY, ARTICLE_AMOUNT_QUERY } from '../api/graphQL';
import type { QueriedArticleList, QueriedArticleCount } from '@@interfaces/index';

/** Component */
import HomePage from '@@components/homePage';

/** Constants */
import { AMOUNT_PER_PAGE } from '@@constants/pagination';

const IndexPage = () => {
  const [page, setPage] = useState(0);

  const articleListQuery = useQuery<QueriedArticleList>(ARTICLE_LIST_QUERY, {
    variables: { offset: AMOUNT_PER_PAGE * page, limit: AMOUNT_PER_PAGE },
  });

  const articleCountQuery = useQuery<QueriedArticleCount>(ARTICLE_AMOUNT_QUERY);

  return (
    <HomePage
      page={page}
      setPage={setPage}
      articleListQuery={{ data: articleListQuery.data, loading: articleListQuery.loading, error: articleListQuery.error }}
      articleCountQuery={{ data: articleCountQuery.data, loading: articleCountQuery.loading, error: articleCountQuery.error }} />
  );
}

export default IndexPage
