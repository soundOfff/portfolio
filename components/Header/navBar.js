import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link, animateScroll as scroll } from "react-scroll";
import Logo from "../Logo";

function Navbar({ darkMode }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className=" shadow-sm fixed w-full z-10">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center  mx-20  justify-between w-full">
              <div className="flex justify-center items-center flex-shrink-0 ">
                <Logo />
              </div>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4 pb-1 border-b-2 border-blue-800">
                  <Link
                    activeClass="home"
                    to="home"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-gray-800  dark:text-white font-bold text-black px-3 py-2 rounded-md text-base font-md"
                  >
                    Home
                  </Link>
                  <Link
                    activeClass="about"
                    to="about"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-gray-800 dark:text-white font-bold text-black px-3 py-2 rounded-md text-base font-md"
                  >
                    About
                  </Link>
                  <Link
                    href="/skills"
                    activeClass="skills"
                    to="skills"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-gray-800 text-black font-bold dark:text-white block px-3 py-2 rounded-md text-base font-md"
                  >
                    Skills
                  </Link>

                  <Link
                    href="/projects"
                    activeClass="projects"
                    to="projects"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-gray-800 text-black font-bold dark:text-white block px-3 py-2 rounded-md text-base font-md"
                  >
                    Projects
                  </Link>

                  <Link
                    activeClass="contact"
                    to="contact"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:bg-gray-800 dark:text-white font-bold text-black px-3 py-2 rounded-md text-base font-md"
                    onClick={(e) => {
                      e.preventDefault();
                      scroll.scrollToBottom();
                    }}
                  >
                    Contact
                  </Link>
                  <div className="absolute right-5">{darkMode}</div>
                </div>
              </div>
            </div>
            <div className="mr-10 flex md:hidden ">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-800 inline-flex items-center justify-center p-2 rounded-md text-white  hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div
                ref={ref}
                className="dark:bg-gray-800 bg-gray-400 px-2 pt-2 pb-3 space-y-3 sm:px-3 rounded-xl shadow-lg"
              >
                <Link
                  href="/Home"
                  activeClass="Home"
                  to="Home"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-gray-800 text-black dark:text-white block px-3 py-2 rounded-md text-base font-md"
                >
                  Home
                </Link>
                <Link
                  href="/About"
                  activeClass="About"
                  to="About"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-gray-800 text-black dark:text-white block px-3 py-2 rounded-md text-base font-md"
                >
                  About
                </Link>
                <Link
                  href="/Skills"
                  activeClass="Skills"
                  to="Skills"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-gray-800 text-black dark:text-white block px-3 py-2 rounded-md text-base font-md"
                >
                  Skills
                </Link>

                <Link
                  href="/Projects"
                  activeClass="Projects"
                  to="Projects"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-gray-800 text-black dark:text-white block px-3 py-2 rounded-md text-base font-md"
                >
                  Projects
                </Link>

                <Link
                  href="/Contact"
                  activeClass="Contact"
                  to="Contact"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer hover:bg-gray-800 text-black dark:text-white block px-3 py-2 rounded-md text-base font-md"
                >
                  Contact
                </Link>
                <div className="pl-2">{darkMode}</div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
