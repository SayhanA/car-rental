import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout";
import Dashboard from "../layout/Dashboard";
import AddCar from "../pages/AddCar";
import DashboardHome from "../pages/DashboardHome";
import ManageBooking from "../pages/ManageBooking";
import ManageCar from "../pages/ManageCar";
const BookingPage = lazy(() => import("../pages/BookingPage"));
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
        path: "/booking/:id",
        element: (
          // <PrivateRoute>
          <BookingPage />
          // </PrivateRoute>
        ),
      },
      {
        path: "dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <DashboardHome />,
          },
          {
            path: "add-car",
            element: <AddCar />,
          },
          {
            path: "manage-car",
            element: <ManageCar />,
          },
          {
            path: "bookings",
            element: <ManageBooking />,
          },
        ],
      },
      {
        path: "/unauthorized",
        element: <UnauthorizedPage />,
      },
    ],
  },
]);

export default router;
