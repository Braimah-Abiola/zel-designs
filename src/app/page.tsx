"use client"

import Preloader from "@/components/custom/preloader";
import AboutMe from "@/sections/about";
import Cta from "@/sections/cta";
import Faqs from "@/sections/faqs";
import Hero from "@/sections/hero";
import Projects from "@/sections/projects";
import Services from "@/sections/services";
import Testimonials from "@/sections/testimonials";
import Value from "@/sections/value";

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
      <Hero isLoading={isLoading} />
      <Value />
      <Cta />
      <Services />
      <Projects />
      <Testimonials />
      <Faqs />
      <AboutMe />
    </main>
  );
}

export default Home;