import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { HeroImg, mainLogo } from "../assets";

const bgImage = {
  backgroundImage: `url(${HeroImg})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Hero = () => {
  return (
    <section>
      <div>
      {/* Contact Section  */}
      <div className="bg-primary hidden md:block  ">
        <div className=" h-[40px] grid grid-cols-2 place-content-center place-items-center content-center ">
          <div className="hidden  md:flex  items-center justify-end w-full text-white ">
            <h1 className=" font-lato font-semibold">
              Rue pré-du-marché 34 1004 Lausanne, Switzerland
            </h1>
          </div>
          {/* Social Media Section  */}
          <div className="flex w-full px-3 items-center justify-center gap-2 ">
            <div className=" p-1 bg-secondary text-primary hover:bg-blue-700 hover:text-white duration-200">
              <a href="https://www.facebook.com/fusionbake2024">
                <FaFacebookF />
              </a>
            </div>
            <div className=" p-1 bg-secondary text-primary hover:bg-white hover:text-pink-500 duration-200">
              <a href="https://www.instagram.com/Fusionbake2024">
                <FaInstagram />
              </a>
            </div>
            <div className=" p-1 bg-secondary text-primary hover:bg-white hover:text-secondary duration-200">
              <a href="https://www.tiktok.com/Fusionbake2024">
                <FaTiktok />
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* Navbar Section  */}
      <div className=" relative">
        <Navbar />
      </div>
      </div>
      {/* Image Section  */}
      <div style={bgImage}>
        <div className=" relative grid grid-cols-1 place-items-center pb-24">
          <div className=" relative z-10">
            <img src={mainLogo} alt="Logo" width={1000} />
          </div>
          <div className="relative z-10 flex flex-col space-y-4 justify-center items-center text-center px-3">
            <h1 className="text-3xl lg:text-5xl text-primary font-bold ">Où les douceurs rencontrent les saveurs salées</h1>
            <p className=" text-gray-400 max-sm:text-sm lg:text-lg  w-[70%]">Découvrez notre large gamme de confiseries orientales et arabes, ainsi que nos plats et pâtisseries fraîchement préparés. Nous proposons également des plats cuisinés et des sandwichs pour tous les goûts</p>
          </div>
          <div className="absolute h-full bg-secondary inset-0 opacity-90" />
        </div>

      </div>
    </section>
  );
};

export default Hero;
