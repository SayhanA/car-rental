import { twMerge } from "tailwind-merge";
import ToggleBottomSvg from "../../assets/svgs/ToggleBottomSvg";
import Text from "./Text";

const RangeSelectors = ({
  className = "",
  childrenClassName = "",
  selector = "",
  children = null,
  ...props
}) => {
  return (
    <div
      className={twMerge(
        `shadow-shadow relative mt-2 h-fit w-full rounded-lg shadow-xl ${className}`,
      )}
      {...props}
    >
      <input
        type="checkbox"
        id={selector}
        className="peer hidden"
        defaultChecked="true"
      />

      <label
        htmlFor={selector}
        className="z-30 flex cursor-pointer items-center justify-between font-semibold"
      >
        <Text className="p-7 py-6 font-bold">{selector}</Text>
      </label>

      <div className="absolute top-7 right-7 -z-0 transition-transform duration-300 peer-checked:rotate-180">
        <ToggleBottomSvg className="text-text-lite h-5 w-5" />
      </div>

      <div
        className={twMerge(
          `peer-checked:border-border text-text-light h-0 w-full overflow-hidden p-0 px-7 transition-all ease-in-out peer-checked:h-fit peer-checked:border-0 peer-checked:border-t-2 peer-checked:py-5 ${childrenClassName}`,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default RangeSelectors;
