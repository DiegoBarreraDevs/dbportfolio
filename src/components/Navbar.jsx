import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src='https://firebasestorage.googleapis.com/v0/b/portfolio-86168.appspot.com/o/logo.png?alt=media&token=01847798-f9fe-4262-906f-178d7b57ad37' alt="logo" className=" h-[60px] -mb-[5px] object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Diego &nbsp;
            <span className="sm:block hidden">| JS Developer</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer `}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? 'https://firebasestorage.googleapis.com/v0/b/portfolio-86168.appspot.com/o/close.svg?alt=media&token=c69dab1b-1a32-4b74-b51c-e13c9b6bf9e9' : 'https://firebasestorage.googleapis.com/v0/b/portfolio-86168.appspot.com/o/menu.svg?alt=media&token=5d4be026-7e94-4f70-8d25-e44326346386'}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer transition-all"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } bg-[#000000d2] justify-center items-center absolute top-20 right-0 min-w-[100%] h-[350px] z-10 rounded-xl transition`}
          >
            <ul className="list-none flex text-center flex-col gap-10">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
