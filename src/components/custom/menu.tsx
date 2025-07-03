import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState } from "react";

import { menuSlide } from "@/anim";
import { navItems } from "@/constants";
import Link from "next/link";
import { Button } from "../ui/button";
import Magnetic from "./magnetic";
import MenuLink from "./menu-link";
import Curve from "./curve";

interface SideMenuProps {
  setIsActive: (value: boolean) => void;
  setMobileNav: (value: boolean) => void;
}

const SideMenu = ({ setIsActive, setMobileNav }: SideMenuProps) => {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);


  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="menu"
    >
      <div className="flex flex-col container w-full h-full gap-20 px-5 z-[2147483000] mt-20 pt-8  pb-28  ">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="ml-0"
        >
          <span className=" text-lg opacity-40">Navigation</span>
          {navItems.map((data, index) => {
            return (
              <MenuLink
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
                setIsActive={setIsActive}
                setMobileNav={setMobileNav}
              />
            );
          })}
        </div>
        <div>
          <span className=" text-lg opacity-40">Social Links</span>
          <div className="flex flex-wrap md:flex-row items-center justify-between text-xl mt-4">
            <Magnetic>
              <Link href="https://instagram.com/imdenzel__" target="_blank" className=" text-white">
                <p>Instagram</p>
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="https://wa.me/233546153204" target="_blank" className=" text-white">
                <p>WhatsApp</p>
              </Link>
            </Magnetic>
            <Magnetic>
              <Link href="https://twitter.com/imdenzel__" target="_blank" className=" text-white">
                <p>Twitter (X)</p>
              </Link>
            </Magnetic>
          </div>


          <div className=" w-full mt-12">
            <Button
              variant="outline"
              className=" text-foreground w-full h-14"
            >

              admin@zeldesigns.com
            </Button>


          </div>
        </div>

      </div>
      <Curve />
    </motion.div>
  );
};

export default SideMenu;
