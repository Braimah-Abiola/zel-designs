/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, ReactElement } from 'react';
import gsap from 'gsap';

interface MagneticProps {
  children: ReactElement;
}

const Magnetic: React.FC<MagneticProps> = ({ children }) => {
  const magnetic = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!magnetic.current) return;

    const element = magnetic.current;
    const xTo = gsap.quickTo(element, "x", {duration: 1, ease: "elastic.out(1, 0.3)"});
    const yTo = gsap.quickTo(element, "y", {duration: 1, ease: "elastic.out(1, 0.3)"});

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { height, width, left, top } = element.getBoundingClientRect();
      const x = clientX - (left + width/2);
      const y = clientY - (top + height/2);
      xTo(x * 0.35);
      yTo(y * 0.35);
    };

    const handleMouseLeave = () => {
      xTo(0);
      yTo(0);
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return React.cloneElement(children as ReactElement<any>, { ref: magnetic });
};

export default Magnetic;