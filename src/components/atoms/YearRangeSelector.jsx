import { Form, Formik } from "formik";
import FormikInput from "./FormikInput";
import RangeSelectors from "./RangeSelectors";

const yearRange = [
  { label: "Latest", to: "Latest", from: "Latest" },
  { label: "2024 - 2020", to: 2024, from: 2020 },
  { label: "2020 - 2016", to: 2020, from: 2016 },
  { label: "2016 - 2012", to: 2016, from: 2012 },
  { label: "2012 - 2008", to: 2012, from: 2008 },
  { label: "2008 - 2004", to: 2008, from: 2004 },
  { label: "2004 - 2000", to: 2004, from: 2000 },
  { label: "2000 - 1995", to: 2000, from: 1995 },
  { label: "Older than 1995", to: 1995, from: null },
];

// ✅ Initial values
const initialValues = {
  yearRange: ["all"],
};

const YearRangeSelector = () => {
  const validate = () => {};

  const handleSubmit = (values) => {
    console.log("All Selected:", values.all);
    console.log("Selected Year Ranges:", values.yearRange);
  };

  return (
    <RangeSelectors selector="Model Year">
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col justify-center gap-3">
          <FormikInput
            type="checkbox"
            name="yearRange"
            label="All"
            value="all"
            className="my-0 flex h-fit w-fit flex-row-reverse items-center gap-3"
            inputClassName="h-fit w-fit border-none"
          />

          {/* Year Range Options */}
          {yearRange.map((range, index) => (
            <FormikInput
              key={index}
              type="checkbox"
              name="yearRange"
              label={range.label}
              value={range.label}
              className="my-0 flex h-fit w-fit flex-row-reverse items-center gap-3"
              inputClassName="h-fit w-fit border-none"
            />
          ))}

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-primary hover:bg-primary-dark focus:ring-primary mt-4 w-full rounded-md px-4 py-2 text-white focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:outline-none"
          >
            Apply
          </button>
        </Form>
      </Formik>
    </RangeSelectors>
  );
};

export default YearRangeSelector;
