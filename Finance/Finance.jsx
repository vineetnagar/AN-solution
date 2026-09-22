import React from "./Finance.module.css";
import Style from "./Finance.module.css";
import { Link } from "react-router-dom";
import caseStudyHeroImg from "../img/caseStudyHeroImg.png";
import FinanceImg from "../img/FinanceImg.png";
import webLogo from "../img/web-logo.svg";
import EssayWriting from "../EssayWriting/EssayWriting";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GiClockwork } from "react-icons/gi";

const Finance = () => {
  return (
    <div className={Style.finance}>
      <div className={Style.finance_hero}>
        <div className={Style.finance_hero_container}>
          <div className={Style.finance_hero_container_left}>
            <img src={webLogo} alt="web-logo" className={Style.webLogo} />
            <h1>Finance Assignment</h1>
            <p>Home ~ Services ~ Finance Assignment</p>
          </div>
          <div className={Style.finance_hero_container_right}>
            <div className={Style.finance_hero_container_right_img}>
              <img src={caseStudyHeroImg} width={400} height={250} />
            </div>
          </div>
        </div>
      </div>

      <div className={Style.finance_container}>
        <div className={Style.finance_container_left_img}>
          <img src={FinanceImg} className={Style.finance_img} />
        </div>
        <div className={Style.finance_container_right_box}>
          <div className={Style.finance_container_right_box_data}>
            <Link to="/nursing">Nursing</Link>
            <Link to="/management">Management</Link>
            <Link to="/law">Law</Link>
            <Link to="/economics">Economics</Link>
            <Link to="/statics">Statics</Link>
            <Link to="/finance">Finance</Link>
            <Link to="/marketing">Marketing</Link>
          </div>
        </div>
      </div>

      <div className={Style.finance_container}>
        <div className={Style.finance_container_left_data}>
          <div className={Style.finance_container_left_data_first}>
            <h3>Finance Assignment</h3>
            <p>
              Navigating the intricacies of finance assignments can be a
              daunting task for students. Understanding the complexities of
              financial theories, analyzing market trends, and interpreting
              numerical data require a deep level of expertise. At AN Solution,
              we recognize the challenges students face in the realm of finance
              studies. Our dedicated team of finance professionals is here to
              offer comprehensive support, ensuring that your finance
              assignments are not just completed but excel in quality.
            </p>
            <p>
              Whether you're grappling with financial modeling, investment
              analysis, or risk management, our experts are equipped to provide
              tailored solutions. We combine theoretical knowledge with
              practical application, offering a holistic approach to your
              finance assignments. With a commitment to accuracy, attention to
              detail, and adherence to academic standards, AN Solution stands as
              a reliable partner in your academic journey.
            </p>
            <p>
              By choosing our services, you gain access to a wealth of financial
              expertise that goes beyond textbook solutions. Our goal is not
              just to help you complete assignments but to enhance your
              understanding of financial concepts. Visit our website to explore
              how we can make your finance studies more manageable, providing
              you with the support you need to succeed in this dynamic and
              challenging field. Your academic success is our priority, and at
              AN Solution, we are here to elevate your finance assignments to
              new heights.
            </p>
          </div>

          <div className={Style.finance_container_left_data_second}>
            <h5>Quality Finance Assignment Services</h5>
            <p>At AN Solution we offer the premier most services such as:</p>

            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              We provide highly-qualified experts who are very reliable;
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              Our experts are Indians graduated from Australian Universities;
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              Our finance assignment writing experts offer customized assignment
              solutions as per the student requirements;
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              AN Solution is your one-stop source for excellent academic help
              and learning experience;
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              We ensure timely delivery of 100% unique and error-free
              assignments at the most affordable price;
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              24/7 online support on all subjects in English and Hindi
              languages;
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              You can be rest assured to achieve nothing less than high
              distinction with the best quality academic solutions;
            </p>
          </div>
        </div>

        <div className={Style.finance_container_right_data}>
          <div className={Style.finance_container_right_data_box}>
            <div className={Style.finance_container_right_data_box_icon}>
              <GiClockwork />
            </div>
            <h5>Consult with expert &</h5>
            <h5>Start Today</h5>
            <hr />
            <p>+91 6377592124</p>
            <p>Email: anirudhnagar24@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Finance;
