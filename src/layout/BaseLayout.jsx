import { Outlet } from "react-router-dom";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";

const BaseLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

export default BaseLayout;
