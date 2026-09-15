import React from "react";
import Style from "./Features.module.css";
import liveSession from "../../img/liveSession.png";
import qualityGuarranty from "../../img/qualityGuarranty.png";
import services from "../../img/services.png";
import reference from "../../img/reference.png";

const Features = () => {
  return (
    <div className={Style.Features}>
      <div className={Style.Features_headings}>
        <h2>Our Distinctive Features</h2>
        <p>
          Arc Creatif Solution (ACS) takes pride in its distinctive features
          that set us apart in the realm of academic support:
        </p>
      </div>
      <div className={Style.Features_blocks}>
        <div className={Style.Features_blocks_item}>
          <div className={Style.Features_blocks_item_img}>
            <img src={liveSession} height={150} width={250} />
          </div>
          <h5>24/7 Live Sessions</h5>
          <div className={Style.Features_blocks_item_info}>
            <p>
              At Arc Creatif Solution (ACS), we take pride in offering 24/7 live
              sessions, providing students with constant access to immediate
              assistance and guidance. This commitment ensures that you can seek
              help at any time, making your academic journey more flexible and
              convenient.
            </p>
          </div>
        </div>

        <div className={Style.Features_blocks_item}>
          <div className={Style.Features_blocks_item_img}>
            <img src={qualityGuarranty} height={150} width={250} />
          </div>
          <h5>Quality Guarranty</h5>
          <div className={Style.Features_blocks_item_info}>
            <p>
              Quality is at the forefront of our services, and we guarantee
              excellence in every assignment. Our dedicated team of
              professionals ensures that each task meets the highest standards,
              delivering not just completed assignments but a testament to our
              commitment to academic integrity and excellence.
            </p>
          </div>
        </div>
        <div className={Style.Features_blocks_item}>
          <div className={Style.Features_blocks_item_img}>
            <img src={services} height={150} width={250} />
          </div>
          <h5>Services for All Subjects</h5>
          <div className={Style.Features_blocks_item_info}>
            <p>
              ACS is your one-stop destination for academic support, offering
              services across all subjects. Whether you're navigating the
              intricacies of humanities, delving into the sciences, or exploring
              other fields of study, our comprehensive services cater to the
              diverse needs of students across disciplines.
            </p>
          </div>
        </div>
        <div className={Style.Features_blocks_item}>
          <div className={Style.Features_blocks_item_img}>
            <img src={reference} height={150} width={250} />
          </div>
          <h5>Credible References</h5>
          <div className={Style.Features_blocks_item_info}>
            <p>
              Credible references form the bedrock of our assignments at ACS. We
              understand the importance of supporting academic work with
              authoritative sources, ensuring that your assignments are not only
              well-crafted but also substantiated by reliable references. Trust
              ACS for a holistic and dependable academic support experience.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
