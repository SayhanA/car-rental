import { LuClock2 } from "react-icons/lu";
import { RiErrorWarningFill } from "react-icons/ri";
import { dateFormate } from "../../utils/Date";
import Text from "./Text";
import TextSM from "./TextSM";
import TextXL from "./TextXL";
import Ticket from "./Ticket";

const DropOff = ({ returnDate = new Date() }) => {
  return (
    <div className="border-border w-[40%] min-w-[450px] rounded-md border p-5 shadow-lg">
      <TextSM className="text-text-lite/50 font-bold uppercase">Pick-up</TextSM>
      <TextXL className="text-text-dark my-1 font-bold">
        {dateFormate(returnDate)}
      </TextXL>
      <Text className="text-text-dark">
        Istanbul Airport Sabiha Gokcen (SAW)
      </Text>
      <TextSM>
        Address: Sanayi, Sabiha Gokcen Airport, 34906 Pendik/Istanbul, Turkey
      </TextSM>
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
            Rental desk is located in Domestic Terminal. Please follow the signs
            to car rental area.
          </Text>
        </div>
      </div>
    </div>
  );
};

export default DropOff;
