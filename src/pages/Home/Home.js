import React from "react";
import Projects from "../Projects/Projects";
import ContactMe from "./ContactMe";
import Intro from "./Intro";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <Intro />
      <Skills />
      <Projects />
      <ContactMe />
    </div>
  );
};

export default Home;
