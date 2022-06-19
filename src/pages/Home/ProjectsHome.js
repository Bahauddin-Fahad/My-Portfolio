import axios from "axios";
import React, { useEffect, useState } from "react";
import Project from "../Projects/Project";
const ProjectsHome = () => {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    axios.get("projects.json").then((data) => setProjects(data.data));
  }, []);
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

export default ProjectsHome;
