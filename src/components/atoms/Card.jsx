import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import cardCar from "../../assets/images/card-car.png";
import CarSvg from "../../assets/svgs/CarSvg";
import FuelSvg from "../../assets/svgs/FuelSvg";
import LocationSvg from "../../assets/svgs/LocationSvg";
import PersonSvg from "../../assets/svgs/PersonSvg";
import Button from "./Button";
import TextLg from "./TextLg";

const Card = ({ className = "", data = "", ...props }) => {
  const { t } = useTranslation();
  const {
    make,
    model,
    type,
    seats,
    fuelType,
    transmission,
    location,
    availability,
    id,
    rent,
  } = data;

  return (
    <article
      className={twMerge(
        `shadow-shadow w-full max-w-[450px] overflow-hidden rounded-xl shadow-2xl ${className}`,
      )}
      {...props}
    >
      <div className="relative max-h-[300px] w-full overflow-hidden">
        <span className="absolute start-4 top-4 rounded-full bg-blue-600 px-3 py-1 text-white capitalize">
          {availability}
        </span>
        <img src={cardCar} alt="VMW car for rent" />
        <span className="absolute end-4 bottom-4 rounded-lg bg-black px-3 py-2 text-white">
          ৳{rent}/day
        </span>
      </div>
      <div className="mt-1 p-4 text-left">
        <TextLg className="text-text-dark text-lg font-medium">{make}</TextLg>
        <p className="text-text-lite text-sm">
          {model} {type}
        </p>
        <div className="text-text-lite mt-3 grid grid-cols-2">
          <span className="flex items-center gap-2">
            <PersonSvg /> {seats} {t("Seats")}
          </span>
          <span className="flex items-center gap-2">
            <FuelSvg />
            {fuelType}
          </span>
          <span className="flex items-center gap-2">
            <CarSvg />
            {t(transmission)}
          </span>
          <span className="flex items-center gap-2">
            <LocationSvg />
            {location}
          </span>
        </div>
        <Button className="bg-text-dark text-background mt-3 w-full py-2">
          {t("Book Now")}
        </Button>
      </div>
    </article>
  );
};

export default Card;
