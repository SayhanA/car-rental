import { useSelector } from "react-redux";

export const useAuth = () => {
  return useSelector((state) => state.auth);
};

export const useRole = () => {
  return useSelector((state) => state.auth.role);
};

export const useIsAdmin = () => {
  const role = useRole();
  return role === "admin";
};

export const useIsSeller = () => {
  const role = useRole();
  return role === "seller";
};

export const useIsBuyer = () => {
  const role = useRole();
  return role === "buyer";
};
