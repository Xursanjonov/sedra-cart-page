import { IoIosMenu } from "react-icons/io";
import React from "react";

const AdminHeader = ({ setClose }) => {
  return (
    <div className="admin__header">
      <button
        className="admin__header__btn"
        onClick={() => setClose((p) => !p)}
      >
        <IoIosMenu />
      </button>
      <div>
        <p>John doe</p>
      </div>
    </div>
  );
};

export default AdminHeader;
