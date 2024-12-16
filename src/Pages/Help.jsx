import React, { useEffect, useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
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
import { useSelector } from "react-redux";
import { useNavigate } from "react-router";
import { CircularProgress, useMediaQuery } from "@mui/material";
import {
  useGetCreateCategoryQuery,
  useLazyGetCategoryQuestionsQuery,
} from "../slices/adminSlice";
import Footer from "../components/Footer";
import TopBar from "../components/TopBar";
import { Helmet } from "react-helmet-async";

const Help = () => {
  const navigate = useNavigate();
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));

  const { auth } = useSelector((state) => state.auth);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const {
    data: category,
    isLoading,
    isSuccess: categorySuccess,
  } = useGetCreateCategoryQuery({
    page: 1,
    limit: 10,
    pagination: false,
    search: search,
    status: "Active",
  });
  const [
    triggerGetCategoryQuestionsQuery,
    { data: questionsData, isSuccess: categoryQuestionSuccess },
  ] = useLazyGetCategoryQuestionsQuery();
  // const {data, categorySuccess}=useGetCreateCategoryQuery();
  //console.log("Data in Helpssssssssssss :", questionsData);

  useEffect(() => {
    if (categorySuccess) {
      console.log("Data in Help :", category);
    }
  }, [categorySuccess]);
  useEffect(() => {
    if (categoryQuestionSuccess) {
      console.log("questionsData :", questionsData);
    }
  }, [categoryQuestionSuccess]);
  const getCategoryData = (name, id) => {
    const sluggedName = name.replace(/\s+/g, "-").toLowerCase();
    navigate(`/${sluggedName}`, { state: { id} });
  };
  const debounce = useRef();
  const handleSearchDebounced = (value) => {
    console.log("Valueeee :", value);
    clearTimeout(debounce.current);
    debounce.current = setTimeout(() => {
      setSearch(value);
      console.log("Search => ", search);
    }, 300);
  };
  const handleSearchInput = (e) => {
    const inputVal = e.target.value;
    console.log(inputVal);
    setQuery(inputVal);
    handleSearchDebounced(inputVal);
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

  return (
    <div className="wrapper">
      <TopBar />
      <Helmet>
        <title>Jarvis Reach Help Center | Resources To Fix | New Updates</title>
        <meta
          name="description"
          content="Jarvis Reach Posts on help center almost everyday. We bring new updates on how to help yourself, and set up your account by yourself without any external help."
        />
      </Helmet>
      <section id="helpCenter">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="search-head">
                <h1>Advice and answers from the Jarvis Reach</h1>
              </div>

              <div className="row mb-5">
                <div className="col-lg-8 mx-auto">
                  <div id="searchingHelp">
                    <div className="input-group">
                      <input
                        type="search"
                        placeholder="Search for articles..."
                        aria-describedby="button-addon1"
                        className="form-control border-0 bg-search"
                        value={query}
                        onChange={(e) => {
                          handleSearchInput(e);
                        }}
                      />
                      <div className="input-group-append">
                        <button
                          id="button-addon1"
                          type="submit"
                          className="btn"
                        >
                          <i className="fa fa-search"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="getStart">
        <div className="container">
          <div className="row">
            {!categorySuccess ? (
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "20px",
                  backgroundColor: "transparent",
                  // height: "100vh",
                }}
              >
                <CircularProgress style={{ color: "red", fontSize: "100px" }} />
              </div>
            ) : (
              <div className="col-lg-12">
                {categorySuccess &&
                  category &&
                  category?.result?.map((categoryName, index) => {
                    if (categoryName?.status === "Active")
                      return (
                        <a
                          target="_blank"
                          className="get-start-box"
                          onClick={() =>
                            getCategoryData(
                              categoryName.categoryName,
                              categoryName._id
                            )
                          }
                          style={{
                            cursor: "pointer",
                          }}
                        >
                          <div className="get-start-box-left">
                            <p>
                              {index === 0 ? (
                                <FaFileCircleCheck
                                  style={{ color: "#ff000d", fontSize: "40px" }}
                                />
                              ) : (
                                <i class="fa-solid fa-folder-open"></i>
                              )}
                            </p>
                          </div>
                          <div className="get-start-box-right">
                            <h5>{categoryName.categoryName}</h5>
                            <p>
                              {categoryName.helpSupportCount === 0
                                ? "No articles available."
                                : categoryName.helpSupportCount === 1
                                ? "1 article"
                                : `${categoryName.helpSupportCount} articles`}
                            </p>
                          </div>
                        </a>
                      );
                  })}
                {category?.result?.length === 0 && (
                  <a>
                    <div
                      className="get-start-box-left"
                      style={{ display: "flex", justifyContent: "center" }}
                    >
                      <p>No Categories Found.</p>
                    </div>
                  </a>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Help;
