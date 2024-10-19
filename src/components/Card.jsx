import { motion } from "framer-motion";

const Card = (props) => {
  const price = props.price;

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
          }}
          viewport={{ once: true }}
          className={`text-center p-4 space-y-4 w-[300px] h-[400px] bg-cardBg  rounded-md mb-10  cursor-pointer relative`}
        >
          <img
            src={props.img}
            className=" mx-auto w-full h-[250px] "
            loading="lazy"
          />
          {price === "" ? (
            ""
          ) : (
            <div className=" absolute top-0 right-4 rounded-2xl bg-primary h-8 w-24  flex items-center justify-center text-white uppercase price-shadow ">
              <h1 className="">{price}</h1>
            </div>
          )}
          <div className="text-white space-y-2 flex flex-col items-center w-full h-20 ">
            <h1 className="text-xl md:text-2xl capitalize">{props.name}</h1>
            <p className="text-xs md:text-sm opacity-60 w-[80%]">{props.dis}</p>
          </div>
        </motion.div>
      </li>
    </div>
  );
};

export default Card;
