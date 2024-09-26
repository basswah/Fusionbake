import { MdMenu } from "react-icons/md";
import { mainLogo } from "../assets";
import { NavbarMenu } from "../constants";
import ResponsiveMenu from "./ResponsiveMenu";
import { useState } from "react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className=" bg-secondary">
      <nav className=" grid md:grid-cols-4 grid-cols-2 place-content-center place-items-center cont py-4 md:pt-4 h-[50px] ">
       {/* Logo Section  */}
        <div className="flex md:justify-end md:w-full">
          <img src={mainLogo} alt="Logo" className=" w-64 max-[950px]:w-52" />
        </div>
        {/* Menu section */}
        <div className="hidden md:flex justify-center w-full col-span-3 ">
          <ul
            className=" flex items-center gap-6 text-white max-xl:gap-2
             "
          >
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={menu.links}
                  className=" inline-block py-3 px-3 max-lg:px-2 font-bold hover:text-primary hover:border-b-2 border-primary duration-200   "
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile Menu section */}
        <div className=" md:hidden" onClick={() => setOpen(!open)}>
          <MdMenu className="text-4xl text-primary hover:bg-primary hover:text-secondary duration-200 rounded-lg cursor-pointer max-sm:mr-2" />
          <ResponsiveMenu open={open} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
