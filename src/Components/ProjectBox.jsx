import React from "react";
import { FaGithub } from "react-icons/fa";
import { CgFileDocument } from "react-icons/cg";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    
    DashboardUIGithub: "https://github.com/Ragu-The-Developer/dashboard",
    DashboardUIWebsite: "https://dashboard-topaz-iota.vercel.app/",
    
    ResponsiveLandingPageGithub: "https://github.com/Ragu-The-Developer/Ragu-The-Developer/tree/main/HTML%20CSS%20WEBSITE",
    ResponsiveLandingPageWebsite: "https://htmlcsscodings.netlify.app",

    FramerJSGithub: "https://github.com/Ragu-The-Developer/Framer-React",
    FramerJSWebsite: "https://framer-react-zeta.vercel.app/",

    TrailerAppGithub: "https://github.com/Ragu-The-Developer/trailer-fetch",
    TrailerAppWebsite: "https://trailer-fetch.vercel.app/",

    ResponsiveBlogAppGithub: "https://github.com/Ragu-The-Developer/Blogger-X",
    ResponsiveBlogAppWebsite: "https://blogger-x-two.vercel.app/",

    SinglePageGithub: "https://github.com/Ragu-The-Developer/ORGware",
    SinglePageWebsite: "https://landingpage-lovat-two.vercel.app/",
  };

  return (
    <div className="projectBox">
      <img className="projectPhoto" src={projectPhoto} alt="Project display" />
      <div className="box">
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />

        <a href={desc[projectName + "Github"]} target="_blank">
          <button className="projectbtn">
            <FaGithub /> Github
          </button>
        </a>

        <a href={desc[projectName + "Website"]} target="_blank">
          <button className="projectbtn">
            <CgFileDocument /> Site
          </button>
        </a>
      </div>
    </div>
  );
};
export default ProjectBox;
