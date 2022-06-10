import React from "react";
import JHC from "../../projects/Output of A12.png";
import CEA from "../../projects/Output of A10.png";
import BCC from "../../projects/Output of A3.png";
const Services = () => {
  return (
    <div className="m-10">
      <h2 className="font-bold text-primary text-4xl text-center">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-0 mt-5 pb-5">
        <div className="card glass hover:bg-secondary mx-auto bg-secondary text-white w-80">
          <div className="rounded-xl glass mx-auto mt-3">
            <figure>
              <img src={JHC} alt="projects" className="w-60 rounded-md" />
            </figure>
          </div>
          <div className="card-body">
            <h2 className="card-title mx-auto">Jack Hammer Corporation</h2>
            <div className="card-actions  justify-around items-center text-justify mt-1">
              <small>
                This is full stack application where users can login and buy
                different kinds of tools. After ordering,users can see their
                order list.
              </small>
              <button className="btn-sm btn-primary rounded-sm font-bold w-full">
                Live Website
              </button>
              <button className="btn-sm btn-primary rounded-sm font-bold w-full">
                Github
              </button>
            </div>
          </div>
        </div>
        <div className="card glass hover:bg-secondary mx-auto bg-secondary text-white w-80">
          <div className="rounded-xl glass mx-auto mt-3">
            <figure>
              <img src={CEA} alt="projects" className="w-60 rounded-md" />
            </figure>
          </div>
          <div className="card-body">
            <h2 className="card-title mx-auto">Create-Eve Art</h2>

            <div className="card-actions  justify-around items-center text-justify mt-1">
              <small>
                This is full stack application of a independent photographer
                where users can login and book the photographer schedule.
              </small>
              <button className="btn-sm btn-primary rounded-sm font-bold w-full">
                Live Website
              </button>
              <button className="btn-sm btn-primary rounded-sm font-bold w-full">
                Github
              </button>
            </div>
          </div>
        </div>
        <div className="card glass hover:bg-secondary mx-auto bg-secondary text-white w-80">
          <div className="rounded-xl glass mx-auto mt-3">
            <figure>
              <img src={BCC} alt="projects" className="w-60 rounded-md" />
            </figure>
          </div>
          <div className="card-body">
            <h2 className="card-title mx-auto">Bastrop Convention Center</h2>
            <div className="card-actions  justify-around items-center text-justify mt-1">
              <small>
                This is full stack application where users can see the packages
                and book the convention center for their occation.
              </small>
              <button className="btn-sm btn-primary rounded-sm font-bold w-full">
                Live Website
              </button>
              <button className="btn-sm btn-primary rounded-sm font-bold w-full">
                Github
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
