import Head from 'next/head'
import { SimpleLayout } from '@/components/SimpleLayout'
import ProjectList from '@/components/ProjectList'


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
     <ProjectList />
      </SimpleLayout>

    </>
  )
}
