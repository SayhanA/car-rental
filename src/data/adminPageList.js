import { LuClipboardList } from "react-icons/lu";
import { MdManageHistory, MdOutlineDashboard } from "react-icons/md";
import { RiAddBoxLine } from "react-icons/ri";

export const adminPages = [
  {
    id: "dashboard",
    page: "Dashboard",
    route: "/dashboard",
    role: "admin",
    icon: <MdOutlineDashboard className="text-xl" />,
  },
  {
    id: "add-car",
    page: "Add Car",
    route: "/dashboard/add-car",
    role: "admin",
    icon: <RiAddBoxLine className="text-xl" />,
  },
  {
    id: "manage-cars",
    page: "Manage Cars",
    route: "/dashboard/manage-cars",
    role: "admin",
    icon: <MdManageHistory className="text-xl" />,
  },
  {
    id: "manage-bookings",
    page: "Manage bookings",
    route: "/dashboard/manage-bookings",
    role: "admin",
    icon: <LuClipboardList className="text-xl" />,
  },
];
