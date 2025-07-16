import Text from "../atoms/Text";
import TextXL from "../atoms/TextXL";

const RentalAggrement = () => {
  return (
    <section className="mx-5 my-5">
      <div className="border-border container mx-auto rounded-md border p-10 shadow-xl">
        <TextXL className="text-text-dark font-semibold">Aggrements</TextXL>
        <Text className="mt-2">
          Here is the car rental aggrement you must read carefully so that your
          consern align to car ownr with no conflict.
        </Text>
      </div>
    </section>
  );
};

export default RentalAggrement;
