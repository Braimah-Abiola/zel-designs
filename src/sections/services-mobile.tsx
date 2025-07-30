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

const ServicesMobile = () => {
    const [activeService, setActiveService] = useState(1);
    const containerRef = useRef<HTMLElement>(null);
    const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

    console.log('Current active service:', activeService);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = serviceRefs.current.indexOf(entry.target as HTMLDivElement);
                        if (index !== -1) {
                            console.log('Setting active service to:', index + 1);
                            setActiveService(index + 1);
                        }
                    }
                });
            },
            {
                threshold: 0.3,
                rootMargin: "-20% 0px -20% 0px"
            }
        );

        // Use a timeout to ensure refs are populated
        const timeoutId = setTimeout(() => {
            serviceRefs.current.forEach((ref, index) => {
                if (ref) {
                    console.log(`Observing service ${index + 1}`);
                    observer.observe(ref);
                }
            });
        }, 100);

        return () => {
            clearTimeout(timeoutId);
            observer.disconnect();
        };
    }, []);

    return (
        <section id="services-mobile" className=" mt-20" ref={containerRef}>
            {/* Mobile Header */}
            <div className=" px-4 w-full flex flex-col items-center justify-between uppercase font-clashDisplay font-semibold text-4xl md:text-7xl">
                <h2>My Services</h2>
            </div>

            {/* Mobile Services Content */}
            <div className="relative mt-12">
                {/* Mobile Sticky Counter - Centered at top */}
                <div className="sticky top-20 z-20 flex justify-center mb-4">
                    <motion.div
                        key={activeService}
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="w-16 h-16 bg-black text-white flex items-center justify-center text-xl font-bold font-clashDisplay rounded-full shadow-lg"
                    >
                        0{activeService}
                    </motion.div>
                </div>

                {/* Mobile Service Items - Stacked vertically */}
                <div className="space-y-4 px-4">
                    {servicesData.map((service, index) => (
                        <motion.div
                            key={service.id}
                            ref={(el) => { serviceRefs.current[index] = el; }}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.1 }}
                            viewport={{ once: false, amount: 0.3 }}
                            className={`min-h-[70vh] flex flex-col justify-center items-center p-6 rounded-2xl mb-6 ${service.bgColor}`}
                        >
                            {/* Mobile Service Icon */}
                            <motion.div
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut" }}
                                viewport={{ once: false, amount: 0.3 }}
                                className="mb-6"
                            >
                                <div className="w-24 h-24 flex items-center justify-center bg-white rounded-xl shadow-sm">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        width={60}
                                        height={60}
                                        className="object-contain"
                                    />
                                </div>
                            </motion.div>

                            {/* Mobile Service Content */}
                            <div className="text-center">
                                <motion.h3
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    className={`text-2xl font-bold font-clashDisplay ${service.textColor} mb-4`}
                                >
                                    {service.title}
                                </motion.h3>
                                <motion.p
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                                    viewport={{ once: false, amount: 0.3 }}
                                    className={`text-base leading-relaxed ${service.textColor === 'text-white' ? 'text-white/80' : 'text-black/70'} max-w-sm mx-auto`}
                                >
                                    {service.description}
                                </motion.p>
                            </div>

                            {/* Mobile Service Number Indicator */}
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ duration: 0.5, ease: "easeOut", delay: 0.6 }}
                                viewport={{ once: false, amount: 0.3 }}
                                className="mt-8"
                            >
                                <div className="flex space-x-2">
                                    {servicesData.map((_, i) => (
                                        <div
                                            key={i}
                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${i === index ? 'bg-black w-8' : 'bg-black/30'
                                                }`}
                                        />
                                    ))}
                                </div>
                            </motion.div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesMobile;