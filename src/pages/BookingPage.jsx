import { useSelector } from "react-redux";
import DropOff from "../components/atoms/DropOff";
import PickUp from "../components/atoms/PickUp";
import BookingDescription from "../components/molicules/BookingDescription";

const BookingPage = () => {
  const { pickupDate, returnDate, carInfo } = useSelector(
    (state) => state.booking,
  );

  console.log({ carInfo });

  return (
    <>
      <section className="mx-5">
        <div className="container mx-auto my-5 flex gap-5">
          <PickUp
            longitude={carInfo?.longitude}
            latitude={carInfo?.latitude}
            pickupDate={pickupDate}
          />
          <DropOff returnDate={returnDate} />
        </div>
      </section>
      <BookingDescription carInfo={carInfo} />
    </>
  );
};

export default BookingPage;
