import React, { useState } from "react";
import { Link } from "react-router-dom";
import Style from "./Navbar.module.css";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { TiThMenuOutline } from "react-icons/ti";
import { MdDoubleArrow } from "react-icons/md";
import webLogo from "../../img/web-logo.svg";

const Navbar = () => {
  const Services = [
    { name: "Case Study", link: "/caseStudy" },
    {
      name: "Essay Writing",
      link: "essayWriting",
    },
    {
      name: "Reflective Writing",
      link: "reflectiveWriting",
    },
    {
      name: "Resume Writing",
      link: "resumeWriting",
    },
    {
      name: "Research Writing",
      link: "researchWriting",
    },
    {
      name: "Dissertation Writing",
      link: "dissertationWriting",
    },
    {
      name: "Homework Help",
      link: "homeworkHelp",
    },
    {
      name: "STATA",
      link: "stata",
    },
  ];

  const Sample = [
    {
      name: "Nursing",
    },
    {
      name: "Management",
    },
    {
      name: "Law",
    },
    {
      name: "Economics",
    },
    {
      name: "Statics",
    },
    {
      name: "Finance",
    },
    {
      name: "Marketing",
    },
  ];

  const Countries = [
    {
      name: "UK",
    },
    {
      name: "Australia",
    },
    {
      name: "Germany",
    },
    {
      name: "UAE",
    },
  ];
  const [menu, setMenu] = useState(false);
  const [services, setServices] = useState(false);
  const [sample, setSample] = useState(false);
  const [countries, setCountries] = useState(false);

  const openMenu = () => {
    if (menu) {
      setMenu(false);
    } else {
      setMenu(true);
    }
  };

  const openServices = () => {
    if (services) {
      setServices(false);
    } else {
      setServices(true);
      setSample(false);
      setCountries(false);
    }
  };

  const openSample = () => {
    if (sample) {
      setSample(false);
    } else {
      setSample(true);
      setServices(false);
      setCountries(false);
    }
  };

  const openCountries = () => {
    if (countries) {
      setCountries(false);
    } else {
      setCountries(true);
      setServices(false);
      setSample(false);
    }
  };
  return (
    <div className={Style.Navbar}>
      <div className={Style.Navbar_container}>
        <div className={Style.Navbar_container_logo}>
          <img src={webLogo} alt="web-logo" height={80} width={200} />
        </div>
        <div className={Style.Navbar_container_links}>
          <div className={Style.Navbar_container_links_items}>
            <Link to="/" className={Style.Navbar_container_links_items_items}>
              Home
            </Link>
            <Link to="/" className={Style.Navbar_container_links_items_items}>
              About Us
            </Link>
            <p onClick={() => openServices()}>
              Services {services ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </p>
            <p onClick={() => openSample()}>
              Sample {sample ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </p>
            <p onClick={() => openCountries()}>
              Countries {countries ? <IoIosArrowDown /> : <IoIosArrowUp />}
            </p>
            <Link to="/" className={Style.Navbar_container_links_items_items}>
              Contact Us
            </Link>
          </div>

          {services && (
            <div className={Style.services}>
              {Services.map((el, i) => (
                <div className={Style.services_container}>
                  <ul>
                    <li key={i + 1}>
                      <Link to={el.link}>
                        <MdDoubleArrow />
                        {el.name}
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          )}

          {sample && (
            <div className={Style.sample}>
              {Sample.map((el, i) => (
                <div className={Style.sample_container}>
                  <ul>
                    <li key={i + 1}>
                      <Link to={el.link}>
                        <MdDoubleArrow />
                        {el.name}
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          )}

          {countries && (
            <div className={Style.countries}>
              {Countries.map((el, i) => (
                <div className={Style.countries_container}>
                  <ul>
                    <li key={i + 1}>
                      <Link to={el.link}>
                        <MdDoubleArrow />
                        {el.name}
                      </Link>
                    </li>
                  </ul>
                </div>
              ))}
            </div>
          )}
        </div>

        <div className={Style.Navbar_container_menu}>
          <div className={Style.Navbar_container_menu_icon}>
            <TiThMenuOutline onClick={() => openMenu()} />
          </div>
          {menu && (
            <div className={Style.Navbar_container_menu_sidebar}>
              <div className={Style.Navbar_container_menu_sidebar_container}>
                <div className={Style.Navbar_container_links_items}>
                  <div>Home</div>
                  <div>
                    About Us <IoIosArrowDown />
                  </div>
                  <div>
                    Services <IoIosArrowDown />
                  </div>
                  <div>
                    Sample <IoIosArrowDown />
                  </div>
                  <div>
                    Countries <IoIosArrowDown />
                  </div>
                  <div>Contact Us</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
