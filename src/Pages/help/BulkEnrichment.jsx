import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightToBracket, FaChevronRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import TopBar from "../../components/TopBar";

const BulkEnrichment = () => {
  const navigate = useNavigate();
  const { auth } = useSelector((state) => state.auth);

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

      <section id="helpCenter">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="row mb-5">
                <div className="col-lg-8 mx-auto">
                  <div id="searchingHelp">
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
                  </div>
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
                    <li className="breadcrumb-item">
                      <a href="#">All Collections</a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      Bulk Enrichment
                    </li>
                  </ol>
                </nav>
              </div>

              <div className="get-articale">
                <p>
                  <i className="fa-solid fa-file-circle-check"></i>
                </p>
                <h2>Bulk Enrichment</h2>
                <p>7 articles</p>
              </div>

              <div className="get-list-group">
                <div className="get-links">
                  <a
                    onClick={() => navigate("/bulk-on-sale-navigator")}
                    style={{ cursor: "pointer" }}
                  >
                    Bulk Enrichment on Sales Navigator
                    <span>
                      <FaChevronRight
                        style={{ fontSize: "10px", color: "#000" }}
                      />
                    </span>
                  </a>
                  <a href="">
                    What are LinkedIn limits?
                    <span>
                      <FaChevronRight
                        style={{ fontSize: "10px", color: "#000" }}
                      />
                    </span>
                  </a>
                  <a href="">
                    What are LinkedIn limits?{" "}
                    <span>
                      <FaChevronRight
                        style={{ fontSize: "10px", color: "#000" }}
                      />
                    </span>
                  </a>
                  <a href="">
                    Import Data from a List of URLs using Jarvis Reach{" "}
                    <span>
                      <FaChevronRight
                        style={{ fontSize: "10px", color: "#000" }}
                      />
                    </span>
                  </a>
                  <a href="">
                    Bulk Enrichment over LinkedIn RPS{" "}
                    <span>
                      <FaChevronRight
                        style={{ fontSize: "10px", color: "#000" }}
                      />
                    </span>
                  </a>
                  <a href="">
                    Bulk Enrichment over LinkedIn{" "}
                    <span>
                      <FaChevronRight
                        style={{ fontSize: "10px", color: "#000" }}
                      />
                    </span>
                  </a>
                  <a href="">
                    Bulk Enrichment over Recruiter Lite{" "}
                    <span>
                      <FaChevronRight
                        style={{ fontSize: "10px", color: "#000" }}
                      />
                    </span>
                  </a>
                  <a href="">
                    API{" "}
                    <span>
                      <FaChevronRight
                        style={{ fontSize: "10px", color: "#000" }}
                      />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="leadFooter">
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
                <p>© 2024 Jarvis Reach Americas Inc. - All Rights Reserved.</p>
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
      </section>
    </div>
  );
};

export default BulkEnrichment;
