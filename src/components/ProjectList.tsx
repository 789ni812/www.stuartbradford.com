import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card } from '@/components/Card'
import { projects } from '../lib/projects'
import Image from 'next/image';
import Link from 'next/link';
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
    // return (
    //     <>
    //         {projects.map((project) => (

    //             card(project, listType)

    //         ))}

    //     </>
    // );
    return (
        <>

            {projects.map((project) => (
                <Card key={project.name} className="gap-2 relative z-10  items-center justify-center   shadow-md shadow-zinc-800/5  ring-zinc-900/5 border border-zinc-700/50 bg-zinc-800 ring-0">
                    <Image
                        src={project.imageLogo}
                        alt="#"
                        width={460}
                        className='h-auto relative z-10'
                    />

                    <h2 className="mt-6 text-base font-semibold  text-zinc-100 ">
                        <Card.Link href={project.link.href} target="_blank">{project.name}</Card.Link>
                    </h2>

                    <p className="mt-2 text-md   text-zinc-300 relative z-10">{listType === "short" ? project.ShortDesc : project.description}</p>

                    <ul role="list" className="mt-6 flex flex-wrap gap-6 px-4 items-center justify-center text-sm text-zinc-400 relative z-10">
                        {project.technologies.map((item) => (
                            <li key={item.name} className="flex flex-col items-center mb-6">
                                <FontAwesomeIcon icon={item.icon} className="h-6 w-6" />
                                <span className="ml-1 mt-2">{item.name}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="relative z-10 mb-6 flex text-sm font-medium  transition group-hover:text-teal-500 hover:text-2xl text-zinc-200">
                        <LinkIcon className="h-6 w-6 flex-none" />
                        <span className="ml-2 text-lg">{project.link.label}</span>
                    </p>
                </Card>
            ))}

        </>
    );
};

export default CardProject;





function card(project, listType: string): React.JSX.Element {
    return (
        <>

            {projects.map((project) => (
                <Card key={project.name} className="gap-2 relative z-10  items-center justify-center   shadow-md shadow-zinc-800/5 ring-zinc-900/5 border border-zinc-700/50 bg-zinc-800 ring-0">




                    <Image
                        src={project.imageLogo}
                        alt="#"

                        className='w-full h-auto max-w-2xl relative z-10'
                    />

                    <h2 className="mt-6 text-base font-semibold  text-zinc-100 ">
                        <Card.Link href={project.link.href} target="_blank">{project.name}</Card.Link>
                    </h2>


                    <p className="mt-2 text-md  text-zinc-300 relative z-10">{listType === "short" ? project.ShortDesc : project.description}</p>

                    <ul role="list" className="mt-6 flex flex-wrap gap-6 px-4 items-center justify-center text-sm text-zinc-400 relative z-10">
                        {project.technologies.map((item) => (
                            <li key={item.name} className="flex flex-col items-center mb-6">
                                <FontAwesomeIcon icon={item.icon} className="h-6 w-6" />
                                <span className="ml-1 mt-2">{item.name}</span>
                            </li>
                        ))}
                    </ul>
                    <p className="relative z-10 mb-6 flex text-sm font-medium  transition group-hover:text-teal-500 hover:text-2xl text-zinc-200">
                        <LinkIcon className="h-6 w-6 flex-none" />
                        <span className="ml-2 text-lg">{project.link.label}</span>
                    </p>
                </Card>


            ))}

        </>
    );
}



