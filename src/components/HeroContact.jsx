import { FaFacebookF, FaInstagram, FaTiktok} from "react-icons/fa";

const HeroContact = () => {
  return (
    <>
    <div className="bg-primary hidden md:block   ">
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
              <div className=" p-1 bg-secondary text-primary hover:bg-gradient-to-br from-orange-400 via-pink-600 to-purple-900  hover:text-white duration-200">
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
    </>
  )
}

export default HeroContact