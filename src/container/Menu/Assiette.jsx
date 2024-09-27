import Card from "../../components/Card";
import { assiette } from "../../constants";

const Assiette = () => {
  return (
    <div className="my-10" id="Assiette">
      <div className="flex flex-col justify-center items-center my-12 space-y-2  ">
        <h1 className=" text-primary w-[50%] md:w-[30%] py-3 text-3xl md:text-5xl rounded-2xl font-semibold text-center ">
          Assiette
        </h1>
        <div className="h-[2px] bg-primary w-[15%]" />
      </div>
      <ul className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3 w-full place-items-center ">
        {assiette.map((menu) => (
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

export default Assiette;
