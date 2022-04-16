import { useRouter } from 'next/router'
import Button from '@@components/ui/button/button';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

const Header = () => {
  const router = useRouter()

  return (
    <section className="flex w-full border-b h-16 items-center justify-start p-4">
      <Button
        round
        size="small"
        onClick={() => router.back()}
        startIcon={<ArrowBackIosNewIcon fontSize="small" />} />
      <span className="text-black text-xl font-bold">使用加密錢包登入</span>
    </section>
  );
};

export default Header;
