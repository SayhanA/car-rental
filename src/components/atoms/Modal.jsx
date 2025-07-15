import UseOutClickDetect from "./UseOutClickDetect";

const Modal = ({ children = null, type = "info", onClose = null }) => {
  const colors = {
    success: "bg-green-100 text-green-800 border-green-400",
    error: "bg-red-100 text-red-800 border-red-400",
    warning: "bg-yellow-100 text-yellow-800 border-yellow-400",
    info: "bg-blue-100 text-blue-800 border-blue-400",
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 ${type ? "block" : "hidden"}`}
    >
      <UseOutClickDetect onOutsideClick={onClose}>
        <div
          className={`mx-4 w-full max-w-md rounded-lg p-6 shadow-xl transition-all duration-300 ${colors[type]}`}
        >
          {children}
        </div>
      </UseOutClickDetect>
    </div>
  );
};

export default Modal;
