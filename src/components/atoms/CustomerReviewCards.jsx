import { twMerge } from "tailwind-merge";
import customer from "../../assets/images/customer-1.jpg";
import StarSvg from "../../assets/svgs/StarSvg";
import Text from "./Text";
import TextSM from "./TextSM";

const CustomerReviewCards = ({ className = "", data = {} }) => {
  return (
    <article
      className={twMerge(
        `shadow-shadow max-w-[450px] rounded-xl p-7 shadow-xl ${className}`,
      )}
    >
      <div className="flex items-center gap-3">
        <img
          src={customer}
          className="h-14 w-14 rounded-full"
          alt="customer 1"
        />
        <div>
          <Text className="text-text-dark font-medium capitalize">Name U</Text>
          <TextSM>Description</TextSM>
        </div>
      </div>
      <div className="my-4 flex gap-1">
        <StarSvg />
        <StarSvg />
        <StarSvg />
        <StarSvg />
        <StarSvg />
      </div>
      <Text>
        {" "}
        "I've used many booking platforms before, but none compare to the
        personalized experience and attention to detail that CarRental
        provides."
      </Text>
    </article>
  );
};

export default CustomerReviewCards;
