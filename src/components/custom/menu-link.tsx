import { scale, slide as rawSlide } from "@/anim";
import { motion, Variants } from "framer-motion";
import AnimatedNavLink from "./animated-nav-link";

// Fix slide variant to use a valid 'ease' value
const slide: Variants = {
  initial: rawSlide.initial,
  enter: (i: number) => ({
    ...rawSlide.enter(i),
    transition: {
      ...rawSlide.enter(i).transition,
      ease: "easeInOut", // or another valid string/function
    },
  }),
  exit: (i: number) => ({
    ...rawSlide.exit(i),
    transition: {
      ...rawSlide.exit(i).transition,
      ease: "easeInOut", // or another valid string/function
    },
  }),
};

interface MenuLinkProps {
  data: {
    title: string;
    href: string;
    index: number;
  };
  isActive: boolean;
  setSelectedIndicator: (href: string) => void;
  setIsActive: (value: boolean) => void;
  setMobileNav: (value: boolean) => void;
}

const MenuLink = ({
  data,
  isActive,
  setSelectedIndicator,
  setIsActive,
  setMobileNav,
}: MenuLinkProps) => {
  const { title, href, index } = data;

  return (
    <motion.div
      className=" flex flex-col gap-8 items-start"
      onMouseEnter={() => {
        setSelectedIndicator(href);
      }}
      custom={index}
      variants={slide}
      initial="initial"
      animate="enter"
      exit="exit"
    >
      <motion.div
        variants={scale}
        animate={isActive ? "open" : "closed"}
      ></motion.div>
      <AnimatedNavLink
        setIsActive={setIsActive}
        setMobileNav={setMobileNav}
        isActive={isActive}
        link={href}
        text={title}
      />
    </motion.div>
  );
};

export default MenuLink;
