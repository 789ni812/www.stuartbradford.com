import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "react-vertical-timeline-component/style.min.css";

import { AcademicCapIcon, BriefcaseIcon,  CalculatorIcon, CogIcon, HeartIcon, ShieldCheckIcon } from '@heroicons/react/24/solid'


const WorkHistory = () => {
    const experiences = [
        {
            jobTitle: "Full Stack Engineer",
            company: "MyMynd",
            icon: <HeartIcon className="h-6 w-6 text-white" aria-hidden="true" />,
            duration: {
                start: "Mar 2021",
                end: "Jul 2023"
            },
            description: [
                "First full-time developer at MyMynd, a B2B mental health and wellness startup",
                "Migrated the original platform from a US agency and brought it in house.",
                "Rebuilt and maintained the entire assessment platform and wellness centre",
                "As the team expanded I focused more on the Front End Side of the platform with web accessibility being a key part of the design",
                "Created several BI and analytical assets using Google Analytics, Mixpanel, QuickSight"
            ],
            technologies: [
                "NextJS",
                "TypeScript",
                "React",
                "MUI",
                "Tailwind CSS",
                "AWS"
            ]
        },
        {
            jobTitle: "Studied Full Stack Development",
            icon: <AcademicCapIcon className="h-6 w-6 text-white" aria-hidden="true" />,
            duration: {
                start: "Feb 2020",
                end: "Feb 2021"
            },
            description: [
                "I decided to take a year out to resharpen my development and creative skills, In February 2020 I dedicated the subsequent year to studying and resharpening my skills by reacquainting myself with the latest development technologies, with a particular emphasis on ReactJS and its ecosystem."
            ],
            technologies: [
                "NextJS",
                "TypeScript",
                "React",
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
            icon: <BriefcaseIcon className="h-6 w-6 text-white" aria-hidden="true" />,
            duration: {
                start: "Sep 2016",
                end: "Feb 2020"
            },
            description: [
                "Responsible for the smooth running of multiple client projects, working closely with clients, stakeholders and developers to ensure agile projects and budgets are on track",
                "Planning and management of development projects such as e-commerce, banking and content-heavy platforms (often using Adobe Experience Manager)",
                "Technical Project Manager for Adobe (Ensemble was one of Adobe's preferred development providers)",
                "Maintained tactical control of project budgets and timelines to keep teams on task and achieve schedule targets.",
                "Managed and motivated project teams to promote collaboration and keep members on-task and productive.",
                "Gathered requirements, defined scopes, allocated resources and established schedules meeting or exceeding project demands.",
                "Lead developer for smaller projects to help with resource bottlenecks",
                "Worked closely with the managing director to win new contracts and grew the London office team from 4 to 20+ PMs, designers, QA and developers"
            ]
        },
        {
            jobTitle: "Senior Agile Project Manager",
            company: "Tictrac",
            icon: <HeartIcon className="h-6 w-6 text-white" aria-hidden="true" />,
            duration: {
                start: "Aug 2014",
                end: "Sep 2016"
            },
            description: [
                "Grew the project management function for one of the UK's fastest growing start-ups in the self-tracking and healthcare space - (2015)",
                "Accountable for the successful management of multi-disciplinary teams to customise and deliver software-as-a-service",
                "Utilising Agile methodologies to ensure successful continuous deployments across web, Android and IOS",
                "Lead developer for smaller projects and prototypes to help reduce resource bottlenecks"
            ]
        },
        {
            jobTitle: "Web Development Manager",
            company: "Electric Word PLC",
            icon: <CogIcon className="h-6 w-6 text-white" aria-hidden="true" />,
            duration: {
                start: "Apr 2010",
                end: "Aug 2014"
            },
            description: [
                "Hired new web development team, trained them and newly assigned Product Owners in agile methodologies",
                "Migrated around 50 websites over to Drupal 7",
                "Improved subscription and e-commerce platforms",
                "Worked closely with stakeholders, marketing and developers to ensure the successful rollout of digital projects",
                "Improved user experience, SEO technique and editor environments"
            ],
            technologies: [
                "Drupal 7"
            ]
        },
        {
            jobTitle: "Senior Web Delivery Manager",
            company: "AVG Technologies",
            icon: <ShieldCheckIcon className="h-6 w-6 text-white" aria-hidden="true" />,
            duration: {
                start: "Apr 2009",
                end: "Apr 2010"
            },
            description: [
                "Hired and trained new development, design and marketing team based in Prague",
                "Worked closely with CEO and VP of marketing developers, designers, copywriters and marketing specialists to shape a centre of excellence for AVG's global web presence",
                "Responsible for smooth operations of AVG's online global presence",
                "Accountable for the successful rebrand and continuous rollout AVG's global web platforms"
            ]
        },
        {
            jobTitle: "Senior Developer / Head of IT",
            company: "London Gifted & Talented",
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
                "Drupal"
            ]
        },
        {
            jobTitle: "Senior Developer",
            company: "Moneynet",
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
                      </div>
                    </div>
      
                    
                      {experience.description.map((item, index) => (
                        <p key={index}>{item}</p>
                      ))}
                    
      
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
