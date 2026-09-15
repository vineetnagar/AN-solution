import React from "react";
import Style from "./Management.module.css";
import { Link } from "react-router-dom";
import caseStudyHeroImg from "../img/caseStudyHeroImg.png";
import managementImg from "../img/managementImg.png";
import webLogo from "../img/web-logo.svg";
import EssayWriting from "../EssayWriting/EssayWriting";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GiClockwork } from "react-icons/gi";

const Management = () => {
  return (
    <div className={Style.management}>
      <div className={Style.management_hero}>
        <div className={Style.management_hero_container}>
          <div className={Style.management_hero_container_left}>
            <img src={webLogo} alt="web-logo" width={300} height={80} />
            <h1>Management Assignment</h1>
            <p>Home ~ Services ~ Management Assignment</p>
          </div>
          <div className={Style.management_hero_container_right}>
            <div className={Style.management_hero_container_right_img}>
              <img src={caseStudyHeroImg} width={400} height={250} />
            </div>
          </div>
        </div>
      </div>

      <div className={Style.management_container}>
        <div className={Style.management_container_left_img}>
          <img src={managementImg} width={700} height={400} />
        </div>
        <div className={Style.management_container_right_box}>
          <div className={Style.management_container_right_box_data}>
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

      <div className={Style.management_container}>
        <div className={Style.management_container_left_data}>
          <div className={Style.management_container_left_data_first}>
            <h3>Management Assignment</h3>
            <p>
              Embarking on the journey of management studies often means
              grappling with a multitude of academic responsibilities. At AN
              Solution, we acknowledge the challenges that students face as they
              balance coursework with other commitments. Our mission is to
              provide a practical solution that not only saves time but also
              ensures a more relaxed and focused approach to studying.
            </p>
            <p>
              In the dynamic field of management, where theoretical knowledge
              meets real-world application, we recognize that assignments can be
              time-consuming. That's why AN Solution is here to offer
              specialized assistance tailored to your management coursework. Our
              team comprises seasoned professionals who understand the
              intricacies of management principles and are dedicated to
              delivering high-quality support.
            </p>
            <p>
              Choosing AN Solution means choosing a streamlined academic
              experience. By entrusting us with your management assignments, you
              open up a space in your schedule to dive deeper into the core
              concepts of your studies. Our writers are adept at crafting
              insightful analyses, case studies, and reports, ensuring that your
              submissions reflect a mastery of management principles.
            </p>
            <p>
              We understand that your time is valuable, and studying should not
              be hindered by the stress of impending deadlines. At AN Solution,
              our commitment to time efficiency goes hand in hand with our
              dedication to quality. Every assignment we deliver undergoes a
              meticulous process to meet academic standards and exceed
              expectations.
            </p>
            <p>
              As you navigate the intricate landscape of management studies, let
              AN Solution be your academic partner. Our platform is designed to
              empower you, allowing you to study with confidence, knowing that
              your assignments are in capable hands. Visit our website today and
              experience a transformation in your academic journey – one where
              you can focus on learning and leave the stress of assignments
              behind. Your success is at the forefront of our priorities.
            </p>
          </div>

          <div className={Style.management_container_left_data_second}>
            <h5>Management Assignment</h5>
            <p>
              At AN Solution, we're dedicated to providing unparalleled academic
              support. Our distinctive approach to answering questions reflects
              our unwavering commitment to excellence, ensuring that each
              response goes above and beyond. Choose us for exceptional and
              tailored assistance in your academic journey.
            </p>

            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              An explanation of what critical evaluation is all about using the
              OU’s “Stairway to Criticality” ;
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              An introduction to a leader or organization which provides a
              suitable context;
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              An annotated critical application of a leadership or management
              theory ;
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              A clear introduction to the case study and commentary throughout
              which provides guidance;
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              An annotated list of peer reviewed journal articles;
            </p>
          </div>
        </div>

        <div className={Style.management_container_right_data}>
          <div className={Style.management_container_right_data_box}>
            <div className={Style.management_container_right_data_box_icon}>
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

export default Management;
