import { Link, useLocation } from "react-router-dom";
import { twMerge } from "tailwind-merge";
import { allowedRoles } from "../../data/userRoles";

const SidebarLink = ({ to = "", icon = "", label = "", role = "" }) => {
  const location = useLocation();
  const isActive = location.pathname === to;

  // If user role is not authorized, don't render the link
  if (!allowedRoles.includes(role)) {
    return null;
  }

  return (
    <Link
      to={to}
      className={twMerge(
        `text-text-lite flex items-center gap-2 rounded-sm px-7 py-3 hover:text-blue-500 ${isActive ? "boder-0 cursor-auto border-e-4 border-blue-500 bg-blue-100 font-semibold text-blue-500" : "hover:bg-border"}`,
      )}
    >
      {icon} {label}
    </Link>
  );
};

export default SidebarLink;
