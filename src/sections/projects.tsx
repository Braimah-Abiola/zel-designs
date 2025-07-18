import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
    return (
        <section id="projects" className=" py-20">
            <Wrapper>
                <span className=" text-base md:text-lg font-medium">/My Works</span>

                <div className=" grid grid-cols-1 md:grid-cols-2 w-full gap-4 md:gap-8 mt-6">
                    <Link href="https://builtwithatlas.com/meeting-iq">
                        <div className=" w-full flex flex-col group">
                            <div className=" w-full h-[22rem] md:h-[40rem] relative overflow-clip rounded-2xl">
                                <Button size="icon" className=" hidden group-hover:inline-flex absolute top-4 right-4 z-20 md:size-14"><ArrowUpRight className=" scale-125" /></Button>
                                <Image fill src="/assets/meeting-iq.webp" alt="Meeting IQ" className=" group-hover:scale-110 transition-transform ease-in-out duration-500 rounded-2xl  object-cover" quality={100} />
                            </div>
                            <h4 className=" font-anton text-4xl md:text-6xl mt-6">Meeting IQ</h4>
                            <p className=" text-foreground/70 mt-2 text-base md:text-lg">An AI-powered assistant that helps sales teams prepare for meetings with key insights-delivered exactly when they need it.</p>
                        </div>
                    </Link>
                    <Link href="https://www.stakenet.app/">
                        <div className=" w-full flex flex-col group">
                            <div className=" w-full h-[22rem] md:h-[40rem] relative overflow-clip rounded-2xl">
                                <Button size="icon" className=" hidden group-hover:inline-flex absolute top-4 right-4 z-20 md:size-14"><ArrowUpRight className=" scale-125" /></Button>

                                <Image fill src="/assets/stakenet.webp" alt="Stakenet" className=" rounded-2xl group-hover:scale-110 transition-transform ease-in-out duration-500  object-cover" quality={100} />
                            </div>
                            <h4 className=" font-anton text-4xl md:text-6xl mt-6">Stakenet</h4>
                            <p className=" text-foreground/70 mt-2 text-base md:text-lg">Analyse your bet slips and get the best odds for your bets. Stakenet is a betting analysis tool that helps you make informed decisions. </p>
                        </div>
                    </Link>

                    <Link className=" md:col-span-2 w-full" href="https://www.astrae.design">
                        <div className=" w-full flex flex-col group">
                            <div className=" w-full h-[22rem] md:h-[52rem] relative overflow-clip rounded-2xl">
                                <Button size="icon" className=" bg-white text-foreground hover:bg-white hover:text-foreground hidden group-hover:inline-flex absolute top-4 right-4 z-20 md:size-14"><ArrowUpRight className=" scale-125" /></Button>

                                <Image fill src="/assets/astrae.webp" alt="Astrae" className=" rounded-2xl  object-cover group-hover:scale-110 transition-transform ease-in-out duration-500" quality={100} />
                            </div>
                            <h4 className=" font-anton text-4xl md:text-6xl mt-6">Astrae Design</h4>
                            <p className=" text-foreground/70 mt-2 text-base md:text-lg">Beautifully crafted Next.js templates for stunning landing pages. Build stunning websites quickly with premium landing page templates.</p>
                        </div>
                    </Link>
                    <Link href="https://02-galileo.vercel.app/">
                        <div className=" w-full flex flex-col group">
                            <div className=" w-full h-[22rem] md:h-[40rem] relative overflow-clip rounded-2xl">
                                <Button size="icon" className=" hidden group-hover:inline-flex absolute top-4 right-4 z-20 md:size-14"><ArrowUpRight className=" scale-125" /></Button>

                                <Image fill src="/assets/midas.webp" alt="Midas" className=" rounded-2xl  object-cover group-hover:scale-110 transition-transform ease-in-out duration-500" quality={100} />
                            </div>
                            <h4 className=" font-anton text-4xl md:text-6xl mt-6">Midas Inc.</h4>
                            <p className=" text-foreground/70 mt-2 text-base md:text-lg">Midas lets you pay on any website using your mobile money, fast and without the need for a card.</p>
                        </div>
                    </Link>
                    <Link href="https://www.genysolutions.tech/">
                        <div className=" w-full flex flex-col group">
                            <div className=" w-full h-[22rem] md:h-[40rem] relative overflow-clip rounded-2xl">
                                <Button size="icon" className=" hidden group-hover:inline-flex absolute top-4 right-4 z-20 md:size-14"><ArrowUpRight className=" scale-125" /></Button>

                                <Image fill src="/assets/gen-y.webp" alt="GenYSolutions" className=" rounded-2xl  object-cover group-hover:scale-110 transition-transform ease-in-out duration-500" quality={100} />
                            </div>
                            <h4 className=" font-anton text-4xl md:text-6xl mt-6">GenYSolutions</h4>
                            <p className=" text-foreground/70 mt-2 text-base md:text-lg">A digital agency crafting tailored AI solutions across diverse industries from banking to education.</p>
                        </div>
                    </Link>
                </div>
            </Wrapper>
        </section>
    );
}

export default Projects;