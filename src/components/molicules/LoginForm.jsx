import { Form, Formik } from "formik";
import Button from "../atoms/Button";
import FormikInput from "../atoms/FormikInput";

const LoginForm = ({ className = "", event = null }) => {
  return (
    <Formik>
      <Form className={className}>
        <FormikInput
          type="email"
          name="email"
          label="Email"
          placeholder="transrent@gmail.com"
          inputClassName="text-lg"
        />
        <FormikInput
          type="password"
          name="password"
          label="Password"
          placeholder="********"
          inputClassName="text-lg"
          className="mb-0"
        />

        <Button
          onClick={() => event("forgotPassword")}
          className="b-0 mt-0 mb-4 ml-auto block w-fit border-none p-0 pt-0 text-right text-blue-500 underline hover:bg-transparent"
        >
          Forgot Password?
        </Button>
        <Button type="submit" secondary className="w-full">
          Login
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
