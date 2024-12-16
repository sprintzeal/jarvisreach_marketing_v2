import { useMediaQuery } from "@mui/system";
import React, { useEffect, useState } from "react";
import {
  FaCheckCircle,
  FaQuoteLeft,
  FaQuoteRight,
  FaStar,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import { Avatar, CircularProgress } from "@mui/material";
import { usePlansMarketingQuery } from "../slices/customerSlice";
import Testimonials from "../components/Testimonials";
import { Helmet } from "react-helmet-async";

const Prices = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [togglePlan, setTogglePlan] = useState("month");
  const {
    data: plansData,
    isSuccess: plansSuccess,
    isLoading: plansLoading,
    isFetching: plansFetching,
  } = usePlansMarketingQuery({
    duration: togglePlan,
  });

  const { auth } = useSelector((state) => state.auth);
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

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
        <title>Plans and Pricing | Jarvis Reach</title>
        <meta
          name="description"
          content="Explore various plans and pricings along with features which suits your business needs | Jarvis Reach."
        />
      </Helmet>

      <section id="prizingSection">
        <div className="container-fluid">
          <div className="pricing-tittle">
            <h1>High quality targeted leads</h1>
          </div>

          <div className="user-main-sectiom-one">
            <div className="row">
              <div className="col-xl-12">
                <ul
                  className="nav nav-pills navtab-bg"
                  id="monthSix"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: "60px",
                  }}
                >
                  <li className="nav-item">
                    <a
                      style={{
                        cursor: "pointer",
                      }}
                      data-bs-toggle="tab"
                      aria-expanded="false"
                      className={`nav-link ${
                        togglePlan === "month" ? "active" : ""
                      }`}
                      onClick={() => setTogglePlan("month")}
                    >
                      Monthly
                    </a>
                  </li>
                  <li
                    className="nav-item"
                    style={{
                      position: "relative",
                    }}
                  >
                    <a
                      data-bs-toggle="tab"
                      aria-expanded="true"
                      className={`nav-link ${
                        togglePlan === "year" ? "active" : ""
                      }`}
                      onClick={() => setTogglePlan("year")}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      Annually
                    </a>
                    <p
                      style={{
                        position: "absolute",
                        top: "90%",
                        right: "18%",
                        padding: "1px 10px",
                        borderRadius: "10px",
                        backgroundColor: "yellow",
                        fontSize: "12px",
                      }}
                    >
                      save 20%
                    </p>
                  </li>
                </ul>
                <div className="tab-content">
                  <div className="tab-pane mb-5" id="monthly">
                    <div className="row">
                      {plansData &&
                        plansData.result &&
                        plansData.result.length > 0 &&
                        plansData.result.map((plan, index) => (
                          <div
                            className="col-md-6 col-lg-4 col-xl-3 mb-3"
                            style={{
                              position: "relative",
                              marginTop:
                                plan?.result?.length > 4 ? "50px" : "0",
                            }}
                          >
                            {plan?.name === "Advance" ? (
                              <div
                                style={{
                                  position: "absolute",
                                  top: "1%",
                                  left: "3.5%",
                                  right: "0",
                                  backgroundColor: "#000",
                                  padding: "10px",
                                  borderRadius: "5px 5px 0 0 ",
                                  zIndex: "100",
                                  width: "93.2%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              >
                                <h4
                                  style={{
                                    color: "white",
                                    fontSize: "20px",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Most Popular{" "}
                                </h4>
                              </div>
                            ) : (
                              <div
                                style={{
                                  position: "absolute",
                                  top: "7%",
                                  left: "0%",
                                  right: "0",
                                  margin: "auto",
                                  backgroundColor: "#000",
                                  padding: "5px",
                                  borderRadius: "5px 5px 0 0 ",
                                  zIndex: "100",
                                  width: "93.2%",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                }}
                              ></div>
                            )}
                            <div
                              className="free-price"
                              style={{
                                height: "500px",
                                marginTop: "40px",
                              }}
                            >
                              <div className="free-price-top">
                                <div className="try-free">
                                  <div
                                    className="try-free-left
                                                    "
                                  >
                                    <h2
                                      style={{
                                        fontSize: isSmallScreen
                                          ? "20px"
                                          : "22px",
                                      }}
                                    >
                                      {plan.name}
                                    </h2>

                                    {plan?.interval === "year" ? (
                                      <p
                                        style={{
                                          minHeight: "30px",
                                        }}
                                      >
                                        Billed Annually
                                      </p>
                                    ) : (
                                      <p style={{ minHeight: "30px" }}></p>
                                    )}
                                  </div>

                                  <div className="try-free-right">
                                    <h2>{"$" + plan?.price?.unit_amount}</h2>

                                    <p>{!plansLoading && "Per Month"}</p>
                                  </div>
                                </div>
                                <div className="credit-month">
                                  <p>
                                    {plan?.credits} Credits / {plan?.interval}
                                  </p>
                                </div>
                              </div>
                              <div className="free-price-btm">
                                <div className="also-include">
                                  <h5>Also Includes:</h5>
                                  <div className="also-top-list">
                                    <ul
                                      style={{
                                        height: "250px",
                                        overflowY:
                                          plan?.product?.marketing_features
                                            ?.length > 4
                                            ? "scroll"
                                            : "hidden",
                                        scrollbarWidth: "10px",
                                      }}
                                      className="plan_marketing_features"
                                    >
                                      {plan?.product?.marketing_features?.map(
                                        (sale, index) => (
                                          <li
                                            style={{
                                              whiteSpace: "nowrap",
                                              overflowX: "scroll",
                                              scrollbarWidth: "none",
                                            }}
                                          >
                                            <i className="fa-solid fa-circle-check"></i>{" "}
                                            {sale?.name}
                                          </li>
                                        )
                                      )}
                                    </ul>
                                  </div>
                                  {/* <div className="also-btm-list">
                                <ul>
                                  <li>
                                    <i className="fa-solid fa-xmark"></i> Direct
                                    & Company Phones
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-xmark"></i> Export
                                    Contacts to CSV/Excel
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-xmark"></i>{" "}
                                    Integrations with apps
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-xmark"></i>{" "}
                                    Multiple users
                                  </li>
                                </ul>
                              </div> */}
                                </div>
                              </div>
                            </div>
                            {plansFetching && (
                              <div
                                style={{
                                  position: "absolute",
                                  top: "0px",
                                  height: "100%",
                                  width: "100%",
                                  background: "white",
                                  display: "flex",
                                  alignItems: "center",
                                  justifyContent: "center",
                                  opacity: ".7",
                                }}
                              >
                                <CircularProgress />
                              </div>
                            )}
                          </div>
                        ))}
                      {!plansFetching &&
                        !plansLoading &&
                        !plansData?.result?.length && (
                          <div
                            style={{
                              display: "flex",
                              justifyContent: "center",
                              alignItems: "center",
                            }}
                          >
                            <h1>No Plans Available</h1>
                          </div>
                        )}
                      {plansLoading && (
                        <div
                          style={{
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                          }}
                        >
                          <span
                            className="spinner-border spinner-border-lg"
                            role="status"
                            aria-hidden="true"
                          ></span>
                        </div>
                      )}
                      {/* <div className="col-md-6 col-lg-4 col-xl-3 mb-3">
                        <div className="free-price">
                          <div className="free-price-top">
                            <div className="try-free">
                              <div className="try-free-left">
                                <h2>Starter</h2>
                                <p>Get Started</p>
                              </div>
                              <div className="try-free-right">
                                <h2>$39</h2>
                                <p>/month</p>
                              </div>
                            </div>
                            <div className="credit-month">
                              <p>1,000 Credits / month</p>
                            </div>
                          </div>
                          <div className="free-price-btm">
                            <div className="also-include">
                              <h5>Also Includes:</h5>
                              <div className="also-top-list">
                                <ul>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Contacts Manager
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Direct & Company Emails
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Direct & Company Phones
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Export Contacts to CSV/Excel
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Integrations with apps
                                  </li>
                                </ul>
                              </div>
                              <div className="also-btm-list">
                                <ul>
                                  <li>
                                    <i className="fa-solid fa-xmark"></i>{" "}
                                    Multiple users
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3 mb-3">
                        <div className="free-price">
                          <div className="free-price-top">
                            <div className="try-free">
                              <div className="try-free-left">
                                <h2>Advanced</h2>
                                <p>Move faster</p>
                              </div>
                              <div className="try-free-right">
                                <h2>$79</h2>
                                <p>/month</p>
                              </div>
                            </div>
                            <div className="credit-month">
                              <p>4,000 Credits / month</p>
                            </div>
                          </div>
                          <div className="free-price-btm">
                            <div className="also-include">
                              <h5>Also Includes:</h5>
                              <div className="also-top-list">
                                <ul>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Contacts Manager
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Direct & Company Emails
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Direct & Company Phones
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Export Contacts to CSV/Excel
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Integrations with apps
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Multiple users{" "}
                                    <span className="badge text-bg-success">
                                      Up to 3
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3 mb-3">
                        <div className="free-price">
                          <div className="free-price-top">
                            <div className="try-free">
                              <div className="try-free-left">
                                <h2>Pro</h2>
                                <p>Time to scale</p>
                              </div>
                              <div className="try-free-right">
                                <h2>$119</h2>
                                <p>/month</p>
                              </div>
                            </div>
                            <div className="credit-month">
                              <p>10,000 Credits / month</p>
                            </div>
                          </div>
                          <div className="free-price-btm">
                            <div className="also-include">
                              <h5>Also Includes:</h5>
                              <div className="also-top-list">
                                <ul>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Contacts Manager
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Direct & Company Emails
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Direct & Company Phones
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Export Contacts to CSV/Excel
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Integrations with apps
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Multiple users{" "}
                                    <span className="badge text-bg-success">
                                      Up to 15
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div> */}
                    </div>
                  </div>
                  {/* <div className="tab-pane show active" id="six-month">
                    <div className="row">
                      <div className="col-md-6 col-lg-4 col-xl-3  mb-3">
                        <div className="free-price">
                          <div className="free-price-top">
                            <div className="try-free">
                              <div className="try-free-left">
                                <h2>Free</h2>
                                <p>Try it for free</p>
                              </div>
                              <div className="try-free-right">
                                <h2>$0</h2>
                                <p>/Annually</p>
                              </div>
                            </div>
                            <div className="credit-month">
                              <p>50 Credits / Annually</p>
                            </div>
                          </div>
                          <div className="free-price-btm">
                            <div className="also-include">
                              <h5>Also Includes:</h5>
                              <div className="also-top-list">
                                <ul>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Contacts Manager
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Direct & Company Emails
                                  </li>
                                </ul>
                              </div>
                              <div className="also-btm-list">
                                <ul>
                                  <li>
                                    <i className="fa-solid fa-xmark"></i> Direct
                                    & Company Phones
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-xmark"></i> Export
                                    Contacts to CSV/Excel
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-xmark"></i>{" "}
                                    Integrations with apps
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-xmark"></i>{" "}
                                    Multiple users
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3 mb-3">
                        <div className="free-price">
                          <div className="free-price-top">
                            <div className="try-free">
                              <div className="try-free-left">
                                <h2>Starter</h2>
                                <p>Get Started</p>
                              </div>
                              <div className="try-free-right">
                                <h2>$59</h2>
                                <p>/Annually</p>
                              </div>
                            </div>
                            <div className="credit-month">
                              <p>3,000 Credits / Annually</p>
                            </div>
                          </div>
                          <div className="free-price-btm">
                            <div className="also-include">
                              <h5>Also Includes:</h5>
                              <div className="also-top-list">
                                <ul>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Contacts Manager
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Direct & Company Emails
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Direct & Company Phones
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Export Contacts to CSV/Excel
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Integrations with apps
                                  </li>
                                </ul>
                              </div>
                              <div className="also-btm-list">
                                <ul>
                                  <li>
                                    <i className="fa-solid fa-xmark"></i>{" "}
                                    Multiple users
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3 mb-3">
                        <div className="free-price">
                          <div className="free-price-top">
                            <div className="try-free">
                              <div className="try-free-left">
                                <h2>Advanced</h2>
                                <p>Move faster</p>
                              </div>
                              <div className="try-free-right">
                                <h2>$99</h2>
                                <p>/Annually</p>
                              </div>
                            </div>
                            <div className="credit-month">
                              <p>6,000 Credits / Annually</p>
                            </div>
                          </div>
                          <div className="free-price-btm">
                            <div className="also-include">
                              <h5>Also Includes:</h5>
                              <div className="also-top-list">
                                <ul>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Contacts Manager
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Direct & Company Emails
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Direct & Company Phones
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Export Contacts to CSV/Excel
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Integrations with apps
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Multiple users{" "}
                                    <span className="badge text-bg-success">
                                      Up to 3
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6 col-lg-4 col-xl-3 mb-3">
                        <div className="free-price">
                          <div className="free-price-top">
                            <div className="try-free">
                              <div className="try-free-left">
                                <h2>Pro</h2>
                                <p>Time to scale</p>
                              </div>
                              <div className="try-free-right">
                                <h2>$319</h2>
                                <p>/Annually</p>
                              </div>
                            </div>
                            <div className="credit-month">
                              <p>30,000 Credits / Annually</p>
                            </div>
                          </div>
                          <div className="free-price-btm">
                            <div className="also-include">
                              <h5>Also Includes:</h5>
                              <div className="also-top-list">
                                <ul>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Contacts Manager
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Direct & Company Emails
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Direct & Company Phones
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Export Contacts to CSV/Excel
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Integrations with apps
                                  </li>
                                  <li>
                                    <i className="fa-solid fa-circle-check"></i>{" "}
                                    Multiple users{" "}
                                    <span className="badge text-bg-success">
                                      Up to 15
                                    </span>
                                  </li>
                                </ul>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div> */}
                </div>
              </div>
              {/* <!-- end col --> */}
            </div>

            {/* <!-- end row --> */}
          </div>

          <div className="row pt-5">
            <div className="col-md-12">
              <div id="joinBrand">
                <div
                  className="owl-carousel owl-theme join-company"
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    flexDirection: isSmallScreen ? "column" : "row",
                    gap: "10px",
                  }}
                >
                  <div className="join">
                    <img src="/assets/brands/brand-one.png" />
                  </div>
                  <div className="join">
                    <img src="/assets/brands/brand-two.png" />
                  </div>
                  <div className="join">
                    <img src="/assets/brands/brand-3.png" />
                  </div>
                  <div className="join">
                    <img src="/assets/brands/brand-4.png" />
                  </div>
                  <div className="join">
                    <img src="/assets/brands/brand-5.png" />
                  </div>
                  <div className="join">
                    <img src="/assets/brands/brand-6.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Testimonials />

      <section id="joinToday">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="join-free">
                <h2>Join Today. It’s free</h2>
                <p>
                  Get started and find reliable contact information in LinkedIn
                  for free, with classified and validated email addresses and
                  phone numbers.
                </p>
                <a href={`${import.meta.env.VITE_JARVIS_SIGNUP}`}>
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

export default Prices;
