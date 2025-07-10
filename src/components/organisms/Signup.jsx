import { useState } from "react";
import { Link } from "react-router-dom";
import useScrollLock from "../../hooks/useScrollLock";
import Button from "../atoms/Button";
import Text from "../atoms/Text";
import TextXL from "../atoms/TextXL";
import UseOutClickDetect from "../atoms/UseOutClickDetect";
import LoginForm from "../molicules/LoginForm";

const Signup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useScrollLock(isOpen);

  const handleToggler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Button onClick={handleToggler} className="font-bold" secondary>
        Login
      </Button>

      <section
        className={`bg-background/20 top-0 right-0 z-50 flex h-screen w-screen items-center justify-center backdrop-blur-[3px] transition-all ${isOpen ? "fixed" : "hidden scale-0 opacity-0"}`}
      >
        <div className="bg-background/80 w-full max-w-md rounded-lg p-6 shadow-lg">
          <TextXL className="mb-4 text-center text-2xl font-bold">Login</TextXL>

          <UseOutClickDetect onOutsideClick={() => setIsOpen(false)}>
            <LoginForm />
          </UseOutClickDetect>

          <p className="mt-3 text-center">- OR -</p>

          <Button className="mt-3 flex w-full items-center justify-center gap-5 hover:text-white">
            <img
              src="https://cdn-icons-png.flaticon.com/128/300/300221.png"
              loading="lazy"
              alt="Google"
              title="Google"
              width="20"
              height="20"
            />
            Login with Google
          </Button>

          <div className="mt-4 text-center text-sm">
            <Text>Don't have an account?</Text>{" "}
            <Link to="/register" className="text-blue-500 hover:underline">
              <Text>Register</Text>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
