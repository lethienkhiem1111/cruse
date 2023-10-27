"use client";

import Image from "next/image";
import Link from "next/link";

function Hero() {
  return (
    <section class="bg-white ">
      <div class="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0  lg:grid-cols-12">
        <div class="mr-auto lg:col-span-7">
          <h1 class="max-w-xl mb-4 text-3xl font-bold  md:text-4xl xl:text-5xl ">
            Get Solutions From First Class Financial Consultants
          </h1>
          <p class="max-w-xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout.{" "}
          </p>

          <a
            href="#"
            class="inline-flex items-center bg-blue-700 justify-center px-4 h-[40px] text-base font-medium text-center text-white rounded-lg hover:bg-blue-900 "
          >
            Get started
          </a>
        </div>
        <div class="mt-10 md:mt-0 lg:col-span-5 lg:flex rounded-2xl overflow-hidden">
          <Image src="/hero.jpg" width={600} height={500} alt="mockup"></Image>
        </div>
      </div>
      <div class="my-8 lg:my-[120px]  mx-auto max-w-screen-xl px-4">
        <h2 class="mb-8 lg:mb-16 text-3xl font-extrabold tracking-tight leading-tight text-center text-gray-900 md:text-4xl">
          Customers
        </h2>
        <div class="grid grid-cols-2 gap-8 text-gray-500 sm:gap-12 md:grid-cols-3 lg:grid-cols-6 dark:text-gray-400">
          <a href="#" class="flex justify-center items-center">
            <Image src="/logo-1.svg" width={140} height={60}></Image>
          </a>
          <a href="#" class="flex justify-center items-center">
            <Image src="/logo-1.svg" width={140} height={60}></Image>
          </a>
          <a href="#" class="flex justify-center items-center">
            <Image src="/logo-2.svg" width={140} height={60}></Image>
          </a>

          <a href="#" class="flex justify-center items-center">
            <Image src="/logo-3.svg" width={140} height={60}></Image>
          </a>
          <a href="#" class="flex justify-center items-center">
            <Image src="/logo-4.svg" width={140} height={60}></Image>
          </a>
          <a href="#" class="flex justify-center items-center">
            <Image src="/logo-5.svg" width={140} height={60}></Image>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
