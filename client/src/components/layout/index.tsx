import { SM, MD, LG, XL, IBreakPoints } from '@@constants/breakPoints';
import useBreakPoint from '@@hooks/useBreakPoint';
import LeftPanel from './components/LeftPanel';
import RightPanel from './components/RightPanel';

const XlLayout = ({ children }) => {
  return (
    <div className="w-screen h-screen flex-col">
      <div className="container mx-auto grid grid-cols-[200px_688px_272px]">
        <div className="h-screen pr-8 border-r">
          <LeftPanel />
        </div>
        <div>
          {children}
        </div>
        <div className="h-screen pl-8 border-l">
          <RightPanel />
        </div>
      </div>
    </div>
  )
};

const Layout = ({ children }) => {
  const size = useBreakPoint();

  console.log('size-->\n', size);

  switch (size) {
    case XL:
      return (
        <XlLayout>
          {children}
        </XlLayout>
      );
  }

  return (
    <XlLayout>
      {children}
    </XlLayout>
  );
}

export default Layout;
