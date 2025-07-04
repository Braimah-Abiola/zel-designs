"use client"

import Wrapper from "@/components/common/wrapper";
import FullWidthText from "@/components/custom/full-width-text";
import Magnetic from "@/components/custom/magnetic";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUp, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const Footer = () => {
    return (
        <footer className=" bg-black pb-12">
            <Wrapper>
                <FullWidthText />
                <div className=" w-full flex flex-col md:flex-row items-center justify-between md:-mt-20">

                    <div className="flex flex-wrap items-center text-base md:text-lg gap-2 md:gap-12 justify-start w-full">
                        <Magnetic>
                            <Link href="https://linkedin.com/imdenzel__" target="_blank" className=" text-white/70 hover:text-white">
                                <p>LinkedIn</p>
                            </Link>
                        </Magnetic>
                        <Magnetic>
                            <Link href="https://instagram.com/imdenzel__" target="_blank" className=" text-white/70 hover:text-white">
                                <p>Instagram</p>
                            </Link>
                        </Magnetic>
                        <Magnetic>
                            <Link href="https://wa.me/233546153204" target="_blank" className=" text-white/70 hover:text-white">
                                <p>WhatsApp</p>
                            </Link>
                        </Magnetic>
                        <Magnetic>
                            <Link href="https://twitter.com/imdenzel__" target="_blank" className=" text-white/70 hover:text-white">
                                <p>(X)</p>
                            </Link>
                        </Magnetic>
                    </div>

                    <div className=" hidden md:block">
                        <Magnetic>
                            <Button variant="ghost" onClick={() => { }}><ArrowUp /> Back To Top</Button>
                        </Magnetic>
                    </div>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 mt-6 md:mt-24">
                    <div className="flex flex-col items-start text-base md:text-lg gap-4">
                        <Magnetic>
                            <Link href="/" target="_blank" className=" flex items-center gap-2 text-white">
                                <ArrowRight />
                                <p>Home</p>
                            </Link>
                        </Magnetic>
                        <Magnetic>
                            <Link href="/#services" target="_blank" className=" flex items-center gap-2 text-white">
                                <ArrowRight />
                                <p>Services</p>
                            </Link>
                        </Magnetic>
                        <Magnetic>
                            <Link href="/#projects" target="_blank" className=" flex items-center gap-2 text-white">
                                <ArrowRight />
                                <p>Projects</p>
                            </Link>
                        </Magnetic>
                        <Magnetic>
                            <Link href="/#about" target="_blank" className=" flex items-center gap-2 text-white">
                                <ArrowRight />
                                <p>About Me</p>
                            </Link>
                        </Magnetic>

                        <p className=" hidden md:block mt-32 text-white text-base text-nowrap">© 2025 Zeldesigns. All Rights Reserved</p>
                    </div>

                    <div className="flex flex-col items-start text-base md:text-lg gap-4">
                        <Magnetic>
                            <Link href="/" target="_blank" className=" flex items-center gap-2 text-white">
                                <ArrowRight />
                                <p>Meeting IQ</p>
                            </Link>
                        </Magnetic>
                        <Magnetic>
                            <Link href="/#services" target="_blank" className=" flex items-center gap-2 text-white">
                                <ArrowRight />
                                <p>Stakenet</p>
                            </Link>
                        </Magnetic>
                        <Magnetic>
                            <Link href="/#projects" target="_blank" className=" flex items-center gap-2 text-white">
                                <ArrowRight />
                                <p>Astrae Designs</p>
                            </Link>
                        </Magnetic>
                        <Magnetic>
                            <Link href="/#about" target="_blank" className=" flex items-center gap-2 text-white">
                                <ArrowRight />
                                <p>Midas Inc</p>
                            </Link>
                        </Magnetic>
                        <Magnetic>
                            <Link href="/#about" target="_blank" className=" flex items-center gap-2 text-white">
                                <ArrowRight />
                                <p>GenYSolutions</p>
                            </Link>
                        </Magnetic>
                    </div>

                    <div className=" w-full mt-6 md:mt-0 h-full bg-muted col-span-2 min-h-[10rem] rounded-xl relative">
                        <h4 className=" uppercase text-4xl md:text-6xl font-anton text-white pl-4 pt-4 md:pt-8 md:pl-8">Schedule A Call</h4>

                        <Button size="icon" className=" bg-white hover:bg-white text-foreground hover:text-foreground absolute bottom-4 right-4 md:bottom-12 md:right-12"><ArrowUpRight className=" size-6" /></Button>
                    </div>

                    <p className=" col-span-2 w-full text-center md:hidden mt-12 text-white text-sm text-nowrap">© 2025 Zeldesigns. All Rights Reserved</p>

                </div>
            </Wrapper>
        </footer>
    );
}

export default Footer;