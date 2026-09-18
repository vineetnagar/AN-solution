import React from "react";
import Style from "./HomeworkHelp.module.css";
import { Link } from "react-router-dom";
import caseStudyHeroImg from "../img/caseStudyHeroImg.png";
import homeworkHelp from "../img/homeworkHelp.png";
import webLogo from "../img/web-logo.svg";
import EssayWriting from "../EssayWriting/EssayWriting";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GiClockwork } from "react-icons/gi";

const HomeworkHelp = () => {
  return (
    <div className={Style.homeworkHelp}>
      <div className={Style.homeworkHelp_hero}>
        <div className={Style.homeworkHelp_hero_container}>
          <div className={Style.homeworkHelp_hero_container_left}>
            <img src={webLogo} alt="web-logo" className={Style.webLogo} />
            <h1>Homework Help</h1>
            <p>Home ~ Services ~ Homework Help</p>
          </div>
          <div className={Style.homeworkHelp_hero_container_right}>
            <div className={Style.homeworkHelp_hero_container_right_img}>
              <img src={caseStudyHeroImg} width={400} height={250} />
            </div>
          </div>
        </div>
      </div>

      <div className={Style.homeworkHelp_container}>
        <div className={Style.homeworkHelp_container_left_img}>
          <img src={homeworkHelp} className={Style.homeworkHelp_img} />
        </div>
        <div className={Style.homeworkHelp_container_right_box}>
          <div className={Style.homeworkHelp_container_right_box_data}>
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

      <div className={Style.homeworkHelp_container}>
        <div className={Style.homeworkHelp_container_left_data}>
          <div className={Style.homeworkHelp_container_left_data_first}>
            <h3>Homework Help</h3>
            <p>
              India, ranking as the world's second-most populous country, is a
              beacon of diversity and the largest democracy globally. Over the
              past decade, the nation has experienced substantial growth in its
              economy, infrastructure, and education system. Particularly in the
              realm of education, significant advancements have shaped the
              landscape. For students seeking academic support, AN Solution
              emerges as a trusted companion, offering comprehensive homework
              assistance to facilitate a smoother educational journey.
            </p>
          </div>

          <div className={Style.homeworkHelp_container_left_data_second}>
            <h5>Why Students Choose Homework Help With AN Solution?</h5>
            <p>
              Students opt for Homework Help with AN Solution for a myriad of
              compelling reasons. Our service stands out for its commitment to
              providing expert assistance, ensuring that every assignment
              benefits from the wealth of knowledge and skills offered by our
              dedicated team. Recognizing the time constraints students face, AN
              Solution offers a solution that not only guarantees efficiency but
              also allows students to focus on other critical aspects of their
              academic journey. Quality assurance is paramount, with each
              assignment meticulously crafted to meet and exceed academic
              standards. The personalized approach taken by AN Solution ensures
              that every student receives tailored solutions that align
              seamlessly with their unique requirements. The platform's
              accessibility and convenience make it easy for students to seek
              assistance whenever needed. Beyond completing assignments, AN
              Solution serves as a reliable support system, fostering not just
              academic success but a deeper understanding of the subject matter.
              With a proven track record of positive outcomes, students trust AN
              Solution for comprehensive and effective Homework Help.
            </p>
          </div>

          <div className={Style.homeworkHelp_container_left_data_second}>
            <h5>How We Make an Error-less Academic Paper?</h5>
            <p>
              Absolutely, students pursuing higher studies in diverse fields
              such as Management, Medical, Engineering, Law, Arts, and more
              often encounter the need to complete various assignments, ranging
              from essays to dissertations and case studies. These assignments
              play a crucial role in assessing their understanding of the
              subject matter and developing critical skills. Recognizing the
              diversity in academic requirements across these disciplines, AN
              Solution offers comprehensive assistance tailored to each field.
              Our platform aims to alleviate the academic workload, providing
              specialized support so that students can focus on mastering the
              core concepts of their respective disciplines. Whether you're
              navigating the complexities of management theories, medical
              research, engineering projects, legal analyses, or artistic
              expressions, AN Solution is here to ensure that your assignments
              are not just completed but excel in quality and relevance.
            </p>
          </div>
          <div className={Style.homeworkHelp_container_left_data_second}>
            <h5>Reasons to Contact AN Solution for Homework Help Service</h5>
            <p>
              Arc Creatif Solution stands out as a premier assignment writing
              service, offering key features such as punctual delivery, ensuring
              assignments are submitted on time, and a commitment to providing
              plagiarism-free papers. Our dedication to quality and reliability
              sets us apart, making us a trusted partner for students seeking
              top-notch academic support.
            </p>

            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              A Team of Subject Matter Experts
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              Live Session(1 - 1)
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              Expert Consultation
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              Globally Available
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              Turnitin Report
            </p>
          </div>
        </div>

        <div className={Style.homeworkHelp_container_right_data}>
          <div className={Style.homeworkHelp_container_right_data_box}>
            <div className={Style.homeworkHelp_container_right_data_box_icon}>
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

export default HomeworkHelp;
