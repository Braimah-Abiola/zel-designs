"use client"

import Preloader from "@/components/custom/preloader";
import AboutMe from "@/sections/about";
import Hero from "@/sections/hero";
import HeroMobile from "@/sections/hero-mobile";
import MyStack from "@/sections/my-stack";
import Projects from "@/sections/projects";
import Services from "@/sections/services";
import ServicesMobile from "@/sections/services-mobile";
import Testimonials from "@/sections/testimonials";

import Lenis from "@studio-freight/lenis";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";


const Home = () => {
  // Initialize based on whether this is a page reload or navigation
  const [isLoading, setIsLoading] = useState(() => {
    if (typeof window !== 'undefined') {
      // Check if this is a navigation (not a reload)
      const isNavigation = sessionStorage.getItem('isNavigation');
      if (isNavigation) {
        // This is a navigation, don't show preloader
        sessionStorage.removeItem('isNavigation');
        return false;
      }
      // This is a page load/reload, show preloader
      return true;
    }
    return true; // Default to true on server-side
  });

  useEffect(() => {
    // Only set up Lenis scroll
    const lenis = new Lenis();
    function raf(time: number): void {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <Preloader
            onAnimationComplete={() => {
              setIsLoading(false);
            }}
          />
        )}
      </AnimatePresence>

      {!isLoading && (
        <motion.main
          className=" min-h-screen"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <div className=" md:hidden">
            <HeroMobile />
          </div>
          <div className=" hidden md:block">
            <Hero />
          </div>
          <div className=" hidden md:block min-h-[110vh]" />
          <AboutMe />
          <div className="  md:hidden">
            <ServicesMobile />
          </div>
          <div className=" hidden md:block">
            <Services />
          </div>
          <div className="hidden md:block h-[20rem]" />
          <Projects />
          <Testimonials />
          <MyStack />
        </motion.main>
      )}
    </>
  );
}

export default Home;