import type { ReactNode } from 'react';
import { MD, LG, XL } from '@@constants/breakPoints';
import useBreakPoint from '@@hooks/useBreakPoint';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';
import Footer from './components/Footer';
import Snackbar from '../snackbar';

export interface ILayout {
  children: ReactNode;
}

const XlLayout = ({ children }: ILayout) => {
  return (
    <div className="w-screen h-screen flex-col">
      <div className="container mx-auto grid grid-cols-[200px_688px_272px]">
        <div className="h-screen pr-8 border-r">
          <LeftPanel />
        </div>
        {children}
        <div className="h-screen pl-8 border-l">
          <RightPanel />
        </div>
      </div>
    </div>
  )
};

const LGLayout = ({ children }: ILayout) => {
  return (
    <div className="w-screen h-screen flex-col">
      <div className="container mx-auto grid grid-cols-[184px_auto]">
        <div className="h-screen pr-8 border-r">
          <LeftPanel />
        </div>
        <div className="border-r">
          {children}
        </div>
      </div>
    </div>
  );
};

const SMLayout = ({ children }: ILayout) => {
  return (
    <div className="w-screen h-screen py-4">
      {children}
      <Footer />
    </div>
  );
};

const Layout = ({ children }: ILayout) => {
  const size = useBreakPoint();

  switch (size) {
    case XL:
      return (
        <XlLayout>
          <Snackbar />
          {children}
        </XlLayout>
      );
    
    case LG:
    case MD:
      return (
        <LGLayout>
          <Snackbar />
          {children}
        </LGLayout>
      );
  }

  return (
    <SMLayout>
      <Snackbar />
      {children}
    </SMLayout>
  )
}

export default Layout;
