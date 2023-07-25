const Skills = () => {
    return (
        <div className="grid lg:grid-cols-2 gap-4">
            <div className="lg:text-left">
                <h3 className="mb-3 text-1xl font-semibold">Technical:</h3>
                <ul className="mb-3  text-sm">
                    <li>Full Stack Development</li>
                    <li>React JS</li>
                    <li>JavaScript</li>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>AWS</li>
                    <li>Firebase</li>
                    <li>Node JS</li>
                    <li>NGINX</li>
                    <li>Apache</li>
                    <li>Linux / Windows</li>
                    <li>Drupal / WordPress</li>
                </ul>
                {/* <p>Currently studying Unity and C# for VR development</p> */}
            </div>

            <div className="lg:text-left">
                <h3 className="mb-3 text-1xl font-semibold">Project Management:</h3>
                <ul className="mb-3 text-sm">
                    <li>Agile Methodologies</li>
                    <li>Certified Scrum Master</li>
                    <li>Kanban / Scrum / Jira</li>
                    <li>Requirements Gathering</li>
                    <li>Resource Allocation</li>
                    <li>Budget and Timeline Control</li>
                    <li>Team Hiring and management</li>
                </ul>
            </div>
        </div>
    )
}

export default Skills;
