import { Menu, MenuItem } from "@mui/material";
import { useMediaQuery } from "@mui/system";
import React, { useState } from "react";
import { FaCheckCircle, FaChevronDown, FaChevronUp } from "react-icons/fa";
import { FaArrowRightToBracket } from "react-icons/fa6";
import { useNavigate } from "react-router";

const TopBar = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));
  const isMediumScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(false);
  };

  return (
    <section id="topNav">
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{
          backgroundColor: "#fff6f7",
          padding: "14px 0px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            width: isSmallScreen ? "90%" : "90%",
          }}
        >
          <a
            className=""
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            <img
              src="https://d2ds8yldqp7gxv.cloudfront.net/lead/jarvis-logo.png"
              alt="logo"
              width="200"
              height="33"
            />
          </a>
          {/* Hamburger button for smaller screens */}
          <button
            className="navbar-toggler "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => {
              document
                .getElementById("navbarSupportedContent")
                .classList.toggle("show");
            }}
          >
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="currentColor"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.33333 24H26.6667C27.4 24 28 23.4 28 22.6667C28 21.9333 27.4 21.3333 26.6667 21.3333H5.33333C4.6 21.3333 4 21.9333 4 22.6667C4 23.4 4.6 24 5.33333 24ZM5.33333 17.3333H26.6667C27.4 17.3333 28 16.7333 28 16C28 15.2667 27.4 14.6667 26.6667 14.6667H5.33333C4.6 14.6667 4 15.2667 4 16C4 16.7333 4.6 17.3333 5.33333 17.3333ZM4 9.33333C4 10.0667 4.6 10.6667 5.33333 10.6667H26.6667C27.4 10.6667 28 10.0667 28 9.33333C28 8.6 27.4 8 26.6667 8H5.33333C4.6 8 4 8.6 4 9.33333Z"
                fill="#currentColor"
              ></path>
            </svg>
          </button>
          {/* Navbar items inside collapsible div */}
          <div className="collapse navbar-collapse navbar-nav">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => navigate("/")}
                  style={{ cursor: "pointer", backgroundColor: "transparent" }}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => navigate("/pricing")}
                  style={{ cursor: "pointer", backgroundColor: "transparent" }}
                >
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={() => navigate("/about-us")}
                  style={{ cursor: "pointer", backgroundColor: "transparent" }}
                >
                  About Us
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link"
                  onClick={handleClick}
                  style={{ cursor: "pointer", backgroundColor: "transparent" }}
                >
                  Resources{" "}
                  {anchorEl ? (
                    <FaChevronDown
                      style={{ fontSize: "12px", marginLeft: "5px" }}
                    />
                  ) : (
                    <FaChevronUp
                      style={{ fontSize: "12px", marginLeft: "5px" }}
                    />
                  )}
                </a>
                <Menu
                  id="simple-menu"
                  anchorEl={anchorEl}
                  keepMounted
                  open={Boolean(anchorEl)}
                  onClose={() => setAnchorEl(false)}
                >
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      navigate("/blog");
                    }}
                  >
                    <i
                      className="fa-solid fa-file-import"
                      style={{ marginRight: "5px", color: "red" }}
                    ></i>{" "}
                    Blog
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      navigate("/install-extension");
                    }}
                  >
                    <i
                      className="fa-solid fa-blog"
                      style={{ marginRight: "5px", color: "red" }}
                    ></i>{" "}
                    Install Extension
                  </MenuItem>
                  <MenuItem
                    onClick={() => {
                      handleClose();
                      navigate("/help-center");
                    }}
                  >
                    <i
                      className="fa-solid fa-handshake-angle"
                      style={{ marginRight: "5px", color: "red" }}
                    ></i>
                    Help Center
                  </MenuItem>
                </Menu>
              </li>
            </ul>
            <div className="d-flex" role="search">
              <button
                className="btn login"
                type="button"
                onClick={() =>
                  (window.location.href = `${
                    import.meta.env.VITE_JARVIS_LOGIN
                  }`)
                }
              >
                <FaArrowRightToBracket
                  style={{ marginRight: "10px", fontSize: "16px" }}
                />
                Login
              </button>
              <button
                className="btn get-free bg-red"
                type="submit"
                style={{
                  borderRadius: "10px",
                  display: isSmallScreen ? "none" : "block",
                  alignItems: "center",
                  fontWeight: 600,
                }}
                onClick={() =>
                  (window.location.href = `${
                    import.meta.env.VITE_JARVIS_SIGNUP
                  }`)
                }
              >
                <FaCheckCircle
                  style={{ marginRight: "5px", fontSize: "16px" }}
                />
                Get it free
              </button>
            </div>
          </div>

          {isMediumScreen && (
            <div
              className="collapse navbar-collapse navbar-nav"
              id="navbarSupportedContent"
              style={{
                position: "fixed",
                top: 60,
                right: 0,
                width: "100%",
                height: "70%",
                backgroundColor: "#fff",
                boxShadow: "0px 2px 4px 0px rgba(0, 0, 0, 0.1)",
                zIndex: 1,
                transition: "all 0.5s",
              }}
            >
              <ul
                className="navbar-nav"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "left",
                  alignItems: "flex-start",
                  gap: "10px",
                  padding: "20px",
                }}
              >
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => navigate("/")}
                    style={{ cursor: "pointer" }}
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => navigate("/pricing")}
                    style={{ cursor: "pointer" }}
                  >
                    Pricing
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={() => navigate("/about-us")}
                    style={{ cursor: "pointer" }}
                  >
                    About Us
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link"
                    onClick={handleClick}
                    style={{ cursor: "pointer" }}
                  >
                    Resources{" "}
                    {anchorEl ? (
                      <FaChevronDown
                        style={{ fontSize: "12px", marginLeft: "5px" }}
                      />
                    ) : (
                      <FaChevronUp
                        style={{ fontSize: "12px", marginLeft: "5px" }}
                      />
                    )}
                  </a>
                  <Menu
                    id="simple-menu"
                    anchorEl={anchorEl}
                    keepMounted
                    open={Boolean(anchorEl)}
                    onClose={() => setAnchorEl(false)}
                  >
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        navigate("/blog");
                      }}
                    >
                      <i
                        className="fa-solid fa-file-import"
                        style={{ marginRight: "5px", color: "red" }}
                      ></i>{" "}
                      Blog
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        navigate("/install-extension");
                      }}
                    >
                      <i
                        className="fa-solid fa-blog"
                        style={{ marginRight: "5px", color: "red" }}
                      ></i>{" "}
                      Install Extension
                    </MenuItem>
                    <MenuItem
                      onClick={() => {
                        handleClose();
                        navigate("/help-center");
                      }}
                    >
                      <i
                        className="fa-solid fa-handshake-angle"
                        style={{ marginRight: "5px", color: "red" }}
                      ></i>
                      Help Center
                    </MenuItem>
                  </Menu>
                </li>
              </ul>

              <div
                className="d-flex"
                role="search"
                style={{
                  display: "flex",
                  flexDirection: isSmallScreen ? "column" : "row",
                  gap: "10px",
                  padding: "20px",
                }}
              >
                <button
                  className="btn login"
                  type="button"
                  onClick={() =>
                    (window.location.href = `${
                      import.meta.env.VITE_JARVIS_LOGIN
                    }`)
                  }
                >
                  <FaArrowRightToBracket
                    style={{ marginRight: "10px", fontSize: "16px" }}
                  />
                  Login
                </button>

                <button
                  className=""
                  type="submit"
                  style={{
                    borderRadius: "10px",
                    alignItems: "center",
                    fontWeight: 600,
                    backgroundColor: "#f00",
                    color: "#fff",
                    border: "none",
                    padding: "10px",
                  }}
                  onClick={() =>
                    (window.location.href = `${
                      import.meta.env.VITE_JARVIS_SIGNUP
                    }`)
                  }
                >
                  <FaCheckCircle
                    style={{ marginRight: "5px", fontSize: "16px" }}
                  />
                  Get it free
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>
    </section>
  );
};

export default TopBar;
