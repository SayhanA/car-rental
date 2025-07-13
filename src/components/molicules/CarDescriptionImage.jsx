import { Form, Formik } from "formik";
import { useNavigate } from "react-router-dom";
import Button from "../atoms/Button";
import FormikInput from "../atoms/FormikInput";
import ShowImages from "../atoms/ShowImages";
import Text from "../atoms/Text";
import TextSM from "../atoms/TextSM";
import TextXL from "../atoms/TextXL";

const CarDescriptionImage = ({ id, rent, price }) => {
  const navigate = useNavigate();
  const today = new Date();
  const yesterday = new Date();
  yesterday.setDate(today.getDate() - 1);

  const formatDate = (date) => date.toISOString().split("T")[0];

  const handleSubmit = (values) => {
    // Redirect to booking page with car ID and dates as query params
    const query = new URLSearchParams({
      pickup: values.pickup,
      return: values.return,
    }).toString();

    navigate(`/booking/${id}?${query}`);
  };

  return (
    <div className="flex h-fit flex-col gap-5 sm:gap-10 lg:flex-row">
      <div className="mb-5 h-fit w-full">
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
          <TextXL className="border-text-lite/50 mb-5 border-0 border-b pb-5 font-bold">
            {price}
          </TextXL>
          <Formik
            initialValues={{
              pickup: formatDate(today),
              return: formatDate(yesterday),
            }}
            onSubmit={handleSubmit}
          >
            <Form>
              <FormikInput
                type="date"
                name="pickup"
                label="Pickup Date"
                inputClassName="p-3"
              />
              <FormikInput
                type="date"
                name="return"
                label="Return Date"
                inputClassName="p-3"
              />
              <Button type="submit" className="mt-5 w-full" secondary>
                Book Now
              </Button>
            </Form>
          </Formik>

          <TextSM className="text-text-lite mx-auto block w-fit py-5">
            No credit card required to reserve
          </TextSM>
        </div>
      </div>
    </div>
  );
};

export default CarDescriptionImage;
