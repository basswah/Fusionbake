import { dessert1, dessert2, falafl, food } from "../assets";

const AboutUs = () => {
  return (
    // <section>
    //   <div className=" grid grid-cols-1 md:grid-cols-2 content-center place-items-center max-md:text-center px-10 py-16 space-x-2">
    //     <div className="flex flex-col max-md:items-center mb-8 md:mb-0">
    //       <span className="capitalize text-primary ">sur fusionbake</span>
    //       <h1 className="text-white text-lg md:text-2xl xl:text-3xl font-semibold w-[80%] ">
    //         Une fusion de saveurs internationales et locales, revisitée avec
    //         créativité pour votre plus grand plaisir.
    //       </h1>
    //     </div>
    //     <div className="">
    //       <img src={Gallery} alt="" />
    //     </div>
    //   </div>
    // </section>
    <section>
      <div className=" py-16 text-white space-y-24 md:space-y-32 ">
        {/* Header section  */}
        <div className="flex flex-col items-center space-y-24">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold">
              Qui sommes-nous ?
            </h1>
            <div className="h-[2px] bg-primary w-[15%]" />
          </div>
          <p className="w-[60vw] text-center text-sm md:text-lg">
            Nous sommes un groupe de jeunes Syriens arrivés en Suisse en quête
            d’un nouveau départ, après avoir été contraints de quitter notre
            pays en raison de la guerre. Portés par notre amour de la cuisine et
            le désir de partager notre culture, nous avons créé cet espace où
            vous pouvez découvrir les trésors culinaires de la Syrie.
          </p>
        </div>
        {/* first section  */}
        <div className="flex max-md:flex-col items-center justify-center gap-24  ">
          <div className="flex items-center flex-row-reverse max-md:w-[80vw]">
            <div className="">
              <img
                src={dessert1}
                alt=""
                className="w-[40vw] md:w-[16vw] h-[50vw] md:h-[27vw] rounded-2xl  rotate-6 border-[2px]"
              />
            </div>
            <div className="">
              <img
                src={dessert2}
                alt=""
                className="w-[40vw] md:w-[16vw] h-[36vw] md:h-[22vw] rounded-2xl -rotate-6 border-[2px] "
              />
            </div>
          </div>
          <div className="mt-24 mb-12">
            <p className="max-md:text-center w-[70vw] md:w-[40vw] text-sm md:text-lg ">
              Ici, vous trouverez une sélection raffinée de desserts orientaux,
              emblématiques de notre patrimoine, ainsi que des plats salés
              traditionnels préparés avec soin et passion. Chaque bouchée vous
              transporte au cœur de Damas, avec des saveurs authentiques et une
              touche d’amour.
            </p>
          </div>
        </div>
        {/* Secoend Section  */}
        <div className="flex max-md:flex-col-reverse items-center justify-center gap-24 ">
          <div className="space-y-6 mt-12 ">
            <p className=" max-md:text-center w-[70vw] md:w-[40vw] text-sm md:text-lg ">
              En plus de nos plats à la carte, nous offrons un service traiteur
              pour vos événements spéciaux : anniversaires, mariages,
              fiançailles, baptêmes, et plus encore. Tout est préparé à la
              minute, avec des ingrédients frais, pour garantir une expérience
              culinaire inoubliable.
            </p>
            <p className="max-md:text-center w-[70vw] md:w-[40vw] text-sm md:text-lg ">
              {" "}
              Notre mission est simple : cuisiner du cœur au cœur, en vous
              apportant un morceau de Syrie, ici, en Suisse.{" "}
            </p>
          </div>
          <div className="flex items-center flex-row-reverse max-md:w-[80vw] rotate-3">
            <div className="">
              <img
                src={food}
                alt=""
                className="w-[40vw] md:w-[16vw] h-[36vw] md:h-[22vw] relative z-10 rounded-2xl rotate-6 border-[2px] "
              />
            </div>
            <div className="">
              <img
                src={falafl}
                alt=""
                className="w-[40vw] md:w-[16vw] h-[50vw] md:h-[27vw] rounded-2xl  -rotate-6 border-[2px]"
              />
            </div>
          </div>
        </div>

        <div className=""></div>
      </div>
    </section>
  );
};

export default AboutUs;
