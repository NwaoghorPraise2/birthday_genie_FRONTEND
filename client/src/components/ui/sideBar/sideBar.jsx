import { extraRoutes, routes } from "../../../utils/utils";
import "./sideBar.scss";
import { Link, useLocation } from "react-router-dom";
import { BiLogOut } from "react-icons/bi";
import { useDashboardContext } from "../../../contexts/dashboardContext";

const SideBar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const { openNav, togglenNav } = useDashboardContext();

  return (
    <aside className="aside">
      <div className={`side-bar ${openNav ? "open" : "close"} `}>
        <div className="top-nav">
          {routes.map((route) => (
            <Link
              to={route.route}
              key={route.route}
              className={`link ${
                currentPath === route.route ? "active" : "inactive"
              }`}
              onClick={togglenNav}
            >
              <route.Icon
                color={`${currentPath === route.route ? "#FFF7FA" : "#DE2A5D"}`}
                size={20}
              />
              <span>{route.name}</span>

              {route.name === "Notifications" ? (
                <span className="notifInfo">
                  <p>1</p>
                </span>
              ) : null}

              {route.name === "Messages" ? (
                <span className="ai">
                  <p>Ai</p>
                </span>
              ) : null}
            </Link>
          ))}
        </div>

        <div className="bottom-nav">
          {extraRoutes.map((route) => (
            <Link
              to={route.route}
              key={route.route}
              className={`link ${
                currentPath === route.route ? "active" : "inactive"
              }`}
              onClick={togglenNav}
            >
              <route.Icon
                color={`${currentPath === route.route ? "#FFF7FA" : "#DE2A5D"}`}
                size={20}
              />
              <span>{route.name}</span>
            </Link>
          ))}
          <button className="link">
            <BiLogOut color="#DE2A5D" size={20} />
            <span>Log out</span>
          </button>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
