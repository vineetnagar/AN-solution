import React from "react";
import { Link, Outlet } from "react-router-dom";
import Style from "./CaseStudy.module.css";
import caseStudyHeroImg from "../img/caseStudyHeroImg.png";
import caseStudyImg from "../img/caseStudyImg.png";
import webLogo from "../img/web-logo.svg";
import EssayWriting from "../EssayWriting/EssayWriting";
import ResumeWriting from "../ResumeWriting/ResumeWriting";
import ReflectiveWriting from "../ReflectiveWriting/ReflectiveWriting";
import ResearchWriting from "../ResearchWriting/ResearchWriting";
import DissertationWriting from "../DissertationWriting/DissertationWriting";
import HomeworkHelp from "../HomeworkHelp/HomeworkHelp";
import STATA from "../STATA/STATA";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GiClockwork } from "react-icons/gi";

const CaseStudy = () => {
  return (
    <div className={Style.caseStudy}>
      <div className={Style.caseStudy_hero}>
        <div className={Style.caseStudy_hero_container}>
          <div className={Style.caseStudy_hero_container_left}>
            <img src={webLogo} alt="web-logo" width={300} height={80} />
            <h1>Case Study</h1>
            <p>Home ~ Services ~ Case Study Help</p>
          </div>
          <div className={Style.caseStudy_hero_container_right}>
            <div className={Style.caseStudy_hero_container_right_img}>
              <img src={caseStudyHeroImg} width={400} height={250} />
            </div>
          </div>
        </div>
      </div>

      <div className={Style.caseStudy_container}>
        <div className={Style.caseStudy_container_left_img}>
          <img src={caseStudyImg} width={700} height={400} />
        </div>
        <div className={Style.caseStudy_container_right_box}>
          <div className={Style.caseStudy_container_right_box_data}>
            <Link to="/caseStudy">Case Study Help</Link>
            <Link to="/essayWriting">Essay Writing</Link>
            <Link to="/reflectiveWriting">Reflective Writing</Link>
            <Link to="/resumeWriting">Resume Writing</Link>
            <Link to="/researchWriting">Research Writing</Link>
            <Link to="/dissertationWriting">Dissertation Writing</Link>
            <Link to="/homeworkHelp">Homework Help</Link>
            <Link to="/STATA">STATA</Link>
          </div>
        </div>
      </div>

      <div className={Style.caseStudy_container}>
        <div className={Style.caseStudy_container_left_data}>
          <div className={Style.caseStudy_container_left_data_first}>
            <h3>Case Study Assignment</h3>
            <p>
              Embarking on case studies? Remember, they demand thorough research
              and often consume significant time. Simplify your workload by
              entrusting your assignments to us at AN Solution. Our dedicated
              team ensures meticulous research, saving you time and ensuring
              top-notch results.
            </p>
            <p>
              Explore the efficiency of our services and make your academic
              journey smoother.
            </p>
          </div>

          <div className={Style.caseStudy_container_left_data_second}>
            <h5>Case Study Assignment Essay</h5>
            <p>
              Unlock the secrets to exceptional case studies with our experts at
              AN Solution. Follow our criteria for outstanding results in your
              academic assignments.
            </p>

            <p>
              <MdOutlineVerifiedUser
                className={Style.caseStudy_verified_icon}
              />
              A clear problem statement must be defined.
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.caseStudy_verified_icon}
              />
              There must be a clear identification of all the literature
              concepts.
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.caseStudy_verified_icon}
              />
              The quality of literature review is important. It needs to present
              independent and extensive research conducted.
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.caseStudy_verified_icon}
              />
              The case study needs to be a demonstration of critical thinking.
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.caseStudy_verified_icon}
              />
              There needs to be a clear conceptual or theoretical model in
              place.
            </p>
          </div>
        </div>

        <div className={Style.caseStudy_container_right_data}>
          <div className={Style.caseStudy_container_right_data_box}>
            <div className={Style.caseStudy_container_right_data_box_icon}>
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

export default CaseStudy;
