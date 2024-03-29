import Image from "next/image";
import React from "react";
import Sass from "../../public/assets/skills/sass.png";
import PostgreSQL from "../../public/assets/skills/postgresql.png";
import ReactImg from "../../public/assets/skills/react.png";
import Tailwind from "../../public/assets/skills/tailwind.png";
import NuxtJS from "../../public/assets/skills/nuxt-js.png";
import Vue from "../../public/assets/skills/vue.png";
import Git from "../../public/assets/skills/git.png";
import NextJS from "../../public/assets/skills/nextjs.png";
import MochaChai from "../../public/assets/skills/mocha-chai.png";
import Typescript from "../../public/assets/skills/typescript.png";
import NodeExpress from "../../public/assets/skills/node-express.png";
import SEO from "../../public/assets/skills/seo.png";

interface SkillsLanguageProps {
  languageData: {
    ["above-text"]: string;
    title: string;
  };
  isDarkMode: boolean;
  language: "en" | "pl";
}

const Skills: React.FC<SkillsLanguageProps> = ({
  languageData,
  isDarkMode,
  language,
}) => {
  return (
    <section
      aria-label={
        language === "en"
          ? "A section demonstrating my skills in each technology"
          : "Sekcja pokazujące moje umiejętności w poszczególnych technologiach"
      }
      id="skills"
      className="w-full lg:h-screen p-2"
    >
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl tracking-widest uppercase text-color-text-primary">
          {languageData["above-text"]}
        </p>
        <h2 className="py-4">{languageData.title}</h2>
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 ">
          <article className="p-6 shadow-default-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={MochaChai}
                  width="128"
                  height="128"
                  alt={
                    language === "en"
                      ? "Mocha with Chai logo"
                      : "Logo Mocha with Chai "
                  }
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>
                  Mocha, <br /> Chai
                </h3>
              </div>
            </div>
          </article>
          <article className="p-6 shadow-default-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Sass}
                  width="64"
                  height="64"
                  alt={language === "en" ? "Sass logo" : "Logo Sass"}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Scss</h3>
              </div>
            </div>
          </article>
          <article className="p-6 shadow-default-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Git}
                  width="64"
                  height="64"
                  alt={language === "en" ? "Git logo" : "Logo Git"}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Git</h3>
              </div>
            </div>
          </article>
          <article className="p-6 shadow-default-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  style={
                    isDarkMode
                      ? { filter: " brightness(0) invert(1)" }
                      : undefined
                  }
                  src={Vue}
                  width="64"
                  height="64"
                  alt={language === "en" ? "Vue logo" : "Logo Vue"}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Vue</h3>
              </div>
            </div>
          </article>
          <article className="p-6 shadow-default-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={ReactImg}
                  width="64"
                  height="64"
                  alt={language === "en" ? "React logo" : "Logo Reacta"}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </article>
          <article className="p-6 shadow-default-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Typescript}
                  width="64"
                  height="64"
                  alt={
                    language === "en" ? "Typescript logo" : "Logo Typescript"
                  }
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Typescript</h3>
              </div>
            </div>
          </article>
          <article className="p-6 shadow-default-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={PostgreSQL}
                  width="64"
                  height="64"
                  alt={
                    language === "en" ? "PostgreSQL logo" : "Logo PostgreSQL"
                  }
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>PostgreSQL</h3>
              </div>
            </div>
          </article>
          <article className="p-6 shadow-default-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={NuxtJS}
                  width="64"
                  height="64"
                  alt={language === "en" ? "Nuxt.js logo" : "Logo Nuxt.js"}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Nuxt</h3>
              </div>
            </div>
          </article>
          <article className="p-6 shadow-default-xl rounded-xl hover:scale-105 ease-in duration-300">
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
                  alt={language === "en" ? "Next.js logo" : "Logo Next.js"}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Next</h3>
              </div>
            </div>
          </article>
          <article className="p-6 shadow-default-xl rounded-xl hover:scale-105 ease-in duration-300">
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
                  alt={
                    language === "en"
                      ? "Node with express logo"
                      : "Logo Node z express"
                  }
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>
                  Node, <br /> Express
                </h3>
              </div>
            </div>
          </article>
          <article className="p-6 shadow-default-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={Tailwind}
                  width="64"
                  height="64"
                  alt={language === "en" ? "Tailwind logo" : "Logo Tailwind"}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </article>
          <article className="p-6 shadow-default-xl rounded-xl hover:scale-105 ease-in duration-300">
            <div className="grid grid-cols-2 gap-4 justify-center items-center">
              <div className="m-auto">
                <Image
                  src={SEO}
                  width="64"
                  height="64"
                  alt={language === "en" ? "SEO logo" : "Logo SEO"}
                />
              </div>
              <div className="flex flex-col items-center justify-center">
                <h3>
                  SEO, <br /> Accessibility
                </h3>
              </div>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
};

export default Skills;
