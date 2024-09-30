import React from "react";

function About() {
  return (
    <div
      name="About"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 py-20"
    >
      <div className="bg-white p-10 rounded-lg shadow-lg">
        {/* About Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">About Me</h1>
          <p className="text-lg text-gray-700">
            Hello, I'm Nishant, a recent B-Tech graduate in Computer Science & Engineering from Netaji Subhas Institute of Technology. I have a strong foundation in Java, C/C++, JavaScript, ReactJS, HTML, CSS, and MySQL. My technical background is supported by internships where I gained hands-on experience in Java programming and Android development.
          </p>
        </div>

        {/* Two-Column Layout for Education and Skills */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-12">
          {/* Education Section */}
          <div>
            <h1 className="text-green-600 font-semibold text-2xl mb-4">
              Education
            </h1>
            <div className="mb-6">
              <h2 className="text-xl font-bold">Bachelors of Technology (Computer Science & Engineering)</h2>
              <p className="text-gray-600">Netaji Subhas Institute Of Technology - Patna</p>
            </div>
            <div className="mb-6">
              <h2 className="text-xl font-bold">Class 12th (PCB+M)</h2>
              <p className="text-gray-600">BH School - Bhartapura (Patna)</p>
              <p className="text-gray-600">Board: Bihar School Examination Board - Patna</p>
            </div>
          </div>

          {/* Skills & Expertise Section */}
          <div>
            <h1 className="text-green-600 font-semibold text-2xl mb-4">
              Skills & Expertise
            </h1>
            <ul className="list-disc ml-5 text-gray-700 space-y-2">
              <li><span className="font-bold">Programming:</span> Java, JavaScript, C/C++</li>
              <li><span className="font-bold">Frontend:</span> HTML, CSS, Tailwind CSS, ReactJS</li>
              <li><span className="font-bold">Database:</span> MySQL</li>
            </ul>
          </div>
        </div>

        {/* Professional Experience Section */}
        <div className="mb-12">
          <h1 className="text-green-600 font-semibold text-2xl mb-4">
            Professional Experience
          </h1>
          <div className="mb-6">
            <h2 className="font-bold text-xl">CodSoft - Kolkata, West Bengal</h2>
            <p className="text-blue-950 font-semibold">Java Programming Intern | Dec 2024 - Jan 2024</p>
            <p className="text-gray-700 ml-4">
              ➢ Developed and maintained Java code for a school ERP system, improving performance and user experience by fixing errors. Collaborated with senior developers to enhance coding skills and create detailed documentation.
            </p>
          </div>
          <div className="mb-6">
            <h2 className="font-bold text-xl">ICE Technology Lab - Patna, Bihar</h2>
            <p className="text-blue-950 font-semibold">Android Development Intern | May 2022 - Jun 2022</p>
            <p className="text-gray-700 ml-4">
              ➢ Developed a mobile application for a book publisher using Android SDK and Java. The app achieved 4-star ratings on Google Play Store with over 3,000 downloads.
            </p>
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <h1 className="text-green-600 font-semibold text-2xl mb-4">
            Certifications & Training
          </h1>
          <ul className="list-disc ml-5 text-gray-700 space-y-2">
            <li><span className="font-bold">Web Development</span> | Internshala</li>
            <li><span className="font-bold">Advance Diploma in Computer Application</span> | Arcade Computer Academy</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default About;
