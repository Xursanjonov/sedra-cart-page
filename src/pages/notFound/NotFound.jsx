import React from "react";
import "./notFound.scss";
import { NavLink } from "react-router-dom";

const NotFound = () => {
  return (
    <div  className="container not__found">
      <img
        src="https://cdni.iconscout.com/illustration/premium/thumb/not-found-7621869-6167023.png?f=webp"
        alt=""
      />
      <NavLink to={"/"}>
        <button>Home</button>
      </NavLink>
    </div>
  );
};

export default NotFound;
