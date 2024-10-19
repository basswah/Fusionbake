import Card from "../../components/Card";
import { confiserieOrientale } from "../../constants";

const ConfiserieOrientale = () => {
  return (
    <div className="py-10" id="Confiserie Orientale">
      <div className="flex flex-col justify-center items-center my-12 space-y-2  ">
        <h1 className=" text-primary w-[70%] py-3 text-3xl md:text-5xl font-semibold text-center flex flex-col items-center gap-4 ">
          Confiserie Orientale
        </h1>
        <div className="h-[2px] bg-primary w-[15%]" />
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 w-full place-items-center ">
        {confiserieOrientale.map((menu) => (
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

export default ConfiserieOrientale;
