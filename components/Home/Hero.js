import React, { useState } from 'react';
import Link from 'next/link';

export default function Hero() {
 return (
   <div className="bg-[#0e465acc] bg-[url('/laptops.jpg')] z-4 h-auto mt-[12vh] bg-cover bg-gray-900 bg-no-repeat sm:pt-10 sm:pb-9 bg-center flex items-center text-center overflow-hidden">
     <div className="mx-auto sm:pt-9 sm:pb-12 md:pt-6 xl:pt-0 z-10">
       <main className="mt-5 md:mt-20">
         <div className="mx-auto sm:text-center items-center">
           <div className="">
             <h1 className="mt-4 sm:text-5xl font-medium sm:mt-5 lg:mt-6 lg:text-7xl xl:text-7xl mx-auto">
               <span className="text-white lg:w-[100vw]">Solving the world's</span>
               <span className="block sm:w-full text-white font-bold">
                 leading issues
               </span>
             </h1>
             <p className="max-w-xl mx-auto text-2xl sm:text-3xl text-[white] mt-6">
               An nonprofit devoted to closing the digital divide and reducing e-waste.
             </p>
           </div>
           <div className="text-[white] mb-10 mt-10 z-2">
             <a className="rounded-md bg-[#0e465a] hover:bg-[#0e465acc] p-5 font-extrabold border-5" href="/donate">Donate Now</a>
           </div>
         </div>
       </main>
     </div>
     <div className="w-full backdrop-blur-sm bg-[#084e3246] absolute top-0 left-0 right-0 bottom-0"></div>
   </div>
 );
}
