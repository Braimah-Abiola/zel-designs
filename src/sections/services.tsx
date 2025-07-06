"use client";

import Wrapper from "@/components/common/wrapper";
import { Separator } from "@/components/ui/separator";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { useState } from "react";

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
const imageVariants2: Variants = {
    rest: {
        opacity: 0,
        scale: 0,
        width: 0,
    },
    hover: {
        opacity: 1,
        scale: 1,
        width: "72px",
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

const servicesData = [
    {
        id: 1,
        title1: "App",
        title2: "Design",
        image: "/assets/1.png",
        alt: "Mobile App Design",
        bracketLeft: "/assets/s1-left.svg",
        bracketRight: "/assets/s1-right.svg",
    },
    {
        id: 2,
        title1: "Web",
        title2: "Design",
        image: "/assets/2.png",
        alt: "Web Design",
        bracketLeft: "/assets/s2-left.svg",
        bracketRight: "/assets/s2-right.svg",
    },
    {
        id: 3,
        title1: "Branding",
        title2: "",
        image: "/assets/3.png",
        alt: "Branding",
        bracketLeft: "/assets/s3-left.svg",
        bracketRight: "/assets/s3-right.svg",
    },
    {
        id: 4,
        title1: "Product",
        title2: "Design",
        image: "/assets/4.png",
        alt: "Product Design",
        bracketLeft: "/assets/s4-left.svg",
        bracketRight: "/assets/s4-right.svg",
    },
];

const Services = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(null);

    return (
        <section id="services" className=" py-20">
            <Wrapper>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <span className=" text-lg font-medium">/Services</span>
                    <p>Design that supports smart operations.</p>
                </div>
                <Separator orientation="horizontal" className=" mt-4 w-full" />

                <div className=" flex flex-col w-full gap-2">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={service.id}
                            initial="rest"
                            whileHover="hover"
                            animate={activeIndex === index ? "hover" : "rest"}
                            onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                            className=" relative flex flex-row justify-between cursor-pointer border-b py-6"
                        >
                            <motion.span
                                variants={textVariants}
                                className=" text-sm md:text-lg font-medium"
                            >
                                /0{service.id}
                            </motion.span>

                            <motion.div className=" " variants={bracketVariants}>
                                <Image
                                    height={120}
                                    width={32}
                                    src={service.bracketLeft}
                                    alt="Bracket"
                                    className=" scale-[0.5] md:scale-100 absolute left-[-8px] md:left-0 top-1/2 -translate-y-1/2"
                                    quality={100}
                                />
                            </motion.div>
                            <motion.div className=" " variants={bracketVariants}>
                                <Image
                                    height={120}
                                    width={32}
                                    src={service.bracketRight}
                                    alt="Bracket"
                                    className=" scale-[0.5] md:scale-100 absolute right-[-8px] md:right-0 top-1/2 -translate-y-1/2"
                                    quality={100}
                                />
                            </motion.div>

                            <div className=" w-full flex gap-2 md:gap-4 items-center justify-center">
                                <h2 className=" uppercase -ml-4 md:-ml-0 font-anton text-5xl md:text-7xl text-primary-foreground text-center">
                                    {service.title1}
                                </h2>

                                <motion.div variants={imageVariants} className=" hidden md:block relative h-[80px]">
                                    <Image
                                        fill
                                        src={service.image}
                                        alt={service.alt}
                                        className="object-cover"
                                        quality={100}
                                    />
                                </motion.div>

                                <motion.div variants={imageVariants2} className="  md:hidden relative h-[60px]">
                                    <Image
                                        fill
                                        src={service.image}
                                        alt={service.alt}
                                        className="object-cover rounded-md"
                                        quality={100}
                                    />
                                </motion.div>

                                {service.title2 && (
                                    <h2 className=" uppercase font-anton text-5xl md:text-7xl text-primary-foreground text-center">
                                        {service.title2}
                                    </h2>
                                )}
                            </div>


                        </motion.div>
                    ))}
                </div>
            </Wrapper>
        </section>
    );
};

export default Services;