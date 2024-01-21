import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Hero from '../../components/Home/Hero'
import About from '../../components/Home/About'
import Numbers from '../../components/Home/Numbers'
import Footer from '../../components/Footer'

import Head from 'next/head'
export default function Home() {
  return (
    <div className='h-[100vh] bg-[white]'>
      <Head>
        <title>Recycle Tech</title>
        <link rel="icon" sizes="196x196" href="/logo.png"/>  
      </Head>
      < Navbar />
      < Hero />
      < About />
      < Numbers />
      <Footer />
    </div>
  )
}
