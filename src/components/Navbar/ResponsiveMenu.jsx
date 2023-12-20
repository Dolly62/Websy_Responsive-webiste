import React from "react";
import { FaUserCircle } from "react-icons/fa";

const ResponsiveMenu = (props) => {
  return (
    <div
      className={`${
        props.showMenu ?  "left-0" : "-left-[100%]" 
      } h-screen w-[75%] bg-purple-400 fixed top-0 z-50 transition-all duration-500 pt-24 pb-6 px-8 flex flex-col justify-between text-white`}
    >
      <div>
        <div className="flex items-center justify-start gap-3">
          <FaUserCircle size={50} />
          <div>
            <h1>User Name</h1>
          </div>
        </div>

        <nav className="mt-12">
          <ul className="space-y-4 text-xl">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#services">Services</a>
            </li>
            <li>
              <a href="aboutus">About us</a>
            </li>
            <li>
              <a href="privacypolicy">Privacy policy</a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="footer">
        <h1>@copyright 2023</h1>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
