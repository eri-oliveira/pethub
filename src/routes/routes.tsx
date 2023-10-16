import { createBrowserRouter } from "react-router-dom";
import Login from "../pages/login/Login";
import LoginLayout from "../shared/layout/login-layout/LoginLayout";

export const routes = createBrowserRouter([
  {
    path: "/login",
    element: <LoginLayout />,
    children: [
      { path: "/login", element: <Login /> },
      // {
      //   path: "/login/validate-email",
      //   element: <RecoverPassword />,
      // },
      // {
      //   path: "/login/validate-code",
      //   element: <AuthCode />,
      // },
      // {
      //   path: "/login/change-password",
      //   element: <ChangePassword />,
      // },
    ],
  },
]);
