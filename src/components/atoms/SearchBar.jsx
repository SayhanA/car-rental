import React from "react";
import { useTranslation } from "react-i18next";
import Button from "./Button";
import SearchSvg from "../../assets/svgs/SearchSvg";
import { twMerge } from "tailwind-merge";

const SearchBar = ({ className = "" }) => {
  const { t } = useTranslation();

  return (
    <div
      id="search"
      className={twMerge(
        `border-border relative flex h-full items-center rounded-full border py-3 lg:min-w-[200px] ${className}`,
      )}
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
  );
};

export default SearchBar;
