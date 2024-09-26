import Card from "../../components/Card";
import { Dessert1 } from "../../constants";

const Dessert = () => {
  return (
    <div className="my-10" id="Dessert">
      <div className="flex justify-center items-center my-12  ">
        <h1 className="bg-primary w-[50%] md:w-[30%] py-3 text-3xl md:text-5xl rounded-2xl font-semibold text-center ">
          Deserts
        </h1>
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 w-full place-items-center ">
        {Dessert1.map((menu) => (
          <Card
            key={menu.id}
            id={menu.id}
            name={menu.name}
            dis={menu.dis}
            img={menu.img}
            bgColor="primary"
            textColor="white"
          />
        ))}
      </ul>
    </div>
  );
};

export default Dessert;
