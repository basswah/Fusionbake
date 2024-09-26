import { motion } from "framer-motion";

const Card = (props) => {
  return (
    <div>
      <li>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          whileHover={{ scale: 1.1 }}
          transition={{
            type: "spring",
            stiffness: 100,
            damping: 10,
            delay: 0.4,
          }}
          viewport={{ once: true }}
          className={` text-center p-4 space-y-4 max-w-[300px] bg-${props.bgColor} rounded-md mb-10 lg:mb-0 cursor-pointer`}
        >
          <img
            src={props.img}
            alt="Black Coffee"
            className=" img-shadow2 mx-auto"
          />
          <div className={`text-${props.textColor} space-y-2`}>
            <h1 className="text-xl md:text-3xl capitalize">{props.name}</h1>
            <p className="text-xs md:text-sm opacity-60">{props.dis}</p>
          </div>
        </motion.div>
      </li>
    </div>
  );
};

export default Card;
