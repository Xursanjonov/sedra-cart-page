import React from "react";
import "./footer.scss";
import { Link, useLocation } from "react-router-dom";
import logo from "../../../assets/icons/logoIskandar.svg";
import instagram from "../../../assets/images/instagramFooter.svg";
import facebook from "../../../assets/images/facebookFooter.svg";

const Footer = () => {
  const { pathname } = useLocation();

  if (pathname.includes("admin")) {
    return <></>;
  }

  return (
    <footer className="">
      <div className="footer__top container">
        <div className="footer__left__list">
          <Link to={"/all-products"}>ALL PRODUCTS</Link>
          <Link to={"/about"}>ABOUT SEEDRA</Link>
          <Link to={"/blog"} className="no-border">
            OUR BLOG
          </Link>
        </div>
        <div className="footer__logo">
          <img src={logo} alt="" />
        </div>
        <div className="footer__right__list">
          <Link>Terms&Conditions</Link>
          <Link  className="no-border">Privacy Policy</Link>
        </div>
      </div>
      <div className="footer__bottom container">
        <div className="footer__bottom__left">
          <img src={instagram} alt="" />
          <img src={facebook} alt="" />
        </div>
        <div className="footer__bottom__right">
          <Link>All rights reserved</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
