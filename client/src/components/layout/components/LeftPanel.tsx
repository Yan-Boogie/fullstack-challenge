import Image from 'next/image';
import Button from '@@components/ui/button/button';
import { AddBoxOutlined, Explore, Mode } from '@mui/icons-material';

export interface ILeftPanel {
  
}

const LeftPanel = () => {
  return (
    <div className="flex flex-col w-full h-full">
      <section className="flex justify-center items-center">
        <Image alt="" width={125} height={125} src="/matters-icon.jpg" />
      </section>
      <section className="flex flex-col w-full h-full pl-3">
        <Button
          size="medium"
          startIcon={<Explore className="text-green-900 w-6 h-6" />}
        >
          <span className="text-green-900	text-xl font-bold ml-12">發現</span>
        </Button>
      </section>
    </div>
  );
}

export default LeftPanel;