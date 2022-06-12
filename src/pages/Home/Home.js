import React from "react";
import ContactMe from "./ContactMe";
import Intro from "./Intro";
import ProjectsHome from "./ProjectsHome";
import Skills from "./Skills";

const Home = () => {
  return (
    <div>
      <Intro />
      <Skills />
      <ProjectsHome />
      <ContactMe />
    </div>
  );
};

export default Home;
