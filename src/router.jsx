import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import MainPage from "./pages/main/page";
import AuthLayout from "./layouts/AuthLayout";
import SigninPage from "./pages/signin/page";
import SignupPage from "./pages/signup/page";
import MypageReviewSubmit from "./pages/mypage/review/submit/page";
import LiterPage from "./pages/mypage/liter/page";
import MyPageLayout from "./layouts/MyPageLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <MainPage />,
      },
      {
        path: "mypage/review/submit",
        element: <MypageReviewSubmit />,
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
  {
    path: "/mypage/",
    element: <MyPageLayout />,
    children: [
      {
        path: "liter",
        element: <LiterPage />,
      },
    ],
  },
]);

export default router;
