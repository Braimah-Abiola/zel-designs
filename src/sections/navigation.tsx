"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Navigation = () => {

    return (
        <div className=" w-full bg-transparent max-w-full overflow-x-hidden">
            <header className=" fixed z-50 top-0 w-full py-2 md:py-4 px-4 border-b border-b-input lg:border-none md:px-12">
                <nav className=" w-full items-center flex justify-between">
                    <div className="flex items-center gap-20">
                        <div className="flex flex-col items-start gap-1">
                            <span className=" font-semibold">Ghana based</span>
                            <p className=" font-medium text-foreground/70">Working globally</p>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <span className=" font-semibold">Building at</span>
                            <p className=" font-medium text-foreground/70">Astrae</p>
                        </div>
                        <div className="flex flex-col items-start gap-1">
                            <span className=" font-semibold">Freelance availability</span>
                            <div className="flex items-center gap-2">
                                <p className=" font-medium text-foreground/70">Available Now</p> <div className=" h-2 w-2 aspect-square rounded-full bg-green-500 animate-pulse" />
                            </div>
                        </div>
                    </div>

                    <Link href="https://calendly.com/denzelobeng421/design-call">
                        <Button>Book A Call</Button>
                    </Link>
                </nav>

            </header>
        </div>
    );
};
export default Navigation;