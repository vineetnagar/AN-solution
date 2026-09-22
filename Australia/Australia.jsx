import React from "react";
import Style from "./Australia.module.css";
import { Link } from "react-router-dom";
import caseStudyHeroImg from "../img/caseStudyHeroImg.png";
import countriesImg from "../img/countriesImg.png";
import webLogo from "../img/web-logo.svg";
import EssayWriting from "../EssayWriting/EssayWriting";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GiClockwork } from "react-icons/gi";
import AboutAssignment from "../components/AboutAssignment/AboutAssignment";

const Australia = () => {
  return (
    <div classame={Style.australia}>
      <div className={Style.australia_hero}>
        <div className={Style.australia_hero_container}>
          <img src={webLogo} alt="web-logo" className={Style.webLogo} />
          <h1>Instant Assignment Help Australia</h1>
          <h1>By AN Solution</h1>
          <p>Home ~ Services ~ Australia Assignment Help</p>
        </div>
      </div>
      <div className={Style.australia_container}>
        <div className={Style.australia_container_left_img}>
          <img src={countriesImg} className={Style.australia_img} />
        </div>
        <div className={Style.australia_container_right_box}>
          <div className={Style.australia_container_right_box_data}>
            <Link to="/uk">UK</Link>
            <Link to="/australia">Australia</Link>
            <Link to="/germany">Germany</Link>
            <Link to="/uae">UAE</Link>
          </div>
        </div>
      </div>

      <div className={Style.australia_container}>
        <div className={Style.australia_container_left_data}>
          <div className={Style.australia_container_left_data_first}>
            <h3>Outstanding Online Assignment Help in Australia</h3>
            <p>
              Welcome to AN Solution, your go-to destination for instant
              assignment help in Australia. Recognizing the fast-paced nature of
              academic life, we understand that students often find themselves
              in need of swift and reliable support. At AN Solution, we take
              pride in offering immediate assistance to students across
              Australia, ensuring that tight deadlines and challenging
              assignments don't become sources of stress.
            </p>
            <p>
              Our team of experienced professionals is adept at handling a
              diverse range of subjects and assignments. Whether it's a
              last-minute essay, a complex project, or a comprehensive research
              paper, we are here to provide the timely help you need. We
              prioritize the quality of our work without compromising on speed,
              ensuring that you receive well-crafted assignments that meet the
              highest academic standards.
            </p>
            <p>
              Navigating the educational landscape can be overwhelming, and we
              are here to make it more manageable for you. Our instant
              assignment help services are designed to be efficient, accessible,
              and tailored to your specific requirements. By choosing AN
              Solution, you not only gain immediate academic support but also a
              reliable partner committed to your success.
            </p>
            <p>
              Explore our website to discover the seamless process of obtaining
              instant assignment help in Australia. Let us alleviate the
              pressure of looming deadlines, allowing you to focus on mastering
              your coursework. At AN Solution, we are dedicated to providing you
              with the assistance you need precisely when you need it. Your
              academic success is our priority, and we look forward to
              supporting you on your educational journey.
            </p>
          </div>
        </div>

        <div className={Style.australia_container_right_data}>
          <div className={Style.australia_container_right_data_box}>
            <div className={Style.australia_container_right_data_box_icon}>
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

      <div className={Style.australia}>
        <div className={Style.australia_headings}>
          <h2>
            Benefits of choosing AN Solution for Assignment Help Australia!
          </h2>
          <p>
            Choosing AN Solution for Assignment Help in Australia comes with a
            myriad of benefits tailored to enhance your academic experience:
          </p>
        </div>
        <div className={Style.australia_blocks}>
          <div className={Style.australia_blocks_item}>
            <h5>Australian Expertise</h5>
            <div className={Style.australia_blocks_item_info}>
              <p>
                Benefit from the insights and knowledge of professionals who
                have graduated from prestigious Australian universities,
                ensuring a deep understanding of local academic standards.
              </p>
            </div>
          </div>

          <div className={Style.australia_blocks_item}>
            <h5>Customized Solutions</h5>
            <div className={Style.australia_blocks_item_info}>
              <p>
                Receive personalized assignment solutions crafted by our
                experienced professionals, catering to the specific requirements
                of your coursework.
              </p>
            </div>
          </div>
          <div className={Style.australia_blocks_item}>
            <h5>Affordability</h5>
            <div className={Style.australia_blocks_item_info}>
              <p>
                Enjoy budget-friendly services without compromising on quality,
                ensuring accessibility to high-quality academic assistance.
              </p>
            </div>
          </div>
          <div className={Style.australia_blocks_item}>
            <h5>Quality Assurance</h5>
            <div className={Style.australia_blocks_item_info}>
              <p>
                Our commitment to excellence is reflected in the high quality of
                work delivered, ensuring that each assignment meets the highest
                standards of academic integrity.
              </p>
            </div>
          </div>
        </div>
        <AboutAssignment />
      </div>
    </div>
  );
};

export default Australia;
