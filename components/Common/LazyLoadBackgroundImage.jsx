import { useState, useEffect, useRef } from 'react';

const LazyLoadBackgroundImage = ({ src, className, children, style = {} }) => {
  const [isInView, setIsInView] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={className}
      style={{
        ...style,
        backgroundImage: isInView ? `url(${src})` : 'none',
        // backgroundSize: 'cover',
        // backgroundPosition: 'center',
      }}
    >
      {children}
    </div>
  );
};

export default LazyLoadBackgroundImage;