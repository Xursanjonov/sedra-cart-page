import React, { useState } from "react";
import Hero from "../../components/hero/Hero";
import Products from "../../components/products/Products";
import Blog from "../../components/blog/Blog";
import Clients from "../../components/clients/Clients";
import Result from "../../components/result/Result";
import HomeBlog from "../../components/blog/Blog";
import { useGetAllProductsQuery } from "../../context/productsSlice";

const Home = () => {
  const [subtitle, setSubTitle] = useState(true);
  const [page, setPage] = useState(+sessionStorage.getItem("pageCount") || 1);
  const [perPageCount, setPerPageCount] = useState(
    +localStorage.getItem("selectPageCount") || 8
  );

  let { data, isLoading } = useGetAllProductsQuery({
    search: '',
    limit: perPageCount,
    page,
  });

  return (
    <section>
      <Hero />
      <Products
        setPage={setPage}
        page={page}
        perPageCount={perPageCount}
        setPerPageCount={setPerPageCount}
        isLoading={isLoading}
        data={data}
      />
      <HomeBlog />
      <Clients />
      <Result />
    </section>
  );
};

export default Home;
