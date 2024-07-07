import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider
} from 'react-router-dom';
import './index.css'
import SignInPage from './pages/sign-in-page/SignInPage.tsx';
import ClickerPage from './pages/clicker-page/ClickerPage.tsx';
import LeaderboardPage from './pages/leaderboard-page/LeaderboardPage.tsx';
import StorePage from './pages/store-page/StorePage.tsx'
const router = createBrowserRouter([
  {
    path: '/',
    element: <SignInPage/>
  },
  {
    path: '/clicker',
    element: <ClickerPage />
  },
  {
    path: '/leaderboard',
    element: <LeaderboardPage />
  },
  {
    path: 'store',
    element: <StorePage/>
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
