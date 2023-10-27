import Image from "next/image";

function FinancialFuture(){
    return(
        <section className="max-w-screen-xl my-8 lg:my-[120px] rounded-xl ">
      <div class="gap-16 items-center  mx-auto  lg:grid lg:grid-cols-2 ">
        
        
        <div className="relative h-full rounded-lg overflow-hidden">
          <Image
            src="/FinancialFuture.webp"
            alt="Ensure image"
            fill
            style={{
              objectFit: "cover", // cover, contain, none
            }}
          ></Image>
        </div>
        <div class="font-light text-gray-500 sm:text-lg p-8">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
            Feel confident in your financial future
          </h2>
          <p>Vorem ipsum dolor sit amet, consectetur adipiscing elit. Eget rutrum sit ut egestas ipsum. Ullamcorper odio justo, pretium, sed volutpat consectetur.</p>
          <ul className="flex flex-col gap-4 mt-6">
            <li className="flex gap-3 items-center">
                <svg width={24} height={24} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" class="svg-inline--fa fa-circle-check icon " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-testid="icon-test"><path fill="#AEA1F7" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                <p>Accumsan, ultrices porta nisi proin malesuada eget.</p>
            </li>
            <li className="flex gap-3 items-center">
                <svg width={24} height={24} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" class="svg-inline--fa fa-circle-check icon " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-testid="icon-test"><path fill="#AEA1F7" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                <p>Koccumsan, ultrices porta nisi proin malesuada.</p>
            </li>
            <li className="flex gap-3 items-center">
                <svg width={24} height={24} aria-hidden="true" focusable="false" data-prefix="fas" data-icon="circle-check" class="svg-inline--fa fa-circle-check icon " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-testid="icon-test"><path fill="#AEA1F7" d="M256 512c141.4 0 256-114.6 256-256S397.4 0 256 0S0 114.6 0 256S114.6 512 256 512zM369 209L241 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L335 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z"></path></svg>
                <p>Accumsan, ultrices porta nisi proin malesuada eget.</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    )
}

export default FinancialFuture;