import ToggleBottomSvg from "../../assets/svgs/ToggleBottomSvg";
import Text from "./Text";

const BrandSelector = () => {
  return (
    <div className="shadow-shadow relative mt-5 h-fit w-full rounded-lg p-7 pb-2 shadow-xl">
      <input
        type="checkbox"
        id="BrandSelector"
        className="peer hidden"
        defaultChecked="true"
      />

      <label
        htmlFor="BrandSelector"
        className="flex cursor-pointer items-center justify-between font-semibold"
      >
        <Text className="font-bold">Availability</Text>
      </label>

      <div className="absolute top-7 right-7 transition-transform duration-300 peer-checked:rotate-180">
        <ToggleBottomSvg className="text-text-lite h-5 w-5" />
      </div>

      <div className="my-5 h-0 w-full bg-amber-100 transition-all peer-checked:h-40"></div>
    </div>
  );
};

export default BrandSelector;
