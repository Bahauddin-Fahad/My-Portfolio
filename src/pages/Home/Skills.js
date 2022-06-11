import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";
const Skills = () => {
  return (
    <div>
      <h2 className="text-primary text-4xl font-bold text-center my-8">
        My Skills
      </h2>
      <div className="bg-secondary flex flex-col lg:flex-row justify-center items-center w-3/6 mx-auto gap-8 p-4 rounded-lg shadow-md shadow-yellow-500">
        <div className="flex flex-col">
          <h2 className="text-white">
            <span className="text-primary font-bold "> Front-end :</span>{" "}
            HTM5,CSS3,JavaScript,ES6,React, React Router,React Bootstrap,React
            Tailwind,JWT.{" "}
          </h2>
          <h2 className="text-white">
            <span className="text-primary font-bold">Back-end :</span> Node
            Js,Firebase,MongoDB,Stripe.
          </h2>
        </div>
        <div className="flex flex-col w-3/4">
          <div className="flex justify-between gap-2 items-center ">
            <SiHtml5 className="text-orange-600 h-6 w-6 " />

            <progress
              class="progress progress-primary mx-auto"
              value="80"
              max="100"
            ></progress>
          </div>

          <div className="flex justify-between gap-2 items-center">
            <SiCss3 className="text-blue-500  h-6 w-6" />

            <progress
              class="progress progress-warning mx-auto"
              value="90"
              max="100"
            ></progress>
          </div>
          <div className="flex gap-2 items-center">
            <SiBootstrap className="text-violet-600  h-6 w-6" />
            <progress
              class="progress progress-warning mx-auto"
              value="85"
              max="100"
            ></progress>
          </div>
          <div className="flex gap-2 items-center">
            <SiTailwindcss className="text-sky-300  h-6 w-6" />
            <progress
              class="progress progress-warning mx-auto"
              value="90"
              max="100"
            ></progress>
          </div>
          <div className="flex gap-2 items-center">
            <SiJavascript className="text-primary  h-6 w-6" />
            <progress
              class="progress progress-warning mx-auto"
              value="87"
              max="100"
            ></progress>
          </div>
          <div className="flex gap-2 items-center">
            <SiReact className="text-sky-500  h-6 w-6" />
            <progress
              class="progress progress-warning mx-auto"
              value="90"
              max="100"
            ></progress>
          </div>
          <div className="flex gap-2 items-center">
            <SiFirebase className="text-amber-500  h-6 w-6" />
            <progress
              class="progress progress-warning mx-auto"
              value="80"
              max="100"
            ></progress>
          </div>
          <div className="flex gap-2 items-center">
            <SiMongodb className="text-green-600  h-6 w-6" />
            <progress
              class="progress progress-warning mx-auto"
              value="85"
              max="100"
            ></progress>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
