import React from "react";
import Style from "./Dissertation.module.css";
import { Link } from "react-router-dom";
import caseStudyHeroImg from "../img/caseStudyHeroImg.png";
import caseStudyImg from "../img/caseStudyImg.png";
import webLogo from "../img/web-logo.svg";
import EssayWriting from "../EssayWriting/EssayWriting";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GiClockwork } from "react-icons/gi";

const DissertationWriting = () => {
  return (
    <div className={Style.dissertationWriting}>
      <div className={Style.dissertationWriting_hero}>
        <div className={Style.dissertationWriting_hero_container}>
          <div className={Style.dissertationWriting_hero_container_left}>
            <img src={webLogo} alt="web-logo" width={300} height={80} />
            <h1>Dissertation Writing</h1>
            <p>Home ~ Services ~ Dissertation Writing</p>
          </div>
          <div className={Style.dissertationWriting_hero_container_right}>
            <div className={Style.dissertationWriting_hero_container_right_img}>
              <img src={caseStudyHeroImg} width={400} height={250} />
            </div>
          </div>
        </div>
      </div>

      <div className={Style.dissertationWriting_container}>
        <div className={Style.dissertationWriting_container_left_img}>
          <img src={caseStudyImg} width={700} height={200} />
        </div>
        <div className={Style.dissertationWriting_container_right_box}>
          <div className={Style.dissertationWriting_container_right_box_data}>
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

      <div className={Style.dissertationWriting_container}>
        <div className={Style.dissertationWriting_container_left_data}>
          <div className={Style.dissertationWriting_container_left_data_first}>
            <h3>Dissertation Writing Services</h3>
            <p>
              Undertaking the task of writing a dissertation independently is
              undoubtedly a commendable endeavor, yet it's essential to
              recognize the significant time investment it entails. Researching,
              drafting, and refining a dissertation is a meticulous process that
              often spans several months. This extensive timeline involves
              navigating through voluminous literature, conducting in-depth
              research, and refining the formulation of ideas before even
              embarking on the actual writing phase.
            </p>
            <p>
              Choosing our Dissertation Writing Services offers you a strategic
              advantage by mitigating this time-intensive process. Our seasoned
              team, well-versed in diverse academic disciplines, expedites the
              journey by efficiently managing the intricate aspects of research
              and crafting. By entrusting us with your dissertation, you not
              only receive a professionally polished document but also liberate
              yourself from the burdensome time constraints. This newfound time
              can be redirected towards mastering the subject matter,
              participating in extracurricular activities, or preparing for the
              next phase of your academic and professional journey. Join us in
              making the most of your time while ensuring the excellence of your
              dissertation.
            </p>
          </div>

          <div className={Style.dissertationWriting_container_left_data_second}>
            <h5>Why Seek Help Of AN Solution?</h5>
            <p>
              Seeking help for your dissertation from AN Solution (ANS) is a
              strategic decision that brings a host of benefits to your academic
              journey. Crafting a dissertation is a complex and time-consuming
              process, and ANS is here to streamline that journey for you.
            </p>
            <p>
              First and foremost, our team of experienced professionals at ANS
              understands the intricacies of dissertation writing. We bring a
              wealth of knowledge across various academic disciplines, ensuring
              that your dissertation not only meets but exceeds the rigorous
              standards expected in higher education.
            </p>
            <p>
              Time is of the essence in academia, and by choosing ANS, you free
              up a substantial amount of your valuable time. The extensive
              research, drafting, and refining process that a dissertation
              demands can be overwhelming, and our services are designed to
              efficiently handle these aspects. This enables you to focus on
              understanding the subject matter, preparing for presentations, and
              dedicating time to other essential aspects of your academic and
              personal life.
            </p>
          </div>
        </div>

        <div className={Style.dissertationWriting_container_right_data}>
          <div className={Style.dissertationWriting_container_right_data_box}>
            <div
              className={
                Style.dissertationWriting_container_right_data_box_icon
              }
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

export default DissertationWriting;
