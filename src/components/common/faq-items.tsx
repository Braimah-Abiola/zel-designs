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
            className="w-full flex flex-col gap-2 md:gap-4"
            defaultValue="item-1"
        >
            <AccordionItem value="item-1">
                <AccordionTrigger>What do you need from me to get started?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        A brief overview of your business goals, target audience, timeline, and budget. Plus any existing brand materials you have. A quick discovery call helps me gather everything I need.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
                <AccordionTrigger>How long does a project usually take?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        1-2 weeks for website redesigns, 4-8 weeks for complex mobile apps. I break projects into phases with regular check-ins to keep everything on track.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger>What design tools do you use?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        Figma for all design work - wireframes, prototypes, and final designs. It makes collaboration and developer handoff seamless.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
                <AccordionTrigger>Do you offer revisions?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        Yes, I include 2-3 rounds of revisions per project phase. Additional revisions are available at an hourly rate.
                    </p>
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
                <AccordionTrigger>Can you help after the design is done?</AccordionTrigger>
                <AccordionContent className="flex flex-col gap-4 text-balance">
                    <p>
                        Yes! I offer developer handoff, design system maintenance, and ongoing optimization support as your product evolves.
                    </p>
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )
}

export default FaqItems