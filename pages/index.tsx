import ProfessionalSummary from '@/components/ProfessionalSummary/ProfessionalSummary'
import Skills from '@/components/Skills/Skills'
import WorkHistory from './workHistory'
import ContactInfo from '@/components/ContactInfo/ContactInfo'
import ContentCard from '../components/ContentCard/ContentCard'


export default function Home() {
    return (
        <>
            <main
                // className={`h-screen  min-h-screen`}
            >
                {/* <div className="bg-gradient-to-b bg-opacity-10 from-green-400 to-black via-transparent flex-col  justify-between px-16 pt-2"> */}
                {/* <div className="bg-gradient-to-bl from-green-400 to-green-200 shadow-lg flex-col  justify-between px-16 pt-2"> */}
                <div className="flex-col  justify-between px-16 pt-2">
                    <h1 className="lg:text-2xl lg:text-center text-2xl text-gray-300 mb-3 mx-3 text-right">
                        stuartbradford.com
                    </h1>



                    <header className="text-right">
                        <ContactInfo />
                    </header>

                    <article>
                        <ContentCard title="Professional Summary">
                            <ProfessionalSummary />
                        </ContentCard>
                    </article>
                    <article>
                        <ContentCard title="Skills">
                            <Skills />
                        </ ContentCard>
                    </article>
                    <article>
                        <ContentCard title="Employment History">
                            <WorkHistory />
                        </ ContentCard>
                    </article>
                </div>


            </main >
            <footer className="bg-gradient-to-br to-green-800 from-black via-transparent pb-32">
                <ContactInfo />
            </footer>
        </>
    )
}
