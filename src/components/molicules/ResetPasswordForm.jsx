import { Form, Formik } from "formik";
import Button from "../atoms/Button";
import FormikInput from "../atoms/FormikInput";

const ResetPasswordForm = () => {
  return (
    <Formik>
      <Form>
        <FormikInput
          type="password"
          name="password"
          label="Password"
          placeholder="********"
          inputClassName="text-lg"
          className="mb-0"
        />{" "}
        <FormikInput
          type="password"
          name="confirm_password"
          label="Confirm Password"
          placeholder="********"
          inputClassName="text-lg"
          className="my-4"
        />{" "}
        <Button type="submit" secondary className="w-full">
          Login
        </Button>
      </Form>
    </Formik>
  );
};

export default ResetPasswordForm;
