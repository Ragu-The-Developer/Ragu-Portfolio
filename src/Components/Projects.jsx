import React from "react";
import ProjectBox from "./ProjectBox";
import DashboardImage from "../images/dashboard.png";
import FramerImage from "../images/framer.png";
import LandingPageImage from "../images/landingpage.png";
import TrailerImage from "../images/trailer.png";
import BlogImage from '../images/blog.png';
import SingleImage from '../images/singlepage.png'; 
const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={DashboardImage} projectName="DashboardUI" />
        <ProjectBox projectPhoto={FramerImage} projectName="FramerJS" />
        <ProjectBox projectPhoto={LandingPageImage} projectName="ResponsiveLandingPage" />
        <ProjectBox projectPhoto={TrailerImage} projectName="TrailerApp" />
        <ProjectBox projectPhoto={BlogImage} projectName="ResponsiveBlogApp" />
        <ProjectBox projectPhoto={SingleImage} projectName="SinglePage" />
      </div>
    </div>
  );
};

export default Projects;
