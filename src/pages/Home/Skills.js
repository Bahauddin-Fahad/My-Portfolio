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
      <div className="flex mx-5">
        <div className="flex flex-col w-2/3 justify-center">
          <h2 className="text-white">
            <span className="text-primary font-bold"> Front-end :</span>{" "}
            HTM5,CSS3,JavaScript,ES6,React, React Router,React Bootstrap,React
            Tailwind,JWT.{" "}
          </h2>
          <h2 className="text-white">
            <span className="text-primary font-bold">Back-end :</span> Node
            Js,Firebase Authentication,MongoDB,Stripe.
          </h2>
          <h2 className="text-white">
            <span className="text-primary font-bold">Tools :</span> GitHub,VS
            Code,Chrome Dev Tools,Netlify,Heroku,Firebase.
          </h2>
        </div>
        <div className="grid grid-cols-1 gap-1 w-1/2">
          <div className="flex justify-between gap-2 items-center mx-auto w-1/2">
            <SiHtml5 className="text-primary h-6 w-6 " />

            <progress
              class="progress progress-warning mx-auto"
              value="80"
              max="100"
            ></progress>
          </div>

          <div className="flex justify-between gap-2 items-center mx-auto w-1/2">
            <SiCss3 className="text-primary  h-6 w-6" />

            <progress
              class="progress progress-warning mx-auto"
              value="90"
              max="100"
            ></progress>
          </div>
          <div className="flex gap-2 items-center mx-auto w-1/2">
            <SiBootstrap className="text-primary  h-6 w-6" />
            <progress
              class="progress progress-warning mx-auto"
              value="85"
              max="100"
            ></progress>
          </div>
          <div className="flex gap-2 items-center mx-auto w-1/2">
            <SiTailwindcss className="text-primary  h-6 w-6" />
            <progress
              class="progress progress-warning mx-auto"
              value="90"
              max="100"
            ></progress>
          </div>
          <div className="flex gap-2 items-center mx-auto w-1/2">
            <SiJavascript className="text-primary  h-6 w-6" />
            <progress
              class="progress progress-warning mx-auto"
              value="87"
              max="100"
            ></progress>
          </div>
          <div className="flex gap-2 items-center mx-auto w-1/2">
            <SiReact className="text-primary  h-6 w-6" />
            <progress
              class="progress progress-warning mx-auto"
              value="90"
              max="100"
            ></progress>
          </div>
          <div className="flex gap-2 items-center mx-auto w-1/2">
            <SiFirebase className="text-primary  h-6 w-6" />
            <progress
              class="progress progress-warning mx-auto"
              value="80"
              max="100"
            ></progress>
          </div>
          <div className="flex gap-2 items-center mx-auto w-1/2">
            <SiMongodb className="text-primary  h-6 w-6" />
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
