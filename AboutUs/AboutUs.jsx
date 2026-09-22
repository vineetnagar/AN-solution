import React from "react";
import Style from "./AboutUs.module.css";
import AboutUsImg from "../img/AboutUsImg.png";
import AboutAssignment from "../components/AboutAssignment/AboutAssignment";
import NumberShow from "../components/NumberShow/NumberShow";

const AboutUs = () => {
  return (
    <div className={Style.aboutUs}>
      <div className={Style.aboutUs_container}>
        <div className={Style.aboutUs_container_heading}>
          <p>ABOUT US</p>
          <h3>CONTENT OF A CHAMPION</h3>
          <h4>ONLINE ACADEMIC WRITING SERVICES</h4>
        </div>
        <div className={Style.aboutUs_container_left}>
          <div className={Style.aboutUs_container_left_img}>
            <img src={AboutUsImg} className={Style.aboutUs_img} />
          </div>
          <div className={Style.aboutUs_container_right}>
            <p>
              At AN Solution (ANS), we empathize with the demanding lives of
              students who juggle various responsibilities daily. ANS is your
              trusted companion, offering timely assistance tailored to your
              busy schedules. With a focus on excellence, we specialize in
              providing top-notch assignment help, setting a benchmark of
              quality over the years.
            </p>
            <p>
              Our commitment to excellence is unwavering. ANS comprises
              experienced professionals dedicated to understanding your unique
              needs. Whether it's a complex project or a time-sensitive task, we
              consistently deliver high-quality work that exceeds expectations,
              prioritizing your success at every step.
            </p>
            <p>
              What sets ANS apart is our student-centric approach. We recognize
              the challenges you face and have designed our services with your
              convenience in mind. Our user-friendly platform ensures a seamless
              experience, allowing you to access the assistance you need with
              just a few clicks.
            </p>
            <p>
              With years of experience, ANS has earned the trust of countless
              students. Our history equips us with the knowledge to tackle
              diverse academic challenges. The positive feedback from satisfied
              clients speaks to our dedication to delivering results that make a
              difference.
            </p>
            <p>
              At ANS, we measure our success by yours. Your academic
              achievements are a testament to the effectiveness of our services.
              As we continue to evolve and adapt to the dynamic educational
              landscape, our commitment to excellence remains unwavering. Join
              the community of students who have experienced the ACS advantage,
              and let us be the catalyst for your academic triumphs.
            </p>
          </div>
        </div>
      </div>
      <AboutAssignment />
      <NumberShow />
    </div>
  );
};

export default AboutUs;
