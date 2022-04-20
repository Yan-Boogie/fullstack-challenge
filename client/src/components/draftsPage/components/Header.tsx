import { useRouter } from 'next/router';
import Button from '@@components/ui/button/button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export interface IHeader {
  onSubmit: () => void;
}

const Header = (props: IHeader) => {
  const { onSubmit } = props;

  const router = useRouter();

  return (
    <section className="flex w-full border-b h-16 items-center justify-between p-4">
      <Button
        round
        size="small"
        onClick={() => router.back()}
        startIcon={<ArrowBackIosNewIcon fontSize="small" />} />
      <Button
        onClick={() => onSubmit()}
        bgColor="primary">
        <span className="text-white font-bold">發佈</span>
      </Button>
    </section>
  );
};

export default Header;
