import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import CircularProgress from '@mui/material/CircularProgress';
import DraftsComponent from '@@components/draftsPage';
import type { IArticleInput } from '@@common/article';
import { useSnackbar } from '@@components/snackbar';
import { ADD_ARTICLE_MUTATION } from '../../api/graphQL';
import { ARTICLE_LIST_QUERY, ARTICLE_AMOUNT_QUERY } from '../../api/graphQL';
import { AMOUNT_PER_PAGE } from '@@constants/pagination';
import { QueriedArticleCount, QueriedArticleList } from '@@interfaces/index';

const Drafts = () => {
  const router = useRouter();
  const [, setModel] = useSnackbar();
  const [addArticle, { loading, error }] = useMutation<{ addArticle: IArticleInput}>(ADD_ARTICLE_MUTATION, {
    update(cache, { data }) {
      const cacheCount = cache.readQuery<QueriedArticleCount>({
        query: ARTICLE_AMOUNT_QUERY,
      });

      const offset = (Math.ceil(cacheCount.articlesCount / AMOUNT_PER_PAGE) - 1) * AMOUNT_PER_PAGE;

      const cacheArticles = cache.readQuery<QueriedArticleList>({
        query: ARTICLE_LIST_QUERY,
        variables: {
          offset,
          limit: AMOUNT_PER_PAGE,
        },
      });

      if (cacheArticles.articles.length === AMOUNT_PER_PAGE) return;

      console.log(cacheCount, cacheArticles);

      cache.writeQuery({
        query: ARTICLE_LIST_QUERY,
        variables: {
          offset,
          limit: AMOUNT_PER_PAGE,
        },
        data: {
          articles: [
            ...cacheArticles.articles,
            {
              ...data.addArticle,
            },
          ],
        },
      });
    },
    refetchQueries: [{
      query: ARTICLE_AMOUNT_QUERY,
    }],
  });

  return (
    (loading || error) ? (
      <div className="flex flex-row w-full h-full flex justify-center">
        <CircularProgress className="text-gray-400 mt-6" size={24} />
      </div>
    ) : (
      <DraftsComponent addArticle={(props: { variables: { articleInput: IArticleInput }}) => {
        addArticle(props).then(() => {
          router.push('/');

          setModel({ message: '成功送出', type: 'success', open: true });
        }).catch((err) => {
          setModel({ message: `送出失敗: ${err}`, type: 'error', open: true });
        });
      }} />
    )
  );
};

export default Drafts;
