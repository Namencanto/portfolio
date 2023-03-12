import Image from "next/image";
import React from "react";
import Sass from "../../public/assets/skills/sass.png";
import MySql from "../../public/assets/skills/mysql.png";
import ReactImg from "../../public/assets/skills/react.png";
import Tailwind from "../../public/assets/skills/tailwind.png";
import Mongo from "../../public/assets/skills/mongo.png";
import Git from "../../public/assets/skills/git.png";
import NextJS from "../../public/assets/skills/nextjs.png";
import HtmlCssJs from "../../public/assets/skills/html-css-js.png";
import Typescript from "../../public/assets/skills/typescript.png";
import Github from "../../public/assets/skills/github.png";
import NodeExpress from "../../public/assets/skills/node-express.png";
import SEO from "../../public/assets/skills/seo.png";

interface SkillsLanguageProps {
  languageData: {
    ["above-text"]: string;
    title: string;
  };
  isDarkMode: boolean;
}

const Skills: React.FC<SkillsLanguageProps> = ({
  languageData,
  isDarkMode,
}) => {
  return (
    <section id="skills" className="w-full lg:h-screen p-2">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-color-text-primary">
          {languageData["above-text"]}
        </p>
        <h2 className="py-4">{languageData.title}</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <div className="p-6 shadow-default-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={HtmlCssJs} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Html Css Js</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-default-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Sass} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Scss</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-default-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Git} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Git</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-default-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  style={
                    isDarkMode
                      ? { filter: " brightness(0) invert(1)" }
                      : undefined
                  }
                  src={Github}
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Github</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-default-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={ReactImg} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-default-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Typescript} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Typescript</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-default-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={MySql} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MySql</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-default-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Mongo} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-default-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  style={
                    isDarkMode
                      ? { filter: " brightness(0) invert(1)" }
                      : undefined
                  }
                  src={NextJS}
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-default-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  style={
                    isDarkMode
                      ? { filter: " brightness(0) invert(1)" }
                      : undefined
                  }
                  src={NodeExpress}
                  width="64"
                  height="64"
                  alt="/"
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Node Express</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-default-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={Tailwind} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          <div className="p-6 shadow-default-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image src={SEO} width="64" height="64" alt="/" />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>SEO Accessibility</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
