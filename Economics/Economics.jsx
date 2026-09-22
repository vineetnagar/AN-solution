import React from "react";
import Style from "./Economics.module.css";
import { Link } from "react-router-dom";
import caseStudyHeroImg from "../img/caseStudyHeroImg.png";
import EconomicsImg from "../img/EconomicsImg.png";
import webLogo from "../img/web-logo.svg";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GiClockwork } from "react-icons/gi";

const Economics = () => {
  return (
    <div className={Style.economics}>
      <div className={Style.economics_hero}>
        <div className={Style.economics_hero_container}>
          <div className={Style.economics_hero_container_left}>
            <img src={webLogo} alt="web-logo" className={Style.webLogo} />
            <h1>Economics Assignment</h1>
            <p>Home ~ Services ~ Economics Assignment</p>
          </div>
          <div className={Style.economics_hero_container_right}>
            <div className={Style.economics_hero_container_right_img}>
              <img src={caseStudyHeroImg} width={400} height={250} />
            </div>
          </div>
        </div>
      </div>
      <div className={Style.economics_container}>
        <div className={Style.economics_container_left_img}>
          <img src={EconomicsImg} className={Style.economics_img} />
        </div>
        <div className={Style.economics_container_right_box}>
          <div className={Style.economics_container_right_box_data}>
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
      <div className={Style.economics_container}>
        <div className={Style.economics_container_left_data}>
          <div className={Style.economics_container_left_data_first}>
            <h3>Economics Assignment</h3>
            <p>
              Students no longer need to worry about assignment grades, because
              we at AN Solution understand the challenges you face in managing
              your academic workload. We specialize in providing top-notch
              economics assignment services tailored to meet your unique needs.
              Our team of experienced professionals is dedicated to ensuring
              that you not only receive high-quality assignments but also gain a
              deeper understanding of economic concepts.
            </p>
            <p>
              At AN Solution, we recognize the value of your time. Our
              streamlined process ensures that you can submit your assignment
              requirements effortlessly. Once you entrust us with your economics
              assignment, our experts take the reins, conducting thorough
              research, analysis, and crafting a well-structured document that
              adheres to academic standards. This approach allows you to reclaim
              precious study time, focusing on mastering the subject matter
              without the added stress of looming assignment deadlines.
            </p>
            <p>
              Our commitment to excellence extends beyond delivering a completed
              assignment. We prioritize open communication, providing you with
              updates on the progress and allowing for any necessary revisions.
              This collaborative process not only guarantees satisfaction with
              the final product but also enhances your understanding of the
              material covered in the assignment.
            </p>
            <p>
              With AN Solution, your economics assignments become an opportunity
              for learning and growth rather than a source of stress. Visit our
              website today and experience how our services can save you time,
              elevate your academic performance, and provide a stress-free
              environment for your studies. Let us be your partner in achieving
              success in your economics coursework.
            </p>
          </div>

          <div className={Style.economics_container_left_data_second}>
            <h5>High-Distinction Economics Assignment</h5>
            <p>
              At AN Solution, we prioritize student satisfaction by delivering
              high-distinction economics assignments. Our expert writers ensure
              excellence, allowing you to focus on mastering the subject without
              the stress of assignment deadlines.
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.economics_verified_icon}
              />
              Assignments prepared by India Assignment Help are high in
              expression and presentation of ideas.
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.economics_verified_icon}
              />
              We follow a fluent style of writing.
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.economics_verified_icon}
              />
              You can be assured not to find any grammatical and spelling
              errors.
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.economics_verified_icon}
              />
              All references, including recent literature, are cited and used
              accurately.
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.economics_verified_icon}
              />
              The economics assignments showcase skillful use of data.
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.economics_verified_icon}
              />
              Theoretical knowledge is well integrated.
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.economics_verified_icon}
              />
              Assignments prepared by our economics assignment writing experts
              contains insights and awareness of deeper and more subtle aspects
              of the relevant theory.
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.economics_verified_icon}
              />
              Clear evidence of researched core materials are provided.
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.economics_verified_icon}
              />
              We provide well-argued articulated statements with supporting
              evidence. Evidence of originality and independent thought.
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.economics_verified_icon}
              />
              Has highly developed analytical skills and consistently
              demonstrates high levels of critical analysis.
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.economics_verified_icon}
              />
              Clear and concise conclusion.
            </p>
          </div>
        </div>

        <div className={Style.economics_container_right_data}>
          <div className={Style.economics_container_right_data_box}>
            <div className={Style.economics_container_right_data_box_icon}>
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

export default Economics;
