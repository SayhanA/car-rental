import { Form, Formik } from "formik";
import FormikInput from "./FormikInput";
import RangeSelectors from "./RangeSelectors";

const EngineTypeSelector = () => {
  const engineTypes = [
    { id: 10000, label: "All", value: "all" },
    { id: 10001, label: "Petrol", value: "petrol" },
    { id: 10002, label: "Diesel", value: "diesel" },
    { id: 10003, label: "Hybrid (Petrol + Electric)", value: "hybrid" },
    { id: 10004, label: "Electric", value: "electric" },
    { id: 10005, label: "CNG (Compressed Natural Gas)", value: "cng" },
    { id: 10006, label: "LPG (Liquefied Petroleum Gas)", value: "lpg" },
    { id: 10007, label: "Hydrogen Fuel Cell", value: "hydrogen" },
    { id: 10008, label: "Plug-in Hybrid (PHEV)", value: "plug_in_hybrid" },
    { id: 10009, label: "Mild Hybrid", value: "mild_hybrid" },
  ];

  const initialValues = { engineType: ["all"] };

  const validate = (values) => {
    const errors = {};
    const selectedCount = Object.values(values).filter(Boolean).length;
    if (selectedCount === 0) {
      errors.engineType = "At least one engine type must be selected.";
    }
    return errors;
  };
  const handleSubmit = (values) => {
    console.log("Selected Engine Types:", values);
    // Here you can handle the form submission, e.g., filter cars based on selected engine types
  };

  return (
    <RangeSelectors selector="Engine Type" className="">
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col justify-center gap-3">
          {engineTypes.map((type) => (
            <FormikInput
              key={type.id}
              type="checkbox"
              name="engineType"
              label={type.label}
              value={type.value}
              className="my-0 flex h-fit w-fit cursor-pointer flex-row-reverse items-center gap-3"
              inputClassName="h-fit w-fit border-none cursor-pointer"
            />
          ))}
        </Form>
      </Formik>
    </RangeSelectors>
  );
};

export default EngineTypeSelector;
