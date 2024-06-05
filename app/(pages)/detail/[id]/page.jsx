"use client";
import React, { useEffect, useState } from "react";
import record from "../../../../public/output.json";
import gsap from "gsap";

const DetailPage = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedExamIndex, setSelectedExamIndex] = useState(0);

  const toggleModal = (index) => {
    setSelectedExamIndex(index);
    setModalOpen(!modalOpen);
  };

  const MarqueeText = (count) => {
    const elements = [];
    for (let i = 0; i < count; i++) {
      elements.push(
        <React.Fragment key={i}>
          <div className="flex marquee_part">
            <h1 className="text-4xl xl:text-6xl font-bold">Showcase</h1>
            <span>
              <svg
                className="w-10 xl:w-16 h-10 xl:h-16 text-[#99FF6E]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </React.Fragment>
      );
    }
    return elements;
  };

  useEffect(() => {
    const tween = gsap
      .to(".marquee_part", {
        xPercent: -100,
        repeat: -1,
        duration: 10,
        ease: "linear",
      })
      .totalProgress(0.5);

    gsap.set(".marquee_inner", {
      xPercent: 0,
    });
  });

  return (
    <>
      {/* Hero */}
      <div className="xl:hidden absolute w-full min-h-dvh flex flex-col">
        <img
          src={record[0].image}
          className="h-[100dvh] w-full object-cover"
          alt=""
        />
        <div className="absolute flex flex-col w-full h-full top-0 rounded-o py-6 xl:p-[50px] justify-center items-center bg-gradient-to-b from-white/0 via-white/0 to-black"></div>
      </div>
      <section className=" pt-[100px] min-h-dvh px-4 xl:px-10 flex flex-col justify-between xl:justify-normal">
        <h1 className="my-auto z-10 text-white text-center text-4xl xl:text-7xl text-balance">
          {record[0].title}
        </h1>

        <img
          src={record[0].image}
          alt=""
          className="hidden xl:block mt-[24px] rounded-xl w-full h-[680px] object-cover object-center"
        />

        <div className="z-10 grid grid-cols-3 xl:grid-cols-6 gap-4 xl:gap-0 mt-8 border-b-2 pb-8">
          {/* Batch */}
          <div className="flex flex-col">
            <h1 className="text-white  text-sm xl:text-md">Batch:</h1>
            <p className="text-white text-lg xl:text-xl font-bold">
              {record[0].batch}
            </p>
          </div>

          {/* Member */}
          <div className="flex flex-col">
            <h1 className="text-white text-md">Member:</h1>
            <p className="text-white text-xl font-bold">
              {record[0].member.length} Person
            </p>
          </div>

          {/* Final Exam */}
          <div className="flex flex-col">
            <h1 className="text-white text-md">Final Exam:</h1>
            <p className="text-white text-xl font-bold">
              {record[0].exam[0].name}
            </p>
          </div>

          {/* Best Intern */}
          <div className="flex flex-col">
            <h1 className="text-white text-md">Best Intern:</h1>
            <p className="text-white text-xl font-bold">
              {record[0].best_intern}
            </p>
          </div>

          {/* Periode */}
          <div className="flex flex-col">
            <h1 className="text-white text-md">Periode:</h1>
            <p className="text-white text-xl font-bold">{record[0].periode}</p>
          </div>

          {/* Instagram */}
          <div className="flex flex-col">
            <h1 className="text-white text-md">Instagram:</h1>
            <p className="text-white text-xl font-bold">
              @{record[0].instagram}
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="overflow-hidden px-4 xl:px-10 flex flex-col gap-4">
        <h1 className="mt-8 mb-4 text-2xl xl:text-4xl my-4">Philosophy</h1>
        <p className=" text-justify  text-lg xl:text-2xl">
          {record[0].philoshopy}
        </p>

        <div className="flex flex-col gap-8 mt-16">
          <h1 className="text-2xl xl:text-4xl">Member</h1>
          <div className="grid grid-cols-2 xl:grid-cols-4 gap-5 ">
            {record.map((data, index) => (
              <>
                <div className="relative">
                  <img
                    key={index}
                    src={data.member[0].image}
                    alt=""
                    className="w-full h-full aspect-3/4 object-cover rounded-3xl hover:scale-125 "
                  />
                  <div className="absolute flex flex-col w-full h-full top-0 rounded-o p-2 xl:p-[30px]  bg-gradient-to-b from-white/0 via-white/0 to-black">
                    <div className="w-auto ">
                      <div className=" inline-flex w-auto py-1 px-2  xl:p-4 bg-black rounded-def text-[8px] xl:text-[12px] ">
                        <span>{data.member[0].university}</span>
                      </div>
                    </div>
                    <div className="mt-auto">
                      <h1 className=" text-md xl:text-xl">
                        {data.member[0].name}
                      </h1>
                      <h2 className=" text-sm xl:text-md">
                        {data.member[0].division}
                      </h2>
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
        </div>
      </section>

      {/* Marquee text */}
      <section className="flex gap-6 whitespace-nowrap items-center bg-white/10 p-6 xl:p-8 overflow-hidden mt-12">
        <div className="flex marquee_inner">{MarqueeText(8)}</div>
      </section>

      {/* Video Modal */}
      <section className="overflow-hidden px-0 xl:px-10 flex flex-col mb-12 xl:mb-0">
        <div className="relative cursor-pointer" onClick={() => toggleModal(0)}>
          <img
            src={record[0].image}
            alt=""
            className=" xl:rounded-[40px] object-cover w-full h-full aspect-video xl:h-[904px] my-12 "
          />
          <div className="absolute flex flex-col gap-0 xl:gap-4 justify-center w-full h-full top-0 rounded-o px-12 xl:px-[180px]   bg-gradient-to-b from-white/0 via-white/0 to-black">
            <h1 className="text-3xl xl:text-6xl text-white uppercase font-bold">
              {record[0].exam[0].name}
            </h1>

            <h1 className="text-base xl:text-3xl text-white uppercase">
              {record[0].exam[0].name} GEN-Z
            </h1>

            <div
              className="flex justify-center items-center   bg-white/50 backdrop-blur-md w-24 h-8 xl:w-[154px] xl:h-[51px] no-repeat cursor-pointer"
              onClick={() => toggleModal(0)}
            >
              <svg
                className=" w-5 h-5 xl:w-10 xl:h-10  text-black"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M8.6 5.2A1 1 0 0 0 7 6v12a1 1 0 0 0 1.6.8l8-6a1 1 0 0 0 0-1.6l-8-6Z"
                  clip-rule="evenodd"
                />
              </svg>

              <h1 className="text-black font-bold text-sm xl:text-xl">PLAY</h1>
            </div>
          </div>
        </div>

        {/* Poster */}
        <div className=" grid grid-cols-1 xl:grid-cols-2 gap-12 px-4 xl:px-0 xl:gap-6">
          <div className="flex gap-6 w-full">
            <div className="flex flex-col w-1/2 gap-4">
              <div
                className="relative cursor-pointer"
                onClick={() => toggleModal(1)}
              >
                <img
                  src={record[0].exam[2].data}
                  alt=""
                  className="w-full h-full xl:h-[719px] rounded-3xl"
                />
                <div className="absolute flex flex-col gap-4 justify-center w-full h-full top-0 rounded-3xl px-[180px] bg-gradient-to-b from-white/0 via-white/0 to-black"></div>
              </div>
              <h1 className="text-xl">{record[0].exam[1].name}</h1>
            </div>

            <div className="flex flex-col w-1/2 gap-4">
              <div
                className="relative cursor-pointer"
                onClick={() => toggleModal(2)}
              >
                <img
                  src={record[0].exam[2].data}
                  alt=""
                  className="w-full h-full xl:h-[719px] rounded-3xl"
                />
                <div className="absolute flex flex-col gap-4 justify-center w-full h-full top-0 rounded-3xl px-[180px] bg-gradient-to-b from-white/0 via-white/0 to-black"></div>
              </div>
              <h1 className="text-xl">{record[0].exam[2].name}</h1>
            </div>
          </div>

          <div className="flex flex-col w-full h-full gap-4">
            <div
              className="relative cursor-pointer w-full  h-[400px] xl:h-[719px]"
              onClick={() => toggleModal(3)}
            >
              <img
                src={record[0].exam[2].data}
                alt=""
                className="object-cover w-full h-full rounded-3xl"
              />
              <div className="absolute flex flex-col  justify-center w-full h-full top-0 rounded-3xl px-[180px] bg-gradient-to-b from-white/0 via-white/0 to-black"></div>
            </div>
            <h1 className="text-xl">
              {" "}
              &apos;{record[0].exam[3].name}&apos; Video
            </h1>
          </div>
        </div>
      </section>

      {modalOpen && (
        <div className="fixed inset-0 bg-black/50 flex flex-col gap-2 items-center justify-center w-full h-full">
          <div className="flex flex-col gap-2 items-end justify-end rounded-lg ">
            <div
              className="flex items-center cursor-pointer group"
              onClick={() => setModalOpen(false)}
            >
              <h1 className="text-md text-white group-hover:text-gray-200">
                Close
              </h1>
              <svg
                className="w-8 h-8 text-white group-hover:text-gray-200"
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
                  d="M6 18 17.94 6M18 18 6.06 6"
                />
              </svg>
            </div>
            {selectedExamIndex === 2 ? (
              <img
                src={record[0].exam[2].data}
                alt={record[0].exam[2].name}
                className="rounded-lg w-[60dvh] h-[80dvh]"
              />
            ) : (
              <div
                className="w-full h-full"
                dangerouslySetInnerHTML={{
                  __html: record[0].exam[selectedExamIndex].data,
                }}
              ></div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default DetailPage;
