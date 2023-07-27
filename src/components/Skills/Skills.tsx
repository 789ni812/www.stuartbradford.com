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



const technology = [
    { id: 1, name: "React JS", icon: faReact },
    { id: 2, name: "JavaScript", icon: faJs },
    { id: 3, name: "HTML", icon: faHtml5 },
    { id: 4, name: "CSS", icon: faCss3 },
    { id: 5, name: "AWS", icon: faAws },
    { id: 6, name: "Firebase", icon: faDatabase },
    { id: 7, name: "Node JS", icon: faNode },
    { id: 8, name: "NGINX", icon: faServer },
    { id: 9, name: "Apache", icon: faServer },
    { id: 10, name: "Linux", icon: faLinux },
    { id: 10, name: "Windows", icon: faWindows },
    { id: 11, name: "Drupal", icon: faDrupal },
    { id: 12, name: "WordPress", icon: faWordpress },
]

const pm = [
    { id: 1, name: "Agile Methodologies", icon: faSyncAlt },
    { id: 2, name: "Certified Scrum Master" , icon: faCertificate},
    { id: 3, name: "Kanban / Scrum / Jira", icon: faChartLine },
    { id: 4, name: "Requirements Gathering", icon: faCheckSquare },
    { id: 5, name: "Resource Allocation", icon: faClipboardList },
    { id: 6, name: "Budget and Timeline Control", icon: faMoneyBill },
    { id: 7, name: "Team Hiring and management", icon: faUsers }
]

const Skills = () => {
    return (
        <>
            <div className="grid sm:grid-cols-2 gap-4 text-zinc-800 dark:text-zinc-100 sm:text-left">
                <h3 className="mb-3 text-1xl font-semibold">Technical:</h3>

                <ul role="list" className="divide-y divide-gray-200">
                    {technology.map((item) => (
                        <li key={item.id} className="py-4 flex items-center">
                            <FontAwesomeIcon icon={item.icon} className="h-6 w-6 mr-2" />
                            <span className="ml-3">{item.name}</span>
                        </li>
                    ))}
                </ul>

                {/* <p>Currently studying Unity and C# for VR development</p> */}
            </div>

            <div className="grid sm:mb-0 sm:grid-cols-2 sm:text-left text-zinc-800 dark:text-zinc-100 mt-16">
                <h3 className="mb-3 text-1xl font-semibold">Project Management:</h3>
                <ul role="list" className="divide-y divide-gray-200">
                    {pm.map((item) => (
                        <li key={item.id} className="py-4 flex items-center">
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
