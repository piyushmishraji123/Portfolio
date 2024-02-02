import React from 'react';
import './herosection.css'
import dots from '../../assets/userAsset/dots.png';
import cube from '../../assets/userAsset/cube.png';
import circle from '../../assets/userAsset/circle.png';
import zigzag from '../../assets/userAsset/zigzags.png';
import plus from '../../assets/userAsset/plus.png';
import userimage from '../../assets/userAsset/Userimage.jpg'
import Herosectionheading from './Herosectionheading';



const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="faded-text">Piyush Mishra</div>

      <div className="hero-section-left">
        <div className="hero-section-heading">Hi! Piyush Mishra</div>
        <div className="hero-section-heading hero-section-sub-heading">
          I am a <span className="role"></span>
        </div>
<Herosectionheading></Herosectionheading>
       

        <div className="hero-section-description">
          I’m a software developer and here is my portfolio website. Here you’ll
          learn about my journey as a software developer.
        </div>

        <div className="btn-pink" id="btn">Hire me</div>
      </div>

      <div className="hero-section-right">
        <div className="absolute icons icon-dots">
          <img src={dots} alt="" />
        </div>
        <div className="absolute icons icon-cube">
          <img src={cube} alt="" />
        </div>
        <div className="absolute icons icon-circle">
          <img src={circle} alt="" />
        </div>
        <div className="absolute icons icon-zigzag">
          <img src={zigzag} alt="" />
        </div>
        <div className="absolute icons icon-plus">
          <img src={plus} alt="" />
        </div>
        <div className="user-image">
          <img src={userimage}/>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
