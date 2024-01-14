import Image from 'next/image'
import Navbar from '../../components/Navbar'
import Footer from '../../components/Footer'

import Head from 'next/head'
export default function Home() {
  return (
    <div className='h-[100vh] bg-[white]'>
      <Head>
        <title>Recycle Tech</title>
        <link rel="icon" sizes="196x196" href="/logo.png"/>  
      </Head>
      <Navbar />
      <div className='mt-[15vh] bg-white font-bold mb-[10vh]'>
        <h1 className='text-5xl text-[#0e465a]'>Support Our Organization. Donate Today!</h1>
        <br></br><br></br><br></br>
        <span className="sm:block mx-auto text-[#0e465a]  text-3xl font-bold">Donate Old Devices</span>
        <br></br>
        <h3 className="text-[0.6rem] w-[400px] mx-auto">Note: All donated devices must be in working condition and must be completely wipped and RecycleTech is not responsible for any misuse of old data.</h3>
        <div className='w-[100vw]'>
          <img width="600px" className="inline-block rounded-md mx-auto p-10" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwww.treehugger.com%2Fthmb%2FWqiy6N3eclKQCMsf8ZJoufEhtW0%3D%2F2250x0%2Ffilters%3Ano_upscale()%3Amax_bytes(150000)%3Astrip_icc()%2Ftechnological-waste-489058061-9de23081271c480abafa85319aba3100.jpg&f=1&nofb=1&ipt=1f6c2ac85b8fefbe2f7e1d3d9db32621bccfdf46f80769bddf7df17f48888a3e&ipo=images"></img>                    
          <p className='inline-block w-[25vw] top-0 text-left'>With our E-waste removal program we successfully reduce electronic waste and help solve the prominent issues it causes such as environmental pollution and furthering the digital divide.<br></br> <br></br><a className="text-white rounded-md bg-[#0e465a] hover:bg-[#0e465acc] p-5 font-extrabold border-5" href="#">Arrange a Device Pickup</a></p>
        </div>
        <br></br><br></br><br></br>
        <span className="sm:block mx-auto text-[#0e465a]  text-3xl font-bold">Donate Directly</span>
        <main className="md:mt-5">
          <div className="mx-auto max-w-4xl flex flex-row justify-between space-x-8">
            {/* Section 1 */}
            <a href="#">
                <div className="flex flex-col items-center text-center px-4 border-2 p-10 rounded-lg bg-[#0e465a] w-[400px] hover:opacity-90">
                <h3 className="text-3xl font-bold text-white mb-4">GoFundMe</h3>
                </div>
            </a>
            {/* Section 2 */}
            <a href="#">
                <div className="flex flex-col items-center text-center px-4 border-2 p-10 rounded-lg bg-[#0e465a] w-[400px] hover:opacity-90">
                <h3 className="text-3xl font-bold text-white mb-4 ">Paypal</h3>
                </div>
            </a>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
