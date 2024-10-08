import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";
import { BgImage, mainLogo } from "../assets";
import { IoCallOutline, IoMailOpenOutline } from "react-icons/io5";
import { FiMapPin } from "react-icons/fi";
import MapSection from "../components/MapSection";

const bgImage = {
  backgroundImage: `url(${BgImage})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundRepeat: "no-repeat",
};

const Footer = () => {
  return (
    <footer style={bgImage}>
      <div className="  relative max-xl:py-3 ">
        {/* ContactUs Section  */}
        <div className="grid grid-cols-1 md:grid-cols-2 max-lg:my-6">
          {/* Logo Section  */}
          <div className=" relative z-10 ">
            <img src={mainLogo} alt="Logo" className="" />
          </div>
          {/* Contact Section  */}
          <div className=" flex flex-col items-center justify-center space-y-8 relative z-10 text-white text-lg xl:text-3xl font-lato font-semibold  ">
            {/* Social Media Section  */}
            <div className="flex w-full max-md:col-span-2 px-3 items-center justify-center gap-3   text-3xl ">
              <div className=" p-1 bg-primary text-white hover:bg-blue-700 hover:text-white duration-200">
                <a href="https://www.facebook.com/fusionbake2024">
                  <FaFacebookF />
                </a>
              </div>
              <div className=" p-1 bg-primary text-white hover:bg-gradient-to-br from-orange-400 via-pink-600 to-purple-900  hover:text-white duration-200">
                <a href="https://www.instagram.com/Fusionbake2024">
                  <FaInstagram />
                </a>
              </div>
              <div className=" p-1 bg-primary text-white hover:bg-white hover:text-secondary duration-200">
                <a href="https://www.tiktok.com/Fusionbake2024">
                  <FaTiktok />
                </a>
              </div>
            </div>

            <div className="flex gap-2 items-center">
              <IoCallOutline />
              <h1 className="">+41 77 923 33 73</h1>
            </div>
            <div className="flex gap-2 items-center">
              <IoMailOpenOutline />
              <h1 className="">contact@fusionbake.ch</h1>
            </div>
            <div className="text-center flex  items-center justify-center">
              <FiMapPin className="" />
              <a href=" https://maps.app.goo.gl/ANZC2u78iu24itnFA" className="hover:text-primary w-[60%]">

              <h1 className="">
                Rue pré-du-marché 34 1004 Lausanne, Switzerland
              </h1>
              </a>
            </div>
          </div>
        </div>
        {/* Blur the Image  */}
        <div className=" bg-secondary absolute inset-0 opacity-95 z-0 " />
        {/* Map Section  */}
        {/* <div className="relative z-10">
          <MapSection />
        </div> */}
        <div className="h-20 md:h-20 relative flex justify-center items-center text-center max-md:mt-2 bg-primary  ">
          <div className="text-xs md:text-xl text-white w-[80vw] ">
            <h1 className="">
              Tous droits réservés{" "}
              <a href="" className="hover:text-secondary">
                A.B Marketing & Programming 2024 ©.
              </a>
            </h1>
            <h1>
              d'utilisation. L'utilisation de ce site est soumise à nos
              conditions générales
            </h1>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
