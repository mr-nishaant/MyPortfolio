import React, { useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { IoCloseSharp } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import { Link } from "react-scroll";
import { ReactTyped } from "react-typed";
function Navbar() {
  const [menu, setMenu] = useState(false);
  const navItems = [
    {
      id: "/",
      text: "Home",
    },
    {
      id: "about",
      text: "About",
    },
    {
      id: "project",
      text: "Project",
    },
    {
      id: "skill",
      text: "Skill",
    },
    {
      id: "contact",
      text: "Contact",
    },
    
  ];
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto px-4 md:px-20 h-16 shadow-md fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-teal-400 to-yellow-200">
        
        <div className="flex justify-between items-center h-16 ">
          <NavLink to={"/"}>
            <div className=" flex space-x-2">
              <h1 className="font-semibold text-xl cursor-pointer">
                Nishant<span className="text-blue-500 text-2xl">Kumar</span>
                <p className=" text-sm"><ReactTyped
                  className="text-red-700 font-bold"
                  strings={["Frontend Developer", "Programmer", "Java Developer"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop={true}/></p>
              </h1>
            </div>
          </NavLink>


          <div>
            <ul className="hidden md:flex space-x-8">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 hover:text-blue-600 duration-200 cursor-pointer font-semibold "
                  key={id}
                >
                  <NavLink
                    to={id}
                  >
                    {text}
                  </NavLink>
                </li>
              ))}
            </ul>
            <div onClick={() => setMenu(!menu)} className="md:hidden">
              {menu ? <IoCloseSharp size={24} /> : <AiOutlineMenu size={24} />}
            </div>
          </div>
        </div>


        {/* mobile navbar */}
        {menu && (
          <div className="bg-white">
            <ul className="md:hidden flex flex-col h-screen items-center justify-center space-y-3 text-xl">
              {navItems.map(({ id, text }) => (
                <li
                  className="hover:scale-105 duration-200 font-semibold cursor-pointer"
                  key={id}
                >
                  <NavLink
                    onClick={() => setMenu(!menu)}
                    to={id}
                  >
                    {text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </>
  );
}

export default Navbar;
