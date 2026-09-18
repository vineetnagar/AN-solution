import React, { useState, useEffect } from "react";
import Style from "./ContactUs.module.css";
import { IoLocationOutline } from "react-icons/io5";
import webLogo from "../img/web-logo.svg";
import ProjectForm from "../ProjectForm/ProjectForm";
import { GiClockwork } from "react-icons/gi";
import { FaMailBulk } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className={Style.contactUs}>
      <div className={Style.contactUs_hero}>
        <div className={Style.contactUs_hero_container}>
          <img src={webLogo} alt="web-logo" width={300} height={80} />
          <h1>Contact Us</h1>
          <p>Consult with expert & Start today</p>
        </div>
      </div>
      <div className={Style.contactUs_container}>
        <div className={Style.contactUs_container_left}>
          <div className={Style.contactUs_container_left_heading}>
            <h4>------CONTACT INFO</h4>
          </div>
          <div className={Style.contactUs_container_left_container}>
            <div className={Style.contactUs_container_left_container_col}>
              <IoLocationOutline />
              <div
                className={Style.contactUs_container_left_container_col_data}
              >
                <p>25-B R.K Puram Kota</p>
                <p>324005, Rajasthan, INDIA</p>
              </div>
            </div>
            <hr />
            <div className={Style.contactUs_container_left_container_col}>
              <GiClockwork />
              <div
                className={Style.contactUs_container_left_container_col_data}
              >
                <p>+91 9799772967</p>
                <p>+91 9799772967</p>
              </div>
            </div>
            <hr />
            <div className={Style.contactUs_container_left_container_col}>
              <FaMailBulk />
              <div
                className={Style.contactUs_container_left_container_col_data}
              >
                <p>abc@gmail.com</p>
              </div>
            </div>
          </div>
        </div>

        <div className={Style.ContactUs_form}>
          <ProjectForm />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
