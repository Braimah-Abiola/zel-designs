import Wrapper from "@/components/common/wrapper";
import { Separator } from "@/components/ui/separator";
import Image from "next/image";

const Testimonials = () => {
    return (
        <section className="py-20">
            <Wrapper>

                <h2 className=" uppercase font-anton text-5xl md:text-7xl text-primary-foreground text-center">Words from <br /> Special Clients</h2>
                <div className=" w-full mt-28 flex flex-col gap-20">

                    <div className=" py-12 relative flex flex-col md:flex-row justify-between">
                        <Separator orientation="horizontal" className=" bg-foreground opacity-20 absolute" />
                        <span className=" text-base md:text-lg font-medium mt-6">/01</span>

                        <div className=" flex flex-col items-start mt-6 w-full md:w-[280px] mb-4">
                            <h6 className=" font-semibold text-foreground text-lg uppercase">Mattin Najafi</h6>
                            <p className=" uppercase text-foreground/70">Developer@Avtalspartner</p>
                        </div>

                        <div className=" w-[204px] h-[280px] relative md:-mt-28">
                            <Image fill src="/assets/client-1.png" alt="Zel" className=" rounded-2xl object-cover object-top" quality={100} />
                        </div>
                        <p className=" md:max-w-lg text-foreground mt-6">“ Denzel was a professional designer with a great eye for trends and a strong focus on UX/UI. He listened to the requirements and delivered a product that met expectations. He was very flexible with feedback and handled it brilliantly. Highly recommended, and I will definitely work with him again in the future. “</p>
                    </div>

                    <div className=" py-12 relative flex flex-col md:flex-row justify-between">
                        <Separator orientation="horizontal" className=" bg-foreground opacity-20 absolute" />
                        <span className=" text-base md:text-lg font-medium mt-6">/02</span>

                        <div className=" flex flex-col items-start mt-6 w-full md:w-[280px] mb-4">
                            <h6 className=" font-semibold text-foreground text-lg uppercase">Arjan Mostafa</h6>
                            <p className=" uppercase text-foreground/70">CEO@Avtalspartner</p>
                        </div>

                        <div className=" w-[204px] h-[280px] relative md:-mt-28">
                            <Image fill src="/assets/client-2.png" alt="Zel" className=" rounded-2xl object-cover object-top" quality={100} />
                        </div>
                        <p className=" md:max-w-lg text-foreground mt-6">“ Denzel did a really good job. He quickly understood what we were looking for delivered fast and effective. I really don’t have any negative feedback to give to give him. Good job “</p>
                    </div>

                    <div className=" py-12 relative flex flex-col md:flex-row justify-between">
                        <Separator orientation="horizontal" className=" bg-foreground opacity-20 absolute" />
                        <span className=" text-base md:text-lg font-medium mt-6">/03</span>

                        <div className=" flex flex-col items-start mt-6 w-full md:w-[280px] mb-4">
                            <h6 className=" font-semibold text-foreground text-lg uppercase">Trevan Hetzel</h6>
                            <p className=" uppercase text-foreground/70">Founder@Hetzel Creative</p>
                        </div>

                        <div className=" w-[204px] h-[280px] relative md:-mt-28 z-20 bg-gray-200 rounded-2xl">
                            <Image fill src="/assets/client-3.png" alt="Zel" className="rounded-2xl object-cover object-top" quality={100} />
                        </div>
                        <p className=" md:max-w-lg text-foreground mt-6">“Denzel was really attentive to what i needed. He paid attention to little details and delivered extraordinarily. I would recommend him to anyone.”</p>
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default Testimonials;