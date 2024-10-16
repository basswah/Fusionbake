import { MdMenu } from "react-icons/md";
import { NavbarMenu } from "../constants";
import ResponsiveMenu from "./ResponsiveMenu";
import { useState } from "react";
import "./Navbar.css";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  window.addEventListener("scroll", () => {
    var navBar = document.getElementById("NavBar");
    navBar.classList.toggle("navbar-sticy", window.scrollY > 10);
  });

  return (
    <div className=" bg-cardBg fixed w-full z-50 duration-500" id="NavBar">
      <nav className=" grid md:place-content-center content-center place-content-end py-4 md:pt-4  h-[50px]  ">
        {/* Menu section */}
        <div className="hidden md:flex justify-center w-full ">
          <ul className=" flex items-center gap-6 text-white max-xl:gap-2">
            {NavbarMenu.map((menu) => (
              <li key={menu.id}>
                <a
                  href={`#${menu.links}`}
                  className=" inline-block py-3 px-3 max-lg:px-2 font-bold hover:text-primary hover:border-b-2 border-primary duration-200"
                >
                  {menu.title}
                </a>
              </li>
            ))}
          </ul>
        </div>
        {/* Mobile Menu section */}
        <div className=" md:hidden  " onClick={() => setOpen(!open)}>
          <MdMenu className="min-menu text-3xl text-primary hover:bg-primary hover:text-secondary duration-200 rounded-lg cursor-pointer relative right-2 top-1 " />
          <ResponsiveMenu open={open} />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
