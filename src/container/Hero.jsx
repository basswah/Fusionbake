import {FaWhatsapp } from "react-icons/fa";
import Navbar from "../components/Navbar/Navbar";
import { HeroImg, mainLogo } from "../assets";
import { LuMapPin } from "react-icons/lu";
import HeroContact from "../components/HeroContact";

const bgImage = {
  backgroundImage: `url(${HeroImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  return (
    <section > 
      <div>
        {/* Contact Section  */}
        <HeroContact />
        {/* Navbar Section  */}
        <div className=" relative">
          <Navbar />
        </div>
      </div>
      {/* Image Section  */}
      <div style={bgImage}>
        <div className=" relative grid grid-cols-1 place-items-center place-content-center py-8 h-[100vh]  md:h-[110vh]">
          <div className=" relative z-10 overflow-x-hidden">
            <img src={mainLogo} alt="Logo"  className="max-w-[150vw] sm:max-w-[120vw] lg:max-w-[1000px] max-lg:-mx-[29vw]" />
          </div>
          <div className="relative z-10 flex flex-col space-y-4 justify-center items-center text-center px-3 ">
            <h1 className="text-3xl lg:text-5xl text-primary font-bold ">
              Où les douceurs rencontrent les saveurs salées
            </h1>
            <p className=" text-gray-300 lg:text-lg w-[80%] long-text-center">
              Découvrez notre large gamme de confiseries orientales et arabes,
              ainsi que nos plats et pâtisseries fraîchement préparés. Nous
              proposons également des plats cuisinés et des sandwichs pour tous
              les goûts
            </p>
          </div>
          <div className="absolute h-full bg-secondary inset-0 opacity-90" />
        </div>
      </div>
      {/* Location & Whatsapp Icons  */}
      <div className=" fixed md:right-3 bottom-3 space-y-2 z-50 flex md:flex-col max-md:justify-between max-md:w-full items-center  ">
        <div className="h-14 w-14 mx-2 rounded-full bg-primary flex justify-center items-center hover:scale-110 opacity-80 hover:opacity-100 duration-200 main-shadow">
          <a href="https://maps.app.goo.gl/ANZC2u78iu24itnFA">
            <LuMapPin className="text-white text-3xl" />
          </a>
        </div>
        <div className="h-14 w-14 rounded-full  bg-green-500 flex justify-center items-center hover:scale-110 opacity-80 hover:opacity-100 duration-200 mx-2 main-shadow">
          <a href="https://api.whatsapp.com/send/?phone=41779233373&text&type=phone_number&app_absent=0">
            <FaWhatsapp className="text-white text-3xl " />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
