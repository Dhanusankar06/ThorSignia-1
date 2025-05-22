import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop: React.FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    
    window.scrollTo(0, 0);
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    
    if (location.hash) {
      window.history.replaceState(
        {},
        '',
        location.pathname + location.search
      );
    }
    
    const scrollAttempts = [10, 50, 100, 200];
    const timers = scrollAttempts.map(delay => 
      setTimeout(() => {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      }, delay)
    );
    
    setTimeout(() => {
      const mainElements = [
        document.querySelector('main'),
        document.querySelector('#root'),
        document.querySelector('#app'),
        document.querySelector('.main-content'),
        document.querySelector('.content')
      ];
      
      mainElements.forEach(el => {
        if (el instanceof HTMLElement) {
          el.scrollTop = 0;
        }
      });
    }, 150);
    
    // Cleanup function
    return () => {
      timers.forEach(timer => clearTimeout(timer));
    };
  }, [location.key]); // Use location.key to detect ALL navigation changes
  
  return null;
};

export default ScrollToTop;