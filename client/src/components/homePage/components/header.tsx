import Link from 'next/link';
import Button from '@@components/ui/button/button';

const Header = () => {
  return (
    <section className="flex w-full border-b h-16 items-center justify-end p-4">
      <Button
        bgColor="primary">
        <Link href="/connect-wallet" passHref>
          <span className="text-white font-bold">連接</span>
        </Link>
      </Button>
    </section>
  );
};

export default Header;
