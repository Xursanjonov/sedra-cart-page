import React, { useState } from "react";
import "./header.scss";
import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../../../assets/icons/logoIskandar.svg";
import cart from "../../../assets/icons/cart.svg";
import bar from "../../../assets/icons/bar.svg";
import like from "../../../assets/icons/like.svg";
import x from "../../../assets/icons/x.svg";
import instagram from "../../../assets/images/instagramIskandar.svg";
import facebook from "../../../assets/images/facebookIskandar.svg";
import { CiSearch } from "react-icons/ci";
import { useGetAllProductsQuery } from "../../../context/productsSlice";
import SearchModule from "./searchModule/SearchModule";

const Header = () => {
  const { pathname } = useLocation();
  const [searchValue, setSearchValue] = useState("");
  const [showList, setShowList] = useState(false);
  const { data } = useGetAllProductsQuery({ search: searchValue });
  const isLogin = localStorage.getItem("x-auth-token");

  let handleCloser = () => {
    setSearchValue("");
    setShowList(false);
  };

  if (pathname.includes("admin")) {
    return <></>;
  }
  return (
    <header className="header">
      <nav className="container header__nav">
        <Link className="header__nav__logo" to={"/"}>
          <img src={logo} alt="" />
        </Link>
        <div
          className={
            showList ? `header__nav__middle show__list` : `header__nav__middle`
          }
        >
          <ul className="header__nav__middle__list">
            <NavLink to={"/all-products"}>ALL PRODUCTS</NavLink>
            <NavLink to={"/about"}>ABOUT SEEDRA</NavLink>
            <NavLink to={"/blog"}>OUR BLOG</NavLink>
            {isLogin ? (
              <NavLink to={"/admin/manage-product"}>ADMIN</NavLink>
            ) : (
              <NavLink to={"/login"}>LOGIN</NavLink>
            )}

            <NavLink className="header__nav__list-contact" to={"/contact"}>
              CONTACTS
            </NavLink>
            <li>
              <img src={instagram} alt="" />
              <img src={facebook} alt="" />
            </li>
          </ul>
          <div className="header__nav__middle__form">
            <button>
              <CiSearch />
            </button>
            <input
              onChange={(e) => setSearchValue(e.target.value)}
              value={searchValue}
              placeholder="Search"
              type="text"
            />
          </div>
          {/* <div onClick={handleCloser} className="show__list__closer">
            <img width={25} src={x} alt="" />
          </div> */}
        </div>
        <div className="header__nav__btns">
          <img src={like} alt="" />
          <NavLink to={"/cart"}>
            <img src={cart} alt="" />
          </NavLink>
          <div
            onClick={() => setShowList((p) => !p)}
            className="header__nav__bar"
          >
            <img src={bar} alt="" />
          </div>
        </div>
      </nav>
      {showList || searchValue ? (
        <div onClick={handleCloser} className="overlay"></div>
      ) : (
        <></>
      )}
      {searchValue ? (
        <SearchModule
          data={data}
          handleCloser={handleCloser}
          showList={showList}
        />
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
