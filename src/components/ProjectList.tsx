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
                card1(project, listType)
                // card2(project, listType)
            ))}

        </>
    );
};

export default CardProject;

function card1(project, listType: string): React.JSX.Element {
    return <Card key={project.name} className="items-center justify-center  bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">

        <Image
            src={project.imageLogo}
            alt="#"
            height={150}
            className='relative z-10'
        />

        <h2 className="mb-6 text-base font-semibold  dark:text-zinc-100 text-teal-500">
            <Card.Link href={project.link.href} target="_blank">{project.name}</Card.Link>
        </h2>


        <p className="mb-6 flex-auto p-24  text-zinc-400">{listType === "short" ? project.ShortDesc : project.description}</p>

        <ul role="list" className=" text-zinc-400 flex-auto md:flex sm:flex-wrap  items-center justify-center gap-2 text-sm ">
            {project.technologies.map((item) => (
                <li key={item.name} className="mb-6">
                    <FontAwesomeIcon icon={item.icon} className="h-6 w-6 ml-4" />
                    <span className="ml-1">{item.name}</span>
                </li>
            ))}
        </ul>
        <p className="relative z-10 mb-6 flex text-sm   transition  dark:text-zinc-200">
            <LinkIcon className="h-6 w-6" />
            <span className="ml-2 text-lg">{project.link.label}</span>
        </p>

    </Card>;
}

function card2(project, listType: string): React.JSX.Element {
    return (
        <div key={project.name}>
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="flex flex-col items-center w-full max-w-xs p-4 bg-white rounded-3xl md:flex-row ">
                    {/* <div className="-mt-28 md:-my-16 md:-ml-32" style="clip-path: url(#roundedPolygon)"> */}
                    <div className="-mt-28 md:-my-16 md:-ml-32" >
                        {/* <img
                            className="w-auto h-48"
                            src="https://avatars.githubusercontent.com/u/57622665?s=460&u=8f581f4c4acd4c18c33a87b3e6476112325e8b38&v=4"
                            alt="Ahmed Kamel"
                        /> */}
                        <Image
                            src={project.imageLogo}
                            alt="#"
                            width={150}
                            height={150}
                            className="w-16 h-auto" />
                    </div>
                    <div className="flex flex-col space-y-4">
                        <div className="flex flex-col items-center md:items-start">
                            <h2 className="text-xl font-medium">Ahmed Kamel</h2>
                            <p className="text-base font-medium text-gray-400">Full Stack Developer</p>
                        </div>
                        <div className="flex items-center justify-center space-x-3 md:justify-start">
                            {/* <!-- Icons source => https://boxicons.com/ --> */}
                            <a
                                href="https://twitter.com/ak_kamona"
                                target="_blank"
                                className="transition-transform transform hover:scale-125" rel="noreferrer noopener"
                            >
                                <span className="sr-only">Twitter</span>
                                <svg
                                    aria-hidden="true"
                                    className="w-8 h-8 text-blue-500"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809 c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793 c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05 c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032 c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028 c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22 c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"
                                    ></path>
                                </svg>
                            </a>
                            <a
                                href="https://github.com/Kamona-WD"
                                target="_blank"
                                className="transition-transform transform hover:scale-125" rel="noreferrer noopener"
                            >
                                <span className="sr-only">Github</span>
                                <svg
                                    aria-hidden="true"
                                    className="w-8 h-8 text-black"
                                    fill="currentColor"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path
                                        fill-rule="evenodd"
                                        clip-rule="evenodd"
                                        d="M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.857,8.145,6.821,9.465 c0.499,0.09,0.679-0.217,0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,0.602-3.361-1.338-3.361-1.338 c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,1.028 c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,0.351-1.085,0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93 c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,0.099-2.64c0,0,0.837-0.269,2.742,1.021 c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,2.742-1.021 c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,4.922 c0.355,0.308,0.675,0.916,0.675,1.846c0,1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,0.687,0.479 C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,2,12.026,2z"
                                    ></path>
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>



                <svg width="0" height="0" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                        {/* <!-- rounded polygon generator => https://weareoutman.github.io/rounded-polygon/ --> */}
                        {/* <!-- polygon size 190 * 190 almost the same size as the image --> */}
                        <clipPath id="roundedPolygon">
                            <path
                                d="M79 6.237604307034a32 32 0 0 1 32 0l52.870489570875 30.524791385932a32 32 0 0 1 16 27.712812921102l0 61.049582771864a32 32 0 0 1 -16 27.712812921102l-52.870489570875 30.524791385932a32 32 0 0 1 -32 0l-52.870489570875 -30.524791385932a32 32 0 0 1 -16 -27.712812921102l0 -61.049582771864a32 32 0 0 1 16 -27.712812921102"
                            />
                        </clipPath>
                    </defs>
                </svg>
            </div>


            <div className="fixed bottom-5 right-5 flex items-center space-x-4">
                <a href="https://twitter.com/ak_kamona" target="_blank" className="transition-transform transform hover:scale-125" rel="noreferrer noopener">
                    <span className="sr-only">Twitter</span>
                    <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-blue-500"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path d="M19.633,7.997c0.013,0.175,0.013,0.349,0.013,0.523c0,5.325-4.053,11.461-11.46,11.461c-2.282,0-4.402-0.661-6.186-1.809 c0.324,0.037,0.636,0.05,0.973,0.05c1.883,0,3.616-0.636,5.001-1.721c-1.771-0.037-3.255-1.197-3.767-2.793 c0.249,0.037,0.499,0.062,0.761,0.062c0.361,0,0.724-0.05,1.061-0.137c-1.847-0.374-3.23-1.995-3.23-3.953v-0.05 c0.537,0.299,1.16,0.486,1.82,0.511C3.534,9.419,2.823,8.184,2.823,6.787c0-0.748,0.199-1.434,0.548-2.032 c1.983,2.443,4.964,4.04,8.306,4.215c-0.062-0.3-0.1-0.611-0.1-0.923c0-2.22,1.796-4.028,4.028-4.028 c1.16,0,2.207,0.486,2.943,1.272c0.91-0.175,1.782-0.512,2.556-0.973c-0.299,0.935-0.936,1.721-1.771,2.22 c0.811-0.088,1.597-0.312,2.319-0.624C21.104,6.712,20.419,7.423,19.633,7.997z"
                        ></path>
                    </svg>
                </a>
                <a href="https://github.com/Kamona-WD" target="_blank" className="transition-transform transform hover:scale-125" rel="noreferrer noopener">
                    <span className="sr-only">Github</span>
                    <svg
                        aria-hidden="true"
                        className="w-8 h-8 text-black"
                        fill="currentColor"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                    >
                        <path
                            fill-rule="evenodd"
                            clip-rule="evenodd"
                            d="M12.026,2c-5.509,0-9.974,4.465-9.974,9.974c0,4.406,2.857,8.145,6.821,9.465 c0.499,0.09,0.679-0.217,0.679-0.481c0-0.237-0.008-0.865-0.011-1.696c-2.775,0.602-3.361-1.338-3.361-1.338 c-0.452-1.152-1.107-1.459-1.107-1.459c-0.905-0.619,0.069-0.605,0.069-0.605c1.002,0.07,1.527,1.028,1.527,1.028 c0.89,1.524,2.336,1.084,2.902,0.829c0.091-0.645,0.351-1.085,0.635-1.334c-2.214-0.251-4.542-1.107-4.542-4.93 c0-1.087,0.389-1.979,1.024-2.675c-0.101-0.253-0.446-1.268,0.099-2.64c0,0,0.837-0.269,2.742,1.021 c0.798-0.221,1.649-0.332,2.496-0.336c0.849,0.004,1.701,0.115,2.496,0.336c1.906-1.291,2.742-1.021,2.742-1.021 c0.545,1.372,0.203,2.387,0.099,2.64c0.64,0.696,1.024,1.587,1.024,2.675c0,3.833-2.33,4.675-4.552,4.922 c0.355,0.308,0.675,0.916,0.675,1.846c0,1.334-0.012,2.41-0.012,2.737c0,0.267,0.178,0.577,0.687,0.479 C19.146,20.115,22,16.379,22,11.974C22,6.465,17.535,2,12.026,2z"
                        ></path>
                    </svg>
                </a>
            </div>

        </div>
    )
}
