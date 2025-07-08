import { Form, Formik } from "formik";
import { useTranslation } from "react-i18next";
import { LuFilter } from "react-icons/lu";
import * as Yup from "yup";
import SearchSvg from "../../assets/svgs/SearchSvg";
import FormikInput from "../atoms/FormikInput";
import HeroTitle from "../atoms/HeroTitle";
import TextLg from "../atoms/TextLg";

const AvailableCarsSearch = () => {
  const { t } = useTranslation();

  const initialValues = {
    query: "",
  };

  const validationSchema = Yup.object({
    // query: Yup.string().required(t("Search term is required")),
  });

  const handleSubmit = (values, { resetForm }) => {
    console.log("Search query:", values.query);
    resetForm();
  };
  return (
    <section className="bg-bg-secondary">
      <div className="container mx-auto flex h-[70vh] w-full flex-col items-center justify-center px-5 text-center">
        <HeroTitle className="mb-5">Available Cars</HeroTitle>
        <TextLg className="mb-14 max-w-[650px]">
          Browse our selection of premium vehicles available for your next
          adventure and Unleash your next adventure with our top-tier fleet of
          premium vehicles — comfort, style, and power all in one place.
        </TextLg>

        <Formik
          initialValues={initialValues}
          onSubmit={handleSubmit}
          validationSchema={validationSchema}
        >
          <Form className="bg-background shadow-shadow flex w-[700px] items-center gap-2 rounded-full p-2 shadow-xl">
            <SearchSvg className="text-text-lite/70 ml-4 h-[20px] w-[20px]" />
            <FormikInput
              name="query"
              label=""
              placeholder={t("Search by make, model, or features")}
              inputClassName="border-none focus:ring-0 focus:outline-none px-4 py-3 w-full text-lg placeholder:text-text-lite/70"
              className="mb-0 w-full flex-1"
            />

            <hr className="border-text-lite/50 h-[25px] border border-dashed" />

            <LuFilter className="text-text-lite/70 ms-1 me-5 text-xl" />

            <button
              type="submit"
              className="hidden rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              {t("Search")}
            </button>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default AvailableCarsSearch;
