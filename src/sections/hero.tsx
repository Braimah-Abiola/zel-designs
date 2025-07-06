"use client";

import CardOne from "@/components/common/card-1";
import CardTwo from "@/components/common/card-2";
import CardThree from "@/components/common/card-3";
import CardFour from "@/components/common/card-4";
import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { motion, useScroll, useTransform, Variants } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const containerVariants: Variants = {
    hidden: { opacity: 1 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2,
            delayChildren: 0.3,
        },
    },
};

const itemVariants: Variants = {
    hidden: { opacity: 1, y: 0 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.5, ease: "easeOut" } },
};

const cardContainerVariants: Variants = {
    hidden: { width: 0 },
    visible: {
        width: "312px",
        transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.5 },
    },
};

const cardsVariants: Variants = {
    hidden: { opacity: 0, y: "50vh" },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 1, ease: [0.215, 0.61, 0.355, 1], delay: 1.3 },
    },
};

const textAndButtonVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5, ease: "easeOut", delay: 1.8 },
    },
};

const letterVariants: Variants = {
    hidden: { y: "100%" },
    visible: (i: number) => ({
        y: 0,
        transition: {
            delay: i * 0.02,
            duration: 0.8,
            ease: [0.6, 0.01, -0.05, 0.95],
        },
    }),
};

const Hero = ({ isLoading }: { isLoading: boolean }) => {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const yValue = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);
    const cardOneX = useTransform(scrollYProgress, [0, 1], ["0%", "-50%"]);
    const cardOneRotate = useTransform(scrollYProgress, [0, 1], [0, 0]);
    const cardTwoX = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const cardTwoRotate = useTransform(scrollYProgress, [0, 1], [-4, 0]);
    const cardThreeX = useTransform(scrollYProgress, [0, 1], ["0%", "150%"]);
    const cardThreeRotate = useTransform(scrollYProgress, [0, 1], [0, 0]);
    const cardFourX = useTransform(scrollYProgress, [0, 1], ["0%", "250%"]);
    const cardFourRotate = useTransform(scrollYProgress, [0, 1], [4, 0]);


    return (
        <motion.section
            ref={containerRef}
            variants={containerVariants}
            initial="hidden"
            animate={!isLoading ? "visible" : "hidden"}
            className=" min-h-screen md:h-screen"
        >
            <Wrapper className=" w-full h-full flex flex-col items-center justify-center pt-32 md:pt-0">
                <motion.div variants={itemVariants} className="flex items-center w-full justify-center gap-1 md:gap-32">
                    <Image
                        height={120}
                        width={32}
                        src="/assets/bracket-left.svg"
                        alt="Bracket"
                        className=" scale-[0.40] md:scale-100"
                        quality={100}
                    />
                    <h1 className=" uppercase font-anton text-nowrap text-5xl w-fit md:text-[9rem] text-primary-foreground text-center overflow-hidden">
                        {"Designs That".split("").map((letter, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                variants={letterVariants}
                                className="inline-block"
                            >
                                {letter === " " ? "\u00A0" : letter}
                            </motion.span>
                        ))}
                    </h1>
                    <Image
                        height={120}
                        width={32}
                        src="/assets/bracket-right.svg"
                        alt="Bracket"
                        className=" scale-[0.40] md:scale-100"
                        quality={100}
                    />
                </motion.div>
                <div className=" md:hidden -mt-8">
                    <div className="flex flex-col items-start">
                        <motion.h1
                            variants={itemVariants}
                            className=" text-nowrap uppercase font-anton text-5xl md:text-[9rem] text-primary-foreground text-center w-full overflow-hidden"
                        >
                            {"Move Metrics".split("").map((letter, i) => (
                                <motion.span
                                    key={i}
                                    custom={i}
                                    variants={letterVariants}
                                    className="inline-block"
                                >
                                    {letter === " " ? "\u00A0" : letter}
                                </motion.span>
                            ))}
                        </motion.h1>
                        <motion.p
                            variants={textAndButtonVariants}
                            className="mt-2 text-base text-center font-medium"
                        >
                            I help brands design fast, intuitive, and growth-driven digital experiences across web and mobile.
                        </motion.p>
                        <motion.div className=" w-full flex flex-col items-center" variants={textAndButtonVariants}>
                            <Link href="https://calendly.com/denzelobeng421/30min">
                                <Button className=" mt-4">Book A Call <ArrowUpRight /></Button>
                            </Link>
                        </motion.div>
                    </div>
                    <div className=" w-full flex flex-col items-center gap-4 mt-8">
                        <CardOne />
                        <CardTwo />
                        <CardThree />
                        <CardFour />
                    </div>
                </div>
                <div className="hidden md:inline-flex items-start gap-4 mt-2">
                    <motion.h1
                        variants={itemVariants}
                        className=" text-nowrap uppercase font-anton text-5xl w-fit md:text-[9rem] text-primary-foreground text-center overflow-hidden"
                    >
                        {"Move".split("").map((letter, i) => (
                            <motion.span
                                key={i}
                                custom={i}
                                variants={letterVariants}
                                className="inline-block"
                            >
                                {letter}
                            </motion.span>
                        ))}
                    </motion.h1>
                    <motion.div
                        style={{ y: yValue }}
                        variants={cardContainerVariants}
                        className=" relative w-[290px] h-[312px]"
                    >
                        <motion.div variants={cardsVariants} className=" w-full h-full">
                            <motion.div style={{ x: cardFourX, rotate: cardFourRotate }}>
                                <CardFour />
                            </motion.div>
                            <motion.div style={{ x: cardThreeX, rotate: cardThreeRotate }}>
                                <CardThree />
                            </motion.div>
                            <motion.div style={{ x: cardTwoX, rotate: cardTwoRotate }}>
                                <CardTwo />
                            </motion.div>
                            <motion.div style={{ x: cardOneX, rotate: cardOneRotate }}>
                                <CardOne />
                            </motion.div>
                        </motion.div>
                    </motion.div>
                    <div className="flex flex-col items-start">
                        <motion.h1
                            variants={itemVariants}
                            className=" text-nowrap uppercase font-anton text-5xl w-fit md:text-[9rem] text-primary-foreground text-center overflow-hidden"
                        >
                            {"Metrics".split("").map((letter, i) => (
                                <motion.span
                                    key={i}
                                    custom={i}
                                    variants={letterVariants}
                                    className="inline-block"
                                >
                                    {letter}
                                </motion.span>
                            ))}
                        </motion.h1>
                        <motion.p
                            variants={textAndButtonVariants}
                            className="mt-2 max-w-sm text-base md:text-lg font-medium"
                        >
                            I help brands design fast, intuitive, and growth-driven digital experiences across web and mobile.
                        </motion.p>
                        <motion.div variants={textAndButtonVariants}>
                            <Link href="https://calendly.com/denzelobeng421/30min">
                                <Button className=" mt-4">Book A Call <ArrowUpRight /></Button>
                            </Link>
                        </motion.div>
                    </div>
                </div>
            </Wrapper>
        </motion.section>
    );
}

export default Hero;