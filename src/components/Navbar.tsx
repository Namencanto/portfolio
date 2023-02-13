import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { AiOutlineClose, AiOutlineMail, AiOutlineMenu } from "react-icons/ai";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { BsFillPersonLinesFill } from "react-icons/bs";
import NavLogo from "public/assets/navLogo.png";
import { githubAccountLink, linkedInAccountLink } from "@/links";

import EnglishIcon from "../../public/assets/english.png";
import PolishIcon from "../../public/assets/polish.png";

import darkModeIcon from "../../public/assets/night-mode.svg";
import lightModeIcon from "../../public/assets/light-mode.svg";

import tailwindConfig from "../../tailwind.config.js";

interface NavbarLanguageProps {
  languageData: {
    list: string[];
    description: string;
    "contact-description": string;
  };
  toggleLanguage: (lang: "en" | "pl") => void;
  language: "en" | "pl";
}

const Navbar: React.FC<NavbarLanguageProps> = ({
  languageData,
  toggleLanguage,
  language,
}) => {
  // Set general colors in variables
  interface ColorMap {
    [key: string]: string;
  }

  const colors = tailwindConfig?.theme?.extend?.colors as ColorMap;

  const colorLinkLight = colors["color-link"];
  const colorBackgroundLight = colors["color-background"];
  const colorTextPrimaryLight = colors["color-text-primary"];

  const colorLinkDark = colors["color-link-dark"];
  const colorBackgroundDark = colors["color-background-dark"];
  const colorTextPrimaryDark = colors["color-text-primary-dark"];

  //

  const [nav, setNav] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);
  const [navBg, setNavBg] = useState<string>("#ecf0f3");
  const [linkColor, setLinkColor] = useState<string>("#1f2937");

  const isLightMode = navBg === colorBackgroundLight;

  const setLightMode: () => void = () => {
    setNavBg(colorBackgroundLight);
    setLinkColor(colorLinkLight);
    document.body.style.backgroundColor = colorBackgroundLight;
    document.body.style.color = colorLinkLight;
  };
  const setDarkMode: () => void = () => {
    setNavBg(colorBackgroundDark);
    setLinkColor(colorLinkDark);
    document.body.style.backgroundColor = colorBackgroundDark;
    document.body.style.color = colorLinkDark;
  };

  const handleNav: () => void = () => {
    setNav(!nav);
  };

  // Toggle language functions
  const setToEnglish: () => void = () => {
    toggleLanguage("en");
  };
  const setToPolish: () => void = () => {
    toggleLanguage("pl");
  };

  // Navbar shadow after scroll logic
  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener("scroll", handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? "fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "fixed w-full h-20 z-[100] "
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/" legacyBehavior>
          <a>
            <Image
              src={NavLogo}
              alt="/"
              style={{ width: "125px", height: "50px" }}
              className="cursor-pointer"
            />
          </a>
        </Link>
        <div>
          <ul
            style={{ color: `${linkColor}` }}
            className="hidden md:flex items-center"
          >
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/">{languageData.list[0]}</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#about">{languageData.list[1]}</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#skills">{languageData.list[2]}</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#projects">{languageData.list[3]}</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/resume">{languageData.list[4]}</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#contact">{languageData.list[5]}</Link>
            </li>
            <li className="ml-10 text-sm uppercase flex ">
              <Image
                style={
                  language !== "en" ? { filter: "brightness(70%)" } : undefined
                }
                onClick={setToEnglish}
                className="mr-2"
                src={EnglishIcon}
                alt="english language icon"
                width={24}
                height={24}
              />
              <Image
                style={
                  language !== "pl" ? { filter: "brightness(70%)" } : undefined
                }
                onClick={setToPolish}
                className="ml-2"
                src={PolishIcon}
                alt="polish language icon"
                width={24}
                height={24}
              />
            </li>
            <li className="ml-10 text-sm uppercase ">
              <Image
                onClick={isLightMode ? setDarkMode : setLightMode}
                className="mr-2"
                src={isLightMode ? darkModeIcon : lightModeIcon}
                alt="english language icon"
                width={24}
                height={24}
              />
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div
            style={{ color: `${linkColor}` }}
            onClick={handleNav}
            className="md:hidden"
          >
            <AiOutlineMenu size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "md:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? " fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-color-background p-10 ease-in duration-500"
              : "fixed left-[-100%] top-0 p-10 ease-in duration-500"
          }
        >
          <div>
            <div className="flex w-full items-center justify-between">
              <Link href="/" legacyBehavior>
                <a>
                  <Image src={NavLogo} width="87" height="35" alt="/" />
                </a>
              </Link>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose />
              </div>
            </div>
            <div className="border-b border-gray-300 my-4">
              <p className="w-[85%] md:w-[90%] py-4">
                {languageData.description}
              </p>
            </div>
          </div>
          <div className="py-4 flex flex-col">
            <ul className="uppercase">
              <Link href="/">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {languageData.list[0]}
                </li>
              </Link>
              <Link href="/#about">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {languageData.list[1]}
                </li>
              </Link>
              <Link href="/#skills">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {languageData.list[2]}
                </li>
              </Link>
              <Link href="/#projects">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {languageData.list[3]}
                </li>
              </Link>
              <Link href="/resume">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {languageData.list[4]}
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {languageData.list[5]}
                </li>
              </Link>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-color-text-primary">
                {languageData["contact-description"]}
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <a href={linkedInAccountLink} target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </a>
                <a href={githubAccountLink} target="_blank" rel="noreferrer">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </a>
                <Link href="/#contact">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link href="/resume">
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <BsFillPersonLinesFill />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
