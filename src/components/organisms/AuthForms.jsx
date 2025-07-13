import { FaArrowLeftLong } from "react-icons/fa6";
import { useDispatch, useSelector } from "react-redux";
import { formOrder, toggleTextMap } from "../../data/authData";
import useScrollLock from "../../hooks/useScrollLock";
import {
  closeAuthModal,
  goToPreviousForm,
  openAuthModal,
  setAuthForm,
} from "../../store/slices/authModalSlice";
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
  const dispatch = useDispatch();
  const { isOpen, currentForm } = useSelector((state) => state.authModal);

  useScrollLock(isOpen);

  const toggleInfo = toggleTextMap[currentForm];

  return (
    <>
      <Button
        onClick={() => dispatch(openAuthModal())}
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
        <UseOutClickDetect onOutsideClick={() => dispatch(closeAuthModal())}>
          <div className="bg-background/80 relative rounded-lg p-6 shadow-lg md:w-md">
            <TextXL className="mb-4 text-center text-2xl font-bold capitalize">
              {currentForm.replace(/([A-Z])/g, " $1")}
            </TextXL>

            {currentForm === "login" && (
              <LoginForm event={(key) => dispatch(setAuthForm(key))} />
            )}
            {currentForm === "registration" && <Signupform />}
            {currentForm === "OTP" && <OtpForm />}
            {currentForm === "forgotPassword" && (
              <ForgotPasswordForm
                onSuccess={(key) => dispatch(setAuthForm(key))}
              />
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
                  onClick={() => dispatch(setAuthForm(toggleInfo.action))}
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
                onClick={() => dispatch(goToPreviousForm())}
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
