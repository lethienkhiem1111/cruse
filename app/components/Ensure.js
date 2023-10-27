"use client";

import Image from "next/image";

function Ensure() {
  return (
    <section className="max-w-screen-xl my-8 lg:my-[120px] rounded-xl ">
      <div class="gap-16 items-center  mx-auto  lg:grid lg:grid-cols-2 ">
        
        <div class="font-light text-gray-500 sm:text-lg p-8">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            We ensure the best consultation for our clients
          </h2>

          <ul className="flex flex-col gap-4">
            <li className="flex gap-3 items-start">
              <Image
                className=""
                src="/ensure-icon1.svg"
                width={60}
                height={60}
                alt="icon"
              ></Image>
              <div className="flex flex-col text-gray-900">
                <h3 className="mb-2 font-semibold text-2xl">
                    Tax Management
                </h3>
                <p>
                    It is a long established fact that a reader will be distracted
                </p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <Image
                className=""
                src="/ensure-icon2.svg"
                width={60}
                height={60}
                alt="icon"
              ></Image>
              <div className="flex flex-col text-gray-900">
                <h3 className="mb-2 font-semibold text-2xl">
                    Booking and virtual CFO
                </h3>
                <p>
                  It is a long established fact that a reader will be distracted{" "}
                </p>
              </div>
            </li>
            <li className="flex gap-3 items-start">
              <Image
                className=""
                src="/ensure-icon3.svg"
                width={60}
                height={60}
                alt="icon"
              ></Image>
              <div className="flex flex-col text-gray-900">
                <h3 className="mb-2 font-semibold text-2xl">
                    IRS tax problems
                </h3>
                <p>
                  It is a long established fact that a reader will be distracted{" "}
                </p>
              </div>
            </li>
          </ul>
        </div>
        <div className="relative h-full rounded-lg overflow-hidden">
          <Image
            src="/ensure-section.jpg"
            alt="Ensure image"
            fill
            style={{
              objectFit: "cover", // cover, contain, none
            }}
          ></Image>
        </div>
      </div>
    </section>
  );
}

export default Ensure;
