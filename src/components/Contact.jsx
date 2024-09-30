import React from "react";
import { useState } from "react";

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
          // Field validation failed
          setError(response.message);
        } else {
          // other error from formcarry
          setError(response.message);
        }
      })
      .catch((error) => {
        // request related error.
        setError(error.message ? error.message : error);
      });
  }
  return (
    <>
    <br/>
    <br/>
    <br/>
    <br/>

    <form onSubmit={(e) => onSubmit(e)} className="space-y-6 max-w-md mx-auto p-6 bg-slate-400 shadow-red-600 rounded-lg shadow-2xl">
  <div className="formcarry-block">
  <h1 className=" flex justify-center text-4xl font-serif font-bold">Contact Us</h1>
    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
    <input
      type="text"
      value={name}
      onChange={(e) => setName(e.target.value)}
      id="name"
      placeholder="Your first and last name"
      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>

  <div className="formcarry-block">
    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Your Email Address</label>
    <input
      type="email"
      value={email}
      onChange={(e) => setEmail(e.target.value)}
      id="email"
      placeholder="john@doe.com"
      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500"
    />
  </div>

  <div className="formcarry-block">
    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
    <textarea
      value={message}
      onChange={(e) => setMessage(e.target.value)}
      id="message"
      placeholder="Enter your message..."
      className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 h-32 resize-none"
    ></textarea>
  </div>

  <div className="formcarry-block">
    <button type="submit" className="w-full py-2 px-4 bg-indigo-600 text-white font-semibold rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
      Send
    </button>
  </div>
</form>
<br/>
    <br/>
    <br/>
    <br/>

    </>
  );
}

export default Contact;
