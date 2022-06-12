import React from "react";
import { useParams } from "react-router-dom";

const ProjectInfo = () => {
  const { projectId } = useParams();
  console.log(projectId);
  return (
    <div>
      <h2>{projectId}</h2>
    </div>
  );
};

export default ProjectInfo;
