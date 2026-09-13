import React from "react";
import { Link } from "react-router-dom";
import Style from "./ReflectiveWriting.module.css";
import webLogo from "../img/web-logo.svg";
import caseStudyHeroImg from "../img/caseStudyHeroImg.png";
import caseStudyImg from "../img/caseStudyImg.png";
import EssayWriting from "../EssayWriting/EssayWriting";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GiClockwork } from "react-icons/gi";

const ReflectiveWriting = () => {
  return (
    <div className={Style.essayWriting}>
      <div className={Style.essayWriting_hero}>
        <div className={Style.essayWriting_hero_container}>
          <div className={Style.essayWriting_hero_container_left}>
            <img src={webLogo} alt="web-logo" width={300} height={80} />
            <h1>Reflective Writing Assignment</h1>
            <p>Home ~ Services ~ Reflective Writing</p>
          </div>
          <div className={Style.essayWriting_hero_container_right}>
            <div className={Style.essayWriting_hero_container_right_img}>
              <img src={caseStudyHeroImg} width={400} height={250} />
            </div>
          </div>
        </div>
      </div>

      <div className={Style.essayWriting_container}>
        <div className={Style.essayWriting_container_left_img}>
          <img src={caseStudyImg} width={700} height={200} />
        </div>
        <div className={Style.essayWriting_container_right_box}>
          <div className={Style.essayWriting_container_right_box_data}>
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

      <div className={Style.essayWriting_container}>
        <div className={Style.essayWriting_container_left_data}>
          <div className={Style.essayWriting_container_left_data_first}>
            <h3>Reflective Writing Assignment</h3>
            <p>
              Reflection is the birthplace of ideas, a journey that unfolds as
              you immerse yourself in literature, exploring contexts for
              learning and development. At AN Solution, we recognize the
              significance of this process. Let your ideas flourish, unburdened
              by the intricacies of writing. Join us to turn your reflections
              into compelling narratives. Our expert team ensures your thoughts
              take center stage, making the most of your literary exploration.
            </p>
          </div>

          <div className={Style.essayWriting_container_left_data_second}>
            <h5>Useful Questions to Guide Students</h5>
            <ul>
              <li>
                <strong>Leadership:</strong>How do leadership theories shape
                your experiences and influence your future approach?
              </li>
              <li>
                <strong>Psycology:</strong>Reflect on a psychological theory—how
                does it relate to your behavior?
              </li>
              <li>
                <strong>Ethics:</strong>Consider an ethical dilemma—how has it
                influenced your decision-making?
              </li>
              <li>
                <strong>Sustainability:</strong>Explore environmental
                literature—what changes can you make for sustainability?
              </li>
              <li>
                <strong>Literary character:</strong>Analyze a character—how does
                their journey mirror your own?
              </li>
              <li>
                <strong>History:</strong> Reflect on a historical event—how does
                it offer insights into contemporary issues?
              </li>
            </ul>
          </div>
        </div>

        <div className={Style.essayWriting_container_right_data}>
          <div className={Style.essayWriting_container_right_data_box}>
            <div className={Style.essayWriting_container_right_data_box_icon}>
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

      <div className={Style.essayWriting_container2}>
        <div className={Style.essayWriting_container_left_data_1}>
          <h5>High Distinction Reflective Writing Assignment Services</h5>
          <p>
            Unlock academic excellence with our High Distinction Reflective
            Writing Assignment Services. Our expert team ensures precision and
            depth in crafting reflections that stand out. Elevate your grades
            and showcase insightful perspectives with our tailored support at AN
            Solution.
          </p>
        </div>

        <div className={Style.essayWriting_container_left_data_2}>
          <p>
            <MdOutlineVerifiedUser
              className={Style.essayWriting_verified_icon}
            />
            An understanding of the topic.
          </p>
          <p>
            <MdOutlineVerifiedUser
              className={Style.essayWriting_verified_icon}
            />
            The assignment shall demonstrate an exceptionally high level of
            understanding of the chosen topic.
          </p>
          <p>
            <MdOutlineVerifiedUser
              className={Style.essayWriting_verified_icon}
            />
            It shall demonstrate how the chosen topic can be applied to a
            learning environment.
          </p>
          <p>
            <MdOutlineVerifiedUser
              className={Style.essayWriting_verified_icon}
            />
            Provide a very strong argument for and/or against a particular
            theory/topic in the light of current literature.
          </p>
          <p>
            <MdOutlineVerifiedUser
              className={Style.essayWriting_verified_icon}
            />
            The presentation is in accordance to the prescribed university
            guidelines.
          </p>
          <p>
            <MdOutlineVerifiedUser
              className={Style.essayWriting_verified_icon}
            />
            It is written in accordance to the standard essay structure.
          </p>
          <p>
            <MdOutlineVerifiedUser
              className={Style.essayWriting_verified_icon}
            />
            The ideas and responses are supported with reference from the set
            reading and one extra independently sourced peer-reviewed reference.
          </p>
          <p>
            <MdOutlineVerifiedUser
              className={Style.essayWriting_verified_icon}
            />
            Standard format of referencing like that of APA, Harvard
            Referencing, etc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReflectiveWriting;
