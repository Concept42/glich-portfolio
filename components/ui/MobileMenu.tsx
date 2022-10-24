import Link from "next/link";
import React from "react";
import { navItems } from "../../library/data";
import { useAppDispatch } from "../../library/hooks/reduxHooks";
import { toggleOpen } from "../../Toolkit/themeSlice";

const MobileMenu = () => {
  const dispatch = useAppDispatch();

  return (
    <div className="md:hidden flex items-start justify-center  w-[calc(100vw-50px)] mx-auto h-full bg-white mt-10 ">
      <ul className="flex flex-col gap-10 justify-center items-center">
        {navItems.map((item, index) => {
          return (
            <Link key={index} href={item.path}>
              <li
                onClick={() => dispatch(toggleOpen())}
                className="cursor-pointer text-primary-text text-sm font-light hover:text-secondary-orange"
              >
                {item.name}
              </li>
            </Link>
          );
        })}
      </ul>
    </div>
  );
};

export default MobileMenu;
