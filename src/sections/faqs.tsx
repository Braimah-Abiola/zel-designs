import FaqItems from "@/components/common/faq-items";
import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";

const Faqs = () => {
    return (
        <section className=" py-20">
            <Wrapper>
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between">
                    <span className=" text-lg font-medium">/FAQs</span>
                    <p>Your questions, answered — so you can move forward with confidence.</p>
                </div>
                <Separator orientation="horizontal" className=" mt-4 w-full" />

                <div className=" flex flex-col md:flex-row items-start gap-4 md:gap-16 mt-6">
                    <div className=" w-full h-full bg-white max-w-[26rem] rounded-xl relative p-4 md:p-8">
                        <div className="flex items-start justify-between">
                            <h4 className=" uppercase text-4xl md:text-6xl font-anton text-foreground">Still have questions?</h4>
                            <Button size="icon" className=" bg-foreground hover:bg-foreground text-white hover:text-white"><ArrowUpRight className=" size-6" /></Button>
                        </div>
                        <p className=" mt-2 md:mt-4">I’m here to help</p>
                    </div>
                    <div className=" w-full">
                        <FaqItems />
                    </div>
                </div>
            </Wrapper>
        </section>
    );
}

export default Faqs;