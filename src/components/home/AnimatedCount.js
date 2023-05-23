import { useState, useEffect, useRef } from "react";

const AnimatedCount = ({ value, duration }) => {
  const [count, setCount] = useState(0);
  // const controls = useAnimation();
  const countRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          startCountAnimation();
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.1 } // Adjust the threshold as needed
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => {
      if (countRef.current) {
        observer.unobserve(countRef.current);
      }
    };
  }, []);

  const startCountAnimation = () => {
    let start = 0;
    const end = parseInt(value);
    const range = end - start;
    let currentCount = start;
    const incrementTime = Math.floor(duration / range);

    const timer = setInterval(() => {
      currentCount += 1;
      setCount(currentCount);

      if (currentCount === end) {
        clearInterval(timer);
      }
    }, incrementTime);
  };

  return (
    <div className="text-3xl font-bold text-white" ref={countRef}>
      {count}+
    </div>
  );
};

export default AnimatedCount;
