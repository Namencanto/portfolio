import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

interface MainLanguageProps {
  languageData: {
    "above-text": string;
    title: {
      greeting: string;
      name: string;
      position: string;
    };
    description: string;
  };
}

const Main: React.FC<MainLanguageProps> = ({ languageData }) => {
  return (
    <div className="w-full h-screen text-center">
      <div className="max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center">
        <div>
          <p className="uppercase text-sm ">{languageData["above-text"]}</p>
          <h1 className="py-4 text-gray-700">
            {languageData.title.greeting}{" "}
            <span className="text-color-text-primary">
              {languageData.title.name}
            </span>
          </h1>
          <h1 className="py-4 text-gray-700">{languageData.title.position}</h1>
          <p className="py-4 text-gray-600 max-w-[70%] m-auto">
            {languageData.description}
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaLinkedinIn />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <FaGithub />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <AiOutlineMail />
            </div>
            <div className="rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
              <BsFillPersonLinesFill />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
