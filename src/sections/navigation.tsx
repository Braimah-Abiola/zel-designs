"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import gsap from "gsap";
import { useLayoutEffect, useRef, useState } from "react"; // Added useState
import Link from "next/link";
import { navItems } from "@/constants";
import { AnimatePresence, motion } from "framer-motion";
import NavButton from "@/components/common/nav-button";
import SideMenu from "@/components/custom/menu";
import { ArrowUpRight } from "lucide-react";

const Navigation = () => {
    const headerRef = useRef<HTMLElement | null>(null);

    const [isActive, setIsActive] = useState(false);
    const [mobileNav, setMobileNav] = useState(false);


    const toggleMobileNav = () => {
        setMobileNav(!mobileNav);
    };

    useLayoutEffect(() => {
        if (headerRef.current) {
            gsap.fromTo(
                headerRef.current,
                { opacity: 0, y: -50 },
                { opacity: 1, y: 0, duration: 0.5, ease: "easeInOut" }
            );
        }
    }, []);


    return (
        <div className=" w-full max-w-full overflow-x-hidden">
            <header ref={headerRef} className="fixed z-[2147483000] bg-background top-0 w-full py-2 md:py-2.5 px-4 border-b border-b-input lg:border-none md:px-20 opacity-0">
                <nav className="flex items-center justify-between">

                    <Link href="/">
                        <div className="relative h-12 w-12 aspect-square rounded-full bg-transparent hover:bg-primary">
                            <Image fill src="/assets/logo.svg" className=" scale-[0.80]" alt="Logo" />
                        </div>
                    </Link>

                    <div className="hidden lg:flex items-center w-full justify-center gap-4">
                        {navItems.map((navItem, index) => (
                            <Link key={index} href={navItem.href}>
                                <NavButton text={navItem.title} />
                            </Link>
                        ))}
                    </div>


                    <aside className="flex items-center gap-4">
                        <Link href="https://calendly.com/denzelobeng421/30min">
                            <Button
                                className=" hidden md:flex">
                                Book A Call <ArrowUpRight />
                            </Button>
                        </Link>

                        <div className=" lg:hidden">
                            <motion.button
                                initial="hide"
                                animate={mobileNav ? "show" : "hide"}
                                onClick={() => {
                                    toggleMobileNav();
                                    setIsActive(!isActive);
                                }}
                                className={`flex flex-col space-y-1.5 relative h-12 w-12 rounded-full items-center justify-center z-[2147483000] 
                                ${isActive ? "bg-primary border-none" : "bg-transparent border broder-input"}`}
                                aria-label={mobileNav ? "Close menu" : "Open menu"}
                            >
                                <motion.span
                                    variants={{
                                        hide: {
                                            rotate: 0,
                                        },
                                        show: {
                                            rotate: 45,
                                            y: 4,
                                        },
                                    }}
                                    className="w-7 bg-foreground rounded-full h-[1.6px] block"
                                ></motion.span>

                                <motion.span
                                    variants={{

                                        hide: {
                                            rotate: 0,
                                        },
                                        show: {
                                            rotate: -45,
                                            y: -4,
                                        },
                                    }}
                                    className="w-7 bg-foreground rounded-full h-[1.6px] block"
                                ></motion.span>
                            </motion.button>
                        </div>
                    </aside>
                </nav>
                <AnimatePresence mode="wait">
                    {isActive && (
                        <SideMenu setIsActive={setIsActive} setMobileNav={setMobileNav} />
                    )}
                </AnimatePresence>
            </header>
        </div>
    );
};
export default Navigation;