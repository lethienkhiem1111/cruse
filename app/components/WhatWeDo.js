"use client";

import Image from "next/image";
import WeDoItem from "./WeDoItem";

function WhatWeDo() {
  return (
   <section class="bg-[#FAF7E5] max-w-screen-xl w-full p-10">
    <h2 class="mb-2 text-3xl md:text-4xl font-extrabold">What We Do</h2>
    <p class=" text-gray-900">Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Tristique nibh libero vitae a dignissim.</p>
    <div className="grid md:grid-cols-2 md:gap-x-6  w-full mt-8">
        <div>
            <WeDoItem title="Financial planning"></WeDoItem>
            <WeDoItem title="Investment managament"></WeDoItem>
            <WeDoItem title="Financial planning"></WeDoItem>
        </div>
        <div>
            <WeDoItem title="Investment managament"></WeDoItem>
            <WeDoItem title="Financial planning"></WeDoItem>
            <WeDoItem title="Investment managament"></WeDoItem>
        </div>
    </div>  
</section>
  );
}

export default WhatWeDo;
