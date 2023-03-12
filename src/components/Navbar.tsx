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

import {
  colorLinkLightMode,
  colorBackgroundLightMode,
  colorTextPrimaryLightMode,
  colorLinkDarkMode,
  colorBackgroundDarkMode,
  colorTextPrimaryDarkMode,
  colorCvPrimaryLightMode,
  colorCvSecondaryLightMode,
  colorCvPrimaryDarkMode,
  colorCvSecondaryDarkMode,
} from "../static/styles/colors";

interface NavbarLanguageProps {
  languageData: {
    list: string[];
    description: string;
    "contact-description": string;
  };
  toggleLanguage: (lang: "en" | "pl") => void;
  language: "en" | "pl";
  setIsDarkMode(value: boolean | ((prevState: boolean) => boolean)): void;
  isDarkMode: boolean;
}

const Navbar: React.FC<NavbarLanguageProps> = ({
  languageData,
  toggleLanguage,
  language,
  setIsDarkMode,
}) => {
  const [nav, setNav] = useState<boolean>(false);
  const [shadow, setShadow] = useState<boolean>(false);

  type Theme = "dark" | "light";
  const [theme, setTheme] = useState<Theme>("light");

  const setLightMode: () => void = () => {
    // set global state that is dark mode or not
    setIsDarkMode(false);

    document.body.style.backgroundColor = colorBackgroundLightMode;
    document.body.style.color = colorLinkLightMode;

    // set state for icon to light
    setTheme("light");
    // set shadow color to light version
    document.documentElement.style.setProperty("--shadow-color", "#9ca3af");
    // set background color to light version
    document.documentElement.style.setProperty(
      "--background-color",
      colorBackgroundLightMode
    );
    // set color to light version
    document.documentElement.style.setProperty(
      "--color-link",
      colorLinkLightMode
    );
    // change cv colors
    document.documentElement.style.setProperty(
      "--cv-primary",
      colorCvPrimaryLightMode
    );
    document.documentElement.style.setProperty(
      "--cv-secondary",
      colorCvSecondaryLightMode
    );
    //change color text primary
    document.documentElement.style.setProperty(
      "--color-primary",
      colorTextPrimaryLightMode
    );
    // set color in main component to light version
    document.documentElement.style.setProperty(
      "--main-color-700",
      "rgb(55 65 81)"
    );
    document.documentElement.style.setProperty(
      "--main-color-600",
      "rgb(75 85 99)"
    );
  };
  const setDarkMode: () => void = () => {
    setIsDarkMode(true);

    document.body.style.backgroundColor = colorBackgroundDarkMode;
    document.body.style.color = colorLinkDarkMode;

    setTheme("dark");
    document.documentElement.style.setProperty("--shadow-color", "#101011");
    document.documentElement.style.setProperty(
      "--background-color",
      colorBackgroundDarkMode
    );
    document.documentElement.style.setProperty(
      "--color-link",
      colorLinkDarkMode
    );

    document.documentElement.style.setProperty(
      "--cv-primary",
      colorCvPrimaryDarkMode
    );
    document.documentElement.style.setProperty(
      "--cv-secondary",
      colorCvSecondaryDarkMode
    );
    document.documentElement.style.setProperty(
      "--color-primary",
      colorTextPrimaryDarkMode
    );
    document.documentElement.style.setProperty(
      "--main-color-700",
      "rgb(243 244 246)"
    );
    document.documentElement.style.setProperty(
      "--main-color-600",
      "rgb(249 250 251)"
    );
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
      className={
        shadow
          ? "bg-color-background fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300"
          : "bg-color-background fixed w-full h-20 z-[100] "
      }
    >
      <div className="flex justify-between items-center w-full h-full px-2 2xl:px-16">
        <Link href="/">
          <Image
            src={NavLogo}
            alt="logo"
            style={{ width: "120px", height: "70px" }}
          />
        </Link>
        <div>
          <ul className="text-color-link hidden nav:flex items-center">
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
              <Link href="/cv">{languageData.list[4]}</Link>
            </li>
            <li className="ml-10 text-sm uppercase hover:border-b">
              <Link href="/#contact">{languageData.list[5]}</Link>
            </li>
            <li className="ml-10 text-sm uppercase flex shrink-0">
              <Image
                tabIndex={0}
                role="button"
                title={
                  language === "en"
                    ? "Set language to english"
                    : "Zmień język na angielski"
                }
                onClick={setToEnglish}
                className={`mr-2 hover:!brightness-100 ${
                  language !== "en" ? "!brightness-[70%]" : ""
                }`}
                src={EnglishIcon}
                alt={
                  language === "en"
                    ? "English language icon"
                    : "Ikona języka angielskiego"
                }
                width={24}
                height={24}
              />
              <Image
                tabIndex={0}
                role="button"
                title={
                  language === "en"
                    ? "Set language to polish"
                    : "Zmień język na polski"
                }
                onClick={setToPolish}
                className={`ml-2 hover:!brightness-100 ${
                  language !== "pl" ? "!brightness-[70%]" : ""
                }`}
                src={PolishIcon}
                alt={
                  language === "en"
                    ? "Polish language icon"
                    : "Ikona języka polskiego"
                }
                width={24}
                height={24}
              />
            </li>
            <li className="ml-10 text-sm uppercase shrink-0">
              <Image
                tabIndex={0}
                title={
                  language === "en"
                    ? `Change theme to ${theme === "light" ? "dark" : "light"}`
                    : `Zmień motyw na ${theme === "light" ? "ciemny" : "jasny"}`
                }
                onClick={theme === "light" ? setDarkMode : setLightMode}
                className="mr-2"
                src={theme === "light" ? darkModeIcon : lightModeIcon}
                alt={
                  language === "en"
                    ? `Change theme to ${
                        theme === "light" ? "dark" : "light"
                      } icon`
                    : `Ikona zmiany motywu na ${
                        theme === "light" ? "ciemny" : "jasny"
                      }`
                }
                width={24}
                height={24}
              />
            </li>
          </ul>

          {/* Hamburger Icon */}
          <div className="flex items-center text-color-link nav:hidden">
            <Image
              tabIndex={0}
              title={
                language === "en"
                  ? `Change theme to ${theme === "light" ? "dark" : "light"}`
                  : `Zmień motyw na ${theme === "light" ? "ciemny" : "jasny"}`
              }
              onClick={theme === "light" ? setDarkMode : setLightMode}
              className="mr-5"
              src={theme === "light" ? darkModeIcon : lightModeIcon}
              alt={
                language === "en"
                  ? `Change theme to ${
                      theme === "light" ? "dark" : "light"
                    } icon`
                  : `Ikona zmiany motywu na ${
                      theme === "light" ? "ciemny" : "jasny"
                    }`
              }
              width={24}
              height={24}
            />
            <AiOutlineMenu onClick={handleNav} size={25} />
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {/* Overlay */}
      <div
        className={
          nav ? "nav:hidden fixed left-0 top-0 w-full h-screen bg-black/70" : ""
        }
      >
        {/* Side Drawer Menu */}
        <div
          className={
            nav
              ? "overflow-auto fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-color-background p-10 ease-in duration-500"
              : "fixed left-[-110%] top-0 p-10  ease-in duration-500"
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
                className="rounded-full shadow-default-lg p-3 cursor-pointer"
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
              <Link href="/cv">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {languageData.list[4]}
                </li>
              </Link>
              <Link href="/#contact">
                <li onClick={() => setNav(false)} className="py-4 text-sm">
                  {languageData.list[5]}
                </li>
              </Link>
              <li
                style={{ WebkitTapHighlightColor: "transparent" }}
                className="mt-5 text-sm uppercase flex items-center "
              >
                <Image
                  tabIndex={0}
                  role="button"
                  title={
                    language === "en"
                      ? "Set language to english"
                      : "Zmień język na angielski"
                  }
                  onClick={setToEnglish}
                  className={`mr-2 hover:!brightness-100 ${
                    language !== "en" ? "!brightness-[70%]" : ""
                  }`}
                  src={EnglishIcon}
                  alt={
                    language === "en"
                      ? "English language icon"
                      : "Ikona języka angielskiego"
                  }
                  width={24}
                  height={24}
                />
                <Image
                  tabIndex={0}
                  role="button"
                  title={
                    language === "en"
                      ? "Set language to polish"
                      : "Zmień język na polski"
                  }
                  onClick={setToPolish}
                  className={`ml-2 hover:!brightness-100 ${
                    language !== "pl" ? "!brightness-[70%]" : ""
                  }`}
                  src={PolishIcon}
                  alt={
                    language === "en"
                      ? "Polish language icon"
                      : "Ikona języka polskiego"
                  }
                  width={24}
                  height={24}
                />
              </li>
            </ul>
            <div className="pt-40">
              <p className="uppercase tracking-widest text-color-text-primary">
                {languageData["contact-description"]}
              </p>
              <div className="flex items-center justify-between my-4 w-full sm:w-[80%]">
                <Link
                  href={linkedInAccountLink}
                  target="_blank"
                  rel="noreferrer"
                  title={
                    language === "en"
                      ? "Go to my LinkedIn"
                      : "Przejdź do mojego Linkedina"
                  }
                >
                  <div className="rounded-full shadow-default-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link
                  href={githubAccountLink}
                  target="_blank"
                  rel="noreferrer"
                  title={
                    language === "en"
                      ? "Go to my Github"
                      : "Przejdź do mojego Githuba"
                  }
                >
                  <div className="rounded-full shadow-default-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <FaGithub />
                  </div>
                </Link>
                <Link
                  href="/#contact"
                  title={
                    language === "en"
                      ? "Go to contact section"
                      : "Przejdź do sekcji kontaktu"
                  }
                >
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-default-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300"
                  >
                    <AiOutlineMail />
                  </div>
                </Link>
                <Link
                  href="/cv"
                  title={
                    language === "en" ? "Go to my CV" : "Przejdź do mojego CV"
                  }
                >
                  <div
                    onClick={() => setNav(!nav)}
                    className="rounded-full shadow-default-lg p-3 cursor-pointer hover:scale-105 ease-in duration-300"
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
