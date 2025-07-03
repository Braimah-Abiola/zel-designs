import { ArrowRight } from "lucide-react";

const NavButton = ({ text }: { text: string }) => {
    return (
        <button className="group w-fit text-base overflow-clip cursor-pointer flex h-11 py-2 items-center rounded-full bg-secondary pl-5 pr-7 transition-all duration-300 ease-in-out hover:bg-primary hover:pl-2 hover:pr-5 hover:text-foreground">
            <span className="rounded-full w-2 h-2 aspect-square bg-foreground transition-colors duration-300 group-hover:bg-primary" />
            <ArrowRight className="-translate-x-[250%] transition-all duration-500 group-hover:-translate-x-[20%] group-hover:text-base group-hover:text-foreground group-active:rotate-45 h-5 w-5" />
            <span>{text}</span>
        </button>
    );
};

export default NavButton;