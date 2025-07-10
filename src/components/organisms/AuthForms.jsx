import { useState } from "react";
import { FaArrowLeftLong } from "react-icons/fa6";
import { formOrder, toggleTextMap } from "../../data/authData";
import useScrollLock from "../../hooks/useScrollLock";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import TextXL from "../atoms/TextXL";
import UseOutClickDetect from "../atoms/UseOutClickDetect";
import ForgotPasswordForm from "../molicules/ForgotPasswordForm";
import LoginForm from "../molicules/LoginForm";
import OtpForm from "../molicules/OtpForm";
import ResetPasswordForm from "../molicules/ResetPasswordForm";
import Signupform from "../molicules/Signupform";

const AuthForms = () => {
  const [currentForm, setCurrentForm] = useState("registration");
  const [isOpen, setIsOpen] = useState(false);

  useScrollLock(isOpen);

  const handleToggler = (formKey) => {
    setCurrentForm(formKey);
  };

  const goToPrevious = () => {
    const currentIndex = formOrder.indexOf(currentForm);
    if (currentIndex > 0) {
      setCurrentForm(formOrder[currentIndex - 1]);
    }
  };

  const toggleInfo = toggleTextMap[currentForm];

  return (
    <>
      <Button
        onClick={() => {
          handleToggler("login");
          setIsOpen(true);
        }}
        className="font-bold"
        secondary
      >
        Login
      </Button>

      <section
        className={`bg-background/20 top-0 right-0 z-50 flex h-screen w-screen items-center justify-center backdrop-blur-[3px] transition-all ${
          isOpen ? "fixed" : "hidden scale-0 opacity-0"
        }`}
      >
        <UseOutClickDetect onOutsideClick={() => setIsOpen(false)}>
          <div className="bg-background/80 relative rounded-lg p-6 shadow-lg md:w-md">
            <TextXL className="mb-4 text-center text-2xl font-bold capitalize">
              {currentForm.replace(/([A-Z])/g, " $1")}
            </TextXL>

            {currentForm === "login" && <LoginForm event={handleToggler} />}
            {currentForm === "registration" && <Signupform />}
            {currentForm === "OTP" && <OtpForm />}
            {currentForm === "forgotPassword" && (
              <ForgotPasswordForm onSuccess={handleToggler} />
            )}
            {currentForm === "resetPassword" && <ResetPasswordForm />}

            {/* <p className="mt-3 text-center">- OR -</p> */}

            <Button className="mt-3 flex w-full items-center justify-center gap-5 hover:text-white">
              <img
                src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
                alt="Google"
                title="Google"
                width="20"
                height="20"
              />
              Login with Google
            </Button>

            {toggleInfo && (
              <div className="mt-4 flex items-center justify-center gap-2 text-center text-sm">
                <Text>{toggleInfo.label}</Text>
                <Button
                  onClick={() => handleToggler(toggleInfo.action)}
                  className="m-0 inline-block border-0 p-0 text-blue-500 hover:bg-transparent hover:underline"
                >
                  <Text className="inline-block bg-none text-blue-500 capitalize">
                    {toggleInfo.actionLabel}
                  </Text>
                </Button>
              </div>
            )}
            {formOrder.indexOf(currentForm) > 0 && (
              <Button
                onClick={goToPrevious}
                className="m-0 mx-auto mt-2 flex items-center gap-3 border-none p-0 text-blue-600 hover:bg-transparent"
              >
                <FaArrowLeftLong /> Back
              </Button>
            )}
          </div>
        </UseOutClickDetect>
      </section>
    </>
  );
};

export default AuthForms;
