interface AppLayoutProps {
  children?: React.ReactNode;
}

export const AppLaylout = ({ children }: AppLayoutProps) => {
  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen bg-primary-orange fixed ">
        <div className="w-[97vw] h-[94vh] bg-white">{children}</div>
      </div>
    </>
  );
};
