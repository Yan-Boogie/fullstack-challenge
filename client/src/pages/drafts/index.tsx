import { useRouter } from 'next/router';
import { useMutation } from '@apollo/client';
import CircularProgress from '@mui/material/CircularProgress';
import DraftsComponent from '@@components/draftsPage';
import type { IArticleInput } from '@@common/article';
import { ADD_ARTICLE_MUTATION } from '../../api/graphQL';

const Drafts = () => {
  const router = useRouter();
  const [addArticle, { loading, error }] = useMutation<IArticleInput>(ADD_ARTICLE_MUTATION);

  return (
    (loading || error) ? (
      <div className="flex flex-row w-full h-full flex justify-center">
        <CircularProgress className="text-gray-400 mt-6" size={24} />
      </div>
    ) : (
      <DraftsComponent addArticle={(props: { variables: { articleInput: IArticleInput }}) => {
        addArticle(props).then(() => router.push('/'));
      }} />
    )
  );
};

export default Drafts;
