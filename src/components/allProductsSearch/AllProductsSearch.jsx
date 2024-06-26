import React from "react";
import { IoSearchOutline } from "react-icons/io5";
import "./AllProductsSearch.scss";

const AllProductsSearch = ({ setSearchValue, searchValue }) => {
  return (
    <div className="searching container">
      <form action="">
        <button>
          <IoSearchOutline />
        </button>
        <input
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
          type="text"
          placeholder="Search"
        />
      </form>
      <select name="" id="">
        <option value="">Most expensive</option>
        <option value="">Most popular</option>
        <option value="">Most cheapest</option>
      </select>
    </div>
  );
};

export default AllProductsSearch;
