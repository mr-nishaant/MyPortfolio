import React from "react";
import { ReactTyped } from "react-typed";

function Home() {
  return (
    <>
      <div
        name="Home"
        className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-28"
      >
        <div className="flex flex-col md:flex-row">
          <div className="md:w-1/2 mt-12 md:mt-24 space-y-2 order-2 md:order-1">
            <span className="text-xl">Welcome In My Feed</span>
            <div className="flex space-x-1 text-2xl md:text-4xl">
              <h1>Hello, I'm a</h1>
              <ReactTyped
                className="text-red-700 font-bold"
                strings={["Developer", "Programmer", "Coder"]}
                typeSpeed={40}
                backSpeed={50}
                loop={true}
              />
            </div>
            <br />
            <p className="text-m md:text-md text-justify">
            I am a recent B-Tech graduate in Computer Science & Engineering from Netaji Subhas Institute of Technology, I have a strong foundation in Java, C/C++, JavaScript, ReactJS, HTML, CSS, and MySQL. My technical background is supported by internships where I gained hands-on experience in Java programming and Android development.

            </p>
          </div>
          <div className="md:w-1/2 md:ml-48 md:mt-20 mt-8 order-1" >
            <img
              src="/MyImage.png"
              className="rounded-full md:w-[450px] md:h-[450px] shadow-2xl shadow-red-600"
              alt="profile image"
            />
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}

export default Home;
