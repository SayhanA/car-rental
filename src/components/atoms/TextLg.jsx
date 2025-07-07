import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

const TextLg = ({ className = "", children = null, ...props }) => {
  const { t } = useTranslation();

  return (
    <div className={twMerge(`text-text-lite text-lg ${className}`)} {...props}>
      {t(children)}
    </div>
  );
};

export default TextLg;
