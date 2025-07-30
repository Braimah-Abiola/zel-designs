"use client"

import FullWidthText from "@/components/custom/full-width-text";
import Magnetic from "@/components/custom/magnetic";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {

    const handleScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <footer className=" bg-white w-full px-4 md:px-12 pb-28 pt-12 flex flex-col items-center">
            <div className=" w-full flex flex-col md:flex-row items-start md:items-end justify-between">
                <h2 className="font-clashDisplay font-semibold text-4xl md:text-7xl uppercase">Let&apos;s bring your <br /> project to life.</h2>

                <Link className=" mt-4 md:mt-0" href="https://calendly.com/denzelobeng421/design-call">
                    <Button>Book A Call</Button>
                </Link>
            </div>

            <Separator orientation="horizontal" className=" w-full mt-12 mb-6" />

            <div className=" w-full flex flex-col md:flex-row items-center justify-between">

                <div className="flex flex-wrap items-center text-base md:text-lg gap-2 md:gap-12 justify-start w-full">
                    <Magnetic>
                        <Link href="https://linkedin.com/imdenzel__" target="_blank" className=" text-black/70 hover:text-black">
                            <p>LinkedIn</p>
                        </Link>
                    </Magnetic>
                    <Magnetic>
                        <Link href="https://instagram.com/imdenzel__" target="_blank" className=" text-black/70 hover:text-black">
                            <p>Instagram</p>
                        </Link>
                    </Magnetic>
                    <Magnetic>
                        <Link href="https://wa.me/233546153204" target="_blank" className=" text-black/70 hover:text-black">
                            <p>WhatsApp</p>
                        </Link>
                    </Magnetic>
                    <Magnetic>
                        <Link href="https://twitter.com/imdenzel__" target="_blank" className=" text-black/70 hover:text-black">
                            <p>(X)</p>
                        </Link>
                    </Magnetic>
                </div>

                <div className=" hidden md:block">
                    <Magnetic>
                        <Button variant="ghost" onClick={handleScrollToTop}><ArrowUp /> Back To Top</Button>
                    </Magnetic>
                </div>
            </div>

            <div className="flex w-full items-center gap-4 mt-4 md:mt-0">
                <div className="relative h-12 w-12 md:h-44 md:w-44 aspect-square rounded-full bg-transparent hover:bg-primary">
                    <Image fill src="/assets/logo.svg" alt="Logo" />
                </div>
                <FullWidthText text="zeldesigns." />
            </div>

            <p className=" hidden md:block -mt-4">© 2025 Zeldesigns. All Rights Reserved</p>
        </footer>
    );
}

export default Footer;