import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import DateRangePicker from "../atoms/DateRangePicker";
import ShowImages from "../atoms/ShowImages";
import Text from "../atoms/Text";
import TextSM from "../atoms/TextSM";
import TextXL from "../atoms/TextXL";

const CarDescriptionImage = ({ id, rent, price }) => {
  const navigate = useNavigate();
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const handleSubmit = () => {
    navigate(`/booking/${id}`);
  };

  return (
    <div className="flex h-fit flex-col gap-5 sm:gap-10 lg:flex-row">
      <div className="mb-5 min-h-full w-full">
        <ShowImages />
      </div>
      <div className="flex flex-col gap-5 sm:flex-row lg:flex-col lg:gap-0">
        {rent ? (
          <div className="border-border my-5 w-full rounded-lg border p-5 px-8 lg:my-0 lg:w-sm">
            <div className="border-text-lite/50 mb-5 flex justify-between border-0 border-b">
              <TextXL className="mb-5 font-bold">{rent}</TextXL>
              <Text>Last Beed</Text>
            </div>
            <button className="block w-full rounded-md bg-blue-500 py-3 text-center font-semibold text-white capitalize hover:bg-blue-700">
              take a beed
            </button>
          </div>
        ) : (
          <TextSM className="flex h-full w-full items-center justify-center text-center text-red-500 capitalize">
            Not available for Sell.
          </TextSM>
        )}

        <div className="border-border my-5 w-full rounded-lg border p-5 px-8 lg:w-sm">
          <TextXL className="border-text-lite/50 mb-2 border-0 border-b pb-5 font-bold">
            {price}
          </TextXL>

          <DateRangePicker />
          <Button onClick={handleSubmit} secondary className="w-full">
            Resurve
          </Button>

          <TextSM className="text-text-lite mx-auto block w-fit py-5">
            No credit card required to reserve
          </TextSM>
        </div>
      </div>
    </div>
  );
};

export default CarDescriptionImage;
