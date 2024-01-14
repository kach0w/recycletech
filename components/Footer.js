import React from 'react'
const Footer = () => {
  return (
    <div className="bg-[#222] sm:pb-20 flex items-center text-center relative overflow-hidden">
      <div className="mx-auto sm:pb-12 md:pt-6 xl:pt-0 z-10">
        {/* <span className="sm:block w-full text-[white]  text-5xl font-bold">By the Numbers</span> */}
        <main className="md:mt-20">
          <div className="mx-auto w-[60vw] flex flex-row justify-between space-x-8">
            {/* Section 1 */}
            <div className="flex w-[100px] flex-col items-center text-left">
              <h3 className="text-1xl font-bold text-white mb-4">Programs</h3>
              <a className="text-white" href="/programs">Fundraisers</a>
              <a className="text-white" href="/programs">Refurbishments</a>
              <a className="text-white" href="/programs">Donations</a>
            </div>
            {/* Section 2 */}
            <div className="flex flex-col w-[100px] items-center text-center px-4 ">
              <h3 className="text-1xl font-bold text-white mb-4 ">Team</h3>
              <a className="text-base text-white" href="/team">Members</a>
            </div>
            {/* Section 3 */}
            <div className="flex flex-col w-[100px] items-center text-center px-4">
              <h3 className="text-1xl font-bold text-white mb-4">Blog</h3>
              <a className="text-base text-white" href="/blog">Posts</a>
            </div>
            <div className="flex flex-col w-[550px] items-center text-center px-4">
              <h3 className="text-1xl font-bold text-white mb-4">RecycleTech is a 501(c)(3) non-profit organization.</h3>
              <a className="text-base text-white rounded-md bg-[#0e465a] hover:bg-[#0e465acc] p-5 font-extrabold border-5" href="/donate">Donate Here</a>
            </div>
          </div>
            <br></br><br></br>
          <hr></hr>
          <br></br><br></br>

        <div className='w-[70vw]'>
            <div className='w-[35vw] inline-block text-white'>
            © 2024 Recycle Tech. All Rights Reserved.
            </div>
            <div className='w-[35vw] inline-block text-blue'>
            <i class="fi fi-rr-envelope"></i><i class="fi fi-brands-instagram"></i>
            </div>
        </div>
        </main>
      </div>
    </div>
  )
}

export default Footer