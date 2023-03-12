import React from "react";
import techcardsImg from "../../public/assets/projects/techcards.png";
import gymguruImg from "../../public/assets/projects/gymguru.png";
import portfolioImg from "../../public/assets/projects/portfolio.png";
import zolImg from "../../public/assets/projects/zol.png";
import ProjectItem from "./ProjectItem";

interface ProjectsLanguageProps {
  languageData: {
    "above-text": string;
    title: string;
    projects: string[];
    "button-text": string;
  };
}

const Projects: React.FC<ProjectsLanguageProps> = ({ languageData }) => {
  return (
    <section id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          {languageData["above-text"]}
        </p>
        <h2 className="py-4">{languageData.title}</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <ProjectItem
            title={languageData.projects[0]}
            backgroundImg={gymguruImg}
            projectUrl="/gymguru"
            tech="Javascript, Node"
            buttonText={languageData["button-text"]}
          />
          <ProjectItem
            title={languageData.projects[1]}
            backgroundImg={techcardsImg}
            projectUrl="/techcards"
            tech="React, Node"
            buttonText={languageData["button-text"]}
          />
          <ProjectItem
            title={languageData.projects[2]}
            backgroundImg={portfolioImg}
            projectUrl="/portfolio"
            tech="Next.js"
            buttonText={languageData["button-text"]}
          />
          <ProjectItem
            title={languageData.projects[3]}
            backgroundImg={zolImg}
            projectUrl="/zol"
            tech="Next.js"
            buttonText={languageData["button-text"]}
          />
        </div>
      </div>
    </section>
  );
};

export default Projects;
