import { useDispatch } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../apis/auth/authHooks";
import { openAuthModal } from "../store/slices/authModalSlice";

const PrivateRoute = ({ allowedRoles }) => {
  const dispatch = useDispatch();
  const { user, role } = useAuth();

  if (!user) {
    dispatch(openAuthModal("login"));
    return <Navigate to="/unauthorized" replace />;
  }

  if (allowedRoles && !allowedRoles.includes(role)) {
    return <Navigate to="/unauthorized" replace />;
  }

  return <Outlet />;
};

export default PrivateRoute;
