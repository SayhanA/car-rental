import useTheme from "../../hooks/useThemes";
import Button from "./Button";

const ThemeToggle = () => {
  const [theme, setTheme] = useTheme();

  return (
    <div className="group relative w-fit">
      <Button className="text-text-dark hover:border-border hover:bg-transparent">
        {theme}
      </Button>
      <div className="text-text-dark absolute flex h-0 w-full flex-col gap-1 overflow-hidden pt-1 transition group-hover:h-fit">
        <Button
          onClick={() => setTheme("light")}
          className={`rounded border-0 px-2 py-1 ${
            theme === "light" ? "bg-blue-600 text-white" : ""
          }`}
        >
          ☀️ Light
        </Button>
        <Button
          onClick={() => setTheme("dark")}
          className={`rounded border-0 px-2 py-1 ${
            theme === "dark" ? "bg-blue-600 text-white" : ""
          }`}
        >
          🌙 Dark
        </Button>
        <Button
          onClick={() => setTheme("system")}
          className={`rounded border-0 px-2 py-1 ${
            theme === "system" ? "bg-blue-600 text-white" : ""
          }`}
        >
          🖥️ System
        </Button>
      </div>
    </div>
  );
};

export default ThemeToggle;
