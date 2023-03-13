import React from "react";
import Head from "next/head";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { githubAccountLink, linkedInAccountLink } from "@/links";

interface CvLanguages {
  currentLanguage: {
    cv: {
      "left-side": {
        contact: string;
        "personal-skills-title": string;
        ["hobbies-title"]: string;
        ["languages-title"]: string;
        hobbies: string[];
        languages: string[];
      };
      "right-side": {
        "about-me-title": string;
        "about-me": string;
      };
    };
    "projects-info": {
      gymguru: {
        name: string;
        description: string;
      };
      techcards: {
        name: string;
        description: string;
      };
      portfolio: {
        name: string;
        description: string;
      };
      zol: {
        name: string;
        description: string;
      };
    };
  };
}
const cv: React.FC<CvLanguages> = ({ currentLanguage }) => {
  console.log(currentLanguage);
  return (
    <>
      <Head>
        <title>Mateusz | CV</title>
        <meta
          name="description"
          content="I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences."
        />
        <link rel="icon" href="/fav.png" />
      </Head>

      <div className="max-w-[940px] mx-auto pt-[120px]">
        <h2 className="text-center text-color-text-primary">CV</h2>
        <div className="shadow-default-lg bg-color-cv-primary my-4 p-4 w-full flex justify-between items-center">
          <h2 className="text-center">Mateusz Ordon</h2>
          <div className="flex">
            <a href={linkedInAccountLink} target="_blank" rel="noreferrer">
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
            </a>
            <a href={githubAccountLink} target="_blank" rel="noreferrer">
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
            </a>
          </div>
        </div>
      </div>

      <div className="mb-10 shadow-default-lg max-w-[940px] mx-auto flex flex-col md:flex-row bg-color-cv-primary h-full">
        {/* Left sidebar */}
        <div className="bg-color-cv-primary  w-full md:w-1/3 p-6 md:p-12 ">
          <h3 className="text-2xl font-medium mb-6">
            {currentLanguage.cv["left-side"]["contact"]}
          </h3>
          <ul className="text-lg">
            <li className="mb-2">
              <FaLinkedinIn size={20} style={{ marginRight: "1rem" }} />
              <a
                className="break-words"
                href={linkedInAccountLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/mateusz-ordon-33b02a230
              </a>
            </li>
            <li>
              <FaGithub size={20} style={{ marginRight: "1rem" }} />
              <a
                className="break-words"
                href={githubAccountLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/Namencanto
              </a>
            </li>
          </ul>

          <h3 className="text-2xl font-medium mt-8 mb-6">
            {currentLanguage.cv["left-side"]["personal-skills-title"]}
          </h3>
          <ul className="text-lg">
            <li className="mb-2">JavaScript & HTML & CSS</li>
            <li className="mb-2">Scss</li>
            <li className="mb-2">React</li>
            <li className="mb-2">MongoDB</li>
            <li className="mb-2">MySql</li>
            <li className="mb-2">TypeScript</li>
            <li className="mb-2">Next.js</li>
            <li className="mb-2">Git, Github</li>
            <li>Node + Express</li>
          </ul>

          <h3 className="text-2xl font-medium mt-8 mb-6">
            {currentLanguage.cv["left-side"]["languages-title"]}
          </h3>
          <ul className="text-lg">
            <li className="mb-2">
              {currentLanguage.cv["left-side"]["languages"][0]}
            </li>
            <li className="mb-2">
              {currentLanguage.cv["left-side"]["languages"][1]}
            </li>
          </ul>
          <h3 className="text-2xl font-medium mt-8 mb-6">
            {currentLanguage.cv["left-side"]["hobbies-title"]}
          </h3>
          <ul className="text-lg">
            <li className="mb-2">
              {currentLanguage.cv["left-side"]["hobbies"][0]}
            </li>
            <li className="mb-2">
              {currentLanguage.cv["left-side"]["hobbies"][1]}
            </li>
            <li> {currentLanguage.cv["left-side"]["hobbies"][2]}</li>
          </ul>
        </div>

        {/* Right content */}
        <div className="border-l-[1px] border-color-link bg-color-cv-secondary w-full md:w-2/3 p-6 md:p-12">
          <h2 className="text-3xl font-medium  mb-8">
            {currentLanguage.cv["right-side"]["about-me-title"]}
          </h2>
          <p className="text-lg leading-8">
            {currentLanguage.cv["right-side"]["about-me"]}
          </p>
          <h2 className="text-3xl font-medium my-8">Projekty</h2>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-1">
              {currentLanguage["projects-info"].gymguru.name}
            </h3>
            <p className="text-main-color-600 text-sm">
              {currentLanguage["projects-info"].gymguru.description}
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-1">
              {currentLanguage["projects-info"].techcards.name}
            </h3>
            <p className="text-main-color-600 text-sm">
              {currentLanguage["projects-info"].techcards.description}
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-1">
              {currentLanguage["projects-info"].portfolio.name}
            </h3>
            <p className="text-main-color-600 text-sm">
              {currentLanguage["projects-info"].portfolio.description}
            </p>
          </div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-1">
              {currentLanguage["projects-info"].zol.name}
            </h3>
            <p className="text-main-color-600 text-sm">
              {currentLanguage["projects-info"].zol.description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default cv;
