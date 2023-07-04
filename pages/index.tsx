import ProfessionalSummary from '@/components/ProfessionalSummary/ProfessionalSummary'
import WorkHistory from './workHistory'
import ContactInfo from '@/components/ContactInfo/ContactInfo'



export default function Home() {
    return (
        <main
        className={`bg-gradient-to-br from-green-800 to-gray-800 via-transparent  h-screen  min-h-screen flex-col  justify-between px-16 pt-2`}            
        >



            <h1 className="lg:text-2xl lg:text-center text-2xl font-bold text-gray-300 mb-3 ">
                stuartbradford.com
            </h1>
            <ContactInfo />
            <div className="mb-16">

                <ProfessionalSummary />

            </div>

            <div className="">
                <div
                    className="rounded-lg border border-transparent px-5 mb-16 transition-colors border-gray-300 bg-gray-100 dark:border-neutral-700 dark:bg-neutral-800/30"
                >
                    <h2 className={`mb-3 text-3xl font-semibold`}>
                        Employment history{' '}
                        <span className="inline-block transition-transform group-hover:translate-x-1 motion-reduce:transform-none">
                            -&gt;
                        </span>
                    </h2>
                    <WorkHistory />
                </div>
            </div>



            <ContactInfo />



        </main >
    )
}
