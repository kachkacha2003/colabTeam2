import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import PageProvider from "./Context/PageProvider";
import { Global } from "./GlobalStyles";
const router = createBrowserRouter([{ path: "/", element: <Home /> }]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PageProvider>
      <Global />
      <RouterProvider router={router} />
    </PageProvider>
  </StrictMode>
);
