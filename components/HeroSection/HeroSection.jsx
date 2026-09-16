import React from "react";
import Style from "./HeroSection.module.css";
import ProjectForm from "../../ProjectForm/ProjectForm";

const HeroSection = () => {
  return (
    <div className={Style.heroSection}>
      <div className={Style.heroSection_container}>
        <div className={Style.heroSection_container_left}>
          <h1>#1 Assignment Writers</h1>
          <ul>
            <li>
              <b>Affordable & Fast: </b>Affordable assignments by Indian experts
              from top Australian universities.
            </li>
            <li>
              <b> Custom Solutions: </b>Tailored assignments by reliable
              professionals to meet your unique needs.
            </li>
            <li>
              <b>Comprehensive Support: </b>One-stop solution for academic help
              in English and Hindi, available 24/7.
            </li>
            <li>
              <b>On-Time Delivery: </b>Timely submission of 100% unique,
              error-free assignments at the best price.
            </li>
            <li>
              <b>Privacy Assurance: </b>Your personal and academic information
              is kept secure and confidential.
            </li>
            <li>
              <b>Revision & Originality: </b>Unlimited revisions,
              plagiarism-free content, and varied subject coverage.
            </li>
            <li>
              <b>Interactive Resources: </b>Access additional learning materials
              for enhanced understanding.
            </li>
            <li>
              <b>User-Friendly Platform: </b>Easily navigate our platform for a
              seamless experience.
            </li>
            <li>
              <b>Satisfaction Guarantee: </b>Dedicated to exceeding your
              expectations for customer satisfaction.
            </li>
          </ul>

          <div className={Style.heroSection_container_left_offer_box}>
            <p>
              Place Your Order Now And Enjoy Upto <b>40% Off</b> On All
              Assignments
            </p>
          </div>
        </div>

        <div className={StylePropertyMap.heroSection_container_right}>
          <ProjectForm />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
