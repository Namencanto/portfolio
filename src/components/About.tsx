import React from "react";
import AboutImg from "../../public/assets/AboutImg.jpg";
import Image from "next/image";

interface MainLanguageProps {
  languageData: {
    "above-text": string;
    title: string;
    description: string[];
    "button-text": string;
  };
}

const About: React.FC<MainLanguageProps> = ({ languageData }) => {
  return (
    <div id="about" className="w-full md:h-screen p-2 flex items-center py-16">
      <div className="max-w-[1240px] m-auto md:grid grid-cols-3 gap-8">
        <div className="col-span-2">
          <p className="uppercase text-xl tracking-widest text-color-text-primary">
            {languageData["above-text"]}
          </p>
          <h2 className="py-4"> {languageData.title}</h2>
          <p className="py-2 tex-gray-600">{languageData.description[0]}</p>
          <p className="py-2 tex-gray-600">{languageData.description[1]}</p>
          <p className="py-2 tex-gray-600 underline cursor-pointer">
            {languageData["button-text"]}
          </p>
        </div>
        <div className="w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300">
          <Image className="rounded" src={AboutImg} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
