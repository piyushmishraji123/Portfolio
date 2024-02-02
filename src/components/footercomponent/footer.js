import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter, faInstagram, faEnvelope } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope as farEnvelope } from '@fortawesome/free-regular-svg-icons';
import "../footercomponent/footer.css"
const Footer = () => {
  return (
    <footer><div class="footer relative bg-blue-800 py-20">
    <div class="flex gap-4 px-3 justify-between items-center">
      <div class="absolute bottom-0 left-0 text-blue-500 select-none text-6xl">
      <div className="footer-faded-text
      absolute left-0 bottom-0 text-gray-700 user-select-none text-4xl">Piyush Mishra</div>
      </div>
  
      <div class="flex gap-5">
        <div>
          <a href="#" class="text-white hover:text-orange-500 transition duration-600">
            Projects
          </a>
        </div>
        <div>
          <a href="#" class="text-white hover:text-orange-500 transition duration-600">
            Skills
          </a>
        </div>
        <div>
          <a href="#" class="text-white hover:text-orange-500 transition duration-600">
            Contact Me
          </a>
        </div>
      </div>
  
      <div class="flex gap-4">
       

    <div className="icon-wrapper flex gap-4">
      <FontAwesomeIcon icon={faLinkedin} className="icon" />
      <FontAwesomeIcon icon={faGithub} className="icon" />
      <FontAwesomeIcon icon={faTwitter} className="icon" />
      <FontAwesomeIcon icon={faInstagram} className="icon" />
      <FontAwesomeIcon icon={farEnvelope} className="icon" />
    </div>
 


      </div>
    </div>
  </div>
  
    </footer>
  );
};

export default Footer;
