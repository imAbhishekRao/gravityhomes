import { useState, useEffect, useRef } from 'react';

const useIntersectionObserver = (options) => {
    const [imageSrc, setImageSrc] = useState('');
    const ref = useRef(null);
  
    useEffect(() => {
      const observer = new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setImageSrc(ref.current.getAttribute('data-src'));
          observer.disconnect();
        }
      }, options);
  
      if (ref.current) {
        observer.observe(ref.current);
      }
  
      return () => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      };
    }, [options]);
  
    return [ref, imageSrc];
};

export default useIntersectionObserver;