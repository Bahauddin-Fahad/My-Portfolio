import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiFirebase,
  SiMongodb,
  // SiJsonwebtokens,
} from "react-icons/si";
const Skills = () => {
  return (
    <div>
      <h2 className="text-primary text-4xl font-bold text-center my-8">
        My Skills
      </h2>
      <div className="flex justify-center items-center">
        <div className="bg-secondary flex flex-col lg:flex-row justify-center items-center w-full max-w-xs md:max-w-md lg:max-w-xl mx-6 md:m-0 lg:m-0 gap-8 px-0 lg:px-4 py-4 rounded-lg shadow-md shadow-primary">
          <div className="flex flex-col items-start w-11/12">
            <h2 className="text-white">
              <span className="text-primary font-bold "> Front-end :</span>{" "}
              HTM5,CSS3,JavaScript,ES6,React, React Router,React Bootstrap,React
              Tailwind CSS.
            </h2>
            <h2 className="text-white">
              <span className="text-primary font-bold">Back-end :</span> Node
              Js,Express JS,Firebase,MongoDB.
            </h2>
            <h2 className="text-white">
              <span className="text-primary font-bold">Comfortable :</span>{" "}
              JWT,Stripe.
            </h2>
            <h2 className="text-white">
              <span className="text-primary font-bold">Tools :</span> GitHub,VS
              Code,Netlify,Heroku.
            </h2>
          </div>
          <div className="flex flex-col gap-y-1 w-11/12">
            <div className="flex justify-between gap-2 items-center ">
              <SiHtml5 className="text-orange-600 h-6 w-6 " />
              <progress
                className="progress progress-primary mx-auto"
                value="85"
                max="100"
              ></progress>
              <small className="text-primary font-bold">85%</small>
            </div>

            <div className="flex justify-between gap-2 items-center">
              <SiCss3 className="text-blue-500  h-6 w-6" />
              <progress
                className="progress progress-primary mx-auto"
                value="90"
                max="100"
              ></progress>
              <small className="text-primary font-bold">90%</small>
            </div>
            <div className="flex gap-2 items-center">
              <SiBootstrap className="text-violet-600  h-6 w-6" />
              <progress
                className="progress progress-primary mx-auto"
                value="85"
                max="100"
              ></progress>
              <small className="text-primary font-bold">85%</small>
            </div>
            <div className="flex gap-2 items-center">
              <SiTailwindcss className="text-sky-300  h-6 w-6" />
              <progress
                className="progress progress-primary mx-auto"
                value="90"
                max="100"
              ></progress>
              <small className="text-primary font-bold">90%</small>
            </div>
            <div className="flex gap-2 items-center">
              <SiJavascript className="text-amber-400  h-6 w-6" />
              <progress
                className="progress progress-primary mx-auto"
                value="87"
                max="100"
              ></progress>
              <small className="text-primary font-bold">87%</small>
            </div>
            <div className="flex gap-2 items-center">
              <SiReact className="text-sky-500  h-6 w-6" />
              <progress
                className="progress progress-primary mx-auto"
                value="90"
                max="100"
              ></progress>
              <small className="text-primary font-bold">90%</small>
            </div>
            <div className="flex gap-2 items-center">
              <SiNodedotjs className="text-green-500 h-6 w-6" />
              <progress
                className="progress progress-primary mx-auto"
                value="86"
                max="100"
              ></progress>
              <small className="text-primary font-bold">86%</small>
            </div>
            <div className="flex gap-2 items-center">
              <SiFirebase className="text-amber-500  h-6 w-6" />
              <progress
                className="progress progress-primary mx-auto"
                value="80"
                max="100"
              ></progress>
              <small className="text-primary font-bold">80%</small>
            </div>
            <div className="flex gap-2 items-center">
              <SiMongodb className="text-green-600  h-6 w-6" />
              <progress
                className="progress progress-primary mx-auto"
                value="88"
                max="100"
              ></progress>
              <small className="text-primary font-bold">88%</small>
            </div>
            {/* <div className="flex gap-2 items-center">
            <SiJsonwebtokens className="text-white  h-6 w-6" />
            <progress
              className="progress progress-primary mx-auto"
              value="80"
              max="100"
            ></progress>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
