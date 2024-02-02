import React from "react";
import Html from "../../assets/stack/HTML.png";
import Css from "../../assets/stack/CSS.png";
import javascript from "../../assets/stack/Javascript.svg";
import express from "../../assets/stack/Express.png";
import nextjs from "../../assets/stack/Next.svg";
import tailwind from "../../assets/stack/Tailwind.png";
import mongodb from "../../assets/stack/MongoDB.svg";
import Nodejs from "../../assets/stack/NodeJs.svg";
import '../projectsection/Projectsectiom.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLink } from '@fortawesome/free-solid-svg-icons';
import { faGithub as faGithubBrand } from '@fortawesome/free-brands-svg-icons';
const ProjectSection = () => {
  return (
    <div className="project-section" id="projects">
      <h2 className="page-header">
        Projects
      </h2>

      <div className="project-container ">
        <div
          className="project-card "
          id="project1" >
          <div className="project-number project-number-right ">
            01
          </div>
          <div className="project-content project-content-left">
            <div className="project-skills-container ">
         
              <img className="project-skill" src={Html} alt="" />
               <img class="project-skill" src={Css} alt="" />
              <img class="project-skill" src={javascript} alt="" />
              <img class="project-skill" src={express} alt="" />
              <img class="project-skill" src={nextjs} alt="" />
              <img class="project-skill" src={tailwind} alt="" />
              <img class="project-skill" src={Nodejs} alt="" />
              <img class="project-skill" src={mongodb} alt="" />
            </div>

            <h2 className="project-heading">Labour Finder</h2>

            <p className="project-subHeading">
              It is a platfom where a labour can search work and the user find
              the workers on the same platform
            </p>
            <div className="btn-grp">
              <button className="btn-pink btn-project">Read More</button>
              <a href="#" title="GitHubLink">
        <FontAwesomeIcon icon={faGithubBrand} className="icon" />
      </a>
      <a href="#" title="Live Link">
        <FontAwesomeIcon icon={faLink} className="icon" />
      </a>
              
            </div>
          </div>
        </div>
     {/* second project  */}
        <div
          className="project-card "
          id="project2" >
          <div className="project-number project-number-left ">
            02
          </div>
          <div className="project-content project-content-right">
            <div className="project-skills-container ">
         
              <img className="project-skill" src={Html} alt="" />
               <img class="project-skill" src={Css} alt="" />
              <img class="project-skill" src={javascript} alt="" />
              <img class="project-skill" src={express} alt="" />
              <img class="project-skill" src={nextjs} alt="" />
              <img class="project-skill" src={tailwind} alt="" />
              <img class="project-skill" src={Nodejs} alt="" />
              <img class="project-skill" src={mongodb} alt="" />
            </div>

            <h2 className="project-heading">Coaching Tracker</h2>

            <p className="project-subHeading">
              It is a platfom whih fills the gap between the coaching owner anf the students 
            </p>
            <div className="btn-grp">
              <button className="btn-pink btn-project">Read More</button>
              <a href="#" title="GitHubLink">
        <FontAwesomeIcon icon={faGithubBrand} className="icon " />
      </a>
      <a href="#" title="Live Link">
        <FontAwesomeIcon icon={faLink} className="icon" />
      </a>
            
            </div>
          </div>
        </div>
        {/* third project  */}
        <div
          className="project-card "
          id="project3" >
          <div className="project-number project-number-right ">
            03
          </div>
          <div className="project-content project-content-left">
            <div className="project-skills-container ">
         
              <img className="project-skill" src={Html} alt="" />
               <img class="project-skill" src={Css} alt="" />
              <img class="project-skill" src={javascript} alt="" />
              <img class="project-skill" src={express} alt="" />
              <img class="project-skill" src={nextjs} alt="" />
              <img class="project-skill" src={tailwind} alt="" />
              <img class="project-skill" src={Nodejs} alt="" />
              <img class="project-skill" src={mongodb} alt="" />
            </div>

            <h2 className="project-heading">Vidhyut Chat</h2>

            <p className="project-subHeading">
            An AI powered chatbot which solve the query regarding the maintainence of electrical appliances by ministry of power 
            </p>
            <div className="btn-grp">
              <button className="btn-pink btn-project">Read More</button>
              <a href="#" title="GitHubLink">
        <FontAwesomeIcon icon={faGithubBrand} className="icon" />
      </a>
      <a href="#" title="Live Link">
        <FontAwesomeIcon icon={faLink} className="icon" />
      </a>
            
            </div>
          </div>
        </div>
        {/* forurth project */}
        <div
          className="project-card "
          id="project4" >
          <div className="project-number project-number-left ">
            04
          </div>
          <div className="project-content project-content-right">
            <div className="project-skills-container ">
         
              <img className="project-skill" src={Html} alt="" />
               <img class="project-skill" src={Css} alt="" />
              <img class="project-skill" src={javascript} alt="" />
              <img class="project-skill" src={express} alt="" />
              <img class="project-skill" src={nextjs} alt="" />
              <img class="project-skill" src={tailwind} alt="" />
              <img class="project-skill" src={Nodejs} alt="" />
              <img class="project-skill" src={mongodb} alt="" />
            </div>

            <h2 className="project-heading">PassWord Genrator</h2>

            <p className="project-subHeading">
              A simple password Genrator tool used to create strong passwords 
            </p>
            <div className="btn-grp">
              <button className="btn-pink btn-project">Read More</button>
              <a href="#" title="GitHubLink">
        <FontAwesomeIcon icon={faGithubBrand} className="icon" />
      </a>
      <a href="#" title="Live Link">
        <FontAwesomeIcon icon={faLink} className="icon" />
      </a>
            
            </div>
          </div>
        </div>
        {/* fifth project  */}
        <div
          className="project-card "
          id="project3" >
          <div className="project-number project-number-right ">
            05
          </div>
          <div className="project-content project-content-left">
            <div className="project-skills-container ">
         
              <img className="project-skill" src={Html} alt="" />
               <img class="project-skill" src={Css} alt="" />
              <img class="project-skill" src={javascript} alt="" />
              <img class="project-skill" src={express} alt="" />
              <img class="project-skill" src={nextjs} alt="" />
              <img class="project-skill" src={tailwind} alt="" />
              <img class="project-skill" src={Nodejs} alt="" />
              <img class="project-skill" src={mongodb} alt="" />
            </div>

            <h2 className="project-heading">Razorpay Clone </h2>

            <p className="project-subHeading">
          This is a clone of a fintech company website Razorpay in which i used Tailwind Css
            </p>
            <div className="btn-grp">
              <button className="btn-pink btn-project">Read More</button>
              <a href="#" title="GitHubLink">
        <FontAwesomeIcon icon={faGithubBrand} className="icon " />
      </a>
      <a href="#" title="Live Link">
        <FontAwesomeIcon icon={faLink} className="icon" />
      </a>
            
            </div>
          </div>
        </div>


      </div>
    </div>
  );
};

export default ProjectSection;
