import React, { useEffect } from "react";
import TopBar from "../components/TopBar";
import Footer from "../components/Footer";
import { useMediaQuery } from "@mui/system";
import { Helmet } from "react-helmet-async";

const AboutUs = () => {
  const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down("sm"));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    // Add here title and meta description
    // var PageTitle = document.createElement("title");
    // PageTitle.innerHTML = "Know everything about Jarvis Reach";
    // document.head.appendChild(PageTitle);

    // var PageMetaDescription = document.createElement("meta");
    // PageMetaDescription.name = "description";
    // PageMetaDescription.content =
    //   "Jarvis Reach is a free tool for B2B lead generation, offering CRM integration, data enrichment, and customizable workflows for marketers and small businesses.";
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
        <title>Know everything about Jarvis Reach</title>
        <meta
          name="description"
          content="Jarvis Reach is a free tool for B2B lead generation, offering CRM integration, data enrichment, and customizable workflows for marketers and small businesses."
        />
      </Helmet>

      <section id="emailFinderpage">
        <div className="container">
          <div className="row d-flex align-items-center">
            <div className="col-md-7">
              <div className="email-finder">
                <h1>About Jarvis Reach</h1>
                <p className="mb-0">
                  Welcome to Jarvis Reach, your ultimate partner in lead
                  generation and B2B sales enablement. We are a dynamic and
                  innovative company dedicated to transforming the way
                  businesses find, connect, and engage with their target
                  audience. In today’s fast-paced and competitive market, having
                  the right tools and strategies is essential for success, and
                  that's where we come in.
                </p>
                <p>
                  At Jarvis Reach, we understand that lead generation and
                  customer relationship management (CRM) can be complex and
                  time-consuming. That’s why we’ve built a comprehensive
                  platform that combines cutting-edge technology with
                  user-friendly features to streamline the entire process. Our
                  mission is simple: to empower businesses of all sizes with the
                  tools they need to thrive in the digital age.
                </p>
              </div>
            </div>
            <div className="col-md-5">
              <div className="email-banner">
                <div className="find-mail">
                  <img src="/assets/about.png" className="img-fluid" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="joinCompany ">
        <div className="container mb-4">
          <div className="join-tittle">
            <h6>
              Join the ranks of 200,000 companies engaging business
              professionals directly through Jarvis Reach.
            </h6>
          </div>
          <div className="row">
            <div className="col-md-12">
              <div id="joinBrand">
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                    gap: "10px",
                    justifyContent: "center",
                    alignItems: "center",
                    marginTop: "20px",
                    marginLeft: isSmallScreen ? "90px" : "0px",
                    width: isSmallScreen ? "50%" : "100%",
                  }}
                >
                  <div className="join mb-2 ">
                    <img src="/assets/brands/brand-one.png" />
                  </div>
                  <div className="join mb-2">
                    <img src="/assets/brands/brand-two.png" />
                  </div>
                  <div className="join mb-2">
                    <img src="/assets/brands/brand-3.png" />
                  </div>
                  <div className="join mb-2">
                    <img src="/assets/brands/brand-4.png" />
                  </div>
                  <div className="join">
                    <img src="/assets/brands/brand-5.png" />
                  </div>
                  <div className="join">
                    <img src="/assets/brands/brand-6.png" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="misionVision">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mt-3">
              <div className="mission-value">
                <div className="value-left">
                  <h4>
                    <img
                      src="/assets/vision.png"
                      className="img-fluid image-custom-width"
                    />{" "}
                    Our Vision{" "}
                  </h4>
                  <p>
                    We envision a world where businesses can easily access and
                    leverage the power of data to drive growth and success. We
                    aim to be the go-to solution for businesses looking to
                    enhance their sales and marketing efforts through innovative
                    lead generation and CRM tools. By providing a robust and
                    free-to-use platform, we are committed to helping our users
                    achieve their goals without breaking the bank.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 mt-4">
              <div className="mission-value">
                <div className="value-left">
                  <h4>
                    <img
                      src="/assets/mission.png"
                      className="img-fluid image-custom-width"
                    />{" "}
                    Our Mission{" "}
                  </h4>
                  <p>
                    Our mission is to make lead generation and CRM management
                    more accessible, efficient, and effective for everyone. We
                    believe that every business, regardless of size, should have
                    access to high-quality tools that simplify the process of
                    finding and engaging with potential customers. Through
                    continuous innovation and customer-centric development, we
                    strive to deliver unparalleled value to our users and
                    revolutionize the B2B lead generation landscape.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="weOffer ">
        <div className="container mt-3">
          <div className="row">
            <div className="col-md-6">
              <div className="we-offer-left mt-3">
                <h3 className="mb-3">What We Offer</h3>
                <p>
                  Jarvis Reach is a one-stop solution designed to meet the
                  diverse needs of digital marketers, email marketers, small
                  business owners, consultants, freelancers, and anyone looking
                  to generate B2B leads. Our platform offers a range of powerful
                  features that work seamlessly together to provide a
                  comprehensive lead generation and CRM experience:
                </p>
              </div>
              <div className="we-offer-right mt-4">
                <div className="we-point-main mb-4">
                  <h4 className="mb-3">
                    <i className="fa-regular fa-circle-check"></i> Customizable
                    Workflows
                  </h4>
                  <p>
                    Tailor your lead generation processes to suit your unique
                    business needs. Our platform allows you to create and manage
                    workflows that are specific to your sales and marketing
                    strategies.
                  </p>
                </div>
                <div className="we-point-main mb-4">
                  <h4 className="mb-3">
                    <i className="fa-regular fa-circle-check"></i> Contact
                    Management
                  </h4>
                  <p>
                    Keep track of all your leads and customer interactions in
                    one place. With our intuitive contact management system, you
                    can easily organize and access your contacts, ensuring that
                    no opportunity slips through the cracks.
                  </p>
                </div>
                <div className="we-point-main mb-4">
                  <h4 className="mb-3">
                    <i className="fa-regular fa-circle-check"></i> CRM
                    Integration
                  </h4>
                  <p>
                    Connect with popular CRM systems to synchronize your data
                    and manage your sales pipeline more effectively. Our
                    seamless CRM integration helps you maintain a unified view
                    of your customer relationships.
                  </p>
                </div>
                <div className="we-point-main mb-4">
                  <h4 className="mb-3">
                    <i className="fa-regular fa-circle-check"></i> Pipeline
                    Management
                  </h4>
                  <p>
                    Visualize and manage your sales pipeline with ease. Track
                    the progress of your leads through various stages,
                    prioritize your efforts, and close deals faster.
                  </p>
                </div>
                <div className="we-point-main mb-4">
                  <h4 className="mb-3">
                    <i className="fa-regular fa-circle-check"></i> Data
                    Import/Export
                  </h4>
                  <p>
                    Effortlessly import and export data to and from the
                    platform. Whether you’re bringing in existing contacts or
                    exporting new leads, we make it simple to manage your data.
                  </p>
                </div>
                <div className="we-point-main mb-4">
                  <h4 className="mb-3">
                    <i className="fa-regular fa-circle-check"></i> Real-Time
                    Data Enrichment
                  </h4>
                  <p>
                    Enhance your lead information with real-time data
                    enrichment. Gain deeper insights into your prospects and
                    make more informed decisions with up-to-date information.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="we-offer-right we-height">
                <div className="we-point-main mb-4">
                  <h4 className="mb-3">
                    <i className="fa-regular fa-circle-check"></i> Analytics and
                    Reporting
                  </h4>
                  <p>
                    Measure the effectiveness of your campaigns and strategies
                    with powerful analytics and reporting tools. Our platform
                    provides you with actionable insights to optimize your lead
                    generation efforts.
                  </p>
                </div>
                <div className="we-point-main mb-4">
                  <h4 className="mb-3">
                    <i className="fa-regular fa-circle-check"></i> Lead
                    Generation
                  </h4>
                  <p>
                    Leverage advanced tools and algorithms to identify and
                    capture high-quality leads. With Jarvis Reach, you can grow
                    your pipeline and connect with the right people at the right
                    time.
                  </p>
                </div>
                <div className="we-point-main mb-4">
                  <h4 className="mb-3">
                    <i className="fa-regular fa-circle-check"></i> Campaign
                    Scheduling
                  </h4>
                  <p>
                    Plan and execute your outreach campaigns with precision.
                    Schedule emails, follow-ups, and other marketing activities
                    to engage with your audience at the optimal time.
                  </p>
                </div>
                <div className="we-point-main mb-4">
                  <h4 className="mb-3">
                    <i className="fa-regular fa-circle-check"></i> Data
                    Management
                  </h4>
                  <p>
                    Keep your data organized and up-to-date with our easy-to-use
                    data management features. Tag, categorize, and search
                    through your contacts with just a few clicks.
                  </p>
                </div>
                <div className="we-point-main mb-4">
                  <h4 className="mb-3">
                    <i className="fa-regular fa-circle-check"></i> Bulk Email
                    Extraction
                  </h4>
                  <p>
                    Save time by extracting emails in bulk from various sources.
                    Our bulk email extraction feature allows you to quickly
                    build your contact list and reach out to more prospects.
                  </p>
                </div>
                <div className="we-point-main mb-4">
                  <h4 className="mb-3">
                    <i className="fa-regular fa-circle-check"></i> Email
                    Outreach
                  </h4>
                  <p>
                    Automate your email outreach efforts with personalized and
                    targeted campaigns. Our platform helps you send the right
                    message to the right person, improving your chances of
                    conversion.
                  </p>
                </div>
                <div className="we-point-main mb-4">
                  <h4 className="mb-3">
                    <i className="fa-regular fa-circle-check"></i> LinkedIn
                    Profile Data Export
                  </h4>
                  <p>
                    Export LinkedIn profile data to build a more comprehensive
                    view of your leads. Use this information to tailor your
                    outreach and build stronger connections.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="howItworkimg">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <div className="how-working">
                <div className="how-it-work">
                  <img src="images/registered.png" className="img-fluid" />
                  <h3>Why Choose Us?</h3>
                  <p>
                    At Jarvis Reach, we are driven by a passion for helping
                    businesses succeed. Our platform is designed to be powerful,
                    yet simple to use, making it accessible to users of all
                    experience levels. We believe in transparency and fairness,
                    which is why our tool is free to use. We are constantly
                    innovating and improving our platform based on user feedback
                    to ensure that we deliver the best possible experience.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md-6 ">
              <div className="how-working">
                <div className="how-it-work ">
                  <img src="/images/application.png" className="img-fluid" />
                  <h3>Join Us on This Journey</h3>
                  <p>
                    We invite you to join us on this exciting journey as we
                    redefine the future of lead generation and CRM management.
                    Whether you’re a startup looking to build your customer base
                    or an established business aiming to scale, Jarvis Reach is
                    here to support your growth every step of the way.
                  </p>
                  <h4 className="mt-3">
                    Thank you for choosing Jarvis Reach. Together, let’s reach
                    new heights!
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="joinToday"
        style={{
          marginTop: "50px",
        }}
      >
        <div className="container ">
          <div className="row ">
            <div className="col-md-12 ">
              <div className="join-free">
                <h2>Join Today. It’s free </h2>
                <p>
                  Start now and discover dependable contact information on
                  LinkedIn for free, featuring categorized and verified email
                  addresses and phone numbers
                </p>
                <a
                  href={`
                    ${import.meta.env.VITE_JARVIS_SIGNUP}
                  `}
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

export default AboutUs;
