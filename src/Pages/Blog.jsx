import React, { useEffect, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import {
  FaArrowLeft,
  FaArrowRightToBracket,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useGetBlogListQuery } from "../slices/adminSlice";
import { CircularProgress, useMediaQuery } from "@mui/material";
import { useGetBlogCategorizedQuery } from "../slices/customerSlice";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import { Helmet } from "react-helmet-async";

const Blog = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const { auth } = useSelector((state) => state.auth);
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const {
    data: getBlog,
    isLoading: blogLoading,
    isError: blogError,
  } = useGetBlogListQuery({ page: 1, limit: 20 });
  const {
    data: getBlogCategorized,
    isLoading: blogCategorizedLoading,
    isError: blogCategorizedError,
    isFetching: blogCategorizedFetching,
  } = useGetBlogCategorizedQuery({ page: page, limit: limit });

  const itemsPerPageOptions = [5, 10, 20, 50];
  const totalItems = getBlogCategorized?.totalItems || 0;
  const [currentPage, setCurrentPage] = useState(
    getBlogCategorized?.page?.currentPage || 1
  );
  const [itemsPerPage, setItemsPerPage] = useState(
    itemsPerPageOptions[
      itemsPerPageOptions.indexOf(getBlogCategorized?.result?.limit) !== -1
        ? itemsPerPageOptions.indexOf(getBlogCategorized?.result?.limit)
        : 0
    ]
  );

  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageClick = (page) => {
    setCurrentPage(page);
    setPage(page);
  };

  const handleNextClick = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      setPage(currentPage + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      setPage(currentPage - 1);
    }
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
    setPage(1);
    setLimit(Number(event.target.value));
  };

  const getVisiblePages = () => {
    const visiblePages = [];
    const pageRange = 5;
    let startPage = Math.max(currentPage - Math.floor(pageRange / 2), 1);
    let endPage = Math.min(startPage + pageRange - 1, totalPages);

    if (endPage - startPage < pageRange - 1) {
      startPage = Math.max(endPage - pageRange + 1, 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      visiblePages.push(i);
    }

    return visiblePages;
  };

  const slugHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    let text = div.textContent || div.innerText || "";

    return text;
  };

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

  if (blogLoading) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <CircularProgress />
      </div>
    );
  }

  return (
    <div className="wrapper">
      <TopBar />
      <Helmet>
        <title>Jarvis Reach Blog | Resources | New Updates | New Content</title>
        <meta
          name="description"
          content="Jarvis Reach Posts on Blog almost everyday. We bring new updates on what's trending in technology from latest research and update the content regularly."
        />
      </Helmet>

      <section id="blogUser">
        <div className="container">
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            <FaArrowLeft
              style={{
                fontSize: "20px",
                cursor: "pointer",
              }}
            />
            <span
              style={{
                fontSize: "20px",
                fontWeight: 600,
              }}
            >
              Back to Home
            </span>
          </div>
          {!blogCategorizedFetching &&
          getBlogCategorized?.result?.length > 0 ? (
            <div className="md-col row">
              <div className="col-md-12 col-lg-8">
                {/* {getBlog?.result?.find(
                (blog) => blog?.category.categoryName === "main"
              ) && ( */}
                <div>
                  <Helmet>
                    {/* <title>
                      {
                        getBlogCategorized?.result[0]?.blogs[0]?.websiteMetadata
                          ?.title
                      }
                    </title> */}
                    <meta
                      name="description"
                      content={
                        getBlogCategorized?.result[0]?.blogs[0]?.websiteMetadata
                          ?.description
                      }
                    />
                    <meta
                      name="keywords"
                      content={
                        getBlogCategorized?.result[0]?.blogs[0]?.websiteMetadata
                          ?.keywords[0]
                      }
                    />
                  </Helmet>

                  <div
                    className="top-blog mb-2"
                    style={{
                      objectFit: "cover",
                      width: "100%",
                      cursor: "pointer",
                    }}
                  >
                    <a
                      style={{
                        cursor: "pointer",
                      }}
                      href={`/blog/${getBlogCategorized?.result[0]?.blogs[0]?.blogInfo.slugUrl}`}
                    >
                      <img
                        src={
                          getBlogCategorized?.result[0]?.blogs[0]
                            ?.blogBannerImage
                        }
                        // className="img-fluid"
                        style={{
                          height: "80%",
                          objectFit: "fill",
                          width: "100%",
                        }}
                      />
                    </a>
                    <div className="blog-top-cnt">
                      {/* <h6>
                      {getBlogCategorized?.result[0]?.blogs[0]?.blogInfo?.title}
                    </h6> */}
                      <h2>
                        <a
                          style={{
                            cursor: "pointer",
                          }}
                          href={`blog/${getBlogCategorized?.result[0]?.blogs[0]?.blogInfo.slugUrl}`}
                        >
                          {
                            getBlogCategorized?.result[0]?.blogs[0]?.blogInfo
                              ?.title
                          }
                        </a>
                      </h2>
                      <p>
                        <a
                          href={`blog/${getBlogCategorized?.result[0]?.blogs[0]?.blogInfo.slugUrl}`}
                        >
                          {new Date(
                            getBlogCategorized?.result[0]?.blogs[0]?.createdAt
                          ).toDateString()}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
                {/* )} */}

                <div className="row mb-4">
                  {getBlogCategorized?.result[0]?.blogs?.length > 1 &&
                    getBlogCategorized?.result[0]?.blogs
                      ?.slice(1)
                      ?.map((blog, index) => {
                        const div = document.createElement("div");
                        div.innerHTML = blog?.blogInfo?.description;
                        const text = div.textContent || div.innerText || "";

                        return (
                          <div className="col-md-6">
                            <Helmet>
                              {/* <title>{blog?.websiteMetadata?.title}</title> */}
                              <meta
                                name="description"
                                content={blog?.websiteMetadata?.description}
                              />
                              <meta
                                name="keywords"
                                content={blog?.websiteMetadata?.keywords[0]}
                              />
                            </Helmet>
                            <div
                              className="top-blog-left"
                              style={{ paddingRight: "10px" }}
                              // onClick={() =>
                              //   navigate(`/blog/${blog?.blogInfo.slugUrl}`)
                              // }
                            >
                              <a
                                href={`
                              blog/${blog?.blogInfo.slugUrl}`}
                                style={{
                                  cursor: "pointer",
                                }}
                              >
                                <img
                                  src={blog?.blogBannerImage}
                                  width="100%"
                                  height="220px"
                                />
                              </a>
                              <div className="blog-top-test">
                                {/* <h4>{blog?.blogInfo?.title}</h4> */}
                                <a
                                  href={`blog/${blog?.blogInfo.slugUrl}`}
                                  style={{
                                    cursor: "pointer",
                                    fontSize: isSmallScreen ? "18px" : "",
                                  }}
                                >
                                  {blog?.blogInfo?.title}
                                </a>
                                <br />
                                <span>
                                  {" "}
                                  <a
                                    href={`blog/${blog?.blogInfo.slugUrl}`}
                                    style={{
                                      fontSize: "12px",
                                      color: "#707070",
                                      cursor: "pointer",
                                    }}
                                  >
                                    {new Date(blog?.createdAt).toDateString()}
                                  </a>
                                </span>
                                {/* <p>
                                  {text.length > 100
                                    ? text.substring(0, 120) + "..."
                                    : text}

                                  There are lots of reasons why you might want to
                                find someone’s email address. Whether you’re
                                looking to reach out…
                                </p> */}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                </div>

                {/* <div className="row">
                <div className="col-md-6">
                  {getBlog?.result?.length > 3 &&
                    getBlog?.result?.slice(4, 6).map((blog, index) => (
                      <div className="top-blog-left">
                        <a href="">
                          <img
                            src="../../src/assets/images/lead-generation.png"
                            className="img-fluid"
                            width="100%"
                          />
                        </a>
                        <div className="blog-top-test">
                          <h4>{blog?.blogInfo?.title}</h4>
                          <a href="">
                            {blog?.blogInfo?.h1Tag}
                          </a>
                          <span>
                            {new Date(blog?.createdAt).toDateString()} 5 Mins
                            Read
                          </span>
                          <p>
                            {/*                         {blog?.blogInfo?.description}
                             */}
                {/* There are lots of reasons why you might want to find
                            someone’s email address. Whether you’re looking to
                            reach out…
                          </p> */}
                {/* </div>
                      </div> */}
                {/* ))}
                </div>
              </div> */}

                {getBlogCategorized?.result[1]?.blogs?.length > 0 && (
                  <div>
                    <Helmet>
                      {/* <title>
                        {
                          getBlogCategorized?.result[1]?.blogs[0]
                            ?.websiteMetadata?.title
                        }
                      </title> */}
                      <meta
                        name="description"
                        content={
                          getBlogCategorized?.result[1]?.blogs[0]
                            ?.websiteMetadata?.description
                        }
                      />
                      <meta
                        name="keywords"
                        content={
                          getBlogCategorized?.result[1]?.blogs[0]
                            ?.websiteMetadata?.keywords[0]
                        }
                      />
                    </Helmet>
                    <div className="top-blog">
                      <a
                        style={{
                          cursor: "pointer",
                        }}
                        // onClick={() =>
                        //   navigate(
                        //     `/blog/${getBlogCategorized?.result[1]?.blogs[0]?.blogInfo.slugUrl}`
                        //   )
                        // }
                        href={`/blog/${getBlogCategorized?.result[1]?.blogs[0]?.blogInfo.slugUrl}`}
                      >
                        <img
                          src={
                            getBlogCategorized?.result[1]?.blogs[0]
                              ?.blogBannerImage
                          }
                          className="img-fluid"
                          width="100%"
                        />
                      </a>
                      <div className="blog-top-cnt">
                        {/* <h5>
                        {
                          getBlogCategorized?.result[1]?.blogs[0]?.blogInfo
                            ?.title
                        }
                      </h5> */}
                        <h2>
                          <a
                            href={`blog/${getBlogCategorized?.result[1]?.blogs[0]?.blogInfo.slugUrl}`}
                            style={{
                              cursor: "pointer",
                            }}
                          >
                            {
                              getBlogCategorized?.result[1]?.blogs[0]?.blogInfo
                                ?.title
                            }
                          </a>
                        </h2>
                        <p>
                          <a
                            href={`blog/${getBlogCategorized?.result[1]?.blogs[0]?.blogInfo.slugUrl}`}
                            style={{
                              cursor: "pointer",
                            }}
                          >
                            {new Date(
                              getBlogCategorized?.result[1]?.blogs[0]?.createdAt
                            ).toDateString()}
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                )}

                <div className="row">
                  {getBlogCategorized?.result[1]?.blogs?.length > 0 &&
                    getBlogCategorized?.result[1]?.blogs
                      ?.slice(1)
                      ?.map((blog, index) => {
                        const div = document.createElement("div");
                        div.innerHTML = blog?.blogInfo?.description;
                        const text = div.textContent || div.innerText || "";
                        console.log("text", text);

                        return (
                          <div className="col-md-6">
                            <Helmet>
                              {/* <title>{blog?.websiteMetadata?.title}</title> */}
                              <meta
                                name="description"
                                content={blog?.websiteMetadata?.description}
                              />
                              <meta
                                name="keywords"
                                content={blog?.websiteMetadata?.keywords[0]}
                              />
                            </Helmet>
                            <div
                              className="top-blog-left"
                              // onClick={() =>
                              //   navigate(`/blog/${blog?.blogInfo.slugUrl}`)
                              // }
                            >
                              <a
                                href={`blog/${blog?.blogInfo.slugUrl}`}
                                style={{
                                  cursor: "pointer",
                                }}
                              >
                                <img
                                  src={blog?.blogBannerImage}
                                  className="img-fluid"
                                  width="100%"
                                />
                              </a>
                              <div className="blog-top-test">
                                {/* <h6>{blog?.blogInfo?.title}</h6> */}
                                <a
                                  href={`blog/${blog?.blogInfo.slugUrl}`}
                                  style={{
                                    cursor: "pointer",
                                    fontSize: isSmallScreen ? "18px" : "",
                                    fontSize: isSmallScreen ? "14px" : "",
                                    width: isSmallScreen ? "120px" : "",
                                  }}
                                >
                                  {blog?.blogInfo?.title}
                                </a>
                                <br />
                                <span>
                                  {" "}
                                  <a
                                    href={`blog/${blog?.blogInfo.slugUrl}`}
                                    style={{
                                      fontSize: "12px",
                                      color: "#707070",
                                      cursor: "pointer",
                                    }}
                                  >
                                    {new Date(blog?.createdAt).toDateString()}
                                  </a>
                                </span>
                                {/* <p>
                                  {text.length > 100
                                    ? text.substring(0, 120) + "..."
                                    : text}

                                  There are lots of reasons why you might want to
                                find someone’s email address. Whether you’re
                                looking to reach out…
                                </p> */}
                              </div>
                            </div>
                          </div>
                        );
                      })}
                </div>
              </div>
              <div className="col-md-12 col-lg-4">
                {getBlogCategorized?.result[2]?.blogs?.length > 0 && (
                  <div className="blog-update-left">
                    <Helmet>
                      {/* <title>
                        {
                          getBlogCategorized?.result[2]?.blogs[0]
                            ?.websiteMetadata?.title
                        }
                      </title> */}
                      <meta
                        name="description"
                        content={
                          getBlogCategorized?.result[2]?.blogs[0]
                            ?.websiteMetadata?.description
                        }
                      />
                      <meta
                        name="keywords"
                        content={
                          getBlogCategorized?.result[2]?.blogs[0]
                            ?.websiteMetadata?.keywords[0]
                        }
                      />
                    </Helmet>
                    <div
                      className="top-blog-left"
                      // onClick={() =>
                      //   navigate(
                      //     `/blog/${getBlogCategorized?.result[2]?.blogs[0]?.blogInfo.slugUrl}`
                      //   )
                      // }
                    >
                      <h3
                        style={{
                          marginBottom: "20px",
                        }}
                      >
                        {getBlogCategorized?.result[2] &&
                          getBlogCategorized?.result[2]?.blogs[0]
                            ?.categoryDetails?.categoryName}
                      </h3>

                      <a
                        href={`blog/${getBlogCategorized?.result[2]?.blogs[0]?.blogInfo.slugUrl}`}
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        <img
                          src={
                            getBlogCategorized?.result[2]?.blogs[0]
                              ?.blogBannerImage
                          }
                          className="img-fluid"
                          width="100%"
                        />
                      </a>
                      <div className="blog-top-test">
                        {/* <h4>
                          {
                            getBlogCategorized?.result[2]?.blogs[0]?.blogInfo
                              ?.title
                          }
                        </h4> */}
                        <a
                          href={`blog/${getBlogCategorized?.result[2]?.blogs[0]?.blogInfo.slugUrl}`}
                          style={{
                            cursor: "pointer",
                            fontSize: isSmallScreen ? "14px" : "",
                            width: isSmallScreen ? "120px" : "",
                          }}
                        >
                          {
                            getBlogCategorized?.result[2]?.blogs[0]?.blogInfo
                              ?.title
                          }
                        </a>
                        <br />
                        <span>
                          <a
                            href={`blog/${getBlogCategorized?.result[2]?.blogs[0]?.blogInfo.slugUrl}`}
                            style={{
                              fontSize: "16px",
                              color: "#707070",
                              cursor: "pointer",
                            }}
                          >
                            {new Date(
                              getBlogCategorized?.result[2]?.blogs[0]?.createdAt
                            ).toDateString()}{" "}
                          </a>
                        </span>
                        {/* <p>
                          {slugHtml(
                            getBlogCategorized?.result[2]?.blogs[0]?.blogInfo
                              ?.description
                          )?.length > 100
                            ? slugHtml(
                                getBlogCategorized?.result[2]?.blogs[0]
                                  ?.blogInfo?.description
                              )?.substring(0, 120) + "..."
                            : slugHtml(
                                getBlogCategorized?.result[2]?.blogs[0]
                                  ?.blogInfo?.description
                              )}
                        </p> */}
                      </div>
                    </div>
                  </div>
                )}
                {getBlogCategorized?.result[2]?.blogs?.length > 0 &&
                  getBlogCategorized?.result[2]?.blogs
                    ?.slice(1)
                    ?.map((blog, index) => {
                      const div = document.createElement("div");
                      div.innerHTML = blog?.blogInfo?.description;
                      const text = div.textContent || div.innerText || "";
                      console.log("text", text);

                      return (
                        <div>
                          <Helmet>
                            {/* <title>{blog?.websiteMetadata?.title}</title> */}
                            <meta
                              name="description"
                              content={blog?.websiteMetadata?.description}
                            />
                            <meta
                              name="keywords"
                              content={blog?.websiteMetadata?.keywords[0]}
                            />
                          </Helmet>
                          <a
                            style={{ cursor: "pointer" }}
                            className="bloging-post"
                            // onClick={() =>
                            //   navigate(`/blog/${blog?.blogInfo.slugUrl}`)
                            // }
                            href={`blog/${blog?.blogInfo.slugUrl}`}
                          >
                            <div className="bloging-post-left">
                              <img
                                src={blog?.blogBannerImage}
                                className="img-fluid"
                                style={{
                                  width: "250px",
                                  height: "100px",
                                  objectFit: "cover",
                                  bordeRradius: "8px",
                                  display: "block",
                                }}
                              />
                            </div>
                            <div className="bloging-post-right">
                              <h4
                                style={{
                                  fontSize: isSmallScreen ? "14px" : "",
                                  width: isSmallScreen ? "120px" : "",
                                }}
                              >
                                {blog?.blogInfo?.title}
                              </h4>
                            </div>
                          </a>
                        </div>
                      );
                    })}
                <div className="blog-update-left">
                  <Helmet>
                    {/* <title>
                      {
                        getBlogCategorized?.result[3]?.blogs[0]?.websiteMetadata
                          ?.title
                      }
                    </title> */}
                    <meta
                      name="description"
                      content={
                        getBlogCategorized?.result[3]?.blogs[0]?.websiteMetadata
                          ?.description
                      }
                    />
                    <meta
                      name="keywords"
                      content={
                        getBlogCategorized?.result[3]?.blogs[0]?.websiteMetadata
                          ?.keywords[0]
                      }
                    />
                  </Helmet>
                  <div
                    className="top-blog-left"
                    // onClick={() =>
                    //   navigate(
                    //     `/blog/${getBlogCategorized?.result[3]?.blogs[0]?.blogInfo.slugUrl}`
                    //   )
                    // }
                  >
                    <h3
                      style={{
                        marginBottom: "20px",
                      }}
                    >
                      {getBlogCategorized?.result[3] &&
                        getBlogCategorized?.result[3]?.blogs[0]?.categoryDetails
                          ?.categoryName}
                    </h3>

                    <a
                      href={`blog/${getBlogCategorized?.result[3]?.blogs[0]?.blogInfo.slugUrl}`}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={
                          getBlogCategorized?.result[3] &&
                          getBlogCategorized?.result[3]?.blogs[0]
                            ?.blogBannerImage
                        }
                        className="img-fluid"
                        width="100%"
                      />
                    </a>
                    <div className="blog-top-test">
                      {/* <h4>
                        {getBlogCategorized?.result[3] &&
                          getBlogCategorized?.result[3]?.blogs[0]?.blogInfo
                            ?.title}
                      </h4> */}
                      <a
                        href={`blog/${getBlogCategorized?.result[3]?.blogs[0]?.blogInfo.slugUrl}`}
                        style={{
                          cursor: "pointer",
                          fontSize: isSmallScreen ? "14px" : "",
                          width: isSmallScreen ? "120px" : "",
                        }}
                      >
                        {getBlogCategorized?.result[3] &&
                          getBlogCategorized?.result[3]?.blogs[0]?.blogInfo
                            ?.title}
                      </a>
                      <br />

                      <span>
                        <a
                          href={`blog/${getBlogCategorized?.result[3]?.blogs[0]?.blogInfo.slugUrl}`}
                          style={{
                            fontSize: "16px",
                            color: "#707070",
                            cursor: "pointer",
                          }}
                        >
                          {getBlogCategorized?.result[3] &&
                            new Date(
                              getBlogCategorized?.result[3]?.blogs[0]?.createdAt
                            ).toDateString()}{" "}
                        </a>
                      </span>
                      {/* <p>
                        {getBlogCategorized?.result[3] &&
                          (slugHtml(
                            getBlogCategorized?.result[3]?.blogs[0]?.blogInfo
                              ?.description
                          )?.length > 100
                            ? slugHtml(
                                getBlogCategorized?.result[3]?.blogs[0]
                                  ?.blogInfo?.description
                              )?.substring(0, 120) + "..."
                            : slugHtml(
                                getBlogCategorized?.result[3]?.blogs[0]
                                  ?.blogInfo?.description
                              ))}
                      </p> */}
                    </div>
                  </div>
                </div>

                {getBlogCategorized?.result[3]?.blogs?.length > 0 &&
                  getBlogCategorized?.result[3]?.blogs
                    ?.slice(1)
                    ?.map((blog, index) => {
                      const div = document.createElement("div");
                      div.innerHTML = blog?.blogInfo?.description;
                      const text = div.textContent || div.innerText || "";
                      console.log("text", text);

                      return (
                        <div>
                          <Helmet>
                            {/* <title>{blog?.websiteMetadata?.title}</title> */}
                            <meta
                              name="description"
                              content={blog?.websiteMetadata?.description}
                            />
                            <meta
                              name="keywords"
                              content={blog?.websiteMetadata?.keywords[0]}
                            />
                          </Helmet>
                          <a
                            style={{ cursor: "pointer" }}
                            // onClick={() =>
                            //   navigate(`/blog/${blog?.blogInfo.slugUrl}`)
                            // }
                            className="bloging-post"
                            href={`blog/${blog?.blogInfo.slugUrl}`}
                          >
                            <div className="bloging-post-left">
                              <img
                                src={blog?.blogBannerImage}
                                className="img-fluid"
                                style={{
                                  width: "250px",
                                  height: "100px",
                                  objectFit: "cover",
                                  bordeRradius: "8px",
                                  display: "block",
                                }}
                              />
                            </div>
                            <div className="bloging-post-right">
                              <h4
                                style={{
                                  fontSize: isSmallScreen ? "14px" : "",
                                  width: isSmallScreen ? "120px" : "",
                                }}
                              >
                                {blog?.blogInfo?.title}
                              </h4>
                            </div>
                          </a>
                        </div>
                      );
                    })}
                <div className="blog-update-left">
                  <Helmet>
                    {/* <title>
                      {
                        getBlogCategorized?.result[4]?.blogs[0]?.websiteMetadata
                          ?.title
                      }
                    </title> */}
                    <meta
                      name="description"
                      content={
                        getBlogCategorized?.result[4]?.blogs[0]?.websiteMetadata
                          ?.description
                      }
                    />
                    <meta
                      name="keywords"
                      content={
                        getBlogCategorized?.result[4]?.blogs[0]?.websiteMetadata
                          ?.keywords[0]
                      }
                    />
                  </Helmet>
                  <div
                    className="top-blog-left md-12 lg-4"
                    // onClick={() =>
                    //   navigate(
                    //     `/blog/${getBlogCategorized?.result[4]?.blogs[0]?.blogInfo.slugUrl}`
                    //   )
                    // }
                  >
                    <h3
                      style={{
                        marginBottom: "20px",
                      }}
                    >
                      {getBlogCategorized?.result[4] &&
                        getBlogCategorized?.result[4]?.blogs[0]?.categoryDetails
                          ?.categoryName}
                    </h3>

                    <a
                      href={`blog/${getBlogCategorized?.result[4]?.blogs[0]?.blogInfo.slugUrl}`}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={
                          getBlogCategorized?.result[4] &&
                          getBlogCategorized?.result[4]?.blogs[0]
                            ?.blogBannerImage
                        }
                        className="img-fluid"
                        width="100%"
                      />
                    </a>
                    <div className="blog-top-test">
                      {/* <h5>
                        {getBlogCategorized?.result[5] &&
                          getBlogCategorized?.result[5]?.blogs[0]?.blogInfo
                            ?.title}
                      </h5> */}
                      <a
                        href={`blog/${getBlogCategorized?.result[4]?.blogs[0]?.blogInfo.slugUrl}`}
                        style={{
                          cursor: "pointer",
                          fontSize: isSmallScreen ? "14px" : "",
                          width: isSmallScreen ? "120px" : "",
                        }}
                      >
                        {getBlogCategorized?.result[4] &&
                          getBlogCategorized?.result[4]?.blogs[0]?.blogInfo
                            ?.title}
                      </a>
                      <br />

                      <span>
                        <a
                          href={`blog/${getBlogCategorized?.result[4]?.blogs[0]?.blogInfo.slugUrl}`}
                          style={{
                            fontSize: "16px",
                            color: "#707070",
                            cursor: "pointer",
                          }}
                        >
                          {getBlogCategorized?.result[4] &&
                            new Date(
                              getBlogCategorized?.result[4]?.blogs[0]?.createdAt
                            ).toDateString()}{" "}
                        </a>
                      </span>
                      {/* <p>
                        {getBlogCategorized?.result[5] &&
                          (slugHtml(
                            getBlogCategorized?.result[5]?.blogs[0]?.blogInfo
                              ?.description
                          )?.length > 100
                            ? slugHtml(
                                getBlogCategorized?.result[5]?.blogs[0]
                                  ?.blogInfo?.description
                              )?.substring(0, 120) + "..."
                            : slugHtml(
                                getBlogCategorized?.result[5]?.blogs[0]
                                  ?.blogInfo?.description
                              ))}
                      </p> */}
                    </div>
                  </div>
                </div>

                {getBlogCategorized?.result[4]?.blogs?.length > 0 &&
                  getBlogCategorized?.result[4]?.blogs
                    ?.slice(0)
                    ?.map((blog, index) => {
                      const div = document.createElement("div");
                      div.innerHTML = blog?.blogInfo?.description;
                      const text = div.textContent || div.innerText || "";
                      console.log("text", text);

                      return (
                        <div>
                          <Helmet>
                            {/* <title>{blog?.websiteMetadata?.title}</title> */}
                            <meta
                              name="description"
                              content={blog?.websiteMetadata?.description}
                            />
                            <meta
                              name="keywords"
                              content={blog?.websiteMetadata?.keywords[0]}
                            />
                          </Helmet>
                          <a
                            style={{ cursor: "pointer" }}
                            // onClick={() =>
                            //   navigate(`/blog/${blog?.blogInfo.slugUrl}`)
                            // }
                            className="bloging-post"
                            href={`blog/${blog?.blogInfo.slugUrl}`}
                          >
                            <div className="bloging-post-left">
                              <img
                                src={blog?.blogBannerImage}
                                className="img-fluid"
                                style={{
                                  width: "250px",
                                  height: "100px",
                                  objectFit: "cover",
                                  bordeRradius: "8px",
                                  display: "block",
                                }}
                              />
                            </div>
                            <div className="bloging-post-right">
                              <p
                                style={{
                                  fontSize: isSmallScreen ? "14px" : "",
                                  width: isSmallScreen ? "120px" : "",
                                }}
                              >
                                {blog?.blogInfo?.title}
                              </p>
                            </div>
                          </a>
                        </div>
                      );
                    })}
                <div className="blog-update-left">
                  <Helmet>
                    {/* <title>
                      {
                        getBlogCategorized?.result[5]?.blogs[0]?.websiteMetadata
                          ?.title
                      }
                    </title> */}
                    <meta
                      name="description"
                      content={
                        getBlogCategorized?.result[5]?.blogs[0]?.websiteMetadata
                          ?.description
                      }
                    />
                    <meta
                      name="keywords"
                      content={
                        getBlogCategorized?.result[5]?.blogs[0]?.websiteMetadata
                          ?.keywords[0]
                      }
                    />
                  </Helmet>
                  <div
                    className="top-blog-left"
                    // onClick={() =>
                    //   navigate(
                    //     `/blog/${getBlogCategorized?.result[5]?.blogs[0]?.blogInfo.slugUrl}`
                    //   )
                    // }
                  >
                    <h3
                      style={{
                        marginBottom: "20px",
                      }}
                    >
                      {getBlogCategorized?.result[5] &&
                        getBlogCategorized?.result[5]?.blogs[0]?.categoryDetails
                          ?.categoryName}
                    </h3>

                    <a
                      href={`blog/${getBlogCategorized?.result[5]?.blogs[0]?.blogInfo.slugUrl}`}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={
                          getBlogCategorized?.result[5] &&
                          getBlogCategorized?.result[5]?.blogs[0]
                            ?.blogBannerImage
                        }
                        className="img-fluid"
                        width="100%"
                      />
                    </a>
                    <div className="blog-top-test">
                      {/* <h5>
                        {getBlogCategorized?.result[5] &&
                          getBlogCategorized?.result[5]?.blogs[0]?.blogInfo
                            ?.title}
                      </h5> */}
                      <a
                        href={`blog/${getBlogCategorized?.result[5]?.blogs[0]?.blogInfo.slugUrl}`}
                        style={{
                          cursor: "pointer",
                          fontSize: isSmallScreen ? "14px" : "",
                          width: isSmallScreen ? "120px" : "",
                        }}
                      >
                        {getBlogCategorized?.result[5] &&
                          getBlogCategorized?.result[5]?.blogs[0]?.blogInfo
                            ?.title}
                      </a>
                      <br />

                      <span>
                        <a
                          href={`blog/${getBlogCategorized?.result[5]?.blogs[0]?.blogInfo.slugUrl}`}
                          style={{
                            fontSize: "16px",
                            color: "#707070",
                            cursor: "pointer",
                          }}
                        >
                          {getBlogCategorized?.result[5] &&
                            new Date(
                              getBlogCategorized?.result[5]?.blogs[0]?.createdAt
                            ).toDateString()}{" "}
                        </a>
                      </span>
                      {/* <p>
                        {getBlogCategorized?.result[5] &&
                          (slugHtml(
                            getBlogCategorized?.result[5]?.blogs[0]?.blogInfo
                              ?.description
                          )?.length > 100
                            ? slugHtml(
                                getBlogCategorized?.result[5]?.blogs[0]
                                  ?.blogInfo?.description
                              )?.substring(0, 120) + "..."
                            : slugHtml(
                                getBlogCategorized?.result[5]?.blogs[0]
                                  ?.blogInfo?.description
                              ))}
                      </p> */}
                    </div>
                  </div>
                </div>

                {getBlogCategorized?.result[5]?.blogs?.length > 0 &&
                  getBlogCategorized?.result[5]?.blogs
                    ?.slice(0)
                    ?.map((blog, index) => {
                      const div = document.createElement("div");
                      div.innerHTML = blog?.blogInfo?.description;
                      const text = div.textContent || div.innerText || "";
                      console.log("text", text);

                      return (
                        <div>
                          <Helmet>
                            {/* <title>{blog?.websiteMetadata?.title}</title> */}
                            <meta
                              name="description"
                              content={blog?.websiteMetadata?.description}
                            />
                            <meta
                              name="keywords"
                              content={blog?.websiteMetadata?.keywords[0]}
                            />
                          </Helmet>
                          <a
                            style={{ cursor: "pointer" }}
                            // onClick={() =>
                            //   navigate(`/blog/${blog?.blogInfo.slugUrl}`)
                            // }
                            className="bloging-post"
                            href={`blog/${blog?.blogInfo.slugUrl}`}
                          >
                            <div className="bloging-post-left">
                              <img
                                src={blog?.blogBannerImage}
                                className="img-fluid"
                                style={{
                                  width: "250px",
                                  height: "100px",
                                  objectFit: "cover",
                                  bordeRradius: "8px",
                                  display: "block",
                                }}
                              />
                            </div>
                            <div className="bloging-post-right">
                              <p
                                style={{
                                  fontSize: isSmallScreen ? "14px" : "",
                                  width: isSmallScreen ? "120px" : "",
                                }}
                              >
                                {blog?.blogInfo?.title}
                              </p>
                            </div>
                          </a>
                        </div>
                      );
                    })}
              </div>
            </div>
          ) : (
            <div className="row">
              <div className="col-md-8">
                <div
                  className="top-blog mb-2"
                  style={{
                    height: "30%",
                    objectFit: "cover",
                    width: "100%",
                  }}
                >
                  No Blog Found
                </div>
              </div>
            </div>
          )}
          {(blogCategorizedLoading || blogCategorizedFetching) && (
            <div
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CircularProgress />
            </div>
          )}
          <div
            style={{
              display: "flex",
              flexDirection: isSmallScreen ? "column" : "row",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <nav
              aria-label="Page navigation example"
              style={{
                marginTop: "40px",
              }}
            >
              <ul className="pagination">
                {getVisiblePages()?.length > 3 && currentPage > 3 && (
                  <li
                    className="page-item"
                    onClick={() => handlePageClick(1)}
                    style={{ cursor: "pointer" }}
                  >
                    <a className="page-link">1</a>
                  </li>
                )}
                <li className="page-item" onClick={handlePrevClick}>
                  <a className="page-link" href="#">
                    Previous
                  </a>
                </li>
                {getVisiblePages().map((page) => (
                  <li
                    key={page}
                    className={`page-item ${
                      page === (currentPage || pages) ? "active" : ""
                    }`}
                    onClick={() => handlePageClick(page)}
                    style={{ cursor: "pointer" }}
                  >
                    <a className="page-link" href="#">
                      {page}
                    </a>
                  </li>
                ))}

                <li className="page-item" onClick={handleNextClick}>
                  <a className="page-link" style={{ cursor: "pointer" }}>
                    Next
                  </a>
                </li>
                {totalPages > 5 && currentPage < totalPages - 2 && (
                  <li
                    className="page-item"
                    onClick={() => handlePageClick(totalPages)}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <a className="page-link">...{totalPages}</a>
                  </li>
                )}
              </ul>
            </nav>
            {/* <div className=" pagination-controls">
              <label
                style={{
                  fontSize: "16px",
                  fontWeight: "400",
                }}
              >
                <select
                  value={itemsPerPage}
                  onChange={handleItemsPerPageChange}
                  style={{
                    // style for select
                    padding: "5px",
                    borderRadius: "5px",
                    border: "1px solid #ccc",
                    marginRight: "10px",
                    cursor: "pointer",
                  }}
                >
                  {itemsPerPageOptions.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
                Items per page
              </label>
            </div> */}
          </div>
        </div>
      </section>

      <section id="joinToday">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="join-free">
                <h2>Join Today. It’s free</h2>
                <p>
                  Start now and discover dependable contact information on
                  LinkedIn for free, featuring categorized and verified email
                  addresses and phone numbers.
                </p>
                <a style={{ cursor: "pointer" }}>Get started, It's Free</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Blog;
