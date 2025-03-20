import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import {
  FaReact,
  FaGitAlt,
  FaGithub,
  FaJava,
  FaBootstrap,
  FaHtml5,
  FaCss3,
  FaFigma,
  FaDatabase,
  FaCode
} from "react-icons/fa";
import { DiJavascript1 } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { FaAngular } from "react-icons/fa";
import { TbBrandCSharp } from "react-icons/tb";

const Skills = ({ skill }) => {
  const icon = {
    HTML: <FaHtml5 />,
    CSS: <FaCss3 />,
    Javascript: <DiJavascript1 />,
    Bootstrap: <FaBootstrap />,
    Tailwind: <SiTailwindcss />,
    React: <FaReact />,
    Git: <FaGitAlt />,
    Figma: <FaFigma/>,
    Angular: <FaAngular/>,
    SQL: <FaDatabase/>,
    CSharp: <TbBrandCSharp />

  };

  return (
    <div title={skill} className="SkillBox">
      {icon[skill]}
    </div>
  );
};

export default Skills;
