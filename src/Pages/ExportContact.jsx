import React, { useEffect } from "react";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import { useMediaQuery } from "@mui/system";
import { Helmet } from "react-helmet-async";

const ExportContact = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  useEffect(() => {
    window.scrollTo(0, 0);
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
  }, []);
  return (
    <div class="wrapper">
      <TopBar />
      <Helmet>
        <title>Export LinkedIn Email contacts through | Jarvis Reach</title>
        <meta
          name="description"
          content="Learn how to export LinkedIn email contacts using intelligent Jarvis Reach Extension, know everything step by step | Jarvis Reach."
        />
      </Helmet>
      <section id="contactFinder" class="email-finder-one">
        <div class="container">
          <div class="row d-flex align-items-center">
            <div class="col-md-6">
              <div class="email-finder">
                <h1>
                  Merge all your targeted profiles into a single email list{" "}
                </h1>
                <p>
                  Extract essential emails and phone numbers from LinkedIn,
                  Sales Navigator, or Recruiter profiles, and export them into
                  manageable lists for your convenience.
                </p>
                <a
                  href={`${import.meta.env.VITE_JARVIS_SIGNUP}`}
                  class="banner-btn"
                >
                  Start Now, It’s Free
                </a>
              </div>
            </div>
            <div class="col-md-6">
              <div class="email-banner">
                <div class="find-mail">
                  <img src="/assets/easy-peasy-new.png" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="joinCompany">
        <div class="container">
          <div class="join-tittle">
            <h6>
              Join 200,000 companies connecting directly with business
              professionals using Jarvis Reach.
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
        <div class="container">
          <div class="row">
            <div class="col-lg-10 offset-lg-1">
              <div class="row find-add-section">
                <div class="col-lg-6">
                  <div class="find-address-left">
                    <img src="/images/adding.png" class="img-fluid" />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="find-address-right">
                    <h3>
                      Keep your connections stored where you need them most{" "}
                    </h3>
                    <p>
                      With Jarvis Reach, you can effortlessly save all your
                      1st-degree LinkedIn connections with just one click.
                    </p>
                  </div>
                </div>
              </div>

              <div class="row find-add-section">
                <div class="col-lg-6">
                  <div class="bulk-contact-left">
                    <h3>
                      Craft targeted lists tailored to your ideal customer
                      profile{" "}
                    </h3>
                    <p>
                      Develop precise lead lists based on industry, location, or
                      company size utilizing your LinkedIn search results.
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="bulk-contact-right">
                    <img
                      src="https://d2ds8yldqp7gxv.cloudfront.net/lead/Illustration.svg"
                      class="img-fluid"
                    />
                  </div>
                </div>
              </div>

              <div class="row find-add-section">
                <div class="col-lg-6">
                  <div class="find-address-left text-center">
                    <img
                      src="https://d2ds8yldqp7gxv.cloudfront.net/lead/customer-profile.png"
                      class="img-fluid"
                    />
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="find-address-right">
                    <h3>
                      Obtain over 40 data points per contact through our
                      platform.{" "}
                    </h3>
                    <p>
                      Utilize our dashboard to delve into the specific details
                      crucial to your lead generation campaign.
                    </p>
                  </div>
                </div>
              </div>

              <div class="row find-add-section">
                <div class="col-lg-6">
                  <div class="bulk-contact-left">
                    <h3>Access complimentary prospects indefinitely </h3>
                    <p>
                      Our free plan offers 100 email finder credits every month.
                      Completely free, forever.
                    </p>
                  </div>
                </div>
                <div class="col-lg-6">
                  <div class="bulk-contact-right">
                    <img src="/images/multiple-select.png" class="img-fluid" />
                  </div>
                </div>
              </div>

              <div class="sales-nav-one">
                <h4>
                  Jarvis Reach seamlessly integrates with Sales Navigator and
                  Recruiter
                </h4>
                <p>
                  supporting bulk extraction from lead lists and pipelines
                  across all LinkedIn versions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="blueSection">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="simple-fast">
                <h3>SIMPLE & FAST </h3>
                <h2>Effortlessly Manage Your Leads</h2>
                <h4>
                  Enhance your productivity with unparalleled lead management
                  capabilities.
                </h4>
                <div class="simple-fast-img">
                  <img src="/images/simple-fast-one.png" class="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="howItwork" class="how-margin-top">
        <div class="container">
          <div class="start-extetion-tittle">
            <h3>Simple and straightforward! </h3>
            <h2>How it operates</h2>
          </div>
          <div class="row">
            <div class="col-md-4">
              <div class="how-works">
                <div class="number-one">01</div>
                <div class="how-it-work">
                  <img src="/images/registered.png" class="img-fluid" />
                  <h3>Register and receive free credits for life </h3>
                  <p>Immediately receive 100 email finder credits</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="how-works">
                <div class="number-one">02</div>
                <div class="how-it-work">
                  <img src="/images/application.png" class="img-fluid" />
                  <h3>Install the browser extension </h3>
                  <p>Launch Jarvis Reach directly within LinkedIn to begin</p>
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="how-works">
                <div class="number-one">03</div>
                <div class="how-it-work">
                  <img src="/images/search.png" class="img-fluid" />
                  <h3>Search and store contact information </h3>
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
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <div class="join-free">
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

export default ExportContact;
