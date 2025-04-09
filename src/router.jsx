import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import MainPage from "./pages/main/page";
import AuthLayout from "./layouts/AuthLayout";
import SigninPage from "./pages/signin/page";
import SignupPage from "./pages/signup/page";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      {
        path: "signin",
        element: <SigninPage />,
      },
      {
        path: "signup",
        element: <SignupPage />,
      },
    ],
  },
]);

export default router;
