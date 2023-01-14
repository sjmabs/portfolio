import React from 'react'
import { CheckBadgeIcon } from "@heroicons/react/24/solid";

const SkillsCard = ({skills}) => {
    return (
    <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2 justify-center">
          {skills.map((skill) => (
            <div key={skill} className="p-2 sm:w-1/2 w-full">
              <div className="bg-teal-800 rounded flex p-4 h-full items-center">
                <CheckBadgeIcon className="text-orange-400 w-6 h-6 flex-shrink-0 mr-4" />
                <span className="title-font font-medium text-white">
                  {skill}
                </span>
              </div>
            </div>
          ))}
        </div>
  
  )
}

export default SkillsCard


