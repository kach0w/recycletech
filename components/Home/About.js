import React from 'react';

export default function About() {
  return (
    <div className="bg-[white] pt-8 sm:pt-16 sm:pb-20 flex items-center text-center relative overflow-hidden">
      <div className="mx-auto sm:pb-12 sm:pt-9 mb:10 md:pt-6 xl:pt-0 z-10">
        <span className="sm:block w-full text-[#0e465a] py-5 mb-5 sm:mb-0 text-3xl sm:text-5xl font-bold">Our Mission</span>
        <main className="mt-5 md:mt-20">
          <div className="mx-auto sm:max-w-4xl flex flex-col sm:flex-row justify-between sm:space-x-8">
            {/* Section 1 */}
            <div className="flex flex-col items-center text-center px-4 border-2 p-10 rounded-lg bg-[#0e465a] w-[100vw] sm:w-[400px]">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">1. Supporting the Community</h3>
              <p className="text-base text-white">Empowering individuals through technology access and education.</p>
            </div>
            {/* Section 2 */}
            <div className="flex flex-col items-center text-center px-4 border-2 p-10 rounded-lg bg-[#0e465a] w-[100vw] sm:w-[400px]">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 ">2. Refurbishing Devices</h3>
              <p className="text-base text-white">Giving old devices a new life and reducing e-waste.</p>
            </div>
            {/* Section 3 */}
            <div className="flex flex-col items-center text-center px-4 border-2 p-10 rounded-lg bg-[#0e465a] w-[100vw] sm:w-[400px]">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4">3. Donations</h3>
              <p className="text-base text-white">Supporting schools and libraries with electronic devices.</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
