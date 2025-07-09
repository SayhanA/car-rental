import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Text from "./Text";

const PriceRangeSelector = ({
  min = 0,
  max = 100000000,
  step = 10,
  onChange,
}) => {
  const [minValue, setMinValue] = useState(min);
  const [maxValue, setMaxValue] = useState(max);
  const [activeThumb, setActiveThumb] = useState(null);
  const rangeRef = useRef(null);

  const [minPos, maxPos] = useMemo(() => {
    const percent = (val) => ((val - min) / (max - min)) * 100;
    return [percent(minValue), percent(maxValue)];
  }, [minValue, maxValue, min, max]);

  useEffect(() => {
    onChange?.({ min: minValue, max: maxValue });
  }, [minValue, maxValue, onChange]);

  const clamp = useCallback((value, minBound, maxBound) => {
    return Math.min(maxBound, Math.max(minBound, value));
  }, []);

  const getValueFromPosition = (clientX) => {
    if (!rangeRef.current) return 0;
    const rect = rangeRef.current.getBoundingClientRect();
    const pos = clamp((clientX - rect.left) / rect.width, 0, 1);
    return Math.round((min + pos * (max - min)) / step) * step;
  };

  const handleMouseMove = useCallback(
    (e) => {
      if (!activeThumb) return;
      const newValue = getValueFromPosition(e.clientX);
      if (activeThumb === "min") {
        // eslint-disable-next-line no-unused-vars
        setMinValue((prev) => clamp(newValue, min, maxValue - step));
      } else {
        // eslint-disable-next-line no-unused-vars
        setMaxValue((prev) => clamp(newValue, minValue + step, max));
      }
    },
    [activeThumb, clamp, maxValue, minValue, max, min, step],
  );

  useEffect(() => {
    if (!activeThumb) return;

    const handleMouseUp = () => setActiveThumb(null);
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseup", handleMouseUp);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, [activeThumb, handleMouseMove]);

  const handleRangeClick = (e) => {
    const newValue = getValueFromPosition(e.clientX);
    const isCloserToMin =
      Math.abs(minPos - ((newValue - min) / (max - min)) * 100) <
      Math.abs(maxPos - ((newValue - min) / (max - min)) * 100);

    if (isCloserToMin) {
      setMinValue(clamp(newValue, min, maxValue - step));
    } else {
      setMaxValue(clamp(newValue, minValue + step, max));
    }
  };

  return (
    <div className="shadow-shadow min-h-[170px] w-full p-7 shadow-xl">
      {/* Input fields */}
      <div className="flex gap-2">
        <Text className="mb-4 ps-0 font-bold">Price Range:</Text>{" "}
        <p className="text-text-lite mb-4 font-bold">
          ৳{new Intl.NumberFormat("en-BD").format(minValue)} - ৳
          {new Intl.NumberFormat("en-BD").format(maxValue)}
        </p>
      </div>

      {/* Range Slider */}
      <div
        className="relative mt-5 cursor-pointer"
        ref={rangeRef}
        onClick={handleRangeClick}
      >
        <div className="absolute top-1/2 right-0 left-0 h-1.5 -translate-y-1/2 rounded-full bg-gray-200" />

        {/* Active range */}
        <div style={{ left: `${minPos}%`, right: `${100 - maxPos}%` }} />

        {/* Thumbs */}
        {[
          ["min", minPos],
          ["max", maxPos],
        ].map(([type, pos]) => (
          <div
            key={type}
            className="absolute top-1/2 z-10 h-5 w-5 -translate-x-1/2 -translate-y-1/2 transform cursor-pointer rounded-full bg-indigo-600 shadow"
            style={{ left: `${pos}%` }}
            onMouseDown={() => setActiveThumb(type)}
          />
        ))}
      </div>
      <div className="mt-9 flex items-center justify-between gap-5">
        {[
          ["min", minValue, setMinValue, min, maxValue - step],
          ["max", maxValue, setMaxValue, minValue + step, max],
        ].map(([type, value, setter, minLimit, maxLimit]) => (
          <div className="flex w-fit flex-col justify-between" key={type}>
            <label
              htmlFor={`${type}Price`}
              className="mb-1 block text-sm font-medium text-gray-700"
            >
              {type === "min" ? "Min Price" : "Max Price"}
            </label>
            <div className="relative rounded-md shadow-sm">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-2">
                <span className="text-gray-500 sm:text-sm">$</span>
              </div>
              <input
                type="number"
                id={`${type}Price`}
                className="border-border block max-w-[100px] rounded-md border py-2 ps-4 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
                value={value}
                min={minLimit}
                max={maxLimit}
                onChange={(e) =>
                  setter(clamp(Number(e.target.value), minLimit, maxLimit))
                }
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PriceRangeSelector;
