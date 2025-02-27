import { createContext, useContext, useState } from "react";

const Dashboard = createContext();

const DashboardContext = ({ children }) => {
  const [openNav, setOpenNav] = useState(false);

  const togglenNav = () => {
    setOpenNav((op) => !op);
  };

  const value = {
    openNav,
    togglenNav,
  };
  return <Dashboard.Provider value={value}>{children}</Dashboard.Provider>;
};

const useDashboardContext = () => {
  const contextValue = useContext(Dashboard);
  if (!contextValue) {
    throw new Error(
      "useDashboardContext must be used within a DashboardContext provider"
    );
  }
  return contextValue;
};

export { DashboardContext, useDashboardContext };
