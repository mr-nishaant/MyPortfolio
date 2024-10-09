import React from "react";
import { FaGraduationCap, FaCode, FaBriefcase, FaCertificate } from "react-icons/fa";

function About() {
  return (
    <section className="bg-gradient-to-r from-gray-900 to-gray-800 text-white py-20">
      <div className="max-w-7xl mx-auto px-6 lg:px-16">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold text-orange-500 mb-4">
            About Me
          </h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto">
            Hi! I'm Nishant, a recent Computer Science & Engineering graduate from Netaji Subhas Institute of Technology. With a solid foundation in programming languages and hands-on experience from internships, I’m eager to contribute to innovative projects.
          </p>
        </div>

        {/* Information Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Education Section */}
          <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-md transition-shadow duration-300 transform hover:scale-105 shadow-blue-200">
            <h3 className="text-green-400 text-2xl font-semibold flex items-center mb-6">
              <FaGraduationCap className="mr-3 text-xl" />
              Education
            </h3>
            <div className="mb-6">
              <h4 className="text-xl font-bold">B.Tech in Computer Science & Engineering</h4>
              <p className="text-gray-300">Netaji Subhas Institute Of Technology, Patna</p>
              <span className="text-sm text-gray-400">Graduated: 2024</span>
            </div>
            <div>
              <h4 className="text-xl font-bold">Class 12th (PCB+M)</h4>
              <p className="text-gray-300">BH School, Bhartapura, Patna</p>
              <span className="text-sm text-gray-400">Board: Bihar School Examination Board</span>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 shadow-blue-200">
            <h3 className="text-green-400 text-2xl font-semibold flex items-center mb-6">
              <FaCode className="mr-3 text-xl" />
              Skills & Expertise
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-orange-400 mr-3">●</span>
                <span>
                  <span className="font-semibold">Programming:</span> Java, JavaScript, C/C++
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-400 mr-3">●</span>
                <span>
                  <span className="font-semibold">Frontend:</span> HTML, CSS, Tailwind CSS, ReactJS
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-400 mr-3">●</span>
                <span>
                  <span className="font-semibold">Database:</span> MySQL
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Professional Experience */}
        <div className="mt-16">
          <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 shadow-blue-200">
            <h3 className="text-green-400 text-2xl font-semibold flex items-center mb-6">
              <FaBriefcase className="mr-3 text-xl" />
              Professional Experience
            </h3>
            {/* Experience Item */}
            <div className="mb-8">
              <h4 className="text-xl font-bold">CodSoft, Kolkata, West Bengal</h4>
              <p className="text-indigo-400 font-medium">Java Programming Intern</p>
              <span className="text-sm text-gray-400">Dec 2023 - Jan 2024</span>
              <p className="text-gray-300 mt-3">
                Developed and maintained Java code for a school ERP system, enhancing performance and user experience by debugging and optimizing existing functionalities.
              </p>
            </div>
            {/* Experience Item */}
            <div>
              <h4 className="text-xl font-bold">ICE Technology Lab, Patna, Bihar</h4>
              <p className="text-indigo-400 font-medium">Android Development Intern</p>
              <span className="text-sm text-gray-400">May 2022 - Jun 2022</span>
              <p className="text-gray-300 mt-3">
                Engineered a mobile application for a book publisher using Android SDK and Java, achieving a 4-star rating on the Google Play Store with over 3,000 downloads.
              </p>
            </div>
          </div>
        </div>

        {/* Certifications & Training */}
        <div className="mt-16">
          <div className="bg-gray-700 p-8 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 shadow-blue-200">
            <h3 className="text-green-400 text-2xl font-semibold flex items-center mb-6">
              <FaCertificate className="mr-3 text-xl" />
              Certifications & Training
            </h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <span className="text-orange-400 mr-3">●</span>
                <span>
                  <span className="font-semibold">Web Development</span> | Internshala
                </span>
              </li>
              <li className="flex items-center">
                <span className="text-orange-400 mr-3">●</span>
                <span>
                  <span className="font-semibold">Advanced Diploma in Computer Application</span> | Arcade Computer Academy
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
