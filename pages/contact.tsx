import type { NextPage } from "next";
import React from "react";
import PageWrapper from "../components/layout/PageWrapper";
import GlichText from "../components/ui/GlichText";
import Link from "next/link";
import useHamburger from "../library/hooks/useHamburger";

const Contact: NextPage = () => {
  const { open } = useHamburger();

  return (
    <PageWrapper>
      {!open ? (
        <section className="flex flex-col w-full h-full justify-center items-center">
          <GlichText>CONTACT</GlichText>
          <span>
            <span className="flex gap-2 text-primary-text text-sm font-light">
              <Link href="/">
                <h3 className=" cursor-pointer  hover:text-secondary-orange">
                  Home
                </h3>
              </Link>
              /<h3>Contact</h3>
            </span>
          </span>
        </section>
      ) : (
        ""
      )}
    </PageWrapper>
  );
};

export default Contact;
