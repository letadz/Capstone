import React from "react";
import Logo from "../../images/logo/MagsLogoWhite.png";
import Iframe from "react-iframe";
import "./Contact.css";

import { BsTelephoneFill, BsFillEnvelopeFill } from "react-icons/bs";
import { MdLocationOn } from "react-icons/md";

const Contact = () => {
  return (
    <div id="contacts" className="contacts">
      <div className="contact-section container">
        <h1 className="contact-title">Contacts</h1>

        <div className="contact-content">
          <div className="contact-left">
            <img className="logo" src={Logo} alt="logo" />
            <div className="contact-info">
              <div className="tel">
                <BsTelephoneFill color="#e8e8e8" className="tel-logo" />
                <div className="tel-number">
                  <span>912-345-6789</span>
                  <span>0123-4567</span>
                </div>
              </div>
              <div className="email">
                <BsFillEnvelopeFill color="#e8e8e8" className="email-logo" />
                <span>magsautorepairshop@hotmail.com</span>
              </div>
              <div className="address">
                <MdLocationOn color="#e8e8e8" className="address-logo" />
                <span>Seaside Blvd, 123, Pasay, 1300 Metro Manila</span>
              </div>
            </div>
          </div>

          <div className="contact-right">
            <Iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3862.0945142534165!2d120.9797922!3d14.5365861!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3397cbfb106ffac5%3A0x344ead3613febe20!2s123%20Seaside%20Blvd%2C%20Pasay%2C%20Metro%20Manila!5e0!3m2!1sen!2sph!4v1663160521120!5m2!1sen!2sph"
              allowfullscreen=""
              loading="lazy"
              className="map"
            ></Iframe>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
