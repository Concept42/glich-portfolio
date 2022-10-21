import type { NextPage } from "next";
import Navigation from "../components/ui/Navigation";

const Home: NextPage = () => {
  return (
    <div className="container w-full h-full mx-auto max-w-full">
      <Navigation />
    </div>
  );
};

export default Home;
