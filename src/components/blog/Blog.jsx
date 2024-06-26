import React from "react";
import { IoTime } from "react-icons/io5";
import { Link } from "react-router-dom";

import "./homeBlog.scss";

const HomeBlog = () => {
  // BLOG DATA MAP
  // const blogData = BLOG_DATA?.map((info) => (
  //   <div key={info.id} className="blog__card">
  //     <span className="blog__card__time">
  //       <IoTime className="blog__card__time-icon" />
  //       {info.time}
  //     </span>

  //     <h3 className="blog__card__title">{info.title}</h3>
  //     <p className="blog__card__text">{info.desc}</p>
  //     <button className="blog__card__btn">Read</button>
  //   </div>
  // ));

  return (
    <div className="homeBlog">
      <div className="container">
        <div className="homeBlog__top">
          <h2 className="homeBlog__title">Our homeBlog.</h2>
          <button className="homeBlog__btn">Go to our homeBlog</button>
        </div>
        <div className="homeBlog__cards">
          <div className="homeBlog__cards__left">
            <div className="homeBlog__cards__top">
              <div className="homeBlog__card">
                <span className="homeBlog__card__time">
                  <IoTime className="homeBlog__card__time-icon" />
                  12.09.2021
                </span>

                <h3 className="homeBlog__card__title">
                  How to plant spinach correctly in winter
                </h3>
                <p className="homeBlog__card__text">
                  In most areas, successive sowing can be done from early spring
                  until early winter, but more often during hotter months...
                </p>
                <Link to={"how-to"} className="blog__card__btn">
                  Read
                </Link>
              </div>
            </div>
            <div className="homeBlog__cards__bottom">
              <div className="homeBlog__card homeBlog__cards-bottom">
                <span className="homeBlog__card__time">
                  <IoTime className="homeBlog__card__time-icon" />
                  12.09.2021
                </span>

                <h3 className="homeBlog__card__title">
                  How to plant spinach correctly in winter
                </h3>
                <Link to={"how-to"} className="blog__card__btn">
                  Read
                </Link>
              </div>
              <div className="homeBlog__card homeBlog__cards-bottom">
                <span className="homeBlog__card__time">
                  <IoTime className="homeBlog__card__time-icon" />
                  12.09.2021
                </span>

                <h3 className="homeBlog__card__title">
                  How to plant spinach correctly in winter
                </h3>
                <Link to={"how-to"} className="blog__card__btn">
                  Read
                </Link>
              </div>
            </div>
          </div>
          <div className="homeBlog__cards__right">
            <div className="homeBlog__card">
              <span className="homeBlog__card__time">
                <IoTime className="homeBlog__card__time-icon" />
                12.09.2021
              </span>

              <h3 className="homeBlog__card__title">
                How to plant spinach correctly in winter
              </h3>
              <p className="homeBlog__card__text">
                In most areas, successive sowing can be done from early spring
                until early winter, but more often during hotter months...
              </p>
              <Link to={"how-to"} className="blog__card__btn">
                Read
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
