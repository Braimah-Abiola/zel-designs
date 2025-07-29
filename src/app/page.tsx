"use client"

import Preloader from "@/components/custom/preloader";
import AboutMe from "@/sections/about";
import Hero from "@/sections/hero";
import MyStack from "@/sections/my-stack";
import Projects from "@/sections/projects";
import Services from "@/sections/services";
import Testimonials from "@/sections/testimonials";

import Lenis from "@studio-freight/lenis";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";


const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const lenis = new Lenis();
    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <main className=" min-h-screen">
      <AnimatePresence mode="wait">
        {isLoading && <Preloader onAnimationComplete={() => setIsLoading(false)} />}
      </AnimatePresence>
      <Hero />
      <div className=" min-h-[110vh]" />
      <AboutMe />
      <Services />
      <div className=" h-[12rem]"/>
      <Projects />
      <Testimonials />
      <MyStack />
    </main>
  );
}

export default Home;