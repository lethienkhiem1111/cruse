import Image from "next/image";

function Business() {
  return (
    <section className="max-w-screen-xl my-8 lg:my-[120px] rounded-xl bg-[#AEA1F7]">
      <div class="gap-16 items-center  mx-auto  lg:grid lg:grid-cols-2 p-10">
        
        <div class="font-light text-gray-500 sm:text-lg">
          <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">
          Get free business consultation today
          </h2>
          <p>
          It is a long established fact that a reader will be distracted by the readable content of normal.
          </p>
          <ul className="flex flex-col gap-4 mt-6">
            <li className="flex gap-3 items-center">
            <svg width={32} height={32} aria-hidden="true" focusable="false" data-prefix="far" data-icon="square-check" class="svg-inline--fa fa-square-check icon " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-testid="icon-test"><path fill="currentColor" d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"></path></svg>
              <p>Monthly Assessment Report</p>
            </li>
            <li className="flex gap-3 items-center">
            <svg width={32} height={32} aria-hidden="true" focusable="false" data-prefix="far" data-icon="square-check" class="svg-inline--fa fa-square-check icon " role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-testid="icon-test"><path fill="currentColor" d="M211.8 339.8C200.9 350.7 183.1 350.7 172.2 339.8L108.2 275.8C97.27 264.9 97.27 247.1 108.2 236.2C119.1 225.3 136.9 225.3 147.8 236.2L192 280.4L300.2 172.2C311.1 161.3 328.9 161.3 339.8 172.2C350.7 183.1 350.7 200.9 339.8 211.8L211.8 339.8zM0 96C0 60.65 28.65 32 64 32H384C419.3 32 448 60.65 448 96V416C448 451.3 419.3 480 384 480H64C28.65 480 0 451.3 0 416V96zM48 96V416C48 424.8 55.16 432 64 432H384C392.8 432 400 424.8 400 416V96C400 87.16 392.8 80 384 80H64C55.16 80 48 87.16 48 96z"></path></svg>
              <p>Montly Rent Problem Solution</p>
            </li>
          </ul>
        </div>

        <div className="rounded-lg bg-[#FAF7E5]">
          <form action="">
            <div>
                <label htmlFor="">Name</label>
                <input type="text" placeholder="Enter your name"/>
            </div>
            <div>
                <label htmlFor="">Email</label>
                <input type="text" placeholder="Enter your email"/>
            </div>
            <div>
                <label htmlFor="">Message</label>
                <textarea type="text" placeholder="Write your message"/>
            </div>
            <button className="bg-[#A2DFF4]">Submit</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Business;
