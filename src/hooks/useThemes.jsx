/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";

// get stored theme
const getLocalTheme = () => localStorage.getItem("theme");

const useTheme = () => {
  const [theme, setTheme] = useState(getLocalTheme() || "system");

  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const applyTheme = (themeToApply) => {
    // clean up any previous theme classes
    element.classList.remove("dark", "light", "red");

    switch (themeToApply) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;

      case "light":
        element.classList.add("light");
        localStorage.setItem("theme", "light");
        break;

      case "red":
        element.classList.add("red");
        localStorage.setItem("theme", "red");
        break;

      case "system":
      default:
        localStorage.removeItem("theme");
        if (darkQuery.matches) {
          element.classList.add("dark");
        } else {
          element.classList.remove("dark");
        }
        break;
    }
  };

  // run once on mount
  useEffect(() => {
    applyTheme(theme);
  }, []);

  // react to theme changes
  useEffect(() => {
    applyTheme(theme);
  }, [theme]);

  // react to system preference changes if theme is system
  useEffect(() => {
    const handler = (e) => {
      if (theme === "system") {
        applyTheme("system");
      }
    };
    darkQuery.addEventListener("change", handler);
    return () => darkQuery.removeEventListener("change", handler);
  }, [theme]);

  return [theme, setTheme];
};

export default useTheme;

// import { useEffect, useState } from "react";

// const getLocalTheme = localStorage.getItem("theme");

// const useTheme = () => {
//   const [theme, setTheme] = useState(getLocalTheme ? getLocalTheme : "system");

//   const element = document.documentElement;
//   const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");

//   const onWindowMatch = () => {
//     if (
//       localStorage.theme === "dark" ||
//       (!("theme" in localStorage) && darkQuery.matches)
//     ) {
//       element.classList.add("dark");
//     } else {
//       element.classList.remove("dark");
//     }
//   };

//   useEffect(() => {
//     onWindowMatch();
//   }, []);

//   useEffect(() => {
//     switch (theme) {
//       case "dark":
//         element.classList.add("dark");
//         localStorage.setItem("theme", "dark");
//         break;

//       case "light":
//         element.classList.add("light");
//         localStorage.setItem("theme", "light");
//         break;

//       case "red":
//         element.classList.add("red");
//         localStorage.setItem("theme", "red");
//         break;

//       default:
//         localStorage.removeItem("theme");
//         onWindowMatch();
//         break;
//     }
//   }, [theme]);

//   useEffect(() => {
//     const changeHandler = (e) => {
//       if (!("theme" in localStorage)) {
//         if (e.matches) {
//           element.classList.add("dark");
//         } else {
//           element.classList.remove("dark");
//         }
//       }
//     };

//     darkQuery.addEventListener("change", changeHandler);

//     return () => darkQuery.removeEventListener("change", changeHandler);
//   }, []);

//   return [theme, setTheme];
// };

// export default useTheme;
