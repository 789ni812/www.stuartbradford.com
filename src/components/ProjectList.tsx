import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Card } from '@/components/Card'
import { projects } from '../lib/projects'
import Image from 'next/image';
import { ArrowPathIcon, CloudArrowUpIcon, LockClosedIcon } from '@heroicons/react/20/solid'

const features = [
    {
        name: 'Push to deploy',
        description:
            'Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.',
        href: '#',
        icon: CloudArrowUpIcon,
    },
    {
        name: 'SSL certificates',
        description:
            'Pellentesque enim a commodo malesuada turpis eleifend risus. Facilisis donec placerat sapien consequat tempor fermentum nibh.',
        href: '#',
        icon: LockClosedIcon,
    },
    {
        name: 'Simple queues',
        description:
            'Pellentesque sit elit congue ante nec amet. Dolor aenean curabitur viverra suspendisse iaculis eget. Nec mollis placerat ultricies euismod ut condimentum.',
        href: '#',
        icon: ArrowPathIcon,
    },
]


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
                    <Card key={project.name} className="items-center justify-center  bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0 p-16">
                    

                        <Image
                        src={project.imageLogo}
                                alt="#"
                                width={150}
                                height={150}
                                className=" rounded-full "
                            />
                        <h2 className="mb-6 text-base font-semibold  dark:text-zinc-100 text-teal-500">
                            <Card.Link href={project.link.href} target="_blank">{project.name}</Card.Link>
                        </h2>


                        <p className="mb-6 flex-auto bg-red-500 text-md text-zinc-400">{listType === "short" ? project.ShortDesc : project.description}</p>

                        <ul role="list" className=" text-zinc-400 flex  items-center justify-center gap-2 text-sm ">
                            {project.technologies.map((item) => (
                                <li key={item.name} className="mb-6 flex-wrap">
                                    <FontAwesomeIcon icon={item.icon} className="h-6 w-6 ml-4" />
                                    <span className="ml-1">{item.name}</span>
                                </li>
                            ))}
                        </ul>
                        <p className="relative z-10 mb-6 flex text-sm   transition  dark:text-zinc-200">
                            <LinkIcon className="h-6 w-6" />
                            <span className="ml-2 text-lg">{project.link.label}</span>
                        </p>
                        
                    </Card>
                

                ))}
            
        </>
    );
};

export default CardProject;