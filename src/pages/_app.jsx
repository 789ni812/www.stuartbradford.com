import { useEffect, useRef } from 'react'

import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'

import '@/styles/tailwind.css'
import '@/styles/global.css'
import 'focus-visible'
import { Lato } from '@next/font/google';
const lato = Lato({
    subsets: ['latin'],
    weight: ['100', '300', '400','700','900'],
})


function usePrevious(value) {
  let ref = useRef()

  useEffect(() => {
    ref.current = value
  }, [value])

  return ref.current
}

export default function App({ Component, pageProps, router }) {
  let previousPathname = usePrevious(router.pathname)

  return (
    <>
      <div className="fixed inset-0 flex justify-center sm:px-8 ">
        <div className="bg-[#E1E1E1] flex w-full max-w-7xl lg:px-8">
          <div className="w-full ring-1 bg-zinc-900 ring-zinc-300/20" />
        </div>
      </div>
      <div className="relative flex w-full flex-col sm:px-24">
        <Header />
        
       
        <main className={`flex-auto prose ${lato.className} z-50` }>

        <video
          muted
          loop
          autoPlay 
        className="xs:hidden opacity-5 x-auto fixed lg:left-72 "
        >
          <source src= '/videos/stuartbradford-hologram.mp4'type="video/mp4" />
        </video>
         
        
          <Component 
          previousPathname={previousPathname} {...pageProps} />
        </main>
        <Footer />
      </div>
    </>
  )
}
