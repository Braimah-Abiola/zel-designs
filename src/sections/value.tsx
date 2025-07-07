import Wrapper from "@/components/common/wrapper";
import Image from "next/image";
import LogoTicker from "./logo-ticker";
import LogoTickerMobile from "./logo-ticker-mobile";

const Value = () => {
    return (
        <section className=" md:min-h-[80vh] relative h-fit md:h-full mt-12 md:mt-0">
            <Wrapper className="h-full w-full">
                <h2 className=" md:absolute md:left-20 md:top-60 uppercase font-anton text-5xl md:text-8xl text-primary-foreground text-start">
                    Your <br className=" hidden md:block" /> Designs <br />
                    <span className="flex items-center md:gap-4"> On
                        <Image
                            width={120}
                            height={80}
                            src="/assets/fire.png"
                            alt="Website Design"
                            className=" scale-75 md:scale-100  object-cover"
                            quality={100}
                        />
                    </span>
                    Steroids
                </h2>
                <div className=" hidden md:block">
                    <div className=" w-full md:bottom-20 md:absolute flex items-center justify-end">
                        <LogoTicker />
                    </div>
                </div>
                <div className=" md:hidden">
                    <LogoTickerMobile />
                </div>
            </Wrapper>
        </section>
    );
}

export default Value;