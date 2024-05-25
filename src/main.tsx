import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  LoaderFunction,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import {
  Authenticator,
  Heading,
  Image,
  useAuthenticator,
  View,
} from "@aws-amplify/ui-react";
import {
  createTheme,
  ThemeProvider as MuiThemeProvider,
} from "@mui/material/styles";
import { Amplify } from "aws-amplify";

import outputs from "../amplify_outputs.json";
import App from "./App.tsx";
import Logo from "./assets/logo.png";
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

const muiTheme = createTheme({
  palette: {
    primary: {
      main: "hsl(var(--amplify-colors-primary-80))",
    },
    secondary: {
      main: "hsl(var(--amplify-colors-secondary-80))",
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
      <MuiThemeProvider theme={muiTheme}>
        <RouterProvider router={router} />
      </MuiThemeProvider>
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
      <Authenticator
        components={{
          Header() {
            return (
              <View textAlign="center" padding="1rem" className="auth-header">
                <Image alt="Job search journal logo" src={Logo} />
                <Heading>Job Search Journal</Heading>
              </View>
            );
          },
        }}
      />
    </div>
  );
}