import HeroSearchForm from "../molicules/HeroSearchForm";
import SilverCar from "../../assets/images/Hero-silver-car.png";
import BlackCar from "../../assets/images/Hero-black-car.png";
import { useEffect } from "react";

const HeroHome = () => {
  let theme = localStorage.getItem("theme");

  useEffect(() => {
    theme = localStorage.getItem("theme");
  }, [theme]);

  return (
    <section
      className={`mx-5 ${theme === "dark" ? "bg-background" : "bg-[#edf6ff]"}`}
    >
      <div className="container mx-auto flex h-[90vh] flex-col items-center justify-center">
        <p
          className="text-text-dark mb-10 max-w-[640px] text-center text-5xl leading-[60px] font-bold"
          style={{ wordSpacing: ".5rem" }}
        >
          Find Your Perfect Transport for Rental
        </p>

        <HeroSearchForm />
        <img src={SilverCar} className="mt-14 w-3/5" alt="Ventor Silver Car" />
      </div>
    </section>
  );
};

export default HeroHome;
