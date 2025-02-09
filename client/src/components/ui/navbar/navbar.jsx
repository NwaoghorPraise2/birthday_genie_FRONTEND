import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./navbar.scss";
import Button from "../../reusable/button/button";

const links = {
  main: [
    { name: "home", url: "/" },
    { name: "about us", url: "/about" },
    { name: "contact", url: "/contact" },
  ],
  utils: [
    { name: "login", url: "/login" },
    { name: "sign up", url: "/signup" },
  ],
};

const loggedIn = false;

const Navbar = () => {
  const [menuHide, setMenuHide] = useState(true);
  const location = useLocation();

  useEffect(() => {
    setMenuHide(true);
  }, [location.pathname]);

  return (
    <div className="Navbar">
      <div className="container">
        <Link className="logo_link" to="/">
          <div className="logo">
            <img src="/imgs/logo.png" alt="logo" />
            <span className="title">Birthday</span>
          </div>
        </Link>
        <div className={menuHide ? "links" : "links open"}>
          <div className="pages">
            {links.main.map((link, index) => (
              <Button key={index} toUrl={link.url} text={link.name} />
            ))}
          </div>
          <div className="utils">
            {loggedIn ? (
              <img src="/imgs/Profile Picture.png" alt="profile photo" />
            ) : (
              links.utils.map((link, index) => (
                <Button key={index} toUrl={link.url} text={link.name} />
              ))
            )}
          </div>
        </div>
        <div onClick={() => setMenuHide(!menuHide)} className="iconBox">
          {menuHide ? (
            <img src="/imgs/menu.png" alt="menu icon" />
          ) : (
            <img src="/imgs/x-mark.png" alt="close icon" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;