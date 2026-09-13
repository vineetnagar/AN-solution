import React, { useEffect, useRef, useState } from "react";
import Style from "./NumberShow.module.css";

const Counter = ({ end, duration = 5000, suffix = "", start }) => {
  const [count, setCount] = useState(0);
  const frameRef = useRef();

  useEffect(() => {
    if (!start) return;

    const startTime = performance.now();

    const animate = (now) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * end));

      if (progress < 1) {
        frameRef.current = requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    frameRef.current = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(frameRef.current);
  }, [start, end, duration]);

  return (
    <h2>
      {count}
      {suffix}
    </h2>
  );
};

const NumberShow = () => {
  const [inView, setInView] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (sectionRef.current) observer.observe(sectionRef.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div className={Style.NumberShow} ref={sectionRef}>
      <div className={Style.NumberShow_headings}>
        <h3>Our Numbers Show</h3>
        <p>
          Explore what our numbers say about our achievements and success
          stories.
        </p>
      </div>

      <div className={Style.NumberShow_data}>
        <div className={Style.NumberShow_data_info}>
          <Counter end={1258} start={inView} />
          <p>Successfully Delivered Assignments</p>
        </div>
        <div className={Style.NumberShow_data_info}>
          <Counter end={100} suffix="%" start={inView} />
          <p>Original Papers with Turnitin Report</p>
        </div>
        <div className={Style.NumberShow_data_info}>
          <Counter end={152} start={inView} />
          <p>Ph.D. Experts from Top Universities</p>
        </div>
      </div>
    </div>
  );
};

export default NumberShow;
