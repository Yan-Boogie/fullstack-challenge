import { useRouter } from 'next/router';
import CircularProgress from '@mui/material/CircularProgress';
import Button from '@@components/ui/button/button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import type { IArticleQuery } from '@@interfaces/index';


export interface IHeader {
  articleQuery: IArticleQuery;
}

const Header = (props: IHeader) => {
  const { articleQuery: { data, loading, error } } = props;

  const router = useRouter();

  return (
    <section className="flex w-full border-b h-16 items-center justify-start p-4">
      <Button
        round
        size="small"
        onClick={() => router.back()}
        startIcon={<ArrowBackIosNewIcon fontSize="small" />} />
      {loading || error ? <CircularProgress className="text-gray-400 ml-6" size={24} /> : (
        <span>{data.article.userId}</span>
      )}
    </section>
  );
};

export default Header;
