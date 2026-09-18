import React from "react";
import { Link } from "react-router-dom";
import Style from "./ResumeWriting.module.css";
import caseStudyHeroImg from "../img/caseStudyHeroImg.png";
import webLogo from "../img/web-logo.svg";
import resumeWritingImg from "../img/resumeWritingImg.png";
import EssayWriting from "../EssayWriting/EssayWriting";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GiClockwork } from "react-icons/gi";

const ResumeWriting = () => {
  return (
    <div className={Style.resumeWriting}>
      <div className={Style.resumeWriting_hero}>
        <div className={Style.resumeWriting_hero_container}>
          <div className={Style.resumeWriting_hero_container_left}>
            <img src={webLogo} alt="web-logo" className={Style.webLogo} />
            <h1>Resume Writing</h1>
            <p>Home ~ Services ~ Resume Writing</p>
          </div>
          <div className={Style.resumeWriting_hero_container_right}>
            <div className={Style.resumeWriting_hero_container_right_img}>
              <img src={caseStudyHeroImg} width={400} height={250} />
            </div>
          </div>
        </div>
      </div>

      <div className={Style.resumeWriting_container}>
        <div className={Style.resumeWriting_container_left_img}>
          <img src={resumeWritingImg} className={Style.resumeWriting_img} />
        </div>
        <div className={Style.resumeWriting_container_right_box}>
          <div className={Style.resumeWriting_container_right_box_data}>
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

      <div className={Style.resumeWriting_container}>
        <div className={Style.resumeWriting_container_left_data}>
          <div className={Style.resumeWriting_container_left_data_first}>
            <h3>Resume Writing</h3>
            <p>
              In the Indian employment landscape, securing a job is often
              considered a notable privilege, and individuals frequently turn to
              distinguished resume writing services such as AN Solution to
              elevate their job prospects. Recognizing the intense competition
              and the pivotal role that a well-crafted resume plays, many job
              seekers rely on the professional touch provided by services like
              AN Solution.
            </p>
            <p>
              In this pursuit of employment, a meticulously crafted resume
              becomes a crucial asset. Job seekers understand that their initial
              impression on a potential employer is often shaped by their
              resume. Therefore, the comprehensive offerings of AN Solution,
              from resume creation to LinkedIn profile optimization, are
              increasingly sought after by those who recognize the importance of
              presenting their skills and experiences in the best light
              possible.
            </p>
            <p>
              AN Solution, as a leading player in the resume writing services
              arena, caters to the diverse needs of job seekers in India. Their
              expertise extends across various industries, ensuring that resumes
              are tailored to align seamlessly with specific job requirements.
              In a competitive job market, individuals find significant value in
              the specialized knowledge and proficiency that AN Solution brings
              to the table.
            </p>
            <p>
              Moreover, the trust placed in professional resume writing
              services, including AN Solution, underscores a broader cultural
              recognition of the paramount importance of career development in
              India. In a society that highly values education and employment,
              individuals are keenly aware of the need to leverage every
              advantage to ensure their professional journey is well-managed and
              leads to fulfilling opportunities.
            </p>
            <p>
              The utilization of services like AN Solution has thus become a
              strategic investment in one's career, providing a distinctive edge
              in the competitive pursuit of coveted job positions. It aligns
              with the broader narrative of individuals in India proactively
              taking charge of their career trajectories, acknowledging that a
              polished and impactful resume is not just a formality but a
              strategic step toward securing meaningful and rewarding employment
              opportunities.
            </p>
          </div>

          <div className={Style.resumeWriting_container_left_data_second}>
            <h5>
              The process that a resume undergoes at our firm is listed below –
            </h5>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              Your Resume Requirement
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              Appointment of Professional Resume Writer
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              The quality of literature review is important. It needs to present
              independent and extensive research conducted.
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              A Draft First
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              The Final Call
            </p>
          </div>
        </div>

        <div className={Style.resumeWriting_container_right_data}>
          <div className={Style.resumeWriting_container_right_data_box}>
            <div className={Style.resumeWriting_container_right_data_box_icon}>
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

export default ResumeWriting;
