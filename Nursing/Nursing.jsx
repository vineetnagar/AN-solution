import React from "react";
import Style from "./Nursing.module.css";
import { Link } from "react-router-dom";
import caseStudyHeroImg from "../img/caseStudyHeroImg.png";
import caseStudyImg from "../img/caseStudyImg.png";
import webLogo from "../img/web-logo.svg";
import EssayWriting from "../EssayWriting/EssayWriting";
import { MdOutlineVerifiedUser } from "react-icons/md";
import { GiClockwork } from "react-icons/gi";

const Nursing = () => {
  return (
    <div className={Style.nursing}>
      <div className={Style.nursing_hero}>
        <div className={Style.nursing_hero_container}>
          <div className={Style.nursing_hero_container_left}>
            <img src={webLogo} alt="web-logo" width={300} height={80} />
            <h1>Nursing Assignment</h1>
            <p>Home ~ Services ~ Nursing Assignment Help</p>
          </div>
          <div className={Style.nursing_hero_container_right}>
            <div className={Style.nursing_hero_container_right_img}>
              <img src={caseStudyHeroImg} width={400} height={250} />
            </div>
          </div>
        </div>
      </div>

      <div className={Style.nursing_container}>
        <div className={Style.nursing_container_left_img}>
          <img src={caseStudyImg} width={700} height={200} />
        </div>
        <div className={Style.nursing_container_right_box}>
          <div className={Style.nursing_container_right_box_data}>
            <Link>Nursing</Link>
            <Link>Management</Link>
            <Link>Law</Link>
            <Link>Economics</Link>
            <Link>Statics</Link>
            <Link>Finance</Link>
            <Link>Marketing</Link>
          </div>
        </div>
      </div>

      <div className={Style.nursing_container}>
        <div className={Style.nursing_container_left_data}>
          <div className={Style.nursing_container_left_data_first}>
            <h3>Nursing Assignment</h3>
            <p>
              Recognizing the demanding nature of your nursing studies, we at AN
              Solution are here to alleviate the stress associated with
              assignments and offer a pathway for you to study with ease. Our
              dedicated team of experienced nursing professionals is ready to
              handle your assignments, ensuring not only timely completion but
              also a standard of quality that aligns with your academic goals.
            </p>
            <p>
              By entrusting your assignments to us, you reclaim valuable time
              that can be redirected toward focused studying and personal
              well-being. Our streamlined process is designed for your
              convenience, offering a stress-free collaboration from the moment
              you reach out to the delivery of the finished assignment. We
              understand the importance of deadlines, and our commitment to
              timely delivery means you can approach your studies without the
              looming pressure of pending tasks.
            </p>
            <p>
              Moreover, our service is not just about completing assignments;
              it's about providing you with a supportive academic environment.
              We aim to save your time and minimize stress, allowing you to
              fully immerse yourself in the learning experience. As you partner
              with AN Solution, envision a study routine that is free from
              assignment-related worries, empowering you to focus on what truly
              matters—your education and personal growth. Your academic journey
              should be a fulfilling one, and we are here to make that a
              reality.
            </p>
            <p>
              As you engage with our service, you'll find that our commitment
              extends beyond the completion of assignments. We are dedicated to
              ensuring that each task is not only academically sound but also
              contributes positively to your understanding of nursing concepts.
              Our team draws on the latest research and evidence-based
              practices, aligning your assignments with the cutting-edge
              developments in the field.
            </p>
            <p>
              Furthermore, the impact of our assistance reaches far beyond
              academic success. By freeing up your time from the burdens of
              assignment intricacies, we aim to cultivate a sense of balance in
              your student life. You deserve an academic journey that is not
              only successful but also enjoyable and enriching. Our service is a
              partner in your educational aspirations, working tirelessly to
              provide the necessary support for your holistic growth.
            </p>
            <p>
              In conclusion, AN Solution is not just a solution to assignment
              challenges; it is an investment in your academic well-being. We
              invite you to experience the transformative power of focused,
              stress-free studying. Your time is precious, and we are here to
              ensure that every moment you spend in pursuit of knowledge is
              maximally rewarding. Join us in creating a seamless and enriching
              academic journey that empowers you to excel in your nursing
              studies with confidence and ease.
            </p>
          </div>

          <div className={Style.nursing_container_left_data_second}>
            <h5>Nursing Assignment Writing Service</h5>
            <p>
              Contact AN Solution for your next nursing assignment. We assure
              you:
            </p>

            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              Reliable Indian experts who have graduated from Australian
              Universities;
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              Customized assignment solutions by our nursing assignment writing
              expert;
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              Timely delivery of assignments;
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              100% unique and error-free assignments;
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              24/7 online support on all subjects in English and Hindi
              languages;
            </p>
            <p>
              <MdOutlineVerifiedUser
                className={Style.essayWriting_verified_icon}
              />
              Plagiarism free assignments;
            </p>
          </div>
        </div>

        <div className={Style.nursing_container_right_data}>
          <div className={Style.nursing_container_right_data_box}>
            <div className={Style.nursing_container_right_data_box_icon}>
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

export default Nursing;
