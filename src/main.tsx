import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import NavBar from "./pages/dashboard/NavBar";
import Layot from "../src/Layout";
import PageProvider from "./Context/PageProvider";
import { Global } from "./GlobalStyles";
import Header from "./components/Header";
import Footer from "./components/Footer";
const router = createBrowserRouter([{ path: "/", element: <Home /> }]);
import Dashboard from "./pages/dashboard/Dashboard"
import Events from "./pages/dashboard/Events";
import Invities from "./pages/dashboard/Invities";
import Notifications from "./pages/dashboard/Notifications";
import RSVPs from "./pages/dashboard/RSVPs";
const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  {path: "/", element: <Layot/>,
    children: [
      {path: "/dashboard", element: <Dashboard/>},
      {path: "/events", element: <Events />},
      {path: "/invities", element: <Invities />},
      {path: "/RSVPs", element: <RSVPs />},
      {path: "/notifications", element: <Notifications />}
    ]
  }
  
]);

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
