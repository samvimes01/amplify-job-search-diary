import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import { Authenticator } from "@aws-amplify/ui-react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Amplify } from "aws-amplify";

import outputs from "../amplify_outputs.json";
import App from "./App.tsx";
import NavBar from "./components/NavBar.tsx";
import "./index.css";
import ErrorPage from "./pages/Error.tsx";
import Profile from "./pages/Profile.tsx";
import Job from './pages/Job.tsx';

Amplify.configure(outputs);

const theme = createTheme({
  palette: {
    primary: {
      main: "#7551c2",
    },
    secondary: {
      main: "#f50057",
    },
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        Component: App,
      },
      {
        path: "profile",
        element: <Profile />,
      },
      {
        path: "job/new",
        element: <Job />,
      },
      {
        path: "job/:jobId",
        element: <Job />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator.Provider>
      <ThemeProvider theme={theme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Authenticator.Provider>
  </React.StrictMode>
);

function Layout() {
  return (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  );
}