"use client";

const GetInTouch = () => {
  return (
    <>
      <section className="px-4 xl:px-10 mb-12 xl:my-24">
        <div className="bg-white rounded-xl w-full h-auto xl:h-[606px] p-4 xl:py-[80px] xl:px-[116px]">
          <div className="flex flex-col xl:grid xl:grid-cols-2 w-full h-full">
            
            <div className="flex flex-col w-full xl:w-1/2 justify-between gap-4 ">
              <h1 className="text-3xl xl:text-7xl text-black">THE MOST PRESTIGIOUS INTERNSHIP</h1>
              <div className="w-full h-[45px]">
                <p className="text-balance text-black">
                  Drop your email, and we can notify you when internships open.
                </p>
              </div>
            </div>

            <div className="flex flex-col mt-6 xl:mt-0  ">
               <form action="" className="flex flex-col gap-2">
                <label htmlFor="" className="text-black">Full Name</label>
                <input type="text" className="bg-black rounded-lg p-3 mb-2 text-white" />
                <label htmlFor="" className="text-black">University</label>
                <input type="text" className="bg-black rounded-lg p-3 mb-2 text-white" />
                <label htmlFor="" className="text-black">Email</label>
                <input type="text" className="bg-black rounded-lg p-3 mb-2 text-white" />
                <label htmlFor="" className="text-black">Phone Number</label>
                <input type="text" className="bg-black rounded-lg p-3 mb-6 text-white" />
                <button className="p-3 bg-[#99FF6E] rounded-xl font-bold text-black">Submit</button>
               </form>
                
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetInTouch;
