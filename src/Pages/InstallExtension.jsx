import { useMediaQuery } from "@mui/system";
import React, { useEffect } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import { Helmet } from "react-helmet-async";

const InstallExtension = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const { auth } = useSelector((state) => state.auth);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Add here title and meta description
    // 	var PageTitle = document.createElement('title');
    // PageTitle.innerHTML = 'Install Extension | Chrome | Jarvis Reach';
    // document.head.appendChild(PageTitle);

    // var PageMetaDescription = document.createElement('meta');
    // PageMetaDescription.name = "description";
    // PageMetaDescription.content = "To get accurate and seamless experience of Jarvis Reach Platform, Install Chrome Extension, it will come handy with one click button | Jarvis Reach";
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
        <title>Install Extension | Chrome | Jarvis Reach</title>
        <meta
          name="description"
          content="To get accurate and seamless experience of Jarvis Reach Platform, Install Chrome Extension, it will come handy with one click button | Jarvis Reach."
        />
      </Helmet>
      <section id="integrationBrand">
        <div className="container">
          <div className="install-extetion-tittle">
            <h2>Our extension is available in the most popular Browsers</h2>
          </div>
          <div className="row">
            <div className="col-md-4 offset-md-4">
              <div className="brand-logos">
                <div className="brand-top">
                  <img src="assets/images/brand/chrome-logo.svg" />
                </div>
                <div className="brand-cnt">
                  <h4>Google Chrome</h4>
                  <a target="_blank"
                    href="https://chromewebstore.google.com/detail/jarvisreachio-free-b2b-ph/iccnendanoohhggjcghonkandiogched?hl=en-US&utm_source=ext_sidebar"
                    className="btn add-on-btn"
                    
                  >
                    Chrome Add-on
                  </a>
                </div>
              </div>
            </div>
            {/* <!--  */}
            {/* <div className="col-md-4">
              <div className="brand-logos">
                <div className="brand-top">
                  <img src="assets/images/brand/edge-logo.svg" />
                </div>
                <div className="brand-cnt">
                  <h4>Microsoft Edge</h4>
                  <button type="button" className="btn add-on-btn">
                    Edge Add-ons
                  </button>
                </div>
              </div>
            </div> */}
            {/* -->
                    <!--  */}
            {/* <div className="col-md-4">
              <div className="brand-logos">
                <div className="brand-top">
                  <img src="assets/images/brand/firefox-logo.png" />
                </div>
                <div className="brand-cnt">
                  <h4>Firefox</h4>
                  <button type="button" className="btn add-on-btn">
                    Firefox Add-on
                  </button>
                </div>
              </div>
            </div> */}
            {/* --> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InstallExtension;
