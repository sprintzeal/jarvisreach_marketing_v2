import { useMediaQuery } from "@mui/system";
import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import { Helmet } from "react-helmet-async";

const GDPRCompliance = () => {
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
        <title>GDPR Compliance | Jarvis Reach</title>
        <meta
          name="description"
          content="GDPR Compliance, We maintain and follow strictly and adhere to GDPR compliantly. Know everything about GDPR | Jarvis Reach."
        />
      </Helmet>
      <section id="gdprCompany">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="gdpr-company-list">
                <h1>GDPR Compliance</h1>
                <h2>Last update: July 19, 2018</h2>
                <ul>
                  <li>
                    <i className="fa-solid fa-circle-right"></i> The EU General
                    Data Protection Regulation (GDPR) represents the most
                    significant overhaul of EU data privacy laws in many years.
                    It was implemented on May 25, 2018.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-right"></i> The Jarvis
                    Reach team dedicated substantial effort to getting ready for
                    GDPR and continues to work diligently to meet its
                    requirements
                  </li>
                </ul>
              </div>

              <div className="gdpr-company-list">
                <h3>What is the GDPR?</h3>
                <ul>
                  <li>
                    <i className="fa-solid fa-circle-right"></i> The General
                    Data Protection Regulation (GDPR) is a piece of EU
                    legislation focused on data protection and privacy for all
                    individuals residing in the European Union.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-right"></i> This regulation
                    is designed to give EU residents greater control over their
                    personal information. For businesses, the GDPR provides a
                    standardized set of rules across the EU.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-right"></i> The GDPR came
                    into force on May 25, 2018, superseding the 1995 Data
                    Protection Directive.
                  </li>
                </ul>
              </div>

              <div className="gdpr-company-list">
                <h3>Does this affect me?</h3>
                <ul>
                  <li>
                    <i className="fa-solid fa-circle-right"></i> The GDPR
                    regulation is applicable to the data of any EU resident,
                    regardless of the location of the data processor or
                    controller.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-right"></i> Therefore, if
                    you are using Jarvis Reach from the U.S. to contact other
                    U.S. corporations, the regulation does not impact you.
                    However, if any of your customers or leads are based in the
                    EU, you need to be mindful of GDPR.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-right"></i> In reality,
                    most companies must consider the implications of GDPR.
                  </li>
                </ul>
              </div>

              <div className="gdpr-company-list">
                <h3>How Jarvis Reach is complying with the GDPR</h3>
                <ul>
                  <li>
                    <i className="fa-solid fa-circle-right"></i> Although the
                    GDPR specifically applies to the data of EU residents, we
                    have chosen to broadly implement the regulation's
                    requirements.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-right"></i> This approach
                    means that, except in rare instances, we do not limit any
                    privacy-related features based on the geographical location
                    of a data subject.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-right"></i> Below are some
                    of the measures we've undertaken to ensure compliance:
                  </li>
                </ul>
              </div>

              <div className="gdpr-company-list">
                <h3>Security</h3>
                <ul>
                  <li>
                    <i className="fa-solid fa-circle-right"></i> We prioritize
                    the security of the data we handle with the utmost
                    seriousness. Our entire infrastructure is securely
                    positioned behind firewalls and protection mechanisms.
                    Additionally, all staff connections require two-factor
                    authentication.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-right"></i> Furthermore, we
                    utilize several third-party services that offer a Web
                    Application Firewall (WAF) and systematically block
                    potential threats.
                  </li>
                </ul>
              </div>

              <div className="gdpr-secure-list">
                <h3>Our processing is done exclusively in the EU</h3>
                <p>
                  We exclusively store and process all our data within the EU.
                  Even our off-site backups are kept within EU borders.
                </p>

                <div className="gdpr-secure-list-para">
                  <h4>Log retention</h4>
                  <p>
                    To enhance, debug, or prevent fraud on Jarvis Reach
                    services, we maintain various logs. We now ensure that these
                    logs are destroyed within four months of their collection
                    date and use them solely for monitoring and debugging
                    purposes.
                  </p>
                </div>

                <div className="gdpr-secure-list-para">
                  <h4>Data portability</h4>
                  <p>
                    The GDPR grants users the right to download any data they
                    have provided to a particular service, facilitating easier
                    migration to other services.
                  </p>
                  <p>
                    We believe this is an excellent concept, and Jarvis Reach
                    has always enabled users to download their data.
                  </p>
                </div>

                <div className="gdpr-secure-list-para">
                  <h4>Systematic pseudonymisation of non-public data</h4>
                  <p>
                    Our applications extensively pseudonymize data to protect
                    the privacy of data subjects. Any attributes that do not
                    need to retain their original form are truncated to
                    eliminate any chance of being linked back to a specific
                    individual.
                  </p>
                </div>

                <div className="gdpr-secure-list-para">
                  <h4>Right of erasure</h4>
                  <p>
                    As we operate with publicly accessible web data, any
                    information that has been deleted from a website is also
                    eliminated from our database. However, for individuals who
                    wish to expedite the removal of specific data from our
                    index, we provide a straightforward and effective process to
                    assert control over email addresses associated with that
                    data. This empowers individuals to either revise the
                    information or request its complete removal from our
                    database.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default GDPRCompliance;
