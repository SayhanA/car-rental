import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearAlert } from "../../store/slices/alertSlice";
import Modal from "../atoms/Modal";

const GlobalAlertModal = () => {
  const dispatch = useDispatch();
  const { type, children } = useSelector((state) => state.alert);

  useEffect(() => {
    if (children) {
      const timer = setTimeout(() => {
        dispatch(clearAlert());
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [children, dispatch]);

  return (
    <Modal
      type={type}
      children={children}
      onClose={() => {
        dispatch(clearAlert());
      }}
    />
  );
};

export default GlobalAlertModal;
