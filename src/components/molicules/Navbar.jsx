import React from "react";
import ActiveLink from "../atoms/ActiveLink";
import { useTranslation } from "react-i18next";
import { twMerge } from "tailwind-merge";
import navList from "../../data/navlist";

const Navbar = ({ className = "" }) => {
  const { t } = useTranslation();

  return (
    <nav
      className={twMerge(`text-text-dark hidden gap-5 lg:flex ${className}`)}
    >
      {navList.map((nav) => (
        <li key={nav?.id} className="list-none">
          <ActiveLink to={nav?.path}>{t(nav?.tab)}</ActiveLink>
        </li>
      ))}
    </nav>
  );
};

export default Navbar;
