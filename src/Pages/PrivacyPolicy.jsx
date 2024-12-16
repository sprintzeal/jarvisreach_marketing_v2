import { useMediaQuery } from "@mui/system";
import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import { Helmet } from "react-helmet-async";

const PrivacyPolicy = () => {
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
        <title>Know everything about Privacy Policy | Jarvis Reach</title>
        <meta
          name="description"
          content="Learn how Jarvis Reach use your data and maintain the privacy of our trusted customer, know everything about privacy policy here. | Jarvis Reach"
        />
      </Helmet>
      <section id="gdprCompany">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="gdpr-company-list">
                <h1>Privacy and Cookies Policy</h1>
                <h2>Last update: February 28, 2020</h2>
                <ul>
                  <li>
                    <i className="fa-solid fa-circle-right"></i> Jarvis Reach
                    facilitates business networking through a range of online
                    tools, including web applications, browser extensions, and
                    other digital services.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-right"></i> Our commitment
                    to privacy is paramount, and we design our services with
                    this principle at the forefront. Our practices align with
                    the European Regulation (EU) 2016/679, known as the General
                    Data Protection Regulation (GDPR), and other relevant data
                    protection laws.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-right"></i> To meet the
                    expectations of our customers and uphold the rights of data
                    subjects, we continually enhance our internal processes.
                  </li>
                  <li>
                    <i className="fa-solid fa-circle-right"></i> This Privacy
                    Policy outlines the data we collect and our procedures for
                    processing it. If you have any inquiries, please don't
                    hesitate to contact us at info (at) Jarvis Reach.com.
                  </li>
                </ul>
                <h3>
                  This Privacy Policy applies to all Jarvis Reach services,
                  including:
                </h3>
                <ul>
                  <li>The web platform</li>
                  <li>Our public API</li>
                  <li>Our browser extension</li>
                  <li>G Suite addons</li>
                </ul>
              </div>

              <div className="gdpr-secure-list">
                <div className="gdpr-secure-list-para">
                  <h4>Data Collection by Jarvis Reach:</h4>
                  <p>
                    <strong>Website Usage:</strong> During your visit to our
                    website, we track your activities, including page visits and
                    duration. This data encompasses IP addresses, geolocation
                    information, browser type, and website usage history.{" "}
                  </p>
                  <p>
                    Upon creating an account, we request personal details such
                    as your email, name, and company affiliation. This
                    information is utilized for personalization purposes,
                    including tailored experiences and communication through
                    onboarding emails and invoices. In instances of heightened
                    fraud concerns, we may request a phone number solely for
                    verification purposes, excluding any marketing uses. Payment
                    card information is collected from paying customers.
                  </p>
                  <p>
                    <strong>Service Usage: </strong> Whether you engage with our
                    services via the API, website, G-Suite add-ons, or browser
                    extensions, we monitor your interactions and log relevant
                    requests. These logs, containing IP addresses, geolocation
                    data, and browser specifics, are retained for a maximum of
                    three months. Additionally, users may be prompted to
                    transmit data or files while utilizing our services.
                  </p>
                  <p>
                    <strong>Support Interactions: </strong> Conversations with
                    our support team via email or chat are documented, along
                    with any accompanying data provided during these exchanges.
                    Upon account deletion, these records are expunged within six
                    months.
                  </p>
                  <p>
                    <strong>Mail Tracking Service: </strong> Users leveraging
                    our mail tracking service receive insights on email
                    interactions, including open rates and locations. To
                    facilitate this feature, we store select email details,
                    excluding email bodies, in pseudonymized formats. IP
                    addresses are likewise pseudonymized to safeguard user
                    privacy.
                  </p>
                  <p>
                    <strong>Public Web Data Parsing: </strong> Our servers parse
                    publicly accessible online pages to extract business data,
                    such as names, professional emails, and URLs. We adhere to
                    website directives outlined in robots.txt files and solely
                    index publicly available data accessible via search engines.
                    We disclaim responsibility for the privacy policies of
                    external websites.
                  </p>
                </div>

                <div className="data-search-list">
                  <h3>Data Utilization by Jarvis Reach:</h3>
                  <ul>
                    <li>
                      <strong>Service Provision:</strong> By agreeing to our
                      Terms of Service, users enable us to process their data,
                      granting access to Jarvis Reach for account management,
                      lead storage, team collaboration, etc.
                    </li>
                    <li>
                      <strong>User Experience Enhancement:</strong> Usage
                      patterns and statistics are analyzed to enhance the Jarvis
                      Reach platform, including A/B testing for feature
                      optimization. Data processed through our services is
                      solely utilized to validate or supplement existing user
                      data, not to enrich our databases.
                    </li>
                    <li>
                      <strong>Business Content Notification: </strong> Users
                      gain access to publicly displayed business data indexed by
                      Jarvis Reach, facilitating relevant contact identification
                      within targeted companies.
                    </li>
                    <li>
                      <strong>Customer Support: </strong> Assistance is provided
                      via email or chat to optimize user experience and resolve
                      issues.
                    </li>
                    <li>
                      <strong>Fraud Prevention: </strong> Active measures are
                      undertaken to combat credit card fraud and service misuse.
                    </li>
                    <li>
                      <strong>New Service Marketing: </strong> Updates on new
                      services are communicated to users who have opted to
                      receive such notifications.
                    </li>
                  </ul>
                </div>

                <div className="data-search-list">
                  <h3>Your Rights Regarding Personal Data:</h3>
                  <p>
                    You hold the following rights concerning the personal data
                    we retain about you:
                  </p>
                  <ul>
                    <li>
                      <strong>Access:</strong> You can access your personal data
                      and related information, as elaborated in the section
                      titled "Know whether we have information concerning you
                      and what that information is."
                    </li>
                    <li>
                      <strong>Rectification:</strong> You may request the
                      rectification of any inaccurate personal data, which may
                      involve providing supplementary statements.
                    </li>
                    <li>
                      <strong>Deletion: </strong> In certain circumstances, you
                      can request the deletion of your personal data.
                    </li>
                    <li>
                      <strong>Restriction or Blocking: </strong> You have the
                      right to request the restriction or blocking of the
                      processing of your personal data under certain
                      circumstances. When processing is restricted, your
                      personal data will still be stored but not utilized
                      further.
                    </li>
                    <li>
                      <strong>Data Portability: </strong> You can obtain your
                      personal data in a structured, commonly used, and
                      machine-readable format under certain conditions.
                      Additionally, you may have the right to request direct
                      transmission of your personal data to another party, where
                      technically feasible.
                    </li>
                    <li>
                      <strong>Objection: </strong> At any time, you can object
                      to our use of your personal data for direct marketing
                      purposes. Furthermore, you may have the right to object to
                      the processing of some or all of your personal data, and
                      request its deletion, under certain other circumstances.
                    </li>
                    <li>
                      <strong>Withdrawal of Consent: </strong> You have the
                      right to withdraw your consent at any time, particularly
                      when we process your personal data based on your consent
                      to such processing.
                    </li>
                  </ul>
                </div>

                <div className="data-search-list">
                  <h3>To Get Started:</h3>
                  <p>
                    For inquiries and assistance, please contact support at
                    Jarvis Reach.com.
                  </p>
                  <h4>Update, Correct, and Delete Your Information:</h4>
                  <ul>
                    <li>
                      <strong>Direct Users:</strong> If you're a direct user of
                      our service, you can log into your account to update your
                      information.
                    </li>
                    <li>
                      <strong>Business Data:</strong> If your business data has
                      been found online, you can reach out to us to update or
                      delete it.
                    </li>
                  </ul>
                </div>

                <div className="data-search-list">
                  <h3>
                    Know Whether We Have Information Concerning You and What
                    That Information Is:
                  </h3>
                  <p>You have the right to:</p>

                  <ul>
                    <li>Confirm if your personal data is being processed.</li>
                    <li>
                      Access your personal data, including:
                      <ul>
                        <li>Confirmation of your presence in our database.</li>
                        <li>Details of the data we hold.</li>
                        <li>Purposes of processing.</li>
                        <li>Data retention duration.</li>
                        <li>Source of information.</li>
                        <li>Other details as per Article 15 of the GDPR.</li>
                      </ul>
                    </li>
                  </ul>
                  <p>For inquiries, contact support at JarvisReach.com.</p>
                </div>

                <div className="data-search-list">
                  <h3>Disable Processing and Permanently Remove Your Data:</h3>

                  <ul>
                    <li>
                      <strong>Direct Users:</strong> Log in to permanently erase
                      your account
                    </li>
                    <li>
                      <strong>Business Data:</strong> Contact us for updates or
                      deletions.
                    </li>
                  </ul>
                  <p>
                    For concerns, contact us first. If unresolved, you have the
                    right to contact your local supervisory authority.
                  </p>
                </div>

                <div className="data-search-list">
                  <h3>Services Helping Manage Your Data:</h3>
                  <p>
                    We partner with trusted providers like Amazon Web Services,
                    Google Cloud, and others to ensure data privacy and
                    security.
                  </p>
                  <h4>Duration of Processing:</h4>
                  <ul>
                    <li>
                      For active users, we process data until account
                      deactivation and up to 3 years post-inactivity.
                    </li>
                    <li>
                      Deleted accounts undergo data removal within a few days,
                      completed within 3 months. Certain company information may
                      be retained longer for legal compliance.
                    </li>
                    <li>
                      Online-found data is processed as long as it's online.
                      Removed if inaccurate or no longer available.
                    </li>
                  </ul>
                </div>

                <div className="data-search-list">
                  <h3>Securing Your Data:</h3>
                  <p>
                    Data security is paramount. Our servers, located exclusively
                    in the European Union, adhere to stringent security
                    measures.
                  </p>
                </div>

                <div className="data-search-list">
                  <h3>Cookies Policy:</h3>
                  <p>
                    Cookies are used to enhance user experience. By continuing
                    to use our services, you consent to cookie usage.
                  </p>
                </div>

                <div className="data-search-list">
                  <h3>Types of Cookies:</h3>

                  <ul>
                    <li>
                      Authentication: Recognizes signed-in users for
                      personalized experiences.
                    </li>
                    <li>
                      Research, Analytics, and Fraud Prevention: Improves
                      service based on usage insights.
                    </li>
                    <li>
                      Advertising: Enables targeted ads and performance
                      measurement.
                    </li>
                  </ul>
                </div>

                <div className="data-search-list">
                  <h3>Third-party Cookies: </h3>
                  <p>
                    Trusted partners, including Google Analytics, Stripe, and
                    others, may use cookies in our services.
                  </p>
                </div>

                <div className="data-search-list">
                  <h3>Cookie Control: </h3>
                  <p>
                    You can manage cookies via browser settings. Rejecting
                    cookies may limit access to certain functions.
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

export default PrivacyPolicy;
