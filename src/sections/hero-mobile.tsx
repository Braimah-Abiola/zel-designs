import FullWidthText from "@/components/custom/full-width-text";

const HeroMobile = () => {
    return (
        <section className=" min-h-[80vh] flex flex-col px-4 justify-between w-full pt-28">
            <div>
                <div className="flex w-full items-center justify-between">
                    <span className=" font-medium text-base">A</span>
                    <span className=" font-medium text-base">VERY</span>
                    <span className=" font-medium text-base">RARE</span>
                </div>
                <video
                    loop
                    autoPlay
                    muted
                    className=" mt-4 w-full aspect-video object-cover rounded-xl">
                    <source src="/assets/showcase.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
            </div>

            <div className=" flex flex-col -space-y-10">
                <FullWidthText text="Creative" />
                <FullWidthText text="Designer" />
            </div>
        </section>
    );
}

export default HeroMobile;