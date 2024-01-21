import React from 'react'
import logo from '../assets/logo-bg.png'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='mx-auto w-[100vw] top-0 z-20 fixed'>
        <div className='w-[100vw] h-[3.5rem] sm:h-[8rem] bg-[#ffffff] flex z-3 fixed'>

  
        <a href="../" className='flex w-[7rem] sm:w-[50vw] h-[5rem] text-center mx-auto'>
          <div className='text-[#222] mx-auto'>
            <Image className='inline-block mt-[1rem]' src={logo}></Image>
            {/* <h1 className='inline-block align-middle font-bold text-[0.7rem] sm:text-[2rem]'>Recycle Tech</h1> */}
          </div>
        </a>
        
        <div className='flex w-[16rem] sm:w-[50vw]  text-[0.8rem] sm:text-[1.5rem] h-[5rem] pt-4 sm:pt-6 m-auto'>
          <div className="mx-auto text-slate-700  ">
          <a className='font-bold pr-2 sm:pr-10 hover:text-[#464645]' href="/team">Team</a>
            <a className='font-bold pr-2 sm:pr-10 hover:text-[#464645]' href="/programs">Programs</a>
            <a className='font-bold pr-2 sm:pr-10 hover:text-[#464645]' href="/donate">Get Involved</a>
            <a className='font-bold pr-2 sm:pr-10 hover:`text-[#464645]' href="/blog">Blog</a>
          </div>
        </div>
        </div>
    </div>
  )
}

export default Navbar