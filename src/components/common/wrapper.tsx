import { cn } from "@/lib/utils";
import { ReactNode } from "react";

const Wrapper = ({
    className,
    children,
}: {
    className?: string;
    children: ReactNode;
}) => {
    return (
        <div
            className={cn(
                "mx-auto w-full max-w-[1920px] px-4 md:px-20",
                className
            )}
        >
            {children}
        </div>
    );
};

export default Wrapper;
