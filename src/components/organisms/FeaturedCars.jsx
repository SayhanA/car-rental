import { useTranslation } from "react-i18next";
import RightArrowSvg from "../../assets/svgs/RightArrowSvg";
import carData from "../../data/featureCarList";
import Button from "../atoms/Button";
import Card from "../atoms/Card";
import SectionDescripton from "../atoms/SectionDescripton";
import SectionTitle from "../atoms/SectionTitle";

const FeaturedCars = () => {
  const { t } = useTranslation();

  return (
    <section className="mx-10">
      <div className="container mx-auto my-20 text-center">
        <SectionTitle>Featured Vehicles</SectionTitle>
        <SectionDescripton className="mt-4">
          Explore our selection of premium vehicles available for your next
          adventure.
        </SectionDescripton>

        <div className="mt-16 grid justify-items-center gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {carData.slice(0, 3).map((car) => (
            <Card key={car?.id} data={car} />
          ))}
        </div>

        <Button className="text-text-dark border-border hover:bg-border mx-auto mt-20 flex w-[300px] items-center gap-3 border px-7 py-4 text-lg font-medium text-nowrap transition-all hover:gap-5">
          {t("Explore all cars")} <RightArrowSvg className="" />
        </Button>
      </div>
    </section>
  );
};

export default FeaturedCars;
