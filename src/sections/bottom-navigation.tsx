"use client";

import { Separator } from "@/components/ui/separator";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import Marquee from "react-fast-marquee";

const menuItems = [
    { id: 1, title: "HOME", href: "/", image: "/assets/logo.svg" },
    { id: 2, title: "WORKS", href: "/works", image: "/assets/work-thumb.png" },
    {
        id: 3,
        title: "SERVICES",
        href: "/#services",
        mobileHref: "/#services-mobile",
        image: "/assets/service-thumb.png"
    },
];

const containerVariants = {
    collapsed: {
        height: "auto",
        transition: {
            duration: 0.4,
            ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
            when: "afterChildren",
        },
    },
    expanded: {
        height: "auto",
        transition: {
            duration: 0.4,
            ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
            when: "beforeChildren",
            staggerChildren: 0.1,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    collapsed: {
        opacity: 0,
        y: 20,
        transition: {
            duration: 0.3,
            ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
        },
    },
    expanded: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.76, 0, 0.24, 1] as [number, number, number, number],
        },
    },
};

const BottomNavigation = () => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const checkIsMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkIsMobile();
        window.addEventListener('resize', checkIsMobile);

        return () => window.removeEventListener('resize', checkIsMobile);
    }, []);

    return (
        <div className=" fixed bottom-0 z-[102012912] py-4 w-full max-w-full flex flex-col items-center overflow-x-hidden">
            <motion.div
                className="p-2 rounded-xl bg-[#1E1E1E] flex flex-col"
                variants={containerVariants}
                animate={isExpanded ? "expanded" : "collapsed"}
                initial="collapsed"
            >
                <AnimatePresence>
                    {isExpanded && (
                        <motion.div className="flex flex-col gap-2 mb-2">
                            {menuItems.map((item) => (
                                <motion.div
                                    key={item.id}
                                    variants={itemVariants}
                                    className="flex items-center gap-4 p-3 rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                                    onClick={() => setIsExpanded(false)}
                                >
                                    <div className="h-12 w-12 rounded-md overflow-hidden bg-white flex items-center justify-center flex-shrink-0">
                                        <Image
                                            width={34}
                                            height={34}
                                            quality={100}
                                            src={item.image}
                                            alt={item.title}
                                            className="object-cover rounded-[2px]"
                                        />
                                    </div>
                                    <Link
                                        href={item.mobileHref && isMobile ? item.mobileHref : item.href}
                                        className="flex-1"
                                        onClick={() => {
                                            // Set navigation flag to prevent preloader on next page
                                            if (typeof window !== 'undefined') {
                                                sessionStorage.setItem('isNavigation', 'true');
                                            }
                                        }}
                                    >
                                        <h4 className="text-white text-lg font-medium">{item.title}</h4>
                                    </Link>
                                </motion.div>
                            ))}
                            <Separator orientation="horizontal" className=" w-full opacity-20" />
                        </motion.div>
                    )}
                </AnimatePresence>

                {/* Bottom Bar - Always Visible */}
                <div className="flex items-center w-full">
                    <div className=" h-14 aspect-square w-auto rounded-lg bg-black border border-white/5 flex items-center justify-center">
                        <Image width={28} height={28} quality={100} src="/assets/memoji.png" alt="Denzel" />
                    </div>

                    <div className=" flex flex-col items-start text-white w-[200px] md:w-[340px] ml-2 md:ml-4">
                        <h4 className=" text-lg font-medium">DENZEL OBENG</h4>
                        <div className=" relative overflow-clip w-full">
                            <Marquee>
                                <p className=" font-normal text-base text-white/70 pr-1">UI DESIGNER, DESIGN FREAK, GAMER, MUSIC LOVER.</p>
                                <p className=" font-normal text-base text-white/70 pl-1">UI DESIGNER, DESIGN FREAK, GAMER, MUSIC LOVER</p>
                            </Marquee>
                            <div className="absolute w-12 left-0 inset-y-0 bg-gradient-to-r z-20 from-[#1E1E1E] to-transparent" />
                            <div className="absolute w-12 right-0 inset-y-0 bg-gradient-to-l z-20 from-[#1E1E1E] to-transparent" />
                        </div>
                    </div>

                    <button
                        className=" ml-4 p-4 hover:opacity-70 rounded-lg transition-colors cursor-pointer"
                        onClick={() => setIsExpanded(!isExpanded)}
                    >
                        {isExpanded ? <X color="white" /> : <Menu color="white" />}
                    </button>
                </div>
            </motion.div>
        </div>
    );
};
export default BottomNavigation;