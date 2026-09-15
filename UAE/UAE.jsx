import React from "react";
import Style from "./UAE.module.css";
import { Link } from "react-router-dom";
import caseStudyHeroImg from "../img/caseStudyHeroImg.png";
import countriesImg from "../img/countriesImg.png";
import webLogo from "../img/web-logo.svg";
import EssayWriting from "../EssayWriting/EssayWriting";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GiClockwork } from "react-icons/gi";
import AboutAssignment from "../components/AboutAssignment/AboutAssignment";

const UAE = () => {
  return (
    <div className={Style.uae}>
      <div className={Style.uae_hero}>
        <div className={Style.uae_hero_container}>
          <img src={webLogo} alt="web-logo" width={300} height={80} />
          <h1>Affordable Assignment Help in UAE by </h1>
          <h1>AN Solution</h1>
          <p>Home ~ Services ~ UAE Assignment Help</p>
        </div>
      </div>
      <div className={Style.uae_container}>
        <div className={Style.uae_container_left_img}>
          <img src={countriesImg} width={600} height={400} />
        </div>
        <div className={Style.uae_container_right_box}>
          <div className={Style.uae_container_right_box_data}>
            <Link to="/uk">UK</Link>
            <Link to="/australia">Australia</Link>
            <Link to="/germany">Germany</Link>
            <Link to="/uae">UAE</Link>
          </div>
        </div>
      </div>

      <div className={Style.uae_container}>
        <div className={Style.uae_container_left_data}>
          <div className={Style.uae_container_left_data_first}>
            <h3>
              Employ Our Academic Writers for Assistance With All Sorts of
              Assignments!
            </h3>
            <p>
              At AN Solution, we recognize the fast-paced nature of academic
              life in the United Arab Emirates (UAE). Students often find
              themselves navigating a multitude of responsibilities, leaving
              little time for intricate assignments. That's why we're proud to
              introduce our Instant Assignment Help services tailored
              specifically for UAE students.
            </p>
            <p>
              Our commitment to excellence and understanding of the unique
              demands of the UAE education system drive our Instant Assignment
              Help service. We've curated a team of experienced professionals
              well-versed in diverse academic disciplines to provide swift and
              effective assistance. Whether you're facing tight deadlines or
              complex assignment requirements, we're here to offer immediate
              support, ensuring you meet your academic milestones with
              confidence.
            </p>
            <p>
              At AN Solution, we prioritize your success and academic
              well-being. Our Instant Assignment Help service is designed to
              alleviate the stress associated with urgent assignments. We assure
              you of high-quality, meticulously crafted solutions delivered
              promptly. By choosing AN Solution for your instant assignment
              needs in the UAE, you're opting for a reliable partner dedicated
              to your academic success.
            </p>
            <p>
              Navigating the academic landscape in the UAE has never been
              easier. Trust AN Solution for instant assignment help, and let us
              be the bridge to your academic excellence. Visit our website today
              and experience a seamless, efficient, and reliable solution to
              your urgent assignment requirements. Your success is our priority,
              and we are here to support you every step of the way.
            </p>
          </div>
        </div>

        <div className={Style.uae_container_right_data}>
          <div className={Style.uae_container_right_data_box}>
            <div className={Style.uae_container_right_data_box_icon}>
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

      <div className={Style.uae}>
        <div className={Style.uae_headings}>
          <h2>Distinct Aspects of the Top Assignment Help in UAE!</h2>
          <p>
            The top assignment help in UAE stands out for several distinct
            aspects:
          </p>
        </div>
        <div className={Style.uae_blocks}>
          <div className={Style.uae_blocks_item}>
            <h5>Expert Guidance</h5>
            <div className={Style.uae_blocks_item_info}>
              <p>
                Benefit from the expertise of professionals well-versed in local
                academic standards, ensuring a deep understanding of the UAE
                education system.
              </p>
            </div>
          </div>

          <div className={Style.uae_blocks_item}>
            <h5>Cultural Sensitivity</h5>
            <div className={Style.uae_blocks_item_info}>
              <p>
                Recognizing the cultural diversity in the UAE, the top
                assignment help services prioritize cultural sensitivity,
                creating assignments that resonate with the local context.
              </p>
            </div>
          </div>
          <div className={Style.uae_blocks_item}>
            <h5>Proofreading</h5>
            <div className={Style.uae_blocks_item_info}>
              <p>
                A perfect assignment answer is necessary to earn top scores. As
                a result, after creating the answer, our professionals will
                proofread it many times and fix any flaws.
              </p>
            </div>
          </div>
          <div className={Style.uae_blocks_item}>
            <h5>Quality Assurance</h5>
            <div className={Style.uae_blocks_item_info}>
              <p>
                The top assignment help service upholds the highest standards of
                quality, delivering assignments that align with academic
                integrity and excellence.
              </p>
            </div>
          </div>
        </div>
        <AboutAssignment />
      </div>
    </div>
  );
};

export default UAE;
