import React from "react";
import SkillsBox from "../SkillsBox/SkillsBox";
import "./Skills.css";

import Reactjs from "../../images/Skills/react.png";
import Html from "../../images/Skills/html.png";
import Css from "../../images/Skills/css.png";
import JavaScript from "../../images/Skills/javascript.png";
import Redux from "../../images/Skills/redux.png";
import MongoDB from "../../images/Skills/mongodb.png";
import ExpressJs from "../../images/Skills/expressjs.png";
import Bootstrap from "../../images/Skills/bootstrap.png";
import C from "../../images/Skills/c.png";
import Cplus from "../../images/Skills/c2.png";
import node from "../../images/Skills/nodejs.png";

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

  const skills = [
    Reactjs,
    Html,
    Css,
    JavaScript,
    Redux,
    MongoDB,
    ExpressJs,
    Bootstrap,
    C,
    Cplus,
    node
  ];

  return (
    <div className="skills" id="skills">
      <div className="s-wrapper">
        <div className="s-heading">
          <span>Skills</span>
          <span>My Technical Level</span>
        </div>
        <div className="s-main">
          {/* <SkillsBox heading={"Frontend Development"} language={frontEnd} />
          <SkillsBox heading={"Backend Development"} language={backend} />
          <SkillsBox heading={"Others Tools"} language={designing} /> */}
          {skills.map((items,value) => 
            <div className="mini-images" keys={value}>
              <img src={items} />
            </div>
          )
          }

          <div className="mini-images">
            <img src={skills[1]} />
            <span>HTML</span>
          </div>
        </div>
      </div>
      {/* <div className="blur b-blur2"></div>
      <div className="blur b-blur3"></div> */}
    </div>
  );
};

export default Skills;
