import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout";
import About from "../pages/About";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <BaseLayout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      // {
      //   path: "*",
      //   element: <NotFound />,
      // },
      // you can add more children here
    ],
  },
]);

export default router;
