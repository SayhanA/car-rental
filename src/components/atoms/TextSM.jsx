import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

const TextSM = ({ className = "", children = null, ...props }) => {
  const { t } = useTranslation();

  return (
    <p className={twMerge(`text-text-lite text-sm ${className}`)} {...props}>
      {t(children)}
    </p>
  );
};

export default TextSM;
