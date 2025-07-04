import Image from "next/image";

const CardFour = () => {
    return (
        <div className=" w-full md:w-[290px] h-[312px] rounded-2xl md:absolute bg-[#56D964] flex flex-col px-6 py-6">

            <h6 className=" font-anton text-4xl text-[#1F1F1F]">20</h6>
            <p className=" text-lg text-[#1F1F1F] leading-5 mt-2">Products <br />Launched</p>

            <div className=" w-full flex items-center justify-end">
                <Image width={160} height={160} src="/assets/card-4.png" alt="Card one" />
            </div>
        </div>
    );
}

export default CardFour;