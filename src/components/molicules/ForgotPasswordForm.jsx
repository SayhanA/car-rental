import { Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../atoms/Button";
import FormikInput from "../atoms/FormikInput";

const ForgotPasswordForm = ({ onSuccess }) => {
  const initialValues = {
    email: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Reset password link sent to:", values.email);
    resetForm();
    if (onSuccess) {
      onSuccess("resetPassword");
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormikInput
          type="email"
          name="email"
          label="Email"
          placeholder="transrent@gmail.com"
          inputClassName="text-lg"
        />
        <Button type="submit" secondary className="w-full">
          Reset Password
        </Button>
      </Form>
    </Formik>
  );
};

export default ForgotPasswordForm;
