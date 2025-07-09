import { Form, Formik } from "formik";
import FormikInput from "./FormikInput";
import RangeSelectors from "./RangeSelectors";

const CarBrandsSelector = () => {
  const carBrands = [
    { id: 1, label: "All", value: "all" },
    { id: 2, label: "Toyota", value: "toyota" },
    { id: 3, label: "Honda", value: "honda" },
    { id: 4, label: "Ford", value: "ford" },
    { id: 5, label: "Chevrolet", value: "chevrolet" },
    { id: 6, label: "Nissan", value: "nissan" },
    { id: 7, label: "BMW", value: "bmw" },
    { id: 8, label: "Mercedes-Benz", value: "mercedes" },
    { id: 9, label: "Volkswagen", value: "volkswagen" },
    { id: 10, label: "Hyundai", value: "hyundai" },
  ];

  const initialValues = { brand: ["all"] };
  const validate = (values) => {
    const errors = {};
    const selectedCount = Object.values(values).filter(Boolean).length;
    if (selectedCount === 0) {
      errors.brand = "At least one car brand must be selected.";
    }
    return errors;
  };
  const handleSubmit = (values) => {
    console.log("Selected Car Brands:", values);
    // Here you can handle the form submission, e.g., filter cars based on selected brands
  };

  return (
    <RangeSelectors selector="Car Brands">
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-col justify-center gap-3">
          {carBrands.map(({ id, label, value }) => (
            <FormikInput
              type="checkbox"
              key={id}
              name="brand"
              label={label}
              value={value}
              className="my-0 flex h-fit w-fit cursor-pointer flex-row-reverse items-center gap-3"
              inputClassName="h-fit w-fit border-none cursor-pointer"
            />
          ))}
        </Form>
      </Formik>
    </RangeSelectors>
  );
};

export default CarBrandsSelector;
