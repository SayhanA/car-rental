import { useEffect, useRef, useState } from "react";
import carData from "../../data/featureCarList";
import AvailablitySelector from "../atoms/AvailablitySelector";
import Button from "../atoms/Button";
import Card from "../atoms/Card";
import EngineTypeSelector from "../atoms/EngineTypeSelector";
import PriceRangeSelector from "../atoms/PriceRangeSelector";
import SeatsRangeSelector from "../atoms/SeatsRangeSelector";
import TransmissionSelector from "../atoms/TransmissionSelector";
import YearRangeSelector from "../atoms/YearRangeSelector";

const CHUNK_SIZE = 6;

const AllCars = () => {
  const [visibleCars, setVisibleCars] = useState(CHUNK_SIZE);
  const loaderRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisibleCars((prev) => Math.min(prev + CHUNK_SIZE, carData.length));
        }
      },
      {
        root: null,
        rootMargin: "100px",
        threshold: 0.1,
      },
    );

    if (loaderRef.current) observer.observe(loaderRef.current);

    return () => {
      if (loaderRef.current) observer.unobserve(loaderRef.current);
    };
  }, []);

  const vehicleTypes = [
    "All",
    "Personal",
    "Passenter",
    "Commercial",
    "Special Purpose",
    "Construction",
    "Others",
  ];

  return (
    <section className="my-20 min-h-screen">
      <div className="container mx-auto">
        <div className="flex gap-10">
          <div className="relative min-w-[350px]">
            <div className="w-full">
              <PriceRangeSelector />
              <AvailablitySelector />
              <SeatsRangeSelector />
              <YearRangeSelector />
              <TransmissionSelector />
              <EngineTypeSelector />
            </div>
          </div>
          <div>
            <div className="border-border flex items-center justify-between rounded-lg border-none">
              <div className="flex flex-wrap items-center">
                {vehicleTypes.map((type) => (
                  <div key={type}>
                    <Button className="border-none px-4 py-2 hover:text-white">
                      {type}
                    </Button>
                  </div>
                ))}
              </div>
              <div className="flex items-center gap-4">
                <div className="hidden items-center gap-2">
                  <p>Show:</p>
                  <input
                    type="number"
                    name="item-number"
                    id="item-number"
                    className="border-border w-12 rounded-md border px-2 py-1"
                    defaultValue={CHUNK_SIZE}
                  />
                </div>
                <div className="nowrap flex items-center gap-2">
                  <label htmlFor="sort" className="text-nowrap">
                    Sort By:
                  </label>
                  <select name="sort" id="sort" className="text-text-lite">
                    <option value="Default">Default</option>
                    <option value="Low to High">Price(Low {">"} High)</option>
                    <option value="High to Low">Price(High {">"} Low)</option>
                  </select>
                </div>
              </div>
            </div>
            <div className="mt-7 grid justify-items-center gap-6 gap-y-14 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
              {carData.slice(0, visibleCars).map((car) => (
                <Card key={car?.id} data={car} />
              ))}
            </div>
          </div>
        </div>
        {/* Sentinel div for IntersectionObserver */}
        {visibleCars < carData.length && (
          <div
            ref={loaderRef}
            className="mt-10 h-10 text-center text-sm text-gray-400"
          >
            Loading more cars...
          </div>
        )}
      </div>
    </section>
  );
};

export default AllCars;
