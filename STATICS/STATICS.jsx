import React from "react";
import Style from "./STATICS.module.css";
import { Link } from "react-router-dom";
import caseStudyHeroImg from "../img/caseStudyHeroImg.png";
import StatisticsImg from "../img/StatisticsImg.png";
import webLogo from "../img/web-logo.svg";
import EssayWriting from "../EssayWriting/EssayWriting";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GiClockwork } from "react-icons/gi";
import statistics_img from "../img/statistics_img.png";

const STATICS = () => {
  return (
    <div className={Style.statics}>
      <div className={Style.statics_hero}>
        <div className={Style.statics_hero_container}>
          <div className={Style.statics_hero_container_left}>
            <img src={webLogo} alt="web-logo" className={Style.webLogo} />
            <h1>Statistics Assignment</h1>
            <p>Home ~ Services ~ Statistics Assignment</p>
          </div>
          <div className={Style.statics_hero_container_right}>
            <div className={Style.statics_hero_container_right_img}>
              <img src={caseStudyHeroImg} width={400} height={250} />
            </div>
          </div>
        </div>
      </div>

      <div className={Style.statics_container}>
        <div className={Style.statics_container_left_img}>
          <img src={StatisticsImg} className={Style.statics_img} />
        </div>
        <div className={Style.statics_container_right_box}>
          <div className={Style.statics_container_right_box_data}>
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

      <div className={Style.statics_container}>
        <div className={Style.statics_container_left_data}>
          <div className={Style.statics_container_left_data_first}>
            <h3>Statistics Assignment</h3>
            <p>
              Embarking on a statistics assignment can be a formidable journey,
              laden with intricate concepts and intricate analyses. At AN
              Solution, we understand the complexities students face in
              unraveling the intricacies of statistical data. Whether you're
              grappling with probability distributions, regression analysis, or
              hypothesis testing, our seasoned team of statisticians is here to
              provide the expert guidance and support you need. Our mission
              extends beyond merely completing assignments; we aim to fortify
              your understanding of statistical principles, fostering clarity
              and precision in your analyses. From descriptive statistics to
              advanced inferential techniques, we ensure your assignment not
              only meets academic standards but enhances your command of the
              subject.
            </p>
            <div className={Style.statics_container_left_data_img}>
              <img
                src={statistics_img}
                alt="statistics_img"
                className={Style.statics_img2}
              />
            </div>
            <p>
              When you choose AN Solution, you're choosing a partner dedicated
              to simplifying the statistical landscape. We offer a streamlined
              solution to save you time and energy, providing a user-friendly
              platform for effortless assignment submission. Let AN Solution be
              your trusted ally, transforming the challenges of statistical
              assignments into opportunities for academic growth. Visit our
              website today and experience how our commitment to excellence can
              elevate your journey through the intricate world of statistics.
            </p>
          </div>

          <div className={Style.statics_container_left_data_second}>
            <h5>Why Seek Help for Statistics Assignment With AN Solution?</h5>
            <p>
              Seeking help for your statistics assignment with AN Solution is a
              prudent decision rooted in expertise and efficiency. Statistics
              can be a complex field, and our team of seasoned statisticians is
              dedicated to simplifying its intricacies for you. By choosing our
              services, you not only ensure the timely and accurate completion
              of your assignment but also gain valuable insights that enhance
              your understanding of statistical principles.
            </p>
            <p>
              AN Solution values your time, offering a user-friendly platform
              for seamless assignment submission. Our commitment goes beyond
              task completion; we aim to empower you with knowledge,
              transforming your statistics assignment into an opportunity for
              comprehensive learning. Trust AN Solution to navigate the
              complexities of statistics, providing expert assistance that
              aligns with your academic success. Visit our website today and
              experience the difference our dedicated team can make in your
              statistical journey.
            </p>
          </div>
        </div>

        <div className={Style.statics_container_right_data}>
          <div className={Style.statics_container_right_data_box}>
            <div className={Style.statics_container_right_data_box_icon}>
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

export default STATICS;
