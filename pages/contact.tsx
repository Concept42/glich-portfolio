import type { NextPage } from "next";
import React from "react";
import PageWrapper from "../components/layout/PageWrapper";
import GlichText from "../components/ui/GlichText";
import Link from "next/link";
import useHamburger from "../library/hooks/useHamburger";
import { BsFillMouse2Fill } from "react-icons/bs";

const Contact: NextPage = () => {
  const { open } = useHamburger();

  return (
    <PageWrapper>
      {!open ? (
        <div className="w-display h-display">
          <section className="flex flex-col w-display h-display justify-center items-center">
            <GlichText>CONTACT</GlichText>
            <span className="flex gap-2 text-primary-text text-sm font-light">
              <Link href="/">
                <h3 className=" cursor-pointer  hover:text-secondary-orange">
                  Home
                </h3>
              </Link>
              /<h3>Contact</h3>
            </span>
            <div className="absolute bottom-36 animate-bounce cursor-pointer text-primary-orange">
              <BsFillMouse2Fill size={25} />
            </div>
          </section>
          <section>
            <h2>CONTACTS INFO</h2>
          </section>
        </div>
      ) : (
        ""
      )}
    </PageWrapper>
  );
};

export default Contact;
