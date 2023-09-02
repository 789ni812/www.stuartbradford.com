import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
    GitHubIcon,
    LinkedInIcon,
} from '@/components/SocialIcons'
import code from '@/images/photos/code.png'
import vRDesign from '@/images/photos/vr_design.png'
import tShirt1 from '@/images/photos/t-shirt1.png'
import projectBoost from '@/images/projects/GameProjectBoost.png'
import taiChiPractice from '@/images/projects/taichi-expert-studying-with-books.avif'
import WorkHistory from '@/components/Resume/WorkHistory'
import Skills from '@/components/Skills/Skills'


import ProjectList from '@/components/ProjectList'



function BriefcaseIcon(props) {
    return (
        <svg
            viewBox="0 0 24 24"
            fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}
        >
            <path
                d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
                className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
            />
            <path
                d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
                className="stroke-zinc-400 dark:stroke-zinc-500"
            />
        </svg>
    )
}

function ProjectIcon(props) {
    return (
        <svg 
         viewBox="0 0 576 512"
         fill="none"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
            {...props}><path d="M0 80C0 53.5 21.5 32 48 32h96c26.5 0 48 21.5 48 48V96H384V80c0-26.5 21.5-48 48-48h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H432c-26.5 0-48-21.5-48-48V160H192v16c0 1.7-.1 3.4-.3 5L272 288h96c26.5 0 48 21.5 48 48v96c0 26.5-21.5 48-48 48H272c-26.5 0-48-21.5-48-48V336c0-1.7 .1-3.4 .3-5L144 224H48c-26.5 0-48-21.5-48-48V80z"  className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"/></svg>
    )
}





function SocialLink({ icon: Icon, ...props }) {
    return (
        <Link className="group -m-1 p-1" {...props}>
            <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
        </Link>
    )
}

function Photos() {
    let rotations = ['rotate-2', '-rotate-2', 'rotate-2', 'rotate-2', '-rotate-2']

    return (
        <div className="mt-16 sm:mt-20">
            <div className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
                {[vRDesign, code, taiChiPractice, projectBoost, tShirt1].map((image, imageIndex) => (
                    <div
                        key={image.src}
                        className={clsx(
                            'relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl',
                            rotations[imageIndex % rotations.length]
                        )}
                    >
                        <Image
                            src={image}
                            alt=""
                            sizes="(min-width: 640px) 18rem, 11rem"
                            className="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}



export default function Home({ articles }) {


    return (
        <>
            <Head>
                <title>
                    Stuart Bradford -  Versatile Full Stack Developer, Technical Project Manager and VR Enthusiast
                </title>
                <meta
                    name="description"
                    content="I'm Stuart, Proficient and accomplished Full Stack Developer with over two decades of experience in the technology sector. Specialises in development and delivery of digital projects for Web, Android, IOS, and Virtual Reality. Excels in software engineering, project management, and VR development, having worked in diverse sectors such as Startups, Government, Health, and E-commerce. Has established a strong track record of migrating platforms in-house, enhancing operational efficiency, and improving user engagement."
                />
            </Head>
            
            


            <Container className="mt-9">
                <div className="max-w-2xl">
                    <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                        Versatile Full Stack Developer, Technical Project Manager
                    </h1>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">I&apos;m Stuart, a Full Stack Developer with over two decades of experience in the technology sector. Specialising in development and delivery of digital projects for Web, mobile. </p>


                    <p className="text-base text-zinc-600 dark:text-zinc-400">
                        Worked in diverse sectors such as Startups, Government, Health, and E-commerce.
                    </p>
                    <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
I&apos;ve seen a lot over the years, but there&apos;s always more to learn. Alongside my day job, I&apos;m currently studying VR & AR development.</p>

                    





                    <div className="mt-6 flex gap-6">
                 
                        <SocialLink
                            href="https://github.com/789ni812"
                            aria-label="Follow on GitHub"
                            icon={GitHubIcon}
                            target="_blank"
                        />
                        <SocialLink
                            href="https://www.linkedin.com/in/stuart-bradford/"
                            target="_blank"
                            aria-label="Follow on LinkedIn"
                            icon={LinkedInIcon}
                        />
                    </div>
                </div>

            </Container>
            <Photos />
            <Container className="mt-24 md:mt-28">
                <Skills />
            </Container>
            <Container className="mt-24 md:mt-28">
            <h2 className="flex text-lg font-semibold text-zinc-900 dark:text-zinc-100 mb-12">
                    <ProjectIcon className="h-6 w-6 flex-none" />
                    <span className="ml-3 mb-6">Projects I&apos;m currently working on</span>
                </h2>
            <ProjectList listType="short" />
            </Container>


            <Container className="mt-24 md:mt-28">
                <h2 className="flex text-lg font-semibold text-zinc-900 dark:text-zinc-100">
                    <BriefcaseIcon className="h-6 w-6 flex-none" />
                    <span className="ml-3 mb-6">Work</span>
                </h2>
                <WorkHistory />
            </Container>

        </>
    )
}
