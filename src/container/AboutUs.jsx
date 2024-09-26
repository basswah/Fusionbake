import { BgImage } from "../assets";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const AboutUs = () => {
  return (
    <section style={bgImage}>
      <div className="h-[25vw] md:h-[20vw] relative grid grid-cols-1 place-items-center ">
        <div className=" flex text-center items-center w-[70%] h-full ">
          <h1 className=" text-white font-bold text-xs md:text-xl xl:text-3xl z-10 ">
            Découvrez notre large gamme de confiseries orientales et arabes,
            ainsi que nos plats et pâtisseries fraîchement préparés. Nous
            proposons également des plats cuisinés et des sandwichs pour tous
            les goûts
          </h1>
        </div>
        <div className=" h-full bg-secondary absolute inset-0 opacity-50" />
      </div>
    </section>
  );
};

export default AboutUs;
