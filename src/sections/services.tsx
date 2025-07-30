"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const servicesData = [
    {
        id: 1,
        title: "MOBILE APP DESIGN",
        description: "Crafting intuitive, user-first mobile experiences that feel as good as they look.",
        image: "/assets/service-1.png",
        bgColor: "bg-[#F2F7F6]",
        textColor: "text-black"
    },
    {
        id: 2,
        title: "WEBSITE DESIGN",
        description: "Designing modern, responsive websites that drive engagement and elevate your brand.",
        image: "/assets/service-2.png",
        bgColor: "bg-[#E6EFED]",
        textColor: "text-black"
    },
    {
        id: 3,
        title: "BRANDING",
        description: "Building distinctive visual identities that capture your brand's personality and leave a lasting impression.",
        image: "/assets/service-3.png",
        bgColor: "bg-[#F2F7F6]",
        textColor: "text-black"
    },
    {
        id: 4,
        title: "PRODUCT DESIGN",
        description: "Designing seamless digital products that solve real problems and deliver meaningful user experiences.",
        image: "/assets/service-4.png",
        bgColor: "bg-[#E6EFED]",
        textColor: "text-black"
    }
];

const Services = () => {
    const [activeService, setActiveService] = useState(1);
    const containerRef = useRef<HTMLElement>(null);
    const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = serviceRefs.current.indexOf(entry.target as HTMLDivElement);
                        if (index !== -1) {
                            setActiveService(index + 1);
                        }
                    }
                });
            },
            {
                threshold: 0.6,
                rootMargin: "-20% 0px -20% 0px"
            }
        );

        serviceRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);

    return (
        <section id="services" ref={containerRef} className="min-h-screen">
            <div className="px-4 md:px-12 py-8">
                <h2 className="text-lg font-medium text-black">Services</h2>
            </div>

            {/* Services Content */}
            <div className="relative pt-20">
                <div className="sticky top-1/4 left-4 md:left-0 z-10 w-24 h-24">
                    <motion.div
                        key={activeService}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="w-60 h-[31vh] bg-black text-white flex items-center justify-center text-4xl md:text-7xl font-semibold font-clashDisplay"
                    >
                        0{activeService}
                    </motion.div>
                </div>

                {/* Service Items */}
                <div className="space-y-0">
                    {servicesData.map((service, index) => (
                        <div
                            key={service.id}
                            ref={(el) => { serviceRefs.current[index] = el; }}
                            className={`min-h-[36vh] flex flex-col md:flex-row md:items-center md:justify-center px-4 md:px-12 ${service.bgColor}`}
                        >
                            <div className="md:max-w-7xl pl-40 w-full flex items-center justify-between">
                                <div className="flex-1 md:max-w-2xl">
                                    <motion.h3
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, ease: "easeOut" }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        className={`text-4xl md:text-6xl font-semibold font-clashDisplay ${service.textColor} mb-6`}
                                    >
                                        {service.title}
                                    </motion.h3>
                                    <motion.p
                                        initial={{ opacity: 0, y: 30 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                        viewport={{ once: false, amount: 0.3 }}
                                        className={`text-base md:text-lg ${service.textColor === 'text-white' ? 'text-white/80' : 'text-black/70'} max-w-3xl text-nowrap`}
                                    >
                                        {service.description}
                                    </motion.p>
                                </div>

                                <motion.div
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    className="hidden md:block flex-shrink-0 ml-12"
                                >
                                    <div className="w-40 h-40 flex items-center justify-center">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            width={160}
                                            height={160}
                                            className="object-contain"
                                        />
                                    </div>
                                </motion.div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;