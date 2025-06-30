import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

const FaqItems = () => {
    return (
        <Accordion
            type="single"
            collapsible
            className="w-full flex flex-col gap-4"
            defaultValue="item-1"
        >
            <AccordionItem value="item-1">
                <AccordionTrigger>What do you need from me to get started?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        Our flagship product combines cutting-edge technology with sleek
                        design. Built with premium materials, it offers unparalleled
                        performance and reliability.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>How long does a project usually take?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        We offer worldwide shipping through trusted courier partners.
                        Standard delivery takes 3-5 business days, while express shipping
                        ensures delivery within 1-2 business days.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>What design tools do you use?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        We stand behind our products with a comprehensive 30-day return
                        policy. If you&apos;re not completely satisfied, simply return the
                        item in its original condition.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>Do you offer revisions?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        We stand behind our products with a comprehensive 30-day return
                        policy. If you&apos;re not completely satisfied, simply return the
                        item in its original condition.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger>Can you help after the design is done?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        We stand behind our products with a comprehensive 30-day return
                        policy. If you&apos;re not completely satisfied, simply return the
                        item in its original condition.
                    </p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default FaqItems;