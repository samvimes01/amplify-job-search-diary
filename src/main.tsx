import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  LoaderFunction,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import { Authenticator, useAuthenticator } from "@aws-amplify/ui-react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Amplify } from "aws-amplify";

import outputs from "../amplify_outputs.json";
import App from "./App.tsx";
import NavBar from "./components/NavBar.tsx";
import "./index.css";
import ErrorPage from "./pages/Error.tsx";
import Job from "./pages/Job.tsx";
import Profile from "./pages/Profile.tsx";
import { getJobLoader } from "./store/index.ts";

Amplify.configure(outputs);
const existingConfig = Amplify.getConfig();
Amplify.configure({
  ...existingConfig,
  API: {
    ...existingConfig.API,
    REST: {
      ...existingConfig.API?.REST,
      ...outputs.custom.API,
    },
  },
});


const theme = createTheme({
  palette: {
    primary: {
      main: "#c27551",
    },
    secondary: {
      main: "#00C9A9",
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
        path: "jobs/new",
        element: <Job />,
      },
      {
        path: "jobs/:id",
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        loader: getJobLoader as unknown as LoaderFunction<any>,
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
  const { route } = useAuthenticator((context) => [context.route]);

  // Use the value of route to decide which page to render
  return route === "authenticated" ? (
    <div>
      <NavBar />
      <main>
        <Outlet />
      </main>
    </div>
  ) : (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Authenticator />
    </div>
  );
}