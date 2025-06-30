import FaqItems from "@/components/common/faq-items";
import Wrapper from "@/components/common/wrapper";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { ArrowUpRight } from "lucide-react";

const Faqs = () => {
    return (
        <section className=" py-20">
            <Wrapper>
                <div className="flex items-center justify-between">
                    <span className=" text-lg font-medium">/FAQs</span>
                    <p>Your questions, answered — so you can move forward with confidence.</p>
                </div>
                <Separator orientation="horizontal" className=" mt-4 w-full" />

                <div className=" flex items-start gap-16 mt-6">
                    <div className=" w-full h-full bg-white max-w-[26rem] rounded-xl relative p-8">
                        <div className="flex items-start justify-between">
                            <h4 className=" uppercase text-6xl font-anton text-foreground">Still have questions?</h4>
                            <Button size="icon" className=" bg-foreground hover:bg-foreground text-white hover:text-foreground"><ArrowUpRight className=" size-6" /></Button>
                        </div>
                        <p className=" mt-4">I’m here to help</p>
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