import React from "react";
import "./About.css";
import {
  SiHtml5,
  SiCss3,
  SiBootstrap,
  SiTailwindcss,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiFirebase,
  SiMongodb,
  SiJsonwebtokens,
  SiGithub,
  SiNetlify,
  SiHeroku,
} from "react-icons/si";
import { RiReactjsLine } from "react-icons/ri";
import { MdOutlineEventNote } from "react-icons/md";
const About = () => {
  return (
    <div className="m-5 min-h-[calc(100vh-212px)] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-20 lg:gap-40 text-white">
      <div className="flex items-center">
        <div>
          <h4 className="font-bold text-3xl text-primary uppercase mb-4">
            Get to Know Me!
          </h4>
          <p className="mb-2">
            Hey! It's{" "}
            <strong className="text-primary">S.M. Bahauddin Fahad</strong> and
            I'm a{" "}
            <strong className="text-primary">Front-end Web Developer</strong>{" "}
            from Bangladesh. I'm doing BSc in Computer Science & Engineering
            From{" "}
            <strong className="text-primary">
              International Islamic University Chittagong
            </strong>
            . I am passionate about web development and want to grow my career
            in this sector.I want to use my knowledge about Web
            Development.Thats why I started my journey as a{" "}
            <strong className="text-primary">Front-end Developer</strong> and
            own interest in web development. I have also knowledge in{" "}
            <strong className="text-primary">MERN Stack Development</strong>.
          </p>
          <p className="mb-3">
            I have done several projects both in Front-end also in MERN Stack.If
            you want know more about me,Here my Resume is given below.
          </p>
          <button className=" btn btn-glass text-primary font-bold ring-1 ring-primary ">
            <a
              href="https://drive.google.com/uc?export=download&id=1HEb_J2V68qBr36U94SIjENyRTUAyA-kI"
              download
            >
              Download Resume
            </a>
          </button>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-3xl text-primary uppercase mb-4">
          My Skills So Far
        </h2>
        <div className="flex flex-wrap">
          <div className="skill glass shadow-md shadow-orange-600">
            {" "}
            <SiHtml5 className="text-orange-600 h-6 w-6 " />
            HTML5
          </div>
          <div className="skill glass shadow-md shadow-blue-500">
            <SiCss3 className="text-blue-500  h-6 w-6" /> CSS3
          </div>
          <div className="skill glass shadow-md shadow-violet-600">
            <SiBootstrap className="text-violet-600  h-6 w-6" />
            Bootstrap
          </div>
          <div className="skill glass shadow-md shadow-sky-300">
            {" "}
            <SiTailwindcss className="text-sky-300  h-6 w-6" /> TailwindCSS
          </div>
          <div className="skill glass shadow-md shadow-amber-400">
            {" "}
            <SiJavascript className="text-amber-400  h-6 w-6" /> JavaScript
          </div>
          <div className="skill glass shadow-md shadow-sky-500">
            {" "}
            <SiReact className="text-sky-500  h-6 w-6" />
            ReactJS
          </div>
          <div className="skill glass shadow-md shadow-error">
            <RiReactjsLine className="text-error h-7 w-7" /> React Query
          </div>
          <div className="skill glass shadow-md shadow-pink-500">
            <MdOutlineEventNote className="text-pink-500 h-6 w-6" />
            React Hook Form
          </div>
          <div className="skill glass shadow-md shadow-green-500">
            <SiNodedotjs className="text-green-500 h-6 w-6" /> NodeJS
          </div>
          <div className="skill glass shadow-md shadow-gray-300">
            <SiExpress className="text-gray-300 h-6 w-6" /> ExpressJS
          </div>
          <div className="skill glass shadow-md shadow-amber-500">
            {" "}
            <SiFirebase className="text-amber-500  h-6 w-6" />
            Firebase
          </div>
          <div className="skill glass shadow-md shadow-green-600">
            {" "}
            <SiMongodb className="text-green-600  h-6 w-6" />
            MongoDB
          </div>
          <div className="skill glass shadow-md shadow-black">
            {" "}
            <SiJsonwebtokens className="text-black  h-6 w-6" />
            JWT
          </div>

          <div className="skill glass shadow-md shadow-white">
            <SiGithub className="text-white h-6 w-6" /> GitHub
          </div>
          <div className="skill glass shadow-md shadow-sky-600">
            <SiNetlify className="text-sky-600 h-6 w-6" /> Netlify
          </div>
          <div className="skill glass shadow-md shadow-purple-500">
            <SiHeroku className="text-purple-700 h-6 w-6" />
            Heroku
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
