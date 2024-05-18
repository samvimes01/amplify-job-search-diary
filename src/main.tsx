import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { Authenticator } from "@aws-amplify/ui-react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Amplify } from "aws-amplify";

import outputs from "../amplify_outputs.json";
import App from "./App.tsx";
import NavBar from "./components/NavBar.tsx";
import "./index.css";
import ErrorPage from "./pages/Error.tsx";
import Profile from "./pages/Profile.tsx";

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
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Authenticator.Provider>
      <ThemeProvider theme={theme}>
        <NavBar />
        <main>
          <RouterProvider router={router} />
        </main>
      </ThemeProvider>
    </Authenticator.Provider>
  </React.StrictMode>
);
