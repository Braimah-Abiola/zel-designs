import Wrapper from "@/components/common/wrapper";
import Image from "next/image";

const AboutMe = () => {
    return (
        <section id="about" className=" py-20">
            <Wrapper>
                <span className=" text-base md:text-lg font-medium">/About Me</span>
                <div className=" w-full grid grid-cols-1 md:grid-cols-2 mt-6 gap-4 md:gap-8">
                    <div className=" w-full h-full min-h-[24rem] md:min-h-[52rem] relative">
                        <Image fill src="/assets/about.png" alt="Zel" className=" rounded-2xl object-cover object-top" quality={100} />
                    </div>
                    <div className=" w-full h-full bg-primary rounded-2xl p-4 md:p-12">
                        <h3 className=" uppercase font-anton text-4xl md:text-6xl text-primary-foreground">UI/UX Designer, <br /> Gamer & <br /> Footballer</h3>
                        <p className=" text-base md:text-lg font-medium mt-4 md:mt-12">With a focus on design and user experience, I build interfaces that resonate—seamlessly blending aesthetics and intuitive functionality to deliver meaningful results for users and businesses alike.</p>
                        <p className=" text-base md:text-lg font-medium mt-2 md:mt-4">I craft immersive web experiences by blending user-centered design and visual appeal, ensuring every project feels intuitive and impactful. My approach is rooted in attention to detail and a deep passion for creating seamless digital interactions.</p>
                        <p className=" text-base md:text-lg font-medium mt-2 md:mt-4">When I&apos;m not designing, you can find me exploring creative outlets like gaming and football, or experimenting with new tech.</p>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default AboutMe;