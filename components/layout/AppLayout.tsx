import type { Children } from "../../library/types";
import Navigation from "../ui/Navigation";
import useHamburger from "../../library/hooks/useHamburger";
import SocialIcons from "../ui/SocialIcons";

export const AppLaylout = ({ children }: Children) => {
  const { open, handleOpen } = useHamburger();

  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen bg-primary-orange">
        <Navigation open={open} handleOpen={handleOpen} />

        <div className="w-display h-display bg-white">{children}</div>
        <SocialIcons />
      </div>
    </>
  );
};
