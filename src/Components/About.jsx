import React from "react";
import Skills from "./Skills.jsx";
import raguresume from '../resume/Ragunathan-Resume.pdf';
import { FaFileDownload } from "react-icons/fa";
const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, I am <b>Ragunathan S</b> and am from Chennai,
            Tamilnadu. I'm a <b>Software Developer with</b> With One Years of Experience. Also I have Completed My UG in <b>BSC Computer Science</b> From Gurunanak College , Velachery. <br />
            <br />
            and <b>MSC Computer Science</b> From Sathyabama University , Chennai. <br />
        
            I love to work with coding using any technologies apart i am experienced in Angular , C#, Asp.net , SQL Server , HTML , CSS , Javascript , React , Java , Figma , Git , Github , Tailwind CSS , Bootstrap. <br />
            <br />
            <br />I am <b>Open</b> to new opportunities and would like to collabrate and work with projects. Feel Free to connect
            with me.
            <br /><br />
            Apart from  <b>Career</b> I would like to read Psychology based books , Graphic Designing and 
            do maintaining the Digital Marketing Pages in my spare time. 
          </p>
          <a href= { raguresume } download className="resume-btn">
            <button className="resume-btn">
              Download Resume <FaFileDownload></FaFileDownload>
            </button>
          </a>
        </div>

        <div></div>
      </div>

      <h1 className="SkillsHeading"> Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Bootstrap" />
        <Skills skill="Tailwind" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="Git" />
        <Skills skill= "Figma" />
        <Skills skill= "Angular" />
        <Skills skill= "CSharp" />
        <Skills skill= "SQL" />
      </div>
    </>
  );
};

export default About;
