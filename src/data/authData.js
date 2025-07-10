export const formOrder = [
  "login",
  "registration",
  "OTP",
  "forgotPassword",
  "resetPassword",
];

export const toggleTextMap = {
  login: {
    label: "Don't have an account?",
    action: "registration",
    actionLabel: "Register",
  },
  registration: {
    label: "Already have an account?",
    action: "login",
    actionLabel: "Login",
  },
  OTP: {
    label: "Didn't get OTP?",
    action: "login",
    actionLabel: "Back to Login",
  },
  forgotPassword: {
    label: "Remember your password?",
    action: "login",
    actionLabel: "Login",
  },
  resetPassword: {
    label: "Go back to login",
    action: "login",
    actionLabel: "Login",
  },
};
