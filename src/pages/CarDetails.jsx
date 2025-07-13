import { useNavigate, useParams } from "react-router-dom";
import ArrowLeft from "../assets/svgs/ArrowLeft";
import Button from "../components/atoms/Button";
import TextSM from "../components/atoms/TextSM";
import CarDescriptionImage from "../components/molicules/CarDescriptionImage";
import CarDetailInfo from "../components/molicules/CarDetails";
import RentalConditions from "../components/molicules/RentalConditions";
import carData from "../data/featureCarList";

const CarDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const car = carData.find((car) => car.id === Number(id));

  return (
    <section className="mx-5">
      <div className="container mx-auto">
        <Button
          onClick={() => {
            navigate(-1);
          }}
          className="m-0 my-5 flex gap-3 border-none p-0 hover:bg-transparent"
        >
          <ArrowLeft />
          <TextSM>Back to all cars</TextSM>
        </Button>

        <CarDescriptionImage price={car.price} rent={car.rent} id={id} />

        <CarDetailInfo car={car} />

        <RentalConditions />
      </div>
    </section>
  );
};

export default CarDetails;
