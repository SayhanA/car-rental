import { IoLocationSharp } from "react-icons/io5";
import { LuClock2 } from "react-icons/lu";
import { RiErrorWarningFill } from "react-icons/ri";
import { dateFormate } from "../../utils/Date";
import CarMap from "../molicules/CarMap";
import Text from "./Text";
import TextSM from "./TextSM";
import TextXL from "./TextXL";
import Ticket from "./Ticket";

const PickUp = ({ latitude = "", longitude = "", pickupDate = "" }) => {
  return (
    <div className="border-border flex min-h-[300px] w-full min-w-[60%] gap-3 rounded-md border p-2 shadow-lg">
      <div className="w-full p-3">
        <TextSM className="text-text-lite/50 font-bold uppercase">
          Pick-up
        </TextSM>
        <TextXL className="text-text-dark my-1 font-bold">
          {dateFormate(pickupDate)}
        </TextXL>
        <Text className="text-text-dark">
          Istanbul Airport Sabiha Gokcen (SAW)
        </Text>
        <TextSM>
          Address: Sanayi, Sabiha Gokcen Airport, 34906 Pendik/Istanbul, Turkey
        </TextSM>

        <Ticket title="Pick-up location" description="In terminal">
          <IoLocationSharp className="text-3xl" />
        </Ticket>
        <Ticket title="Business hours" description="Wednesday 00:00 - 23:59">
          <LuClock2 className="text-3xl" />
        </Ticket>

        <div className="my-2 flex items-center gap-2">
          <RiErrorWarningFill className="text-4xl" />
          <div>
            <TextSM className="text-text-dark m-0 p-0 font-semibold">
              Pick-up instructions
            </TextSM>
            <Text className="text-text-dark m-0 w-fit p-0 leading-5">
              Rental desk is located in Domestic Terminal. Please follow the
              signs to car rental area.
            </Text>
          </div>
        </div>
      </div>
      <div className="min-h-full w-[250px] rounded-md">
        <CarMap
          latitude={latitude}
          longitude={longitude}
          className="-z-0 min-h-full w-full"
        />
      </div>
    </div>
  );
};

export default PickUp;
