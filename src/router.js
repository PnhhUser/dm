import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./layouts/layout";
import Dashboard from "./pages/dashboard";
import UserPage from "./pages/user";
import { UserProvider } from "./context/userContext";

export default function Router() {
  const routerApp = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Dashboard />} />

        <Route
          path="user"
          element={
            <UserProvider>
              <UserPage />
            </UserProvider>
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={routerApp} />;
}
