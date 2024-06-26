import React from "react";
import Result from "../../components/result/Result";
import "./About.scss";
import hotGirl from "../../assets/images/our-storyGIRL.png";
import MeetFirst from "../../assets/images/meet1.png";
import MeetSecond from "../../assets/images/meet2.png";
import MeetThird from "../../assets/images/meet3.png";
import MeetFourth from "../../assets/images/meet4.png";
import BlogHero from "../../components/blog-hero/BlogHero";

const About = () => {
  return (
    <>
      <div className="container" style={{ marginBottom: "100px" }}>
        <BlogHero/>
      </div>
      <Result />
      <div style={{ marginBottom: "40px" }}></div>
      <section className="our-story">
        <div className="container">
          <div className="our-story__overall">
            <div className="our-story__image">
              <img src={hotGirl} alt="" />
            </div>
            <div className="our-story__text">
              <div className="our-story__heading">Our story</div>
              <p className="our-story__paragraph">
                SEEDRA Spinach Seeds - contains 600 seeds in 2 Packs and
                professional instructions created by PhD Helga George
              </p>
              <p className="our-story__paragraph">
                Be sure of our quality - the freshest batches of this season.
                Non-GMO, Heirloom - our seeds were tested and have the best
                germination ratings. Your easy growing experience is our
                guarantee Spinach commom culinary uses: salads, soups,
                smoothies, lasagne, pizza, pies, risotto, and more
              </p>
              <p className="our-story__paragraph">
                Proudly sourced in the USA - our garden seeds are grown,
                harvested, and packaged in the USA. We support local farmers and
                are happy to produce this American-made product
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="meet-our-team container">
        <h2 class="meet-our-team__title">Meet our team</h2>
        <div className="meet-our-team__overall">
          <div class="meet-our-team__member">
            <img
              class="meet-our-team__member-image"
              src={MeetFirst}
              alt="Leslie Alexander"
            />
            <h3 class="meet-our-team__member-name">Leslie Alexander</h3>
            <p class="meet-our-team__member-role">Nursing Assistant</p>
          </div>

          <div class="meet-our-team__member">
            <img src={MeetSecond} class="meet-our-team__member-image" alt="" />
            <h3 class="meet-our-team__member-name">Robert Fox</h3>
            <p class="meet-our-team__member-role">Dog Trainer</p>
          </div>

          <div class="meet-our-team__member">
            <img src={MeetThird} class="meet-our-team__member-image" alt="" />
            <h3 class="meet-our-team__member-name">Floyd Miles</h3>
            <p class="meet-our-team__member-role">Web Designer</p>
          </div>

          <div class="meet-our-team__member">
            <img
              class="meet-our-team__member-image"
              src={MeetFourth}
              alt="Wade Warren"
            />
            <h3 class="meet-our-team__member-name">Wade Warren</h3>
            <p class="meet-our-team__member-role">Medical Assistant</p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
