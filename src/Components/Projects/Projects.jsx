import React, { useEffect,useState } from "react";
import "./Projects.css";
import project1 from "../../images/Projects/project1.jpg";
import project2 from "../../images/Projects/project2.jpg";
import project3 from "../../images/Projects/project3.jpg";



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
      desc: "This site makes big links convert into short links",
      image: project1,
      github:
        "https://github.com/Tejodeep2002/UrlShortner-123",
      website:
        "https://tejodeep2002.github.io/UrlShortner-123/",
    },
    {
      name: "Circular Progress Bar",
      desc: "This is a Pause and play circular bar",
      image: project2,
      github:
        "https://github.com/Tejodeep2002/Circular-Progress-Bar-with-pause-button",
      website:
        "https://tejodeep2002.github.io/Circular-Progress-Bar-with-pause-button/",
    },
    {
      name: "Weather App",
      desc: "Now,You can know your current weather ",
      image: project3,
      github:
        "https://github.com/Tejodeep2002/Weather-app-using-React",
      website:
        "https://tejodeep2002.github.io/Weather-app-using-React/",
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
