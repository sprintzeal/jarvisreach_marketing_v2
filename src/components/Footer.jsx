import React from "react";
import { useNavigate } from "react-router";
import {
  FaArrowRightToBracket,
  FaFacebookF,
  FaFileCircleCheck,
  FaFolderOpen,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { useMediaQuery } from "@mui/system";

const Footer = () => {
  const navigate = useNavigate();
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
  return (
    <>
      <section id="leadFooter">
        <div className="container">
          <div className="row">
            <div className="col-md-3 mb-3">
              <div
                className="lead-foot-list mb-4"
                onClick={() => navigate("/")}
                style={{
                  cursor: "pointer",
                }}
              >
                <img
                  src="https://d2ds8yldqp7gxv.cloudfront.net/lead/jarvis-logo.png"
                  alt="logo"
                  width="200"
                  height="33"
                />
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="lead-foot-list">
                <h4>Support</h4>
                <ul>
                  <li>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate("/install-extension")}
                    >
                      Install Extension
                    </a>
                  </li>
                  <li>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        navigate("/help-center");
                      }}
                    >
                      Help Center
                    </a>
                  </li>
                  {/* <li>
                    <a style={{ cursor: "pointer" }}>Tutorials</a>
                  </li> */}
                  <li>
                    <a
                      style={{ cursor: "pointer" }}
                      onClick={() => navigate("/blog")}
                    >
                      Blog
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="lead-foot-list">
                <h4>Product</h4>
                <ul>
                  <li>
                    <a
                      onClick={() => navigate("/linkedin-email-finder")}
                      style={{ cursor: "pointer" }}
                    >
                      Email Finder
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => navigate("/pricing")}
                      style={{ cursor: "pointer" }}
                    >
                      Pricing
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => navigate("/Integrations")}
                      style={{ cursor: "pointer" }}
                    >
                      Integration
                    </a>
                  </li>
                  {/* <li>
                    <a href="#">Changelog</a>
                  </li> */}
                  {/* <li>
                    <a>Affiliate Program</a>
                  </li> */}
                </ul>
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <div className="lead-foot-list">
                <h4>Legal</h4>
                <ul>
                  <li>
                    <a
                      onClick={() => navigate("/terms-of-service")}
                      style={{ cursor: "pointer" }}
                    >
                      Terms of Service
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => navigate("/privacy-policy")}
                      style={{ cursor: "pointer" }}
                    >
                      {" "}
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      onClick={() => navigate("/gdpr-compliance")}
                      style={{ cursor: "pointer" }}
                    >
                      GDPR Compliance
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div
            className=" pt-4 line-top"
            style={{
              display: "flex",
              flexDirection: isMobile ? "column" : "row",
              justifyContent: isMobile ? "center" : "space-between",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <div className="col-md-6">
              <div
                className=""
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  gap: "10px",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                <p>© 2024 Jarvis Reach Software Inc. - All Rights Reserved.</p>
              </div>
            </div>
            <div className="col-md-2">
              <div className="social-link">
                <ul>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/jarvis-reach"
                      target="_blank"
                    >
                      <FaLinkedin />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.facebook.com/JarvisReach/"
                      target="_blank"
                    >
                      <FaFacebook />
                    </a>
                  </li>
                  {/* twitter */}
                  <li>
                    <a href="https://x.com/Jarvisreach" target="_blank">
                      <FaTwitter />
                    </a>
                  </li>
                  {/* instagram */}
                  <li>
                    <a
                      href="https://www.instagram.com/jarvis.reach/"
                      target="_blank"
                    >
                      <FaInstagram />
                    </a>
                  </li>
                  {/* youtube */}
                  <li>
                    <a
                      href="https://www.youtube.com/@jarvis-reach"
                      target="_blank"
                    >
                      <FaYoutube />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Footer;
