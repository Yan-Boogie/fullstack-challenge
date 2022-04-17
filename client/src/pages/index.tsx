/** GraphQL */
import { useQuery } from '@apollo/client';
import { ARTICLE_LIST_QUERY } from '../api/graphQL';
import type { QueriedArticleList } from '@@interfaces/index';

/** Component */
import HomePage from '@@components/homePage';

const IndexPage = () => {
const { data, loading, error } = useQuery<QueriedArticleList>(ARTICLE_LIST_QUERY);

  return (
    <HomePage data={data} loading={loading} error={error} />
  );
}

export default IndexPage
