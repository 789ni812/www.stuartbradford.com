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

const Skills = () => {
    return (
        <>
            <div className="grid pt-16 sm:grid-cols-2 gap-4 text-zinc-800 dark:text-zinc-100 sm:text-left">
                <h3 className="mb-3 text-1xl font-semibold">Languages:</h3>
                <ul role="list" className="divide-y divide-gray-200">
                    {languages.map((item) => (
                        <li key={item.name} className="py-4 flex items-center">
                            <FontAwesomeIcon icon={item.icon} className="h-6 w-6 mr-2" />
                            <span className="ml-3">{item.name}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="grid pt-16 sm:grid-cols-2 gap-4 text-zinc-800 dark:text-zinc-100 sm:text-left">
                <h3 className="mb-3 text-1xl font-semibold">Environments:</h3>
                <ul role="list" className="divide-y divide-gray-200">
                    {environments.map((item) => (
                        <li key={item.name} className="py-4 flex items-center">
                            <FontAwesomeIcon icon={item.icon} className="h-6 w-6 mr-2" />
                            <span className="ml-3">{item.name}</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="grid pt-8 sm:mb-0 sm:grid-cols-2 sm:text-left text-zinc-800 dark:text-zinc-100 mt-16">
                <h3 className="mb-3 text-1xl font-semibold">Skills:</h3>
                <ul role="list" className="divide-y divide-gray-200">
                    {skills.map((item) => (
                        <li key={item.name} className="py-4 flex items-center">
                            <FontAwesomeIcon icon={item.icon} className="h-6 w-6 mr-2" />
                            <span className="ml-3">{item.name}</span>
                        </li>
                    ))}
                </ul>
            </div>







        </>
    )
}

export default Skills;
