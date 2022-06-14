import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { useParams } from "react-router-dom";
import Loading from "../Shared/Loading";

const ProjectInfo = () => {
  const { projectId } = useParams();

  const { data: projects, isLoading } = useQuery("projects", () =>
    axios.get("projects.json").then((data) => {
      return data.data;
    })
  );
  if (isLoading) {
    <Loading />;
  }
  const project = projects?.find(
    (project) => project?._id === parseInt(projectId)
  );

  return (
    <div className=" glass bg-secondary pt-10">
      <h2 className="text-3xl font-bold text-white text-center">
        Project Details of {project?.name}
      </h2>
      <div className="hero">
        <div className="hero-content flex flex-col gap-10">
          <div className="grid grid-cols-3 gap-8">
            <img
              src={project?.img1}
              className="max-w-xs rounded-lg shadow-md shadow-white mx-auto"
              alt=""
            />
            <img
              src={project?.img2}
              className="max-w-xs rounded-lg shadow-md shadow-white mx-auto"
              alt=""
            />
            <img
              src={project?.img3}
              className="max-w-xs rounded-lg shadow-md shadow-white mx-auto"
              alt=""
            />
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white text-center">
              {project?.name}
            </h1>
            <p className="py-6 text-white">{project?.fullDescription}</p>
            <div className="w-7/12 flex flex-wrap gap-6 mx-auto justify-center">
              <button className="btn btn-primary font-bold">
                <a href={project?.liveSite}>Live Website</a>{" "}
              </button>
              <button className="btn btn-primary font-bold">
                <a href={project?.gitHubClient}>GitHub Client </a>{" "}
              </button>
              {project?.gitHubServer && (
                <button className="btn btn-primary font-bold">
                  <a href={project?.gitHubServer}>Github Server</a>
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectInfo;
