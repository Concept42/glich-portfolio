import React from "react";
import { useGlitch } from "react-powerglitch";

interface Props {
  children: string;
}

const GlichText = ({ children }: Props) => {
  const glich = useGlitch({
    playMode: "always",
    createContainers: true,
    hideOverflow: false,
    timing: {
      duration: 2850,
    },
    glitchTimeSpan: {
      start: 0.5,
      end: 0.7,
    },
    shake: {
      velocity: 15,
      amplitudeX: 0.2,
      amplitudeY: 0.2,
    },
    slice: {
      count: 6,
      velocity: 15,
      minHeight: 0.02,
      maxHeight: 0.15,
      hueRotate: true,
    },
  });
  return (
    <h1 className="text-[7vw] md:text-[68px] font-semibold" ref={glich.ref}>
      {children}
    </h1>
  );
};

export default GlichText;
