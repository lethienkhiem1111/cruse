"use client";

import Image from "next/image";

function FinancialDream() {
  return (
    <section className="max-w-screen-xl my-8 lg:my-[120px] rounded-xl bg-[#AEA1F7]">
            <div class="gap-16 items-center  mx-auto  lg:grid lg:grid-cols-2 ">
            <div className="relative h-full rounded-lg overflow-hidden">
                <Image src="/finacialdream.jpg" alt="Jese Leos avatar"
                 fill
          style={{
            objectFit: 'cover', // cover, contain, none
          }}></Image>
                </div>
                <div class="font-light text-gray-500 sm:text-lg p-8">
                    <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Get right solution for your financial dream</h2>
                    <p class="mb-6 text-[#3f3f46]">Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.</p>
                    <ul className="flex flex-col gap-4">
                      <li className="flex gap-3 items-start">
                        <Image className="" src="/icon-dream1.svg" width={60} height={60} alt="icon"></Image>
                        <div className="flex flex-col text-gray-900">
                          <h3 className="mb-2 font-semibold text-2xl">Financial Advisory</h3>
                          <p>It is a long established fact that a reader will be distracted </p>
                        </div>
                      </li>
                      <li className="flex gap-3 items-start">
                        <Image className="" src="/icon-dream2.svg" width={60} height={60} alt="icon"></Image>
                        <div className="flex flex-col text-gray-900">
                          <h3 className="mb-2 font-semibold text-2xl">Financial Guidance</h3>
                          <p>It is a long established fact that a reader will be distracted </p>
                        </div>
                      </li>
                      <li className="flex gap-3 items-start">
                        <Image className="" src="/icon-dream3.svg" width={60} height={60} alt="icon"></Image>
                        <div className="flex flex-col text-gray-900">
                          <h3 className="mb-2 font-semibold text-2xl">Financial Advisory</h3>
                          <p>It is a long established fact that a reader will be distracted </p>
                        </div>
                      </li>
                    </ul>
                </div>
                
            </div>
       
  
</section>
  );
}

export default FinancialDream;
