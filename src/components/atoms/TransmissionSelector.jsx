import { Form, Formik } from "formik";
import FormikInput from "./FormikInput";
import RangeSelectors from "./RangeSelectors";

const TransmissionSelector = () => {
  const transmissionTypes = [
    { label: "All", value: "all" },
    { label: "Manual", value: "manual" },
    { label: "Automatic", value: "automatic" },
    { label: "CVT", value: "cvt" },
    { label: "AMT", value: "amt" },
    { label: "DCT", value: "dct" },
    { label: "Tiptronic", value: "tiptronic" },
    { label: "Single-Speed (EV)", value: "single_speed" },
  ];
  const initialValues = {
    transmission: ["all"],
  };

  const validate = (values) => {
    const errors = {};
    const selectedCount = Object.values(values).filter(Boolean).length;
    if (selectedCount === 0) {
      errors.transmission = "At least one transmission type must be selected.";
    }
    return errors;
  };

  const handleSubmit = (values) => {
    console.log("Selected Transmission Types:", values);
    // Here you can handle the form submission, e.g., filter cars based on selected transmission
  };

  return (
    <RangeSelectors selector="Transmission">
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col justify-center gap-3">
          {transmissionTypes.map((type) => (
            <FormikInput
              key={type.value}
              type="checkbox"
              name="transmission"
              label={type.label}
              value={type.value}
              className="my-0 flex h-fit w-fit flex-row-reverse items-center gap-3"
              inputClassName="h-fit w-fit border-none"
            />
          ))}
        </Form>
      </Formik>
    </RangeSelectors>
  );
};

export default TransmissionSelector;
