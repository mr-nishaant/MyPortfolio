import React from "react";

function Projects() {
  const cardItem = [
    {
      id: 1,
      logo: "/portfolio.png",
      name: "ShowCaseMe",
      details: "A Personal Portfolio Website",
      link: 'https://nishaant.netlify.app/',
      code: "https://github.com/mr-nishaant/MyPortfolio",
    },
    {
      id: 2,
      logo: "/currency.png",
      name: "CashFlipper",
      details: "A Realtime Currency Converter",
      link: 'https://currencyconvt.netlify.app/',
      code: "https://github.com/mr-nishaant/currencyConverter",
    },
    {
      id: 3,
      logo: "/weather.png",
      name: "Mausam",
      details: "A Weather Forecasting Website",
      link: 'https://mausamin.netlify.app/',
      code: "https://github.com/mr-nishaant/Weather_App",
    },
    {
      id: 4,
      logo: "https://cdn-icons-png.flaticon.com/512/9584/9584876.png",
      name: "Mood",
      details: "An Online Music Player",
      link: '',
      code: "",
    },
  ];

  const handleLinkClick = (url) => {
    window.open(url, "_blank");
  };

  return (
    <>
    <div className="bg-gradient-to-r from-slate-900 to-slate-700 flex">
    <div
      name="Projects"
      className="p-5 max-w-screen-xl container mx-auto px-4 md:px-12 mt-20 "
    >
      <h1 className="text-2xl text-center font-semibold mb-8 text-slate-300">Featured Projects</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 bgwh">
        {cardItem.map(({ id, logo, name, details, link, code }) => (
          <div
            className="rounded-lg shadow-lg p-4 cursor-pointer hover:scale-105 transition-transform duration-300 bg-gray-900 shadow-blue-300"
            key={id}
          >
            <div>
              <img
                src={logo}
                className="w-[324px] h-[140px] object-contain"
                alt={name}
              />
            </div>

            <div>
              <div className="flex justify-center bg-gradient-to-tr from-red-500 via-violet-600 to-slate-800 text-white text-lg font-bold py-1">
                {name}
              </div>
              <p className="text-center text-gray-300 font-semibold mt-2">{details}</p>
            </div>
            
            <div className="flex justify-center space-x-4 mt-4">
              {link && (
                <button
                  onClick={() => handleLinkClick(link)}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold px-4 py-2 rounded"
                >
                  Link
                </button>
              )}
              {code && (
                <button
                  onClick={() => handleLinkClick(code)}
                  className="bg-green-500 hover:bg-green-700 text-white font-bold px-4 py-2 rounded"
                >
                  Code
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
    </>
  );
}

export default Projects;
