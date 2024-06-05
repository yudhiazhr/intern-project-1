import Link from "next/link";
import Record from "../../../public/output.json";
import { useEffect } from "react";
import gsap from "gsap-trial";
import { SplitText } from "gsap-trial/all";

const Home = () => {
  console.log(Record[0].exam[0].data);

  useEffect(() => {
    gsap.registerPlugin(SplitText);

    gsap
      .timeline({
        duration: 1,
      })
      .from(".split-text > span", { opacity: 0, stagger: 0.1, y: 40 })
      .to('.hero-image', {clipPath: 'polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)'}, 0)
      .from("desc", {opacity: 0, y: 30})
  }, []);

  return (
    <>
      {/* Hero */}
      <div className="xl:hidden absolute w-full min-h-dvh flex flex-col">
        <img
          src={Record[0].image}
          className="h-[100dvh] w-full object-cover"
          alt=""
        />
        <div className="absolute flex flex-col w-full h-full top-0 rounded-o py-6 xl:p-[50px] justify-center items-center bg-gradient-to-b from-white/0 via-white/0 to-black"></div>
      </div>
      <section className=" pt-[100px] ] min-h-dvh px-10 flex flex-col justify-between xl:justify-normal">
        <div className="flex flex-col xl:flex-row justify-center xl:justify-between items-center">
          <div className="flex justify-center items-center text-center xl:text-left h-[210px] w-[293px] xl:w-[493px]">
            <h1 className=" split-text z-10 text-white  text-4xl xl:text-7xl text-balance">
              <span className="inline-block">CRETIVOX</span>{" "}
              <span className="inline-block">INTERNSHIP</span>{" "}
              <span className="inline-block">EXPERIENCES</span>
            </h1>
          </div>
          <div className="hidden xl:block bg-white h-[153px] w-[412px] rounded-md"></div>
        </div>

        <div className="hero-image">
          <img
            src={Record[0].image}
            alt=""
            className="hidden xl:block mt-[24px] rounded-xl w-full h-[550px] object-cover object-center"
          />
        </div>

        <div className="mt-[24px] text-white z-10">
          <h1 className=" text-lg text-center xl:text-left desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse non
            voluptas nisi dignissimos natus alias at neque sed unde, reiciendis
            nostrum vero, nam debitis itaque distinctio? Tenetur sapiente rerum,
            delectus voluptates eaque aspernatur ipsa odit ullam distinctio
            voluptatum dolores repudiandae. Aliquid quos eos omnis dolorem
            pariatur, quas rem fuga vel?
          </h1>
        </div>
      </section>

      {/* Story */}
      <section className="py-16  xl:pt-0 overflow-hidden relative mb-[24px]  flex-col  px-10 flex xl:justify-center xl:items-center min-h-dvh gap-4">
        <h1 className=" z-20 text-4xl xl:text-6xl text-white">Story</h1>
        <p className=" z-20 text-lg xl:text-[22px] text-white text-justify xl:text-center">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
          necessitatibus ab ducimus totam? Reprehenderit perferendis recusandae
          libero voluptatem voluptatum perspiciatis molestias non. Ducimus
          reiciendis impedit qui cum laudantium vitae omnis tenetur numquam
          dignissimos odit delectus accusantium hic explicabo at minima, iusto
          saepe nihil tempora doloremque. Quae molestias libero omnis fugit et
          in dignissimos temporibus consequuntur commodi amet facilis aut
          debitis recusandae, nulla sint vel voluptas obcaecati perspiciatis
          ipsum sequi reprehenderit quia. Incidunt culpa doloremque ratione
          eaque accusamus provident perspiciatis quos atque officia eius
          sapiente, rerum vel unde amet dolore est dicta iusto harum, quae ullam
          ipsa aspernatur praesentium! Provident, culpa!
        </p>

        {/* Image for Mobile */}
        <div class="xl:hidden grid grid-cols-2 xl:grid-cols-4 gap-4">
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""
              />
            </div>
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt=""
              />
            </div>
          </div>
          <div class="grid gap-4">
            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                alt=""
              />
            </div>

            <div>
              <img
                class="h-auto max-w-full rounded-lg"
                src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                alt=""
              />
            </div>
          </div>
        </div>

        {/* Image absolute */}
        <div className="hidden xl:flex">
          <img
            src={Record[0].image}
            className="xl:absolute top-[30dvh] -left-64 w-[604px] h-[497px] object-cover rounded-def "
            alt=""
          />

          <img
            src={Record[0].image}
            className="absolute top-24 left-[370px]  w-[65dvh] h-[497px] object-cover rounded-def "
            alt=""
          />

          <img
            src={Record[0].image}
            className="absolute bottom-32 right-[395px]  w-[65dvh] h-[497px] object-cover rounded-def "
            alt=""
          />

          <img
            src={Record[0].image}
            className="absolute top-[30dvh] -right-[230px] w-[604px] h-[497px] object-cover rounded-def "
            alt=""
          />
        </div>
      </section>

      {/* Batch */}
      <section className="my-[24px] px-10 flex flex-col gap-8 ">
        {/* Season 1 */}
        <h1 className=" text-4xl xl:text-7xl text-white text-center">
          SEASON I
        </h1>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 xl:gap-5 mb-10 xl:mb-20">
          {Record.map((data, index) => (
            <>
              <div key={index}>
                <Link href={`/detail/${data.id}`}>
                  <div className="relative group ">
                    <img
                      src={data.image}
                      alt=""
                      className=" rounded-xl xl:rounded-[41px] relative aspect-3/4 object-cover"
                    />

                    <div className="absolute flex flex-col justify-between w-full h-full top-0 rounded-o py-6 xl:p-[50px]  items-center bg-gradient-to-b from-white/0 via-white/0 to-black hover:bg-black/50 duration-300 transition-all ">
                      <p className=" text-md xl:text-2xl ">{data.batch}</p>
                      <div className="flex gap-2 items-center justify-center">
                        <h2 className="text-md xl:text-2xl text-transparent group-hover:text-white transition-all duration-300">
                          See detail
                        </h2>
                        <svg
                          className="w-8 h-8 text-transparent group-hover:text-white transition-all duration-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 12H5m14 0-4 4m4-4-4-4"
                          />
                        </svg>
                      </div>
                      <h1 className=" text-xl xl:text-4xl ">{data.title}</h1>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          ))}
        </div>

        {/* Season 2 */}
        <h1 className=" text-4xl xl:text-7xl text-white text-center">
          SEASON II
        </h1>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 xl:gap-5 mb-10 xl:mb-20">
          {Record.map((data, index) => (
            <>
              <div key={index}>
                <Link href={`/detail/${data.id}`}>
                  <div className="relative group  ">
                    <img
                      src={data.image}
                      alt=""
                      className=" rounded-xl xl:rounded-[41px] relative aspect-3/4 object-cover"
                    />

                    <div className="absolute flex flex-col justify-between w-full h-full top-0 rounded-o py-6 xl:p-[50px]  items-center bg-gradient-to-b from-white/0 via-white/0 to-black hover:bg-black duration-300 transition-all">
                      <p className=" text-md xl:text-2xl ">{data.batch}</p>
                      <div className="flex gap-2 items-center justify-center">
                        <h2 className="text-md xl:text-2xl text-transparent group-hover:text-white transition-all duration-300">
                          See detail
                        </h2>
                        <svg
                          className="w-8 h-8 text-transparent group-hover:text-white transition-all duration-300"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M19 12H5m14 0-4 4m4-4-4-4"
                          />
                        </svg>
                      </div>
                      <h1 className=" text-xl xl:text-4xl ">{data.title}</h1>
                    </div>
                  </div>
                </Link>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
