"use client";
import React from "react";
import ProjectCard from "../sub/ProjectCard";
import { motion } from "framer-motion";
import {
    slideInFromLeft, slideInFromRight,
    slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";


const Projects = () => {
    return (
        <div
            className="flex flex-col items-center justify-center -mt-24 py-0 pb-20 z-20 md:py-40"
            id="projects"
        >
            <motion.div
                variants={slideInFromTop}
                className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
            >
                <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
                <h1 className="Welcome-text text-[13px]">
                    My Portfolio
                </h1>
            </motion.div>
            <motion.div
                variants={slideInFromLeft(0.5)}
                className='text-[30px] text-white font-medium mt-[10px] text-center mb-[15px]'
            >
                Crafting Tomorrow's Solutions, One Line of Code at a Time.
            </motion.div>
            <motion.div
                variants={slideInFromRight(0.5)}
                className='cursive text-[12px] text-gray-200 mb-10 mt-[10px] text-center'
            >
                Innovate. Create. Elevate: Unveiling the Power of Digital Possibilities.
            </motion.div>
            <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">Work</h2>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">

                <ProjectCard
                    src="/SAH.png"
                    title="Studentaanhuis"
                    description="At my job, I'm currently a junior web developer and I work on the website of Studentaanhuis."
                    languages={["PugJS","JavaScript", "HTML", "CSS"]}
                    webSkills={["API"]}
                />
                <ProjectCard
                    src="/SAB.png"
                    title="Studentaanbedrijf"
                    description="I worked on the website of Studentaanbedrijf, a subsidiary of Studentaanhuis."
                    languages={["VueJS", "PugJS","JavaScript", "HTML", "CSS"]}
                    webSkills={["API"]}
                />
                <ProjectCard
                    src="/italented.png"
                    title="iTalented"
                    description="Italented is also a subsidiary of Studentaanhuis. I built the website from scratch."
                    languages={["VueJS", "PugJS","JavaScript", "HTML", "CSS"]}
                    webSkills={["API"]}
                />
            </div>
            <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pt-10">Web projects</h2>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 pt-10">
                <ProjectCard
                    src="/puremountain.png"
                    title="Pure Mountain Shilajit"
                    description="A natural testosterone booster where I worked on a Shopify website and also added payment systems."
                    languages={["Shopify"]}
                    webSkills={["SEO", "SEA", "Mollie"]}
                />
                <ProjectCard
                    src="/probanden.png"
                    title="Pro Banden Service"
                    description="A tire garage in Culemborg that has just started and wanted a new website."
                    languages={["Wordpress"]}
                    webSkills={["SEO", "SEA"]}
                />
                <ProjectCard
                    src="/loodgieter.png"
                    title="AD-loodgietersbedrij"
                    description="A plumber in Maarssen asked me to build a simple website. This was built in WordPress and SEO was also worked on."
                    languages={["Wordpress"]}
                    webSkills={["SEO", "SEA"]}
                />
            </div>
            <h2 className="text-xl font-semibold mb-4 text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pt-10">School</h2>
            <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10 pt-10">
                <ProjectCard
                    src="/HGA.png"
                    title="Het gebakken aardappeltje"
                    description="Currently, I am working on a project where I am building a website for a fake AH Culinary Experience. Here chefs can post their recipes on the website and customers can view and replicate them. Filtering by ingredients is possible."
                    languages={["ReactJS", "HTML", "sCSS", "Bootstrap5", "Git"]}
                    webSkills={["API"]}
                />
                <ProjectCard
                    src="/boules.png"
                    title="Boules & Bites"
                    description="For Boules and Bites Bar, I was approached by an external client to solve their problems with too many phone calls and emails. I did this by implementing a FAQ and a chatbot."
                    languages={["AngularJS", "HTML", "sCSS", "Git", "ExpressJS"]}
                    webSkills={["API", "MongoDB"]}
                />
                <ProjectCard
                    src="/ov-app.png"
                    title="OV-app"
                    description="I created a public transport app where customers could view public transport information and add routes to their favorites."
                    languages={["JavaFX", "CSS", "Scenebuilder", "FXML", "API", "Git"]}
                    webSkills={["none"]}
                />
                <ProjectCard
                    src="/zorg.png"
                    title="Zorg-app"
                    description="I was asked to work on a Java console application that uses basic CRUD functionality. It has a menu accessible in the console, showing patient information as well as a chart."
                    languages={["Java", "Git"]}
                    webSkills={["none"]}
                />
            </div>
        </div>
    );
};

export default Projects;
