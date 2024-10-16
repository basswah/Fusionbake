import Assiette from "./Menu/Assiette";
import ConfiserieOrientale from "./Menu/ConfiserieOrientale";
import Dessert from "./Menu/Dessert";
import Manaich from "./Menu/Manaich";
import Salade from "./Menu/Salade";
import Sandwichs from "./Menu/Sandwichs";

const Menu = () => {
  return (
    <div className="relative my-16">
      <div className="h-[10rem] bg-primary flex flex-col space-y-2 w-full justify-center items-center text-4xl sm:text-6xl md:text-7xl uppercase">
        <h1 className="font-bold">Menu </h1>
      </div>
      <Dessert />
      <div className="bg-primary h-[8px] w-full" />
      <Assiette />
      <div className="bg-primary h-[8px] w-full" />
      <Salade />
      <div className="bg-primary h-[8px] w-full" />
      <Manaich />
      <div className="bg-primary h-[8px] w-full" />
      <Sandwichs />
      <div className="bg-primary h-[8px] w-full" />
      <ConfiserieOrientale/>
      {/* <div className="bg-primary h-[20px] w-full" /> */}
    </div>
  );
};

export default Menu;
