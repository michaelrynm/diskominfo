import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
  import Index from "../pages/index"
  import { Admin } from "../pages/admin";
  import { Dashboard } from "../pages/admin/dashboard";
  import { RekapPage } from "../pages/admin/rekapPage";
  import { UserPage } from "../pages/admin/userPage";

  export default function Router() {
    const router = createBrowserRouter([
      {
        path: "/",
        element: <Index />,
      },
      {
        path: "/admin",
        element: <Admin />
      },
      {
        path: "/dashboard",
        element: <Dashboard />
      },
      {
        path: "/user",
        element: <UserPage />
      },
      {
        path: "/rekapitulasi",
        element: <RekapPage />,
      }
    ]);
    return <RouterProvider router={router} />;
  }
  