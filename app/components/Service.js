"use client";

import Image from "next/image";

function Service() {
  return (
    <section className="bg-gray-800 w-full rounded-xl">
  <div className="py-8 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
          <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-white ">We provide the best service in town</h2>
      </div> 
      <div className="grid gap-8 lg:grid-cols-3">
          <article className="p-6 bg-[#AEA1F7] rounded-lg border border-gray-200 shadow-md">

            <Image className="mb-6" src="/IconService1.svg" alt="Jese Leos avatar" width={80} height={80}></Image>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Growing Financial</h2>
              <p className="mb-5 text-gray-800">There are many variations of passages of lorem ipsum available.</p>
              <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                      Read more
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
             
          </article> 
          <article className="p-6 bg-[#FFED87] rounded-lg border border-gray-200 shadow-md">

            <Image className="mb-6" src="/IconService2.svg" alt="Jese Leos avatar" width={80} height={80}></Image>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Personal Financial</h2>
              <p className="mb-5 text-gray-800">There are many variations of passages of lorem ipsum available.</p>
              <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                      Read more
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
             
          </article> 
          <article className="p-6 bg-[#A2DFF4] rounded-lg border border-gray-200 shadow-md">

            <Image className="mb-6" src="/IconService3.svg" alt="Jese Leos avatar" width={80} height={80}></Image>
              <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Corporate Finance</h2>
              <p className="mb-5 text-gray-800">There are many variations of passages of lorem ipsum available.</p>
              <a href="#" className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline">
                      Read more
                      <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                  </a>
             
          </article> 
                      
      </div>  
  </div>
</section>
  );
}

export default Service;
