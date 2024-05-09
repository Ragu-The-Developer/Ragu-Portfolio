import React from "react";
import Skills from "./Skills.jsx";
import raguresume from '../resume/RaguResume.pdf'
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
            Hi, my name is <b>Ragunathan S</b> and I am from Chennai,
            Tamilnadu. I'm a <b>Web developer / Designer</b> and a PG Graduate From Satyabama 
            university in <b>MSC Computer Science</b>. Also I have Completed My UG in <b>BSC Computer Science</b> From Gurunanak College , Velachery. <br />
            <br />
            I love to create projects with web development using the latest technologies and i would like to create more 
            attractive and responsive UI for the client's. You can find some of my projects mentioned in Project Section.
            <br />
            <br />I am <b>open</b> to new opportunities and would like to collabrate and work with projects. Feel Free to connect
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
        <Skills skill="Github" />
        <Skills skill="Java" />
        <Skills skill= "Figma" />
      </div>
    </>
  );
};

export default About;
