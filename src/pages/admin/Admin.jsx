import React, { useState } from "react";
import "./admin.scss";
import { Outlet } from "react-router-dom";
import AdminHeader from "./admin-header/AdminHeader";
import SideBar from "./sidebar/SideBar";

const Admin = () => {
  const [close, setClose] = useState(false);
  return (
    <>
      <div className={`admin ${close ? "close" : ""}`}>
        <SideBar />
        <div>
          <AdminHeader setClose={setClose} />
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Admin;
