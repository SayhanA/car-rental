import { FaCheckCircle, FaTimesCircle } from "react-icons/fa";
import TextXL from "../atoms/TextXL";

const RentalConditions = () => {
  return (
    <div className="bg-bg-secondary border-border my-8 rounded-lg border p-6 shadow-sm">
      <TextXL className="text-text-dark mb-4 text-xl font-bold">
        Rental Conditions
      </TextXL>

      <div className="space-y-4">
        {/* Eligibility Requirements */}
        <div>
          <p className="text-text-lite mb-2 flex items-center text-lg font-semibold">
            <FaCheckCircle className="mr-2 text-green-500" />
            Driver Requirements
          </p>
          <ul className="text-text-lite/90 ml-6 list-disc space-y-1">
            <li>Minimum age: 23 years</li>
            <li>Valid driver's license held for at least 2 years</li>
            <li>
              International renters require passport and international license
            </li>
            <li>Credit card in driver's name required for deposit</li>
          </ul>
        </div>

        {/* Rental Terms */}
        <div>
          <h3 className="text-text-lite mb-2 flex items-center text-lg font-semibold">
            <FaCheckCircle className="mr-2 text-green-500" />
            Rental Terms
          </h3>
          <ul className="text-text-lite/90 ml-6 list-disc space-y-1">
            <li>Minimum rental period: 24 hours</li>
            <li>
              Daily mileage limit: 200 km (additional charges apply beyond this)
            </li>
            <li>Fuel policy: Return with same fuel level</li>
            <li>Late return fee: 1.5× hourly rate after 1 hour grace period</li>
          </ul>
        </div>

        {/* Prohibited Uses */}
        <div>
          <h3 className="mb-2 flex items-center text-lg font-semibold text-red-600">
            <FaTimesCircle className="mr-2 text-red-500" />
            Prohibited Uses
          </h3>
          <ul className="text-text-lite/90 ml-6 list-disc space-y-1">
            <li>Off-road driving</li>
            <li>Towing or pushing any trailer/vehicle</li>
            <li>Transporting hazardous materials</li>
            <li>Racing or speed testing</li>
            <li>Driving under influence of alcohol/drugs</li>
          </ul>
        </div>

        {/* Insurance Info */}
        <div className="border-border rounded-lg border p-4">
          <h3 className="mb-2 text-lg font-semibold text-blue-700">
            Insurance Information
          </h3>
          <p className="text-text-lite/90">
            Basic CDW insurance included (excess applies). Additional coverage
            options available:
          </p>
          <ul className="text-text-lite/80 mt-2 ml-6 list-disc space-y-1">
            <li>Full Coverage: €15/day (reduces excess to €0)</li>
            <li>Personal Accident Insurance: €5/day</li>
            <li>Roadside Assistance: Included</li>
          </ul>
        </div>

        <div className="text-text-lite/70 pt-4 text-sm">
          <p>
            By proceeding with booking, you agree to our{" "}
            <a href="/terms" className="text-blue-600 hover:underline">
              Terms & Conditions
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};

export default RentalConditions;
