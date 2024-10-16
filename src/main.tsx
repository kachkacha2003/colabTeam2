import { StrictMode, useState } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Home from "./pages/Home";
import Layot from "../src/Layout";
import { Global } from "./GlobalStyles";
import PageProvider from "./Context/PageProvider";
import EventProvider from "./Context/EventProvider";
import UserProvider from "./Context/UsersProvider";
import ShowMembersProvider from "./Context/ShowMembersProvider";

import Dashboard from "./pages/dashboard/Dashboard";
import Events from "./pages/dashboard/Events";
import Invities from "./pages/dashboard/Invities";
import Notifications from "./pages/dashboard/Notifications";
import RSVPs from "./pages/dashboard/RSVPs";
import Create from "./pages/dashboard/Create";
import Event from "./pages/dashboard/Event";
import EventSearch from "./pages/search/EventSearch";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import MainLayout from "./MainLayout";

const router = createBrowserRouter([
  { path: "/signup", element: <SignUp /> },
  { path: "/login", element: <Login /> },

  {
    path: "/",
    element: <MainLayout />,

    children: [
      {
        path: "/",
        element: <Home />,
      },
    ],
  },
  {
    path: "/",
    element: <Layot />,
    children: [
      { path: "/dashboard", element: <Dashboard /> },
      { path: "/dashboard/events", element: <Events /> },
      { path: "/dashboard/invities", element: <Invities /> },
      { path: "/dashboard/RSVPs", element: <RSVPs /> },
      { path: "/dashboard/notifications", element: <Notifications /> },
      { path: "/dashboard/create", element: <Create /> },
      { path: "/dashboard/event", element: <Event /> },
      { path: "/dashboard/event/:id", element: <Event /> },
      { path: "/aaa", element: <EventSearch /> },
    ],
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Global />
    <PageProvider>
      <EventProvider>
        <UserProvider>
          <ShowMembersProvider>
            <RouterProvider router={router} />
          </ShowMembersProvider>
        </UserProvider>
      </EventProvider>
    </PageProvider>
  </StrictMode>
);
