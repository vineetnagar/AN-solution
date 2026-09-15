import React from "react";
import Style from "./Marketing.module.css";
import { Link } from "react-router-dom";
import caseStudyHeroImg from "../img/caseStudyHeroImg.png";
import caseStudyImg from "../img/caseStudyImg.png";
import webLogo from "../img/web-logo.svg";
import EssayWriting from "../EssayWriting/EssayWriting";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GiClockwork } from "react-icons/gi";

const Marketing = () => {
  return (
    <div className={Style.marketing}>
      <div className={Style.marketing_hero}>
        <div className={Style.marketing_hero_container}>
          <div className={Style.marketing_hero_container_left}>
            <img src={webLogo} alt="web-logo" width={300} height={80} />
            <h1>Marketing Assignment</h1>
            <p>Home ~ Services ~ Marketing Assignment</p>
          </div>
          <div className={Style.marketing_hero_container_right}>
            <div className={Style.marketing_hero_container_right_img}>
              <img src={caseStudyHeroImg} width={400} height={250} />
            </div>
          </div>
        </div>
      </div>

      <div className={Style.marketing_container}>
        <div className={Style.marketing_container_left_img}>
          <img src={caseStudyImg} width={700} height={200} />
        </div>
        <div className={Style.marketing_container_right_box}>
          <div className={Style.marketing_container_right_box_data}>
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

      <div className={Style.marketing_container}>
        <div className={Style.marketing_container_left_data}>
          <div className={Style.marketing_container_left_data_first}>
            <h3>Marketing Assignment</h3>
            <p>
              In the dynamic world of marketing, assignments play a pivotal role
              in honing practical skills and applying theoretical knowledge. At
              AN Solution, we understand the challenges students face when
              tackling marketing assignments, and we are here to provide expert
              assistance tailored to your academic needs.
            </p>
            <p>
              Our team comprises experienced marketing professionals and
              academic experts who bring a wealth of industry knowledge to your
              assignments. Whether it's market analysis, consumer behavior
              studies, or strategic planning, we go beyond the basics to deliver
              assignments that demonstrate a deep understanding of contemporary
              marketing practices.
            </p>
            <p>
              We recognize that time is of the essence for students juggling
              multiple responsibilities. By entrusting us with your marketing
              assignments, you not only save time but also gain insights that
              can significantly enhance your grasp of marketing concepts. From
              case studies to comprehensive marketing plans, we ensure your
              assignments are not just completed but reflect the caliber of work
              expected in today's competitive business environment.
            </p>
            <p>
              Empower yourself with the expertise of AN Solution. Our commitment
              is to provide you with top-quality, well-researched marketing
              assignments, allowing you to focus on mastering the intricacies of
              marketing without the stress of looming deadlines. Visit our
              website now to discover a reliable and efficient partner for
              conquering your marketing assignments with confidence and
              excellence.
            </p>
          </div>

          <div className={Style.marketing_container_left_data_second}>
            <h5>Marketing Assignment Writing Services</h5>
            <p>Reflective Writing Assignment Help is :</p>

            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              Your response to experiences, opinions, events or new information
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              Your response to thoughts and feelings
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              A way of thinking to explore your learning
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              An opportunity to gain self-knowledge
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              A way to achieve clarity and better understanding of what you are
              learning
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              A chance to develop and reinforce writing skills
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              A way of making meaning out of what you study
            </p>
          </div>
        </div>

        <div className={Style.marketing_container_right_data}>
          <div className={Style.marketing_container_right_data_box}>
            <div className={Style.marketing_container_right_data_box_icon}>
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

export default Marketing;
