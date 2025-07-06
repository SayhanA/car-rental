import React from "react";
import { twMerge } from "tailwind-merge";
import { useTranslation } from "react-i18next";

const SectionTitle = ({ className = "", children = null, ...props }) => {
  const { t } = useTranslation();

  return (
    <strong
      className={twMerge(
        `text-text-dark font-semibold md:text-[40px] ${className}`,
      )}
      {...props}
    >
      {t(children)}
    </strong>
  );
};

export default SectionTitle;
