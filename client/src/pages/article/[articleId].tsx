import { useRouter } from 'next/router';
import type { QueriedArticle } from '@@interfaces/index';

/** GraphQL */
import { useQuery } from '@apollo/client';
import { ARTICLE_QUERY } from '../../api/graphQL';

/** Component */
import ArticlePageComponent from '@@components/articlePage';

const ArticlePage = () => {
  const router = useRouter();
  const { articleId } = router.query;

  const { data, loading, error } = useQuery<QueriedArticle>(ARTICLE_QUERY, {
    variables: { id: articleId },
  });

  return (
    <ArticlePageComponent articleQuery={{ data, loading, error }} />
  )
}

export default ArticlePage;