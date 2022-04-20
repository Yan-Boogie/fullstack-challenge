import Link from 'next/link';
import Image from 'next/image';
import Button from '@@components/ui/button/button';
import { Explore, Create } from '@mui/icons-material';
import { useEthers } from '@usedapp/core';
import useBreakPoint from '@@hooks/useBreakPoint';
import { LG } from '@@constants/breakPoints';

const LeftPanel = () => {
  const { account } = useEthers();
  const size = useBreakPoint();

  return (
    <div className="flex flex-col w-full h-full pt-8 md:pt-16">
      <section className="flex justify-center items-center">
        {
          size >= LG ? (
            <Image alt="" width={125} height={125} src="/matters-icon.jpg" />
          ) : (
            <Image alt ="" width={56} height={56} src="/matters-icon-mobile.png" />
          )
        }
      </section>
      <section className="flex flex-col w-full h-full pl-3 md:p-0 items-center mt-0 sm:mt-6">
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
          size >= LG ? (
            <Button bgColor="primary">
              <Link href="/drafts" passHref>
                <span className="text-white font-bold">創作</span>
              </Link>
            </Button>
          ) : (
            <Button round startIcon={<Create className="text-green-900 w-6 h-6" />}>
              <Link href="/drafts" passHref />
            </Button>
          )
        )}
      </section>
    </div>
  );
}

export default LeftPanel;