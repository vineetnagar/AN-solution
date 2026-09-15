import React from "react";
import Style from "./Law.module.css";
import { Link } from "react-router-dom";
import caseStudyHeroImg from "../img/caseStudyHeroImg.png";
import lawImg from "../img/lawImg.png";
import webLogo from "../img/web-logo.svg";
import EssayWriting from "../EssayWriting/EssayWriting";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GiClockwork } from "react-icons/gi";

const Law = () => {
  return (
    <div className={Style.law}>
      <div className={Style.law_hero}>
        <div className={Style.law_hero_container}>
          <div className={Style.law_hero_container_left}>
            <img src={webLogo} alt="web-logo" width={300} height={80} />
            <h1>law Assignment</h1>
            <p>Home ~ Services ~ law Assignment</p>
          </div>
          <div className={Style.law_hero_container_right}>
            <div className={Style.law_hero_container_right_img}>
              <img src={caseStudyHeroImg} width={400} height={250} />
            </div>
          </div>
        </div>
      </div>

      <div className={Style.law_container}>
        <div className={Style.law_container_left_img}>
          <img src={lawImg} width={700} height={400} />
        </div>
        <div className={Style.law_container_right_box}>
          <div className={Style.law_container_right_box_data}>
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

      <div className={Style.law_container}>
        <div className={Style.law_container_left_data}>
          <div className={Style.law_container_left_data_first}>
            <h3>law Assignment</h3>
            <p>
              Expertise in the field of law is a fusion of Attitude, Aptitude,
              and Analytics. These three pillars form the bedrock of a
              proficient lawyer's skill set. The right Attitude involves a
              commitment to justice, an ethical approach, and a relentless
              pursuit of truth. Aptitude encompasses a deep understanding of
              legal principles, an analytical mindset, and the ability to
              synthesize information effectively. Analytics, the third key
              element, requires the adept use of critical thinking and
              problem-solving skills to navigate the intricacies of legal cases.
              At AN Solution, we understand the importance of fostering these
              qualities in aspiring legal professionals.
            </p>
            <p>
              Our commitment is not only to provide you with expertly crafted
              law assignments but also to empower you in your journey to become
              a proficient lawyer. By entrusting us with your assignments, you
              can focus on cultivating the Attitude, Aptitude, and Analytics
              that define legal excellence. Our team of experienced legal
              professionals and writers ensures that your assignments are not
              merely completed but are thorough, well-researched, and tailored
              to meet the highest standards of legal academia.
            </p>
            <p>
              Take a look at this sample question, which will give you an idea
              of how our law assignment writing experts deal with law
              assignments:
            </p>
            <p>
              We recognize that as law students, your time is a valuable asset.
              That's why, at AN Solution, we aim to alleviate the stress of
              assignment deadlines, allowing you to dedicate more time to your
              studies, research, and practical experiences. Our efficient and
              reliable service is designed to save you time while ensuring that
              you receive top-notch, customized assignments that align with your
              academic goals.
            </p>
            <p>
              Navigating the complex world of law requires an investment of time
              and effort, and we are here to help you make the most of your
              educational journey. By choosing AN Solution, you not only gain
              professionally crafted assignments but also the time and peace of
              mind to delve deeper into your studies, participate in legal
              internships, and engage in extracurricular activities that
              contribute to your holistic development.
            </p>
            <p>
              In conclusion, we believe that by partnering with AN Solution, you
              are not just outsourcing your assignments; you are investing in
              your own growth as a future legal professional. Let us handle the
              intricacies of legal assignments, while you focus on honing the
              Attitude, Aptitude, and Analytics that will set you on the path to
              becoming an expert lawyer. Your success is our priority, and we
              are here to support you every step of the way.
            </p>
          </div>

          <div className={Style.law_container_left_data_second}>
            <h5>Our Assignment Answering Criteria’s</h5>
            <p>If you look at the above sample, you will notice that;</p>

            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              The content is discussed in a clear and concise manner regarding
              whether the visa criteria are met.
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              Facts are accurately identified and appropriate law citations are
              given; policies and/or ethics relevant to the facts are provided
              too.
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              The answer is justified by clear reference to the relevant facts,
              identifying logical assumptions made about the facts in answering
              questions, including further information that may be required.
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              The answer is presented clearly and logically in a businesslike
              manner.
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              We adhere to the prescribed word limit.
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              We provide not just a reference list, but a bibliography too.
            </p>
          </div>
        </div>

        <div className={Style.law_container_right_data}>
          <div className={Style.law_container_right_data_box}>
            <div className={Style.law_container_right_data_box_icon}>
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

export default Law;
