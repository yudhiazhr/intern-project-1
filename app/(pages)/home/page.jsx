import Record from "../../../public/output.json";
import { useEffect } from "react";
import gsap from "gsap-trial";
import { DrawSVGPlugin, MotionPathPlugin, SplitText } from "gsap-trial/all";
import AOS from "aos";
import "aos/dist/aos.css";
import Preloader from "@/app/components/Preloader";
import StorySectionMobile from "@/app/components/mobile/StorySection";
import AboutSectionMobile from "@/app/components/mobile/AboutSection";
import Link from "next/link";
import { ScrollTrigger } from "gsap/all";

import BgHero from "@/public/imgs/Group 30.png";
import Image from "next/image";

const Home = () => {
  useEffect(() => {
    gsap.registerPlugin(
      ScrollTrigger,
      SplitText,
      DrawSVGPlugin,
      MotionPathPlugin
    );
    AOS.init();

    const gsapContext = gsap.context(() => {
      /* Marquee image Animation */
      gsap
        .to(".marquee_part", {
          yPercent: -100,
          repeat: -1,
          duration: 100,
          ease: "linear",
        })
        .totalProgress(0.2);

      gsap.set(".marquee_inner", {
        yPercent: 0,
      });
      /* Marquee image Animation End */

      /* Animation marquee text vertical */
      const marqVerti = gsap.timeline({
        repeat: -1,
        defaults: { duration: 1, delay: 1, ease: "expo.inOut" },
      });

      marqVerti.to(".marquee-vertical", { yPercent: -100 });
      marqVerti.to(".marquee-vertical", { yPercent: -200 });
      marqVerti.to(".marquee-vertical", { yPercent: -300 });
      marqVerti.to(".marquee-vertical", { yPercent: 0 });

      /* Animation marquee text vertical end */

      /* Animation Hero Section */
      const tl = gsap.timeline({
        duration: 2,
      });

      tl.from(".split-text", {
        y: 130,
        ease: "back.inOut",
        duration: 1,
        stagger: 0.3,
      })
        .from(".marquee-vertical", { y: 30 })
        .from(".container-video", { opacity: 0, duration: 1 }, 2)
        .fromTo(
          ".hero-image",
          { opacity: 0 },
          { opacity: 0.65, clipPath: "circle(75% at 50% 50%)" },
          2
        )
        .from(".desc", { opacity: 0, y: 30 })
        .to(".arrow-down", {
          y: 10,
          duration: 1,
          ease: "power1.inOut",
          repeat: -1,
          yoyo: true,
        });
      /* .to(".hero-image", {
          duration: 2,
          repeat: -1,
          y: 50,
          yoyo: true,
        }, 1); */
      tl.add(marqVerti, 3.4);

      /* Animation Hero Section End */

      /* Animation About section */
      const mySplitText = new SplitText(".splitText-about", { type: "chars" });
      const chars = mySplitText.chars;

      gsap.from(chars, {
        opacity: 0.05,
        stagger: 0.5,
        ease: "back.out",
        scrollTrigger: {
          trigger: ".splitText-about",
          scrub: true,
          pin: ".about-section",
        },
      });
      /* Animation About Section end */

      /* Animation Story Section */
      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: ".section-story",
          scrub: 1,
          pin: true,
          pinSpacer: false,
          anticipatePin: 1,
        },
      });

      scrollTl.fromTo(
        ".inner-image",
        { translateX: 0 },
        {
          translateX: "-100vw",
          duration: 1,
          ease: "none",
          stagger: 0.5,
        }
      );
      /* Animation Story Section End */

      /* Animation motion path */
      const pulses = gsap
        .timeline({
          defaults: {
            scale: 2,
            autoAlpha: 1,
            transformOrigin: "center",
            ease: "elastic(2.5, 1)",
          },
        })
        .to(".ball02, .text01", {}, 0.68)
        .to(".ball03, .text02", {}, 1.12)
        .to(".ball04, .text03", {}, 1.7);

      gsap
        .timeline({
          scrollTrigger: {
            trigger: "#svg",
            scrub: true,
            start: "top 25%",
            end: "bottom ",
          },
        })
        /* .to(".ball02", { autoAlpha: 1, duration: 1.28 }) */
        .from(".theLine", { drawSVG: 0, duration: 4 }, 0)
        .to(
          ".ball01",
          {
            motionPath: {
              path: ".theLine",
              align: ".theLine",
              alignOrigin: [0.5, 0.5],
            },
            duration: 4,
          },
          0
        )
        .add(pulses, 0);
      /* Animation motion path */
    });

    return () => {
      /* revert/kill/clear gsap if move to another page */
      gsapContext.revert();
    };
  }, []);

  return (
    <div>
      {/* Home */}
      <div className="hero-image xl:hidden absolute w-full min-h-dvh flex flex-col">
        <img
          src={Record[0].image}
          className="h-[100dvh] w-full object-cover"
          alt=""
        />
        <div className="absolute flex flex-col w-full h-full top-0 rounded-o py-6 xl:p-[50px] justify-center items-center bg-gradient-to-b from-white/0 via-white/0 to-black"></div>
      </div>

      <section className="marquee_inner  relative overflow-hidden pb-28 xl:pb-4 min-h-dvh flex flex-col justify-between xl:justify-center items-center gap-10  pt-24 xl:pt-[80px]">
        <div className="w-full xl:w-1/2 text-center">
          <div className="overflow-hidden">
            <h1 className="split-text text-2xl xl:text-9xl font-bold font-acumin-pro-book">
              THE MOST
            </h1>
          </div>
          <div className="overflow-hidden">
            <h1 className="split-text text-2xl xl:text-9xl font-bold font-acumin-pro-book">
              PRESTIGIOUS
            </h1>
          </div>
          <div className="overflow-hidden">
            <h2 className="split-text text-2xl xl:text-9xl italic font-acumin-pro-book">
              INTERSHIP
            </h2>
          </div>
        </div>

        <div className="flex flex-col justify-between xl:justify-center items-center gap-8">
          <div className="overflow-hidden h-8 w-full ">
            {Record.map((data, index) => (
              <h1
                key={index}
                className="marquee-vertical text-center text-white text-xl xl:text-2xl text-balance font-monbaiti"
              >
                {data.title}
              </h1>
            ))}
          </div>
        </div>

        <div className="absolute desc flex flex-col justify-center items-center gap-4 bottom-4 ">
          <h1 className="text-sm xl:text-lg px-4 py-2 bg-white/25 rounded-def cursor-pointer">
            Explore more
          </h1>
          <svg
            className="arrow-down w-6 h-6 xl:w-12 xl:h-12 text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 19V5m0 14-4-4m4 4 4-4"
            />
          </svg>
        </div>

        {/* Image Absolute */}
          <div className="marquee_part absolute hidden xl:flex xl:flex-col gap-10 h-dvh w-full justify-center items-center -z-[1]">
            <Image
              src={BgHero}
              alt="Background Hero"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
             <Image
              src={BgHero}
              alt="Background Hero"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"

            />
             <Image
              src={BgHero}
              alt="Background Hero"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"

            />
          </div>
        {/* <div className="marquee_part absolute hidden xl:flex gap-10 h-dvh w-full justify-center items-center -z-[1]">
          <img
            src={Record[0].image}
            className="hero-image absolute opacity-65 left-[300px] top-32 w-[500px] h-96 object-cover "
            alt=""
          />

          <img
            src={Record[0].image}
            className="hero-image absolute opacity-65 left-[500px] -bottom-24 w-96 h-96 object-cover "
            alt=""
          />

          <img
            src={Record[0].image}
            className="hero-image absolute opacity-65 right-[700px] top-0 w-96 h-96 object-cover "
            alt=""
          />

          <img
            src={Record[0].image}
            className="hero-image absolute opacity-65 right-44 bottom-24 w-[600px] h-96 object-cover "
            alt=""
          />

          <img
            src={Record[0].image}
            className="hero-image absolute opacity-65 left-[700px] bottom-[-500px] w-[600px] h-96 object-cover "
            alt=""
          />

          <img
            src={Record[0].image}
            className="hero-image absolute opacity-65 right-[100px] bottom-[-300px] w-96 h-96 object-cover "
            alt=""
          />

          <img
            src={Record[0].image}
            className="hero-image absolute opacity-65 left-[100px] bottom-[-700px] w-96 h-96 object-cover "
            alt=""
          />

          <img
            src={Record[0].image}
            className="hero-image absolute opacity-65 right-[400px] bottom-[-800px] w-96 h-96 object-cover "
            alt=""
          />
        </div> */}
      </section>
      {/* <section className="pt-[100px] min-h-dvh px-10 flex flex-col justify-between xl:justify-normal">
        <div className="flex flex-col xl:flex-row justify-center xl:justify-between items-center">
          <div className="flex justify-center text-center xl:justify-normal xl:text-left h-[210px] w-[293px] xl:w-[493px]">
            <div className="flex flex-col">
              <div className="overflow-hidden">
                <h1 className="split-text z-10 text-white text-2xl xl:text-7xl text-balance">
                  CRETIVOX
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="split-text z-10 text-white text-2xl xl:text-7xl text-balance">
                  INTERSHIP
                </h1>
              </div>
              <div className="overflow-hidden">
                <h1 className="split-text z-10 text-white text-2xl xl:text-7xl text-balance">
                  EXPERIENCE
                </h1>
              </div>
            </div>
          </div>
          <div className="container-video hidden xl:block bg-white h-[153px] w-[412px] rounded-md"></div>
        </div>

        <div className="hero-image">
          <img
            src={Record[0].image}
            alt=""
            className="hidden xl:block mt-[24px] rounded-xl w-full h-[550px] object-cover object-center"
          />
        </div>

        <div className="mt-[24px] text-white z-10 overflow-hidden">
          <h1 className="text-md text-center xl:text-left desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse non
            voluptas nisi dignissimos natus alias at neque sed unde, reiciendis
            nostrum vero, nam debitis itaque distinctio? Tenetur sapiente rerum,
            delectus voluptates eaque aspernatur ipsa odit ullam distinctio
            voluptatum dolores repudiandae. Aliquid quos eos omnis dolorem
            pariatur, quas rem fuga vel?
          </h1>
        </div>
      </section> */}

      {/* About */}
      <section className="hidden xl:flex about-section h-dvh px-10">
        <div className="splitText-about h-dvh w-full flex flex-col justify-center items-center gap-4">
          <h1 className="xl:text-[4vw] w-full leading-[115%] text-left">
            ABOUT
          </h1>
          <p className="text-xl xl:text-[4vw] leading-[115%] text-justify">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            quidem deserunt nostrum omnis in iure eligendi quo quam voluptatum
            voluptate? Repellat odit suscipit quos esse blanditiis veniam, neque
            ullam recusandae beatae deserunt minima quae qui dolor minus et, ex
            veritatis.
          </p>
        </div>
      </section>

      {/* About Mobile */}
      <AboutSectionMobile />

      {/* Story for desktop */}
      <section className="section-story py-16 xl:pt-0 relative mb-[24px] flex-col hidden xl:flex xl:justify-center xl:items-center min-h-dvh gap-4 overflow-hidden">
        <div className="wrap gap-4 xl:text-center h-dvh flex flex-col xl:items-center xl:justify-center relative">
          <div className="z-10 px-4 xl:px-[100px]">
            <h1 className="text-2xl xl:text-6xl text-white">Story</h1>
            <p className="text-md xl:text-[22px] text-white text-justify xl:text-center ">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iure
              necessitatibus ab ducimus totam? Reprehenderit perferendis
              recusandae libero voluptatem voluptatum perspiciatis molestias
              non. Ducimus reiciendis impedit qui cum laudantium vitae omnis
              tenetur numquam dignissimos odit delectus accusantium hic
              explicabo at minima, iusto saepe nihil tempora doloremque. Quae
              molestias libero omnis fugit et in dignissimos temporibus
              consequuntur commodi amet facilis
            </p>
          </div>

          {/* image absolute */}
          <div className="inner-image absolute hidden xl:flex gap-10 h-dvh w-full justify-center items-center">
            <img
              src={Record[0].image}
              className="absolute top-0 -left-[100px] w-[65dvh] h-[497px] object-cover rounded-def"
              alt=""
            />
            <img
              src={Record[0].image}
              className="absolute top-1/2 left-[500px] w-[65dvh] h-[497px] object-cover rounded-def"
              alt=""
            />
            <img
              src={Record[0].image}
              className="absolute top-0 left-[1000px] w-[65dvh] h-[497px] object-cover rounded-def"
              alt=""
            />
            <img
              src={Record[0].image}
              className="absolute top-1/3 left-[1500px] w-[65dvh] h-[497px] object-cover rounded-def"
              alt=""
            />
            <img
              src={Record[0].image}
              className="absolute top-0 left-[2000px] w-[65dvh] h-[497px] object-cover rounded-def"
              alt=""
            />
            <img
              src={Record[0].image}
              className="absolute top-1/2 left-[2500px] w-[65dvh] h-[497px] object-cover rounded-def"
              alt=""
            />
            <img
              src={Record[0].image}
              className="absolute top-0 left-[3000px] w-[65dvh] h-[497px] object-cover rounded-def"
              alt=""
            />
            <img
              src={Record[0].image}
              className="absolute top-1/2 left-[3500px] w-[65dvh] h-[497px] object-cover rounded-def"
              alt=""
            />
            <img
              src={Record[0].image}
              className="absolute top-0 left-[4000px] w-[65dvh] h-[497px] object-cover rounded-def"
              alt=""
            />
          </div>
        </div>
      </section>

      {/* Story for mobile */}
      <StorySectionMobile />

      {/* Timeline story */}
      <section
        id="svg"
        className=" min-h-dvh w-full pt-0 pb-0 md:pt-12 md:pb-4 flex justify-center items-center relative "
      >
        <div className=" w-full xl:w-1/2 ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 600 1200">
            <path
              className="theLine"
              d="M 282 4 Q 95 28 283 39 Q 473 65 258 78 Q 3 99 300 137 Q 680 205 307 400 Q 1 546 304 716 Q 661 888 309 1082 Q -2 1238 324 1260 Q 467 1286 326 1337 Q 258 1367 331 1413"
              fill="none"
              stroke="white"
              strokeWidth="10px"
            />

            <circle
              className="ball ball01 fill-white"
              r="15"
              cx="490"
              cy="240"
            ></circle>
            <circle
              className="ball ball02 fill-white invisible"
              r="15"
              cx="490"
              cy="240"
            ></circle>
            <circle
              className="ball ball03 fill-white invisible"
              r="15"
              cx="152"
              cy="554"
            ></circle>
            <circle
              className="ball ball04 fill-white invisible"
              r="15"
              cx="482"
              cy="900"
            ></circle>
          </svg>
        </div>
        <div className="absolute flex flex-col left-[70px] top-[150px]  md:top-[200px] md:left-[170px] xl:left-[200px] xl:top-[400px] w-1/2 md:w-1/3 xl:w-1/2  ">
          <h1 className="text-xl md:text-4xl xl:text-6xl text-white font-bold">
            2018
          </h1>
          <p className="text-sm leading-4 md:leading-0 md:text-xl xl:text-4xl text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus maxime totam quibusdam, architecto iusto culpa atque
            ea? Minus, omnis natus?
          </p>
        </div>
        <div className="absolute flex flex-col right-[50px] md:right-[200px] xl:right-[100px] top-[350px] md:top-[450px] xl:top-[950px] w-1/2 md:w-1/3 xl:w-1/2  ">
          <h1 className="text-xl md:text-4xl xl:text-6xl text-white font-bold">
            2019
          </h1>
          <p className="text-sm leading-4 md:leading-0 md:text-xl xl:text-4xl text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus maxime totam quibusdam, architecto iusto culpa atque
            ea? Minus, omnis natus?
          </p>
        </div>
        <div className="absolute flex flex-col left-[70px] top-[570px] md:left-[170px] xl:left-[200px] md:top-[700px] xl:top-[1550px] w-1/2 md:w-1/3 xl:w-1/2  ">
          <h1 className="text-xl md:text-4xl xl:text-6xl text-white font-bold">
            2020
          </h1>
          <p className="text-sm md:text-xl xl:text-4xl text-white">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Necessitatibus maxime totam quibusdam, architecto iusto culpa atque
            ea? Minus, omnis natus?
          </p>
        </div>
      </section>

      {/* Batch */}
      <section className="my-[24px] px-4 xl:px-10 flex flex-col gap-8 ">
        {/* Season 1 */}
        <h1 className=" text-2xl xl:text-7xl text-white text-center">
          SEASON I
        </h1>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 xl:gap-5 mb-10 xl:mb-20">
          {Record.map((data, index) => (
            <div
              key={index}
              data-aos={`fade-up`}
              data-aos-duration="1000"
              data-aos-delay={`${index * 100 + 300}`}
            >
              <Link href={`/detail/${data.id}`}>
                <div className="relative group ">
                  <img
                    src={Record[0].image}
                    alt=""
                    className="rounded-xl xl:rounded-[41px] relative aspect-3/4 object-cover"
                  />
                  <div className="absolute flex flex-col justify-between w-full h-full top-0 xl:rounded-o py-6 xl:p-[50px] items-center bg-gradient-to-b from-white/0 via-white/0 to-black hover:bg-black/50 duration-300 transition-all ">
                    <p className="text-md xl:text-2xl ">{data.batch}</p>
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                    </div>
                    <h1 className="text-xl xl:text-4xl ">{data.title}</h1>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* Season 2 */}
        <h1 className=" text-2xl xl:text-7xl text-white text-center">
          SEASON II
        </h1>
        <div className="grid grid-cols-2 xl:grid-cols-3 gap-3 xl:gap-5 mb-10 xl:mb-20">
          {Record.map((data, index) => (
            <div
              key={index}
              data-aos={`fade-up`}
              data-aos-duration="1000"
              data-aos-delay={`${index * 100 + 300}`}
            >
              <Link href={`/detail/${data.id}`}>
                <div className="relative group ">
                  <img
                    src={Record[0].image}
                    alt=""
                    className="rounded-xl xl:rounded-[41px] relative aspect-3/4 object-cover"
                  />
                  <div className="absolute flex flex-col justify-between w-full h-full top-0 xl:rounded-o py-6 xl:p-[50px] items-center bg-gradient-to-b from-white/0 via-white/0 to-black hover:bg-black/50 duration-300 transition-all ">
                    <p className="text-md xl:text-2xl ">{data.batch}</p>
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
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M19 12H5m14 0-4 4m4-4-4-4"
                        />
                      </svg>
                    </div>
                    <h1 className="text-xl xl:text-4xl ">{data.title}</h1>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
      {/* </>
      )} */}
    </div>
  );
};

export default Home;
