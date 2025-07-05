import i18next from "i18next";
import { useEffect, useRef, useState } from "react";
import ToggleBottomSvg from "../../assets/svgs/ToggleBottomSvg";
import Button from "./Button"; // Your custom Button component

const lngs = {
  en: { nativeName: "English", flag: "🇺🇸" },
  bn: { nativeName: "বাংলা", flag: "🇧🇩" },
};

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const currentLng = i18next.resolvedLanguage;

  return (
    <div className="relative" ref={dropdownRef}>
      <Button
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="true"
        aria-expanded={isOpen}
        className="hover:bg-border/50 flex items-center gap-2 border-0 bg-transparent p-2"
      >
        <span className="text-base">{lngs[currentLng]?.flag || "🌐"}</span>
        <span>{currentLng.toUpperCase()}</span>
        <ToggleBottomSvg className={isOpen ? "rotate-180" : ""} />
      </Button>

      {isOpen && (
        <div className="absolute right-0 z-10 mt-2 w-40 rounded-md border border-gray-200 bg-white shadow-lg">
          <div className="py-1">
            {Object.keys(lngs).map((lng) => (
              <button
                key={lng}
                onClick={() => {
                  i18next.changeLanguage(lng);
                  setIsOpen(false);
                }}
                disabled={currentLng === lng}
                className={`flex w-full items-center px-4 py-2 text-left text-sm ${
                  currentLng === lng
                    ? "bg-blue-50 text-blue-600"
                    : "text-gray-700 hover:bg-gray-100"
                }`}
                aria-current={currentLng === lng ? "true" : undefined}
              >
                <span className="mr-2 text-base">{lngs[lng].flag}</span>
                <span>{lngs[lng].nativeName}</span>
                {currentLng === lng && (
                  <svg
                    className="ml-auto h-4 w-4 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageDropdown;
