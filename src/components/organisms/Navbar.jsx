import { Link } from "react-router-dom";
import LogoSvg from "../../assets/svgs/LogoSvg";
import SearchSvg from "../../assets/svgs/SearchSvg";
import ActiveLink from "../atoms/ActiveLink";
import Button from "../atoms/Button";
import ThemeToggle from "../atoms/ThemeToggle";

const Navbar = () => {
  const navList = [
    { id: 122, tab: "Cars", path: "/cars" },
    { id: 123, tab: "About", path: "/about" },
    { id: 124, tab: "Contact", path: "/contact" },
  ];

  return (
    <header className="shadow-shadow shadow-lg">
      <div className="container mx-auto flex items-center justify-between gap-10 py-4">
        <Link
          to={`/`}
          id="logo"
          className="flex flex-row flex-nowrap items-center gap-2"
        >
          <LogoSvg className="text-text-dark w-12" />
          <p className="text-text-dark inline-block text-2xl font-bold">
            Ride<span className="text-blue-500">_Rent</span>
          </p>
        </Link>

        <nav className="text-text-dark flex gap-5">
          {navList.map((nav) => (
            <li key={nav?.id} className="list-none">
              <ActiveLink to={nav?.path}>{nav?.tab}</ActiveLink>
            </li>
          ))}
        </nav>

        <div id="auth-btn" className="flex flex-row gap-5">
          <div
            id="search"
            className="border-border relative flex items-center rounded-full border lg:min-w-[200px]"
          >
            <input
              type="text"
              name="search"
              id="search-input"
              className="text-text-dark w-full border-0 ps-5 pe-10 text-lg outline-0"
            />

            <Button className="group border-0 hover:bg-transparent">
              {" "}
              <SearchSvg className="text-icon absolute end-4 scale-110 transition-all group-hover:scale-120" />
            </Button>
          </div>
          <ThemeToggle />
          {/* <Button className="font-bold">Login</Button> */}
          <Button className="font-bold" secondary>
            SignUp
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
