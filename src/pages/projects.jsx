import Head from 'next/head'
import Image from 'next/image'
import { Card } from '@/components/Card'
import { SimpleLayout } from '@/components/SimpleLayout'
import logoAnimaginary from '@/images/logos/animaginary.svg'
import logoPlanetaria from '@/images/logos/planetaria.svg'

import taiChiPracticeImage from '@/images/projects/taichi-expert-studying-with-books.avif'
import projectBoostImage from '@/images/projects/GameProjectBoost.png'


const projects = [
  {
    name: 'Tai Chi Practice',
    description:
      ['A website about Tai Chi, using NextJS, Shopify, SanityCMS.'],
    technologies: ['NextJS', 'Shopify', 'SanityCMS'],
    link: { href: 'http://taichipractice.zone', label: 'taichipractice.zone' },
    logo: logoPlanetaria,
    imageLogo: taiChiPracticeImage
  },
  {
    name: 'Project Boost',
    description: [
        "To help in learning and better understand how to build games and applications in Virtual Reality I first need to get an understanding of 3D game development. So I recently completed a Unity course on just that. As part of this training course I built a game about flying a rocket through a series of obstacles, using Unity and C#. I've added a couple of tweaks to it and exported it to the web using WebGL. it's very basic, but really helped me understand the basics of 3D game development and has helped me greatly in my VR development practice.",
    ],
    technologies: ['Unity', 'C#', 'WebGL'],
    link: { href: '/public/games/ProjectBoost/index.html', label: 'Project Boost' },
    logo: logoAnimaginary,
    imageLogo: projectBoostImage
  },
]

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



export default function Projects() {
    
  return (
    <>
      <Head>
        <title>Projects - Stuart Bradford</title>
        <meta
          name="description"
          content="A couple of projects I'm working on."
        />
      </Head>
      <SimpleLayout
        title="A couple of projects I'm working on."
        intro="I'm always working on something, Here are a few of the things I'm working on right now."
      >
        <ul
          role="list"
          className="grid grid-cols-1 gap-x-12 gap-y-16 sm:grid-cols-2 lg:grid-cols-3"
        >
          {projects.map((project) => (
            <Card as="li" key={project.name}>





              <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
                <Image
                  src={project.imageLogo}
                  alt=""
                  className="h-8 w-8"
                  unoptimized
                />
              </div>
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <Card.Link href={project.link.href} target_blank>{project.name}</Card.Link>
              </h2>
              <Card.Description><p className="pt-4">{project.description}</p></Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-teal-500 dark:text-zinc-200">
                <LinkIcon className="h-6 w-6 flex-none" />
                <span className="ml-2">{project.link.label}</span>
              </p>
            </Card>
          ))}
        </ul>
      </SimpleLayout>

    </>
  )
}
