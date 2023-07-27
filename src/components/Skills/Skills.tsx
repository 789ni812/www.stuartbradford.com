const technology = [
        { id: 1, name: "React JS" },
        { id: 2, name: "JavaScript" },
        { id: 3, name: "HTML" },
        { id: 4, name: "CSS" },
        { id: 5, name: "AWS" },
        { id: 6, name: "Firebase" },
        { id: 7, name: "Node JS" },
        { id: 8, name: "NGINX" },
        { id: 9, name: "Apache" },
        { id: 10, name: "Linux / Windows" },
        { id: 11, name: "Drupal / WordPress" }   
]

const pm = [
    { id: 1, name: "Agile Methodologies" },
    { id: 2, name: "Certified Scrum Master" },
    { id: 3, name: "Kanban / Scrum / Jira" },
    { id: 4, name: "Requirements Gathering" },
    { id: 5, name: "Resource Allocation" },
    { id: 6, name: "Budget and Timeline Control" },
    { id: 7, name: "Team Hiring and management" }
]

const Skills = () => {
    return (
        <>
            <div className="grid sm:grid-cols-2 gap-4 text-zinc-800 dark:text-zinc-100 sm:text-left">
                <h3 className="mb-3 text-1xl font-semibold">Technical:</h3>
                
                <ul role="list" className="divide-y divide-gray-200">
                {technology.map((item) => (
                    <li key={item.id} className="py-4">
                        {item.name}
                    </li>
                ))}
            </ul>
                {/* <p>Currently studying Unity and C# for VR development</p> */}
            </div>

            <div className="grid sm:mb-0 sm:grid-cols-2 sm:text-left text-zinc-800 dark:text-zinc-100 mt-16">
                <h3 className="mb-3 text-1xl font-semibold">Project Management:</h3>
                <ul role="list" className="divide-y divide-gray-200">
                {pm.map((item) => (
                    <li key={item.id} className="py-4">
                        {item.name}
                    </li>
                ))}
            </ul>
            </div>





           

        </>
    )
}

export default Skills;
