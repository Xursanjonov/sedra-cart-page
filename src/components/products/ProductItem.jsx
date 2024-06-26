import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { CiHeart } from "react-icons/ci";
import { FaStar } from "react-icons/fa";
import { LuShoppingCart } from "react-icons/lu";
import { addToCart } from "../../context/cartSlice";

import "./products.scss";

export const ProductItem = ({ id, urls, title, price, setShowModule, handleViewMore, data }) => {
  const dispatch = useDispatch()

  const handleAdd = () => {
    dispatch(addToCart({ ...data, shopCount: 1 }))
  }

  return (
    <div key={id} className="products__cards__card">
      <Link to={`/products/${id}`}>
        <div className="products__cards__card-img">
          <img src={urls} alt="images" />
        </div>
      </Link>
      <div className="products__cards__card-rating">
        <FaStar className="stars" />
        <FaStar className="stars" />
        <FaStar className="stars" />
        <FaStar className="stars" />
        <FaStar className="stars" />
      </div>
      <div className="products__cards__card-title">
        <span style={{ cursor: "pointer" }} onClick={() => handleViewMore(data)}>
          {title}
        </span>
      </div>
      <div className="products__cards__card-shop">
        <p>${price}</p>
        <button className="shop" onClick={handleAdd}>
          <LuShoppingCart className="" />
        </button>
        <button className="heart">
          <CiHeart />
        </button>
      </div>
    </div>
  );
};
