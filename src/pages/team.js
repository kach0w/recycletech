import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'
import headshot from '../../assets/head.jpg'

import Head from 'next/head'
export default function Home() {
  return (
    <div className='w-[100vw] h-[100vh] bg-[white]'>
      <Head>
        <title>Recycle Tech</title>
        <link rel="icon" sizes="196x196" href="/logo.png"/>  
      </Head>
      <Navbar />
      <div className='sm:mt-[15vh] bg-white font-bold mb-5 sm:mb-[10vh]'>
        <h1 className='text-5xl text-[#0e465a]'>Our Team</h1>
        <br></br>
        <Image className='sm:w-[400px] sm:h-[400px] rounded-md mx-auto' src={headshot} />
        <br></br>
        <div className='w-[400px] mx-auto'>
            <h2 className='text-3xl '>Karthik Sabhanayakam</h2>
            <br></br>
            <h3 className='text-2xl'>Founder</h3><br></br>
            <p className='text-xl mx-auto'>Karthik is a senior at Basis Independent Silicon Valley with an interest in Machine Learning and Economics. In his free time he likes watching classic films and contributing to Wikipedia articles.</p>
        </div>
        
      </div>
      <Footer />
    </div>
  )
}
