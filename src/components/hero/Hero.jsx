import React, { memo } from "react";
// images
import heroTopImage from "../../assets/images/hero-top-image.png";
import bgHeroImg1 from "../../assets/images/mini-hero-right.svg";
import bgHeroImg2 from "../../assets/images/mini-hero-left.svg";
import olov from "../../assets/images/olov.png";
// style
import './hero.scss'
import { useNavigate } from 'react-router'

const Hero = () => {
  const navigate = useNavigate()

  return (
    <section className="hero container">
      <div className="hero-top">
        <div className="hero-top-left">
          <h1 className="hero-top-left__title">
            SEEDRA Basil Seeds for Indoor and Outdoor Planting
          </h1>
          <p className="hero-top-left__text">
            Be sure of our quality - the freshest batches of this season.
            Non-GMO, Heirloom - our seeds were tested and have the best
            germination ratings. Your easy growing experience is our guarantee
          </p>
          <div className="hero-top-left__prices">
            <img src={olov} alt="" />
            <p className="hero-top-left__prices-new">$12.56</p>
            <p className="hero-top-left__prices-old">$15.56</p>
          </div>
          <div className='hero-top-left__btns'>
            <button className='hero-top-left__btns-add'>Add to cart</button>
            <button className='hero-top-left__btns-discover'>Discover</button>
          </div>
        </div>
        <figure className="hero-top-right">
          <img src={heroTopImage} alt="" />
        </figure>
      </div>
      <div className="hero-bottom">
        <img src={bgHeroImg2} className="bg-img1" />
        <ul className="hero-bottom-ul">
          <li className="hero-bottom__title">We sell seeds</li>
          <li className="hero-bottom__text">
            that always sprout and gardening supplies which never break
          </li>
        </ul>
        <img src={bgHeroImg1} className="bg-img1" />
      </div>
    </section>
  );
};

export default memo(Hero);
