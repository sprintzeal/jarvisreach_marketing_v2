import { useMediaQuery } from "@mui/system";
import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import { Helmet } from "react-helmet-async";

const TermOfServices = () => {
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
        <title>Terms and Condition | Terms of Service | Jarvis Reach</title>
        <meta
          name="description"
          content="Terms and Condition, Learn Jarvis Reach Business intelligent platform cancellation and refund policy, know how to use our platform etc."
        />
      </Helmet>
      <section id="gdprCompany">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="gdpr-company-list">
                <h1>Terms and Conditions</h1>
                <h2>Last updated: June 10, 2024</h2>
                <ul>
                  <li>
                    <i className="fa-solid fa-circle-right"></i> These terms and
                    conditions regulate the utilization of the Jarvis Reach
                    Services. By accessing or using any aspect of the Jarvis
                    Reach website, you are agreeing to comply with these terms
                    and conditions. If you disagree with any part of these terms
                    and conditions, you may not access or use the Services.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-right"></i> Your Account
                    When you create an account on our platform, you are
                    responsible for maintaining its security and ensuring that
                    all activities conducted under the account are legitimate.
                    Promptly report any unauthorized use or security breaches to
                    Jarvis Reach.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-right"></i> Only
                    individuals who are at least 18 years old are permitted to
                    use our Services.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-right"></i> You must
                    provide accurate and complete information during the sign-up
                    process. The creation of multiple accounts by a single user
                    is prohibited.
                  </li>
                </ul>
              </div>

              <div className="gdpr-secure-list">
                <div className="gdpr-secure-list-para">
                  <h4>General Obligations:</h4>
                  <p>
                    Your use of the web application, Chrome extension, and API
                    access is subject to these Terms of Service along with
                    additional specific terms outlined below:
                  </p>
                </div>

                <div className="gdpr-secure-list-para">
                  <h4>Damage and liability: </h4>
                  <p>
                    Jarvis Reach is not liable for any direct or indirect
                    damages resulting from your use of the service or
                    third-party products accessing data.
                  </p>
                </div>

                <div className="gdpr-secure-list-para">
                  <h4>Rate limiting: </h4>
                  <p>
                    Excessive usage may lead to the suspension of account
                    access. Jarvis Reach reserves the right to determine abuse
                    or excessive usage.
                  </p>
                </div>

                <div className="gdpr-secure-list-para">
                  <h4>Discontinuation: </h4>
                  <p>
                    Jarvis Reach may modify or discontinue access to the
                    Services with or without notice.
                  </p>
                </div>

                <div className="gdpr-secure-list-para">
                  <h4>Unacceptable Behavior: </h4>
                  <p>
                    Certain behaviors are prohibited, including but not limited
                    to reselling services without authorization, engaging in
                    illegal activities, transmitting harmful material, and
                    violating intellectual property rights.
                  </p>
                </div>

                <div className="gdpr-secure-list-para">
                  <h4>Payments and Renewal: </h4>
                  <p>
                    General Terms: By selecting an Upgrade, you agree to pay the
                    specified subscription fees. Payments are charged on a
                    pre-pay basis.
                  </p>
                </div>

                <div className="gdpr-secure-list-para">
                  <h4>Refunds Policy: </h4>
                  <p>
                    Refunds are subject to specific conditions and may be
                    considered on a case-by-case basis.
                  </p>
                </div>

                <div className="gdpr-secure-list-para">
                  <h4>Support: </h4>
                  <p>
                    Jarvis Reach provides email and chat support for technical
                    assistance. Support will be provided within a reasonable
                    timeframe.
                  </p>
                </div>

                <div className="gdpr-secure-list-para">
                  <h4>Marketing: </h4>
                  <p>
                    By using our Services, you grant Jarvis Reach a perpetual
                    worldwide license to use your company's assets and logos for
                    marketing purposes unless otherwise agreed upon in writing.
                  </p>
                </div>

                <div className="gdpr-secure-list-para">
                  <h4>Copyright Infringement: </h4>
                  <p>
                    Jarvis Reach respects intellectual property rights and will
                    respond to copyright infringement notices by removing
                    infringing material.
                  </p>
                </div>

                <div className="gdpr-secure-list-para">
                  <h4>Intellectual Property: </h4>
                  <p>
                    All intellectual property rights remain with Jarvis Reach or
                    its licensors. You are not permitted to reproduce or use any
                    Jarvis Reach or third-party trademarks without
                    authorization.
                  </p>
                </div>

                <div className="gdpr-secure-list-para">
                  <h4>Use License: </h4>
                  <p>
                    You may not attempt to reverse engineer the software or
                    access the Services to create a similar service. This
                    license may be terminated if you violate any restrictions.
                  </p>
                </div>

                <div className="gdpr-secure-list-para">
                  <h4>Changes: </h4>
                  <p>
                    Jarvis Reach reserves the right to modify this Agreement at
                    any time. Your continued use of the Services constitutes
                    acceptance of any changes made.
                  </p>
                </div>

                <div className="gdpr-secure-list-para">
                  <h4>Termination: </h4>
                  <p>
                    Jarvis Reach may terminate access to the Services at any
                    time. Users may terminate their accounts by discontinuing
                    use. Certain provisions, including ownership rights and
                    limitations of liability, will survive termination.
                  </p>
                </div>

                <div className="gdpr-secure-list-para">
                  <h4>Disclaimer of Warranties: </h4>
                  <p>
                    The Services are provided "as is," and Jarvis Reach
                    disclaims all warranties, including merchantability and
                    fitness for a particular purpose.
                  </p>
                </div>

                <div className="gdpr-secure-list-para">
                  <h4>Limitation of Liability: </h4>
                  <p>
                    Jarvis Reach's liability is limited to the fees paid by you
                    under this agreement. Jarvis Reach is not liable for damages
                    beyond the fees paid or for matters beyond its reasonable
                    control.
                  </p>
                </div>

                <div className="gdpr-secure-list-para">
                  <h4>General Representation and Warranty: : </h4>
                  <p>
                    You agree to comply with the Jarvis Reach Privacy Policy and
                    all applicable laws and regulations. Your use of the
                    Services must not infringe on third-party intellectual
                    property rights.
                  </p>
                </div>

                <div className="gdpr-secure-list-para">
                  <h4>Indemnification: </h4>
                  <p>
                    You agree to indemnify Jarvis Reach and its affiliates
                    against any claims arising from your use of the Services.
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

export default TermOfServices;
