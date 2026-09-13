import React from "react";
import Style from "./Footer.module.css";
import { GrBook } from "react-icons/gr";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import logoImg from "../../img/logoImg.jpg";
import { IoIosAdd } from "react-icons/io";
import { RiSubtractFill } from "react-icons/ri";
import { GiGlobe } from "react-icons/gi";
import { GiClockwork } from "react-icons/gi";
import { FaMailBulk } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={Style.Footer}>
      <div className={Style.Footer_container1}>
        <div className={Style.Footer_container_logo}>
          <img
            src={logoImg}
            height={50}
            width={50}
            className={Style.Footer_container_logo_img}
          />
        </div>
        <div className={Style.Footer_container1_row1}>
          <h4>Services</h4>
          <ul>
            <li>
              <IoIosAdd /> Case Study
            </li>
            <li>
              <IoIosAdd /> Essay Writing
            </li>
            <li>
              <IoIosAdd /> Reflective Writing
            </li>
          </ul>
        </div>

        <div className={Style.verticalLine}></div>

        <div className={Style.Footer_container1_row2}>
          <h4>Samples</h4>
          <div className={Style.Footer_container1_row_list}>
            <ul>
              <li>
                <IoIosAdd /> Resume Writing
              </li>
              <li>
                <IoIosAdd /> Research Writing
              </li>
              <li>
                <IoIosAdd /> Dissertation Writing
              </li>
              <li>
                <IoIosAdd /> Homework Help
              </li>
              <li>
                <IoIosAdd /> STATA
              </li>
            </ul>
            <ul>
              <li>
                <IoIosAdd /> Nursing
              </li>
              <li>
                <IoIosAdd /> Management
              </li>
              <li>
                <IoIosAdd /> Law
              </li>
              <li>
                <IoIosAdd /> Economics
              </li>
              <li>
                <IoIosAdd /> Science
              </li>
            </ul>
          </div>
        </div>

        <div className={Style.verticalLine}></div>

        <div className={Style.Footer_container1_row3}>
          <h4>Usefull links</h4>
          <div className={Style.Footer_container1_row_list}>
            <ul>
              <li>
                <IoIosAdd /> Engineering
              </li>
              <li>
                <IoIosAdd /> Statics
              </li>
              <li>
                <IoIosAdd /> Finance
              </li>
              <li>
                <IoIosAdd /> Marketing
              </li>
            </ul>
            <ul>
              <li>
                <IoIosAdd /> About Us
              </li>
              <li>
                <IoIosAdd /> Contact Us
              </li>
              <li>
                <IoIosAdd /> Terms & Conditions
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className={Style.Footer_container2}>
        <div className={Style.Footer_container2_row}>
          <div className={Style.Footer_container_row_icon}>
            <GiGlobe />
          </div>
          <div className={Style.Footer_container_row1_info}>
            <ul>
              <li>Base at and Main office</li>
              <li>25-B R.K Puram Kota Rajasthan</li>
              <li>324005</li>
            </ul>
          </div>
        </div>
        <div className={Style.verticalLine2}></div>
        <div className={Style.Footer_container2_row}>
          <div className={Style.Footer_container_row_icon}>
            <GiClockwork />
          </div>
          <div className={Style.Footer_container_row2_info}>
            <ul>
              <li> +919799772967 || +919799772967</li>
              <li>Mon = Sat 9:00 am to 6:00 pm</li>
            </ul>
          </div>
        </div>
        <div className={Style.verticalLine2}></div>

        <div className={Style.Footer_container2_row}>
          <div className={Style.Footer_container_row_icon}>
            <FaMailBulk />
          </div>
          <ul>
            <li>abc@gmail.com</li>
          </ul>
        </div>
      </div>
      <hr />
      <div className={Style.Footer_container3}>
        <div className={Style.Footer_container_left}>
          <GrBook />
          <VscWorkspaceTrusted />
          <span>
            <p>2025 Company, Inc</p>
          </span>
        </div>

        <div className={Style.Footer_container_right}>
          <div className={Style.Footer_container_right_social}>
            <a href="">
              <FaInstagram />
            </a>
            <a href="">
              <FaFacebook />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
