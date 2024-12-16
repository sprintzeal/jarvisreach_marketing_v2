import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  CircularProgress,
  Dialog,
  Menu,
  MenuItem,
  useMediaQuery,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaChevronDown,
  FaChevronUp,
  FaHamburger,
} from "react-icons/fa";
import {
  FaArrowRightToBracket,
  FaCheck,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import { MenuBook, Scale } from "@mui/icons-material";
import TopBar from "../components/TopBar";
import Testimonials from "../components/Testimonials";
import Joyride, { ACTIONS, EVENTS, STATUS } from "react-joyride";
import MarketingAnimation from "../components/MarketingAnimation";
import { Helmet } from "react-helmet-async";

const SplashScreen = () => {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { auth } = useSelector((state) => state.auth);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  useEffect(() => {
    // Add here title and meta description
    // var PageTitle = document.createElement("title");
    // PageTitle.innerHTML =
    //   "B2B Sales Intelligent Engagement Platform | Jarvis Reach";
    // document.head.appendChild(PageTitle);

    // var PageMetaDescription = document.createElement("meta");
    // PageMetaDescription.name = "description";
    // PageMetaDescription.content =
    //   "Jarvis Reach is a free B2B lead generation tool with customizable workflows, CRM integration, data enrichment, and bulk email extraction for marketers and small businesses.";
    // document.head.appendChild(PageMetaDescription);

    // Add Google Analytics script to the component
    const script1 = document.createElement("script");
    script1.async = true;
    script1.src = "https://www.googletagmanager.com/gtag/js?id=G-1ZY8C1HBV5";

    const script2 = document.createElement("script");
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'G-1ZY8C1HBV5');
    `;

    document.head.appendChild(script1);
    document.head.appendChild(script2);

    // Clean up the scripts when the component unmounts
    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []); // The empty dependency array ensures it runs only once

  return (
    <div className="wrapper">
      <TopBar />
      <Helmet>
        <title>B2B Sales Intelligent Engagement Platform | Jarvis Reach</title>
        <meta
          name="description"
          content="Jarvis Reach is a free B2B lead generation tool with customizable workflows, CRM integration, data enrichment, and bulk email extraction for marketers and small businesses."
        />
      </Helmet>
      <section id="superCharge" className="super-charge">
        <div className="container">
          {/* <div className="website">
            <img
              src="https://d2ds8yldqp7gxv.cloudfront.net/lead/website.png"
              className="img-fluid"
            />
          </div> */}
          <div className="row d-flex align-items-center">
            <div className="col-md-7">
              <div className="super-charger">
                <h1>Elevate your LinkedIn prospecting </h1>
                <p>
                  Leverage Jarvis Reach to obtain email addresses for your
                  LinkedIn prospects, even if you're not yet connected.
                </p>
                <a
                  onClick={() =>
                    (window.location.href = `${
                      import.meta.env.VITE_JARVIS_SIGNUP
                    }`)
                  }
                  style={{
                    cursor: "pointer",
                    whiteSpace: "nowrap",
                  }}
                  className="banner-btn"
                >
                  Start Now, It’s Free
                </a>
                <ul>
                  <li>
                    <FaStar style={{ color: "#FFC107" }} />
                  </li>
                  <li>
                    <FaStar style={{ color: "#FFC107" }} />
                  </li>
                  <li>
                    <FaStar style={{ color: "#FFC107" }} />
                  </li>
                  <li>
                    <FaStar style={{ color: "#FFC107" }} />
                  </li>
                  <li>
                    <FaStar style={{ color: "#FFC107" }} />
                  </li>
                  <li>
                    <strong>1,000+</strong> App Reviews
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-5">
              <div className="lead-top-banner">
                <div className="banner-bg">
                  <img src="https://d2ds8yldqp7gxv.cloudfront.net/lead/banner.png" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="joinCompany">
        <div className="container">
          <div className="join-tittle">
            <h6>
              Join 200,000 companies connecting directly with business
              professionals using Jarvis Reach.
            </h6>
          </div>
          <div className="row">
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "10px",
                justifyContent: "center",
                alignItems: "center",
                marginTop: "20px",
                marginLeft: isSmallScreen ? "90px" : "0px",
                width: isSmallScreen ? "50%" : "100%",
              }}
            >
              <div className="join mb-2 ">
                <img src="/assets/brands/brand-one.png" />
              </div>
              <div className="join mb-2">
                <img src="/assets/brands/brand-two.png" />
              </div>
              <div className="join mb-2">
                <img src="/assets/brands/brand-3.png" />
              </div>
              <div className="join mb-2">
                <img src="/assets/brands/brand-4.png" />
              </div>
              <div className="join">
                <img src="/assets/brands/brand-5.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Marketing Animation Tour */}
      <MarketingAnimation />
      <section id="emailFinder">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-4">
              <div className="browser-img">
                <img
                  src="https://d2ds8yldqp7gxv.cloudfront.net/lead/email-finder.webp"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-7 offset-md-1">
              <div className="browser-content">
                <h3>OUR BROWSER EXTENSION </h3>
                <h2>
                  The Email Finder Preferred <br />
                  by Professionals
                </h2>
                <p>
                  Our proprietary engine locates emails and phone numbers from
                  various sources and validates them within seconds.
                </p>
                <a
                  onClick={() => navigate("/linkedin-email-finder")}
                  style={{
                    color: "red",
                    cursor: "pointer",
                  }}
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="topRated">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="top-rate">
                <h2>Top Rated</h2>
                <p>
                  Jarvis Reach consistently earns top marks on quality review
                  sites.
                </p>
                <img
                  src="https://d2ds8yldqp7gxv.cloudfront.net/lead/top-rated.webp"
                  className="img-fluid"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="easyPeasy">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-5">
              <div
                className="easy-peasy-cnt"
                style={{
                  textAlign: isSmallScreen ? "left" : "right",
                }}
              >
                <h3>EASY PEASY</h3>
                <h2>
                  Build Accurate <br />
                  Lead Lists{" "}
                </h2>
                <p>
                  Effortlessly save prospects and find contact information at
                  scale. Jarvis Reach extracts and enriches over 40 data points
                  per contact.
                </p>
                <a
                  style={{
                    cursor: "pointer",
                    color: "#ff000d",
                  }}
                  onClick={() => navigate("/export-linkedin-contacts")}
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="col-md-6 offset-md-1">
              <div className="easy-peasy-img">
                <img src="/assets/easy-peasy-new.png" className="img-fluid" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blueSection">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="simple-fast">
                <h3>SIMPLE & FAST </h3>
                <h2>Effortlessly Manage Your Leads </h2>
                <h4>
                  Enhance your productivity with unparalleled lead management
                  capabilities.
                </h4>
                <div className="simple-fast-img">
                  <img
                    src="/assets/simple-fast-one.png"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="integrationPart">
        <div className="container-fluid">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <div className="integration-left">
                <img
                  src="https://d2ds8yldqp7gxv.cloudfront.net/lead/integrations-one.png"
                  className="img-fluid"
                />
              </div>
            </div>
            <div className="col-md-4 offset-md-1">
              <div
                className="integration-cont"
                style={{
                  width: isSmallScreen ? "80%" : "100%",
                  marginLeft: isSmallScreen ? "20px" : "0px",
                }}
              >
                <h3>INTEGRATIONS</h3>
                <h2>Direct High-Quality Leads Where You Need Them </h2>
                <p>
                  Jarvis Reach seamlessly integrates with numerous apps,
                  including leading CRM, outreach, and productivity tools.
                </p>
                <a
                  onClick={() => navigate("/integrations")}
                  style={{
                    cursor: "pointer",
                    color: "#fff",
                    whiteSpace: "nowrap",
                  }}
                >
                  See our integrations
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* testimonials */}
      <Testimonials />
      <section id="joinToday">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="join-free">
                <h2>Join Today. It’s free</h2>
                <p>
                  Start now and discover dependable contact information on
                  LinkedIn for free, featuring categorized and verified email
                  addresses and phone numbers.
                </p>
                <a
                  style={{
                    cursor: "pointer",
                  }}
                  onClick={() =>
                    (window.location.href = `${
                      import.meta.env.VITE_JARVIS_SIGNUP
                    }`)
                  }
                >
                  Get started, It's Free
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default SplashScreen;
