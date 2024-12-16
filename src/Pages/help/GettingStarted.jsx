import React, { useEffect, useRef, useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { FaArrowRightToBracket, FaChevronRight } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router";
import { CircularProgress, useMediaQuery } from "@mui/material";
import {
  useGetCreateCategoryQuery,
  useLazyGetCategoryQuestionsQuery,
} from "../../slices/adminSlice";
import TopBar from "../../components/TopBar";
import { Helmet } from "react-helmet-async";

const GettingStarted = () => {
  const [search, setSearch] = useState("");
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("md"));
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  const { auth } = useSelector((state) => state.auth);
  const [
    triggerGetCategoryQuestionsQuery,
    { data: questionsData, isSuccess: categoryQuestionSuccess },
  ] = useLazyGetCategoryQuestionsQuery({ search: search });
  const { name } = useParams();
  const location = useLocation();
  const { id } = location.state || {};
  const {
    data: category,
    isLoading,
    isSuccess: categorySuccess,
  } = useGetCreateCategoryQuery({
    page: 1,
    limit: 10,
    pagination: false,
    status: "Active",
  });
  useEffect(() => {
    // console.log("If Id then console :", id)
    try {
      triggerGetCategoryQuestionsQuery({ id, search });
      // navigate(`/getting-start/${id}`)
    } catch (error) {
      console.log("Error :", error.data.message);
    }

    // save categoryName in state if match with id
  }, [id, search]);

  const debounce = useRef();
  const handleSearchDebounced = (value) => {
    console.log("Valueeee :", value);
    clearTimeout(debounce.current);
    debounce.current = setTimeout(() => {
      setSearch(value);
      console.log("Search => ", search);
    }, 300);
  };
  const handleInputChange = (e) => {
    const inputVal = e.target.value;
    console.log(inputVal);
    setQuery(inputVal);
    handleSearchDebounced(inputVal);
  };

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
          Jarvis Reach Help Center |{" "}
          {`${
            category?.result.length > 0
              ? category?.result?.find((cat) => cat._id === id)?.categoryName
              : ""
          }`}
        </title>
        <meta
          name="description"
          content="Jarvis Reach Posts on help center almost everyday. We bring new updates on how to help yourself, and set up your account by yourself without any external help."
        />
      </Helmet>
      <section id="helpCenter">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
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
                        onChange={handleInputChange}
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

      <section id="getCollection">
        <div className="container">
          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div id="getBreadcrumb">
                <nav
                  style={{ backgroundColor: "transparent" }}
                  aria-label="breadcrumb"
                >
                  <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                      <a
                        style={{
                          textDecoration: "none",
                          cursor: "pointer",
                        }}
                        onClick={() => navigate("/help-center")}
                      >
                        All Collections
                      </a>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                      {category?.result.length > 0 &&
                        category?.result?.find((cat) => cat._id === id)
                          ?.categoryName}
                    </li>
                  </ol>
                </nav>
              </div>

              <div
                className="get-articale
                "
                style={{
                  whiteSpace: "no-wrap",
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                }}
              >
                <p>
                  <i className="fa-solid fa-file-circle-check"></i>
                </p>
                <h2>
                  {" "}
                  {category?.result.length > 0 &&
                    category?.result?.find((cat) => cat._id === id)
                      ?.categoryName}
                </h2>
              </div>
              {!categoryQuestionSuccess ? (
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
                  <CircularProgress
                    style={{ color: "red", fontSize: "100px" }}
                  />
                </div>
              ) : (
                <div className="get-list-group">
                  <div className="get-links">
                    {categoryQuestionSuccess &&
                      questionsData?.result.map((question, index) => (
                        <a
                          onClick={() => {
                            const questions = question.question
                              .replace(/\s+/g, "-")
                              .toLowerCase();
                              const id = question?._id;
                              navigate(`/${name}/${questions}`, { state: {id: id} });
                          }}
                          style={{
                            cursor: "pointer",
                          }}
                          key={index}
                        >
                          {question.question}
                          <span>
                            <FaChevronRight
                              style={{ fontSize: "10px", color: "#000" }}
                            />
                          </span>
                        </a>
                      ))}
                    {questionsData?.result.length === 0 && (
                      <div
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          justifyContent: "center",
                          alignItems: "center",
                          padding: "10px",
                          backgroundColor: "transparent",
                        }}
                      >
                        <h1>No Question Found</h1>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GettingStarted;