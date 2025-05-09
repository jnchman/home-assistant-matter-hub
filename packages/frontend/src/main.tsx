import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Provider as StateProvider } from "react-redux";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

import { CssBaseline, ThemeProvider } from "@mui/material";
import { NotificationsProvider } from "./components/notifications/notifications-provider.tsx";
import { routes } from "./routes.tsx";
import { store } from "./state/store.ts";
import { AppLayout } from "./theme/AppLayout.tsx";
import { appTheme } from "./theme/theme.ts";

let basename = document
  .getElementsByTagName("base")[0]
  ?.href?.replace(/\/$/, "");
if (basename?.startsWith("http")) {
  basename = new URL(basename).pathname;
}

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <AppLayout />,
      children: routes,
    },
  ],
  {
    basename,
  },
);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <StateProvider store={store}>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <NotificationsProvider>
          <RouterProvider router={router} />
        </NotificationsProvider>
      </ThemeProvider>
    </StateProvider>
  </StrictMode>,
);
