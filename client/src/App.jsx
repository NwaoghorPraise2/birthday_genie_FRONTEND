import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./styles/global.scss";

import ScrollToTop from "./components/ui/scrollToTop/scrollToTop";
import Navbar from "./components/ui/navbar/navbar";
import Footer from "./components/ui/footer/footer";

// Landing
import Error from "./pages/error/error";
import Home from "./pages/landing/home/home";
import About from "./pages/landing/about/about";
import Contact from "./pages/landing/contact/contact";

// Auth
import Signup from "./pages/auth/signup/signup";
import Login from "./pages/auth/login/login";

// Dashboard
import DashBoard from "./pages/dashboard/home/home";
import Friends from "./pages/dashboard/friends/friends";
import TopNav from "./components/ui/topBar/nav";
import SideBar from "./components/ui/sideBar/sideBar";
import { DashboardContext } from "./contexts/dashboardContext";

const MainLayout = () => {
  return (
    <div className="App">
      <ScrollToTop>
        <Navbar />
        <Outlet />
        <Footer />
      </ScrollToTop>
    </div>
  );
};

const AuthLayout = () => {
  return (
    <div className="Auth">
      <ScrollToTop>
        <Outlet />
      </ScrollToTop>
    </div>
  );
};

const DashboardLayout = () => {
  return (
    <DashboardContext>
      <div className="Dashboard">
        <ScrollToTop>
          <TopNav />
          <main className="main">
            <SideBar />
            <div className="main-page">
              <Outlet />
            </div>
          </main>
        </ScrollToTop>
      </div>
    </DashboardContext>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },

  {
    path: "/auth",
    element: <AuthLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
    ],
  },

  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "",
        element: <DashBoard />,
      },
      {
        path: "friends",
        element: <Friends />,
      },
    ],
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
