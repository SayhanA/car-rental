import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";
import LogoSvg from "../../assets/svgs/LogoSvg";
import LanguageDropdown from "../atoms/LanguageDropdown";
import SearchBar from "../atoms/SearchBar";
import ThemeToggle from "../atoms/ThemeToggle";
import Navbar from "../molicules/Navbar";
import Sidebar from "../molicules/Sidebar";
import AuthForms from "./AuthForms";

const Header = () => {
  const location = useLocation();
  const { t } = useTranslation();

  return (
    <header
      className={`${location.pathname.includes("dashboard") ? "border-border border-0 border-b px-5" : "mx-5 border-0"}`}
    >
      <div
        className={`container mx-auto flex items-center justify-between gap-10 py-4 ${location.pathname.includes("dashboard") ? "" : "border-border border-0 border-b"}`}
      >
        <Sidebar className="absolute" />
        <Link
          to={`/`}
          id="logo"
          className="mx-auto flex flex-row flex-nowrap items-center gap-2 lg:mx-0"
        >
          <LogoSvg className="text-text-dark w-12" />
          <p className="text-text-dark inline-block text-2xl font-bold">
            {t("Trans")}
            <span className="text-blue-500">{t("Ren")}</span>
          </p>
        </Link>

        <Navbar />

        <div
          id="auth-btn"
          className="hidden flex-row items-center gap-5 lg:flex"
        >
          <SearchBar />

          <div className="flex">
            <LanguageDropdown />
            <ThemeToggle />
          </div>
          <AuthForms />
        </div>
      </div>
    </header>
  );
};

export default Header;
