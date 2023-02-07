import React, { useEffect,useState } from "react";
import "./Projects.css";
import project from "../../images/Projects/sidebar.png";
import project1 from "../../images/Projects/project1.jpg";
import project2 from "../../images/Projects/project2.jpg";


import ProjectSlider1 from "../ProjectSlider1/ProjectSlider1";
import ProjectSlider2 from "../ProjectSlider2/ProjectSlider2";

const Projects = () => {
  const [res,setRes] = useState()

  setInterval(()=>{
    setRes(window.innerWidth)
  },1000)

  console.log(window.innerWidth,window.innerHeight)
  
  const projects = [
    {
      name: "UrlShortner-123",
      desc: "dadadadadad",
      image: project1,
      github:
        "https://github.com/Tejodeep2002/UrlShortner-123",
      website:
        "https://tejodeep2002.github.io/UrlShortner-123/",
    },
    {
      name: "Circular Progress Bar",
      desc: "dadadadadad",
      image: project2,
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
    <div className="projects" id="projects">
      <div className="p-wrapper">
        <div className="p-heading">
          <span>Recent Projects</span>
          <span>My Projects</span>
        </div>
        <div className="p-main">
          {res<500 ? (
            <ProjectSlider1 projects={projects} />
          ) : (
            <ProjectSlider2 projects={projects} />
          )}
          
        </div>
      </div>
    </div>
  );
};

export default Projects;
