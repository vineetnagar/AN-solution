import React from "react";
import Style from "./EssayWriting.module.css";
import { Link } from "react-router-dom";
import caseStudyHeroImg from "../img/caseStudyHeroImg.png";
import webLogo from "../img/web-logo.svg";
import caseStudyImg from "../img/caseStudyImg.png";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GiClockwork } from "react-icons/gi";
const EssayWriting = () => {
  return (
    <div className={Style.essayWriting}>
      <div className={Style.essayWriting_hero}>
        <div className={Style.essayWriting_hero_container}>
          <div className={Style.essayWriting_hero_container_left}>
            <img src={webLogo} alt="web-logo" width={300} height={80} />

            <h1> Essay Writing</h1>
            <p>Home ~ Services ~ Essay Writing</p>
          </div>
          <div className={Style.essayWriting_hero_container_right}>
            <div className={Style.essayWriting_hero_container_right_img}>
              <img src={caseStudyHeroImg} width={400} height={250} />
            </div>
          </div>
        </div>
      </div>
      <div className={Style.essayWriting_container}>
        <div className={Style.essayWriting_container_left_img}>
          <img src={caseStudyImg} width={700} height={200} />
        </div>
        <div className={Style.essayWriting_container_right_box}>
          <div className={Style.essayWriting_container_right_box_data}>
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

      <div className={Style.essayWriting_container}>
        <div className={Style.essayWriting_container_left_data}>
          <div className={Style.essayWriting_container_left_data_first}>
            <h3>Essay Writing Help Assignment</h3>
            <p>
              Delving into the realm of essay writing often entails a
              significant investment of time and effort. At AN Solution, we
              understand the intricacies and challenges associated with crafting
              compelling essays. By joining our platform, you open the door to a
              transformative experience that goes beyond traditional essay
              writing support.
            </p>
            <p>
              Our commitment to your success is reflected in the time we save
              you. With a team of seasoned professionals, we streamline the
              essay writing process, allowing you to focus on other critical
              aspects of your academic journey. From in-depth research to
              impeccable writing, our experts ensure that your essays not only
              meet stringent academic standards but also showcase your unique
              perspective and voice.
            </p>
            <p>
              So, why join us? Beyond the time saved, AN Solution offers a
              collaborative and personalized approach to essay writing. We
              tailor our assistance to your specific needs, fostering a
              supportive environment that empowers you to excel. The wealth of
              experience and expertise within our team is your assurance of
              high-quality, impactful essays.
            </p>
            <p>
              Choose AN Solution for an essay writing journey that transcends
              the ordinary. Let us be your partners in academic success, guiding
              you through the intricacies of essay composition with diligence,
              creativity, and a commitment to excellence.
            </p>
          </div>

          <div className={Style.essayWriting_container_left_data_second}>
            <h5>A good essay shall showcase the following:</h5>
            <ul>
              <li>
                <strong>Analytical Skill:</strong> Ability to critically
                evaluate information and draw meaningful conclusions.
              </li>
              <li>
                <strong>Research Skill:</strong> Proficiency in gathering
                relevant and credible information to support arguments.
              </li>
              <li>
                <strong>Clear Communication:</strong> Articulate thoughts
                clearly and concisely for reader understanding.
              </li>
              <li>
                <strong>Organization Skill:</strong> Arrange ideas logically
                with a clear structure and flow.
              </li>
              <li>
                <strong>Thesis development:</strong> Formulate a strong and
                focused thesis statement that guides the essay.
              </li>
              <li>
                <strong>Editing & Proofreading:</strong> Thoroughly review and
                revise to ensure clarity, coherence, and correctness.
              </li>
              <li>
                <strong>Time Management:</strong> Allocate time wisely for
                research, writing, and revision.
              </li>
              <li>
                <strong>Creativity:</strong> Infuse creativity to engage readers
                and present ideas in a unique way.
              </li>
              <li>
                <strong>Adaptability:</strong> Adjust writing style and tone
                based on the essay's purpose and audience.
              </li>
              <li>
                <strong>Attention to Detail:</strong> Pay meticulous attention
                to grammar, punctuation, and formatting.
              </li>
            </ul>
          </div>
        </div>

        <div className={Style.essayWriting_container_right_data}>
          <div className={Style.essayWriting_container_right_data_box}>
            <div className={Style.essayWriting_container_right_data_box_icon}>
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

      <div className={Style.essayWriting_container2}>
        <div className={Style.essayWriting_container_left_data}>
          <div className={Style.essayWriting_container_left_data_first}>
            <h3>Types of Essay Writing Services by AN Solution</h3>
            <p>Here are five common types of essay writing services:</p>
          </div>
        </div>

        <div className={Style.essayWriting_container_left_data_second}>
          <p>
            <MdOutlineVerifiedUser
              className={Style.essayWriting_verified_icon}
            />
            <strong> Custom Essay Writing:</strong> Tailored essays created from
            scratch based on specific instructions, topics, and formatting
            requirements provided by the client.
          </p>
          <p>
            <MdOutlineVerifiedUser
              className={Style.essayWriting_verified_icon}
            />
            <strong> Editing and Proofreading Services:</strong> Assistance in
            refining and improving existing essays, including grammar checks,
            coherence enhancements, and overall proofreading.
          </p>
          <p>
            <MdOutlineVerifiedUser
              className={Style.essayWriting_verified_icon}
            />
            <strong> Research Paper Writing </strong> In-depth writing services
            for research papers, involving extensive literature reviews, data
            analysis, and adherence to academic research standards.
          </p>
          <p>
            <MdOutlineVerifiedUser
              className={Style.essayWriting_verified_icon}
            />
            <strong> Argumentative Essays : </strong> Crafting persuasive essays
            with a focus on well-supported arguments.
          </p>
          <p>
            <MdOutlineVerifiedUser
              className={Style.essayWriting_verified_icon}
            />
            <strong> Dissertation/Thesis Writing : </strong> Comprehensive
            services for higher-level academic projects, including the creation
            of complete dissertations or theses, encompassing research,
            analysis, and presentation.
          </p>
        </div>
      </div>
    </div>
  );
};

export default EssayWriting;
