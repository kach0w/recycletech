import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import laptops from '../../assets/laptops.jpg'

import Head from 'next/head'
export default function Home() {
  return (
    <div className='sm:h-[100vh] bg-[white]'>
      <Head>
        <title>Recycle Tech</title>
        <link rel="icon" sizes="196x196" href="/logo.png"/>  
      </Head>
      <Navbar />
      <div className='mt-[7vh] sm:mt-[15vh] bg-white font-bold mb-[9vh] sm:mb-[15vh]'>
        <h1 className='mb-5 sm:mb-0 sm:text-5xl text-[#0e465a]'>Blog</h1>
        <ul>
            <li className='sm:w-[650px] sm:py-[50px] mx-auto'>
            <a href="/blog/intro">
                <div >
                <img width="300px" className="inline-block rounded-md" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.ewastescraprecycling.com%2Fimages%2Flaptop-recycling.jpg&f=1&nofb=1&ipt=fc686f233202655675fa7c89a4adfa2facd97ceb4e1f6f120f2c32607b25c08c&ipo=images"></img>                    
                <div className='inline-block pl-[50px] w-[300px]'>
                    <h2 className='text-left text-[20px] pt-[40px]'>Introducing Recycle Tech</h2>
                    <h2 className='text-left text-[15px]'>January 7th</h2>
                    </div>
                </div>
            </a>
            </li>
        </ul>
      </div>
      <Footer />
    </div>
  )
}
