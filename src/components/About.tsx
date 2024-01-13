import React from "react";
import AboutImg from "../../public/assets/AboutImg.jpg";
import Image from "next/image";
import Link from "next/link";

interface MainLanguageProps {
  languageData: {
    "above-text": string;
    title: string;
    description: string[];
    "button-text": string;
  };
  language: "en" | "pl";
}

const About: React.FC<MainLanguageProps> = ({ languageData, language }) => {
  return (
    <section
      id="about"
      className="w-full md:h-screen p-2 flex items-center py-16"
    >
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-color-text-primary">
            {languageData["above-text"]}
          </p>
          <h2 className="py-4"> {languageData.title}</h2>
          <p
            className="py-2 tex-gray-600"
            dangerouslySetInnerHTML={{ __html: languageData.description[0] }}
          ></p>
          <p className="py-2 tex-gray-600">{languageData.description[1]}</p>
          <Link
            href="#projects"
            className="py-2 tex-gray-600 underline cursor-pointer"
          >
            {languageData["button-text"]}
          </Link>
        </div>
        <div className="w-full h-auto m-auto shadow-default-xl rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image
            className="rounded"
            src={AboutImg}
            alt={
              language === "en" ? "Laptop illustration" : "Ilustracja laptopa"
            }
          />
        </div>
      </div>
    </section>
  );
};

export default About;
