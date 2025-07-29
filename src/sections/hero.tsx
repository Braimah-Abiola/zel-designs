"use client";

import FullWidthText from "@/components/custom/full-width-text";
import { motion, useMotionValue, useScroll, useTransform } from "framer-motion";
import { ArrowDown } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

const Hero = () => {
    const [mouseX, setMouseX] = useState(0);
    const [windowWidth, setWindowWidth] = useState(0);
    const heroRef = useRef<HTMLElement>(null);

    const { scrollYProgress } = useScroll({
        target: heroRef,
        offset: ["start start", "end start"]
    });

    const yTransform = useTransform(scrollYProgress, [0, 1], [0, 1080]);
    const widthTransform = useTransform(scrollYProgress, [0, 1], [720, windowWidth > 0 ? windowWidth - 68 : 720]);

    // Create a motion value for current width to use in mouse tracking
    const currentWidth = useMotionValue(720);

    // Update current width when widthTransform changes
    useEffect(() => {
        const unsubscribe = widthTransform.onChange((latest) => {
            currentWidth.set(latest);
        });
        return unsubscribe;
    }, [widthTransform, currentWidth]);

    // Calculate mouse offset based on current width
    const mouseOffset = useTransform(
        () => windowWidth > 0 ? (mouseX / windowWidth - 0.025) * Math.max(0, windowWidth - currentWidth.get()) : 0
    );

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            setMouseX(e.clientX);
        };

        const handleResize = () => {
            setWindowWidth(window.innerWidth);
        };

        setWindowWidth(window.innerWidth);

        window.addEventListener('mousemove', handleMouseMove);
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            window.removeEventListener('resize', handleResize);
        };
    }, []);
    return (
        <section ref={heroRef} className=" w-full min-h-screen relative pt-52">
            <div className=" px-4 md:px-8 flex flex-col -space-y-14">
                <div className="flex pl-4 pr-12 items-center justify-between">
                    <span className=" font-medium text-lg">A</span>
                    <span className=" font-medium text-lg">VERY</span>
                    <span className=" font-medium text-lg">RARE</span>
                </div>
                <FullWidthText text="Creative Designer" />

            </div>
            <div className=" px-4 md:px-8 flex flex-col z-20">
                <motion.video
                    autoPlay
                    muted
                    loop
                    className=" h-auto aspect-video rounded-lg object-cover border border-black/10 -mt-12 transition-transform duration-100 ease-out"
                    style={{
                        x: mouseOffset,
                        y: yTransform,
                        width: widthTransform,
                    }}
                >
                    <source src="/assets/showcase.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </motion.video>
            </div>
            <div className=" w-full flex items-center px-4 md:px-12 justify-between bottom-5 absolute">

                <Link className=" -ml-2" href="/">
                    <div className="relative h-12 w-12 aspect-square rounded-full bg-transparent hover:bg-primary">
                        <Image fill src="/assets/logo.svg" className=" scale-[0.80]" alt="Logo" />
                    </div>
                </Link>

                <div className="flex items-center gap-2">
                    <ArrowDown />
                    <span className=" text-foreground font-medium text-lg">Explore (My Work)</span>
                </div>
            </div>
        </section>
    );
}

export default Hero;