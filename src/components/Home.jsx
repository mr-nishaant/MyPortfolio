import React from "react";
import { NavLink } from "react-router-dom";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="min-h-screen bg-gradient-to-r from-red-500 via-red-600 to-red-700 flex items-center px-4"
      >
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          <div className="w-full md:w-1/2 text-white space-y-4 md:space-y-6 text-center md:text-left md:px-16">
            <h1 className="text-2xl md:text-5xl font-bold">
              Hello, I'm a{" "}
              <span className="ml-2">
                <ReactTyped
                  className="bg-gradient-to-r from-amber-400 to-rose-300 bg-clip-text text-transparent"
                  strings={["Developer", "Programmer", "Coder"]}
                  typeSpeed={60}
                  backSpeed={65}
                  loop={true}
                />
              </span>
            </h1>
            <p className="text-sm md:text-lg leading-relaxed px-4 md:px-0">
              I'm a recent B-Tech graduate specializing in Computer Science &
              Engineering with hands-on experience in Java, C/C++, JavaScript,
              ReactJS, HTML, CSS, and MySQL. I enjoy building solutions with
              real-world impact.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-row justify-center md:justify-start space-x-4 mt-6">
              <NavLink
                to="/Project"
                className="border-2 border-yellow-400 bg-yellow-400 text-red-700 px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-md hover:bg-yellow-300 transition ease-in-out duration-300"
              >
                View Projects
              </NavLink>
              <NavLink
                to="/contact"
                className="border-2 border-white text-white px-4 py-2 md:px-6 md:py-3 rounded-full font-semibold text-sm md:text-md hover:bg-white hover:text-red-700 transition ease-in-out duration-300"
              >
                Contact Me
              </NavLink>
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-center mt-10 md:mt-0">
            <img
              src="/MyImage.png"
              className="rounded-full w-48 h-48 md:w-80 md:h-80 shadow-2xl shadow-yellow-400 hover:scale-105 transition-transform duration-300 ease-in-out"
              alt="profile image"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
