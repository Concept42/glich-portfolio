import { openHamburger, toggleOpen } from "../../Toolkit/themeSlice";
import { useAppDispatch, useAppSelector } from "./reduxHooks";

const useHamburger = () => {
  const dispatch = useAppDispatch();
  const open = useAppSelector(openHamburger);

  const handleOpen = () => {
    dispatch(toggleOpen());
  };

  return { open, handleOpen };
};

export default useHamburger;
