/* eslint-disable no-unused-vars */
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import ToggleBottomSvg from "../../assets/svgs/ToggleBottomSvg";
import SearchSvg from "../../assets/svgs/SearchSvg";

const HeroSearchForm = () => {
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const locations = ["Bangalore", "Delhi", "Mumbai", "Hyderabad", "Chennai"];
  const transportOptions = ["Car", "Bus", "Minibus", "Truck", "Minitruck"];

  const initialValues = {
    location: "Bangalore",
    pickupDate: "28-Mar 2025",
    returnDate: "30-Mar 2025",
    transportCategories: ["Car"],
  };

  const validationSchema = Yup.object({
    location: Yup.string().required("Location is required"),
    pickupDate: Yup.string(),
    returnDate: Yup.string(),
    transportCategories: Yup.array().min(
      1,
      "Select at list one transport category",
    ),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="bg-background mx-auto rounded-full p-6 shadow-md shadow-shadow">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form>
            <div className="flex items-center justify-between gap-5 pl-10">
              {/* Location Field */}
              <div className="relative">
                <label
                  htmlFor="location"
                  className="text-text-dark mb-1 flex items-center gap-2 text-lg font-medium"
                >
                  Pickup Location <ToggleBottomSvg />
                </label>
                <div className="relative">
                  <Field
                    name="location"
                    id="location"
                    type="text"
                    onClick={() =>
                      setShowLocationDropdown(!showLocationDropdown)
                    }
                    className="text-text-lite max-w-[150px] rounded-md border-none outline-0"
                    readOnly
                  />
                </div>
                {showLocationDropdown && (
                  <div className="bg-background absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md py-1 shadow-lg">
                    {locations.map((location) => (
                      <div
                        key={location}
                        className="hover:bg-border cursor-pointer px-4 py-2"
                        onClick={() => {
                          setFieldValue("location", location);
                          setShowLocationDropdown(false);
                        }}
                      >
                        {location}
                      </div>
                    ))}
                  </div>
                )}
                <ErrorMessage
                  name="location"
                  component="div"
                  className="mt-1 text-xs text-red-500"
                />
              </div>

              {/* Pickup Date Field */}
              <div className="relative">
                <label
                  htmlFor="pickupDate"
                  className="text-text-dark mb-1 flex items-center gap-2 text-lg font-medium"
                >
                  Pick-up Date <ToggleBottomSvg />
                </label>
                <div className="relative">
                  <Field
                    name="pickupDate"
                    id="pickupDate"
                    type="text"
                    className="text-text-lite max-w-[150px] rounded-md border-0 outline-0"
                  />
                </div>
                <ErrorMessage
                  name="pickupDate"
                  component="div"
                  className="mt-1 text-xs text-red-500"
                />
              </div>

              {/* Return Date Field */}
              <div className="relative">
                <label
                  htmlFor="returnDate"
                  className="text-text-dark mb-1 flex items-center gap-2 text-lg font-medium"
                >
                  Return Date <ToggleBottomSvg />
                </label>
                <div className="relative">
                  <Field
                    name="returnDate"
                    id="returnDate"
                    type="text"
                    className="text-text-lite max-w-[150px] rounded-md border-0 outline-0"
                  />
                </div>
                <ErrorMessage
                  name="returnDate"
                  component="div"
                  className="mt-1 text-xs text-red-500"
                />
              </div>

              {/* Transport Categories MultiSelect */}
              <div className="group relative">
                <label className="text-text-dark mb-1 flex items-center gap-2 text-lg font-medium">
                  Transport Categories <ToggleBottomSvg />
                </label>
                <div className="bg-background absolute max-h-10 group-hover:max-h-48 min-w-[150px] space-y-1 overflow-auto rounded-md p-2 opacity-0 shadow-lg transition-all group-hover:opacity-100">
                  {transportOptions.map((option) => (
                    <label
                      key={option}
                      className="text-text-lite flex cursor-pointer items-center gap-2"
                    >
                      <Field
                        type="checkbox"
                        name="transportCategories"
                        value={option}
                        className="accent-blue-600"
                      />
                      {option}
                    </label>
                  ))}
                </div>
                <ErrorMessage
                  name="transportCategories"
                  component="div"
                  className="mt-1 text-xs text-red-500"
                />

                {/* Show selected values below */}
                {values.transportCategories.length > 0 && (
                  <div className="text-text-lite">
                    <span className="">
                      {values.transportCategories.join(", ")}
                    </span>
                  </div>
                )}
              </div>

              {/* Search Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 p-3 px-6 font-medium text-white transition duration-300 hover:bg-blue-700"
                >
                  <SearchSvg /> Search
                </button>
              </div>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default HeroSearchForm;
