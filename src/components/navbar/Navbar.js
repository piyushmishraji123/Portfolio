import React from 'react';
import logo from '../../assets/userAsset/Navlogo.jpg';

const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-8 w-">
      <div className="flex items-center">
        <img src={logo} className="w-12 h-12" alt="Logo" />
        <div className="text-xl ml-[-8px]">iyush Mishra</div>
      </div>

      <div className=" flex gap-8 text-lg ">
        <div><a className=' hover:text-black hover:font-bold ' href="#projects">Projects</a></div>
        <div><a className=' hover:text-black hover:font-bold' href="#skills">Skills</a></div>
        <div><a className=' hover:text-black hover:font-bold' href="#contactme">Contact Me</a></div>
      </div>
    </div>
  );
};

export default Navbar;
