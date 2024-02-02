import React, { useEffect } from 'react';
import Typed from 'typed.js';

const Herosectionheading = () => {
  useEffect(() => {
    // Initialize Typed.js
    const typeData = new Typed('.role', {
      strings: [
        'Full Stack Developer',
        'Web Developer',
        'UI-UX Designer',
        'Backend Developer',
        'Coder',
      ],
      loop: true,
      typeSpeed: 100,
      backSpeed: 80,
      backDelay: 1000,
    });

    // Clean up Typed instance on unmounting
    return () => {
      typeData.destroy();
    };
  }, []); // Empty dependency array ensures this effect runs only once after the initial render

  return (
    <div>
      <span className="role"></span>
    </div>
  );
};

export default Herosectionheading;
