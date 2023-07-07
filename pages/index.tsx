import ProfessionalSummary from '@/components/ProfessionalSummary/ProfessionalSummary'
import Skills from '@/components/Skills/Skills'
import WorkHistory from '@/components/WorkHistory/WorkHistory'
import ContactInfo from '@/components/ContactInfo/ContactInfo'
import ContentCard from '@/components/ContentCard/ContentCard'


export default function Home() {
    return (
        <>
            <main className="">
                <div className="bg-[url(/images/background-WebCode.png)] bg-no-repeat bg-cover h-screen w-screen-1">
                <div className="flex-col  justify-between px-4 md:px-32 lg:px-64 pt-2  bg-gray-800 bg-opacity-80">
                    
                    <header className="text-right">
                    <h1 className="lg:text-center text-2xl text-gray-300 mb-3 mx-3 text-right">
                        stuartbradford.com
                    </h1>
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
                </div>
            </main >
        </>
    )
}
