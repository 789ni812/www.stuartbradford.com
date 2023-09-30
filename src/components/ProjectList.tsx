import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card } from '@/components/Card'
import { projects } from '../lib/projects'
import Image from 'next/image';
import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'




function LinkIcon(props) {
    return (
        <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
            <path
                d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
                fill="currentColor"
            />
        </svg>
    )
}


const CardProject = ({ listType = "" }) => {
    return (
        <>
            {projects.map((project) => (
                card(project, listType)
            ))}

        </>
    );
};

export default CardProject;


function card(project, listType: string): React.JSX.Element {
    return (
        <>
        <div className="container mx-auto p-10 md:p-20 transform duration-500">
        <div className="flex flex-wrap shadow-lg mx-auto max-w-xl dark:bg-gray-400">
            <Image
            src={project.imageLogo}
            alt="#"
            
            className='w-full h-auto max-w-3xl'
        />
        
            <div className="p-10 my-auto">
                <h1 className="text-2xl font-semibold text-gray-800 dark:text-zinc-100">{project.name}</h1>
                <p className="text-base text-gray-400 mt-2 mb-6 flex-auto p-24 ">{listType === "short" ? project.ShortDesc : project.description}</p>
            </div>
            <ul role="list" className="flex flex-wrap gap-6 px-4 items-center justify-center text-sm text-zinc-400">
  {project.technologies.map((item) => (
    <li key={item.name} className="flex flex-col items-center mb-6">
      <FontAwesomeIcon icon={item.icon} className="h-6 w-6" />
      <span className="ml-1 mt-2">{item.name}</span>
    </li>
  ))}
</ul>


            <h2 className="mb-6 text-base font-semibold  dark:text-zinc-100 text-teal-500 ">
            {project.name}
        </h2>
        </div>
    </div>
    </>
    )
}