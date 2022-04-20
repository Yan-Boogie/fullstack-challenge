import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import CircularProgress from '@mui/material/CircularProgress';
import DraftsComponent from '@@components/draftsPage';
import type { IArticleInput } from '@@common/article';
import { useSnackbar } from '@@components/snackbar';
import { ADD_ARTICLE_MUTATION } from '../../api/graphQL';

const Drafts = () => {
  const router = useRouter();
  const [, setModel] = useSnackbar();
  const [addArticle, { loading, error }] = useMutation<IArticleInput>(ADD_ARTICLE_MUTATION);

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
