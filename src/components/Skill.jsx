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
      name="Skills"
      className="max-w-screen-2xl container mx-auto px-4 sm:px-2 md:px-20 mt-16 pb-5 bg-gradient-to-r from-green-200 to-gray-400"
    >
      <div>
        <p><br /></p>
        <h1 className="flex justify-center text-3xl font-bold mb-5">Skills</h1>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-7 my-3 mx-auto">
          {cardItem.map(({ id, logo, name }) => (
            <div
              className=" bg-white flex flex-col items-center justify-center border-[2px] rounded-full w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] md:w-[200px] md:h-[200px] shadow-lg shadow-red-700 p-1 cursor-pointer hover:scale-110 duration-300"
              key={id}
            >
              <img src={logo} className="w-[70px] sm:w-[100px] md:w-[150px] rounded-full" alt={name} />
              <div>
                <div className="text-sm sm:text-base md:text-lg">{name}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
