import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import Project from "./Project";

const Projects = () => {
  const { data: projects } = useQuery("projects", () =>
    axios.get("projects.json").then((data) => {
      return data.data;
    })
  );
  // console.log(projects);
  return (
    <div className="my-24">
      <h2 className="font-bold text-primary text-4xl text-center">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mt-5 mx-14">
        {projects?.map((project) => (
          <Project key={project._id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
