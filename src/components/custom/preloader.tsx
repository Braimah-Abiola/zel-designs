"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const slideUp = {
    initial: {
        top: 0,
    },
    exit: {
        top: "-100vh",
        transition: { duration: 0.8, ease: "circOut" as const, delay: 0.2 },
    },
};

const opacity = {
    initial: {
        opacity: 0,
    },
    enter: {
        opacity: 1,
        transition: { duration: 0.5, delay: 0.2 },
    },
};

const textVariants = {
    initial: {
        opacity: 1,
    },
    exit: {
        opacity: 0,
        y: -50,
        transition: { duration: 0.5, ease: [0.76, 0, 0.24, 1] as const },
    },
    moveDown: {
        opacity: 1,
        y: 100,
        transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] as const },
    },
};

const wordVariants = {
    initial: {
        y: "100%",
    },
    enter: (i: number) => ({
        y: 0,
        transition: { duration: 0.6, ease: [0.33, 1, 0.68, 1] as const, delay: i * 0.05 },
    }),
};

const Preloader = ({ onAnimationComplete }: { onAnimationComplete: () => void }) => {
    const [count, setCount] = useState(0);
    const [showZeldesigns, setShowZeldesigns] = useState(false);

    useEffect(() => {
        if (count < 100) {
            const interval = setInterval(() => {
                setCount((prevCount) => Math.min(prevCount + 1, 100));
            }, 20);
            return () => clearInterval(interval);
        } else {
            setTimeout(() => {
                setShowZeldesigns(true);
            }, 500);
        }
    }, [count]);

    useEffect(() => {
        if (showZeldesigns) {
            const timer = setTimeout(() => {
                onAnimationComplete();
            }, 2500);
            return () => clearTimeout(timer);
        }
    }, [showZeldesigns, onAnimationComplete]);

    const designerText = ["A", "RARE", "DESIGNER"];

    return (
        <motion.div
            variants={slideUp}
            initial="initial"
            exit="exit"
            className="h-screen w-screen fixed top-0 left-0 bg-[#171717] z-[2147483000] text-white flex items-center justify-center"
        >
            <div className="flex flex-col items-center">
                {showZeldesigns && (
                    <motion.div variants={opacity} initial="initial" animate="enter" className="flex flex-col items-center">
                        {designerText.map((word, wordIndex) => (
                            <div key={wordIndex} className="flex overflow-hidden">
                                {word.split("").map((letter, letterIndex) => (
                                    <motion.span
                                        key={letterIndex}
                                        custom={wordIndex * 10 + letterIndex}
                                        variants={wordVariants}
                                        className=" font-clashDisplay font-semibold text-4xl md:text-6xl"
                                    >
                                        {letter}
                                    </motion.span>
                                ))}
                            </div>
                        ))}
                    </motion.div>
                )}

                <motion.div
                    variants={textVariants}
                    initial="initial"
                    animate={showZeldesigns ? "moveDown" : "initial"}
                    className="flex"
                >
                    <p className=" font-clashDisplay font-semibold text-4xl mt-4 md:mt-8 md:text-6xl w-[108px] md:w-[180px] text-center">{count}%</p>
                </motion.div>
            </div>
        </motion.div>
    );
};

export default Preloader;