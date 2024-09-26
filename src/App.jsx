import AboutUs from "./container/AboutUs";
import Footer from "./container/Footer";
import Hero from "./container/Hero";
import Menu from "./container/Menu";

const App = () => {
  return (
    <>
    <div className="bg-secondary">

      <Hero />
      <AboutUs />
      <Menu/>
      <Footer/>
    </div>
    </>
  );
};

export default App;
