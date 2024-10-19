import Card from "../../components/Card";
import { manaich } from "../../constants";

const Manaich = () => {
  return (
    <div className="py-10" id="Manaich">
      <div className="flex flex-col justify-center items-center my-12 space-y-2  ">
        <h1 className=" text-primary w-[50%] md:w-[30%] py-3 text-3xl md:text-5xl font-semibold text-center flex flex-col items-center gap-4 ">
          Manaich
        <div className="h-[2px] bg-primary w-[25%]" />
        </h1>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 w-full place-items-center ">
        {manaich.map((menu) => (
          <Card
            key={menu.id}
            name={menu.name}
            dis={menu.dis}
            img={menu.img}
            price={menu.price}
          />
        ))}
      </ul>
    </div>
  );
};

export default Manaich;
