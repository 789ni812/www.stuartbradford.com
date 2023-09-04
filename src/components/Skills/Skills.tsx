import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'
import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faJs } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faAws } from '@fortawesome/free-brands-svg-icons'
import { faNode } from '@fortawesome/free-brands-svg-icons'
import { faServer } from '@fortawesome/free-solid-svg-icons'
import { faLinux } from '@fortawesome/free-brands-svg-icons'
import { faWordpress } from '@fortawesome/free-brands-svg-icons'
import { faDrupal } from '@fortawesome/free-brands-svg-icons'
import { faWindows } from '@fortawesome/free-brands-svg-icons'
import { faDatabase } from '@fortawesome/free-solid-svg-icons'
import { faSyncAlt } from '@fortawesome/free-solid-svg-icons'
import { faCertificate } from '@fortawesome/free-solid-svg-icons'
import { faChartLine } from '@fortawesome/free-solid-svg-icons'
import { faMoneyBill } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faClipboardList } from '@fortawesome/free-solid-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faCogs } from '@fortawesome/free-solid-svg-icons'
import { faPerson } from '@fortawesome/free-solid-svg-icons'
import { faBrain } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { EllipsisVerticalIcon } from '@heroicons/react/20/solid'



const languages = [
    { name: "JavaScript", icon: faJs },
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3 },
    { name: "C#", icon: faCode },
    { name: "TypeScript", icon: faCode }
]


const environments = [
    { name: "React JS", icon: faReact },
    { name: "AWS", icon: faAws },
    { name: "Firebase", icon: faDatabase },
    { name: "Node JS", icon: faNode },
    { name: "NGINX", icon: faServer },
    { name: "Apache", icon: faServer },
    { name: "Linux", icon: faLinux },
    { name: "Windows", icon: faWindows },
    { name: "Drupal", icon: faDrupal },
    { name: "WordPress", icon: faWordpress },
    { name: "Unity", icon: faCode }
]

const technology = [
    { name: "React JS", icon: faReact },
    { name: "JavaScript", icon: faJs },
    { name: "HTML", icon: faHtml5 },
    { name: "CSS", icon: faCss3 },
    { name: "AWS", icon: faCode },
    { name: "Firebase", icon: faDatabase },
    { name: "Node JS", icon: faNode },
    { name: "NGINX", icon: faServer },
    { name: "Apache", icon: faServer },
    { name: "Linux", icon: faLinux },
    { name: "Windows", icon: faWindows },
    { name: "Drupal", icon: faDrupal },
    { name: "WordPress", icon: faWordpress },
]

const pm = [
    { name: "Agile Methodologies", icon: faSyncAlt },
    { name: "Certified Scrum Master", icon: faCertificate },
    { name: "Kanban / Scrum / Jira", icon: faChartLine },
    { name: "Requirements Gathering", icon: faCheckSquare },
    { name: "Resource Allocation", icon: faClipboardList },
    { name: "Budget and Timeline Control", icon: faMoneyBill },
    { name: "Team Hiring and management", icon: faUsers }
]

const skills = [
    { name: "Full Stack Development", icon: faCode }, { name: "Software Engineering", icon: faCogs }, { name: "Web Accessibility Design", icon: faPerson }, { name: "Business Intelligence", icon: faBrain }, { name: "UI/UX experience", icon: faClipboardList }, { name: "Global Web Presence Management", icon: faGlobe }, { name: "IT Infrastructure & Server Management", icon: faServer }, { name: "SEO", icon: faClipboardList }
]


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}


const Skills = () => {
    return (
        <>
            <div className="mb-6 max-w-2xl">
                <h3 className="mb-6 text-1xl font-semibold dark:text-zinc-100 ">Languages:</h3>
                <ul role="list" className="mt-3 dark:text-zinc-100">

                    {languages.map((item) => (
                        <li key={item.name} className="col-span-1 flex rounded-md shadow-sm">
                            <div
                               className='flex w-16 flex-shrink-0 items-center justify-center'
                            >
                                <FontAwesomeIcon icon={item.icon} className="h-6 w-6 mr-2" />
                            </div>
                            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 ">
                                <div className="flex-1 truncate px-4 py-2 text-sm">
                                    <a href="#" className="font-medium text-gray-900 hover:text-gray-600">
                                        {item.name}
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="mb-6 max-w-2xl">
                <h3 className="mb-6  text-1xl font-semibold dark:text-zinc-100">Environments:</h3>
                <ul role="list" className="mt-3  dark:text-zinc-100">
                    {environments.map((item) => (
                        <li key={item.name} className="col-span-1 flex rounded-md shadow-sm">
                            <div
                           className='flex w-16 flex-shrink-0 items-center justify-center'
                            >
                                <FontAwesomeIcon icon={item.icon} className="h-6 w-6 mr-2" />
                            </div>
                            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 ">
                                <div className="flex-1 truncate px-4 py-2 text-sm">
                                    <a href="#" className="font-medium text-gray-900 hover:text-gray-600">
                                        {item.name}
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>




            <div className="mb-6 max-w-2xl">
                <h3 className="mb-6 text-1xl font-semibold dark:text-zinc-100">Skills:</h3>
                <ul role="list" className="mt-3 dark:text-zinc-100">
                    {pm.map((item) => (
                        <li key={item.name} className="col-span-1 flex rounded-md shadow-sm">
                            <div
                                className='flex w-16 flex-shrink-0 items-center justify-center'
                            >
                                <FontAwesomeIcon icon={item.icon} className="h-6 w-6 mr-2" />
                            </div>
                            <div className="flex flex-1 items-center justify-between truncate rounded-r-md border-b border-r border-t border-gray-200 ">
                                <div className="flex-1 truncate px-4 py-2 text-sm">
                                    <a href="#" className="font-medium text-gray-900 hover:text-gray-600">
                                        {item.name}
                                    </a>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>






























         
        </>
    )
}

export default Skills;
