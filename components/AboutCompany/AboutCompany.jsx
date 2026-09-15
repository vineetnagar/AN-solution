import React from "react";
import Style from "./AboutCompany.module.css";
import Button from "../Button/Button";
import { GoArrowRight } from "react-icons/go";
import officeImage from "../../img/office-image.jpg";

const AboutCompany = () => {
  return (
    <div className={Style.aboutCompany}>
      <div className={Style.aboutCompany_data}>
        <div className={Style.aboutCompany_data_left}>
          <div className={Style.aboutCompany_data_left_headings}>
            <p>ABOUT COMPANY</p>
            <h2>WHO WE ARE?</h2>
            <hr />
          </div>
          <div className={Style.aboutCompany_data_left_info}>
            <p>
              AN Solution (ANS) is more than a service; we are your academic
              support system, dedicated to enhancing your learning experience
              and facilitating your success. Our team consists of seasoned
              professionals who have graduated from prestigious universities,
              bringing a wealth of knowledge and expertise to address your
              academic challenges.
            </p>
            <p>
              At ANS, we understand the complexities and pressures of academic
              life. Juggling multiple responsibilities and navigating intricate
              coursework can be overwhelming. That's where we come in — to
              provide not just assignments but a reliable partnership that
              empowers you to excel in your studies.
            </p>
            <p>
              Our commitment to you encompasses three pillars: affordability,
              promptness, and personalized assistance. We strive to make our
              services accessible to students with diverse budgets, ensuring
              that you receive high-quality solutions delivered in a timely
              manner. Every assignment is crafted with a keen understanding of
              your unique requirements, making the learning process more
              enriching and tailored to your academic journey.
            </p>
            <p>
              Joining ANS means embracing a collaborative approach to academic
              success. Our support extends beyond the completion of assignments;
              we aim to guide and empower you throughout your educational
              voyage. Whether you're grappling with complex subjects or seeking
              assistance in mastering challenging topics, ANS is here to be your
              ally in achieving academic excellence.
            </p>
          </div>
          <div className={Style.aboutCompany_data_left_founders}>
            <div className={Style.aboutCompany_data_left_founders_1}>
              <h5>Mr. Anirudh Nagar</h5>
              <p>Director & Founder</p>
            </div>
          </div>
          <div className={Style.aboutCompany_data_left_button}>
            <Button btnName="More About Us" icon={<GoArrowRight />} />
          </div>
        </div>

        <div className={Style.aboutCompany_data_right}>
          <div className={Style.aboutCompany_data_right_img}>
            <img src={officeImage} height={600} width={500} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCompany;
