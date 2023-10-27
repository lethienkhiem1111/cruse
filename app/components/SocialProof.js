"use client";

import Image from "next/image";

function SocialProof() {
  return (
   <section class="bg-white max-w-screen-xl mb-[80px]">
    <div class="grid grid-cols-4 gap-4 gap-4mx-auto text-gray-900 w-">
      <div class="flex flex-col items-center justify-center min-w-[200px]">
        <h2 class="mb-2 text-3xl md:text-4xl font-extrabold">225k+</h2>
        <p class="font-light text-gray-500">Project done</p>
      </div>
      <div class="flex flex-col items-center justify-center min-w-[200px]">
        <h2 class="mb-2 text-3xl md:text-4xl font-extrabold">25k+</h2>
        <p class="font-light text-gray-500">Our team</p>
      </div>
      <div class="flex flex-col items-center justify-center min-w-[200px]">
        <h2 class="mb-2 text-3xl md:text-4xl font-extrabold">55k+</h2>
        <p class="font-light text-gray-500">Company clients</p>
      </div>
      <div class="flex flex-col items-center justify-center min-w-[200px]">
        <h2 class="mb-2 text-3xl md:text-4xl font-extrabold">350k+</h2>
        <p class="font-light text-gray-500">Happy clients</p>
      </div>
    </div>
</section>
  );
}

export default SocialProof;
