import { Form, Formik } from "formik";
import * as Yup from "yup";
import Button from "../atoms/Button";
import FormikInput from "../atoms/FormikInput";

const Signupform = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
    confirm_password: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .max(15, "Must be 15 characters or less")
      .required("Required"),
    email: Yup.string().email("Invalid email address").required("Required"),
    password: Yup.string()
      .min(6, "Must be at least 6 characters")
      .matches(/[A-Z]/, "Must contain at least one uppercase letter")
      .matches(/[a-z]/, "Must contain at least one lowercase letter")
      .matches(/\d/, "Must contain at least one number")
      .required("Required"),
    confirm_password: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Required"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <FormikInput
          type="text"
          name="name"
          label="Name"
          placeholder="Username"
        />
        <FormikInput
          type="text"
          name="email"
          label="Email"
          placeholder="User email"
        />
        <FormikInput
          type="password"
          name="password"
          label="Password"
          placeholder="******"
        />
        <FormikInput
          type="password"
          name="confirm_password"
          label="Cornfirm Password"
          placeholder="******"
        />
        <Button type="submit" className="w-full" secondary>
          Signup
        </Button>
      </Form>
    </Formik>
  );
};

export default Signupform;
