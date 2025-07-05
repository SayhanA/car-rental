import { useEffect } from "react";

const useScrollLock = (lock) => {
  useEffect(() => {
    if (lock) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [lock]);
};

export default useScrollLock;
