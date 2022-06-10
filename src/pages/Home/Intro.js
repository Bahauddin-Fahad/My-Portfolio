import React from "react";

const Intro = () => {
  return (
    <div className="hero  bg-secondary hover:bg-secondary text-primary">
      <div className="hero-content grid grid-cols-1 lg:grid-cols-2 lg:gap-10">
        <div className="py-6">
          <h1 className="text-4xl font-bold uppercase">
            Hi! Its Bahauddin Fahad
          </h1>
          <p className="py-4 text-white ">
            Front-end Developer With Experience on HTML,CSS,JavaScript,MongoDB
          </p>

          <button className=" btn btn-glass text-primary font-bold ring-1 ring-primary">
            <a
              href="https://drive.google.com/uc?export=download&id=1HEb_J2V68qBr36U94SIjENyRTUAyA-kI"
              download
            >
              Download Resume
            </a>
          </button>
        </div>
        <div className="mx-auto rounded-lg mb-5 lg:mb-0">
          <div class="avatar">
            <div class="w-72 rounded-xl">
              <img src="https://i.ibb.co/60T1vhf/profile.jpg" alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Intro;
