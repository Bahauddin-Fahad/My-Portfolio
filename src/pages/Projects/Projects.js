import React from "react";
import JHC from "../../projects/Output of A12.png";
import CEA from "../../projects/Output of A10.png";
import BCC from "../../projects/Output of A3.png";
const Projects = () => {
  return (
    <div className="my-24">
      <h2 className="font-bold text-primary text-4xl text-center">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 mx-14">
        <div className="card glass hover:bg-secondary mx-auto bg-secondary text-white">
          <div className="rounded-xl glass mx-auto mt-3 w-2/3">
            <figure>
              <img src={JHC} alt="projects" className="rounded-md" />
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
              <div className="flex gap-2 w-full">
                <button className="btn-sm btn-primary rounded-sm font-bold h-10 w-2/3">
                  Live Website
                </button>
                <button className="btn-sm btn-primary rounded-sm font-bold h-10 w-2/3">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card glass hover:bg-secondary mx-auto bg-secondary text-white">
          <div className="rounded-xl glass mx-auto mt-3 w-2/3">
            <figure>
              <img src={CEA} alt="projects" className=" rounded-md" />
            </figure>
          </div>
          <div className="card-body">
            <h2 className="card-title mx-auto">Create-Eve Art</h2>

            <div className="card-actions  justify-around items-center text-justify mt-1">
              <small>
                This is a react application of a independent photographer where
                users can login and book the photographer schedule.
              </small>
              <div className="flex gap-2 w-full">
                <button className="btn-sm btn-primary rounded-sm font-bold h-10 w-2/3">
                  Live Website
                </button>
                <button className="btn-sm btn-primary rounded-sm font-bold h-10 w-2/3">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="card glass hover:bg-secondary mx-auto bg-secondary text-white">
          <div className="rounded-xl glass mx-auto mt-3 w-2/3">
            <figure>
              <img src={BCC} alt="projects" className="rounded-md" />
            </figure>
          </div>
          <div className="card-body">
            <h2 className="card-title mx-auto">Bastrop Convention Center</h2>
            <div className="card-actions  justify-around items-center text-justify mt-1">
              <small>
                This is a react application where users can see the packages and
                book the convention center for their occation.
              </small>
              <div className="flex gap-2 w-full">
                <button className="btn-sm btn-primary rounded-sm font-bold h-10 w-2/3">
                  Live Website
                </button>
                <button className="btn-sm btn-primary rounded-sm font-bold h-10 w-2/3">
                  Explore More
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
