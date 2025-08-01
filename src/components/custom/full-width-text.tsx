"use client"

import React, { useEffect, useRef } from "react";

const FullWidthText = ({ text }: { text: string; }) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const textRef = useRef<HTMLSpanElement | null>(null);

    useEffect(() => {
        resizeText();

        window.addEventListener("resize", resizeText);

        return () => {
            window.removeEventListener("resize", resizeText);
        };
    }, []);

    const resizeText = () => {
        const container = containerRef.current;
        const text = textRef.current;

        if (!container || !text) {
            return;
        }

        const containerWidth = container.offsetWidth;
        let min = 1;
        let max = 2500;

        while (min <= max) {
            const mid = Math.floor((min + max) / 2);
            text.style.fontSize = mid + "px";

            if (text.offsetWidth <= containerWidth) {
                min = mid + 1;
            } else {
                max = mid - 1;
            }
        }

        text.style.fontSize = max + "px";
    };

    return (
        <div
            className="flex h-fit w-full items-center overflow-hidden"
            ref={containerRef}
        >
            <span
                className="whitespace-nowrap text-center font-clashDisplay font-semibold text-[#1E1E1E] uppercase"
                ref={textRef}
            >
                {text}
            </span>
        </div>
    );
};

export default FullWidthText;