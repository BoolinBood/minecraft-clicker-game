import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import SignInPage from "./pages/sign-in-page/SignInPage.tsx";
import ClickerPage from "./pages/clicker-page/ClickerPage.tsx";
import LeaderboardPage from "./pages/leaderboard-page/LeaderboardPage.tsx";
import StorePage from "./pages/store-page/StorePage.tsx";
import ConfirmPage from "./pages/confirm-page/ConfirmPage.tsx";
import Trade from "./pages/trade-page/Trade.tsx";
import SignUpPage from "./pages/sign-up-page/SignUpPage.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <SignInPage />,
  },
  {
    path: "/signup",
    element: <SignUpPage />,
  },
  {
    path: "/clicker",
    element: <ClickerPage />,
  },
  {
    path: "/leaderboard",
    element: <LeaderboardPage />,
  },
  {
    path: "store",
    element: <StorePage />,
  },
  { path: "confirm", element: <ConfirmPage /> },
  { path: "trade", element: <Trade /> },
]);

const App: React.FC = (): JSX.Element => {
  return <RouterProvider router={router} />;
};

export default App;
