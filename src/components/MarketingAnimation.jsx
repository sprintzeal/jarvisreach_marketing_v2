import React, { useEffect, useState } from "react";
import Joyride, { ACTIONS, EVENTS, STATUS } from "react-joyride";
import OpenInFullIcon from "@mui/icons-material/OpenInFull";
import RefreshIcon from "@mui/icons-material/Refresh";
import LinkIcon from "@mui/icons-material/Link";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import { motion } from "framer-motion";
import { useMediaQuery } from "@mui/system";

const MarketingAnimation = () => {
  const [tourStarted, setTourStarted] = useState(false);
  const [currentImage, setCurrentImage] = useState(null);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const [stepIndex, setStepIndex] = useState(0);
  const [prevHighlight, setPrevHighlight] = useState({ scale: 1, x: 0, y: 0 });
  const [containerClass, setContainerClass] = useState("container");
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("lg"));
  // Images to be displayed in the iframe
  const images = [
    // "/src/assests/images/tourImages/123",
    "/assets/images/tourImages/16.jpg",
    "/assets/images/tourImages/13.jpg",
    "/assets/images/tourImages/14.jpg",
    "/assets/images/tourImages/14.jpg",
    "/assets/images/tourImages/17.jpg",
    // "/assets/images/tourImages/17.jpg",
    "/assets/images/tourImages/18.jpg",
    "/assets/images/tourImages/19.jpg",
    "/assets/images/tourImages/20.jpg",
    "/assets/images/tourImages/21.jpg",
  ];

  // Steps for the Joyride
  const steps = [
    {
      target: ".image-section-one", // Target a section on the first image
      content: "Click the widget to start the process.",
      disableBeacon: true,
      placement: "left",
    },
    {
      target: ".image-section-two", // Target a section on the second image
      content:
        'Click the "Reveal Info & Add" button to reveal contact details and save them for later use effortlessly.',
      disableBeacon: true,
      waitForSelector: ".image-section-two",
      placement: "left",
    },
    {
      target: ".image-section-three", // Target a section on the third image
      content: "Copy the contact info directly.",
      disableBeacon: true,
      waitForSelector: ".image-section-three",
      placement: "left",
    },
    {
      target: ".image-section-four", // Target a section on the fourth image
      content: " You can also add contacts directly from search results.",
      disableBeacon: true,
      placement: "bottom",
    },
    {
      target: ".image-section-five", // Target a section on the fifth image
      content:
        " Add leads individually using + icon or in bulk using the boxes.",
      disableBeacon: true,
      placement: "left",
    },
    // {
    //   target: ".image-section-six", // Target a section on the fifth image
    //   content: "Access contact details from the info pills.",
    //   disableBeacon: true,
    //   placement: "left",
    // },
    {
      target: ".image-section-six", // Target a section on the fifth image
      content:
        "View your contacts, organize them into folders, and export leads from your contact lists!",
      disableBeacon: true,
      placement: "left",
      styles: {
        tooltip: {
          marginTop:
            innerWidth <= 1340 && innerWidth >= 660 ? "-130px" : "-130px",
          marginLeft: innerWidth < 1340 && innerWidth >= 660 ? "150px" : "0px",
        },
      },
    },
    {
      target: ".image-section-seven", // Target a section on the fifth image
      content:
        "Modify contact information, add or update emails, include notes or tags, and update the status.",
      disableBeacon: true,
      placement: "left",
    },
    {
      target: ".image-section-eight", // Target a section on the fifth image
      content:
        "Configure or update your SMTP settings to ensure smooth email delivery to your contacts.",
      disableBeacon: true,
      placement: "right",
    },
    {
      target: ".image-section-nine", // Target a section on the fifth image
      content:
        "Create templates with follow-ups that send automatically when assigned to contacts.",
      disableBeacon: true,
      placement: "right",
    },
  ];

  const handleJoyrideCallback = (data) => {
    const { index, status, action, type } = data;

    if ([EVENTS.TOUR_END, EVENTS.SKIP].includes(type)) {
      if ([STATUS.FINISHED, STATUS.SKIPPED].includes(status)) {
        setTourStarted(false); // End the tour
        setCurrentImage(null); // Clear the current image
        setStepIndex(0); // Reset step index
      }
    } else if ([EVENTS.STEP_AFTER, EVENTS.TARGET_NOT_FOUND].includes(type)) {
      setStepIndex(index + (action === ACTIONS.PREV ? -1 : 1));
      setCurrentImage(index + (action === ACTIONS.PREV ? -1 : 1));
    }
  };

  const startTour = (e) => {
    setCurrentImage(0);
    setTourStarted(true);
  };

  // Function to toggle full-screen mode
  const toggleFullScreen = () => {
    setIsFullScreen(!isFullScreen);
  };
  const getHighlightPosition = (imageIndex) => {
    // Define positions for each highlighted section (adjust the coordinates based on your actual design)
    switch (imageIndex) {
      case 0:
        return { scale: 1, x: 0, y: 0 };
      case 1:
        return { scale: 0.9, x: -155, y: -60 };
      case 2:
        return { scale: 0.9, x: -15, y: -50 };
      case 3:
        return { scale: 0.9, x: -15, y: -200 };
      case 4:
        return { scale: 1, x: 550, y: 0 };
      case 5:
        return { scale: 1, x: 50, y: -150 };
      case 6:
        return {
          scale: isFullScreen && currentImage === 5 ? 1 : 0.9,
          x: 0,
          y: -50,
        };
      case 7:
        return { scale: 0.9, x: 50, y: -50 };
      case 8:
        return { scale: 1, x: -14, y: -50 };
      case 9:
        return { scale: 1, x: -6, y: -50 };
      default:
        return { scale: 1.3, x: 0, y: 0 };
    }
  };

  // useEffect for preload images
  useEffect(() => {
    const hiddenDiv = document.createElement("div");
    hiddenDiv.classList.add("preload-images");
    hiddenDiv.style.display = "none";

    // Preload all images
    images.forEach((src) => {
      const img = new Image();
      img.src = src;
      hiddenDiv.appendChild(img);
    });

    document.body.appendChild(hiddenDiv);
    return () => {
      document.body.removeChild(hiddenDiv);
    };
  }, []);

  useEffect(() => {
    // Set initial positions for the first image
    if (currentImage !== null) {
      const highlight = getHighlightPosition(currentImage);
      setPrevHighlight(highlight);
    }
    console.log(currentImage);
  }, [currentImage]);

  useEffect(() => {
    if (isFullScreen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isFullScreen]);

  useEffect(() => {
    const updateContainerClass = () => {
      if (window.innerWidth > 1400) {
        setContainerClass("container");
      } else {
        setContainerClass("container-fluid");
      }
    };

    // Set initial class based on screen width
    updateContainerClass();

    // Add event listener to update on resize
    window.addEventListener("resize", updateContainerClass);

    // Clean up event listener on component unmount
    return () => {
      window.removeEventListener("resize", updateContainerClass);
    };
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add event listener for window resize
    window.addEventListener("resize", handleResize);

    // Clean up event listener when component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section
      id="trySprint"
      style={{
        padding: isFullScreen ? "0px" : "60px 0px",
        position: "relative",
        overflow: "hidden",
      }}
      // marginTop:isFullScreen && innerWidth < 1000 ? "2000px":""
    >
      <div className={containerClass}>
        <div className="row">
          <div
            className="col-md-12 mx-auto px-0"
            style={{
              position: isFullScreen ? "fixed" : "relative",
              top: isFullScreen ? 0 : "auto",
              left: isFullScreen ? 0 : "auto",
              width: isFullScreen ? "100%" : windowWidth > 768 ? "90%" : "97%",
              height: isFullScreen ? "100vh" : "auto",
              zIndex: isFullScreen ? 1050 : "auto",
            }}
          >
            <div className="tour-guide-header d-flex justify-content-between">
              <div className="tour-header-indicators">
                <p></p>
                <p></p>
                <p></p>
              </div>
              <div className="tour-header-center">
                <LinkIcon
                  sx={{
                    mr: 3,
                    transform: "rotate(-45deg)",
                    fontSize: "20px",
                  }}
                />
                Linkedin / Jarvis Reach Demo
                <RefreshIcon sx={{ ml: 1, fontSize: "20px" }} />
              </div>
              <div className="tour-header-expand" onClick={toggleFullScreen}>
                {isFullScreen ? (
                  <CloseFullscreenIcon
                    sx={{ cursor: "pointer", opacity: "0.6" }}
                  />
                ) : (
                  <OpenInFullIcon
                    sx={{ cursor: "pointer", opacity: "0.6" }}
                    fontSize="25px"
                  />
                )}
              </div>
            </div>
            <div
              className="try-your-self"
              style={{ overflow: "hidden", position: "relative" }}
            >
              {/* Joyride Tour */}
              {tourStarted && (
                <Joyride
                  steps={steps}
                  stepIndex={stepIndex}
                  continuous={true}
                  showProgress={false}
                  showSkipButton={true}
                  showOverlay={false}
                  callback={handleJoyrideCallback}
                  run={tourStarted}
                  disableScrolling
                  disableOverlay={true}
                  animation={true}
                  transition="slide"
                  styles={{
                    options: {
                      zIndex: 999,
                    },
                    buttonClose: {
                      display: "none",
                    },
                    tooltip: {
                      borderRadius: "5px",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.2)",
                      padding: "0px 11px 8px 11px",
                      // width:"80%"
                    },
                    buttonNext: {
                      backgroundColor: "#6658dd",
                      borderRadius: "4px",
                      color: "#fff",
                      marginRight: "10px",
                      padding: "4px 8px",
                      fontSize: "14px",
                    },
                    buttonBack: {
                      color: "#6658dd",
                    },
                    footer: {
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      marginTop: "0px",
                    },
                    stepCounter: {
                      position: "absolute",
                      bottom: "10px",
                      left: "10px",
                      fontSize: "14px",
                      color: "#666",
                    },
                  }}
                  locale={{
                    next: "Next",
                    skip: `${stepIndex + 1} / ${steps.length}`,
                    back: "Back",
                    last: "Finish",
                  }}
                />
              )}

              <div
                className="iframe-container"
                style={{
                  position: "relative",
                  width: "100%",
                  paddingBottom: "60.25%",
                  height: isFullScreen && "100vh",
                }}
              >
                {/* Dynamic content container */}
                <div
                  // className={zoomed ? "zoomed-in" : "zoomed-out"}
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    overflow: "hidden",
                    border: "none",
                    borderRadius: "0px 0px 10px 10px",
                  }}
                >
                  {/* Conditionally render content based on currentImage */}
                  {currentImage === null ? (
                    <div
                      className="d-flex flex-column gap-1 justify-content-center align-items-center tour-guide"
                      style={{ width: "100%", height: "100%" }}
                    >
                      <h3 className="text-white text-center">
                        Try Jarvis Reach Yourself
                      </h3>
                      <span className="text-center">
                        A quick demo to show how Jarvis Reach works
                      </span>
                      <button
                        id="getStarted"
                        style={{ padding: "8px 30px", fontSize: "16px" }}
                        onClick={() => startTour()}
                      >
                        Get Started
                      </button>
                    </div>
                  ) : (
                    <div
                      className="TourImages"
                      style={{
                        position: "relative",
                        // width: isFullScreen && "100%",
                        height: "100%",
                        background: isFullScreen ? "black" : "",
                      }}
                    >
                      {/* Animated Image with motion */}
                      <motion.img
                        key={currentImage}
                        src={images[currentImage]}
                        alt="Dynamic Content"
                        // className={isFullScreen && 'img-fluid'}
                        initial={{
                          x: getHighlightPosition(currentImage).x, // Animate to the new highlight's x position
                          y: getHighlightPosition(currentImage).y, // Animate to the new highlight's y position
                          scale: getHighlightPosition(currentImage).scale, // Start at previous y position
                          opacity: 0, // Start transparent
                        }}
                        animate={{
                          x: getHighlightPosition(currentImage + 1).x, // Animate to the new highlight's x position
                          y: getHighlightPosition(currentImage + 1).y, // Animate to the new highlight's y position
                          scale: getHighlightPosition(currentImage + 1).scale,
                          opacity: 1, // Fade in to full opacity
                        }}
                        exit={{
                          scale: prevHighlight.scale, // Shrink back to the previous highlight position
                          x: prevHighlight.x, // Move back to previous highlight
                          y: prevHighlight.y, // Move back to previous highlight
                          opacity: 0, // Fade out
                        }}
                        transition={{ duration: 2 }} // Transition speed
                        style={{
                          width: "120%",
                          borderRadius: "0px 0px 10px 10px",
                          // height:isFullScreen && "110%",
                          marginLeft:
                            currentImage === 1
                              ? "-11.5%"
                              : currentImage === 2
                              ? "-12%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 2000 &&
                                innerWidth >= 1830
                              ? "-31%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 1830 &&
                                innerWidth >= 1770
                              ? "-33%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 1770 &&
                                innerWidth >= 1700
                              ? "-34.2%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 1700 &&
                                innerWidth >= 1650
                              ? "-35%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 1650 &&
                                innerWidth >= 1580
                              ? "-36.5%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 1580 &&
                                innerWidth >= 1525
                              ? "-37.8%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 1525 &&
                                innerWidth >= 1470
                              ? "-39%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 1470 &&
                                innerWidth >= 1418
                              ? "-40.5%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 1418 &&
                                innerWidth >= 1360
                              ? "-42%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 1360 &&
                                innerWidth >= 1320
                              ? "-43.5%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 1320 &&
                                innerWidth >= 1270
                              ? "-45%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 1270 &&
                                innerWidth >= 1225
                              ? "-46.7%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 1225 &&
                                innerWidth >= 1180
                              ? "-48%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 1180 &&
                                innerWidth >= 1135
                              ? "-50%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 1135 &&
                                innerWidth >= 1095
                              ? "-51.7%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 1095 &&
                                innerWidth >= 1070
                              ? "-53%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 1070 &&
                                innerWidth >= 1040
                              ? "-54.5%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 1040 &&
                                innerWidth >= 1010
                              ? "-56%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 1010 &&
                                innerWidth >= 977
                              ? "-57.5%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 977 &&
                                innerWidth >= 945
                              ? "-59.7%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 945 &&
                                innerWidth >= 925
                              ? "-61%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 925 &&
                                innerWidth >= 900
                              ? "-62.5%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 900 &&
                                innerWidth >= 880
                              ? "-64.2%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 880 &&
                                innerWidth >= 845
                              ? "-66%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 845 &&
                                innerWidth >= 825
                              ? "-68.3%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 825 &&
                                innerWidth >= 800
                              ? "-70%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 800 &&
                                innerWidth >= 780
                              ? "-72%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 780 &&
                                innerWidth >= 760
                              ? "-74%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 760 &&
                                innerWidth >= 738
                              ? "-76%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 738 &&
                                innerWidth >= 715
                              ? "-78%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 715 &&
                                innerWidth >= 700
                              ? "-80%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 700 &&
                                innerWidth >= 680
                              ? "-82%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 680 &&
                                innerWidth >= 666
                              ? "-84%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 666 &&
                                innerWidth >= 650
                              ? "-86%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 650 &&
                                innerWidth >= 635
                              ? "-88%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 635 &&
                                innerWidth >= 620
                              ? "-90%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 620 &&
                                innerWidth >= 606
                              ? "-92%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 606 &&
                                innerWidth >= 593
                              ? "-94.3%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 593 &&
                                innerWidth >= 580
                              ? "-96%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 580 &&
                                innerWidth >= 560
                              ? "-98%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 560 &&
                                innerWidth >= 546
                              ? "-102%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 546 &&
                                innerWidth >= 535
                              ? "-104%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 535 &&
                                innerWidth >= 524
                              ? "-106.3%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 524 &&
                                innerWidth >= 513
                              ? "-108.4%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 513 &&
                                innerWidth >= 500
                              ? "-111%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 500 &&
                                innerWidth >= 495
                              ? "-113%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 495 &&
                                innerWidth >= 481
                              ? "-115.2%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 481 &&
                                innerWidth >= 470
                              ? "-118%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 470 &&
                                innerWidth >= 463
                              ? "-120%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 463 &&
                                innerWidth >= 455
                              ? "-122.5%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 455 &&
                                innerWidth >= 445
                              ? "-125%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 445 &&
                                innerWidth >= 438
                              ? "-127%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 438 &&
                                innerWidth >= 423
                              ? "-130%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 423 &&
                                innerWidth >= 410
                              ? "-133%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 410 &&
                                innerWidth >= 400
                              ? "-137%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 400 &&
                                innerWidth >= 390
                              ? "-140%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 390 &&
                                innerWidth >= 383
                              ? "-143.5%"
                              : isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 383
                              ? "-146%"
                              : !isFullScreen && currentImage === 3
                              ? !isFullScreen &&
                                currentImage === 3 &&
                                innerWidth < 1330 &&
                                innerWidth > 1300
                                ? "-56%"
                                : !isFullScreen &&
                                  innerWidth < 1300 &&
                                  innerWidth > 1250
                                ? "-57.5%"
                                : !isFullScreen &&
                                  innerWidth < 1250 &&
                                  innerWidth > 1200
                                ? "-59.5%"
                                : !isFullScreen &&
                                  innerWidth < 1200 &&
                                  innerWidth > 1160
                                ? "-62%"
                                : !isFullScreen &&
                                  innerWidth < 1160 &&
                                  innerWidth >= 1120
                                ? "-64%"
                                : !isFullScreen &&
                                  innerWidth < 1120 &&
                                  innerWidth > 1080
                                ? "-66%"
                                : !isFullScreen &&
                                  innerWidth < 1080 &&
                                  innerWidth > 1050
                                ? "-68.5%"
                                : !isFullScreen &&
                                  innerWidth < 1050 &&
                                  innerWidth > 1001
                                ? "-70.5%"
                                : !isFullScreen &&
                                  innerWidth < 1001 &&
                                  innerWidth > 970
                                ? "-73.5%"
                                : !isFullScreen &&
                                  innerWidth < 970 &&
                                  innerWidth >= 940
                                ? "-75.5%"
                                : !isFullScreen &&
                                  innerWidth < 940 &&
                                  innerWidth > 905
                                ? "-78.5%"
                                : !isFullScreen &&
                                  innerWidth < 905 &&
                                  innerWidth > 875
                                ? "-81.3%"
                                : !isFullScreen &&
                                  innerWidth < 875 &&
                                  innerWidth > 845
                                ? "-84%"
                                : !isFullScreen &&
                                  innerWidth < 845 &&
                                  innerWidth > 820
                                ? "-87%"
                                : !isFullScreen &&
                                  innerWidth < 820 &&
                                  innerWidth > 790
                                ? "-90.5%"
                                : !isFullScreen &&
                                  innerWidth < 790 &&
                                  innerWidth > 768
                                ? "-93%"
                                : !isFullScreen &&
                                  innerWidth <= 768 &&
                                  innerWidth > 740
                                ? "-79.4%"
                                : !isFullScreen &&
                                  innerWidth < 740 &&
                                  innerWidth > 720
                                ? "-82.4%"
                                : !isFullScreen &&
                                  innerWidth < 720 &&
                                  innerWidth > 700
                                ? "-84.4%"
                                : !isFullScreen &&
                                  innerWidth < 700 &&
                                  innerWidth > 675
                                ? "-87%"
                                : !isFullScreen &&
                                  innerWidth < 674 &&
                                  innerWidth > 645
                                ? "-91%"
                                : !isFullScreen &&
                                  innerWidth <= 645 &&
                                  innerWidth > 620
                                ? "-93.5%"
                                : !isFullScreen &&
                                  innerWidth < 620 &&
                                  innerWidth >= 600
                                ? "-99%"
                                : !isFullScreen &&
                                  innerWidth < 600 &&
                                  innerWidth >= 580
                                ? "-102%"
                                : !isFullScreen &&
                                  innerWidth < 580 &&
                                  innerWidth >= 560
                                ? "-105%"
                                : !isFullScreen &&
                                  innerWidth < 560 &&
                                  innerWidth >= 545
                                ? "-108.5%"
                                : !isFullScreen &&
                                  innerWidth < 545 &&
                                  innerWidth >= 530
                                ? "-111.5%"
                                : !isFullScreen &&
                                  innerWidth < 530 &&
                                  innerWidth >= 515
                                ? "-114.5%"
                                : !isFullScreen &&
                                  innerWidth < 515 &&
                                  innerWidth >= 500
                                ? "-118.5%"
                                : !isFullScreen &&
                                  innerWidth < 500 &&
                                  innerWidth >= 485
                                ? "-122%"
                                : !isFullScreen &&
                                  innerWidth < 485 &&
                                  innerWidth >= 470
                                ? "-125.5%"
                                : !isFullScreen &&
                                  innerWidth < 470 &&
                                  innerWidth >= 460
                                ? "-129.5%"
                                : !isFullScreen &&
                                  innerWidth < 460 &&
                                  innerWidth >= 445
                                ? "-132.5%"
                                : !isFullScreen &&
                                  innerWidth < 445 &&
                                  innerWidth >= 433
                                ? "-137%"
                                : !isFullScreen &&
                                  innerWidth < 433 &&
                                  innerWidth >= 413
                                ? "-140.5%"
                                : !isFullScreen &&
                                  innerWidth < 413 &&
                                  innerWidth >= 400
                                ? "-145.5%"
                                : !isFullScreen &&
                                  innerWidth < 400 &&
                                  innerWidth >= 385
                                ? "-150.5%"
                                : !isFullScreen && innerWidth < 385
                                ? "-157%"
                                : "-54.5%"
                              : currentImage === 4
                              ? !isFullScreen &&
                                currentImage === 4 &&
                                innerWidth < 543 &&
                                innerWidth >= 470
                                ? "-22%"
                                : !isFullScreen &&
                                  currentImage === 4 &&
                                  innerWidth < 543 &&
                                  innerWidth >= 470
                                ? "-22%"
                                : !isFullScreen &&
                                  currentImage === 4 &&
                                  innerWidth < 470
                                ? "-24.5%"
                                : !isFullScreen &&
                                  currentImage === 4 &&
                                  innerWidth < 470
                                ? "-24.5%"
                                : isFullScreen &&
                                  currentImage === 4 &&
                                  innerWidth < 1664 &&
                                  innerWidth >= 1220
                                ? "-21.5%"
                                : isFullScreen &&
                                  currentImage === 4 &&
                                  innerWidth < 1220 &&
                                  innerWidth >= 800
                                ? "-23.8%"
                                : isFullScreen &&
                                  currentImage === 4 &&
                                  innerWidth < 800 &&
                                  innerWidth >= 640
                                ? "-25.8%"
                                : isFullScreen &&
                                  currentImage === 4 &&
                                  innerWidth < 640 &&
                                  innerWidth >= 515
                                ? "-27.5%"
                                : isFullScreen &&
                                  currentImage === 4 &&
                                  innerWidth < 515 &&
                                  innerWidth >= 430
                                ? "-29.5%"
                                : isFullScreen &&
                                  currentImage === 4 &&
                                  innerWidth < 430
                                ? "-31.5%"
                                : "-20%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth >= 1670
                              ? "-6%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 1670 &&
                                innerWidth >= 1600
                              ? "-4.5%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 1600 &&
                                innerWidth >= 1579
                              ? "-4.2%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 1579 &&
                                innerWidth >= 1548
                              ? "-4%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 1548 &&
                                innerWidth >= 1500
                              ? "-3.6%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 1500 &&
                                innerWidth >= 1448
                              ? "-3.3%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 1448 &&
                                innerWidth >= 1400
                              ? "-2.9%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 1400 &&
                                innerWidth >= 1376
                              ? "-2.7%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 1376 &&
                                innerWidth >= 1348
                              ? "-2.5%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 1348 &&
                                innerWidth >= 1320
                              ? "-2.2%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 1320 &&
                                innerWidth >= 1293
                              ? "-2%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 1293 &&
                                innerWidth >= 1245
                              ? "-1.7%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 1245 &&
                                innerWidth >= 1170
                              ? "-0.8%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 1170 &&
                                innerWidth >= 1150
                              ? "-0.5%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 1150 &&
                                innerWidth >= 1100
                              ? "0%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 1100 &&
                                innerWidth >= 1065
                              ? "0.5%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 1065 &&
                                innerWidth >= 1040
                              ? "1%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 1040 &&
                                innerWidth >= 1020
                              ? "1.3%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 1020 &&
                                innerWidth >= 998
                              ? "1.5%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 998 &&
                                innerWidth >= 973
                              ? "1.9%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 973 &&
                                innerWidth >= 958
                              ? "2.2%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 958 &&
                                innerWidth >= 940
                              ? "2.5%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 940 &&
                                innerWidth >= 910
                              ? "2.8%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 910 &&
                                innerWidth >= 895
                              ? "3.3%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 895 &&
                                innerWidth >= 875
                              ? "3.7%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 875 &&
                                innerWidth >= 860
                              ? "4%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 860 &&
                                innerWidth >= 833
                              ? "4.5%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 833 &&
                                innerWidth >= 818
                              ? "4.9%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 818 &&
                                innerWidth >= 798
                              ? "5.4%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 798 &&
                                innerWidth >= 775
                              ? "6%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 775 &&
                                innerWidth >= 758
                              ? "6.5%"
                              : !isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 758 &&
                                innerWidth >= 736
                              ? "8%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 736 &&
                                innerWidth >= 710
                              ? "7.9%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 710 &&
                                innerWidth >= 675
                              ? "8.9%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 675 &&
                                innerWidth >= 658
                              ? "9.5%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 658 &&
                                innerWidth >= 644
                              ? "10.2%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 644 &&
                                innerWidth >= 625
                              ? "10.8%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 635 &&
                                innerWidth >= 611
                              ? "11.4%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 611 &&
                                innerWidth >= 598
                              ? "11.8%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 598 &&
                                innerWidth >= 583
                              ? "12.5%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 583 &&
                                innerWidth >= 575
                              ? "13%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 575 &&
                                innerWidth >= 560
                              ? "13.5%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 560 &&
                                innerWidth >= 545
                              ? "14.3%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 545 &&
                                innerWidth >= 530
                              ? "15%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 530 &&
                                innerWidth >= 520
                              ? "15.5%"
                              : !isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 468 &&
                                innerWidth >= 453
                              ? "21%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 520 &&
                                innerWidth >= 510
                              ? "16.3%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 510 &&
                                innerWidth >= 495
                              ? "16.9%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 495 &&
                                innerWidth >= 485
                              ? "17.8%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 485 &&
                                innerWidth >= 475
                              ? "18.5%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 475 &&
                                innerWidth >= 462
                              ? "19.2%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 462 &&
                                innerWidth >= 454
                              ? "20%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 454 &&
                                innerWidth >= 442
                              ? "21%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 442 &&
                                innerWidth >= 427
                              ? "22%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 427 &&
                                innerWidth >= 415
                              ? "23%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 415 &&
                                innerWidth >= 400
                              ? "24%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 400 &&
                                innerWidth >= 390
                              ? "25.5%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 390 &&
                                innerWidth >= 380
                              ? "26.4%"
                              : isFullScreen &&
                                currentImage === 0 &&
                                innerWidth < 380 &&
                                innerWidth >= 375
                              ? "27.5%"
                              : currentImage === 6
                              ? !isFullScreen &&
                                innerWidth < 2200 &&
                                innerWidth >= 1200
                                ? "-18%"
                                : !isFullScreen &&
                                  innerWidth < 1200 &&
                                  innerWidth >= 991
                                ? "-19.1%"
                                : // :!isFullScreen && innerWidth < 991 && innerWidth >= 870
                                // ? "-22.5%"
                                !isFullScreen &&
                                  innerWidth < 870 &&
                                  innerWidth >= 680
                                ? "-20.8%"
                                : !isFullScreen &&
                                  innerWidth < 680 &&
                                  innerWidth >= 590
                                ? "-21.8%"
                                : !isFullScreen &&
                                  innerWidth < 590 &&
                                  innerWidth >= 520
                                ? "-23%"
                                : !isFullScreen &&
                                  innerWidth < 520 &&
                                  innerWidth >= 461
                                ? "-24.2%"
                                : !isFullScreen &&
                                  innerWidth < 461 &&
                                  innerWidth >= 417
                                ? "-25.6%"
                                : !isFullScreen &&
                                  innerWidth < 417 &&
                                  innerWidth >= 390
                                ? "-26.5%"
                                : !isFullScreen && innerWidth < 390
                                ? "-27.8%"
                                : isFullScreen &&
                                  innerWidth < 2200 &&
                                  innerWidth >= 1200
                                ? "-17%"
                                : isFullScreen &&
                                  innerWidth < 1200 &&
                                  innerWidth >= 950
                                ? "-18.2%"
                                : isFullScreen &&
                                  innerWidth < 950 &&
                                  innerWidth >= 800
                                ? "-19.2%"
                                : isFullScreen &&
                                  innerWidth < 700 &&
                                  innerWidth >= 620
                                ? "-21.1%"
                                : isFullScreen &&
                                  innerWidth < 620 &&
                                  innerWidth >= 530
                                ? "-22.2%"
                                : isFullScreen &&
                                  innerWidth < 530 &&
                                  innerWidth >= 470
                                ? "-23.5%"
                                : isFullScreen &&
                                  innerWidth < 470 &&
                                  innerWidth >= 420
                                ? "-24.6%"
                                : isFullScreen && innerWidth < 420
                                ? "-25.8%"
                                : "-20%"
                              : !isFullScreen &&
                                currentImage === 5 &&
                                innerWidth >= 650
                              ? "-70px"
                              : !isFullScreen &&
                                currentImage === 5 &&
                                innerWidth < 650 &&
                                innerWidth >= 420
                              ? "-45px"
                              : !isFullScreen &&
                                currentImage === 5 &&
                                innerWidth < 420
                              ? "-35px"
                              : currentImage === 0 &&
                                windowWidth >= 1250 &&
                                windowWidth <= 1300
                              ? "1%"
                              : currentImage === 0 &&
                                windowWidth < 1250 &&
                                windowWidth >= 1200
                              ? "1.5%"
                              : currentImage === 0 &&
                                windowWidth < 1200 &&
                                windowWidth >= 1150
                              ? "2%"
                              : currentImage === 0 &&
                                windowWidth < 1150 &&
                                windowWidth >= 1100
                              ? "2.9%"
                              : currentImage === 0 &&
                                windowWidth < 1100 &&
                                windowWidth >= 1000
                              ? "4%"
                              : currentImage === 0 &&
                                windowWidth < 1000 &&
                                windowWidth >= 950
                              ? "6%"
                              : currentImage === 0 &&
                                windowWidth < 950 &&
                                windowWidth >= 870
                              ? "7.4%"
                              : currentImage === 0 &&
                                windowWidth < 870 &&
                                windowWidth >= 820
                              ? "9%"
                              : currentImage === 0 &&
                                windowWidth < 820 &&
                                windowWidth >= 768
                              ? "11%"
                              : currentImage === 0 &&
                                windowWidth < 768 &&
                                windowWidth >= 710
                              ? "7%"
                              : currentImage === 0 &&
                                windowWidth < 710 &&
                                windowWidth >= 630
                              ? "11%"
                              : currentImage === 0 &&
                                windowWidth < 630 &&
                                windowWidth >= 585
                              ? "12.5%"
                              : currentImage === 0 &&
                                windowWidth < 585 &&
                                windowWidth >= 535
                              ? "15%"
                              : currentImage === 0 &&
                                windowWidth < 535 &&
                                windowWidth >= 510
                              ? "17.5%"
                              : currentImage === 0 &&
                                windowWidth < 510 &&
                                windowWidth >= 470
                              ? "19%"
                              : currentImage === 0 &&
                                windowWidth < 470 &&
                                windowWidth >= 430
                              ? "23%"
                              : currentImage === 0 &&
                                windowWidth < 430 &&
                                windowWidth >= 418
                              ? "24.5%"
                              : currentImage === 0 &&
                                windowWidth < 418 &&
                                windowWidth >= 401
                              ? "26%"
                              : currentImage === 0 &&
                                windowWidth < 401 &&
                                windowWidth >= 392
                              ? "27.3%"
                              : currentImage === 0 &&
                                windowWidth < 392 &&
                                windowWidth >= 380
                              ? "28.5%"
                              : currentImage === 0 && windowWidth < 380
                              ? "29.5%"
                              : "",

                          // marginTop:
                          //   currentImage === 2 &&
                          //   innerWidth > 1050
                          //   && innerWidth <= 1050
                          //     ? "80px"
                          //     : currentImage === 2 &&
                          //    innerWidth < 1050
                          //     // && innerWidth <= 1050
                          //       ? "130px"
                          //       : currentImage === 2 &&
                          //       innerWidth <= 540 &&
                          //       innerWidth >= 510
                          //     ? "120px"
                          //     : currentImage === 2 && innerWidth < 510
                          //     ? "126px"
                          //     : currentImage === 4 &&
                          //       innerWidth <= 914 &&
                          //       innerWidth >= 543
                          //     ? "50px"
                          //     : currentImage === 4 && innerWidth <= 543
                          //     ? "82px"
                          //     : currentImage === 5 && innerWidth < 535
                          //     ? "30px"
                          //     : "",

                          marginTop:
                            currentImage === 0 &&
                            isFullScreen &&
                            windowWidth < 1750 &&
                            windowWidth >= 1616
                              ? "1%"
                              : !isFullScreen &&
                                currentImage === 2 &&
                                innerWidth < 1050 &&
                                innerWidth >= 540
                              ? // && innerWidth <= 1050
                                "80px"
                              : !isFullScreen &&
                                currentImage === 2 &&
                                innerWidth < 540 &&
                                innerWidth >= 510
                              ? "120px"
                              : !isFullScreen &&
                                currentImage === 2 &&
                                innerWidth < 510
                              ? "126px"
                              : !isFullScreen &&
                                currentImage === 4 &&
                                innerWidth <= 914 &&
                                innerWidth >= 543
                              ? "50px"
                              : !isFullScreen &&
                                currentImage === 4 &&
                                innerWidth <= 543
                              ? "82px"
                              : currentImage === 5 && innerWidth < 535
                              ? "30px"
                              : isFullScreen &&
                                windowWidth < 1616 &&
                                windowWidth >= 1520
                              ? "2%"
                              : isFullScreen &&
                                windowWidth < 1520 &&
                                windowWidth >= 1460
                              ? "2.7%"
                              : isFullScreen &&
                                windowWidth < 1460 &&
                                windowWidth >= 1420
                              ? "3.5%"
                              : isFullScreen &&
                                windowWidth < 1420 &&
                                windowWidth >= 1370
                              ? "3.9%"
                              : isFullScreen &&
                                windowWidth < 1370 &&
                                windowWidth >= 1320
                              ? "5%"
                              : isFullScreen &&
                                windowWidth < 1320 &&
                                windowWidth >= 1268
                              ? "5.6%"
                              : isFullScreen &&
                                windowWidth < 1268 &&
                                windowWidth >= 1215
                              ? "6.5%"
                              : isFullScreen &&
                                windowWidth < 1215 &&
                                windowWidth >= 1160
                              ? "7.7%"
                              : isFullScreen &&
                                windowWidth < 1160 &&
                                windowWidth >= 1100
                              ? "8.9%"
                              : isFullScreen &&
                                windowWidth < 1100 &&
                                windowWidth >= 1055
                              ? "10%"
                              : isFullScreen &&
                                windowWidth < 1055 &&
                                windowWidth >= 977
                              ? "12%"
                              : isFullScreen &&
                                windowWidth < 977 &&
                                windowWidth >= 910
                              ? "14%"
                              : isFullScreen &&
                                windowWidth < 910 &&
                                windowWidth >= 882
                              ? "15.1%"
                              : isFullScreen &&
                                windowWidth < 882 &&
                                windowWidth >= 850
                              ? "16.1%"
                              : isFullScreen &&
                                windowWidth < 850 &&
                                windowWidth >= 818
                              ? "17.5%"
                              : isFullScreen &&
                                windowWidth < 818 &&
                                windowWidth >= 780
                              ? "19%"
                              : isFullScreen &&
                                windowWidth < 780 &&
                                windowWidth >= 730
                              ? "21.3%"
                              : isFullScreen &&
                                windowWidth < 730 &&
                                windowWidth >= 700
                              ? "23%"
                              : isFullScreen &&
                                windowWidth < 700 &&
                                windowWidth >= 678
                              ? "24.5%"
                              : isFullScreen &&
                                windowWidth < 678 &&
                                windowWidth >= 650
                              ? "26%"
                              : isFullScreen &&
                                windowWidth < 650 &&
                                windowWidth >= 620
                              ? "28%"
                              : isFullScreen &&
                                windowWidth < 620 &&
                                windowWidth >= 600
                              ? "29.4%"
                              : isFullScreen &&
                                windowWidth < 600 &&
                                windowWidth >= 580
                              ? "31.2%"
                              : isFullScreen &&
                                windowWidth < 580 &&
                                windowWidth >= 560
                              ? "33%"
                              : isFullScreen &&
                                windowWidth < 560 &&
                                windowWidth >= 535
                              ? "35%"
                              : isFullScreen &&
                                windowWidth < 535 &&
                                windowWidth >= 515
                              ? "37%"
                              : isFullScreen &&
                                windowWidth < 515 &&
                                windowWidth >= 495
                              ? "39%"
                              : isFullScreen &&
                                windowWidth < 495 &&
                                windowWidth >= 476
                              ? "41.3%"
                              : isFullScreen &&
                                windowWidth < 476 &&
                                windowWidth >= 455
                              ? "44%"
                              : isFullScreen &&
                                windowWidth < 455 &&
                                windowWidth >= 435
                              ? "47%"
                              : isFullScreen &&
                                windowWidth < 435 &&
                                windowWidth >= 420
                              ? "49%"
                              : isFullScreen &&
                                windowWidth < 420 &&
                                windowWidth >= 410
                              ? "51.2%"
                              : isFullScreen &&
                                windowWidth < 410 &&
                                windowWidth >= 395
                              ? "53%"
                              : isFullScreen &&
                                windowWidth < 395 &&
                                windowWidth >= 385
                              ? "55%"
                              : isFullScreen && windowWidth < 385
                              ? "57%"
                              : "",
                        }}
                        //   onLoad={() => handleImageChange(currentImage)} // Update highlight after image loads
                      />

                      {/* Highlighted sections */}
                      {currentImage === 0 && (
                        <div
                          className="image-section-one"
                          style={{
                            position: "absolute",
                            top:
                              !isFullScreen &&
                              windowWidth < 1200 &&
                              windowWidth > 1000
                                ? "18%"
                                : !isFullScreen &&
                                  windowWidth < 1000 &&
                                  windowWidth > 900
                                ? "17%"
                                : !isFullScreen &&
                                  windowWidth < 900 &&
                                  windowWidth > 768
                                ? "15%"
                                : !isFullScreen &&
                                  windowWidth < 768 &&
                                  windowWidth > 710
                                ? "15%"
                                : !isFullScreen &&
                                  windowWidth < 710 &&
                                  windowWidth >= 600
                                ? "14.4%"
                                : !isFullScreen &&
                                  windowWidth < 600 &&
                                  windowWidth >= 510
                                ? "11%"
                                : !isFullScreen &&
                                  windowWidth < 510 &&
                                  windowWidth >= 430
                                ? "7%"
                                : !isFullScreen &&
                                  windowWidth < 430 &&
                                  windowWidth >= 399
                                ? "5.2%"
                                : !isFullScreen && windowWidth < 399
                                ? "3.5%"
                                : // : isFullScreen && windowWidth < 786
                                  // ? "5%"
                                  "20.5%",
                            right: "0.5%",
                            width: "3.3%",
                            height:
                              isFullScreen &&
                              windowWidth < 1550 &&
                              windowWidth >= 1420
                                ? "18%"
                                : isFullScreen &&
                                  windowWidth < 1420 &&
                                  windowWidth >= 1320
                                ? "17%"
                                : isFullScreen &&
                                  windowWidth < 1320 &&
                                  windowWidth >= 1215
                                ? "16%"
                                : isFullScreen &&
                                  windowWidth < 1215 &&
                                  windowWidth >= 1110
                                ? "15.3%"
                                : isFullScreen &&
                                  windowWidth < 1110 &&
                                  windowWidth >= 985
                                ? "14.3%"
                                : isFullScreen &&
                                  windowWidth < 985 &&
                                  windowWidth >= 910
                                ? "13%"
                                : isFullScreen &&
                                  windowWidth < 910 &&
                                  windowWidth >= 740
                                ? "11%"
                                : isFullScreen &&
                                  windowWidth < 740 &&
                                  windowWidth >= 620
                                ? "9%"
                                : isFullScreen &&
                                  windowWidth < 620 &&
                                  windowWidth >= 560
                                ? "8%"
                                : isFullScreen &&
                                  windowWidth < 560 &&
                                  windowWidth >= 514
                                ? "7.5%"
                                : isFullScreen &&
                                  windowWidth < 514 &&
                                  windowWidth >= 435
                                ? "6.5%"
                                : isFullScreen &&
                                  windowWidth < 435 &&
                                  windowWidth >= 395
                                ? "5.7%"
                                : isFullScreen && windowWidth < 395
                                ? "5%"
                                : "20.5%",
                            marginTop:
                              isFullScreen && currentImage === 0 ? "2.5%" : "",
                            // backgroundColor: "transparent",
                            borderRadius: "8px",
                            zIndex: 1000,
                            boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.2)",
                          }}
                        />
                      )}
                      {currentImage === 1 && (
                        <div
                          className="image-section-two"
                          style={{
                            position: "absolute",
                            top:
                              innerWidth < 1250 && innerWidth >= 1200
                                ? "33%"
                                : !isFullScreen &&
                                  innerWidth < 1200 &&
                                  innerWidth >= 1100
                                ? "32.5%"
                                : !isFullScreen &&
                                  innerWidth < 1100 &&
                                  innerWidth >= 950
                                ? "31.5%"
                                : !isFullScreen &&
                                  innerWidth < 950 &&
                                  innerWidth >= 880
                                ? "30.5%"
                                : !isFullScreen &&
                                  innerWidth < 880 &&
                                  innerWidth >= 768
                                ? "29%"
                                : !isFullScreen &&
                                  innerWidth < 768 &&
                                  innerWidth >= 650
                                ? "30%"
                                : !isFullScreen &&
                                  innerWidth < 650 &&
                                  innerWidth >= 605
                                ? "28%"
                                : !isFullScreen &&
                                  innerWidth < 650 &&
                                  innerWidth >= 550
                                ? "26.5%"
                                : !isFullScreen &&
                                  innerWidth < 550 &&
                                  innerWidth >= 515
                                ? "25.5%"
                                : !isFullScreen &&
                                  innerWidth < 515 &&
                                  innerWidth >= 476
                                ? "24%"
                                : !isFullScreen &&
                                  innerWidth < 476 &&
                                  innerWidth >= 440
                                ? "22.5%"
                                : !isFullScreen &&
                                  innerWidth < 440 &&
                                  innerWidth >= 400
                                ? "20.5%"
                                : !isFullScreen && innerWidth < 400
                                ? "18.5%"
                                : isFullScreen &&
                                  innerWidth < 1950 &&
                                  innerWidth >= 1700
                                ? "37.5%"
                                : isFullScreen &&
                                  innerWidth < 1700 &&
                                  innerWidth >= 1669
                                ? "36.5%"
                                : isFullScreen &&
                                  innerWidth < 1669 &&
                                  innerWidth >= 1330
                                ? "35%"
                                : isFullScreen &&
                                  innerWidth < 1330 &&
                                  innerWidth >= 1150
                                ? "33%"
                                : isFullScreen &&
                                  innerWidth < 1150 &&
                                  innerWidth >= 950
                                ? "31.5%"
                                : isFullScreen &&
                                  innerWidth < 950 &&
                                  innerWidth >= 925
                                ? "30.5%"
                                : isFullScreen &&
                                  innerWidth < 925 &&
                                  innerWidth >= 768
                                ? "29.5%"
                                : isFullScreen &&
                                  innerWidth < 768 &&
                                  innerWidth >= 750
                                ? "29.2%"
                                : isFullScreen &&
                                  innerWidth < 750 &&
                                  innerWidth >= 735
                                ? "28.5%"
                                : isFullScreen &&
                                  innerWidth < 735 &&
                                  innerWidth >= 630
                                ? "27.8%"
                                : isFullScreen &&
                                  innerWidth < 630 &&
                                  innerWidth >= 545
                                ? "27%"
                                : isFullScreen &&
                                  innerWidth < 545 &&
                                  innerWidth >= 455
                                ? "26.3%"
                                : isFullScreen &&
                                  innerWidth < 455 &&
                                  innerWidth >= 447
                                ? "26.5%"
                                : isFullScreen &&
                                  innerWidth < 447 &&
                                  innerWidth >= 416
                                ? "25.8%"
                                : isFullScreen && innerWidth < 416
                                ? "25.3%"
                                : "34.3%",
                            right:
                              innerWidth < 600 && innerWidth >= 430
                                ? "2%"
                                : innerWidth < 430
                                ? "3%"
                                : isFullScreen && innerWidth > 1230
                                ? "-0.3%"
                                : "0.3%",
                            width: "28.5%",
                            height:
                              isFullScreen &&
                              innerWidth < 1330 &&
                              innerWidth >= 1150
                                ? "6%"
                                : isFullScreen &&
                                  innerWidth < 1150 &&
                                  innerWidth >= 768
                                ? "4.5%"
                                : isFullScreen &&
                                  innerWidth < 768 &&
                                  innerWidth >= 545
                                ? "3%"
                                : isFullScreen &&
                                  innerWidth < 545 &&
                                  innerWidth >= 455
                                ? "2.5%"
                                : isFullScreen && innerWidth < 455
                                ? "2%"
                                : "7%",
                            backgroundColor: "transparent",
                            borderRadius: "10px",
                            zIndex: 1000,
                            boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.2)",
                          }}
                        />
                      )}
                      {currentImage === 2 && (
                        <div
                          className="image-section-three"
                          style={{
                            position: "absolute",
                            top:
                              !isFullScreen &&
                              innerWidth < 1320 &&
                              innerWidth >= 1245
                                ? "10%"
                                : !isFullScreen &&
                                  innerWidth < 1245 &&
                                  innerWidth >= 1200
                                ? "8.5%"
                                : !isFullScreen &&
                                  innerWidth < 1200 &&
                                  innerWidth >= 1145
                                ? "7%"
                                : !isFullScreen &&
                                  innerWidth < 1145 &&
                                  innerWidth >= 1100
                                ? "5.5%"
                                : !isFullScreen &&
                                  innerWidth < 1100 &&
                                  innerWidth >= 1050
                                ? "3.6%"
                                : !isFullScreen &&
                                  innerWidth < 1050 &&
                                  innerWidth >= 999
                                ? "18.5%"
                                : !isFullScreen &&
                                  innerWidth < 999 &&
                                  innerWidth >= 945
                                ? "17%"
                                : !isFullScreen &&
                                  innerWidth < 945 &&
                                  innerWidth >= 880
                                ? "15%"
                                : !isFullScreen &&
                                  innerWidth < 880 &&
                                  innerWidth >= 820
                                ? "13%"
                                : !isFullScreen &&
                                  innerWidth < 767 &&
                                  innerWidth >= 720
                                ? "15.5%"
                                : !isFullScreen &&
                                  innerWidth < 645 &&
                                  innerWidth >= 600
                                ? "10%"
                                : !isFullScreen &&
                                  innerWidth < 600 &&
                                  innerWidth >= 560
                                ? "7%"
                                : !isFullScreen &&
                                  innerWidth < 560 &&
                                  innerWidth >= 540
                                ? "5%"
                                : !isFullScreen &&
                                  innerWidth < 540 &&
                                  innerWidth >= 468
                                ? "16%"
                                : !isFullScreen &&
                                  innerWidth < 410 &&
                                  innerWidth >= 300
                                ? "9%"
                                : isFullScreen &&
                                  innerWidth < 2000 &&
                                  innerWidth >= 1830
                                ? "26%"
                                : isFullScreen &&
                                  innerWidth < 1830 &&
                                  innerWidth >= 1690
                                ? "24%"
                                : isFullScreen &&
                                  innerWidth < 1690 &&
                                  innerWidth >= 1510
                                ? "22%"
                                : isFullScreen &&
                                  innerWidth < 1510 &&
                                  innerWidth >= 1464
                                ? "22%"
                                : isFullScreen &&
                                  innerWidth < 1464 &&
                                  innerWidth >= 1340
                                ? "21%"
                                : isFullScreen &&
                                  innerWidth < 1340 &&
                                  innerWidth >= 1245
                                ? "20%"
                                : isFullScreen &&
                                  innerWidth < 1245 &&
                                  innerWidth >= 1125
                                ? "19%"
                                : isFullScreen &&
                                  innerWidth < 1125 &&
                                  innerWidth >= 930
                                ? "17%"
                                : isFullScreen &&
                                  innerWidth < 930 &&
                                  innerWidth >= 755
                                ? "15.5%"
                                : isFullScreen &&
                                  innerWidth < 755 &&
                                  innerWidth >= 710
                                ? "14.3%"
                                : isFullScreen &&
                                  innerWidth < 710 &&
                                  innerWidth >= 630
                                ? "13.5%"
                                : isFullScreen &&
                                  innerWidth < 630 &&
                                  innerWidth >= 430
                                ? "12%"
                                : isFullScreen && innerWidth < 430
                                ? "11.3%"
                                : "12%",
                            right:
                              innerWidth < 900 && innerWidth >= 510
                                ? "1.5%"
                                : innerWidth < 510 && innerWidth >= 415
                                ? "2.4%"
                                : innerWidth < 415
                                ? "3%"
                                : "0.7%",
                            width: "28%",
                            height:
                              isFullScreen &&
                              innerWidth < 1510 &&
                              innerWidth >= 1340
                                ? "20%"
                                : isFullScreen &&
                                  innerWidth < 1340 &&
                                  innerWidth >= 1237
                                ? "17.5%"
                                : isFullScreen &&
                                  innerWidth < 1237 &&
                                  innerWidth >= 1030
                                ? "16%"
                                : isFullScreen &&
                                  innerWidth < 1030 &&
                                  innerWidth >= 950
                                ? "14.5%"
                                : isFullScreen &&
                                  innerWidth < 950 &&
                                  innerWidth >= 840
                                ? "13%"
                                : isFullScreen &&
                                  innerWidth < 840 &&
                                  innerWidth >= 755
                                ? "11%"
                                : isFullScreen &&
                                  innerWidth < 755 &&
                                  innerWidth >= 670
                                ? "10.5%"
                                : isFullScreen &&
                                  innerWidth < 670 &&
                                  innerWidth >= 550
                                ? "9.5%"
                                : isFullScreen &&
                                  innerWidth < 550 &&
                                  innerWidth >= 430
                                ? "8%"
                                : isFullScreen && innerWidth < 430
                                ? "6%"
                                : "23%",
                            borderRadius: "10px",
                            backgroundColor: "transparent",
                            zIndex: 1000,
                            boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.2)",
                          }}
                        />
                      )}
                      {currentImage === 3 && (
                        <div
                          className="image-section-four"
                          style={{
                            position: "absolute",
                            top:
                              isFullScreen &&
                              innerWidth < 1616 &&
                              innerWidth >= 1520
                                ? "4%"
                                : isFullScreen &&
                                  innerWidth < 1520 &&
                                  innerWidth >= 1460
                                ? "4.8%"
                                : isFullScreen &&
                                  innerWidth < 1460 &&
                                  innerWidth >= 1370
                                ? "5.5%"
                                : isFullScreen &&
                                  innerWidth < 1370 &&
                                  innerWidth >= 1320
                                ? "7%"
                                : isFullScreen &&
                                  innerWidth < 1320 &&
                                  innerWidth >= 1215
                                ? "8%"
                                : isFullScreen &&
                                  innerWidth < 1215 &&
                                  innerWidth >= 1160
                                ? "9.5%"
                                : isFullScreen &&
                                  innerWidth < 1160 &&
                                  innerWidth >= 1095
                                ? "10.5%"
                                : isFullScreen &&
                                  innerWidth < 1095 &&
                                  innerWidth >= 1055
                                ? "11%"
                                : isFullScreen &&
                                  innerWidth < 1055 &&
                                  innerWidth >= 977
                                ? "12.5%"
                                : isFullScreen &&
                                  innerWidth < 977 &&
                                  innerWidth >= 945
                                ? "13.5%"
                                : isFullScreen &&
                                  innerWidth < 945 &&
                                  innerWidth >= 880
                                ? "13%"
                                : isFullScreen &&
                                  innerWidth < 880 &&
                                  innerWidth >= 818
                                ? "14%"
                                : isFullScreen &&
                                  innerWidth < 818 &&
                                  innerWidth >= 780
                                ? "15%"
                                : isFullScreen &&
                                  innerWidth < 780 &&
                                  innerWidth >= 760
                                ? "16.3%"
                                : isFullScreen &&
                                  innerWidth < 760 &&
                                  innerWidth >= 700
                                ? "15.6%"
                                : isFullScreen &&
                                  innerWidth < 700 &&
                                  innerWidth >= 580
                                ? "16.6%"
                                : isFullScreen &&
                                  innerWidth < 580 &&
                                  innerWidth >= 495
                                ? "18.4%"
                                : isFullScreen &&
                                  innerWidth < 495 &&
                                  innerWidth >= 410
                                ? "19.3%"
                                : isFullScreen && innerWidth < 410
                                ? "20.5%"
                                : "1%",
                            left: innerWidth < 433 ? "13.5%" : "12%",
                            width: innerWidth < 433 ? "28%" : "25%",
                            height:
                              isFullScreen &&
                              innerWidth < 1370 &&
                              innerWidth >= 1095
                                ? "5%"
                                : isFullScreen &&
                                  innerWidth < 1095 &&
                                  innerWidth >= 818
                                ? "4.3%"
                                : isFullScreen &&
                                  innerWidth < 818 &&
                                  innerWidth >= 580
                                ? "3.5%"
                                : isFullScreen && innerWidth < 580
                                ? "2.7%"
                                : "6%",
                            backgroundColor: "transparent",
                            borderRadius: "10px",
                            zIndex: 1000,
                            boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.2)",
                          }}
                        />
                      )}
                      {currentImage === 4 && (
                        <div
                          className="image-section-five"
                          style={{
                            position: "absolute",
                            top:
                              !isFullScreen &&
                              innerWidth <= 1280 &&
                              innerWidth >= 1180
                                ? "15%"
                                : !isFullScreen &&
                                  innerWidth <= 1180 &&
                                  innerWidth >= 1085
                                ? "12.5%"
                                : !isFullScreen &&
                                  innerWidth <= 1085 &&
                                  innerWidth >= 1010
                                ? "10.5%"
                                : !isFullScreen &&
                                  innerWidth <= 1010 &&
                                  innerWidth >= 945
                                ? "8.5%"
                                : // : innerWidth <= 945 && innerWidth >= 915
                                // ? "5%"
                                !isFullScreen &&
                                  innerWidth <= 850 &&
                                  innerWidth >= 795
                                ? "15%"
                                : !isFullScreen &&
                                  innerWidth <= 795 &&
                                  innerWidth >= 768
                                ? "13%"
                                : !isFullScreen &&
                                  innerWidth < 710 &&
                                  innerWidth >= 645
                                ? "14.5%"
                                : !isFullScreen &&
                                  innerWidth < 645 &&
                                  innerWidth >= 590
                                ? "12%"
                                : !isFullScreen &&
                                  innerWidth < 590 &&
                                  innerWidth >= 543
                                ? "9.3%"
                                : !isFullScreen &&
                                  innerWidth < 485 &&
                                  innerWidth >= 438
                                ? "14%"
                                : !isFullScreen &&
                                  innerWidth < 438 &&
                                  innerWidth >= 400
                                ? "11%"
                                : !isFullScreen && innerWidth < 400
                                ? "9%"
                                : isFullScreen && innerWidth >= 1670
                                ? "26%"
                                : isFullScreen &&
                                  innerWidth < 1670 &&
                                  innerWidth >= 1300
                                ? "24%"
                                : isFullScreen &&
                                  innerWidth < 1300 &&
                                  innerWidth >= 1078
                                ? "22%"
                                : isFullScreen &&
                                  innerWidth < 1078 &&
                                  innerWidth >= 945
                                ? "21%"
                                : isFullScreen &&
                                  innerWidth < 945 &&
                                  innerWidth >= 800
                                ? "19.5%"
                                : isFullScreen &&
                                  innerWidth < 800 &&
                                  innerWidth >= 780
                                ? "18.8%"
                                : isFullScreen &&
                                  innerWidth < 780 &&
                                  innerWidth >= 768
                                ? "20%"
                                : isFullScreen &&
                                  innerWidth < 780 &&
                                  innerWidth >= 768
                                ? "20%"
                                : isFullScreen &&
                                  innerWidth < 768 &&
                                  innerWidth >= 750
                                ? "19%"
                                : isFullScreen &&
                                  innerWidth < 750 &&
                                  innerWidth >= 640
                                ? "18.2%"
                                : isFullScreen &&
                                  innerWidth < 640 &&
                                  innerWidth >= 570
                                ? "17.3%"
                                : isFullScreen &&
                                  innerWidth < 570 &&
                                  innerWidth >= 450
                                ? "16.4%"
                                : isFullScreen && innerWidth < 450
                                ? "15.5%"
                                : "17%",
                            right:
                              innerWidth < 1025
                                ? "1px"
                                : isFullScreen && innerWidth <= 2000
                                ? "1px"
                                : "9px",
                            width:
                              !isFullScreen && innerWidth <= 872
                                ? "25%"
                                : isFullScreen &&
                                  innerWidth < 2000 &&
                                  innerWidth >= 1244
                                ? "30.5%"
                                : isFullScreen && innerWidth < 1244
                                ? "32%"
                                : "27%",
                            height:
                              !isFullScreen && innerWidth <= 768
                                ? "10%"
                                : isFullScreen &&
                                  innerWidth <= 2000 &&
                                  innerWidth > 1455
                                ? "11%"
                                : isFullScreen &&
                                  innerWidth < 1455 &&
                                  innerWidth >= 1125
                                ? "8%"
                                : isFullScreen &&
                                  innerWidth < 1125 &&
                                  innerWidth >= 835
                                ? "6%"
                                : isFullScreen &&
                                  innerWidth < 835 &&
                                  innerWidth >= 570
                                ? "4%"
                                : isFullScreen && innerWidth < 570
                                ? "3.5%"
                                : "9%",
                            borderRadius: "10px",
                            backgroundColor: "transparent",
                            zIndex: 1000,
                            boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.2)",
                          }}
                        />
                      )}

                      {currentImage === 5 && (
                        <div
                          className="image-section-six"
                          style={{
                            position: "absolute",
                            top:
                              innerWidth <= 1200 && innerWidth > 1010
                                ? "20%"
                                : innerWidth <= 1010 && innerWidth >= 710
                                ? "15%"
                                : innerWidth < 710 && innerWidth >= 640
                                ? "13.5%"
                                : innerWidth < 640 && innerWidth >= 576
                                ? "13%"
                                : innerWidth < 576
                                ? "21.5%"
                                : "19%",
                            right: "0%",
                            width:
                              innerWidth <= 1250 && innerWidth > 1040
                                ? "80%"
                                : innerWidth <= 1040
                                ? "83%"
                                : "78.3%",
                            height:
                              isFullScreen &&
                              innerWidth < 1660 &&
                              innerWidth >= 600
                                ? "45%"
                                : isFullScreen && innerWidth < 600
                                ? "30%"
                                : "53%",
                            // borderRadius: "10px",
                            backgroundColor: "transparent",
                            zIndex: 1000,
                            boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.2)",
                          }}
                        />
                      )}
                      {currentImage === 6 && (
                        <div
                          className="image-section-seven"
                          style={{
                            position: "absolute",
                            top: "0%",
                            right:
                              isFullScreen &&
                              innerWidth < 2200 &&
                              innerWidth >= 1680
                                ? "-1%"
                                : isFullScreen &&
                                  innerWidth < 1680 &&
                                  innerWidth >= 1600
                                ? "-1.5%"
                                : isFullScreen &&
                                  innerWidth < 1600 &&
                                  innerWidth >= 1300
                                ? "-2%"
                                : isFullScreen && innerWidth < 1300
                                ? "-2.7%"
                                : "-2%",
                            width: "32.8%",
                            height: "100%",
                            // borderRadius: "10px",
                            backgroundColor: "transparent",
                            zIndex: 1000,
                            boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.2)",
                          }}
                        />
                      )}
                      {currentImage === 7 && (
                        <div
                          className="image-section-eight"
                          style={{
                            position: "absolute",
                            top:
                              !isFullScreen &&
                              innerWidth <= 1100 &&
                              innerWidth >= 890
                                ? "36.5%"
                                : !isFullScreen &&
                                  innerWidth < 890 &&
                                  innerWidth >= 768
                                ? "34.5%"
                                : !isFullScreen &&
                                  innerWidth < 768 &&
                                  innerWidth >= 630
                                ? "34.5%"
                                : !isFullScreen &&
                                  innerWidth < 630 &&
                                  innerWidth >= 550
                                ? "32.3%"
                                : !isFullScreen &&
                                  innerWidth < 550 &&
                                  innerWidth >= 490
                                ? "30.3%"
                                : !isFullScreen &&
                                  innerWidth < 490 &&
                                  innerWidth >= 445
                                ? "28%"
                                : !isFullScreen &&
                                  innerWidth < 445 &&
                                  innerWidth >= 401
                                ? "26%"
                                : !isFullScreen && innerWidth < 401
                                ? "24%"
                                : isFullScreen &&
                                  innerWidth < 2000 &&
                                  innerWidth >= 1700
                                ? "43%"
                                : isFullScreen &&
                                  innerWidth < 1700 &&
                                  innerWidth >= 1500
                                ? "39.5%"
                                : isFullScreen &&
                                  innerWidth < 1325 &&
                                  innerWidth >= 1210
                                ? "36.8%"
                                : isFullScreen &&
                                  innerWidth < 1210 &&
                                  innerWidth >= 1170
                                ? "36.3%"
                                : isFullScreen &&
                                  innerWidth < 1170 &&
                                  innerWidth >= 1101
                                ? "35%"
                                : isFullScreen &&
                                  innerWidth < 1101 &&
                                  innerWidth >= 1005
                                ? "35%"
                                : isFullScreen &&
                                  innerWidth < 1005 &&
                                  innerWidth >= 930
                                ? "33.5%"
                                : isFullScreen &&
                                  innerWidth < 930 &&
                                  innerWidth >= 840
                                ? "32.5%"
                                : isFullScreen &&
                                  innerWidth < 840 &&
                                  innerWidth >= 755
                                ? "31.5%"
                                : isFullScreen &&
                                  innerWidth < 755 &&
                                  innerWidth >= 736
                                ? "30.5%"
                                : isFullScreen &&
                                  innerWidth < 736 &&
                                  innerWidth >= 630
                                ? "30%"
                                : isFullScreen &&
                                  innerWidth < 630 &&
                                  innerWidth >= 545
                                ? "28.6%"
                                : isFullScreen &&
                                  innerWidth < 545 &&
                                  innerWidth >= 466
                                ? "27.8%"
                                : isFullScreen &&
                                  innerWidth < 466 &&
                                  innerWidth >= 430
                                ? "27.3%"
                                : isFullScreen &&
                                  innerWidth < 430 &&
                                  innerWidth >= 400
                                ? "26.8%"
                                : isFullScreen && innerWidth < 400
                                ? "26%"
                                : "35.4%",
                            left: "0%",
                            width: innerWidth <= 1080 ? "18%" : "20%",
                            height:
                              !isFullScreen && innerWidth <= 1100
                                ? "5%"
                                : isFullScreen &&
                                  innerWidth < 1400 &&
                                  innerWidth >= 1210
                                ? "5%"
                                : isFullScreen &&
                                  innerWidth < 1210 &&
                                  innerWidth >= 1101
                                ? "4%"
                                : isFullScreen &&
                                  innerWidth < 1101 &&
                                  innerWidth >= 840
                                ? "3.2%"
                                : isFullScreen &&
                                  innerWidth < 840 &&
                                  innerWidth >= 736
                                ? "2.8%"
                                : isFullScreen &&
                                  innerWidth < 736 &&
                                  innerWidth >= 466
                                ? "2%"
                                : isFullScreen && innerWidth < 466
                                ? "1.5%"
                                : "6%",
                            // borderRadius: "10px",
                            backgroundColor: "transparent",
                            // zIndex: 1000,
                            boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.2)",
                          }}
                        />
                      )}
                      {currentImage === 8 && (
                        <div
                          className="image-section-nine"
                          style={{
                            position: "absolute",
                            top:
                              !isFullScreen &&
                              innerWidth <= 1100 &&
                              innerWidth >= 890
                                ? "41.5%"
                                : !isFullScreen &&
                                  innerWidth < 890 &&
                                  innerWidth >= 650
                                ? "40%"
                                : !isFullScreen &&
                                  innerWidth < 650 &&
                                  innerWidth >= 550
                                ? "37.5%"
                                : !isFullScreen &&
                                  innerWidth < 550 &&
                                  innerWidth >= 485
                                ? "35%"
                                : !isFullScreen &&
                                  innerWidth < 485 &&
                                  innerWidth >= 435
                                ? "33%"
                                : !isFullScreen &&
                                  innerWidth < 435 &&
                                  innerWidth >= 395
                                ? "30.5%"
                                : !isFullScreen && innerWidth < 395
                                ? "29%"
                                : isFullScreen &&
                                  innerWidth < 1920 &&
                                  innerWidth >= 1650
                                ? "46.5%"
                                : isFullScreen &&
                                  innerWidth < 1650 &&
                                  innerWidth >= 1616
                                ? "43.6%"
                                : isFullScreen &&
                                  innerWidth < 1616 &&
                                  innerWidth >= 1510
                                ? "45.8%"
                                : isFullScreen &&
                                  innerWidth < 1407 &&
                                  innerWidth >= 1255
                                ? "42%"
                                : isFullScreen &&
                                  innerWidth < 1255 &&
                                  innerWidth >= 1150
                                ? "40%"
                                : isFullScreen &&
                                  innerWidth < 1150 &&
                                  innerWidth >= 1110
                                ? "38.8%"
                                : isFullScreen &&
                                  innerWidth < 1110 &&
                                  innerWidth >= 994
                                ? "37.5%"
                                : isFullScreen &&
                                  innerWidth < 994 &&
                                  innerWidth >= 923
                                ? "36%"
                                : isFullScreen &&
                                  innerWidth < 923 &&
                                  innerWidth >= 835
                                ? "34.8%"
                                : isFullScreen &&
                                  innerWidth < 835 &&
                                  innerWidth >= 760
                                ? "33.7%"
                                : isFullScreen &&
                                  innerWidth < 760 &&
                                  innerWidth >= 745
                                ? "33%"
                                : isFullScreen &&
                                  innerWidth < 745 &&
                                  innerWidth >= 648
                                ? "32.2%"
                                : isFullScreen &&
                                  innerWidth < 648 &&
                                  innerWidth >= 627
                                ? "31.5%"
                                : isFullScreen &&
                                  innerWidth < 627 &&
                                  innerWidth >= 548
                                ? "30.4%"
                                : isFullScreen &&
                                  innerWidth < 548 &&
                                  innerWidth >= 519
                                ? "29.5%"
                                : isFullScreen &&
                                  innerWidth < 519 &&
                                  innerWidth >= 440
                                ? "28.8%"
                                : isFullScreen && innerWidth < 440
                                ? "27.8%"
                                : "43.5%",
                            left: "1px",
                            width: "20.7%",
                            height:
                              !isFullScreen && innerWidth <= 1100
                                ? "5%"
                                : isFullScreen &&
                                  innerWidth < 1920 &&
                                  innerWidth >= 1407
                                ? "5%"
                                : isFullScreen &&
                                  innerWidth < 1407 &&
                                  innerWidth >= 1110
                                ? "4%"
                                : isFullScreen &&
                                  innerWidth < 1110 &&
                                  innerWidth >= 648
                                ? "3%"
                                : isFullScreen &&
                                  innerWidth < 648 &&
                                  innerWidth >= 450
                                ? "2%"
                                : isFullScreen && innerWidth < 450
                                ? "1.3%"
                                : "6%",
                            // borderRadius: "10px",
                            backgroundColor: "transparent",
                            zIndex: 1000,
                            boxShadow: "0 0 0 9999px rgba(0, 0, 0, 0.2)",
                          }}
                        />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MarketingAnimation;
