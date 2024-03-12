import React from "react";
import HeroSection from "./components/HeroSection";
import { useProductContext } from "./context/productcontex";

const About = () => {
  const { myName } = useProductContext();
  const data = {
    name: "TILE-IT"
  };

  return (
     <>
      {myName}
     <HeroSection myData={data} />;
     <div>
      
     </div>
     </>
     
     
  );
};

export default About;