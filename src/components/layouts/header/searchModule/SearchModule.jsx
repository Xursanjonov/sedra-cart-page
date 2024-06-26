import React from "react";
import { Link } from "react-router-dom";

const SearchModule = ({ data, showList, handleCloser }) => {
  let product = data?.data?.products;
  return (
    <div
      className={
        showList ? "shorter__header__search-module" : "header__search-module"
      }
    >
      {product.length ? (
        product?.map((el) => (
          <Link
            onClick={handleCloser}
            to={`/products/${el.id}`}
            key={el.id}
            className="header__search-module__card"
          >
            <img src={el.urls[0]} alt="img" />
            <p>{el.title}</p>
          </Link>
        ))
      ) : (
        <h2>Nothing Founded</h2>
      )}
    </div>
  );
};

export default SearchModule;
