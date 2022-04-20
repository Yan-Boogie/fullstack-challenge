import { useRouter } from 'next/router';
import { useEthers } from '@usedapp/core';
import Button from '@@components/ui/button/button';
import { useSnackbar } from '@@components/snackbar';

const Header = () => {
  const { account } = useEthers();
  const router = useRouter();
  const [, setModel] = useSnackbar();

  return (
    <section className="flex w-full border-b h-16 items-center justify-end p-4">
      <Button
        onClick={() => {
          if (!!account) {
            setModel({ open: true, type: 'error', message: '已連結錢包' });
            return;
          }

          router.push('/connect-wallet');
        }}
        bgColor="primary">
        <span className="text-white font-bold">連接</span>
      </Button>
    </section>
  );
};

export default Header;
