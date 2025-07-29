import { useState } from "react";
import { FigmaIcon } from "../../public/assets/figma-icon";
import { NotionIcon } from "../../public/assets/notion-icon";
import { OpenAIIcon } from "../../public/assets/open-ai-icon";

const MyStack = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [isHovered2, setIsHovered2] = useState(false);
    const [isHovered3, setIsHovered3] = useState(false);

    return (
        <section className=" w-full flex flex-col items-center px-4 md:px-12 py-20">
            <h2 className=" text-center uppercase font-clashDisplay font-semibold text-4xl md:text-7xl">My <br /> TechStack</h2>
            <div className=" grid grid-cols-3 gap-y-6 w-full mt-12">
                <span className=" col-span-3 w-full text-lg font-medium">Experienced At</span>
                <div className=" w-full flex items-center justify-center h-auto aspect-square hover:bg-[#1E1E1E]"
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}

                >
                    <FigmaIcon isHovered={isHovered} />
                </div>
                <div className=" w-full flex items-center justify-center h-auto aspect-square hover:bg-[#1E1E1E]"
                    onMouseEnter={() => setIsHovered2(true)}
                    onMouseLeave={() => setIsHovered2(false)}

                >
                    <NotionIcon isHovered={isHovered2} />
                </div>
                <div className=" w-full flex items-center justify-center h-auto aspect-square hover:bg-[#1E1E1E]"
                    onMouseEnter={() => setIsHovered3(true)}
                    onMouseLeave={() => setIsHovered3(false)}

                >
                    <OpenAIIcon isHovered={isHovered3} />
                </div>
            </div>
        </section>
    );
}

export default MyStack;