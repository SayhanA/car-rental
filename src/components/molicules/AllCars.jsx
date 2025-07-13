import { useEffect, useRef, useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import { Link } from "react-router-dom";
import carData from "../../data/featureCarList";
import UseOutClickDetect from "../../hooks/UseOutClickDetect";
import useScrollLock from "../../hooks/useScrollLock";
import AvailablitySelector from "../atoms/AvailablitySelector";
import Button from "../atoms/Button";
import CarBrandsSelector from "../atoms/CarBrandsSelector";
import Card from "../atoms/Card";
import EngineTypeSelector from "../atoms/EngineTypeSelector";
import PriceRangeSelector from "../atoms/PriceRangeSelector";
import SeatsRangeSelector from "../atoms/SeatsRangeSelector";
import TransmissionSelector from "../atoms/TransmissionSelector";
import YearRangeSelector from "../atoms/YearRangeSelector";

const CHUNK_SIZE = 6;

const AllCars = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [visibleCars, setVisibleCars] = useState(CHUNK_SIZE);
  const loaderRef = useRef(null);

  useScrollLock(isOpen);
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
    <section className="mx-5 my-10 min-h-screen overflow-hidden">
      <div className="container mx-auto">
        <div className="flex gap-5 min-[1400px]:gap-10">
          <UseOutClickDetect
            onOutsideClick={() => {
              setIsOpen(false);
            }}
          >
            <div
              className={`max-[1280px]:bg-background transition-transform duration-300 max-[1280px]:fixed max-[1280px]:end-0 max-[1280px]:top-0 max-[1280px]:z-40 max-[1280px]:h-screen max-[1280px]:min-w-[320px] max-[1280px]:p-2 ${isOpen ? "max-[1280px]:translate-x-0" : "max-[1280px]:translate-x-full"}`}
            >
              <div className="filter-scrollbar top-5 h-full w-full overflow-scroll pb-10">
                <PriceRangeSelector />
                <AvailablitySelector />
                <CarBrandsSelector />
                <SeatsRangeSelector />
                <YearRangeSelector />
                <TransmissionSelector />
                <EngineTypeSelector />
              </div>
            </div>
          </UseOutClickDetect>
          <div className="mb-20">
            <div className="border-border flex items-center justify-between rounded-lg border-none">
              <div className="flex flex-wrap items-center">
                <Button
                  onClick={() => setIsOpen((prev) => !prev)}
                  className="border-border hover:text-text-lite border-none px-4 text-xl hover:border hover:bg-transparent min-[1280px]:hidden"
                >
                  <RiMenuFill />
                </Button>
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
                <Link to={`/car/${car?.id}`} key={car?.id}>
                  <Card
                    data={car}
                    className="hover:bg-bg-secondary transition-all hover:scale-[101%] hover:cursor-pointer hover:drop-shadow-2xl"
                  />
                </Link>
              ))}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllCars;
