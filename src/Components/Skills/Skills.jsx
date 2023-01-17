import React from "react";
import SkillsBox from "../SkillsBox/SkillsBox";
import "./Skills.css";

const Skills = () => {
  const frontEnd = [
    { language: "HTML", progress: 10 },
    { language: "CSS", progress: 10 },
    { language: "JAVASCRIPT", progress: 6 },
    { language: "REACT", progress: 7 },
    { language: "BOOTSTRAP", progress: 5 },
  ];
  const backend = [
    { language: "Node Js", progress: 5 },
    { language: "Express Js", progress: 5 },
    { language: "Firebase", progress: 5 },
    { language: "MongoDB", progress: 3 },
  ];
  const designing = [
    { language: "Figma", progress: 6 },
    { language: "PhotoShop", progress: 6 },
    { language: "Github & Git", progress: 6 },
  ];
  return (
    <div className="skills">
      <div className="s-wrapper">
        <div className="s-heading">
          <span>Skills</span>
          <span>My Technical Level</span>
        </div>
        <div className="s-main">
          <SkillsBox heading={"Frontend Development"} language={frontEnd} />
          <SkillsBox heading={"Backend Development"} language={backend} />
          <SkillsBox heading={"Others Tools"} language={designing} />
        </div>
      </div>
      <div className="blur b-blur2"></div>
      <div className="blur b-blur3"></div>
    </div>
  );
};

export default Skills;
