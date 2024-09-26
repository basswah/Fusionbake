import Card from "../../components/Card";
import { Dessert1 } from "../../constants";

const Assiette = () => {
  return (
    <div className="py-10 bg-primary" id="Assiette">
      <div className="flex justify-center items-center mb-12  ">
        <h1 className="bg-secondary text-primary w-[50%] md:w-[30%] py-3 text-3xl md:text-5xl rounded-2xl font-semibold text-center ">
        Assiette
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
            bgColor="secondary"
            textColor="white"
          />
        ))}
      </ul>
    </div>
  );
};

export default Assiette;
