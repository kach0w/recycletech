import React from 'react';

export default function About() {
  return (
    <div className="bg-[#0e465a] mt-9 sm:mt-0 pt-7 sm:pt-16 sm:pb-20 flex items-center text-center relative overflow-hidden">
      <div className="mx-auto sm:pb-12 sm:pt-9 md:pt-6 xl:pt-0 z-10">
        <span className="sm:block w-full text-[white]  text-3xl sm:text-5xl font-bold">By the Numbers</span>
        <main className="mt-9 mb-7 md:mt-20">
          <div className="mx-auto sm:max-w-10xl flex flex-col sm:flex-row sm:space-x-32">
            {/* Section 1 */}
            <div className="flex flex-col items-center text-center px-4">
              <h3 className="text-6xl sm:text-9xl font-bold text-white mb-4">123</h3>
              <p className="text-base text-white">Devices Donated</p>
            </div>
            {/* Section 2 */}
            <div className="flex flex-col items-center text-center px-4 ">
              <h3 className="text-6xl sm:text-9xl font-bold text-white mb-4 ">$123</h3>
              <p className="text-base text-white">Worth of Devices</p>
            </div>
            {/* Section 3 */}
            <div className="flex flex-col items-center text-center">
              <h3 className="text-6xl sm:text-9xl font-bold text-white mb-4">123</h3>
              <p className="text-base text-white">Lives Impacted</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
