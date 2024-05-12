import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Skill_data,
} from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-20 py-20 z-20"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Backend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>
      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
      <div className="container mx-auto px-4 text-white pt-10">
        <p className="text-xl text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]">
          Programming Languages & Technologies:
        </p>
        <div className="flex justify-center">
          <ul className="list-disc">
            <li>Java: Proficient in Java programming with experience in developing desktop applications using JavaFX.</li>
            <li>Web Development: Skilled in building responsive and visually appealing websites using HTML, CSS, SCSS,
              <br />and Bootstrap. Familiar with Tailwind CSS for efficient styling.</li>
            <li>JavaScript: Experienced in client-side scripting with vanilla JavaScript, and proficient in modern <br />
              frameworks/libraries like React, Angular, and Vue.js for dynamic web application development.</li>
            <li>Template Engines: Proficient in Pug (formerly Jade) for efficient HTML templating.</li>
            <li>SQL: Proficient in writing SQL queries for relational databases.</li>
            <li>MySQL: Experienced in MySQL database management and query optimization.</li>
            <li>Firebase: Familiar with Firebase for real-time database and authentication.</li>
            <li>MongoDB: Proficient in NoSQL database management using MongoDB.</li>
          </ul>
        </div>

      </div>
    </section>


  );
};

export default Skills;
