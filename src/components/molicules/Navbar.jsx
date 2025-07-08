import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import navList from "../../data/navlist";
import ActiveLink from "../atoms/ActiveLink";

const Navbar = ({ className = "" }) => {
  const { t } = useTranslation();

  return (
    <nav>
      <ul
        className={twMerge(`text-text-dark hidden gap-5 lg:flex ${className}`)}
      >
        {navList.map((nav) => (
          <li key={nav?.id} className="list-none">
            <ActiveLink to={nav?.path}>{t(nav?.tab)}</ActiveLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
