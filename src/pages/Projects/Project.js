import React from "react";
import { useNavigate } from "react-router-dom";

const Project = ({ project }) => {
  const { _id, name, img1, shortDescription, liveSite } = project;
  const navigate = useNavigate();
  return (
    <div className="card glass hover:bg-secondary mx-auto bg-secondary text-white">
      <div className="rounded-xl glass mx-auto mt-3 w-2/3">
        <figure>
          <img src={img1} alt="projects" className="rounded-md" />
        </figure>
      </div>
      <div className="card-body">
        <h2 className="card-title mx-auto">{name}</h2>
        <div className="card-actions  justify-around items-center text-justify mt-1">
          <small>{shortDescription}</small>
          <div className="flex gap-2 w-full">
            <button className="btn-sm btn-primary rounded-md font-bold h-10 w-2/3">
              <a href={liveSite} target="_blank" rel="noreferrer">
                Live Website
              </a>
            </button>
            <button
              className="btn-sm btn-primary rounded-md font-bold h-10 w-2/3"
              onClick={() => navigate(`/project/${_id}`)}
            >
              Explore More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;
