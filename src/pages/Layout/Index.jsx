import React from "react";
import LeftSideBar from "./LeftSideBar";
import RightSideBar from "./RightSideBar";

const Layout = ({ children }) => {
  return (
    <>
      <LeftSideBar />
      <div className="main">{children}</div>
      <RightSideBar />
    </>
  );
};

export default Layout;
