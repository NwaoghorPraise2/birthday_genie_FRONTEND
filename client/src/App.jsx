import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./styles/global.scss";

import ScrollToTop from "./components/scrollToTop/scrollToTop";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

import Error from "./pages/error/error";
import Home from "./pages/landing/home/home";

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
