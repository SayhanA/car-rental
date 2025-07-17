import { lazy } from "react";
import { createBrowserRouter } from "react-router-dom";
import BaseLayout from "../layout/BaseLayout";
const ManageCar = lazy(() => import("../pages/ManageCar"));
const ManageBooking = lazy(() => import("../pages/ManageBooking"));
const DashboardHome = lazy(() => import("../pages/DashboardHome"));
const AddCar = lazy(() => import("../pages/AddCar"));
const Dashboard = lazy(() => import("../layout/Dashboard"));
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
            path: "manage-cars",
            element: <ManageCar />,
          },
          {
            path: "manage-bookings",
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
