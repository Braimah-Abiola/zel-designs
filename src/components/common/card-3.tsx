import Image from "next/image";

const CardThree = () => {
    return (
        <div className=" w-full md:w-[290px] h-[312px] rounded-2xl md:absolute bg-[#FD8200] flex flex-col px-6 py-6">

            <h6 className=" font-anton text-4xl text-[#370606]">3X</h6>
            <p className=" text-lg text-[#370606] leading-5 mt-2">Higher <br /> Conversions</p>

            <div className=" w-full flex items-center justify-end">
                <Image width={160} height={160} src="/assets/card-3.png" alt="Card one" />
            </div>
        </div>
    );
}

export default CardThree;