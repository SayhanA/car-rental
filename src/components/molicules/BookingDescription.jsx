import { GiCarDoor } from "react-icons/gi";
import { IoMdPerson } from "react-icons/io";
import { MdDelete, MdOutlineSevereCold } from "react-icons/md";
import { TbAutomaticGearboxFilled } from "react-icons/tb";
import cardCar from "../../assets/images/bmw-car.png";
import RentalCostCard from "../atoms/RentalCostCard";
import SecureImage from "../atoms/SecureImage";
import Text from "../atoms/Text";
import TextXL from "../atoms/TextXL";
import OwnerDetails from "./OwnerDetails";

const BookingDescription = ({ carInfo }) => {
  return (
    <section className="mx-5">
      <div className="border-border container mx-auto mb-5 flex justify-between gap-5 rounded-md border p-2 shadow-xl">
        <div className="mb-5 w-full gap-5 p-3 pb-5">
          <div className="border-border mb-5 flex w-full gap-5 border-0 border-b p-3 pb-5">
            <SecureImage
              image={cardCar}
              className="h-[150px] w-[250px] rounded-sm object-cover"
            />
            <div className="flex flex-col justify-center">
              <span className="text-text-dark flex gap-2">
                <TextXL className="text-text-dark font-bold">
                  {carInfo.make}
                </TextXL>
                <TextXL className="text-text-dark font-bold">
                  {carInfo.model}
                </TextXL>
              </span>
              <Text>Renault Clio or similar</Text>
              <div className="my-3 flex gap-4">
                <span className="flex items-center gap-2">
                  <IoMdPerson className="text-text-lite/70" />{" "}
                  <Text>{carInfo.seats}</Text>
                  <Text>seats</Text>
                </span>
                <span className="flex items-center gap-2">
                  <MdDelete className="text-text-lite/70" />
                  <Text>2 bags</Text>
                </span>
                <span className="flex items-center gap-2">
                  <GiCarDoor className="text-text-lite/70" />{" "}
                  <Text>4 doors</Text>
                </span>
                <span className="flex items-center gap-2">
                  <MdOutlineSevereCold className="text-text-lite/70" />{" "}
                  <Text>Air Conditioning</Text>
                </span>
                <span className="flex items-center gap-2">
                  <TbAutomaticGearboxFilled className="text-text-lite/70" />{" "}
                  <Text>Automatic</Text>
                </span>
              </div>
              <div
                className="w-fit cursor-pointer rounded-sm bg-blue-100 px-2 py-1 text-sm text-blue-700"
                alt="Pay per"
              >
                Pay part now
              </div>
            </div>
          </div>
          <OwnerDetails />
        </div>
        <RentalCostCard />
      </div>
    </section>
  );
};

export default BookingDescription;
