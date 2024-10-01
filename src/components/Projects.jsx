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
      logo: "https://cdn-icons-png.flaticon.com/512/9584/9584876.png",
      name: "Mausam",
      details: "A Weather Forecasting Website",
      link: 'https://google.com',
      code: "google.com",
    },
    {
      id: 4,
      logo: "https://cdn-icons-png.flaticon.com/512/9584/9584876.png",
      name: "Mood",
      details: "An Online Music Player",
      link: 'https://example.com',
      code: "",
    },
    
    
  ];

  const handleLinkClick = (url) => {
    window.open(url, "_blank"); // This will open the link in a new tab
  };

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <div>
        <br />
        <br />
        <h1 className=" text-2xl  text-center font-semibold">Featured Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
          {cardItem.map(({ id, logo, name, details, link, code }) => (
            <div
              className="  md:w-[300px] md:h-[300px] border-[2px] rounded-lg shadow-lg shadow-slate-700 p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}>

              <div className="flex justify-center">
              <img
                src={logo}
                className="w-[213px] h-[140px] p-1 border-[2px] "
                alt={name}
              />
              </div>

              <div>
                <div className="flex px-2 font-bold text-xl mb-2 justify-center bg-gradient-to-tr from-red-500 via-violet-600 to-slate-800 text-white">{name}</div>
                <p className="flex px-2 text-lg justify-center bg-gradient-to-tr from-red-500 via-violet-600 to-slate-800 bg-clip-text text-transparent font-sans font-semibold">{details}</p>
              </div>
              <div className=" flex px-6 py-4 space-x-3 justify-around">
                
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
  );
}

export default Projects;
