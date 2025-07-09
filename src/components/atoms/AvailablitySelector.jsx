import { Form, Formik } from "formik";
import FormikInput from "./FormikInput";
import RangeSelectors from "./RangeSelectors";

const AvailablitySelector = () => {
  const initialValues = {
    Starting: new Date().toISOString().split("T")[0],
    Ending: new Date(new Date().setDate(new Date().getDate() + 7))
      .toISOString()
      .split("T")[0],
  };

  const validate = (values) => {
    const errors = {};
    if (!values.Starting) {
      errors.Starting = "Starting date is required";
    }
    if (!values.Ending) {
      errors.Ending = "Ending date is required";
    } else if (new Date(values.Ending) < new Date(values.Starting)) {
      errors.Ending = "Ending date cannot be before starting date";
    }
    if (new Date(values.Starting) < new Date()) {
      errors.Starting = "Starting date cannot be in the past";
    }
    return errors;
  };

  const handleSubmit = (values) => {
    console.log("Selected Availability:", values);
  };

  return (
    <RangeSelectors selector="Availablity" childrenClassName="">
      <Formik
        initialValues={initialValues}
        validate={validate}
        onSubmit={handleSubmit}
      >
        <Form className="flex flex-row gap-4">
          <FormikInput type="date" name="Starting" label="Starting Date:" />
          <FormikInput type="date" name="Ending" label="Ending Date:" />
        </Form>
      </Formik>
    </RangeSelectors>
  );
};

export default AvailablitySelector;
