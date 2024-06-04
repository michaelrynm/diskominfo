import React from "react";
import { Navbar } from "./navbar";
import { Sidebar } from "./sidebar";

export const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <Sidebar>{children}</Sidebar>
    </div>
  );
};
