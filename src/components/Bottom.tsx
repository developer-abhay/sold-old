import React from "react";

const Bottom: React.FC = () => {
  return (
    <div className="mt-14 p-4 rounded-lg bg-gray-300 mx-auto w-full max-w-7xl flex flex-col md:flex-row items-center justify-between h-full md:h-80">
      <div className="text-center px-4 md:w-3/5">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Pariatur
        necessitatibus cum, magni laboriosam delectus at quibusdam, provident
        voluptatibus doloremque libero, mollitia ipsa. Temporibus rem labore
        inventore vitae cum! Id inventore est numquam ipsum eaque voluptatibus
        magni dolor exercitationem ratione omnis.
      </div>
      <div className="bg-white rounded-lg h-full md:w-2/5 hidden md:flex" />
      <div className="bg-white rounded-lg w-full h-36 mt-2 flex md:hidden" />
    </div>
  );
};

export default Bottom;
