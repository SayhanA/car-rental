import { LuClipboardList } from "react-icons/lu";
import { MdManageHistory, MdOutlineDashboard } from "react-icons/md";
import { RiAddBoxLine } from "react-icons/ri";
import { Outlet } from "react-router-dom";
import SecureImage from "../components/atoms/SecureImage";
import SidebarLink from "../components/atoms/SidebarLink";
import Text from "../components/atoms/Text";
import TextLg from "../components/atoms/TextLg";

const Dashboard = () => {
  const adminPages = [
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
  return (
    <>
      <aside className="border-border h-screen w-[300px] border shadow-xl">
        <div className="flex flex-col items-center justify-center gap-2 py-7">
          <SecureImage
            image="https://images.unsplash.com/photo-1633332755192-727a05c4013d?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
            className="h-16 w-16 rounded-full"
          />
          <div className="text-center">
            <TextLg className="font-bold">Khalid Mahmud</TextLg>
            <Text>(Admin)</Text>
          </div>
        </div>
        <div className="flex flex-col">
          {adminPages.map(({ id, page, route, icon, role }) => (
            <SidebarLink
              key={id}
              label={page}
              to={route}
              icon={icon}
              role={role}
            />
          ))}
        </div>
      </aside>
      <Outlet />
    </>
  );
};

export default Dashboard;
