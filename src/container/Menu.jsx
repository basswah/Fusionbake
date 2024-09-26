import Assiette from "./Menu/Assiette";
import Dessert from "./Menu/Dessert";

const Menu = () => {
  return (
    <div className="">
      <div className="h-[10rem] bg-primary flex w-full justify-center items-center text-4xl md:text-7xl uppercase">
        <h1 className="font-bold">our menu </h1>
      </div>
      <Dessert />
      <div className="bg-primary h-[8px] w-full" />
      <Assiette />
      <div className="bg-primary h-[20px] w-full" />
    </div>
  );
};

export default Menu;
