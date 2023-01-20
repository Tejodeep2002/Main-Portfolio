import React from "react";
import "./Projects.css";
import project from "../../images/Projects/sidebar.png";
import Atom from "../../images/Projects/atom.png";

import ProjectSlider1 from "../ProjectSlider1/ProjectSlider1";
import ProjectSlider2 from "../ProjectSlider2/ProjectSlider2";

const Projects = () => {
  const projects = [
    {
      name: "Project1",
      desc: "dadadadadad",
      image: project,
      github:
        "https://github.com/Tejodeep2002/Circular-Progress-Bar-with-pause-button",
      website:
        "https://tejodeep2002.github.io/Circular-Progress-Bar-with-pause-button/",
    },
    {
      name: "Project2",
      desc: "dadadadadad",
      image: project,
      github:
        "https://github.com/Tejodeep2002/Circular-Progress-Bar-with-pause-button",
      website:
        "https://tejodeep2002.github.io/Circular-Progress-Bar-with-pause-button/",
    },
    {
      name: "Project3",
      desc: "dadadadadad",
      image: project,
      github:
        "https://github.com/Tejodeep2002/Circular-Progress-Bar-with-pause-button",
      website:
        "https://tejodeep2002.github.io/Circular-Progress-Bar-with-pause-button/",
    },
    {
      name: "Project4",
      desc: "dadadadadad",
      image: project,
      github:
        "https://github.com/Tejodeep2002/Circular-Progress-Bar-with-pause-button",
      website:
        "https://tejodeep2002.github.io/Circular-Progress-Bar-with-pause-button/",
    },
    {
      name: "Project5",
      desc: "dadadadadad",
      image: project,
      github:
        "https://github.com/Tejodeep2002/Circular-Progress-Bar-with-pause-button",
      website:
        "https://tejodeep2002.github.io/Circular-Progress-Bar-with-pause-button/",
    },
    {
      name: "Project6",
      desc: "dadadadadad",
      image: project,
      github:
        "https://github.com/Tejodeep2002/Circular-Progress-Bar-with-pause-button",
      website:
        "https://tejodeep2002.github.io/Circular-Progress-Bar-with-pause-button/",
    },
    {
      name: "Project7",
      desc: "dadadadadad",
      image: project,
      github:
        "https://github.com/Tejodeep2002/Circular-Progress-Bar-with-pause-button",
      website:
        "https://tejodeep2002.github.io/Circular-Progress-Bar-with-pause-button/",
    },
    {
      name: "Project8",
      desc: "dadadadadad",
      image: project,
      github:
        "https://github.com/Tejodeep2002/Circular-Progress-Bar-with-pause-button",
      website:
        "https://tejodeep2002.github.io/Circular-Progress-Bar-with-pause-button/",
    },
    {
      name: "Project9",
      desc: "dadadadadad",
      image: project,
      github:
        "https://github.com/Tejodeep2002/Circular-Progress-Bar-with-pause-button",
      website:
        "https://tejodeep2002.github.io/Circular-Progress-Bar-with-pause-button/",
    },
    {
      name: "Project10",
      desc: "dadadadadad",
      image: project,
      github:
        "https://github.com/Tejodeep2002/Circular-Progress-Bar-with-pause-button",
      website:
        "https://tejodeep2002.github.io/Circular-Progress-Bar-with-pause-button/",
    },
    {
      name: "Project11",
      desc: "dadadadadad",
      image: project,
      github:
        "https://github.com/Tejodeep2002/Circular-Progress-Bar-with-pause-button",
      website:
        "https://tejodeep2002.github.io/Circular-Progress-Bar-with-pause-button/",
    },
    {
      name: "Project12",
      desc: "dadadadadad",
      image: project,
      github:
        "https://github.com/Tejodeep2002/Circular-Progress-Bar-with-pause-button",
      website:
        "https://tejodeep2002.github.io/Circular-Progress-Bar-with-pause-button/",
    },

  ];

  return (
    <div className="projects">
      <div className="p-wrapper">
        <div className="p-heading">
          <span>Recent Projects</span>
          <span>My Projects</span>
        </div>
        <div className="p-main">
          {
            (false)?
            <ProjectSlider1 projects={projects} />
            :
            <ProjectSlider2 projects={projects}/>


          }
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
