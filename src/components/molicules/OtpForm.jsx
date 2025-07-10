import { Form, Formik } from "formik";
import Button from "../atoms/Button";
import FormikInput from "../atoms/FormikInput";
import Text from "../atoms/Text";

const OtpForm = () => {
  return (
    <>
      <Text className="mb-5 text-center">
        Your will find OTP on your email in a minute.
      </Text>
      <Formik>
        <Form>
          <FormikInput
            type="text"
            name="otp"
            // label="Otp"
            placeholder="Your OTP"
            inputClassName="p-3"
          />
          <Button type="submit" secondary className="w-full">
            Confirm
          </Button>
        </Form>
      </Formik>
    </>
  );
};

export default OtpForm;
