import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout";
const CarDetails = lazy(() => import("../pages/CarDetails"));
const UnauthorizedPage = lazy(() => import("../pages/UnauthorizedPage"));
const Contact = lazy(() => import("../pages/Contact"));
const NotFound = lazy(() => import("../pages/NotFound"));
const Cars = lazy(() => import("../pages/Cars"));
const About = lazy(() => import("../pages/About"));
const Home = lazy(() => import("../pages/Home"));

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
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/cars",
        element: <Cars />,
      },
      {
        path: "/car/:id",
        element: (
          // <PrivateRoute>
          <CarDetails />
          // </PrivateRoute>
        ),
      },
      {
        path: "/unauthorized",
        element: <UnauthorizedPage />,
      },
    ],
  },
]);

export default router;
