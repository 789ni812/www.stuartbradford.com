const ProfessionalSummary = () => {

    return (
        <>
            <div
                className="group rounded-lg border border-transparent px-5 py-4 mb-16 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"
            >
                <h2 className={`mb-3 text-3xl font-semibold`}>
                    Professional Summary{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>
                <p className="text-sm opacity-50 mb-3">
                    Versatile Full Stack Developer, Technical Project Manager with 20+ years of experience in web and mobile development.</p>

                <p className="text-sm opacity-50">
                    Worked with startups, government, banks, health, education, sport, e-commerce, music and global brands.
                </p>
            </div>

            <div
                className=" rounded-lg border border-transparent px-5 py-4  transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"
            >
                <h2 className={`mb-3 text-3xl font-semibold`}>
                    Skills{' '}
                    <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                        -&gt;
                    </span>
                </h2>


                <div className="grid lg:mb-0 lg:grid-cols-2 lg:text-left">
                    <h3 className="mb-3 text-1xl font-semibold">Technical:</h3>
                    <ul className="mb-3  text-sm opacity-50">
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

                <div className="grid lg:mb-0 lg:grid-cols-2 lg:text-left">
                    <h3 className="mb-3 text-1xl font-semibold">Project Management:</h3>
                    <ul className="mb-3 text-sm opacity-50">
                        <li>Agile Methodologies</li>
                        <li>Certified Scrum Master</li>
                        <li>Kanban / Scrum / Jira</li>
                        <li>Requirements Gathering</li>
                        <li>Resource Allocation</li>
                        <li>Budget and Timeline Control</li>
                        <li>Team Hiring</li>
                    </ul>


                </div>
            </div>
        </>
    )
}

export default ProfessionalSummary;