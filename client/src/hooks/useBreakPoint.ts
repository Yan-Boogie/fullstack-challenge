import { useEffect, useState, useLayoutEffect } from 'react';
import { IBreakPoints, SM, MD, LG, XL } from '@@constants/breakPoints';

const getWindowWidth = () => window?.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

const getBreakPoint = (windowWidth: number) => {
  if (windowWidth > XL) return XL;

  if (windowWidth > LG) return LG;

  if (windowWidth > MD) return MD;

  return SM;
};

export default function useWindowResize(): IBreakPoints {
  const [breakPoint, setBreakPoint] = useState<IBreakPoints>(XL);

  /** Init BreakPoint after window exist */
  useLayoutEffect(() => {
    setBreakPoint(getBreakPoint(getWindowWidth()));
  }, []);

  useEffect(() => {
    function resize() {
      setBreakPoint(getBreakPoint(getWindowWidth()));
    }

    window.addEventListener('resize', resize, false);

    return () => window.removeEventListener('resize', resize);
  }, []);

  return breakPoint;
}

