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
                <div className=" w-full flex items-center justify-between -mt-20">

                    <div className="flex flex-wrap items-center text-lg gap-12">
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
                                <p>Twitter (X)</p>
                            </Link>
                        </Magnetic>
                    </div>

                    <Magnetic>
                        <Button variant="ghost" onClick={() => { }}><ArrowUp /> Back To Top</Button>
                    </Magnetic>
                </div>

                <div className="grid grid-cols-4 mt-24">
                    <div className="flex flex-col items-start text-lg gap-4">
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

                        <p className=" mt-32 text-white text-base text-nowrap">© 2025 Zeldesigns. All Rights Reserved</p>
                    </div>

                    <div className="flex flex-col items-start text-lg gap-4">
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

                    <div className=" w-full h-full bg-muted col-span-2 rounded-xl relative">
                        <h4 className=" uppercase text-6xl font-anton text-white pt-8 pl-8">Schedule A Call</h4>

                        <Button size="icon" className=" bg-white hover:bg-white text-foreground hover:text-foreground absolute bottom-12 right-12"><ArrowUpRight className=" size-6" /></Button>
                    </div>
                </div>
            </Wrapper>
        </footer>
    );
}

export default Footer;