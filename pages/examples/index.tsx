import Head from 'next/head'
import Link from 'next/link'




export default function Examples() {
    return (
        <>
            <Head>
                <title>Stuart Bradford</title>
                <meta name="description" content="Stuart Bradford's Examples, Full Stack Developer & Technical Project Manager, located in south east London UK" />
            </Head>

            <main className="">
                <div className="bg-[url(/images/background-WebCode.png)] bg-no-repeat bg-cover h-screen w-screen-1">
                    <div className="flex-col  justify-between px-4 md:px-32 lg:px-64 pt-2  bg-gray-800 bg-opacity-80">

                        <header className="text-right">
                            <h1 className="lg:text-center text-2xl text-gray-300 mb-3 mx-3 text-right">
                                stuartbradford.com
                            </h1>
                        </header>

                        <article>
                            <h2 className="text-2xl text-gray-300 mb-3 mx-3 text-left">Examples</h2>
                            <ul>
                                <li><Link href="https://www.flochiflo.com" target='_blank'>flochiflo.com</Link></li>
                                <li><Link href="https://www.hahavr.news" target='_blank'>hahavr.news</Link></li>
                                <li><Link href="https://www.rainyandthecats.com" target='_blank'>rainyandthecats.com</Link></li>
                            </ul>
                            
                        </article>
                        
                    </div>
                </div>
            </main >
        </>
    )
}
