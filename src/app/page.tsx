import AboutMe from "@/sections/about";
import Cta from "@/sections/cta";
import Faqs from "@/sections/faqs";
import Hero from "@/sections/hero";
import Projects from "@/sections/projects";
import Services from "@/sections/services";
import Testimonials from "@/sections/testimonials";
import Value from "@/sections/value";

const Home = () => {
  return (
    <main className=" min-h-screen">
      <Hero />
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