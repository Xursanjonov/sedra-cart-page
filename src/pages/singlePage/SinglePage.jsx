import React, { useState } from "react";
import {
  useGetAllProductsQuery,
  useGetSingleProductQuery,
} from "../../context/productsSlice";
import { useLocation, useParams } from "react-router-dom";
import "./singlePage.scss";
import like from "../../assets/icons/like.svg";
import carla from "../../assets/images/carla.svg";
import tuvak from "../../assets/images/tuvak.svg";
import star from "../../assets/icons/star.svg";
import star1 from "../../assets/icons/star1.svg";
import star2 from "../../assets/icons/star2.svg";
import star3 from "../../assets/icons/star3.svg";
import star4 from "../../assets/icons/star4.svg";
import star5 from "../../assets/icons/star5.svg";
import trueImg from "../../assets/icons/true.svg";
import Products from "../../components/products/Products";

const SinglePage = () => {
  const { productId } = useParams();
  let [imageOrder, setImageOrder] = useState(0);
  const [pack, setPack] = useState(0);
  const [page, setPage] = useState(+sessionStorage.getItem("pageCount") || 1);
  const [perPageCount, setPerPageCount] = useState(
    +localStorage.getItem("selectPageCount") || 8
  );

  let { data:allData, isLoading } = useGetAllProductsQuery({
    search: '',
    limit: perPageCount,
    page,
  });

  // console.log(pack);

  const { data } = useGetSingleProductQuery(productId);
  let singleProduct = data?.data;

  const renderImages = () => {
    if (
      !singleProduct ||
      !singleProduct?.urls ||
      singleProduct?.urls.length === 0
    ) {
      return null;
    }
    return singleProduct.urls.map((image, index) => (
      <div className="single__img" key={index}>
        <img
          className={`${imageOrder === index ? "active__img" : ""}`}
          onClick={() => setImageOrder(index)}
          src={image}
          alt=""
        />
      </div>
    ));
  };

  const singleImages =
    singleProduct && singleProduct.urls ? renderImages() : null;
  return (
    <section className="single__page container">
      <div className="single__card">
        <div className="single__card__left">
          <div className="single__card__left__main-img">
            <img
              src={
                singleProduct?.urls.length > 0
                  ? singleProduct.urls[imageOrder]
                  : "https://www.shutterstock.com/image-vector/default-ui-image-placeholder-wireframes-600nw-1037719192.jpg"
              }
              alt={singleProduct?.title}
            />
          </div>
          <div className="single__card__left__mini-images">{singleImages}</div>
        </div>
        <div className="single__card__right">
          <div className="single__card__right__info">
            <h3>{singleProduct?.description}</h3>
            <p>{singleProduct?.title}</p>
            <ul>
              {singleProduct?.info?.map((info) => (
                <li key={info}>{info}</li>
              ))}
            </ul>
          </div>
          <div className="single__card__right__cards">
            <div className="single__card__right__cards__card">
              <div
                onClick={() => setPack(1)}
                className="single__card__right__cards__card__left"
              >
                <input
                  value={1}
                  onChange={(e) => setPack(e.target.value)}
                  name="pack"
                  type="radio"
                />
                <h3>1 pack</h3>
              </div>
              <div className="single__card__right__cards__card__right">
                <p>start from</p>
                <h3>$1.56</h3>
              </div>
            </div>
            <div className="single__card__right__cards__card">
              <div
                onClick={() => setPack(2)}
                className="single__card__right__cards__card__left"
              >
                <input
                  value={2}
                  onChange={(e) => setPack(e.target.value)}
                  name="pack"
                  type="radio"
                />
                <h3>2 pack</h3>
              </div>
              <div className="single__card__right__cards__card__right">
                <p>start from</p>
                <h3>$1.56</h3>
              </div>
            </div>
            <div className="single__card__right__cards__card">
              <div
                onClick={() => setPack(3)}
                className="single__card__right__cards__card__left"
              >
                <input
                  value={3}
                  onChange={(e) => setPack(e.target.value)}
                  name="pack"
                  type="radio"
                />
                <h3>3 pack</h3>
              </div>
              <div className="single__card__right__cards__card__right">
                <p>start from</p>
                <h3>$1.56</h3>
              </div>
            </div>
            <div className="single__card__right__cards__card">
              <div
                onClick={() => setPack(4)}
                className="single__card__right__cards__card__left"
              >
                <input
                  value={4}
                  onChange={(e) => setPack(e.target.value)}
                  name="pack"
                  type="radio"
                />
                <h3>4 pack</h3>
              </div>
              <div className="single__card__right__cards__card__right">
                <p>start from</p>
                <h3>$1.56</h3>
              </div>
            </div>
          </div>
          <div className="single__card__right__btns">
            <div className="single__card__right__btns__prices">
              <p>${singleProduct?.oldPrice}</p>
              <h3>${singleProduct?.price}</h3>
            </div>
            <div className="single__card__right__btns__btns">
              <img src={like} alt="" />
              <button>Add to cart</button>
            </div>
          </div>
        </div>
      </div>
      <div className="single__information">
        <h1>Product information.</h1>
        <hr />
        <div className="single__information__body">
          <div className="single__information__left">
            <ul>
              <li>
                EEDRA Cilantro Seeds - contains 300 seeds in 1 Pack and
                professional instructions created by PhD Helga George Be sure of
                our quality - the freshest batches of this season.
              </li>
              <li>
                Be sure of our quality - the freshest batches of this season.
                Non-GMO, Heirloom - our seeds were tested and have the best
                germination ratings.
              </li>
              <li>
                Your easy growing experience is our guarantee Cilantro common
                culinary uses: salsa, guacamole, pesto, salads, chutney, baked
                breads, pad thai, pico de gallo, rice, grilled shrimp skewers,
                falafel, and more
              </li>
              <li>
                Proudly sourced in the USA - our garden seeds are grown,
                harvested, and packaged in the USA.
              </li>
              <li>
                We support local farmers and are happy to produce this
                American-made product SEEDRA customer service - please contact
                us directly through
              </li>
              <li>
                Amazon with any questions or concerns about our products. We
                care about each customer and do our best to provide you with
                100% satisfaction
              </li>
            </ul>
          </div>
          <div className="single__information__right">
            <div className="single__information__right__cards">
              <div className="single__information__right__cards__card">
                <p>Package Dimensions</p>
                <h3>5.51 x 3.5 x 0.35 inches</h3>
              </div>
              <div className="single__information__right__cards__card">
                <p>Item Weight</p>
                <h3>0.317 ounces</h3>
              </div>
              <div className="single__information__right__cards__card">
                <p>ASIN</p>
                <h3>B08Z3HN5MP</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="single__questions">
        <h1>Frequently asked questions.</h1>
        <div className="single__questions__body">
          <div className="single__questions__body__left">
            <div className="single__questions__body__left__card">
              <h3>
                For seller: are these seeds organic? it does matter if they are
                organic, seeds can hold pesticides from the plant they grow
                from.
              </h3>
              <h2>+</h2>
            </div>
            <div className="single__questions__body__left__card">
              <h3>Can they be grown on hydroponic systems</h3>
              <h2>-</h2>
            </div>
            <div className="single__questions__body__left__card">
              <p>
                I have heat mats and artificial light. I planted them in all{" "}
                <br />
                purpose potting soil. Moist not wet. Placed them on a heat mat.{" "}
                <br />
                If not available, somewhere where it's 72 degrees. Add natural{" "}
                <br />
                light, but I used artificial light. Takes 10- 15 days because of{" "}
                <br />
                there hard shell on the seed.
              </p>
            </div>
            <div className="single__questions__body__left__card">
              <h3>
                They did not germinate even when i followed directions. What
                should i do?
              </h3>
              <h2>+</h2>
            </div>
          </div>
          <div className="single__questions__body__right">
            <h2>Didn’t find answer?</h2>
            <p>Ask your own!</p>
            <textarea name="ask" placeholder="Type here" id=""></textarea>
            <button>Send</button>
          </div>
        </div>
      </div>
      <div className="single__reviews">
        <h1>Customer reviews.</h1>
        <div className="single__reviews__cards">
          <div className="single__reviews__cards__first-card">
            <div className="single__reviews__cards__first-card__header">
              <h1>4,1</h1>
              <div className="rating">
                <p>124 reviews</p>
                <div className="rating__stars">
                  <img src={star} alt="" />
                </div>
              </div>
            </div>
            <hr />
            <div className="single__reviews__cards__first-card__body">
              <img src={star5} alt="" />
              <img src={star4} alt="" />
              <img src={star3} alt="" />
              <img src={star2} alt="" />
              <img src={star1} alt="" />
            </div>
          </div>
          <div className="single__reviews__cards__second-card">
            <div className="single__reviews__cards__second-card__header">
              <div>
                <img src={carla} alt="" />
                <span>
                  <h3>Carla Samantoes-Diego</h3>
                  <p>Reviewed in the United States on June 18, 2021</p>
                </span>
              </div>
              <img src={star} alt="" />
            </div>
            <div className="single__reviews__cards__second-card__body">
              <p>
                SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
                professional instructions <br /> created by PhD Helga George
                <br /> Be sure of our quality - the freshest batches of this
                season. Non-GMO, Heirloom - our <br /> seeds were tested and
                have the best germination ratings.
              </p>
            </div>
            <hr />
            <div className="single__reviews__cards__second-card__footer">
              <div>
                <p>size</p> <h3>{pack} PACK</h3>
              </div>
              <span>
                <img src={trueImg} alt="" />
                <h3>VERIFIED</h3>
              </span>
            </div>
          </div>
          <div className="single__reviews__cards__third-card">
            <div className="single__reviews__cards__third-card__header">
              <div>
                <p>124 reviews</p>
                <h3>Photo&Video review</h3>
              </div>
              <h2>View</h2>
            </div>
            <div className="single__reviews__cards__third-card__body">
              <img src={tuvak} alt="" />
              <img src={tuvak} alt="" />
              <img src={tuvak} alt="" />
              <img src={tuvak} alt="" />
            </div>
          </div>
          <div className="single__reviews__cards__second-card">
            <div className="single__reviews__cards__second-card__header">
              <div>
                <img src={carla} alt="" />
                <span>
                  <h3>Carla Samantoes-Diego</h3>
                  <p>Reviewed in the United States on June 18, 2021</p>
                </span>
              </div>
              <img src={star} alt="" />
            </div>
            <div className="single__reviews__cards__second-card__body">
              <p>
                SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
                professional instructions <br /> created by PhD Helga George{" "}
                <br />
                <div className="images">
                  <img src={tuvak} alt="" />
                  <img src={tuvak} alt="" />
                </div>
              </p>
            </div>
            <hr />
            <div className="single__reviews__cards__second-card__footer">
              <div>
                <p>size</p> <h3>{pack} PACK</h3>
              </div>
              <span>
                <img src={trueImg} alt="" />
                <h3>VERIFIED</h3>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="single__products">
        <h1>Related products.</h1>
        <Products
          setPage={setPage}
          page={page}
          perPageCount={perPageCount}
          setPerPageCount={setPerPageCount}
          isLoading={isLoading}
          data={allData}
        />
      </div>
    </section>
  );
};

export default SinglePage;
