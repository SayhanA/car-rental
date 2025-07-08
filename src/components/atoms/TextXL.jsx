import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

const TextXL = ({ className = "", children = null, ...props }) => {
  const { t } = useTranslation();

  return (
    <p
      className={twMerge(`text-text-lite text-xl normal-case ${className}`)}
      {...props}
    >
      {t(children)}
    </p>
  );
};

export default TextXL;
