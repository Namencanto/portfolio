import Image, { StaticImageData } from "next/image";
import React from "react";
import { RiRadioButtonFill } from "react-icons/ri";
import Link from "next/link";
import { GetStaticPaths, GetStaticProps, GetStaticPropsContext } from "next";

import TechcardsImage from "../../public/assets/projects/techcards.png";
import GymGuruImage from "../../public/assets/projects/gymguru.png";
import PortfolioImage from "../../public/assets/projects/portfolio.png";
import ZolImage from "../../public/assets/projects/zol.png";
import Head from "next/head";

interface ProjectLanguageProps {
  languageDataEn: {
    "above-text": string;
    title: string;
    "code-button": string;
    "demo-button": string;
    "back-button": string;
    "technology-list-title": string;
    name: string;
    "main-technologies": string;
    "all-technologies": string[];
    description: string[];
  };
  languageDataPl: {
    "above-text": string;
    title: string;
    "code-button": string;
    "demo-button": string;
    "back-button": string;
    "technology-list-title": string;
    name: string;
    "main-technologies": string;
    "all-technologies": string[];
    description: string[];
  };
  currentLanguage: {
    lang: string;
    navbar: {
      list: string[];
      description: string;
      "contact-description": string;
    };
    main: {
      "above-text": string;
      title: {
        greeting: string;
        name: string;
        position: string;
      };
      description: string;
    };
    about: {
      "above-text": string;
      title: string;
      description: string[];
      "button-text": string;
    };
    skills: {
      "above-text": string;
      title: string;
    };
    projects: {
      "above-text": string;
      title: string;
      projects: string[];
    };
    contact: {
      "above-text": string;
      title: string;
      "full-name": string;
      position: string;
      "job-status": string;
      "contact-description": string;
      form: {
        name: string;
        phone: string;
        email: string;
        subject: string;
        message: string;
        "button-text": string;
      };
    };
  };
  imageData: StaticImageData;
  demoLink: string;
  codeLink: string;
}

const project: React.FC<ProjectLanguageProps> = ({
  languageDataEn,
  languageDataPl,
  currentLanguage,
  imageData,
  demoLink,
  codeLink,
}) => {
  const languageData =
    currentLanguage.lang === "en"
      ? languageDataEn
      : currentLanguage.lang === "pl"
      ? languageDataPl
      : null;
  if (languageData !== null) {
    return (
      <>
        <Head>
          <title>{`${currentLanguage.lang === "en" ? "Project" : "Projekt"} ${
            languageData.name
          } - Mateusz Ordon | Front-End Developer`}</title>
        </Head>
        <div className="w-full">
          <div className="w-screen h-[50vh] relative">
            <div className="absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10" />
            <Image
              className="absolute z-1"
              fill={true}
              src={imageData}
              alt="/"
              style={{ objectFit: "cover" }}
            />
            <div className="absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2">
              <h1 className="py-2">{languageData.name}</h1>
              <h3>{languageData["main-technologies"]}</h3>
            </div>
          </div>

          <div className="max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8">
            <div className="col-span-4">
              <p>{languageData["above-text"]}</p>
              <h2>{languageData.title}</h2>

              {languageData.description.map((text, i) => {
                return (
                  <p key={i} className="py-2">
                    {text}
                  </p>
                );
              })}
              <a href={codeLink} target="_blank" rel="noreferrer">
                <button className=" shadow-default-xl px-8 py-2 mt-4 mr-8">
                  {languageData["code-button"]}
                </button>
              </a>
              <a href={demoLink} target="_blank" rel="noreferrer">
                <button className="shadow-default-xl px-8 py-2 mt-4">
                  {languageData["demo-button"]}
                </button>
              </a>
            </div>
            <div className="col-span-4 md:col-span-1 shadow-default-xl rounded-xl py-4">
              <div className="p-2">
                <p className="text-center font-bold pb-2">
                  {languageData["technology-list-title"]}
                </p>
                <div className="grid grid-cols-3 md:grid-cols-1">
                  {languageData["all-technologies"].map((technology, i) => {
                    return (
                      <p
                        key={i}
                        className="text-main-color-600 py-2 flex items-center"
                      >
                        <RiRadioButtonFill className="pr-1" /> {technology}
                      </p>
                    );
                  })}
                </div>
              </div>
            </div>
            <Link href="/#projects">
              <p className="underline cursor-pointer">
                {languageData["back-button"]}
              </p>
            </Link>
          </div>
        </div>
      </>
    );
  } else {
    throw new Error();
  }
};

export const getStaticPaths: GetStaticPaths = async () => {
  // Define the possible values for params.project
  const projects = [
    {
      project: "gymguru",
    },
    {
      project: "techcards",
    },
    {
      project: "portfolio",
    },
    {
      project: "zol",
    },
  ];

  // Get the paths for each project
  const paths = projects.map((project) => ({
    params: project,
  }));

  // Return the paths and make all of them available for statically optimized builds
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (
  context: GetStaticPropsContext
) => {
  const languageDataEn = await import(`../static/languages/en.json`);
  const languageDataPl = await import(`../static/languages/pl.json`);
  const params = context.params!.project as string;

  const {
    gymguruDemoLink,
    techcardsDemoLink,
    zolDemoLink,
    gymguruCodeLink,
    techcardsCodeLink,
    zolCodeLink,
    portfolioCodeLink,
  } = await import(`../static/links`);
  if (
    params === "gymguru" ||
    params === "techcards" ||
    params === "portfolio" ||
    params === "zol"
  ) {
    let demoLink = "";
    let codeLink = "";
    let imageData: StaticImageData | undefined;

    if (params === "gymguru") {
      demoLink = gymguruDemoLink;
      codeLink = gymguruCodeLink;
      imageData = GymGuruImage;
    }
    if (params === "techcards") {
      demoLink = techcardsDemoLink;
      codeLink = techcardsCodeLink;
      imageData = TechcardsImage;
    }
    if (params === "zol") {
      demoLink = zolDemoLink;
      codeLink = zolCodeLink;
      imageData = ZolImage;
    }
    if (params === "portfolio") {
      demoLink = "/";
      codeLink = portfolioCodeLink;
      imageData = PortfolioImage;
    }

    return {
      props: {
        languageDataEn: {
          "above-text": languageDataEn["projects-info"]["above-text"],
          title: languageDataEn["projects-info"]["title"],
          "code-button": languageDataEn["projects-info"]["code-button"],
          "demo-button": languageDataEn["projects-info"]["demo-button"],
          "back-button": languageDataEn["projects-info"]["back-button"],
          "technology-list-title":
            languageDataEn["projects-info"]["technology-list-title"],
          ...languageDataEn["projects-info"][params],
        },
        languageDataPl: {
          "above-text": languageDataPl["projects-info"]["above-text"],
          title: languageDataPl["projects-info"]["title"],
          "code-button": languageDataPl["projects-info"]["code-button"],
          "demo-button": languageDataPl["projects-info"]["demo-button"],
          "back-button": languageDataPl["projects-info"]["back-button"],
          "technology-list-title":
            languageDataPl["projects-info"]["technology-list-title"],
          ...languageDataPl["projects-info"][params],
        },
        imageData,
        demoLink,
        codeLink,
      },
    };
  } else {
    throw new Error();
  }
};

export default project;
