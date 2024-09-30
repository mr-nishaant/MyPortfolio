import React from "react";

function Skill() {
  const cardItem = [
    {
      id: 1,
      logo: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582748_1280.png",
      name: "HTML",
    },
    {
      id: 2,
      logo: "https://cdn.pixabay.com/photo/2017/08/05/11/16/logo-2582747_960_720.png",
      name: "CSS",
    },
    {
      id: 3,
      logo: "https://logos-world.net/wp-content/uploads/2022/07/Java-Logo.png",
      name: "Java",
    },
    {
      id: 4,
      logo: "https://1000logos.net/wp-content/uploads/2020/09/JavaScript-Logo.jpg",
      name: "JavaScript",
    },

    {
      id: 5,
      logo: "https://download.logo.wine/logo/C%2B%2B/C%2B%2B-Logo.wine.png",
      name: "C/C++",
    },
    {
      id: 6,
      logo: "https://static-00.iconduck.com/assets.00/react-icon-512x512-u6e60ayf.png",
      name: "ReactJS",
    },
    
   
  ];
  return (
    <div
      name="Experiance"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 my-16"
    >
      <div>
          <p>
            <br></br>
          </p>
        <h1 className=" flex justify-center text-3xl font-bold mb-5">Skills</h1>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-7 my-3">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" flex flex-col items-center justify-center border-[2px] rounded-full md:w-[200px] md:h-[200px] shadow-lg shadow-green-700 p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[150px] rounded-full" alt="" />
              <div>
                <div className="">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
