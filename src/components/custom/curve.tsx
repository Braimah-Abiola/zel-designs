import React from "react";
import { motion, cubicBezier } from "framer-motion";

const Curve = () => {
  const initialPath = `M100 0 L100 ${window.innerHeight} Q-100 ${
    window.innerHeight / 2
  } 100 0`;
  const targetPath = `M100 0 L100 ${window.innerHeight} Q100 ${
    window.innerHeight / 2
  } 100 0`;

  const customEase = cubicBezier(0.76, 0, 0.24, 1);

  const curve = {
    initial: {
      d: initialPath,
    },
    enter: {
      d: targetPath,
      transition: { duration: 1, ease: customEase },
    },
    exit: {
      d: initialPath,
      transition: { duration: 0.8, ease: customEase },
    },
  };
  return (
    <svg className="svgCurve">
      <motion.path
        variants={curve}
        initial="initial"
        animate="enter"
        exit="exit"
      ></motion.path>
    </svg>
  );
};

export default Curve;
