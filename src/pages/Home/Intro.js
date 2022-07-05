import React from "react";

const Intro = () => {
  return (
    <div className="hero bg-secondary hover:bg-secondary text-primary mt-5">
      <div className="hero-content grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
        <div className="py-6 flex flex-col items-center lg:items-start">
          <h1 className="text-4xl font-bold uppercase">
            Hi! Its Bahauddin Fahad
          </h1>
          <p className="py-4 text-white ">
            I am a Front-end Developer With the Experience on
            HTML,CSS,JavaScript.I have knowledge about back end technologies
            like Node JS,Express JS and MongoDB. <br /> I work on MERN
            Full-Stack Projects with MongoDB,Express JS, Node JS and React JS.
          </p>

          <button className=" btn btn-glass text-primary font-bold ring-1 ring-primary ">
            <a
              href="https://drive.google.com/uc?export=download&id=1HEb_J2V68qBr36U94SIjENyRTUAyA-kI"
              download
            >
              Download Resume
            </a>
          </button>
        </div>
        <div className="mx-auto rounded-xl mb-5 lg:mb-0 ">
          <div className="avatar">
            <div className="w-full max-w-xs rounded-xl shadow-slate-600 shadow-lg">
              <img src="https://i.ibb.co/Ypn7m17/portfolio-img.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
