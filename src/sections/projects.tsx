import { Button } from "@/components/ui/button";
import { AppWindow, ArrowUpRight, PaintBucket, TvMinimal } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Projects = () => {
    return (
        <section id="projects" className=" py-20 px-4 md:px-12 flex flex-col items-center">
            <div className=" w-full flex flex-col md:flex-row md:items-center justify-between uppercase font-clashDisplay font-semibold text-4xl md:text-7xl">
                <h2>Rare Works <br /> I&apos;ve Done</h2>
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
                                <p className=" text-foreground/70 md:mt-2 text-base md:text-lg">Beautifully crafted Next.js template store</p>
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

                                <p className=" text-foreground/70 md:mt-2 text-base md:text-lg">AI-powered insights for smarter sales prep</p>
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

                                <p className=" text-foreground/70 md:mt-2 text-base md:text-lg">AI-powered bet slips analyzer for accurate prediction</p>
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

            </div>
            <Link className=" mt-12 md:mt-0" href="/works">
                <Button>See All Works</Button>
            </Link>
        </section>
    );
}

export default Projects;