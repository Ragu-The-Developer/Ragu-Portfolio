import React from "react";
import { Link } from "react-router-dom";
import Type from "./Type.jsx";
import Tilt from "react-parallax-tilt";
import Ragu from '../images/ragu.png';
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hello there!</h1>
          <h1>
            I'M <b>Ragunathan S</b>
          </h1>
          <Type />
          <Link to="/About">
            <button className="about">
              About Me
              <BsPerson />
            </button>
          </Link>

          <Link to="/Contact">
            <button className="contact">
              Contact <CgPhone />
            </button>
          </Link>
        </div>
        <Tilt>
          <img className="Avatar" src={ Ragu } alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
