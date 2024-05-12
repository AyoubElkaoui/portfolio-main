import Image from "next/image";
import React from "react";


interface Props {
    src: string;
    title: string;
    description: string;
    languages: string[];
    webSkills: string[];
}

const ProjectCard = ({ src, title, description, webSkills, languages }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] w-full">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full h-72 object-cover"
      />

      <div className="relative p-4">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <div className="mt-2"><hr/></div>

      <div className="mt-4">
          <h2 className="text-lg font-semibold text-white">Languages:</h2>
          <ul className="text-gray-300">
              {languages.map((language, index) => (
                  <li key={index}>{language}</li>
              ))}
          </ul>
      </div>
      <div className="mt-4">
          <h2 className="text-lg font-semibold text-white">Web Development Skills:</h2>
          <ul className="text-gray-300">
              {webSkills.map((skill, index) => (
                  <li key={index}>{skill}</li>
              ))}
          </ul>
          </div>
      </div>
    </div>
  );
};

export default ProjectCard;
