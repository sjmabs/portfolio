import { CodeBracketIcon } from "@heroicons/react/24/solid";
import React from "react";
import ProjectCard from "../ProjectCard/ProjectCard";
import { projects } from '../../data';

export default function ProjectsBox() {
  return (
    <section id="projects" className="text-teal-400 bg-teal-900 body-font">
      <div  className="w-full px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-100 h-100 mb-10">
        <CodeBracketIcon className="mx-auto text-orange-400 inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Here are some of the applications I have built. 
            Click the images below to see more information such as technologies or languages used and a link to the functioning application if it has been made available.
          </p>
        </div>
        <div className="flex flex-wrap w-full justify-center">
        {
        projects.map((project, i) => {
            return (
            <ProjectCard
                key={projects[i].name}
                name={projects[i].name}
                img={projects[i].img}
                skills={projects[i].skills}
                link={projects[i].link}
                description={projects[i].description}
                />
                );
            })
        }
        </div>
      </div>
    </section>
  )
}

