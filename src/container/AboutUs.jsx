import { aboutus1, aboutus2 } from "../assets";

const AboutUs = () => {
  return (
    <section>
      <div className=" py-16 text-gray-300 space-y-24 md:space-y-32 max-md:text-sm lg:text-lg ">
        {/* Header section  */}
        <div className="flex flex-col items-center space-y-12 md:space-y-24">
          <div className="flex flex-col items-center space-y-4">
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              Qui sommes-nous ?
            </h1>
            <div className="h-[2px] bg-primary w-[15%]" />
          </div>
          <p className="w-[70vw] text-center ">
            Nous sommes un groupe de jeunes Syriens arrivés en Suisse en quête
            d’un nouveau départ, après avoir été contraints de quitter notre
            pays en raison de la guerre. Portés par notre amour de la cuisine et
            le désir de partager notre culture, nous avons créé cet espace où
            vous pouvez découvrir les trésors culinaires de la Syrie.
          </p>
        </div>
        {/* first section  */}
        <div className="flex max-md:flex-col items-center justify-center gap-24  ">
          <div className="flex  max-md:w-[80vw] justify-center">
            {/* <div className="">
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
            </div> */}
            <img
              src={aboutus1}
              alt=""
              className="sm:w-[70vw] md:w-[40vw] border-[2px] rounded-2xl"
            />
          </div>
          <div className="">
            <p className="max-md:text-center w-[70vw] md:w-[40vw]  ">
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
          <div className="space-y-6   ">
            <p className=" max-md:text-center w-[70vw] md:w-[40vw]  ">
              En plus de nos plats à la carte, nous offrons un service traiteur
              pour vos événements spéciaux : anniversaires, mariages,
              fiançailles, baptêmes, et plus encore. Tout est préparé à la
              minute, avec des ingrédients frais, pour garantir une expérience
              culinaire inoubliable.
            </p>
            <p className="max-md:text-center w-[70vw] md:w-[40vw]  ">
              {" "}
              Notre mission est simple : cuisiner du cœur au cœur, en vous
              apportant un morceau de Syrie, ici, en Suisse.{" "}
            </p>
          </div>
          <div className="flex justify-center max-md:w-[80vw]  ">
            {/* <div className="">
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
            </div> */}
            <img
              src={aboutus2}
              alt=""
              className="sm:w-[70vw] md:w-[40vw] border-[2px] rounded-2xl"
            />
          </div>
        </div>

        <div className=""></div>
      </div>
    </section>
  );
};

export default AboutUs;
