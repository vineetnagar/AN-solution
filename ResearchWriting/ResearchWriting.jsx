import React from "react";
import Style from "./ResearchWriting.module.css";
import { Link } from "react-router-dom";
import caseStudyHeroImg from "../img/caseStudyHeroImg.png";
import caseStudyImg from "../img/caseStudyImg.png";
import webLogo from "../img/web-logo.svg";
import EssayWriting from "../EssayWriting/EssayWriting";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GiClockwork } from "react-icons/gi";

const ResearchWriting = () => {
  return (
    <div className={Style.researchWriting}>
      <div className={Style.researchWriting_hero}>
        <div className={Style.researchWriting_hero_container}>
          <div className={Style.researchWriting_hero_container_left}>
            <img src={webLogo} alt="web-logo" width={300} height={80} />
            <h1>Research Paper</h1>
            <p>Home ~ Services ~ Research Paper Writing</p>
          </div>
          <div className={Style.researchWriting_hero_container_right}>
            <div className={Style.researchWriting_hero_container_right_img}>
              <img src={caseStudyHeroImg} width={400} height={250} />
            </div>
          </div>
        </div>
      </div>

      <div className={Style.researchWriting_container}>
        <div className={Style.researchWriting_container_left_img}>
          <img src={caseStudyImg} width={700} height={200} />
        </div>
        <div className={Style.researchWriting_container_right_box}>
          <div className={Style.researchWriting_container_right_box_data}>
            <Link>Case Study Help</Link>
            <Link to="essayWriting" element={<EssayWriting />}>
              Essay Writing
            </Link>
            <Link>Refective Writing</Link>
            <Link>Resume Writing</Link>
            <Link>Research Writing</Link>
            <Link>Dissertation Writing</Link>
            <Link>Homework Help</Link>
            <Link>STATA</Link>
          </div>
        </div>
      </div>

      <div className={Style.researchWriting_container}>
        <div className={Style.researchWriting_container_left_data}>
          <div className={Style.researchWriting_container_left_data_first}>
            <h3>Research Paper</h3>
            <p>
              Embarking on a research paper can be a time-intensive endeavor,
              diverting your focus from other crucial aspects of your academic
              journey. At AN Solution, we comprehend the challenges you face.
              Our Research Paper Writing Services provide a comprehensive
              solution to save you valuable time and energy. Our experienced
              team is dedicated to navigating the complexities of your research,
              ensuring meticulous attention to detail and adherence to academic
              standards. By entrusting us with your project, you free up time to
              concentrate on your priorities while benefiting from our
              expertise. Explore the convenience of our services, designed to
              make your academic journey more manageable and successful. Visit
              our website today to discover how we can tailor our support to
              your specific needs.
            </p>
          </div>

          <div className={Style.researchWriting_container_left_data_second}>
            <h5>
              Methods Of Writing An Effective Research Paper Writing Services
            </h5>
            <p>
              There are a few basic steps that our experts delivering research
              paper writing service in India take while effectively assisting
              assignments for students. These steps are given down below -
            </p>

            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              Collecting The Data
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              Preparing Your First Draft
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              Structure Of A Research Paper
            </p>
          </div>
        </div>

        <div className={Style.researchWriting_container_right_data}>
          <div className={Style.researchWriting_container_right_data_box}>
            <div
              className={Style.researchWriting_container_right_data_box_icon}
            >
              <GiClockwork />
            </div>
            <h5>Consult with expert &</h5>
            <h5>Start Today</h5>
            <hr />
            <p>+91 9799772967</p>
            <p>+91 9799772967</p>
            <p>Email: an@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResearchWriting;
