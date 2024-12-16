import { useMediaQuery } from "@mui/system";
import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import { Helmet } from "react-helmet-async";

const EmailFinder = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

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
        <title>Email Finder | Find Email Address | Jarvis Reach</title>
        <meta
          name="description"
          content="Jarvis Reach is the go-to email finder for professionals. Discover precise, current addresses for your prospects, even if you're not connected on LinkedIn."
        />
      </Helmet>
      <section id="emailFinderpage">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <div className="email-finder">
                <h1>The go-to email finder for professionals</h1>
                <p>
                  Discover precise, current addresses for your prospects, even
                  if you're not connected on LinkedIn.
                </p>
                <a
                  href={`${import.meta.env.VITE_JARVIS_SIGNUP}`}
                  className="banner-btn"
                >
                  Start Now, It’s Free
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="email-banner">
                <div className="find-mail">
                  <img
                    src="https://d2ds8yldqp7gxv.cloudfront.net/lead/email-finder.png"
                    className="img-fluid"
                  />
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
              Join the ranks of 200,000 companies engaging business
              professionals directly through Jarvis Reach.
            </h6>
          </div>
          <div className="row">
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

      <section id="startExtention">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="start-extetion-tittle">
                <h3>Begin with our extension </h3>
                <h2>Acquire high-quality leads from LinkedIn</h2>
              </div>

              <div className="row find-add-section">
                <div className="col-lg-6">
                  <div className="find-address-left">
                    <img src="/images/mail.png" className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="find-address-right">
                    <h3>Discover all the addresses you need</h3>
                    <p>
                      Obtain phone numbers and email addresses for your 1st,
                      2nd, and 3rd+ LinkedIn connections.
                    </p>
                    <a
                      href={`${import.meta.env.VITE_JARVIS_SIGNUP}`}
                      className="leran-more"
                      style={{
                        color: "#fff",
                      }}
                    >
                      Learn more
                    </a>
                  </div>
                </div>
              </div>

              <div className="row find-add-section">
                <div className="col-lg-6">
                  <div className="bulk-contact-left">
                    <h3>Extract contacts in large quantities </h3>
                    <p>
                      Download your LinkedIn connections and their contact
                      information in bulk directly from the LinkedIn search
                      pages.
                    </p>
                    <a
                      href={`${import.meta.env.VITE_JARVIS_SIGNUP}`}
                      className="leran-more"
                      style={{
                        color: "#fff",
                      }}
                    >
                      Get started
                    </a>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="bulk-contact-right">
                    <img src="/images/adding.png" className="img-fluid" />
                  </div>
                </div>
              </div>

              <div className="row find-add-section">
                <div className="col-lg-6">
                  <div className="find-address-left text-center">
                    <img src="/images/display.png" className="img-fluid" />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="find-address-right">
                    <h3>Prevent email mix-ups</h3>
                    <p>
                      Transition seamlessly from recruiting to sales with just
                      one click, and maintain clear separation of your email
                      addresses.
                    </p>
                  </div>
                </div>
              </div>

              <div className="row find-add-section">
                <div className="col-lg-6">
                  <div className="bulk-contact-left">
                    <h3>
                      Access over 40 data <br />
                      points per contact{" "}
                    </h3>
                    <p>
                      Obtain all the pertinent information you require and
                      generate powerful segments through our dashboard.
                    </p>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="bulk-contact-right">
                    <img src="/images/access-over.png" className="img-fluid" />
                  </div>
                </div>
              </div>

              <div className="row find-add-section">
                <div className="col-lg-6">
                  <div className="find-address-left">
                    <img
                      src="/images/multiple-select.png"
                      className="img-fluid"
                    />
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="find-address-right">
                    <h3>
                      Obtain complimentary <br />
                      prospects indefinitely{" "}
                    </h3>
                    <p>
                      Our free forever plan offers 100 email finder <br />
                      credits every month.
                    </p>
                  </div>
                </div>
              </div>

              <div className="sales-nav">
                <p>
                  <i className="fa-solid fa-circle-exclamation"></i> Jarvis
                  Reach seamlessly integrates with Sales Navigator, Recruiter,
                  Recruiter Lite, or RPS.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="howItwork">
        <div className="container">
          <div className="start-extetion-tittle">
            <h3>Simple and straightforward! </h3>
            <h2>How it operates</h2>
          </div>
          <div className="row">
            <div className="col-md-4">
              <div className="how-works">
                <div className="number-one">01</div>
                <div className="how-it-work">
                  <img src="/images/registered.png" className="img-fluid" />
                  <h3>Register and receive free credits for life</h3>
                  <p>Immediately receive 100 email finder credits</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="how-works">
                <div className="number-one">02</div>
                <div className="how-it-work">
                  <img src="/images/application.png" className="img-fluid" />
                  <h3>Install the browser extension</h3>
                  <p>Launch Jarvis Reach directly within LinkedIn to begin</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="how-works">
                <div className="number-one">03</div>
                <div className="how-it-work">
                  <img src="/images/search.png" className="img-fluid" />
                  <h3>Search and store contact information</h3>
                  <p>
                    Effectively manage, organize, and export each contact using
                    our dashboard
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="joinToday">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="join-free">
                <h2>Join Today. It’s free </h2>
                <p>
                  Start now and discover dependable contact information on
                  LinkedIn for free, featuring categorized and verified email
                  addresses and phone numbers
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

export default EmailFinder;
