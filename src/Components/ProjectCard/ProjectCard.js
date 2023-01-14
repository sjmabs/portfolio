import React from "react";
import { useState } from "react";


export default function ProjectCard({ name, img, link, description, skills }) {
  const [isActive, setIsActive] = useState(false);

  const handleClick = event => {
    setIsActive(current => !current);
  };


  let anchor = ""
  if (link) {
      anchor =
        <a  
          href={link}
          rel="noreferrer"
          target="_blank"
          className="text-white sm:w-1/2 w-100 p-4">
          See App
        </a>
      } else {
        anchor = ""
      }


  return (
    <div key={name} className="max-w-md border-4 border-teal-800 flex relative m-2" >
        <img
            alt="gallery"
            className="absolute w-full h-full object-cover object-center"
            src={img}
          />
        <div className={isActive ? "px-8 py-10 relative z-10 h-full w-full bg-teal-900 opacity-100" : 
                                    "px-8 py-10 relative z-10 h-full w-full bg-teal-900 opacity-0"} 
              onClick={handleClick}>
            <h2 className="tracking-widest text-sm title-font font-medium text-orange-400 mb-1">
            {skills}
            </h2>
            <h1 className="title-font text-lg font-medium text-white mb-3">
            {name}
            </h1>
            <p className="leading-relaxed  mb-3">{description}</p>
            {anchor}
          </div>
      </div>

  )
}

//   return (
//     <div >
//       {projects.map((project) => (
//         <div key={project.name} className="max-w-md border-4 border-teal-800 relative m-2 justify-center" >          

//           
//         </div>
//       ))}
//     </div>

  
// )
// 
  