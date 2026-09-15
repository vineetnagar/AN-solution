import React from "react";
import Style from "./UK.module.css";
import { Link, Outlet } from "react-router-dom";
import caseStudyHeroImg from "../img/caseStudyHeroImg.png";
import UKImg from "../img/UKImg.jpg";
import webLogo from "../img/web-logo.svg";
import EssayWriting from "../EssayWriting/EssayWriting";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GiClockwork } from "react-icons/gi";
import Features from "../components/Features/Features";
import AboutAssignment from "../components/AboutAssignment/AboutAssignment";

const UK = () => {
  return (
    <div className={Style.uk}>
      <div className={Style.uk_hero}>
        <div className={Style.uk_hero_container}>
          <img src={webLogo} alt="web-logo" width={300} height={80} />
          <h1>Instant Assignment</h1>
          <h1>UK at AN Solution</h1>
          <p>Home ~ Services ~ UK Assignment Help</p>
        </div>
      </div>
      <div className={Style.uk_container}>
        <div className={Style.uk_container_left_img}>
          <img src={UKImg} width={500} height={500} />
        </div>
        <div className={Style.uk_container_right_box}>
          <div className={Style.uk_container_right_box_data}>
            <Link to="/uk">UK</Link>
            <Link to="/australia">Australia</Link>
            <Link to="/germany">Germany</Link>
            <Link to="/uae">UAE</Link>
          </div>
        </div>
      </div>

      <div className={Style.uk_container}>
        <div className={Style.uk_container_left_data}>
          <div className={Style.uk_container_left_data_first}>
            <h3>Top-quality Assignment Solutions under Your Budget</h3>
            <p>
              At AN Solution (ANS), we understand the pressing demands of
              students in the UK who often find themselves in need of instant
              assignment help. Recognizing the urgency and importance of timely
              submissions, we proudly offer swift and reliable assistance to
              cater to your academic needs. Our team of experienced
              professionals is adept at delivering high-quality assignments
              promptly, ensuring that you meet your deadlines without
              compromising on quality.
            </p>
            <p>
              Whether you're grappling with a last-minute assignment, facing a
              challenging topic, or simply seeking a helping hand, ANS is your
              go-to solution. Our commitment to excellence extends to providing
              instant assignment help that not only meets but exceeds your
              expectations. We prioritize your academic success and are
              dedicated to delivering top-notch work even under tight timelines.
            </p>
            <p>
              Navigating the complexities of coursework should not be a source
              of stress. With AN Solution, you can access instant assignment
              help that is tailored to your specific requirements. Our
              user-friendly platform allows you to submit your requests
              seamlessly, and our responsive team ensures that you receive the
              support you need promptly. Trust ANS for instant assignment
              assistance in the UK, where excellence meets efficiency in every
              academic endeavor.
            </p>
          </div>
        </div>

        <div className={Style.uk_container_right_data}>
          <div className={Style.uk_container_right_data_box}>
            <div className={Style.uk_container_right_data_box_icon}>
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

      <div className={Style.uk}>
        <div className={Style.uk_headings}>
          <h2>What Special Features Will You Get at AN Solution?</h2>
          <p>
            At AN Solution, you'll experience a range of special features
            designed to enhance your academic journey:
          </p>
        </div>
        <div className={Style.uk_blocks}>
          <div className={Style.uk_blocks_item}>
            <h5>Personalized Assistance</h5>
            <div className={Style.uk_blocks_item_info}>
              <p>
                Benefit from a personalized approach where each assignment is
                crafted to meet your unique requirements, ensuring a tailored
                and effective learning experience.
              </p>
            </div>
          </div>

          <div className={Style.uk_blocks_item}>
            <h5>24/7 Live Support</h5>
            <div className={Style.uk_blocks_item_info}>
              <p>
                Enjoy round-the-clock assistance with our 24/7 live support,
                providing immediate access to help and guidance whenever you
                need it.
              </p>
            </div>
          </div>
          <div className={Style.uk_blocks_item}>
            <h5>Quality Guarantee</h5>
            <div className={Style.uk_blocks_item_info}>
              <p>
                Trust in the authenticity and excellence of your work with our
                assurance of 100% original papers, backed by the expertise of
                our seasoned professionals.
              </p>
            </div>
          </div>
          <div className={Style.uk_blocks_item}>
            <h5>Affordability</h5>
            <div className={Style.uk_blocks_item_info}>
              <p>
                Experience the best value for your investment with our
                budget-friendly services, prioritizing affordability without
                compromising on the high quality of our work.
              </p>
            </div>
          </div>
        </div>
      </div>
      <AboutAssignment />
    </div>
  );
};

export default UK;
