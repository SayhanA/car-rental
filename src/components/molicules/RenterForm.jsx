import { Form, Formik } from "formik";
import * as Yup from "yup";
import { InputFields } from "../../data/RenterFormInputData";
import Button from "../atoms/Button";
import FormikInput from "../atoms/FormikInput";
import TextLg from "../atoms/TextLg";
import TextXL from "../atoms/TextXL";

const RenterForm = () => {
  const initialValues = {
    email: "sayhanahmed5@gmail.com",
    phone: "",
    name: "",
    NID: "",
    licence: "",
  };

  const validationSchema = Yup.object({
    email: Yup.string().email("Invalid email").required("Required"),
    phone: Yup.string().required("Required"),
    name: Yup.string().required("Required"),
    NID: Yup.string().required("Required"),
    licence: Yup.string().required("Required"),
  });

  const handleSubmit = (value, { resetForm }) => {
    console.log({ value });
    resetForm();
  };

  return (
    <section className="mx-5 my-5">
      <div className="border-border container mx-auto flex gap-5 rounded-md border p-10 shadow-xl">
        <div className="w-full">
          <TextXL className="text-text-dark font-semibold">
            Enter driver details
          </TextXL>
          <Formik
            initialValues={initialValues}
            validate={validationSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="mt-5 grid grid-cols-2 justify-center gap-5">
                {InputFields.map(
                  ({
                    id,
                    type,
                    name,
                    label,
                    className,
                    inputClassName,
                    ...props
                  }) => (
                    <FormikInput
                      key={id}
                      type={type}
                      name={name}
                      label={label}
                      className={className}
                      inputClassName={`outline outline-border py-3 ${inputClassName}`}
                      {...props}
                    />
                  ),
                )}
              </div>

              <Button type="submit" className="hover:text-white md:w-md">
                Continue to payment
              </Button>
            </Form>
          </Formik>
        </div>
        <div className="w-[400px] rounded-lg">
          <TextLg className="text-text-dark font-semibold">Summary</TextLg>
        </div>
      </div>
    </section>
  );
};

export default RenterForm;
