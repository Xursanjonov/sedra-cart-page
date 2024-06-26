import React, { useState } from "react";
import Products from "../../components/products/Products";
import AllProductsSearch from "../../components/allProductsSearch/AllProductsSearch";
import { useGetAllProductsQuery } from "../../context/productsSlice";

const AllProducts = () => {
  const [subtitle, setSubTitle] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [page, setPage] = useState(+sessionStorage.getItem("pageCount") || 1);
  const [perPageCount, setPerPageCount] = useState(
    +localStorage.getItem("selectPageCount") || 8
  );

  let { data, isLoading } = useGetAllProductsQuery({
    search: searchValue,
    limit: perPageCount,
    page,
  });

  return (
    <div className="allproducts">
      <AllProductsSearch
        searchValue={searchValue}
        setSearchValue={setSearchValue}
        subtitle={subtitle}
      />
      <Products
        setPage={setPage}
        page={page}
        perPageCount={perPageCount}
        setPerPageCount={setPerPageCount}
        isLoading={isLoading}
        data={data}
      />
    </div>
  );
};

export default AllProducts;
