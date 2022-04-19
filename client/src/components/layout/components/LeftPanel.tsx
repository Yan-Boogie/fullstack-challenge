import Link from 'next/link';
import Image from 'next/image';
import Button from '@@components/ui/button/button';
import { Explore } from '@mui/icons-material';
import { useEthers } from '@usedapp/core';

const LeftPanel = () => {
  const { account } = useEthers();

  return (
    <div className="flex flex-col w-full h-full">
      <section className="flex justify-center items-center">
        <Image alt="" width={125} height={125} src="/matters-icon.jpg" />
      </section>
      <section className="flex flex-col w-full h-full pl-3 items-center">
        <Button
          className="mb-8"
          size="medium"
          startIcon={<Explore className="text-green-900 w-6 h-6" />}
        >
          <Link href="/" passHref>
            <span className="text-green-900	text-xl font-bold ml-12">發現</span>
          </Link>
        </Button>
        {!!account && (
          <Button bgColor="primary">
            <Link href="/drafts" passHref>
              <span className="text-white font-bold">創作</span>
            </Link>
          </Button>
        )}
      </section>
    </div>
  );
}

export default LeftPanel;