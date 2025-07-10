import { Form, Formik } from "formik";
import { Link } from "react-router-dom";
import Button from "../atoms/Button";
import FormikInput from "../atoms/FormikInput";
import TextSM from "../atoms/TextSM";

const LoginForm = ({ className = "" }) => {
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
        <Link
          to="/forgot-password"
          className="mb-5 ml-auto block w-fit text-right text-sm"
        >
          <TextSM className="mt-0 w-fit pt-0 text-right text-blue-500 underline">
            Forgot Password?
          </TextSM>
        </Link>
        <Button type="submit" secondary className="w-full">
          Login
        </Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
