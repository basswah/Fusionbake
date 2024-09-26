import { NavbarMenu } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const ResponsiveMenu = ({ open }) => {
  return (
    <AnimatePresence mode="wait">
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className=" absolute top-20 left-0 w-full h-screen z-20"
        >
          <div className=" text-xl font-semibold uppercase bg-primary text-secondary  py-10 m-6 rounded-3xl">
            <ul className=" flex flex-col items-center gap-10">
              {NavbarMenu.map((menu) => (
                <li
                  key={menu.id}
                  className=" hover:bg-secondary hover:text-primary px-2 rounded-3xl duration-200 "
                >
                  <a href={menu.links} className="">
                    {menu.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ResponsiveMenu;
