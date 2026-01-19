"use client";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import { useEffect, useRef } from "react";

const Counter = ({ end, decimals }) => {
  const startFunctionRef = useRef(null);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  useEffect(() => {
    if (inView && startFunctionRef.current) {
      startFunctionRef.current();
    }
  }, [inView]);

  return (
    <CountUp
      end={end ? end : 100}
      duration={3}
      decimals={decimals ? decimals : 0}
    >
      {({ countUpRef, start }) => {
        startFunctionRef.current = start;

        return (
          <span 
            className="count" 
            data-from="0" 
            data-to={end} 
            ref={(node) => {
              // Set countUpRef if it's a function
              if (typeof countUpRef === 'function') {
                countUpRef(node);
              }
              // Set intersection observer ref if it's a function
              if (typeof ref === 'function') {
                ref(node);
              }
            }}
          >
            0
          </span>
        );
      }}
    </CountUp>
  );
};

export default Counter;
