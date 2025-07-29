"use client"

import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useMemo, JSX } from 'react';

const phrase = "Being exceptional at my skills is a responsibility, I work at it every singly day, combining my passion for design and web interaction to create amazing digital experiences.";
const phrase2 = "Every pixel of design, every layout, and every decision I make reflects my commitment to growth and excellence.";

const AboutMe = () => {
    const aboutContainer = useRef<HTMLDivElement | null>(null);

    const letterElements = useMemo(() => {
        const renderLettersForWord = (word: string, wordIndex: number): JSX.Element[] => {
            return word.split("").map((letter, letterIndex) => (
                <span
                    className="animated-letter opacity-20"
                    key={`word-${wordIndex}-letter-${letterIndex}`}
                >
                    {letter}
                </span>
            ));
        };

        return phrase.split(" ").map((word, wordIndex) => (
            <p key={`word-${wordIndex}`} className="m-0 flex mr-2 mb-1">
                {renderLettersForWord(word, wordIndex)}
            </p>
        ));
    }, []);

    const letterElements2 = useMemo(() => {
        const renderLettersForWord = (word: string, wordIndex: number): JSX.Element[] => {
            return word.split("").map((letter, letterIndex) => (
                <span
                    className="animated-letter opacity-20"
                    key={`word-${wordIndex}-letter-${letterIndex}`}
                >
                    {letter}
                </span>
            ));
        };

        return phrase2.split(" ").map((word, wordIndex) => (
            <p key={`word-${wordIndex}`} className="m-0 flex mr-2 mb-1">
                {renderLettersForWord(word, wordIndex)}
            </p>
        ));
    }, []);

    useEffect(() => {
        gsap.registerPlugin(ScrollTrigger);

        const ctx = gsap.context(() => {
            if (aboutContainer.current) {
                const letters = gsap.utils.toArray('.animated-letter', aboutContainer.current);

                if (letters && letters.length > 0) {
                    gsap.to(letters, {
                        scrollTrigger: {
                            trigger: aboutContainer.current,
                            scrub: true,
                            start: "top 50%",
                            end: () => `+=${aboutContainer.current!.offsetHeight * 0.8}`,

                        },
                        opacity: 1,
                        ease: "none",
                        stagger: 0.05,
                    });
                }
            }
        }, aboutContainer);

        return () => ctx.revert();
    }, [letterElements]);

    return (
        <section
            id='about'
            ref={aboutContainer}
            className="flex flex-row justify-between gap-12 min-h-[50vh] items-start px-4 md:px-12 w-full pt-28"
        >
            <span className=' text-lg font-medium md:text-xl w-full text-start'>About Me</span>


            <div className=' max-w-3xl flex flex-col gap-8'>

                <div className="flex flex-wrap justify-start w-full text-2xl md:text-3xl text-start leading-tight">
                    {letterElements}
                </div>

                <div className="flex flex-wrap justify-start w-full text-2xl md:text-3xl text-start leading-tight">
                    {letterElements2}
                </div>
            </div>

        </section>
    );
}

export default AboutMe;