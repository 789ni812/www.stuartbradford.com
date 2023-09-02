import { faReact } from '@fortawesome/free-brands-svg-icons'
import { faHtml5 } from '@fortawesome/free-brands-svg-icons'
import { faCss3 } from '@fortawesome/free-brands-svg-icons'
import { faNode } from '@fortawesome/free-brands-svg-icons'
import { faCode } from '@fortawesome/free-solid-svg-icons'
import { faShopify } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-solid-svg-icons'
import { faFileCode } from '@fortawesome/free-solid-svg-icons'
import { faChartGantt } from '@fortawesome/free-solid-svg-icons'
import { faFileCircleCheck } from '@fortawesome/free-solid-svg-icons'
import { faFileLines } from '@fortawesome/free-solid-svg-icons'
import { faAnchorCircleExclamation } from '@fortawesome/free-solid-svg-icons'
import Person0Thmb from '@/images/projects/Person0-thmb.png'
import {faUnity} from '@fortawesome/free-brands-svg-icons'
import projectBoostImage from '@/images/projects/GameProjectBoost.png'
import ProtoScaffoldingThmb from '@/images/projects/protoScaffolding.png'



export const projects = [
    {
        name: 'Realtime simulation dashboard',
        ShortDesc: 'React realtime simulation and chart dashboard',
        description:
          "Simulation creates basic realtime population data represented as charts and statistics related to population growth and age distribution. Built using TypeScript and React components using the useState, useEffect, useCallback, and useMemo hooks, which allow the components to manage state and respond to changes in the data.",
        technologies: [
            { name: "NodeJS", icon: faNode },
            { name: "React", icon: faReact },
            { name: "NextJS", icon: faCode },
            {name: "TypeScript", icon: faFileCircleCheck},
            { name: "TailwindCSS", icon: faFileCode},
            { name: "HTML5", icon: faHtml5 }
        ],
        link: { href: 'https://person0-nextjs.vercel.app/', label: 'person0' },
        imageLogo: Person0Thmb
      },
      {
        name: 'Proto Scaffolding',
        ShortDesc: 'Work in Progress! Single page app for a scaffolding company',
        description:
          "Very much work in progress! It will be a single page app for a friends scaffolding company. I'm going to use Framer for the animations as I love the work the Framer team have done. Other than that its a standard sort of site informing the customer of who they are, what they do and how to get in touch.",
        technologies: [
            { name: "React", icon: faReact },
            { name: "Framer", icon: faAnchorCircleExclamation },
            { name: "NextJS", icon: faCode },
            {name: "TypeScript", icon: faFileCircleCheck},
            { name: "TailwindCSS", icon: faFileCode},
            { name: "HTML5", icon: faHtml5 }
        ],
        link: { href: 'https://proto-scaffolding.vercel.app/', label: 'Proto Scaffolding' },
        imageLogo: ProtoScaffoldingThmb
      },
      {
        name: 'Project Boost',
        ShortDesc: '3D game built with Unity to help me on my jounrey in VR',
        description:
            "To help in learning and better understand how to build games and applications in Virtual Reality I first need to get an understanding of 3D game development. So I recently completed a Unity course on just that. As part of this training course I built a game about flying a rocket through a series of obstacles, using Unity and C#. I've added a couple of tweaks to it and exported it to the web using WebGL. it's very basic, but really helped me understand the basics of 3D game development and has helped me greatly in my VR development practice.",
        technologies: [{ name: "Unity", icon: faUnity },{ name: "C#", icon: faFileLines }],
        link: { href: '@/public/games/ProjectBoost/index.html', label: 'Project Boost' },
        imageLogo: projectBoostImage
      },
      //     {
//     name: 'Tai Chi Practice',
//     description:
//       "A website about Tai Chi, using NextJS, Shopify, SanityCMS.",
//     technologies: [
//         { name: "NodeJS", icon: faNode },
//         { name: "React", icon: faReact },
//         { name: "NextJS", icon: faCode },
//         { name: "GraphQL", icon: faChartGantt },
//         {name: "TypeScript", icon: faFileCircleCheck},
//         { name: "Shopify", icon: faShopify },
//         { name: "SanityCMS", icon: faFile },
//         { name: "TailwindCSS", icon: faFileCode},
//         { name: "CSS3", icon: faCss3 },
//         { name: "HTML5", icon: faHtml5 }
//     ],
//     link: { href: 'http://taichipractice.zone', label: 'taichipractice.zone' },
//     imageLogo: taiChiPracticeImage
//   }, 
    ]