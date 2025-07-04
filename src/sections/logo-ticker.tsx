"use client";

import { companyLogo } from "@/constants";
import Image from "next/image";
import Marquee from "react-fast-marquee";

const LogoTicker = () => {
  return (
    <section className=" max-w-[90rem]">
      <div className="flex items-center gap-5">
        <div className=" flex-1 md:flex-none">
          <h2 className=" text-foreground text-base">
            <span>
              <Image
                width={40}
                height={40}
                src="/assets/loved.svg"
                alt="Loved"
                className=" object-cover inline-block mr-2"
                quality={100}
              />
            </span>
            Loved by these clients - All across the globe
          </h2>
        </div>
        <div className="flex flex-1 overflow-hidden [mask-image:linear-gradient(to_right,transparent,background_20%,background_80%,transparent)]">
          <Marquee direction="right" autoFill speed={40} pauseOnHover>
            {companyLogo.map((logo, idx) => (
              <div
                className=" bg-white rounded-lg mr-2 w-[200px] scale-95 h-[80px] flex items-center justify-center"
                key={idx} >
                <Image
                  width={170}
                  height={1}
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  src={`/assets/company/${logo}`}
                  alt="Company logo"
                  className={`object-contain filter brightness-100 invert ${idx === 0
                    ? "scale-[0.65] md:scale-[0.80]"
                    : idx === 1
                      ? "scale-[0.65] md:scale-[0.72]"
                      : idx === 2
                        ? "scale-[0.75] md:scale-[0.85]"
                        : idx === 3
                          ? "scale-[0.85] md:scale-[1]"
                          : idx === 4
                            ? "scale-[0.52] md:scale-[0.62]"
                            : idx === 5
                              ? "scale-[0.55] md:scale-[0.65]"
                              : idx === 6
                                ? "scale-[0.65] md:scale-[0.75]"
                                : idx === 7
                                  ? "scale-[1] md:scale-[1]"
                                  : "scale-75 md:scale-75"
                    }`}
                />
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
};

export default LogoTicker;
