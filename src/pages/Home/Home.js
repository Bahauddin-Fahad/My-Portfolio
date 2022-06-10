import React from "react";
import Services from "../Services/Services";
import ContactMe from "./ContactMe";
import Intro from "./Intro";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <Intro />
      <Skills />
      <Services />
      <ContactMe />
    </div>
  );
};

export default Home;
