import { useMediaQuery } from "@mui/system";
import React, { useEffect, useState } from "react";
import { FaCheckCircle, FaQuoteLeft, FaStar } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import { Avatar } from "@mui/material";
import { FaQuoteRight } from "react-icons/fa6";
import Testimonials from "../components/Testimonials";
import { Helmet } from "react-helmet-async";

const Integration = () => {
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
        <title>
          Third Party App Integrations | Connect Apps | Jarvis Reach
        </title>
        <meta
          name="description"
          content="Know how to connect various third party apps through Jarvis Reach platform. You can connect apps like Zapier, HubSpot, Salesforce, Zoho and many other."
        />
      </Helmet>
      <section id="integrationFinder">
        <div
          className="container"
          style={{
            marginTop: isSmallScreen ? "100px" : "150px",
          }}
        >
          <div className="coming-soon ">
            <img src="/images/coming-soon.png" className="img-fluid" />
          </div>
          <div className="row d-flex align-items-center">
            <div className="col-md-6">
              <div className="email-finder">
                <h1>Integrate your apps with Jarvis Reach </h1>
                <p>
                  Direct contacts and leads to the most impactful areas for your
                  business, including leading CRM, outreach, and productivity
                  tools.
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
                    src="https://d2ds8yldqp7gxv.cloudfront.net/lead/connect-apps.png"
                    className="img-fluid"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="integrationBrand">
        <div className="container">
          <div className="start-extetion-tittle">
            <h3>INTEGRATIONS</h3>
            <h2>
              Jarvis Reach provides native and third-party integrations with
              your essential applications.
            </h2>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="brand-logos">
                <div className="brand-top">
                  <img src="https://d2ds8yldqp7gxv.cloudfront.net/lead/HubSpot-one.png" />
                </div>
                <div className="brand-cnt">
                  <h4>Hubspot</h4>
                  <p>CRM</p>
                  <span className="badge orage-btn">Zapier</span>
                  <span className="badge blue-btn">Native</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="brand-logos">
                <div className="brand-top">
                  <img src="https://d2ds8yldqp7gxv.cloudfront.net/lead/zoho.png" />
                </div>
                <div className="brand-cnt">
                  <h4>Zoho</h4>
                  <p>CRM</p>
                  <span className="badge blue-btn">Native</span>
                  <span className="badge orage-btn">Zapier</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="brand-logos">
                <div className="brand-top">
                  <img src="https://d2ds8yldqp7gxv.cloudfront.net/lead/Pipedrive.png" />
                </div>
                <div className="brand-cnt">
                  <h4>Pipedrive</h4>
                  <p>CRM</p>
                  <span className="badge orage-btn">Zapier</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="brand-logos">
                <div className="brand-top">
                  <img src="https://d2ds8yldqp7gxv.cloudfront.net/lead/Salesforce.png" />
                </div>
                <div className="brand-cnt">
                  <h4>Salesforce</h4>
                  <p>CRM</p>
                  <span className="badge orage-btn">Zapier</span>
                </div>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3">
              <div className="brand-logos">
                <div className="brand-top">
                  <img src="https://d2ds8yldqp7gxv.cloudfront.net/lead/Salesloft.png" />
                </div>
                <div className="brand-cnt">
                  <h4>Salesloft</h4>
                  <p>Sales Engagement Platform</p>
                  <span className="badge orage-btn">Zapier</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="brand-logos">
                <div className="brand-top">
                  <img src="https://d2ds8yldqp7gxv.cloudfront.net/lead/Outreach.png" />
                </div>
                <div className="brand-cnt">
                  <h4>Outreach</h4>
                  <p>Sales Engagement Platform</p>
                  <span className="badge orage-btn">Zapier</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="brand-logos">
                <div className="brand-top">
                  <img src="https://d2ds8yldqp7gxv.cloudfront.net/lead/Gmail.png" />
                </div>
                <div className="brand-cnt">
                  <h4>Gmail</h4>
                  <p>Email Service</p>
                  <span className="badge orage-btn">Zapier</span>
                </div>
              </div>
            </div>
            <div className="col-md-3">
              <div className="brand-logos">
                <div className="brand-top">
                  <img src="https://d2ds8yldqp7gxv.cloudfront.net/lead/Mailchimp.png" />
                </div>
                <div className="brand-cnt">
                  <h4>Mailchimp</h4>
                  <p>Email Service</p>
                  <span className="badge orage-btn">Zapier</span>
                  <span className="badge blue-btn">Native</span>
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
                <h2>Join Today. It’s free </h2>
                <p>
                  Start now and discover dependable contact information on
                  LinkedIn for free, featuring categorized and verified email
                  addresses and phone numbers.
                </p>
                <a
                  href={`${import.meta.env.VITE_JARVIS_SIGNUP}`}
                  className="banner-btn"
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

export default Integration;
