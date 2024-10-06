import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import PageProvider from "./Context/PageProvider";
import { Global } from "./GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
const router = createBrowserRouter([{ path: "/", element: <Home /> }]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <PageProvider>
      <Header />
      <Global />
      <RouterProvider router={router} />
      <Footer />
    </PageProvider>
  </StrictMode>
);
