import AOS from "aos";
import "aos/dist/aos.css";

const AboutSectionMobile = () => {
  return (
    <>
      <section className="flex xl:hidden h-auto px-4 py-8">
        <div
          className="flex flex-col"
        >
          <h1 className="text-2xl ">About</h1>
          <h1 className=" text-md xl:text-[4vw] leading-[115%] text-balance">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatem
            quidem deserunt nostrum omnis in iure eligendi quo quam voluptatum
            voluptate? Repellat odit suscipit quos esse blanditiis veniam, neque
            ullam recusandae beatae deserunt minima quae qui dolor minus et, ex
            veritatis.{" "}
          </h1>
        </div>
      </section>
    </>
  );
};

export default AboutSectionMobile;
