import { Outlet } from "react-router-dom";
import Footer from "../components/organisms/Footer";
import Navbar from "../components/organisms/Navbar";

const BaseLayout = () => {
  return (
    <>
      <Navbar />
      <main className="mt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default BaseLayout;
