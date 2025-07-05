import { Outlet } from "react-router-dom";
import Footer from "../components/organisms/Footer";
import Header from "../components/organisms/Header";

const BaseLayout = () => {
  return (
    <>
      <Header />
      <main className="mt-20">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default BaseLayout;
