import React from 'react';
import Html from '../../assets/stack/HTML.png';
import Css from "../../assets/stack/CSS.png";
import javascript from "../../assets/stack/Javascript.svg";
import express from "../../assets/stack/Express.png";
// import nextjs from "../../assets/stack/Next.svg";
import tailwind from "../../assets/stack/Tailwind.png";
import mongodb from "../../assets/stack/MongoDB.svg";
import Nodejs from "../../assets/stack/NodeJs.svg";
import Typescript from "../../assets/stack/Typescript.svg";
import Vercel from "../../assets/stack/Vercel.svg";
import Saas  from "../../assets/stack/Saas.svg";
import Bootstrap  from "../../assets/stack/Bootstrap.svg";
import Bash  from "../../assets/stack/Bash.svg";
import ChartJs from "../../assets/stack/ChartJs.svg";
import Docker from "../../assets/stack/Docker.svg";
import Git from "../../assets/stack/Git.svg";
import Github from "../../assets/stack/Github.svg";
import Graphql from "../../assets/stack/Graphql.svg";
import K8s from "../../assets/stack/K8s.svg";
import MaterialUI from "../../assets/stack/MaterialUI.svg";
import Redux from "../../assets/stack/Redux.svg";
import nextjsc from "../../assets/stack/NextJsCircle.png";
import blob from "../../assets/userAsset/blob vector.png";
import "../SkillsComponent/SkillsComponent.css";



const SkillsComponent = () => {
  return (
    <div id="skills" className="container skills-container">
      <div className="skill-fade-text">Skills</div>

      <div className="skill-container-left">
        <h2 className="skill-heading">
          <span className="caps">M</span>e and
          <br />
          MyTech Stack
        </h2>

        <div className="skill-subHeading">
          <p>
            Hi Everyone My name is Piyush Mishra I am a Full Stack Web Developer I
            have been working for last 1 Years and Currently I am working as a virtual intern at a Codsoft Technologies in India Currently I am
            working on React and Making Beautiful UI-UX are my fey features
          </p>
          <p>
            I work on a multiple Projects and work as a frontend developer and for upskilling myself, I participated in various Hackathons 
          </p>
          <p>
            I worked on many Technologies like HTML, CSS and on JavaScript along with this I work on the most popular framework of JavaScript (React) and I prefer to use Tailwind to design my projects in backend part I am exploring Node.js and MongoDB and I love to create and design web pages using MERN stack 
          </p>
        </div>
      </div>

      <div className="skill-container-right">
        <img src={blob} className="blob-style" alt="" />

        <img src={Html} alt="" className="skills-logo" />
        <img src={Css} alt="" className="skills-logo" />
        <img src={javascript} alt="" className="skills-logo" />
        <img src={express} alt="" className="skills-logo" />
        {/* <img src={nextjs} alt="" className="skills-logo" /> */}
        <img src={tailwind} alt="" className="skills-logo" />
        <img src={mongodb} alt="" className="skills-logo" />
        <img src={Nodejs} alt="" className="skills-logo" />
        <img src={Graphql} alt="" className="skills-logo" />
        <img src={nextjsc} alt="" className="skills-logo" />
        <img src={K8s} alt="" className="skills-logo" />
        <img src={Bash} alt="" className="skills-logo" />
        <img src={Bootstrap} alt="" className="skills-logo" />
        <img src={Docker} alt="" className="skills-logo" />
        <img src={MaterialUI} alt="" className="skills-logo" />
        <img src={Git} alt="" className="skills-logo" />
        <img src={Github} alt="" className="skills-logo" />
        {/* <img src={nextjs} alt="" className="skills-logo" /> */}
        <img src={Redux} alt="" className="skills-logo" />
        <img src={Typescript} alt="" className="skills-logo" />
        <img src={Saas} alt="" className="skills-logo" />
        <img src={ChartJs} alt="" className="skills-logo" />
        <img src={Vercel} alt="" className="skills-logo" />
        {/* Add other image tags for your stack logos */}
      </div>
    </div>
  );
};

export default SkillsComponent;
