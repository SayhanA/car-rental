import { ErrorMessage, Field } from "formik";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import Text from "./Text";

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
          <Text>{t(label)}</Text>
        </label>
      )}

      <Field
        id={label || name}
        name={name}
        type={type}
        className={twMerge(
          "border-border placeholder:text-text-lite/50 w-full rounded-md border px-3 py-2 text-sm focus:border-blue-500 focus:ring-2 focus:ring-blue-200 focus:outline-none",
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
