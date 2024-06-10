const StorySectionMobile = () => {
  return (
    <>
      <section className="xl:pt-0 px-4 relative py-4 flex  flex-col xl:hidden xl:justify-center xl:items-center h-auto gap-4 overflow-hidden">
        <div className="gap-4 xl:text-center flex flex-col  xl:items-center xl:justify-center relative">
          <div className="z-10  xl:px-[100px]">
            <h1 className="text-2xl xl:text-6xl text-white">Story</h1>
            <p className="text-md xl:text-[22px] text-white xl:text-center text-balance">
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

          {/* Image for Mobile */}
          <div className="xl:hidden grid grid-cols-2 xl:grid-cols-4 gap-4">
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                  alt=""
                  data-aos="fade-right"
                />
              </div>
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                  alt=""
                  data-aos="fade-right"

                />
              </div>
            </div>
            <div className="grid gap-4">
              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-1.jpg"
                  alt=""
                  data-aos="fade-down"

                />
              </div>

              <div>
                <img
                  className="h-auto max-w-full rounded-lg"
                  src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image.jpg"
                  alt=""
                  data-aos="fade-left"

                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default StorySectionMobile