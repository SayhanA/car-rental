import React from "react";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

const SectionDescripton = ({ className = "", children = null, ...props }) => {
  const { t } = useTranslation();

  return (
    <p
      className={twMerge(`text-text-lite mx-auto max-w-[641px] ${className}`)}
      {...props}
    >
      {t(children)}
    </p>
  );
};

export default SectionDescripton;
