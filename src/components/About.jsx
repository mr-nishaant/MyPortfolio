import React from "react";
import { FaGraduationCap, FaCode, FaBriefcase, FaCertificate } from "react-icons/fa"; // Import required icons

function About() {
  return (
    <div className="bg-gradient-to-r from-green-200 to-gray-400">
      <div
        name="About"
        className="max-w-screen-xl mx-auto px-6 md:px-10 lg:px-16 py-16 pt-20 "
      >
        <div className=" bg-white p-8 rounded-2xl shadow-2xl shadow-red-600">
          {/* About Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl md:text-4xl font-extrabold text-gray-900 mb-4">About Me</h1>
            <p className="text-base md:text-lg text-gray-600">
              Hello, I'm Nishant, a recent B-Tech graduate in Computer Science & Engineering from Netaji Subhas Institute of Technology. I have a strong foundation in Java, C/C++, JavaScript, ReactJS, HTML, CSS, and MySQL. My technical background is supported by internships where I gained hands-on experience in Java programming and Android development.
            </p>
          </div>
    
          {/* Two-Column Layout for Education and Skills */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Education Section */}
            <div>
              <h1 className="text-green-500 font-bold text-xl mb-4 flex items-center">
                <FaGraduationCap className="mr-2" /> Education
              </h1>
              <div className="mb-6">
                <h2 className="text-lg font-semibold">Bachelors of Technology (Computer Science & Engineering)</h2>
                <p className="text-gray-500">Netaji Subhas Institute Of Technology - Patna</p>
              </div>
              <div className="mb-6">
                <h2 className="text-lg font-semibold">Class 12th (PCB+M)</h2>
                <p className="text-gray-500">BH School - Bhartapura (Patna)</p>
                <p className="text-gray-500">Board: Bihar School Examination Board - Patna</p>
              </div>
            </div>
    
            {/* Skills & Expertise Section */}
            <div>
              <h1 className="text-green-500 font-bold text-xl mb-4 flex items-center">
                <FaCode className="mr-2" /> Skills & Expertise
              </h1>
              <ul className="list-inside list-disc text-gray-600 space-y-3">
                <li className=" text-lg"><span className="font-semibold text-lg text-black">Programming:</span> Java, JavaScript, C/C++</li>
                <li className="text-lg"><span className="font-semibold text-lg text-black">Frontend:</span> HTML, CSS, Tailwind CSS, ReactJS</li>
                <li className="text-lg"><span className="font-semibold text-lg text-black">Database:</span> MySQL</li>
              </ul>
            </div>
          </div>
    
          {/* Professional Experience Section */}
          <div className="mb-12">
            <h1 className="text-green-500 font-bold text-xl mb-4 flex items-center">
              <FaBriefcase className="mr-2" /> Professional Experience
            </h1>
            <div className="mb-6">
              <h2 className="text-lg font-bold">CodSoft - Kolkata, West Bengal</h2>
              <p className="text-blue-600 font-medium">Java Programming Intern | Dec 2024 - Jan 2024</p>
              <p className="text-gray-600 mt-2">
                ➢ Developed and maintained Java code for a school ERP system, improving performance and user experience by fixing errors. Collaborated with senior developers to enhance coding skills and create detailed documentation.
              </p>
            </div>
            <div className="mb-6">
              <h2 className="text-lg font-bold">ICE Technology Lab - Patna, Bihar</h2>
              <p className="text-blue-600 font-medium">Android Development Intern | May 2022 - Jun 2022</p>
              <p className="text-gray-600 mt-2">
                ➢ Developed a mobile application for a book publisher using Android SDK and Java. The app achieved 4-star ratings on Google Play Store with over 3,000 downloads.
              </p>
            </div>
          </div>
    
          {/* Certifications Section */}
          <div>
            <h1 className="text-green-500 font-bold text-xl mb-4 flex items-center">
              <FaCertificate className="mr-2" /> Certifications & Training
            </h1>
            <ul className="list-inside list-disc text-gray-600 space-y-3">
              <li><span className="font-semibold">Web Development</span> | Internshala</li>
              <li><span className="font-semibold">Advance Diploma in Computer Application</span> | Arcade Computer Academy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
