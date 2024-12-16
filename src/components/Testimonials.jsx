import { Avatar, useMediaQuery } from "@mui/material";
import React, { useState } from "react";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Celina Peguit",
      title: "B2B – Business Development Manager",
      rating: 5,
      content:
        "To effectively assess what strategies are working and which are not, achieving a certain scale is essential. This can be incredibly challenging without the support of Jarvis Reach. With its comprehensive features, there's no reason not to try it for your outbound efforts.",
      image: "/Avatar/Avatar/Celina.jpg",
    },
    {
      name: "Stefania Coroni",
      title: "Sales Development Leader",
      rating: 5,
      content:
        "In my view, having a tool like Jarvis Reach is a clear advantage because it combines lead generation with email and phone automation in one seamless platform. This integration makes it far more efficient and convenient than using separate tools for each task.",
      image: "/Avatar/Avatar/Stefania.jpg",
    },
    {
      name: "Soji George",
      title: "AVP of Revenue Operations",
      rating: 5,
      content:
        "Jarvis Reach automatically enriches all our data—contacts, leads, accounts—effortlessly. It operates seamlessly in the background, requiring no manual intervention, making our processes more efficient and effective.",
      image: "/Avatar/Avatar/Soji.jpg",
    },
    {
      name: "Philippe Blnk",
      title: "Founder & CEO of a Startup",
      rating: 5,
      content:
        "What truly excited me was the integration of sales data and sales engagement within a single platform. The synergy created by combining these elements unlocks incredible potential and drives powerful results.",
      image: "/Avatar/Avatar/Philippe Blnk.jpg",
    },
    {
      name: "Usha Rawath",
      title: "Head of my own business",
      rating: 5,
      content:
        "Jarvis Reach has proven to be an incredibly powerful extension for my hiring needs. As a freelancer, finding leads was always a challenge, but this tool has effectively bridged that gap. Now, I can easily cold call, send cold emails, and schedule multiple interviews, streamlining my entire hiring process.",
      image: "/Avatar/Avatar/Usha.jpg",
    },
    {
      name: "Roula Souki",
      title: "Sales Manager – SaaS",
      rating: 5,
      content:
        "I recently started using Jarvis Reach, and it's already proving to be a worthwhileinvestment. Compared to other providers, I receive more credits, allowing me toconsistently meet my daily lead generation needs. It's been a valuable tool in addressing my lead challenges effectively.",
      image: "/Avatar/Avatar/Roula.jpg",
    },
    {
      name: "Diarmuid Harvey",
      title: "Head of Growth & Operations",
      rating: 5,
      content:
        "We conducted a benchmark comparison between ZoomInfo, Jarvis Reach, Lusha, SalesQl, and Seamless. Jarvis Reach emerged as the clear winner across all metrics, particularly in data enrichment. It delivers higher quality results than ZoomInfo and offers a broader range of capabilities than Lusha.",
      image: "/Avatar/Avatar/Dairmuid.jpg",
    },
    {
      name: "Alex Kopi",
      title: "Co-Founder and COO",
      rating: 5,
      content:
        "Jarvis Reach stands out as the most comprehensive platform for prospecting and cold outreach. It accelerates the entire process, transforming potential future revenue into immediate, tangible results.",
      image: "/Avatar/Avatar/Alex Copi.jpg",
    },
  ];
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  const [currentIndex, setCurrentIndex] = useState(0);
  const testimonialsToShow = isSmallScreen ? 1 : 3;
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [currentTranslate, setCurrentTranslate] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0
        ? testimonials.length -
          (isSmallScreen ? testimonialsToShow : testimonialsToShow - 2)
        : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex ===
      testimonials.length -
        (isSmallScreen ? testimonialsToShow : testimonialsToShow - 2)
        ? 0
        : prevIndex + 1
    );
  };

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.clientX);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    const moveX = e.clientX - startX;
    setCurrentTranslate(moveX);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    if (currentTranslate < 0) {
      handleNext();
    } else if (currentTranslate > 0) {
      handlePrev();
    }
    setCurrentTranslate(0);
  };
  return (
    <section id="customerReview">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="testimonali-top">
              <h3>TESTIMONIALS </h3>
              <h2>Feedback from Our Valued Customers</h2>
            </div>
            <div id="aluminiReview">
              <div
                className="testimonial-container"
                style={{
                  display: "flex",
                  overflowY: "hidden",
                  justifyContent: "center",
                  // hide scrollbar
                  scrollbarWidth: "none",
                }}
              >
                <div
                  className="testimonial-slide"
                  style={{
                    display: "flex",
                    transition: isDragging ? "none" : "transform 0.5s ease",
                    transform: `translateX(calc(-${
                      currentIndex * (86 / testimonialsToShow)
                    }% + ${isSmallScreen ? "50px" : "200px"}
                      ))`,
                    cursor: isDragging ? "grabbing" : "grab",
                    userSelect: "none",
                    width: `${testimonials.length * 15}%`,
                  }}
                  onMouseDown={handleMouseDown}
                  onMouseMove={handleMouseMove}
                  onMouseUp={handleMouseUp}
                  onMouseLeave={handleMouseUp}
                >
                  {testimonials.map((testimonial, index) => (
                    <div
                      className="testimonial-three"
                      key={index}
                      style={{
                        minWidth: isSmallScreen
                          ? `${80 / testimonialsToShow}%`
                          : `${100 / testimonialsToShow}%`,
                        boxSizing: "border-box",
                        padding: "30px",
                      }}
                    >
                      <div className="alumini-test">
                        <div className="alumini-test-left">
                          <Avatar
                            src={testimonial.image}
                            style={{
                              width: "60px",
                              height: "60px",
                            }}
                          />
                        </div>
                        <div className="alumini-test-right">
                          <h4>{testimonial.name}</h4>
                          <p>{testimonial.title}</p>
                          <ul>
                            <li>
                              <FaStar style={{ color: "#FFC107" }} />
                            </li>
                            <li>
                              <FaStar style={{ color: "#FFC107" }} />
                            </li>
                            <li>
                              <FaStar style={{ color: "#FFC107" }} />
                            </li>
                            <li>
                              <FaStar style={{ color: "#FFC107" }} />
                            </li>
                            <li>
                              <FaStar style={{ color: "#FFC107" }} />
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="alumini-content">
                        <p>
                          <FaQuoteLeft
                            style={{ fontSize: "20px", marginRight: "10px" }}
                          />
                          {testimonial.content}
                          <FaQuoteRight style={{ fontSize: "20px" }} />
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Navigation buttons */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginTop: "20px",
                  justifyContent: "center",
                  gap: "10px",
                }}
              >
                <div
                  className="owl-prev"
                  style={{
                    backgroundColor: "#ececff",
                    padding: "5px 10px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={handlePrev}
                >
                  <i
                    className="fa fa-angle-left"
                    style={{
                      fontSize: "28px",
                    }}
                  ></i>
                </div>
                <div
                  className="owl-next"
                  style={{
                    backgroundColor: "#ececff",
                    padding: "5px 10px",
                    display: "flex",
                    alignItems: "center",
                    borderRadius: "5px",
                    cursor: "pointer",
                  }}
                  onClick={handleNext}
                >
                  <i
                    className="fa fa-angle-right"
                    style={{
                      fontSize: "28px",
                    }}
                  ></i>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
