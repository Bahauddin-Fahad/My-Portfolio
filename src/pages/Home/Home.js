import React from "react";
import Services from "../Services/Services";
import ContactMe from "./ContactMe";
import Intro from "./Intro";

const Home = () => {
  return (
    <div>
      <Intro />
      <Services />
      <ContactMe />
    </div>
  );
};

export default Home;
