import React, { useEffect, useState } from "react";
import { BiPhoneCall, BiSolidMoon, BiSolidSun } from "react-icons/bi";
import { FaCaretDown } from "react-icons/fa";
import TopImage from "../../assets/top.jpeg";
import { HiMenuAlt1, HiMenuAlt3 } from "react-icons/hi";
import ResponsiveMenu from "./ResponsiveMenu";

const Navbar = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );

  const [showMenu, setShowMenu] = useState(false);

  const toggleMenuHandler = () => {
    setShowMenu(!showMenu);
  };

  const element = document.documentElement;

  useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.removeItem("theme");
    }
  }, [theme]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0  z-[99] bg-navbar text-white border-b-[1px]">
        <nav className="container flex items-center justify-between h-[70px] py-2">
          <div className="text-2xl md:text-3xl text-white">
            <a href="#">
              WEB
              <span className="inline-block font-bold text-primary ">SY</span>
            </a>
          </div>

          <div className="hidden md:block">
            <ul className="flex gap-10 items-center">
              <li className="group relative cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] h-[72px]">
                  Home
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>

                <div className="absolute -left-9 z-[99999] hidden w-[150px] bg-white shadow-md p-2 rounded-md text-black group-hover:block">
                  <ul className="space-y-3">
                    <li className="p-2 hover:bg-violet-200">Services</li>
                    <li className="p-2 hover:bg-violet-200">About us</li>
                    <li className="p-2 hover:bg-violet-200">Privacy policy</li>
                  </ul>
                </div>
              </li>
              <li className="group cursor-pointer">
                <a href="#" className="flex items-center gap-[2px] h-[72px]">
                  Services
                  <span>
                    <FaCaretDown className="transition-all duration-200 group-hover:rotate-180" />
                  </span>
                </a>

                <div className="absolute left-0 z-[99999] hidden w-ful p-2 rounded-b-3xl bg-white text-black shadow-md group-hover:block">
                  <div className="grid grid-cols-3 gap-5">
                    <div className="overflow-hidden">
                      <img
                        src={TopImage}
                        alt="Image"
                        className="max-h-[300px] w-full rounded-b-3xl object-fill"
                      />
                    </div>

                    <div className="col-span-2">
                      <h1 className="text-xl font-semibold pb-3">
                        Best Selling
                      </h1>
                      <p className="text-sm text-slate-600">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Quos atque dicta quis nihil quibusdam porro.
                        <div className="grid grid-cols-3 mt-4">
                          <div>
                            <h1 className="pb-1 text-xl font-semibold">
                              Development
                            </h1>
                            <ul className="space-y-2">
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Frontend Development
                              </li>
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Backend Development
                              </li>
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Fullstack Development
                              </li>
                            </ul>
                          </div>
                          <div>
                            <h1 className="pb-1 text-xl font-semibold">
                              Development
                            </h1>
                            <ul className="space-y-2">
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Frontend Development
                              </li>
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Backend Development
                              </li>
                              <li className="cursor-pointer text-black/80 hover:text-primary">
                                Fullstack Development
                              </li>
                            </ul>
                          </div>
                          <div>
                            <img
                              className="rounded-md"
                              src={TopImage}
                              alt="Image"
                            />
                          </div>
                        </div>
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li>Contact us</li>
              <li>
                <div className="flex items-center gap-4">
                  <div>
                    <BiPhoneCall className="text-2xl h-[40px] w-[40px] rounded-md p-2 text-white bg-primary hover:bg-primary/90" />
                  </div>

                  <div>
                    <p>Call us on</p>
                    <p>
                      <a href="tel:+91123456789">+91 123456789</a>
                    </p>
                  </div>
                </div>
              </li>
              {theme === "dark" ? (
                <BiSolidSun
                  className="text-2xl"
                  onClick={() => setTheme("light")}
                />
              ) : (
                <BiSolidMoon
                  className="text-2xl"
                  onClick={() => setTheme("dark")}
                />
              )}
            </ul>
          </div>

          <div className="flex items-center gap-4 md:hidden">
            {theme === "dark" ? (
              <BiSolidSun
                className="text-2xl"
                onClick={() => setTheme("light")}
              />
            ) : (
              <BiSolidMoon
                className="text-2xl"
                onClick={() => setTheme("dark")}
              />
            )}
            {showMenu ? (
              <HiMenuAlt1
                onClick={toggleMenuHandler}
                className="cursor-pointer transition-all"
                size={30}
              />
            ) : (
              <HiMenuAlt3
                onClick={toggleMenuHandler}
                className="cursor-pointer transition-all"
                size={30}
              />
            )}
          </div>
        </nav>
      </header>

      <ResponsiveMenu showMenu={showMenu} />
    </>
  );
};

export default Navbar;
