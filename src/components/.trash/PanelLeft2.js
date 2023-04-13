import { useState } from "react";

const PanelLeft = ({ isPanelActive }) => {
  
  console.log(isPanelActive)

  return (
    <div className="flex flex-col bg-gray-100 w-full h-full min-h-full items-center text-center">
      <div id="container-logo" className="w-full py-6 mb-2">
        <p className="  text-2xl font-bold text-orange-400 flex flex-col text-center justify-center 
                          subpixel-antialiased hover:text-orange-500 active:text-orange-300 transition-all
                            hover:transition-all cursor-pointer">
          <span className="material-symbols-rounded text-[40px] subpixel-antialiased">cloud</span>
          FreeWeather
        </p>
      </div>

      <div id="container-nav" className="align-center w-full">
        <ul className="flex flex-col text-sm text-left text-gray-600 w-full">
          <li className="hover:text-orange-500 hover:bg-gray-100 w-full py-4 transition-all hover:transition-all cursor-pointer active:text-orange-300">
            <a className="ml-6 flex items-center text-md">
              <span className="material-symbols-outlined text-md font-extralight mr-2">
                home
              </span>
              Home
            </a>
          </li>

          <li className="hover:text-orange-500 hover:bg-gray-100 w-full py-4 transition-all hover:transition-all cursor-pointer active:text-orange-300">
            <a className="ml-6 flex items-center text-md">
              <span className="material-symbols-outlined text-md font-extralight mr-2">
                star
              </span>
              Favorites
            </a>
          </li>

          <li className="hover:text-orange-500 hover:bg-gray-100 w-full py-4 transition-all hover:transition-all cursor-pointer active:text-orange-300">
            <a className="ml-6 flex items-center text-md">
              <span className="material-symbols-outlined text-md font-extralight mr-2">
                person
              </span>
              Profile
            </a>
          </li>

          <li className="hover:text-orange-500 hover:bg-gray-100 w-full py-4 transition-all hover:transition-all cursor-pointer active:text-orange-300">
            <a className="ml-6 flex items-center text-md">
              <span className="material-symbols-outlined text-md font-extralight mr-2">
                info
              </span>
              About Us
            </a>
          </li>
        </ul>
      </div>

      <a target="_blank" href="http://github.com/acpereiraz" className="absolute bottom-10 mt-[50vh] text-center text-[10px] text-gray-400 font-light subpixel-antialiased">
        Made with ❤️ by acpereira.
      </a>
    </div>
  );
};

export default PanelLeft;
