import { createBrowserRouter } from "react-router";
import MainLayout from "./layouts/MainLayout";
import MainPage from "./pages/main/page";
import AuthLayout from "./layouts/AuthLayout";
import SigninPage from "./pages/signin/page";
import SignupPage from "./pages/signup/page";
import MypageReviewSubmit from "./pages/mypage/review/submit/page";
import LiterPage from "./pages/mypage/liter/page";
import MyPageLayout from "./layouts/MyPageLayout";
import MypageCampaignPage from "./pages/mypage/campaign/page";
import MypageProfileEditPage from "./pages/mypage/profile/edit/page";
import MypageSNSPage from "../public/images/sns/page";
import MypageFAQPage from "./pages/mypage/faq/page";
import MypageInquiryPage from "./pages/mypage/inquiry/page";
import MypageTermsPage from "./pages/mypage/terms/page";
import MypagePrivacyPage from "./pages/mypage/privacy/page";

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
      {
        path: "campaign",
        element: <MypageCampaignPage />,
      },
      {
        path: "profile/edit",
        element: <MypageProfileEditPage />,
      },
      {
        path: "sns",
        element: <MypageSNSPage />,
      },
      {
        path: "faq",
        element: <MypageFAQPage />,
      },
      {
        path: "inquiry",
        element: <MypageInquiryPage />,
      },
      {
        path: "terms",
        element: <MypageTermsPage />,
      },
      {
        path: "privacy",
        element: <MypagePrivacyPage />,
      },
    ],
  },
]);

export default router;
