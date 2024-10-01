import React, { useState } from "react";
import { FaPhoneAlt, FaEnvelope, FaLinkedin, FaGithub, FaFacebook, FaInstagram } from "react-icons/fa";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  function onSubmit(e) {
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/w899yq3DJ13", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          alert("We received your submission, thank you!");
          setName("");
          setEmail("");
          setMessage("");
          setError("");
        } else if (response.code === 422) {
          setError(response.message);
        } else {
          setError(response.message);
        }
      })
      .catch((error) => {
        setError(error.message ? error.message : error);
      });
  }

  return (
    <div className="bg-gradient-to-r from-blue-200 to-cyan-200 py-8 sm:py-16">
      <div className=" pt-14 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-8">

        <div className="bg-white shadow-2xl shadow-slate-700 rounded-xl p-8 relative lg:ml-24">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">Contact Information</h2>
          <p className="text-base sm:text-lg text-gray-600 mb-4">
            Feel free to get in touch with me. I'm available on the following platforms:
          </p>
          <div className="space-y-4 sm:space-y-6">
            <div className="flex items-center text-base sm:text-lg">
              <FaPhoneAlt className="text-indigo-600 mr-3" />
              <span className="text-gray-700">+91 6201458613</span>
            </div>
            <div className="flex items-center text-base sm:text-lg">
              <FaEnvelope className="text-indigo-600 mr-3" />
              <span className="text-gray-700">nishant01210@gmail.com</span>
            </div>
          </div>

          <div className="mt-6 sm:mt-8">
            <h3 className="text-lg sm:text-xl font-semibold mb-3 sm:mb-4">Social Media</h3>
            <div className="flex space-x-4 sm:space-x-6">
              <a href="https://linkedin.com/in/nishaantk" target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-800">
                <FaLinkedin size={24} sm:size={30} />
              </a>
              <a href="https://github.com/mr-nishaant" target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-800">
                <FaGithub size={24} sm:size={30} />
              </a>
              <a href="https://www.facebook.com/nishant.nsit.in" target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-800">
                <FaFacebook size={24} sm:size={28} />
              </a>
              <a href="https://www.instagram.com/mr.nishant.mishra" target="_blank" rel="noreferrer" className="text-indigo-600 hover:text-indigo-800">
                <FaInstagram size={24} sm:size={28} />
              </a>
            </div>
          </div>


          <div className="absolute -top-8 sm:-top-12 -right-8 sm:-right-12 bg-gradient-to-r from-violet-200 to-pink-200 shadow-lg shadow-slate-500 rounded-full w-24 h-24 sm:w-32 sm:h-32 z-0"></div>
        </div>

        <div className="bg-white shadow-2xl shadow-slate-700 rounded-xl p-8 relative lg:mr-24">
          <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 mb-6 sm:mb-8">Contact Us</h2>
          <form onSubmit={onSubmit} className="space-y-6">
            <div className="form-group">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                id="name"
                placeholder="Your full name"
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                id="email"
                placeholder="your.email@example.com"
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                id="message"
                placeholder="Enter your message here..."
                className="w-full p-2 sm:p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 h-28 sm:h-36 resize-none"
              ></textarea>
            </div>

            {error && <p className="text-red-500 text-sm">{error}</p>}

            <button
              type="submit"
              className="w-full py-2 sm:py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Send Message
            </button>
          </form>

          <div className="absolute -bottom-8 sm:-bottom-12 -left-8 sm:-left-12 bg-indigo-100 bg-gradient-to-r from-violet-200 to-pink-200 shadow-lg shadow-slate-500 rounded-full w-24 h-24 sm:w-32 sm:h-32 z-0"></div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
