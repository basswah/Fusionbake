import { Gallery } from "../assets";

const AboutUs = () => {
  return (
    <section>
      <div className=" grid grid-cols-1 md:grid-cols-2 content-center place-items-center max-md:text-center px-10 py-16 space-x-2">
        <div className="flex flex-col max-md:items-center mb-8 md:mb-0">
          <span className="capitalize text-primary ">sur fusionbake</span>
          <h1 className="text-white text-lg md:text-2xl xl:text-3xl font-semibold w-[80%] ">
            Une fusion de saveurs internationales et locales, revisitée avec
            créativité pour votre plus grand plaisir.
          </h1>
        </div>
        <div className="">
          <img src={Gallery} alt="" />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
