"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
      <motion.div
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center justify-center px-5 pt-20 pb-72 md:px-40 mt-24 md:mt-40 w-full md:pb-0 md:pt-0 z-[20]"
      >
        <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start pt-16">
          <motion.div
              variants={slideInFromTop}
              className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">About me</h1>
          </motion.div>

          <motion.div
              variants={slideInFromLeft(0.5)}
              className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
          >
          <span>
            Ayoub
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              El Kaoui{" "}
            </span>
            <br />Full stack developer
          </span>
          </motion.div>

          <motion.p
              variants={slideInFromLeft(0.8)}
              className="text-lg text-gray-400 my-5 max-w-[600px]"
          >
            Welcome! I&apos;m Ayoub El Kaoui, a 24-year-old student software developer currently
            studying at Hogeschool Utrecht. I&apos;m deeply passionate about coding and constantly seeking
            new opportunities to learn and grow. Join me on this journey as I showcase my projects and
            share my enthusiasm for the world of software development. Let&apos;s innovate together!
          </motion.p>
          <motion.a
              variants={slideInFromLeft(1)}
              className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          >
            <a href={"#skills"}>Learn More!</a>
          </motion.a>
        </div>

        <motion.div
            variants={slideInFromRight(0.8)}
            className="w-full h-full flex justify-end items-end -mt-96"
        >
          <Image
              className="-mt-32 mobile-hidden"
              src="/mainIconsdark.svg"
              alt="work icons"
              height={650}
              width={650}
          />
        </motion.div>
      </motion.div>
  );
};

export default HeroContent;