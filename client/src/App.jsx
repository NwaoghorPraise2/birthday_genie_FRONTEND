import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./styles/global.scss";

import ScrollToTop from "./components/ui/scrollToTop/scrollToTop";
import Navbar from "./components/ui/navbar/navbar";
import Footer from "./components/ui/footer/footer";

import Error from "./pages/error/error";
import Home from "./pages/landing/home/home";
import About from "./pages/landing/about/about";
import Contact from "./pages/landing/contact/contact";

// dashboard
// import DashBoard from "./pages/dashboard/home/home";
// import Friends from "./pages/dashboard/friends/friends";
// import TopNav from "./components/ui/topBar/nav";

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

// const DashboardLayout = () => {
//   return (
//     <div className="App">
//       <ScrollToTop>
//         <TopNav />
//         <Outlet />
//       </ScrollToTop>
//     </div>
//   );
// };
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
    ],
  },

  // {
  //   path: "/dashboard",
  //   element: <DashboardLayout />,
  //   children: [
  //     {
  //       path: "/dashboard",
  //       element: <DashBoard />,
  //     },
  //     {
  //       path: "/dashboard/friends",
  //       element: <Friends />,
  //     },
  //   ],
  // },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
