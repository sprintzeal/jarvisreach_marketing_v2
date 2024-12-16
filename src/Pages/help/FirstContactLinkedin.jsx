import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import { CircularProgress, useMediaQuery } from "@mui/material";
import {
  useGetCategoryAnswerQuery,
  useGetHelpQuery,
} from "../../slices/adminSlice";
import Footer from "../../components/Footer";
import { daysAgo } from "../../utils/timeAgo";
import TopBar from "../../components/TopBar";
import { Helmet } from "react-helmet-async";

const FirstContactLinkedin = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { id } = location.state || {}; 

  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const { auth } = useSelector((state) => state.auth); 
  const { data, isLoading, isSuccess } = useGetHelpQuery(id);
  const { data: questionsData, isSuccess: categoryQuestionSuccess } =
    useGetCategoryAnswerQuery({ id });

  useEffect(() => {
    if (categoryQuestionSuccess) {
      console.log("useGetCategoryAnswerQuery :", questionsData);
    }
  }, [id]);

  useEffect(() => {
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
        <title>
          Jarvis Reach Help Center |{" "}
          {`${questionsData?.result?.question
              ? questionsData?.result?.question
              : ""
            }`}
        </title>
        <meta
          name="description"
          content="Jarvis Reach Posts on help center almost everyday. We bring new updates on how to help yourself, and set up your account by yourself without any external help."
        />
      </Helmet>
      <section id="helpCenter">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="row mb-5">
                <div className="col-lg-8 mx-auto">
                  {/* <div id="searchingHelp">
                    <div className="input-group">
                      <input
                        type="search"
                        placeholder="Search for articles..."
                        aria-describedby="button-addon1"
                        className="form-control border-0 bg-search"
                      />
                      <div className="input-group-append">
                        <button
                          id="button-addon1"
                          type="submit"
                          className="btn"
                        >
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="getCollection">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div id="getBreadcrumb">
                <nav
                  style={{ backgroundColor: "transparent" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li
                      className="breadcrumb-item"
                      onClick={() => navigate("/help-center")}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      All Collections
                    </li>
                    {categoryQuestionSuccess && questionsData?.result && (
                      <>
                        <li
                          onClick={() => navigate(-1)}
                          className="breadcrumb-item active"
                          aria-current="page"
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          {questionsData?.result?.category.categoryName}
                        </li>
                        <li
                          className="breadcrumb-item active"
                          aria-current="page"
                        >
                          {questionsData?.result?.question}
                        </li>
                      </>
                    )}
                  </ol>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="firstgetlinked">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              {!categoryQuestionSuccess ? (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    padding: "20px",
                    backgroundColor: "transparent",
                    // height: "100vh",
                  }}
                >
                  <CircularProgress
                    style={{ color: "red", fontSize: "100px" }}
                  />
                </div>
              ) : (
                <div className="row">
                  <div className="col-lg-8">
                    {categoryQuestionSuccess && questionsData?.result && (
                      <>
                        <div className="get-start-self">
                          <h2>{questionsData?.result?.question}</h2>
                          <p>
                            Updated {daysAgo(questionsData?.result?.createdAt)}
                          </p>
                        </div>
                        <div
                          className="discover-box"
                          dangerouslySetInnerHTML={{
                            __html: questionsData?.result?.answer,
                          }}
                        ></div>
                      </>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      <Footer />
      {/* <section id="leadFooter">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <div className="foot-logo">
                <img
                  src="https://d2ds8yldqp7gxv.cloudfront.net/lead/jarvis-logo.png"
                  alt="logo"
                  width="200"
                  height="33"
                />
              </div>
            </div>
            <div className="col-md-3">
              <div className="lead-foot-list">
                <h4>Support</h4>
                <ul>
                  <li>
                    <a href="integrations.html">Install Extension</a>
                  </li>
                  <li>
                    <a href="help.html">Help Center</a>
                  </li>
                  <li>
                    <a href="#">Tutorials</a>
                  </li>
                  <li>
                    <a href="#">Blog</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="lead-foot-list">
                <h4>Product</h4>
                <ul>
                  <li>
                    <a href="email-finder.html">Email Finder</a>
                  </li>
                  <li>
                    <a href="pricing.html">Pricing</a>
                  </li>
                  <li>
                    <a href="#">Changelog</a>
                  </li>
                  <li>
                    <a href="affiliates.html">Affiliate Program</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3">
              <div className="lead-foot-list">
                <h4>Legal</h4>
                <ul>
                  <li>
                    <a href="terms-condition.html">Terms of Service</a>
                  </li>
                  <li>
                    <a href="privacy-policy.html"> Privacy Policy</a>
                  </li>
                  <li>
                    <a href="gdpr-compliance.html">GDPR Compliance</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="row pt-4 line-top">
            <div className="col-md-6">
              <div className="leda-copy">
                <p>Â© 2024 Jarvis Reach Americas Inc. - All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-md-6">
              <div className="social-link">
                <ul>
                  <li>
                    <a href="">
                      <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-brands fa-facebook-f"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-brands fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-brands fa-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a href="">
                      <i className="fa-brands fa-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default FirstContactLinkedin;