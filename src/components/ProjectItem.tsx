import Image from "next/image";
import Link from "next/link";
import React from "react";
import { StaticImageData } from "next/image";
interface ProjectItemProps {
  title: string;
  backgroundImg: StaticImageData;
  projectUrl: string;
  tech: string;
  buttonText: string;
  ariaLabel: string;
  imageAlt: string;
}

const ProjectItem: React.FC<ProjectItemProps> = ({
  title,
  backgroundImg,
  tech,
  projectUrl,
  buttonText,
  ariaLabel,
  imageAlt,
}) => {
  return (
    <article
      aria-label={ariaLabel}
      className="relative flex items-center justify-center h-full w-full shadow-default-xl rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff]"
    >
      <Image
        className="rounded-xl group-hover:opacity-10 h-full"
        src={backgroundImg}
        alt={imageAlt}
      />
      <div className="hidden group-hover:block absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wider text-center">
          {title}
        </h3>
        <p className="pb-4 pt-2 text-white text-center">{tech}</p>
        <Link href={projectUrl}>
          <p className="text-center py-3 rounded-lg bg-white text-gray-700 font-bold text-lg cursor-pointer">
            {buttonText}
          </p>
        </Link>
      </div>
    </article>
  );
};

export default ProjectItem;
