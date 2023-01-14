import { CpuChipIcon } from "@heroicons/react/24/solid";
import React from "react";
import { skills } from '../../data';
import SkillsCard from "../SkillsCard/SkillsCard";

export default function Skills() {
  return (
    <section id="skills">
      <div className="container px-5 py-10 mx-auto ">
        <div className="text-center mb-20">
          <CpuChipIcon className="w-10 text-orange-400 inline-block mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font text-white mb-4">
            Skills &amp; Technologies
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto -mb-10">
            Below are a list of Skills and Technologies I use. I also have vast knowledge in hardware and software support as well as working in
            management and cosultancy positons during my time as Deputy IT Operations Manager and IT Consultant respectively. 
          </p>
        </div>
        <SkillsCard
          skills={skills} />
      </div>
    </section>
  );
}