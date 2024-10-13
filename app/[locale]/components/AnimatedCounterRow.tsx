"use client";

import React, { useState, useEffect, useRef } from "react";
import CountUp from "react-countup";

interface Props {
  leftString?: string;
  number: number;
  rightString: string;
  boxWidth: number;
}

const AnimatedCounterRow = ({
  leftString,
  number,
  rightString,
  boxWidth,
}: Props) => {
  const [isInView, setIsInView] = useState(false);
  const counterRef = useRef(null);
  const [isLgScreen, setIsLgScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setIsLgScreen(true);
      } else {
        setIsLgScreen(false);
      }
    };

    // Check on initial render
    handleResize();

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect(); // Stop observing after the counter starts
        }
      },
      { threshold: 0.6 } // Trigger when 60% of the component is visible
    );

    if (counterRef.current) {
      observer.observe(counterRef.current);
    }

    return () => {
      if (counterRef.current) {
        observer.unobserve(counterRef.current);
      }
    };
  }, []);

  return (
    <div
      className="bg-white rounded-3xl text-4xl text-secondary p-4 lg:p-8 w-full text-center self-center"
      style={isLgScreen ? { width: `${boxWidth}%` } : undefined} // Apply the width only on lg screens
      ref={counterRef}
    >
      {leftString}
      <span className="text-primary font-extrabold text-5xl">
        {" "}
        {isInView && <CountUp end={number} duration={3} />}+{" "}
      </span>
      {rightString}
    </div>
  );
};

export default AnimatedCounterRow;
