import { useState } from "react";
import { useTranslation } from "react-i18next";
import useScrollLock from "../../hooks/useScrollLock";
import Button from "../atoms/Button";
import LanguageDropdown from "../atoms/LanguageDropdown";
import SearchBar from "../atoms/SearchBar";
import SidebarToggler from "../atoms/SidebarToggler";
import ThemeToggle from "../atoms/ThemeToggle";
import UseOutClickDetect from "../atoms/UseOutClickDetect";
import Navbar from "./Navbar";

const Sidebar = ({ className = "" }) => {
  const { t } = useTranslation();
  const [isActive, setIsActive] = useState(false);

  useScrollLock(isActive);

  return (
    <div className={`lg:hidden ${className} transition-all`}>
      <SidebarToggler
        isActive={isActive}
        setIsActive={setIsActive}
        className="absolute"
      />

      <UseOutClickDetect onOutsideClick={() => setIsActive(false)}>
        {" "}
        <div
          className={`bg-background border-border fixed -start-[100%] top-0 flex h-screen w-screen flex-col justify-between border-0 border-e p-5 transition-all min-[425px]:max-w-[350px] ${isActive ? "start-0" : ""}`}
        >
          <div className="">
            <div className="flex flex-row-reverse items-center gap-5">
              <SidebarToggler
                isActive={isActive}
                setIsActive={setIsActive}
                className="ms-auto block"
              />
              <SearchBar className="h-fit" />
            </div>

            <div className="my-4 flex flex-row gap-2">
              <LanguageDropdown className="border-border w-full rounded-lg border py-1" />
              <ThemeToggle className="border-border w-full rounded-lg border py-1" />
            </div>

            <div className="mt-8 px-5">
              <Navbar className="hover:text-text-lite flex flex-col" />
            </div>
          </div>

          <div className="w-full">
            <Button className="block w-full font-bold capitalize">
              {t("login")}
            </Button>
            <Button
              className="mt-2 block w-full font-bold capitalize"
              secondary
            >
              {t("signup")}
            </Button>
          </div>
        </div>
      </UseOutClickDetect>
    </div>
  );
};

export default Sidebar;
