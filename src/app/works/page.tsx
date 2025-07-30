"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { AppWindow, ArrowUpRight, PaintBucket, TvMinimal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";


const Works = () => {
    return (
        <motion.div
            className=" w-full px-4 md:px-12 pt-28 md:pt-40"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        >
            <div className=" w-full flex flex-col md:flex-row md:items-center justify-between uppercase font-clashDisplay font-semibold text-4xl md:text-7xl">
                <h2>Selected <br /> Works</h2>
                <h3 className=" w-full md:w-fit text-end md:text-start">&apos;2025</h3>
            </div>
            <div className=" grid grid-cols-1 md:grid-cols-2 w-full gap-4 md:gap-8 mt-6">
                <Link className=" md:col-span-2 w-full" href="https://www.astrae.design">
                    <div className=" w-full flex flex-col group">
                        <div className=" w-full h-[20rem] md:h-[36rem] relative overflow-clip rounded-2xl">
                            <Button size="icon" className=" bg-white text-foreground hover:bg-white hover:text-foreground hidden group-hover:inline-flex absolute top-4 right-4 z-20 md:size-14"><ArrowUpRight className=" scale-125" /></Button>

                            <Image fill src="/assets/astrae.webp" alt="Astrae" className=" rounded-2xl  object-cover group-hover:scale-110 transition-transform ease-in-out duration-500" quality={100} />
                        </div>
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                            <div>
                                <h4 className=" font-clashDisplay font-semibold uppercase text-4xl md:text-5xl mt-6">Astrae Design</h4>
                                <p className=" text-foreground/70 mt-0 md:mt-2 text-base md:text-lg">Beautifully crafted Next.js template store</p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                                <div className="flex gap-2 items-center px-4 py-1 rounded-full border border-black/40 uppercase">
                                    <TvMinimal className=" size-4" />
                                    <p>Web Design</p>
                                </div>
                                <div className="flex gap-2 items-center px-4 py-1 rounded-full border border-black/40 uppercase">
                                    <AppWindow className=" size-4" />
                                    <p>UI, UX</p>
                                </div>
                                <div className="flex gap-2 items-center px-4 py-1 rounded-full border border-black/40 uppercase">
                                    <PaintBucket className=" size-4" />
                                    <p>Branding</p>
                                </div>
                                <div className="flex gap-2 items-center px-4 py-1 rounded-full border border-black/40 uppercase">
                                    <p>2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link className="md:col-span-2 w-full" href="https://builtwithatlas.com/meeting-iq">
                    <div className=" w-full flex flex-col group">
                        <div className=" w-full h-[20rem] md:h-[36rem] relative overflow-clip rounded-2xl">
                            <Button size="icon" className=" hidden group-hover:inline-flex absolute top-4 right-4 z-20 md:size-14"><ArrowUpRight className=" scale-125" /></Button>
                            <Image fill src="/assets/meeting-iq.webp" alt="Meeting IQ" className=" group-hover:scale-110 transition-transform ease-in-out duration-500 rounded-2xl  object-cover" quality={100} />
                        </div>
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                            <div>
                                <h4 className=" font-clashDisplay font-semibold uppercase text-4xl md:text-5xl mt-6">Meeting IQ</h4>

                                <p className=" text-foreground/70 mt-0 md:mt-2 text-base md:text-lg">AI-powered insights for smarter sales prep</p>
                            </div>

                            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                                <div className="flex gap-2 items-center px-4 py-1 rounded-full border border-black/40 uppercase">
                                    <TvMinimal className=" size-4" />
                                    <p>Web Design</p>
                                </div>
                                <div className="flex gap-2 items-center px-4 py-1 rounded-full border border-black/40 uppercase">
                                    <AppWindow className=" size-4" />
                                    <p>UI, UX</p>
                                </div>
                                <div className="flex gap-2 items-center px-4 py-1 rounded-full border border-black/40 uppercase">
                                    <p>2025</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link className="md:col-span-2 w-full" href="https://www.stakenet.app/">
                    <div className=" w-full flex flex-col group">
                        <div className=" w-full h-[20rem] md:h-[36rem] relative overflow-clip rounded-2xl">
                            <Button size="icon" className=" hidden group-hover:inline-flex absolute top-4 right-4 z-20 md:size-14"><ArrowUpRight className=" scale-125" /></Button>

                            <Image fill src="/assets/stakenet.webp" alt="Stakenet" className=" rounded-2xl group-hover:scale-110 transition-transform ease-in-out duration-500  object-cover" quality={100} />
                        </div>
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                            <div>
                                <h4 className=" font-clashDisplay font-semibold uppercase text-4xl md:text-5xl mt-6">Stakenet</h4>

                                <p className=" text-foreground/70 mt-0 md:mt-2 text-base md:text-lg">AI-powered bet slips analyzer for accurate prediction</p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                                <div className="flex gap-2 items-center px-4 py-1 rounded-full border border-black/40 uppercase">
                                    <TvMinimal className=" size-4" />
                                    <p>Web Design</p>
                                </div>
                                <div className="flex gap-2 items-center px-4 py-1 rounded-full border border-black/40 uppercase">
                                    <AppWindow className=" size-4" />
                                    <p>UI, UX</p>
                                </div>
                                <div className="flex gap-2 items-center px-4 py-1 rounded-full border border-black/40 uppercase">
                                    <PaintBucket className=" size-4" />
                                    <p>Branding</p>
                                </div>
                                <div className="flex gap-2 items-center px-4 py-1 rounded-full border border-black/40 uppercase">
                                    <p>2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <Link className="md:col-span-2 w-full" href="https://02-galileo.vercel.app/">
                    <div className=" w-full flex flex-col group">
                        <div className=" w-full h-[20rem] md:h-[36rem] relative overflow-clip rounded-2xl">
                            <Button size="icon" className=" hidden group-hover:inline-flex absolute top-4 right-4 z-20 md:size-14"><ArrowUpRight className=" scale-125" /></Button>

                            <Image fill src="/assets/midas.webp" alt="Midas" className=" rounded-2xl group-hover:scale-110 transition-transform ease-in-out duration-500  object-cover" quality={100} />
                        </div>
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                            <div>
                                <h4 className=" font-clashDisplay font-semibold uppercase text-4xl md:text-5xl mt-6">Midas Inc</h4>

                                <p className=" text-foreground/70 mt-0 md:mt-2 text-base md:text-lg">
                                    Payment platform using mobile money
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                                <div className="flex gap-2 items-center px-4 py-1 rounded-full border border-black/40 uppercase">
                                    <TvMinimal className=" size-4" />
                                    <p>Web Design</p>
                                </div>
                                <div className="flex gap-2 items-center px-4 py-1 rounded-full border border-black/40 uppercase">
                                    <AppWindow className=" size-4" />
                                    <p>UI, UX</p>
                                </div>
                                <div className="flex gap-2 items-center px-4 py-1 rounded-full border border-black/40 uppercase">
                                    <p>2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

                <Link className="md:col-span-2 w-full" href="https://www.genysolutions.tech/">
                    <div className=" w-full flex flex-col group">
                        <div className=" w-full h-[20rem] md:h-[36rem] relative overflow-clip rounded-2xl">
                            <Button size="icon" className=" hidden group-hover:inline-flex absolute top-4 right-4 z-20 md:size-14"><ArrowUpRight className=" scale-125" /></Button>

                            <Image fill src="/assets/gen-y.webp" alt="Midas" className=" rounded-2xl group-hover:scale-110 transition-transform ease-in-out duration-500  object-cover" quality={100} />
                        </div>
                        <div className="flex flex-col md:flex-row items-start md:items-center justify-between w-full">
                            <div>
                                <h4 className=" font-clashDisplay font-semibold uppercase text-4xl md:text-5xl mt-6">Gen Y Solutions</h4>

                                <p className=" text-foreground/70 mt-0 md:mt-2 text-base md:text-lg">
                                    An AI digital agency tailored for solutions
                                </p>
                            </div>
                            <div className="flex flex-wrap gap-2 mt-4 md:mt-0">
                                <div className="flex gap-2 items-center px-4 py-1 rounded-full border border-black/40 uppercase">
                                    <TvMinimal className=" size-4" />
                                    <p>Web Design</p>
                                </div>
                                <div className="flex gap-2 items-center px-4 py-1 rounded-full border border-black/40 uppercase">
                                    <AppWindow className=" size-4" />
                                    <p>UI, UX</p>
                                </div>
                                <div className="flex gap-2 items-center px-4 py-1 rounded-full border border-black/40 uppercase">
                                    <p>2024</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>

            </div>

            <div className=" h-[8rem] md:h-[20rem]" />

        </motion.div>
    );
}

export default Works;