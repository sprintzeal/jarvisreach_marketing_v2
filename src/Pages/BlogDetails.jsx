import React, { useEffect, useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowLeft, FaArrowRightToBracket } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { useGetBlogListQuery } from "../slices/adminSlice";
import { Avatar, CircularProgress, useMediaQuery } from "@mui/material";
import { useGetBlogCategorizedQuery } from "../slices/customerSlice";
import TopBar from "../components/TopBar";
import { Helmet } from "react-helmet-async";
import Footer from "../components/Footer";

const BlogDetails = () => {
  const navigate = useNavigate();
  const { auth } = useSelector((state) => state.auth);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [isFirstRender, setIsFirstRender] = useState(true);
  const [catName, setCatName] = useState("");
  const [active, setActive] = useState(true);
  const [paramId, setParamId] = useState("");
  const {
    data: getBlog,
    isLoading: blogLoading,
    isError: blogError,
  } = useGetBlogListQuery({ page: 1, limit: 10 });

  const {
    data: getBlogCategorized,
    isLoading: blogCategorizedLoading,
    isError: blogCategorizedError,
    isSuccess: blogCategorizedSuccess,
  } = useGetBlogCategorizedQuery({ page: 1, limit: 20 });

  useEffect(() => {
    // Scroll to top on first render
    if (isFirstRender === true) {
      window.scrollTo(0, 0);
      setIsFirstRender(false);
    }

    // Extract the last part of the URL path
    const path = window.location.pathname.split("/");
    const paramId = path[path.length - 1];
    console.log("paramId:", paramId);

    // Find the category based on the slug URL
    const findCategoryName = getBlogCategorized?.result?.find((category) => {
      return category?.blogs?.find(
        (blog) => blog?.blogInfo?.slugUrl === paramId
      );
    });

    // Update the category name
    setCatName(
      findCategoryName?.blogs?.map(
        (blog) => blog?.categoryDetails?.categoryName
      )[0]
    );

    // Set the paramId state, replacing "%20" with spaces
    if (paramId) {
      setParamId(paramId.replace(/%20/g, " "));
    }
  }, [window.location.pathname, getBlogCategorized]); // Add dependencies

  console.log("catName", catName);

  const slugHtml = (html) => {
    const div = document.createElement("div");
    div.innerHTML = html;
    let text = div.textContent || div.innerText || "";

    return text;
  };

  useEffect(() => {
    const images = document.querySelectorAll("#content-container img");

    images?.forEach((img) => {
      img.style.maxWidth = "800px";
      img.style.maxHeight = "800px";
    });
  }, [blogCategorizedSuccess]);

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
          Jarvis Reach Blog | Resources |{" "}
          {(getBlogCategorized?.result?.length > 0 &&
            getBlogCategorized.result.flatMap((category) =>
              category.blogs.filter(
                (blog) => blog.blogInfo?.slugUrl === paramId
              )
            )[0]?.blogInfo?.title) ||
            "No Title"}
        </title>
        <meta
          name="description"
          content="Jarvis Reach Posts on Blog almost everyday. We bring new updates on what's trending in technology from latest research and update the content regularly."
        />
      </Helmet>

      <section
        id="blogUser"
        style={{
          marginTop: "100px",
          marginBottom: "100px",
          borderBottom: "1px solid #ddd",
        }}
      >
        <div className="container">
          {/* backButton */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              marginBottom: "20px",
              cursor: "pointer",
            }}
            onClick={() => navigate("/blog")}
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
              Back to Blog
            </span>
          </div>
          <div className="row">
            {getBlogCategorized &&
              getBlogCategorized?.result &&
              getBlogCategorized?.result.length > 0 &&
              getBlogCategorized?.result?.map((blogs) => {
                return blogs?.blogs?.map((blog) => {
                  if (blog?.blogInfo?.slugUrl === paramId) {
                    return (
                      <div className="col-md-8">
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
                        <div key={blog?.blogInfo?.slugUrl}>
                          {/* author info */}
                          <div
                            style={{
                              display: "flex",
                              flexDirection: "row",
                              alignItems: "center",
                              justifyContent: "space-between",
                              marginBottom: "20px",
                            }}
                          >
                            <div
                              className="author-info"
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "10px",
                                marginBottom: "20px",
                              }}
                            >
                              <div className="author-info-left">
                                <Avatar
                                  src={blog?.authorProfile?.authorImage}
                                  alt="author"
                                  style={{
                                    width: "50px",
                                    height: "50px",
                                  }}
                                />
                              </div>
                              <div className="author-info-right">
                                <h3
                                  style={{
                                    fontSize: "20px",
                                    fontWeight: 600,
                                    marginBottom: "5px",
                                  }}
                                >
                                  {blog?.authorProfile?.authorName}
                                </h3>
                                <span
                                  style={{
                                    fontSize: "14px",
                                    color: "#666",
                                    fontWeight: 500,
                                    width: "30%",
                                  }}
                                >
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html:
                                        blog?.authorProfile?.authorDescription,
                                    }}
                                  />
                                </span>
                                <span
                                  style={{
                                    fontSize: "14px",
                                    color: "#666",
                                    fontWeight: 500,
                                  }}
                                >
                                  {new Date(blog?.createdAt).toDateString()}
                                </span>
                              </div>
                            </div>

                            {/* social media links */}
                            <div
                              style={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: "center",
                                gap: "10px",
                                cursor: "pointer",
                              }}
                            >
                              {blog?.authorSocialLinks?.facebook && (
                                <i
                                  className="fab fa-facebook-square"
                                  onClick={() =>
                                    window.open(
                                      `https://${blog.authorSocialLinks.facebook}`,
                                      "_blank"
                                    )
                                  }
                                ></i>
                              )}
                              {
                                blog?.authorSocialLinks?.twitter && (
                                  <i
                                    className="fab fa-twitter-square"
                                    onClick={() =>
                                      window.open(
                                        `https://${blog.authorSocialLinks.twitter}`,
                                        "_blank"
                                      )
                                    }
                                  ></i>
                                ) // eslint-disable-line
                              }
                              {blog?.authorSocialLinks?.linkedin && (
                                <i
                                  className="fab fa-linkedin"
                                  onClick={() =>
                                    window.open(
                                      `https://${blog.authorSocialLinks.linkedin}`,
                                      "_blank"
                                    )
                                  }
                                ></i>
                              )}
                              {
                                blog?.authorSocialLinks?.instagram && (
                                  <i
                                    className="fab fa-instagram"
                                    onClick={() =>
                                      window.open(
                                        `https://${blog.authorSocialLinks.instagram}`,
                                        "_blank"
                                      )
                                    }
                                  ></i>
                                ) // eslint-disable-line
                              }
                              {
                                blog?.authorSocialLinks?.youtube && (
                                  <i
                                    className="fab fa-youtube"
                                    onClick={() =>
                                      window.open(
                                        `https://${blog.authorSocialLinks.youtube}`,
                                        "_blank"
                                      )
                                    }
                                  ></i>
                                ) // eslint-disable-line
                              }
                              {
                                blog?.authorSocialLinks?.skype && (
                                  <i
                                    className="fab fa-skype"
                                    onClick={() =>
                                      window.open(
                                        `https://${blog.authorSocialLinks.skype}`,
                                        "_blank"
                                      )
                                    }
                                  ></i>
                                ) // eslint-disable-line
                              }
                            </div>
                          </div>
                          <div
                            style={{
                              marginTop: "10px",
                              marginBottom: "30px",
                            }}
                          >
                            <h1>{blog?.blogInfo?.title}</h1>
                          </div>
                          <div className="top-blog">
                            <a>
                              <img
                                src={blog?.blogBannerImage}
                                className="img-fluid"
                                width="100%"
                              />
                            </a>
                          </div>

                          {blog?.tableOfContents?.length === 0 && (
                            <div className="blog-lead-details mt-4">
                              <div
                                dangerouslySetInnerHTML={{
                                  __html: blog?.blogInfo?.description,
                                }}
                              />
                            </div>
                          )}
                          {(!blog?.blogInfo?.description ||
                            blog?.blogInfo?.description === "" ||
                            !blog?.blogInfo?.description === undefined ||
                            blog?.blogInfo?.description) &&
                            blog?.tableOfContents?.length > 0 && (
                              <div>
                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    marginTop: "20px",
                                    border: "1px solid #aaa",
                                    backgroundColor: "#f9f9f9",
                                    padding: "10px",
                                    marginBottom: "30px",
                                    gap: "20px",
                                    width: "80%",
                                    transition: "width 0.5s",
                                  }}
                                >
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "row",
                                      alignItems: "center",
                                      justifyContent: "space-between",
                                    }}
                                  >
                                    <h3
                                      style={{
                                        fontSize: "24px",
                                        fontWeight: 600,
                                        marginBottom: "10px",
                                      }}
                                    >
                                      Table of Contents
                                    </h3>

                                    <span
                                      className="ez-toc-title-toggle"
                                      style={{
                                        cursor: "pointer",
                                      }}
                                      onClick={() => setActive(!active)}
                                    >
                                      <a
                                        className="ez-toc-pull-right ez-toc-btn ez-toc-btn-xs ez-toc-btn-default ez-toc-toggle ez-toc-loaded"
                                        aria-label="ez-toc-toggle-icon-1"
                                        style={{
                                          cursor: "pointer",
                                        }}
                                      >
                                        <label
                                          for="item-66ed671c90c7b"
                                          aria-label="Table of Content"
                                        >
                                          <span
                                            style={{
                                              display: "flex",
                                              alignItems: "center",
                                              cursor: "pointer",

                                              justifyContent: "center",
                                              border: "1px solid #aaa",
                                              borderRadius: "7px",
                                              padding: "5px 3px",
                                            }}
                                          >
                                            <svg
                                              style={{
                                                fill: "#999",
                                                color: "#999",
                                              }}
                                              xmlns="http://www.w3.org/2000/svg"
                                              className="list-377408"
                                              width="20px"
                                              height="20px"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                            >
                                              <path
                                                d="M6 6H4v2h2V6zm14 0H8v2h12V6zM4 11h2v2H4v-2zm16 0H8v2h12v-2zM4 16h2v2H4v-2zm16 0H8v2h12v-2z"
                                                fill="currentColor"
                                              ></path>
                                            </svg>
                                            <svg
                                              style={{
                                                fill: "#999",
                                                color: "#999",
                                              }}
                                              className="arrow-unsorted-368013"
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="10px"
                                              height="10px"
                                              viewBox="0 0 24 24"
                                              version="1.2"
                                              baseProfile="tiny"
                                            >
                                              <path d="M18.2 9.3l-6.2-6.3-6.2 6.3c-.2.2-.3.4-.3.7s.1.5.3.7c.2.2.4.3.7.3h11c.3 0 .5-.1.7-.3.2-.2.3-.5.3-.7s-.1-.5-.3-.7zM5.8 14.7l6.2 6.3 6.2-6.3c.2-.2.3-.5.3-.7s-.1-.5-.3-.7c-.2-.2-.4-.3-.7-.3h-11c-.3 0-.5.1-.7.3-.2.2-.3.5-.3.7s.1.5.3.7z"></path>
                                            </svg>
                                          </span>
                                        </label>
                                      </a>
                                    </span>
                                  </div>
                                  <div
                                    style={{
                                      display: "flex",
                                      flexDirection: "column",
                                      gap: "10px",
                                      alignItems: "flex-start",
                                      justifyContent: "flex-start",
                                    }}
                                  >
                                    {active &&
                                      blog?.tableOfContents?.map(
                                        (content, index) => {
                                          return (
                                            <div
                                              style={{
                                                display: "flex",
                                                flexDirection: "row",
                                                gap: "5px",
                                                alignItems: "center",
                                                justifyContent: "flex-start",
                                                cursor: "pointer",
                                                color: "#444",
                                              }}
                                              onClick={() => {
                                                const element =
                                                  document.getElementById(
                                                    content?.question
                                                  );
                                                const yOffset = -100;
                                                const yPosition =
                                                  element.getBoundingClientRect()
                                                    .top +
                                                  window.pageYOffset +
                                                  yOffset;

                                                window.scrollTo({
                                                  top: yPosition,
                                                  behavior: "smooth",
                                                });
                                              }}
                                            >
                                              <h3
                                                style={{
                                                  fontSize: "18px",
                                                  fontWeight: 500,
                                                }}
                                              >
                                                {" "}
                                                {index + 1}
                                                {". "}
                                                {content?.question}
                                              </h3>
                                            </div>
                                          );
                                        }
                                      )}
                                  </div>
                                </div>

                                <div
                                  style={{
                                    display: "flex",
                                    flexDirection: "column",
                                    gap: "50px",
                                    alignItems: "flex-start",
                                    justifyContent: "flex-start",
                                  }}
                                  id="content-container"
                                >
                                  {blog?.tableOfContents?.map((content) => {
                                    return (
                                      <div id={content?.question}>
                                        <div
                                          style={{
                                            display: "flex",
                                            flexDirection: "column",
                                            gap: "10px",
                                            alignItems: "flex-start",
                                            justifyContent: "flex-start",
                                            width: "100%",
                                          }}
                                        >
                                          <h3
                                            style={{
                                              fontSize: isSmallScreen
                                                ? "20px"
                                                : "32px",
                                              fontWeight: 800,
                                              marginBottom: "10px",
                                            }}
                                          >
                                            <strong>{content?.question}</strong>
                                          </h3>
                                          <div
                                            style={{ textAlign: "left" }}
                                            dangerouslySetInnerHTML={{
                                              __html: content?.description,
                                            }}
                                          />
                                        </div>
                                      </div>
                                    );
                                  })}
                                </div>
                              </div>
                            )}
                          {/* <div className="row">
                          <div className="col-md-6">
                            <div className="top-blog-left">
                              <a>
                                <img
                                  src={blog?.blogThumbnailImage}
                                  className="img-fluid"
                                  width="100%"
                                />
                              </a>
                            </div>
                          </div>
                        </div> */}
                        </div>
                      </div>
                    );
                  }
                  return null; // Fallback for blogs that don't match paramId
                });
              })}
            {blogLoading && (
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
            )}
            <div className="col-md-4">
              {getBlogCategorized?.result[2]?.blogs?.find(
                (blog) => blog?.categoryDetails?.categoryName !== catName
              ) ? (
                <div className="blog-update-left">
                  <Helmet>
                    {/* <title>
                      {
                        getBlogCategorized?.result[2]?.blogs[0]?.websiteMetadata
                          ?.title
                      }
                    </title> */}
                    <meta
                      name="description"
                      content={
                        getBlogCategorized?.result[2]?.blogs[0]?.websiteMetadata
                          ?.description
                      }
                    />
                    <meta
                      name="keywords"
                      content={
                        getBlogCategorized?.result[2]?.blogs[0]?.websiteMetadata
                          ?.keywords[0]
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
                        getBlogCategorized?.result[2]?.blogs[0]?.categoryDetails
                          ?.categoryName}
                    </h3>

                    <a
                      href={`/blog/${getBlogCategorized?.result[2]?.blogs[0]?.blogInfo.slugUrl}`}
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
                      {getBlogCategorized?.result[2]?.blogs[0]?.blogInfo?.title}
                    </h4> */}
                      <a
                        href={`/blog/${getBlogCategorized?.result[2]?.blogs[0]?.blogInfo.slugUrl}`}
                        style={{
                          cursor: "pointer",
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
                          href={`/blog/${getBlogCategorized?.result[2]?.blogs[0]?.blogInfo.slugUrl}`}
                          style={{
                            cursor: "pointer",
                            fontSize: "12px",
                            color: "#707070",
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
                            getBlogCategorized?.result[2]?.blogs[0]?.blogInfo
                              ?.description
                          )?.substring(0, 120) + "..."
                        : slugHtml(
                            getBlogCategorized?.result[2]?.blogs[0]?.blogInfo
                              ?.description
                          )}
                    </p> */}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="blog-update-left">
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
                      {getBlogCategorized?.result[0] &&
                        getBlogCategorized?.result[0]?.blogs[0]?.categoryDetails
                          ?.categoryName}
                    </h3>

                    <a
                      href={`/blog/${getBlogCategorized?.result[0]?.blogs[0]?.blogInfo.slugUrl}`}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={
                          getBlogCategorized?.result[0]?.blogs[0]
                            ?.blogBannerImage
                        }
                        className="img-fluid"
                        width="100%"
                      />
                    </a>
                    <div className="blog-top-test">
                      <a
                        href={`/blog/${getBlogCategorized?.result[0]?.blogs[0]?.blogInfo.slugUrl}`}
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        {
                          getBlogCategorized?.result[0]?.blogs[0]?.blogInfo
                            ?.title
                        }
                      </a>
                      <br />
                      <span>
                        <a
                          href={`/blog/${getBlogCategorized?.result[0]?.blogs[0]?.blogInfo.slugUrl}`}
                          style={{
                            cursor: "pointer",
                            fontSize: "12px",
                            color: "#707070",
                          }}
                        >
                          {new Date(
                            getBlogCategorized?.result[0]?.blogs[0]?.createdAt
                          ).toDateString()}{" "}
                        </a>
                      </span>
                      {/* <p>
                      {slugHtml(
                        getBlogCategorized?.result[2]?.blogs[0]?.blogInfo
                          ?.description
                      )?.length > 100
                        ? slugHtml(
                            getBlogCategorized?.result[2]?.blogs[0]?.blogInfo
                              ?.description
                          )?.substring(0, 120) + "..."
                        : slugHtml(
                            getBlogCategorized?.result[2]?.blogs[0]?.blogInfo
                              ?.description
                          )}
                    </p> */}
                    </div>
                  </div>
                </div>
              )}

              {getBlogCategorized?.result[2]?.blogs?.length > 0 &&
              getBlogCategorized?.result[2]?.blogs?.find(
                (blog) => blog?.categoryDetails?.categoryName !== catName
              )
                ? getBlogCategorized?.result[2]?.blogs
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
                            style={{
                              cursor: "pointer",
                              display: "flex",
                              flexDirection: "row",
                              marginBottom: "20px",
                              marginTop: "20px",
                            }}
                            // onClick={() =>
                            //   navigate(`/blog/${blog?.blogInfo.slugUrl}`)
                            // }
                            href={`/blog/${blog?.blogInfo.slugUrl}`}
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
                              <p>{blog?.blogInfo?.title}</p>
                              {/* <p>{text?.substring(0, 120) + "..."}</p> */}
                            </div>
                          </a>
                        </div>
                      );
                    })
                : getBlogCategorized?.result[0]?.blogs
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
                            style={{
                              cursor: "pointer",
                              display: "flex",
                              flexDirection: "row",
                              marginBottom: "20px",
                              marginTop: "20px",
                            }}
                            className="bloging-post"
                            // onClick={() =>
                            //   navigate(`/blog/${blog?.blogInfo.slugUrl}`)
                            // }
                            href={`/blog/${blog?.blogInfo.slugUrl}`}
                          >
                            <div className="bloging-post-left">
                              <img
                                src={blog?.blogBannerImage}
                                className="img-fluid"
                              />
                            </div>
                            <div className="bloging-post-right">
                              <p>{blog?.blogInfo?.title}</p>
                              {/* <p>{text?.substring(0, 120) + "..."}</p> */}
                            </div>
                          </a>
                        </div>
                      );
                    })}
              {getBlogCategorized?.result[3]?.blogs?.find(
                (blog) => blog?.categoryDetails?.categoryName !== catName
              ) ? (
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
                      href={`/blog/${getBlogCategorized?.result[3]?.blogs[0]?.blogInfo.slugUrl}`}
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
                      <a
                        href={`/blog/${getBlogCategorized?.result[3]?.blogs[0]?.blogInfo.slugUrl}`}
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        {getBlogCategorized?.result[3] &&
                          getBlogCategorized?.result[3]?.blogs[0]?.blogInfo
                            ?.title}
                      </a>
                      <br />

                      <span>
                        <a
                          href={`/blog/${getBlogCategorized?.result[3]?.blogs[0]?.blogInfo.slugUrl}`}
                          style={{
                            cursor: "pointer",
                            fontSize: "12px",
                            color: "#707070",
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
                              getBlogCategorized?.result[3]?.blogs[0]?.blogInfo
                                ?.description
                            )?.substring(0, 120) + "..."
                          : slugHtml(
                              getBlogCategorized?.result[3]?.blogs[0]?.blogInfo
                                ?.description
                            ))}
                    </p> */}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="blog-update-left">
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
                      {getBlogCategorized?.result[0] &&
                        getBlogCategorized?.result[0]?.blogs[0]?.categoryDetails
                          ?.categoryName}
                    </h3>

                    <a
                      href={`/blog/${getBlogCategorized?.result[0]?.blogs[0]?.blogInfo.slugUrl}`}
                      style={{
                        cursor: "pointer",
                      }}
                    >
                      <img
                        src={
                          getBlogCategorized?.result[0]?.blogs[0]
                            ?.blogBannerImage
                        }
                        className="img-fluid"
                        width="100%"
                      />
                    </a>
                    <div className="blog-top-test">
                      <a
                        href={`/blog/${getBlogCategorized?.result[0]?.blogs[0]?.blogInfo.slugUrl}`}
                        style={{
                          cursor: "pointer",
                        }}
                      >
                        {
                          getBlogCategorized?.result[0]?.blogs[0]?.blogInfo
                            ?.title
                        }
                      </a>
                      <br />
                      <span>
                        <a
                          href={`/blog/${getBlogCategorized?.result[0]?.blogs[0]?.blogInfo.slugUrl}`}
                          style={{
                            cursor: "pointer",
                            fontSize: "12px",
                            color: "#707070",
                          }}
                        >
                          {new Date(
                            getBlogCategorized?.result[0]?.blogs[0]?.createdAt
                          ).toDateString()}{" "}
                        </a>
                      </span>
                      {/* <p>
                      {slugHtml(
                        getBlogCategorized?.result[2]?.blogs[0]?.blogInfo
                          ?.description
                      )?.length > 100
                        ? slugHtml(
                            getBlogCategorized?.result[2]?.blogs[0]?.blogInfo
                              ?.description
                          )?.substring(0, 120) + "..."
                        : slugHtml(
                            getBlogCategorized?.result[2]?.blogs[0]?.blogInfo
                              ?.description
                          )}
                    </p> */}
                    </div>
                  </div>
                </div>
              )}

              {getBlogCategorized?.result[3]?.blogs?.length > 0 &&
              getBlogCategorized?.result[3]?.blogs?.find(
                (blog) => blog?.categoryDetails?.categoryName !== catName
              )
                ? getBlogCategorized?.result[3]?.blogs
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
                            style={{
                              cursor: "pointer",
                              display: "flex",
                              flexDirection: "row",
                              marginBottom: "20px",
                              marginTop: "20px",
                            }}
                            // onClick={() =>
                            //   navigate(`/blog/${blog?.blogInfo.slugUrl}`)
                            // }
                            href={`/blog/${blog?.blogInfo.slugUrl}`}
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
                              <p>{blog?.blogInfo?.title}</p>
                              {/* <p>{text?.substring(0, 120) + "..."}</p> */}
                            </div>
                          </a>
                        </div>
                      );
                    })
                : getBlogCategorized?.result[0]?.blogs
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
                            style={{
                              cursor: "pointer",
                              display: "flex",
                              flexDirection: "row",
                              marginBottom: "20px",
                              marginTop: "20px",
                            }}
                            className="bloging-post"
                            // onClick={() =>
                            //   navigate(`/blog/${blog?.blogInfo.slugUrl}`)
                            // }
                            href={`/blog/${blog?.blogInfo.slugUrl}`}
                          >
                            <div className="bloging-post-left">
                              <img
                                src={blog?.blogBannerImage}
                                className="img-fluid"
                              />
                            </div>
                            <div className="bloging-post-right">
                              <p>{blog?.blogInfo?.title}</p>
                              {/* <p>{text?.substring(0, 120) + "..."}</p> */}
                            </div>
                          </a>
                        </div>
                      );
                    })}
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default BlogDetails;
