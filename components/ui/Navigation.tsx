import { navItems } from "../../library/data";
import Link from "next/link";
import BasicButton from "./BasicButton";
import Hamburger from "./Hamburger";
import MobileMenu from "./MobileMenu";

interface Props {
  open: boolean;
  handleOpen: () => void;
}

const Navigation = ({ open, handleOpen }: Props) => {
  return (
    <div className="fixed top-10 w-full z-50 ">
      <div className="flex justify-between items-center gap-10 px-28 py-10">
        <h3>Zoran Latković</h3>
        <ul className="hidden md:flex gap-10 ">
          {navItems.map((item, index) => {
            return (
              <Link key={index} href={item.path}>
                <li className="cursor-pointer text-primary-text text-sm font-light hover:text-secondary-orange">
                  {item.name}
                </li>
              </Link>
            );
          })}
        </ul>
        <div className="hidden md:flex">
          <BasicButton>My Work</BasicButton>
        </div>
        <div onClick={handleOpen} className="md:hidden">
          <Hamburger isOpen={open} />
        </div>
      </div>
      <div>{open ? <MobileMenu /> : ""}</div>
    </div>
  );
};

export default Navigation;
