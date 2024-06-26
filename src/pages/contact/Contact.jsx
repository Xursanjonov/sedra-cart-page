import React from "react";
import "./ContactSection.scss";
import { FaPhoneAlt, FaEnvelope } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div style={{marginTop:"80px",padding:"50px"}} className="contact-section container">
      <div className="contact-info">
        <h2 className="contact-info__title">Contact us</h2>
        <p className="contact-info__description">
          Send for us your request and we will get in touch with you as soon as
          possible
        </p>
        <div className="contact-info__details">
          <div className="contact-info__item">
            <div className="contact-info__icon">
              <FaPhoneAlt />
            </div>
            +380 98 782 82 23
          </div>
          <div className="contact-info__item">
            <div className="contact-info__icon">
              <FaEnvelope />
            </div>
            mailmail@gmail.com
          </div>
        </div>
      </div>

      <div className="contact-form">
        <div className="contact-form__group">
          <label className="contact-form__label" htmlFor="name">
            Name
          </label>
          <input
            className="contact-form__input"
            type="text"
            id="name"
            name="name"
            placeholder="Your name"
          />
        </div>
        <div className="contact-form__group">
          <label className="contact-form__label" htmlFor="email">
            E-mail
          </label>
          <input
            className="contact-form__input"
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
          />
        </div>
        <div className="contact-form__group">
          <label className="contact-form__label" htmlFor="message">
            Message
          </label>
          <textarea
            className="contact-form__textarea"
            id="message"
            name="message"
            placeholder="Your message"
          ></textarea>
        </div>
        <div className="contact-form__bottom">
          <button className="contact-form__button" type="submit">
            Send request
          </button>
          <p className="contact-form__privacy">
            By sending request you agree to our <a href="#">Privacy&Policy</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
