import Wrapper from "@/components/common/wrapper";
import Image from "next/image";
import LogoTicker from "./logo-ticker";

const Value = () => {
    return (
        <section className=" min-h-[80vh] relative h-full">
            <Wrapper className="h-full w-full">
                <h2 className=" absolute left-20 top-60 uppercase font-anton text-5xl md:text-8xl text-primary-foreground text-start">
                    Your <br /> Designs <br />
                    <span className="flex items-center gap-4"> On
                        <Image
                            width={120}
                            height={80}
                            src="/assets/fire.png"
                            alt="Website Design"
                            className="  object-cover"
                            quality={100}
                        />
                    </span>
                    Steriods
                </h2>
                <div className=" w-full bottom-20 absolute flex items-center justify-end">

                    <LogoTicker />
                </div>
            </Wrapper>
        </section>
    );
}

export default Value;