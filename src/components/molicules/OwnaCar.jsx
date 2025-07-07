/* eslint-disable no-irregular-whitespace */
import RightArrowSvg from "../../assets/svgs/RightArrowSvg";
import Button from "../atoms/Button";
import SectionDescripton from "../atoms/SectionDescripton";
import SectionTitle from "../atoms/SectionTitle";
import bmwCarImg from "../../assets/images/bmw-car.png";

const OwnaCar = () => {
  return (
    <section
      className="group relative container mx-auto my-32 overflow-hidden rounded-2xl p-12"
      style={{ background: "linear-gradient(90deg, #0558FE 0%, #A9CFFF 100%)" }}
    >
      <div className="">
        <SectionTitle className="text-background text-2xl">
          Do You Own a Luxury Car?
        </SectionTitle>
        <SectionDescripton className="text-background mx-0 my-5 max-w-[600px] items-start justify-start">
          Monetize your vehicle effortlessly by listing it on CarRental. We take
          care of insurance, driver verification, and secure payments — so you
          can earn passive income, stress-free.
        </SectionDescripton>
        <Button className="hover:bg-border group mt-7 flex w-[200px] items-center gap-3 bg-white text-blue-600 transition-all ease-in-out">
          List your car <RightArrowSvg className="group-hover:ml-1" />{" "}
        </Button>
      </div>
      <div
        id="own-car"
        className="absolute end-[5%] bottom-0 mt-auto w-[400px] transition-all duration-700 ease-in"
      >
        <img src={bmwCarImg} alt="Bmw luxary car owner" />
      </div>
    </section>
  );
};

export default OwnaCar;
