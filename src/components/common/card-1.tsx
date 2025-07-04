import Image from "next/image";

const CardOne = () => {
    return (
        <div className=" w-full md:w-[290px] h-[312px] rounded-2xl md:absolute bg-gradient-to-b from-[#CF7244] to-[#693A22] flex flex-col px-6 py-6">
            <div className=" w-full flex items-center justify-center">
                <Image width={160} height={160} src="/assets/card-1.png" alt="Card one" />
            </div>
            <h6 className=" font-anton text-4xl text-white">+40%</h6>
            <p className=" text-lg text-white leading-5 mt-2">From clicks <br /> to customers</p>
        </div>
    );
}

export default CardOne;