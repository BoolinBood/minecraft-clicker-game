import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import SignInPage from "./pages/sign-in-page/SignInPage.tsx";
import ClickerPage from "./pages/clicker-page/ClickerPage.tsx";
import LeaderboardPage from "./pages/leaderboard-page/LeaderboardPage.tsx";
import StorePage from "./pages/store-page/StorePage.tsx";
import ConfirmPage from "./pages/confirm-page/ConfirmPage.tsx";
import TradePage from "./pages/trade-page/TradePage.tsx";
import SignUpPage from "./pages/sign-up-page/SignUpPage.tsx";
import TradeInboxPage from "./pages/trade-inbox-page/TradeInboxPage.tsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

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
  { path: "trade", element: <TradePage /> },
  {
    path: "inbox",
    element: <TradeInboxPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
