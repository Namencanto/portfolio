import Head from "next/head";
import { Inter } from "@next/font/google";

import Main from "src/components/Main";
import About from "src/components/About";
import Skills from "src/components/Skills";
import Projects from "src/components/Projects";

import Contact from "src/components/Contact";

interface HomeLanguageProps {
  lang: string;
  currentLanguage: {
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
      "button-text": string;
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
  isDarkMode: boolean;
}

const Home: React.FC<HomeLanguageProps> = ({ currentLanguage, isDarkMode }) => {
  return (
    <>
      <Head>
        <title>Mateusz Ordon | Front-End Developer</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Main languageData={currentLanguage.main} />
      <About languageData={currentLanguage.about} />
      <Skills languageData={currentLanguage.skills} isDarkMode={isDarkMode} />
      <Projects languageData={currentLanguage.projects} />
      <Contact languageData={currentLanguage.contact} />
    </>
  );
};

export default Home;
