import { ErrorMessage, Field } from "formik";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";

const FormikInput = ({
  name,
  label,
  type = "text",
  className = "",
  inputClassName = "",
  labelClassName = "",
  ...props
}) => {
  const { t } = useTranslation();

  return (
    <div className={twMerge("mb-4", className)}>
      {label && (
        <label
          htmlFor={label}
          className={twMerge(
            "mb-1 block font-medium text-gray-700",
            labelClassName,
          )}
        >
          {t(label)}
        </label>
      )}

      <Field
        id={label || name}
        name={name}
        type={type}
        className={twMerge(
          "w-full rounded-md border border-gray-300 px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none",
          inputClassName,
        )}
        {...props}
      />

      <ErrorMessage
        name={name}
        component="div"
        className="mt-1 text-sm text-red-500"
      />
    </div>
  );
};

export default FormikInput;
