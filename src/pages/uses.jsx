import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function ToolsSection({ children, ...props }) {
  return (
    <Section {...props}>
      <ul role="list" className="space-y-16">
        {children}
      </ul>
    </Section>
  )
}

function Tool({ title, href, children }) {
  return (
    <Card as="li">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Description>{children}</Card.Description>
    </Card>
  )
}

export default function Uses() {
  return (
    <>
      <Head>
        <title>Uses - Spencer Sharp</title>
        <meta
          name="description"
          content="Software I use, gadgets I love, and other things I recommend."
        />
      </Head>
      <SimpleLayout
        title="Software I use, gadgets I love, and other things I recommend."
        intro="I get asked a lot about the things I use to build software, stay productive, or buy to fool myself into thinking I’m being productive when I’m really just procrastinating. Here’s a big list of all of my favorite stuff."
      >
        <div className="space-y-20">
          <ToolsSection title="Workstation">
            <Tool title="Lenovo P52 ThinkPad">
              I picked this up after working for a bank, where they used Lenovo laptops exclusively. I was really impressed with the build quality and the keyboard, so I decided to give it a shot. I’ve been using it for a while  now and it’s been great. I’ve upgraded the SSD, and run on Windows 11.
            </Tool>
            <Tool title="Silverstone Custom Built PC">
              An custom built PC originally built for music production, and focused on high performance while being as quiet as possible (a must when recording live) I’ve since upgraded the graphics and wireless cards to allow me to run PCVR and for VR development using Windows 11 and Unity.
            </Tool>
            <Tool title="Lenovo ThinkPad Keyboard">
              I was using Lenovo keyboards at work, and I really liked the feel of them. I picked up a few for home and I’ve been using them ever since.
            </Tool>
            <Tool title="Kensington wired TrackerBall mouse">
                I’ve been using a trackball for years, and I love it. I’ve tried a few different ones, but I keep coming back to this one.
            </Tool>
            
          </ToolsSection>
          <ToolsSection title="Development tools">
            <Tool title="Visual Studio code">
              I've used a lot of IDE over the years, but these days I find myself using VS Code for most of my development. I love the built in terminal, and the ability to customize it to my liking.
            </Tool>
            <Tool title="gitbash">
              When you're on Windows I find Gitbash to be the best terminal for working with git and Linux type commands.
            </Tool>
            <Tool title="WSL">
                I've been using WSL for a while now, and I love it. I use it for all of my development, and I love the ability to run Linux commands on Windows. I used to only develop on Linux, but now I can do everything I need to do on Windows or Linux via Virtual Box or WSL.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Design">
            <Tool title="Figma">
              We started using Figma as just a design tool but now it’s become
              our virtual whiteboard for the entire company. Never would have
              expected the collaboration features to be the real hook.
            </Tool>
          </ToolsSection>
          <ToolsSection title="Productivity">
            <Tool title="Jira">
              I wouldn't say I love Jira, nor is it the best tool for the job, but it's what we use at work and many other client too, it's what I'm used to. I've used Trello, Smartsheets, Monday and a few others, but at the end of the day either my work or a client will be using Jira.
            </Tool>
            <Tool title="A really good spreadsheet">
              Depending on the project a spreadsheet can be a great way to keep track of things. I've used Google Sheets, Excel, and Smartsheets. I find Smartsheets to be the best for collaboration, but Google Sheets is great for quick and dirty.
            </Tool>

          </ToolsSection>
          <ToolsSection title="Virtual Reality">
            <Tool title="PCVR">
                It can take a lot of setting up and tweaking but once you can run software from your PC on your VR headset it's a game changer. I've been using a Quest 2 with Virtual Desktop and it's been great.
            </Tool>
            <Tool title="Oculus Quest 2">
                I've been using a Quest 2 with Virtual Desktop and it's been great.
            </Tool>
            <Tool title="Unity">
                Originally I tried working with JavaScript and A-Frame but I found it to be too limiting, so I switched to Unity and C# and am currently teaching myself how to use it to build VR experiences.
            </Tool>
            

          </ToolsSection>
          <ToolsSection title="Music">
            <Tool title="Studio One">
              After growing with Cubase and Cakewalk and then later working Bitwig and Studio One, I find overall Studio One is the most productive tool for me, with the addition of the Presonus 8 track automaed mixer, it really feels more like a studio than just starring at the screen of a DAW.
            </Tool>
            <Tool title="M-audio audio controller">
                I've had this M-Audio controller for years, it's big and hardy and just seems to keep to working so I keep using it. Really good for improving latency when recording and playing back at the same time. 
            </Tool>
            <Tool title="Keyboard: Korg Nano Studio">
                My keyboard playing skills are so bad that I actually sold a full size electric keyboard and replaced it with this tiny little thing. It's great for recording and playing in midi tracks, and it's so small it doesn't take up any space ( which is important in my house!)
            </Tool>
            <Tool title="Bass Guitar: Yamaha RBX600A">
                My favourite bass guitar, I've had it for years and it's never let me down, it may not be the best bass guitar in the world, but I know it so well I can play it without thinking and thats what you need you're playing live.
            </Tool>
            <Tool title="Guitar: Ibanez">
                I needed a guitar that I could use for recording, being primarily a bass player I find the Ibanez guitar to be the most comfortable to play, with their slightly wider necks and low action. For the money it sounds great recorded.
            </Tool>
            </ToolsSection>
        </div>
      </SimpleLayout>
    </>
  )
}
