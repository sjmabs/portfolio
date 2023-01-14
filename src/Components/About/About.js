import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-10 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Shaun. 
            <br className="lg:inline-block" />
             
          </h1>
          <h2 className="title-font sm:text-4xl text-3xl mb-4 font-small text-white">
            I love building amazing apps that make life easier.
          </h2>
          <p className="mb-8 leading-relaxed">
            Unlike most developers, I began my working life as a professional singer and actor. Fast-forward a few years, several coding courses later, lots of frustration, and many more lines on the face
            and it brings you to my current path. I found a passion for coding and threw myself in to learn as much as I could. 
            I believe my creative way of thinking, my love for problem solving coupled with 
            my ability to communicate effectively with people from all backgrounds, sets me aside from your <em>average</em> developer.
        
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-700 hover:text-teal-300 rounded text-lg">
              Get In Touch
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-teal-700 border-0 py-2 px-6 focus:outline-none hover:bg-teal-800 hover:text-teal-300 rounded text-lg">
              See My Past Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="me"
            src={require('../images/computer.png')}
          />
        </div>
      </div>
    <br />
    </section>
  );
}