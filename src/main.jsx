import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import GlobalAlertModal from "./components/molicules/GlobalAlertModal";
import "./i18n/config";
import "./index.css";
import router from "./routes/router";
import { store } from "./store/store";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <Suspense fallback="Loading ...">
        <GlobalAlertModal />
        <RouterProvider router={router} />
      </Suspense>
    </Provider>
  </StrictMode>,
);
