import React, { useState } from "react";
import Style from "./AboutAssignment.module.css";
import assignmentCover from "../../img/assignment-cover.png";

const AboutAssignment = () => {
  const [activeTopic, setActiveTopic] = useState("Management");

  const [management, setManagement] = useState(true);
  const [IT, setIT] = useState(false);
  const [law, setLaw] = useState(false);
  const [statics, setStatics] = useState(false);
  const [engineering, setEngineering] = useState(false);
  const [nursing, setNursing] = useState(false);
  const [accounting, setAccounting] = useState(false);
  const [generalSubjects, setGeneralSubjects] = useState(false);

  const openManagement = () => {
    if (management) {
      setManagement(true);
    } else {
      setManagement(true);
      setIT(false);
      setLaw(false);
      setStatics(false);
      setEngineering(false);
      setNursing(false);
      setAccounting(false);
      setGeneralSubjects(false);
    }
  };

  const openIT = () => {
    if (IT) {
      setIT(true);
    } else {
      setManagement(false);
      setIT(true);
      setLaw(false);
      setStatics(false);
      setEngineering(false);
      setNursing(false);
      setAccounting(false);
      setGeneralSubjects(false);
    }
  };

  const openLaw = () => {
    if (law) {
      setLaw(true);
    } else {
      setManagement(false);
      setIT(false);
      setLaw(true);
      setStatics(false);
      setEngineering(false);
      setNursing(false);
      setAccounting(false);
      setGeneralSubjects(false);
    }
  };

  const openStatics = () => {
    if (statics) {
      setStatics(true);
    } else {
      setManagement(false);
      setIT(false);
      setLaw(false);
      setStatics(true);
      setEngineering(false);
      setNursing(false);
      setAccounting(false);
      setGeneralSubjects(false);
    }
  };

  const openEngineering = () => {
    if (engineering) {
      setEngineering(true);
    } else {
      setManagement(false);
      setIT(false);
      setLaw(false);
      setStatics(false);
      setEngineering(true);
      setNursing(false);
      setAccounting(false);
      setGeneralSubjects(false);
    }
  };

  const openNursing = () => {
    if (nursing) {
      setNursing(true);
    } else {
      setManagement(false);
      setIT(false);
      setLaw(false);
      setStatics(false);
      setEngineering(false);
      setNursing(true);
      setAccounting(false);
      setGeneralSubjects(false);
    }
  };

  const openAccounting = () => {
    if (management) {
      setAccounting(true);
    } else {
      setManagement(false);
      setIT(false);
      setLaw(false);
      setStatics(false);
      setEngineering(false);
      setNursing(false);
      setAccounting(true);
      setGeneralSubjects(false);
    }
  };

  const openGeneralSubjects = () => {
    if (generalSubjects) {
      setManagement(true);
    } else {
      setManagement(false);
      setIT(false);
      setLaw(false);
      setStatics(false);
      setEngineering(false);
      setNursing(false);
      setAccounting(false);
      setGeneralSubjects(true);
    }
  };
  return (
    <div className={Style.AboutAssignment}>
      <div className={Style.AboutAssignment_left}>
        <div className={Style.AboutAssignment_topics}>
          <p
            className={activeTopic === "Management" ? Style.active : ""}
            onClick={() => openManagement()}
          >
            Management
          </p>
          <p onClick={() => openIT()}>IT</p>
          <p onClick={() => openLaw()}>Law</p>
          <p onClick={() => openStatics()}>Statics</p>
          <p onClick={() => openEngineering()}>Engineering</p>
          <p onClick={() => openNursing()}>Nursing</p>
          <p onClick={() => openAccounting()}>Accounting</p>
          <p onClick={() => openGeneralSubjects()}>General Subjects</p>
        </div>

        <hr />
        {management && (
          <div className={Style.AboutAssignment_info}>
            <h4>Management</h4>
            <p>
              In the field of Management studies, Arc Creatif Solution (ACS) is
              your dedicated team ready to assist with a range of assignment
              tasks. From dissertations to essays, case studies, and research
              papers, our comprehensive services cover all aspects of Management
              coursework. Trust ACS for tailored solutions that align with the
              specific requirements of your assignments and guide you to success
              in Management studies.
            </p>
            <div className={Style.AboutAssignment_info_list}>
              <ul>
                <li> Political Science</li>
                <li>International Relations</li>
                <li>Geology</li>
                <li>Social Science</li>
                <li>Public Policy</li>
                <li>Geography</li>
                <li>Psycology</li>
              </ul>
              <ul>
                <li>Education</li>
                <li>Humanities</li>
                <li>Cultural and Communication Studies</li>
                <li>History</li>
                <li>Antropology</li>
                <li>Philosophy</li>
                <li>Religion</li>
              </ul>
            </div>
          </div>
        )}
        {IT && (
          <div className={Style.AboutAssignment_info}>
            <h4>IT</h4>
            <p>
              In the dynamic landscape of IT studies, Arc Creatif Solution (ACS)
              stands as your dedicated team, ready to assist with a diverse
              range of assignment challenges. Our comprehensive services span
              dissertations, essays, case studies, research papers, and more,
              covering all facets of IT coursework. With expertise across
              various IT domains, ACS provides tailored solutions to align with
              the specific requirements of your assignments. Whether you're
              navigating programming, database management, or network security,
              trust ACS for expert guidance and success in your IT studies.
            </p>
            <div className={Style.AboutAssignment_info_list}>
              <ul>
                <li>Networking/CCNA/Network Security</li>
                <li>C/C#/C++ Programming</li>
                <li>Jav(Phython, NetBeans, Eclipse)</li>
                <li>MS Project</li>
                <li>XML Web Development</li>
                <li>UML Diagram</li>
              </ul>
              <ul>
                <li>Mobile App Development</li>
                <li>Digital Forensics</li>
                <li>DBMS(Oracle, .Net)</li>
                <li>SQL</li>
                <li>Animation</li>
                <li>MS Access</li>
              </ul>
            </div>
          </div>
        )}
        {law && (
          <div className={Style.AboutAssignment_info}>
            <h4>Law</h4>
            <p>
              In the intricate domain of Law studies, Arc Creatif Solution (ACS)
              is your committed team, poised to assist with a spectrum of
              assignment challenges. From comprehensive dissertations to precise
              essays, detailed case studies, and research papers, our services
              encompass the entirety of Law coursework. With a team well-versed
              in legal principles, ACS delivers tailored solutions that meet the
              specific requirements of your assignments. Whether you're
              navigating constitutional law, criminal justice, or legal
              research, rely on ACS for expert assistance and success in your
              Law studies.
            </p>
            <div className={Style.AboutAssignment_info_list}>
              <ul>
                <li>Buisness Law</li>
                <li>Corporate Law</li>
                <li>Civil Law</li>
                <li>Criminal Law</li>
                <li>Commercial Law</li>
              </ul>
              <ul>
                <li>Contract Law</li>
                <li>Property Law</li>
                <li>Employment Law</li>
                <li>Tort Law</li>
                <li>Taxation Law</li>
              </ul>
            </div>
          </div>
        )}
        {statics && (
          <div className={Style.AboutAssignment_info}>
            <h4>Statics</h4>
            <p>
              In the realm of Statistics, Arc Creatif Solution (ACS) serves as
              your dedicated team, ready to tackle a variety of assignment
              challenges. From in-depth dissertations to focused essays,
              detailed case studies, and research papers, our services cover the
              full spectrum of Statistics coursework. With a team proficient in
              statistical methods, ACS delivers customized solutions tailored to
              the specific requirements of your assignments. Whether you're
              working on hypothesis testing, regression analysis, or probability
              distributions, trust ACS for expert guidance and success in your
              Statistics studies.
            </p>
            <div className={Style.AboutAssignment_info_list}>
              <ul>
                <li>SPSSR Programming</li>
                <li>STATA</li>
                <li>E-Views</li>
                <li>Minitab</li>
                <li>Econometrics</li>
                <li>Exel</li>
              </ul>
              <ul>
                <li>R-Studio</li>
                <li>Data Analysis</li>
                <li>Data Mining</li>
                <li>Regression Analysis</li>
                <li>M-Plus</li>
                <li>Structural Equation Modeling</li>
              </ul>
            </div>
          </div>
        )}
        {engineering && (
          <div className={Style.AboutAssignment_info}>
            <h4>Engineering</h4>
            <p>
              In the diverse field of Engineering studies, Arc Creatif Solution
              (ACS) is your dedicated partner, equipped to handle a range of
              assignment challenges. From comprehensive dissertations to
              targeted essays, intricate case studies, and research papers, our
              services encompass the entirety of Engineering coursework. With a
              team well-versed in various engineering disciplines, ACS delivers
              tailored solutions that align with the specific requirements of
              your assignments. Whether you're navigating complex equations,
              design projects, or theoretical concepts, trust ACS for expert
              assistance and success in your Engineering studies.
            </p>
            <div className={Style.AboutAssignment_info_list}>
              <ul>
                <li>Mechanical Engineering</li>
                <li>Chemical Engineering</li>
                <li>SolidWorks</li>
                <li>Geo Thermal Engineering</li>
                <li>Aerodynamics</li>
                <li>Traffic Signal Engineering</li>
                <li>ARCHICAD</li>
                <li>CAD</li>
                <li>CATIA</li>
                <li>Lab Reports</li>
              </ul>
              <ul>
                <li>Electrical Engineering</li>
                <li>Civil Engineering</li>
                <li>Automobile Engineering</li>
                <li>MATLAB</li>
                <li>AUTOCAD</li>
                <li>ANSYS</li>
                <li>Marine Engineering</li>
                <li>Water Engineering</li>
                <li>Microprocessors System</li>
              </ul>
            </div>
          </div>
        )}
        {nursing && (
          <div className={Style.AboutAssignment_info}>
            <h4>Nursing</h4>
            <p>
              In the realm of Nursing studies, Arc Creatif Solution (ACS) serves
              as your committed support system, ready to address a variety of
              assignment challenges. From detailed dissertations to focused
              essays, intricate case studies, and research papers, our services
              cover the comprehensive spectrum of Nursing coursework. With a
              team well-versed in nursing principles, ACS delivers tailored
              solutions that align with the specific requirements of your
              assignments. Whether you're navigating clinical assessments, care
              plans, or healthcare research, trust ACS for expert assistance and
              success in your Nursing studies.
            </p>
            <div className={Style.AboutAssignment_info_list}>
              <ul>
                <li>Health Studies</li>
                <li>Genetics</li>
                <li>Bioinformatics</li>
                <li>Mental Health</li>
                <li>Pediatric Nursing</li>
                <li>Obstetrical Nursing</li>
              </ul>
              <ul>
                <li>Epidemiology</li>
                <li>Medicine and Biology</li>
                <li>Biomedicines</li>
                <li>Psychiatric Nursing</li>
                <li>Public Health</li>
                <li>Medical and Surgical Nursing</li>
              </ul>
            </div>
          </div>
        )}
        {accounting && (
          <div className={Style.AboutAssignment_info}>
            <h4>Accounting</h4>
            <p>
              In the intricate field of Accounting studies, Arc Creatif Solution
              (ACS) is your dedicated ally, equipped to tackle a range of
              assignment challenges. From detailed dissertations to targeted
              essays, comprehensive case studies, and research papers, our
              services cover the full spectrum of Accounting coursework. With a
              team well-versed in accounting principles, ACS delivers tailored
              solutions that align with the specific requirements of your
              assignments. Whether you're navigating financial statements,
              auditing processes, or tax regulations, trust ACS for expert
              assistance and success in your Accounting studies.
            </p>
            <div className={Style.AboutAssignment_info_list}>
              <ul>
                <li>Auditing</li>
                <li>Finance</li>
                <li>Taxation</li>
              </ul>
              <ul>
                <li>MYOB/Perdisco Accounting</li>
                <li>Managerial Accounting</li>
                <li>Corporate Accounting</li>
              </ul>
            </div>
          </div>
        )}
        {generalSubjects && (
          <div className={Style.AboutAssignment_info}>
            <h4>General Subjects</h4>
            <p>
              In the realm of General Subjects, Arc Creatif Solution (ACS) is
              your versatile partner, offering support across a wide range of
              assignment challenges. From comprehensive essays to detailed case
              studies and research papers, our services cover the diverse
              landscape of coursework in general subjects. With a team of adept
              professionals, ACS delivers tailored solutions that align with the
              specific requirements of your assignments. Whether you're
              exploring literature, history, or social sciences, trust ACS for
              expert assistance and success in your general subject studies.
            </p>
            <div className={Style.AboutAssignment_info_list}>
              <ul>
                <li>Political Science</li>
                <li>International Relations</li>
                <li>Social Science</li>
                <li>Public Policy</li>
                <li>Geography</li>
                <li>Psychology</li>
              </ul>
              <ul>
                <li>Education</li>
                <li>Humanities</li>
                <li>Cultural and Communication Studies</li>
                <li>Hiatory</li>
                <li>Antrology</li>
                <li>Philosophy</li>
                <li>Religion</li>
              </ul>
            </div>
          </div>
        )}
      </div>
      <div className={Style.AboutAssignment_right}>
        <div className={Style.AboutAssignment_right_img}>
          <img src={assignmentCover} height={600} width={370} />
        </div>
      </div>
    </div>
  );
};

export default AboutAssignment;
