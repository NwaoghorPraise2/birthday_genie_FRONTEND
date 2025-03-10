import { useState } from "react";
import "./topBar.scss";

import { Link } from "react-router-dom";
import { useDashboardContext } from "../../../contexts/dashboardContext";

function TopBar() {
  const [value, setValue] = useState("");

  const onChangeValue = (inputValue) => {
    setValue(inputValue);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Searching for: ${value}`);
  };

  return (
    <nav className="TopBar">
      <Logo />

      <div className="srch">
        <SearchBar
          value={value}
          onChangeValue={onChangeValue}
          placeholder={"Search"}
          onSubmit={handleSubmit}
        />
      </div>
      <Icons />
    </nav>
  );
}

export default TopBar;

function Logo() {
  return (
    <div className="logo_box">
      <Link className="logo_link" to="/">
        <div className="logo">
          <img src="/imgs/logo.png" alt="logo" />
          <span className="title">Birthday</span>
        </div>
      </Link>
    </div>
  );
}

function SearchBar({ placeholder, onChangeValue, value, onSubmit }) {
  return (
    <form className="search" onSubmit={onSubmit}>
      <img src="/imgs/searchIcon.png" alt="logo" />

      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={(e) => onChangeValue(e.target.value)}
      />
    </form>
  );
}

const icons = [
  "/imgs/calendar-heart.png",
  "/imgs/heart-alt.png",
  "/imgs/profile-img.png",
];

function Icons() {
  const [open, setOpen] = useState({ nav: false, input: false });
  const [value, setValue] = useState("");

  const { openNav, togglenNav } = useDashboardContext();

  const handleSetValue = (value) => {
    setValue(value);
  };

  const handleExpand = () => {
    if (open.input === true) {
      setOpen({
        nav: false,
        input: false,
      });
      return;
    }
    setOpen({
      nav: false,
      input: true,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Searching for: ${value}`);
    setOpen({ nav: false, input: false });
  };

  return (
    <div className="icons">
      {icons.map((icon, index) => (
        <div key={index} className="img big-img">
          <img src={icon} alt="icon" />
        </div>
      ))}

      <span className="icons phone-img">
        <div className={`srch-bar ${open.input ? "active" : "hidden"}`}>
          <SearchBar
            onChangeValue={handleSetValue}
            value={value}
            placeholder={"search"}
            onSubmit={handleSubmit}
          />
        </div>
        <button
          className={`${open.input ? "hidden" : "active"}`}
          onClick={handleExpand}
        >
          <img src="/imgs/searchIcon.png" alt="logo" />
        </button>
        <img src="/imgs/profile-img.png" alt="User icon" />
        <button onClick={togglenNav}>
          <img src={`${openNav ? "/imgs/x-mark.png" : "/imgs/menu.png"}`} />
        </button>
      </span>
    </div>
  );
}
