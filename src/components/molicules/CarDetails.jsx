import { FiDroplet, FiMapPin, FiSettings, FiUsers } from "react-icons/fi";
import { GiElectric, GiGasPump } from "react-icons/gi";
import CircleWright from "../../assets/svgs/CircleWright";
import SectionTitle from "../atoms/SectionTitle";
import Text from "../atoms/Text";
import TextLg from "../atoms/TextLg";
import TextXL from "../atoms/TextXL";
import CarMap from "../molicules/CarMap";
const CarDetailInfo = ({ car }) => {
  return (
    <div className="my-10 flex h-full flex-col gap-10 lg:flex-row">
      <div className="mb-5 w-full">
        <SectionTitle>{`${car.make} ${car.model}`}</SectionTitle>
        <TextXL className="text-text-lite/60">{`${car.year} - ${car.type}`}</TextXL>
        <hr className="border-border mt-5 w-full border" />
        <div className="my-5 flex w-full flex-wrap gap-3">
          {[
            {
              type: "seats",
              value: car.seats,
              icon: <FiUsers className="text-text-lite/70 text-xl" />,
            },
            {
              type: "fuelType",
              value: car.fuelType,
              icon:
                car.fuelType === "Electric" ? (
                  <GiElectric className="text-text-lite/70 text-xl" />
                ) : car.fuelType === "Hybrid" ? (
                  <GiGasPump className="text-text-lite/70 text-xl" />
                ) : (
                  <FiDroplet className="text-text-lite/70 text-xl" />
                ),
            },
            {
              type: "transmission",
              value: car.transmission,
              icon: <FiSettings className="text-text-lite/70 text-xl" />,
            },
            {
              type: "location",
              value: car.location,
              icon: <FiMapPin className="text-text-lite/70 text-xl" />,
            },
          ].map(({ type, value, icon }, index) => (
            <div
              key={`${type}-${index}`}
              className="bg-text-lite/10 text-text-lite flex w-full min-w-[100px] grow basis-2 flex-col items-center justify-center gap-1 rounded-lg py-7"
            >
              {icon}
              <div className="flex flex-col items-center">
                <Text className="text-text-dark font-medium">{value}</Text>
                <Text className="text-text-dark/70 text-xs capitalize">
                  {type}
                </Text>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-5">
          <TextLg className="text-text-dark mb-2 font-semibold">
            Description
          </TextLg>
          <Text className="mb-1">
            The BMW X5 is a mid-size luxury SUV produced by BMW. The X5 made its
            debut in 1999 as the first SUV ever produced by BMW.
          </Text>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
            consequuntur tempora sit perspiciatis quo a est dolore alias
            voluptate odit? Ipsum dolor similique nulla debitis excepturi non
            tempore atque asperiores omnis iure illum magni hic sapiente sint
            labore rerum pariatur ratione corrupti dolorum, illo laudantium
            harum quam aperiam fugit. Provident quod esse culpa explicabo, fuga,
            ipsum similique voluptas ipsa officia laudantium saepe laboriosam
            nulla error commodi odio dicta quisquam ea cumque pariatur optio
            eaque. Odio, pariatur delectus nisi error possimus consequatur,
            molestias sunt deleniti laborum quo tempora illum alias itaque,
            corporis quaerat! Nisi ea amet aperiam fugit quaerat? Voluptate,
            laudantium.
          </Text>
        </div>
        <div className="mb-5">
          <TextLg className="text-text-dark mb-2 font-semibold">
            Features
          </TextLg>
          <div className="grid grid-cols-1 sm:grid-cols-2">
            {[
              "Leather Seats",
              "Panoramic Sunroof",
              "Wireless Charging",
              "360 Camera",
            ].map((feature, index) => (
              <div
                key={index}
                className="text-text-lite mb-1 flex items-center gap-2"
              >
                <CircleWright className="text-blue-500" />{" "}
                {/* or your preferred icon styling */}
                <Text className="text-text-lite">{feature}</Text>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="border-border flex min-h-full w-full flex-col rounded-md border lg:w-[530px]">
        <Text className="p-5 font-bold">Car Location:</Text>
        <CarMap latitude={car.latitude} longitude={car.longitude} />
      </div>
    </div>
  );
};

export default CarDetailInfo;
