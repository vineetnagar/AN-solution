import React from "react";
import Style from "./STATA.module.css";
import { Link } from "react-router-dom";
import caseStudyHeroImg from "../img/caseStudyHeroImg.png";
import homeworkHelp from "../img/homeworkHelp.png";
import webLogo from "../img/web-logo.svg";
import EssayWriting from "../EssayWriting/EssayWriting";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GiClockwork } from "react-icons/gi";

const STATA = () => {
  return (
    <div className={Style.STATA}>
      <div className={Style.STATA_hero}>
        <div className={Style.STATA_hero_container}>
          <div className={Style.STATA_hero_container_left}>
            <img src={webLogo} alt="web-logo" className={Style.webLogo} />
            <h1>STATA Assignment</h1>
            <p>Home ~ Services ~ STATA Assignment</p>
          </div>
          <div className={Style.STATA_hero_container_right}>
            <div className={Style.STATA_hero_container_right_img}>
              <img src={caseStudyHeroImg} width={400} height={250} />
            </div>
          </div>
        </div>
      </div>

      <div className={Style.STATA_container}>
        <div className={Style.STATA_container_left_img}>
          <img src={homeworkHelp} className={Style.STATA_img} />
        </div>
        <div className={Style.STATA_container_right_box}>
          <div className={Style.STATA_container_right_box_data}>
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

      <div className={Style.STATA_container}>
        <div className={Style.STATA_container_left_data}>
          <div className={Style.STATA_container_left_data_first}>
            <h3>STATA Assignment</h3>
            <p>
              In the dynamic and data-intensive realm of STATA assignments, the
              intricate process of analysis and interpretation can be a
              time-consuming endeavor. Acknowledging the demanding schedules
              that students grapple with, AN Solution emerges as a comprehensive
              solution to ease this academic challenge. When opting for our
              services, you're not merely delegating your assignment; you're
              engaging with a team of seasoned experts committed to ensuring the
              thoroughness and precision of your analysis. By leveraging our
              support, you liberate a substantial portion of your time,
              providing the flexibility to delve into other academic pursuits or
              personal commitments. Our dedication goes beyond delivering a
              completed assignment; it's about empowering you with the knowledge
              and time management skills vital for academic success. Explore the
              advantages of partnering with AN Solution, where our tailored
              assistance is crafted to not only elevate the quality of your
              assignment but also enrich your academic journey.
            </p>
            <h1>STATA</h1>
            <p>
              Before recognizing STATA's primary role in academic subjects, it's
              crucial to understand its profound impact on diverse spheres. At
              AN Solution, we not only acknowledge but embrace the versatile
              influence of STATA across academic, research, and professional
              domains. Beyond its significance in assignments, our awareness
              extends to its broader applications. Whether you're a student,
              researcher, or professional seeking STATA expertise, our platform
              stands ready to cater to your needs. Join us in harnessing the
              extensive capabilities of STATA across various fields, as we
              seamlessly integrate its power into our comprehensive range of
              services.
            </p>
          </div>

          <div className={Style.STATA_container_left_data_second}>
            <h5>Why Seek Help For STATA Assignment?</h5>
            <p>
              Embarking on a STATA assignment can be a daunting task, and at AN
              Solution (ANS), we recognize the challenges that students often
              face in navigating the intricacies of this statistical software.
              Opting for assistance with your STATA assignment from ANS brings
              forth a plethora of benefits. Our team of seasoned professionals,
              under the banner of AN Solution, boasts unparalleled expertise in
              STATA, ensuring that your assignment is not merely completed but
              excels in quality and accuracy. We understand the value of your
              time, and our efficient workflow guarantees a prompt turnaround
              without compromising on the depth of analysis. What sets ANS apart
              is our commitment to providing tailored solutions—your STATA
              assignment is approached with a keen understanding of your unique
              requirements and the specific demands of the task at hand. Quality
              assurance is at the core of our service, with a dedication to
              delivering assignments that meet the highest standards. Beyond
              completion, ANS offers comprehensive support, including
              explanations and clarifications, ensuring that you not only submit
              an outstanding assignment but also grasp the underlying concepts.
              Whether you are a student, researcher, or professional, ANS caters
              to a diverse range of STATA-related needs, extending our services
              beyond the confines of academic assignments. Your privacy is of
              utmost importance to us, and we guarantee the confidentiality of
              both your information and the details of your assignment. Choosing
              ANS for your STATA assignment is more than seeking help; it's
              opting for a reliable partner committed to excellence, efficiency,
              and, above all, your academic success.
            </p>

            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              A clear problem statement must be defined.
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              There must be a clear identification of all the literature
              concepts.
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
              The case study needs to be a demonstration of critical thinking.
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              There needs to be a clear conceptual or theoretical model in
              place.
            </p>
          </div>
        </div>

        <div className={Style.STATA_container_right_data}>
          <div className={Style.STATA_container_right_data_box}>
            <div className={Style.STATA_container_right_data_box_icon}>
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

export default STATA;
