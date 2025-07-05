/* eslint-disable no-unused-vars */
import { ErrorMessage, Field, Form, Formik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import ToggleBottomSvg from "../../assets/svgs/ToggleBottomSvg";

const HeroSearchForm = () => {
  const [showLocationDropdown, setShowLocationDropdown] = useState(false);
  const locations = ["Bangalore", "Delhi", "Mumbai", "Hyderabad", "Chennai"];

  const initialValues = {
    location: "Bangalore",
    pickupDate: "28-Mar 2025",
    returnDate: "30-Mar 2025",
  };

  const validationSchema = Yup.object({
    location: Yup.string().required("Location is required"),
    pickupDate: Yup.string().required("Pickup date is required"),
    returnDate: Yup.string().required("Return date is required"),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);
    }, 400);
  };

  return (
    <div className="bg-background mx-auto max-w-4xl rounded-lg p-6 shadow-md">
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting, setFieldValue, values }) => (
          <Form>
            <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-4">
              {/* Location Field */}
              <div className="relative">
                <label
                  htmlFor="location"
                  className="text-text-lite mb-1 block text-sm font-medium"
                >
                  Pickup Location
                </label>
                <div className="relative">
                  <Field
                    name="location"
                    id="location"
                    type="text"
                    onClick={() =>
                      setShowLocationDropdown(!showLocationDropdown)
                    }
                    className="w-full rounded-md border-0 p-3 outline-0"
                    readOnly
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ToggleBottomSvg />
                  </span>
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
                  className="text-text-lite mb-1 block text-sm font-medium"
                >
                  Pick-up Date
                </label>
                <div className="relative">
                  <Field
                    name="pickupDate"
                    id="pickupDate"
                    type="text"
                    className="w-full rounded-md border-0 p-3 outline-0"
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ToggleBottomSvg />
                  </span>
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
                  className="text-text-lite mb-1 block text-sm font-medium"
                >
                  Return Date
                </label>
                <div className="relative">
                  <Field
                    name="returnDate"
                    id="returnDate"
                    type="text"
                    className="w-full rounded-md border-0 p-3 outline-0"
                  />
                  <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
                    <ToggleBottomSvg />
                  </span>
                </div>
                <ErrorMessage
                  name="returnDate"
                  component="div"
                  className="mt-1 text-xs text-red-500"
                />
              </div>

              {/* Search Button */}
              <div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full rounded-md bg-blue-600 px-6 py-3 font-medium text-white transition duration-300 hover:bg-blue-700"
                >
                  Search
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
