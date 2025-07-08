import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import house from "../../assets/images/house1.png";
import Button from "../atoms/Button";
import SectionDescripton from "../atoms/SectionDescripton";
import SectionTitle from "../atoms/SectionTitle";

const AboutForm = () => {
  const initialValues = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };
  const validationSchema = Yup.object({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().required("Required"),
    message: Yup.string().required("Required").max(300, "Max 300 chars"),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Form data:", values);
    resetForm();
  };

  return (
    <section className="container mx-auto flex items-center gap-28">
      <div className="w-full">
        <img
          src={house}
          className="w-full object-cover"
          alt="CarRent official building"
        />
      </div>
      <div className="w-full">
        <SectionTitle className="mb-4 capitalize">
          Let's get in touch
        </SectionTitle>
        <SectionDescripton className="mx-0 mb-8">
          Write down you message to us.
        </SectionDescripton>

        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form className="space-y-5">
            {/* Name Row */}
            <div className="flex flex-col gap-4 md:flex-row">
              <div className="flex-1">
                <label className="text-text-dark mb-1 block font-medium">
                  First Name
                </label>
                <Field
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name..."
                  className="border-border w-full rounded border px-4 py-2"
                />
                <ErrorMessage
                  name="firstName"
                  component="div"
                  className="text-sm text-red-500"
                />
              </div>

              <div className="flex-1">
                <label className="text-text-dark mb-1 block font-medium">
                  Last Name
                </label>
                <Field
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name..."
                  className="border-border w-full rounded border px-4 py-2"
                />
                <ErrorMessage
                  name="lastName"
                  component="div"
                  className="text-sm text-red-500"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-text-dark mb-1 block font-medium">
                Email Address
              </label>
              <Field
                type="email"
                name="email"
                placeholder="Enter your email address..."
                className="border-border w-full rounded border px-4 py-2"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="text-text-dark mb-1 block font-medium">
                Phone Number
              </label>
              <Field
                type="text"
                name="phone"
                placeholder="+44 (000) 000-0000"
                className="border-border w-full rounded border px-4 py-2"
              />
              <ErrorMessage
                name="phone"
                component="div"
                className="text-sm text-red-500"
              />
            </div>

            {/* Message */}
            <div>
              <label className="text-text-dark mb-1 block font-medium">
                Message
              </label>
              <Field
                as="textarea"
                name="message"
                placeholder="Enter your main text here..."
                maxLength={300}
                rows={4}
                className="border-border w-full resize-none rounded border px-4 py-2"
              />
              <ErrorMessage
                name="message"
                component="div"
                className="text-sm text-red-500"
              />
              <div className="text-text-text-light text-text-lite mt-1 text-sm">
                Max 300 characters
              </div>
            </div>

            {/* Submit Button */}
            <div className="text-center">
              <Button
                type="submit"
                className="w-full rounded-sm bg-blue-700 px-6 py-3 font-medium text-white transition hover:bg-blue-800"
              >
                Submit Form
              </Button>
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default AboutForm;
