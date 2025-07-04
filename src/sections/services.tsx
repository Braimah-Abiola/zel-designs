"use client";

import Wrapper from "@/components/common/wrapper";
import { Separator } from "@/components/ui/separator";
import { motion, Variants } from "framer-motion";
import Image from "next/image";

const bracketVariants: Variants = {
    rest: {
        opacity: 0,
    },
    hover: {
        opacity: 1,
        transition: {
            duration: 0.4,
            delay: 0.1,
            ease: "easeOut",
        },
    },
};

const imageVariants: Variants = {
    rest: {
        opacity: 0,
        scale: 0,
        width: 0,
    },
    hover: {
        opacity: 1,
        scale: 1,
        width: "110px",
        transition: {
            duration: 0.4,
            ease: "easeOut",
        },
    },
};

const textVariants: Variants = {
    rest: {
        opacity: 1,
        transition: {
            duration: 1,
            delay: 0.4,
        },
    },
    hover: {
        opacity: 0,
        transition: {
            duration: 0,
        },
    },
};

const Services = () => {
    return (
        <section className=" py-20">
            <Wrapper>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <span className=" text-lg font-medium">/Services</span>
                    <p>Design that supports smart operations.</p>
                </div>
                <Separator orientation="horizontal" className=" mt-4 w-full" />

                <div className=" flex flex-col w-full gap-2">
                    <motion.div
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        className=" relative flex flex-row justify-between cursor-pointer border-b py-6"
                    >
                        <motion.span
                            variants={textVariants}
                            className=" text-base hidden md:block md:text-lg font-medium"
                        >
                            /01
                        </motion.span>
                        <span
                            className=" text-sm  md:hidden font-medium"
                        >
                            /01
                        </span>

                        <motion.div className=" hidden md:block" variants={bracketVariants}>
                            <Image
                                height={120}
                                width={32}
                                src="/assets/s1-left.svg"
                                alt="Bracket"
                                className=" absolute left-0 top-1/2 -translate-y-1/2"
                                quality={100}
                            />
                        </motion.div>
                        <motion.div className=" hidden md:block" variants={bracketVariants}>
                            <Image
                                height={120}
                                width={32}
                                src="/assets/s1-right.svg"
                                alt="Bracket"
                                className=" absolute right-0 top-1/2 -translate-y-1/2"
                                quality={100}
                            />
                        </motion.div>

                        <div className=" w-full flex gap-2 md:gap-4 items-center justify-center">
                            <h2 className=" uppercase font-anton text-5xl md:text-7xl text-primary-foreground text-center">
                                App
                            </h2>

                            <motion.div variants={imageVariants} className=" hidden md:block relative h-[80px]">
                                <Image
                                    fill
                                    src="/assets/1.png"
                                    alt="Mobile App Design"
                                    className="  object-cover"
                                    quality={100}
                                />
                            </motion.div>

                            <h2 className=" uppercase font-anton text-5xl md:text-7xl text-primary-foreground text-center">
                                Design
                            </h2>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        className=" relative flex flex-row justify-between cursor-pointer border-b py-6"
                    >
                        <motion.span
                            variants={textVariants}
                            className=" text-base hidden md:block md:text-lg font-medium"
                        >
                            /02
                        </motion.span>

                        <span
                            className=" text-sm  md:hidden font-medium"
                        >
                            /02
                        </span>

                        <motion.div className=" hidden md:block" variants={bracketVariants}>
                            <Image
                                height={120}
                                width={32}
                                src="/assets/s2-left.svg"
                                alt="Bracket"
                                className=" absolute left-0 top-1/2 -translate-y-1/2"
                                quality={100}
                            />
                        </motion.div>
                        <motion.div className=" hidden md:block" variants={bracketVariants}>
                            <Image
                                height={120}
                                width={32}
                                src="/assets/s2-right.svg"
                                alt="Bracket"
                                className=" absolute right-0 top-1/2 -translate-y-1/2"
                                quality={100}
                            />
                        </motion.div>

                        <div className=" w-full flex gap-2 md:gap-4 items-center justify-center">
                            <h2 className=" uppercase font-anton text-5xl md:text-7xl text-primary-foreground text-center">
                                Website
                            </h2>

                            <motion.div variants={imageVariants} className=" hidden md:block relative h-[80px]">
                                <Image
                                    fill
                                    src="/assets/2.png"
                                    alt="Website Design"
                                    className="  object-cover"
                                    quality={100}
                                />
                            </motion.div>

                            <h2 className=" uppercase font-anton text-5xl md:text-7xl text-primary-foreground text-center">
                                Design
                            </h2>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        className=" relative flex flex-row justify-between cursor-pointer border-b py-6"
                    >
                        <motion.span
                            variants={textVariants}
                            className=" text-base hidden md:block md:text-lg font-medium"
                        >
                            /03
                        </motion.span>

                        <span
                            className=" text-sm  md:hidden font-medium"
                        >
                            /03
                        </span>

                        <motion.div className=" hidden md:block" variants={bracketVariants}>
                            <Image
                                height={120}
                                width={32}
                                src="/assets/s3-left.svg"
                                alt="Bracket"
                                className=" absolute left-0 top-1/2 -translate-y-1/2"
                                quality={100}
                            />
                        </motion.div>
                        <motion.div className=" hidden md:block" variants={bracketVariants}>
                            <Image
                                height={120}
                                width={32}
                                src="/assets/s3-right.svg"
                                alt="Bracket"
                                className=" absolute right-0 top-1/2 -translate-y-1/2"
                                quality={100}
                            />
                        </motion.div>

                        <div className=" w-full flex gap-2 md:gap-4 items-center justify-center">
                            <h2 className=" uppercase font-anton text-5xl md:text-7xl text-primary-foreground text-center">
                                Branding
                            </h2>

                            <motion.div variants={imageVariants} className=" hidden md:block relative h-[80px]">
                                <Image
                                    fill
                                    src="/assets/3.png"
                                    alt="Branding"
                                    className="  object-cover"
                                    quality={100}
                                />
                            </motion.div>

                        </div>
                    </motion.div>


                    <motion.div
                        initial="rest"
                        whileHover="hover"
                        animate="rest"
                        className=" relative flex flex-row justify-between cursor-pointer border-b py-6"
                    >
                        <motion.span
                            variants={textVariants}
                            className=" text-base hidden md:block md:text-lg font-medium"
                        >
                            /04
                        </motion.span>

                        <span
                            className=" text-sm  md:hidden font-medium"
                        >
                            /04
                        </span>

                        <motion.div className=" hidden md:block" variants={bracketVariants}>
                            <Image
                                height={120}
                                width={32}
                                src="/assets/s4-left.svg"
                                alt="Bracket"
                                className=" absolute left-0 top-1/2 -translate-y-1/2"
                                quality={100}
                            />
                        </motion.div>
                        <motion.div className=" hidden md:block" variants={bracketVariants}>
                            <Image
                                height={120}
                                width={32}
                                src="/assets/s4-right.svg"
                                alt="Bracket"
                                className=" absolute right-0 top-1/2 -translate-y-1/2"
                                quality={100}
                            />
                        </motion.div>

                        <div className=" w-full flex gap-2 md:gap-4 items-center justify-center">
                            <h2 className=" uppercase font-anton text-5xl md:text-7xl text-primary-foreground text-center">
                                Product
                            </h2>

                            <motion.div variants={imageVariants} className=" hidden md:block relative h-[80px]">
                                <Image
                                    fill
                                    src="/assets/4.png"
                                    alt="Website Design"
                                    className="  object-cover"
                                    quality={100}
                                />
                            </motion.div>

                            <h2 className=" uppercase font-anton text-5xl md:text-7xl text-primary-foreground text-center">
                                Design
                            </h2>
                        </div>
                    </motion.div>
                </div>
            </Wrapper>
        </section>
    );
};

export default Services;