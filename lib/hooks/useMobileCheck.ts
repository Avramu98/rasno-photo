import { useEffect, useState } from 'react';

export const useMobileCheck = () => {
  const [isMobileOrTablet, setIsMobileOrTablet] = useState(false);
  const [isTablet, setIsTablet] = useState(false);
  const [isPhone, setIsPhone] = useState(false);

  function handleResize() {
    return typeof window !== 'undefined' ? window.innerWidth : 'unknown';
  }

  const [windowSize, setWindowSize] = useState<any>(handleResize());

  useEffect(() => {
    const handleWidthChange = () => {
      setWindowSize(handleResize());
    };

    window.addEventListener('resize', handleWidthChange);
    return () => {
      window.removeEventListener('resize', handleWidthChange);
    };
  }, []);


  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    const mobileOrTabletTest = /(android|iphone|ipad|mobile)/gi;
    const isMobileOrTabletRegex = mobileOrTabletTest.test(userAgent);

    if (isMobileOrTabletRegex && windowSize > 712) {
      setIsTablet(true);
      setIsPhone(false);
    }

    if (isMobileOrTabletRegex && windowSize < 712) {
      setIsTablet(false);
      setIsPhone(true);
    }

    // ----FIX FOR TABLET ON SAFARI------
    if (!isMobileOrTabletRegex) {
      const isMac = RegExp(/Macintosh/i).test(navigator.userAgent);
      if (isMac && window.navigator.maxTouchPoints && window.navigator.maxTouchPoints > 2) {
        setIsMobileOrTablet(true);
        setIsTablet(true);
      }
    }
    // ----FIX FOR TABLET ON SAFARI------
    if (isMobileOrTabletRegex) setIsMobileOrTablet(true);

  }, [windowSize]);

  return { isTablet, isPhone, isMobileOrTablet };
};