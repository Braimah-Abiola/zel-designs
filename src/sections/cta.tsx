"use client";

import Wrapper from "@/components/common/wrapper";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

const ctaContent = [
    {
        id: 1,
        firstText: "Let’s",
        secondText: "Connect",
        imageSrc: "/assets/cta-1.png",
        description: "Whether you found me or I reached out to you, it all starts with a simple conversation. You tell me about your business, your goals, and the problem you're looking to solve. No pressure — just clarity.",
    },
    {
        id: 2,
        firstText: "Understanding",
        secondText: "Your Vision",
        imageSrc: "/assets/cta-2.png",
        description: "I take time to understand the big picture: your users, your brand, and the experience you want to create. From there, I offer strategic design insights and solutions tailored to move you forward.",
    },
    {
        id: 3,
        firstText: "Proposal",
        secondText: "& Booking",
        imageSrc: "/assets/cta-3.png",
        description: "Once we’re aligned on the direction, I’ll share a clear proposal outlining timelines, scope, and pricing. Once approved, you can easily secure your spot by booking a start date and making payment.",
    },
    {
        id: 4,
        firstText: "Design",
        secondText: "& Deliver",
        imageSrc: "/assets/cta-4.png",
        description: "With everything in place, I dive into the design process keeping you involved, informed, and excited every step of the way. Together, we’ll bring your idea to life with clarity, purpose, and style.",
    },
];

const contentVariants = {
    initial: { opacity: 0, y: 30 },
    animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.17, 0.67, 0.83, 0.67] } }, // easeOut cubic-bezier
    exit: { opacity: 0, y: -30, transition: { duration: 0.6, ease: [0.32, 0, 0.67, 0] } }, // easeIn cubic-bezier
};

const Cta = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveIndex((prevIndex) => (prevIndex + 1) % ctaContent.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const activeContent = ctaContent[activeIndex];

    return (
        <section className=" h-screen bg-black">
            <Wrapper className=" w-full h-screen flex flex-col items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeIndex}
                        variants={contentVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        className="flex flex-col items-center text-center"
                    >
                        <span className="text-base md:text-lg text-white font-medium">
                            (0{activeContent.id})
                        </span>
                        <div className="flex items-center gap-4 w-full justify-center mt-8">
                            <h2 className=" uppercase font-anton text-6xl md:text-8xl text-white text-center">
                                {activeContent.firstText}
                            </h2>
                            <Image
                                width={120}
                                height={80}
                                src={activeContent.imageSrc}
                                alt="Connect"
                                className="object-cover"
                                quality={100}
                            />
                            <h2 className=" uppercase font-anton text-6xl md:text-8xl text-white text-center">
                                {activeContent.secondText}
                            </h2>
                        </div>
                        <p className=" mt-8 text-base md:text-lg text-white max-w-4xl text-center">
                            {activeContent.description}
                        </p>
                    </motion.div>
                </AnimatePresence>
            </Wrapper>
        </section>
    );
}

export default Cta;