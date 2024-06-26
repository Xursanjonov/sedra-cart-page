import React from "react";
import BlogHero from "../../components/blog-hero/BlogHero";
import { BLOG_DATA } from "../../static/data";
import { Link } from "react-router-dom";

import "./blog.scss";

const Blog = () => {
  let cards = BLOG_DATA?.map((card) => (
    <div key={card.id} className="blog__card">
      <div className="blog__card__left">
        <h3 className="blog__card__title">{card.title}</h3>
        {card.desc ? <p className="blog_card__desc">{card.desc}</p> : <></>}
        <div>
          <Link to={"/how-to"} className="blog__card__btn">
            {card.read}
          </Link>
        </div>
      </div>
      <div className="blog__card__img">
        <img src={card.img} alt={card.title} />
      </div>
    </div>
  ));

  return (
    <section className="blog">
      <div className="container">
        <BlogHero />
        <div className="blog__cards">{cards}</div>
      </div>
    </section>
  );
};

export default Blog;
