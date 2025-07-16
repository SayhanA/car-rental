import { FaCheck } from "react-icons/fa";
import Text from "./Text";

export default function RentalCostCard() {
  return (
    <div className="bg-bg-secondary mx-auto w-[350px] max-w-sm rounded-sm p-4 shadow-xl">
      {/* Price */}
      <div className="mb-4 flex h-[200px] flex-col items-center justify-center text-center">
        <p className="text-text-dark text-4xl font-semibold">€ 283.35</p>
        <p className="text-sm text-gray-500">Cost of rental</p>
      </div>

      <hr className="my-4" />

      {/* Benefits */}
      <div className="space-y-3 text-sm">
        <Text className="font-semibold text-blue-600">Good choice</Text>

        <p className="flex items-start gap-2 text-gray-700">
          <FaCheck className="mt-1 text-blue-500" size={14} />
          <span>
            <strong>35% lower price</strong> than the average for an Economy
            car.
          </span>
        </p>

        <p className="flex items-start gap-2 text-gray-700">
          <FaCheck className="mt-1 text-blue-500" size={14} />
          <span>
            Easy access to rental desk: <strong>In terminal</strong>
          </span>
        </p>

        <p className="flex items-start gap-2 text-gray-700">
          <FaCheck className="mt-1 text-blue-500" size={14} />
          <span>
            Complete freedom with <strong>unlimited mileage</strong>
          </span>
        </p>
        <p className="flex items-start gap-2 text-gray-700">
          <FaCheck className="mt-1 text-blue-500" size={14} />
          <span>
            <strong>35% lower price</strong> than the average for an Economy
            car.
          </span>
        </p>

        <p className="flex items-start gap-2 text-gray-700">
          <FaCheck className="mt-1 text-blue-500" size={14} />
          <span>
            Easy access to rental desk: <strong>In terminal</strong>
          </span>
        </p>
      </div>
    </div>
  );
}
