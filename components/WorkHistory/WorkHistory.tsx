import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

import { AcademicCapIcon, BriefcaseIcon, CalculatorIcon, CogIcon, HeartIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'
import Link from 'next/link';

const experiences = [
    {
        jobTitle: "Full Stack Engineer",
        company: "MyMynd",
        website: "www.mymynd.co.uk",
        icon: <HeartIcon className="h-6 w-6 text-white" aria-hidden="true" />,
        duration: {
            start: "Mar 2021",
            end: "Jul 2023"
        },
        description: [
            "As the first full-time developer at MyMynd, I undertook the critical task of migrating the original platform from an external US agency to an in-house solution, thereby reducing dependencies and enhancing operational efficiency.",
            "Conceptualised, rebuilt, and maintained the comprehensive assessment platform and wellness centre, resulting in improved user engagement and satisfaction.",
            "As the team scaled, I transitioned into specialiing in front-end development, keeping a strong emphasis on web accessibility, ensuring the design and usability cater to a diverse set of users.",
            "Implemented data analytics and business intelligence by creating multiple assets through Google Analytics, Mixpanel and QuickSight to provide actionable insights to the business.",
        ],
        clientsWorkedWith: [
            "NHS",
            "University of Portsmouth",
        ],
        technologies: [
            "JavaScript",
            "React",
            "NextJS",
            "TypeScript",
            "MUI",
            "Tailwind CSS",
            "AWS"
        ]
    },
    {
        jobTitle: "Full Stack Development Refinement and Advancement",
        icon: <AcademicCapIcon className="h-6 w-6 text-white" aria-hidden="true" />,
        duration: {
            start: "Feb 2020",
            end: "Feb 2021"
        },
        description: [
            "I dedicated the subsequent year to studying and resharpening my skills with particular attention given to React and its ecosystem such as NextJS, TypeScript, GraphQL, and AWS.",
        ],
        technologies: [
            "JavaScript",
            "React",
            "NextJS",
            "TypeScript",
            "Material UI",
            "Tailwind",
            "CSS",
            "AWS",
            "Firebase",
            "GraphQL",
            "Jest",
            "Cypress",
            "MongoDB",
        ]
    },
    {
        jobTitle: "Technical Project Manager",
        company: "Ensemble Solutions",
        website: "www.ensemble.com",
        icon: <BriefcaseIcon className="h-6 w-6 text-white" aria-hidden="true" />,
        duration: {
            start: "Sep 2016",
            end: "Feb 2020"
        },
        description: [
            "Orchestrated the smooth running of multiple client projects, fostering robust partnerships with clients, stakeholders and developers to ensure agile projects and budgets stay on track",
            "Concurrently served as lead developer on smaller projects and prototypes mainly focused on front-end development, effectively mitigating resource bottlenecks and ensuring timely project completion",
            "Planning and management of development projects such as e-commerce, banking and content-heavy platforms (often using Adobe Experience Manager)",
            "Acted as the pivotal Technical Project Manager for Adobe, a testament to Ensemble being one of Adobe's preferred development providers.",
            "Gathered requirements, defined scopes, allocated resources and established schedules meeting or exceeding project demands",
            "Worked closely with the managing director to win new contracts and grew the London office team from 4 to 20+ PMs, designers, QA and developers",
        ],
        clientsWorkedWith: [
            "HSBC",
            "Puma",
            "Porsche",
            "Ford",
            "Adobe",
        ],
        technologies: [
            "HTML",
            "CSS",
            "JavaScript",
            "React",
        ]
    },
    {
        jobTitle: "Senior Agile Project Manager",
        company: "Tictrac",
        website: "www.tictrac.com",
        icon: <HeartIcon className="h-6 w-6 text-white" aria-hidden="true" />,
        duration: {
            start: "Aug 2014",
            end: "Sep 2016"
        },
        description: [
            "At the forefront of expanding the project management function for one of the \"UK's fastest-growing startups in the self-tracking and healthcare space\" as of 2015. My role was instrumental in its growth trajectory",
            "Held pivotal accountability for the effective management of multi-disciplinary teams, tasked with customising and delivering software-as-a-service, adhering to high-quality and timely delivery",
            "Leveraged Agile methodologies to orchestrate successful continuous deployments across diverse platforms including Web, Android, and iOS, ensuring a consistent user experience and seamless functionality",
            "Simultaneously assumed the role of lead developer for smaller projects and prototypes, focused mainly on the front-end specialising in responsive and web accessible platforms. Contributing to minimising resource bottlenecks and fostering an environment of efficiency and productivity"
        ],
        technologies: [
            "JavaScript",
            "HTML",
            "CSS",
        ],
        clientsWorkedWith: [
            "AT&T",
            "Blue Cross Blue Shield",
            "Johnson & Johnson",
            "Aviva",
            // Singapore Health Promotion Board??
        ]
    },
    {
        jobTitle: "Web Development Manager",
        company: "Electric Word PLC",
        website: "www.electricwordplc.com",
        icon: <CogIcon className="h-6 w-6 text-white" aria-hidden="true" />,
        duration: {
            start: "Apr 2010",
            end: "Aug 2014"
        },
        description: [
            "Instrumental in building a proficient web development team from the ground up, instilling agile methodologies within the team and newly designated Product Owners to foster an efficient, iterative development process",
            "Spearheaded the migration of approximately 50 websites to Drupal 7, optimising their performance and providing a more secure and efficient platform for growth",
            "Enhanced subscription and e-commerce platforms, fostering improved user interactions, increased sales, and customer satisfaction",
            "In close collaboration with stakeholders, marketing, and developers, ensured the successful execution and rollout of a multitude of digital projects",
            "Implemented innovative measures to significantly improve user experience, advanced SEO techniques, and editor environments, resulting in improved website ranking, user engagement, and ease of content management",
            "A hands on role that involved the development of new websites, features, and functionality, as well as the maintenance of existing websites. I also managed the hosting infrastructure and the development team."
        ],
        technologies: [
            "Drupal 7",
            "PHP",
            "MySQL",
            "HTML",
            "CSS",
            "JavaScript",
            "jQuery",
            "Apache",
            "Linux",
        ]
    },
    {
        jobTitle: "Senior Web Delivery Manager",
        company: "AVG Technologies",
        website: "www.avg.com",
        icon: <ShieldCheckIcon className="h-6 w-6 text-white" aria-hidden="true" />,
        duration: {
            start: "Apr 2009",
            end: "Apr 2010"
        },
        description: [
            "Spearheaded the recruitment and training of a new, high-performing development, design, and marketing team based in Prague",
            "Worked closely with CEO and VP of marketing developers, designers, copywriters and marketing specialists to shape a centre of excellence for AVG's global web presence",
            "Ensured the smooth operation and management of AVG's online global presence",
            "Accountable for the successful rebrand and continuous rollout AVG's global web platforms",
            "Managed the development of AVG's global web presence and front-end team, specialising in the (front-end) development of new websites, features, and functionality, as well as the maintenance of existing websites and portals",
        ]
    },
    {
        jobTitle: "Senior Developer / Head of IT",
        company: "London Gifted & Talented",
        website: "www.londongt.org",
        icon: <AcademicCapIcon className="h-6 w-6 text-white" aria-hidden="true" />,
        duration: {
            start: "Apr 2006",
            end: "Mar 2009"
        },
        description: [
            "Developed and maintained over 50 educational Drupal websites",
            "Managed team of developers and content editors. Responsible for all IT infrastructure"
        ],
        technologies: [
            "Drupal",
            "PHP",
            "MySQL",
            "HTML",
            "CSS",
            "JavaScript",
            "jQuery",
            "AJAX",
            "XML",
            "XSLT",
        ]
    },
    {
        jobTitle: "Senior Developer",
        company: "Moneynet",
        website: "www.moneynet.co.uk",
        icon: <CalculatorIcon className="h-6 w-6 text-white" aria-hidden="true" />,
        duration: {
            start: "Apr 2001",
            end: "Apr 2006"
        },
        description: [
            "Developed and maintained Moneynet's core platform and finance portals"
        ]
    }

]

const WorkHistory = () => {
    return (
        <VerticalTimeline>
            {experiences.map((experience, index) => {
                const isEvenIndex = index % 2 === 0;
                const backgroundColor = isEvenIndex ? 'rgb(33, 150, 243)' : 'rgb(255, 99, 71)';
                const color = '#fff';


                return (
                    <VerticalTimelineElement
                        key={index}
                        className="vertical-timeline-element--work"
                        contentStyle={{ background: backgroundColor, color: color }}
                        contentArrowStyle={{ borderRight: `7px solid ${backgroundColor}` }}
                        date={`${experience.duration.start} - ${experience.duration.end}`}
                        iconStyle={{ background: backgroundColor, color: color }}
                        icon={experience.icon}
                    >
                        <div className="space-y-4">
                            <div className="flex items-center space-x-4">
                                <div>
                                    <h2 className="text-2xl font-semibold">{experience.jobTitle}</h2>
                                    <h3 className="text-lg">{experience.company}</h3>
                                    {experience.website && (
                                        <h4 className=""><Link href={`http://${experience.website}`} target='_blank'>{experience.website}</Link></h4>
                                    )}
                                </div>
                            </div>


                            {experience.description.map((item, index) => (
                                <p key={index}>{item}</p>
                            ))}


                            {experience.clientsWorkedWith && (
                                <>
                                    <p className="mt-4 font-medium">Clients worked with: </p>
                                    <ul className="list-disc ml-5 space-y-1">
                                        {experience.clientsWorkedWith.map((item, index) => (
                                            <li className="text-sm text-gray-200" key={index}>{item}</li>
                                        ))}
                                    </ul>
                                </>
                            )}
                            {experience.technologies && (
                                <>
                                    <p className="mt-4 font-medium">Technologies used: </p>
                                    <ul className="list-disc ml-5 space-y-1">
                                        {experience.technologies.map((item, index) => (
                                            <li className="text-sm text-gray-200" key={index}>{item}</li>
                                        ))}
                                    </ul>


                                </>
                            )}
                        </div>
                    </VerticalTimelineElement>
                );
            })}
        </VerticalTimeline>
    );
};

export default WorkHistory;
