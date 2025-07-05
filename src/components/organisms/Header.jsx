import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LogoSvg from "../../assets/svgs/LogoSvg";
import Button from "../atoms/Button";
import LanguageDropdown from "../atoms/LanguageDropdown";
import SearchBar from "../atoms/SearchBar";
import ThemeToggle from "../atoms/ThemeToggle";
import Navbar from "../molicules/Navbar";
import Sidebar from "../molicules/Sidebar";

const Header = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [atTop, setAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;
      setAtTop(currentScrollPos < 20);
      const visible = prevScrollPos > currentScrollPos || currentScrollPos < 0;

      setIsVisible(visible);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollPos]);

  return (
    <header
      className={`fixedd top-0 right-0 left-0 z-50 px-5 transition-transform duration-300 ease-in-out ${atTop ? "bg-transparent" : "shadow-shadow bg-background relative shadow-lg"} ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="border-border container mx-auto flex items-center justify-between gap-10 border-0 border-b py-4">
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
          {/* <Button className="font-bold">Login</Button> */}
          <Button className="font-bold capitalize" secondary>
            {t("signup")}
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
