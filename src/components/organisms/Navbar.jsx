import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import LogoSvg from "../../assets/svgs/LogoSvg";
import SearchSvg from "../../assets/svgs/SearchSvg";
import ActiveLink from "../atoms/ActiveLink";
import Button from "../atoms/Button";
import LanguageDropdown from "../atoms/LanguageDropdown";
import ThemeToggle from "../atoms/ThemeToggle";

const Navbar = () => {
  const { t } = useTranslation();
  const [isVisible, setIsVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);
  const [atTop, setAtTop] = useState(true);

  const navList = [
    { id: 122, tab: "Cars", path: "/cars" },
    { id: 123, tab: "About", path: "/about" },
    { id: 124, tab: "Contact", path: "/contact" },
  ];

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
      className={`fixed top-0 right-0 left-0 z-50 transition-transform duration-300 ease-in-out ${atTop ? "bg-transparent" : "shadow-shadow bg-background shadow-lg"} ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
    >
      <div className="border-border container mx-auto flex items-center justify-between gap-10 border-0 border-b py-4">
        <Link
          to={`/`}
          id="logo"
          className="flex flex-row flex-nowrap items-center gap-2"
        >
          <LogoSvg className="text-text-dark w-12" />
          <p className="text-text-dark inline-block text-2xl font-bold">
            {t("Trans")}
            <span className="text-blue-500">{t("Ren")}</span>
          </p>
        </Link>

        <nav className="text-text-dark flex gap-5">
          {navList.map((nav) => (
            <li key={nav?.id} className="list-none">
              <ActiveLink to={nav?.path}>{t(nav?.tab)}</ActiveLink>
            </li>
          ))}
        </nav>

        <div id="auth-btn" className="flex flex-row items-center gap-5">
          <div
            id="search"
            className="border-border relative flex h-full items-center rounded-full border py-3 lg:min-w-[200px]"
          >
            <input
              type="text"
              name="search"
              id="search-input"
              placeholder={t("Search cars") + "..."}
              className="text-text-dark placeholder:text-text-lite w-full border-0 ps-5 pe-10 outline-0"
            />

            <Button className="group border-0 hover:bg-transparent">
              {" "}
              <SearchSvg className="text-icon absolute end-4 scale-110 transition-all group-hover:scale-120" />
            </Button>
          </div>

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

export default Navbar;
