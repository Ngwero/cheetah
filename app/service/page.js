import Breadcrumb from "@/components/Breadcrumb";
import ContactSection from "@/components/ContactSection";
import NetBandAccordion from "@/components/NetBandAccordion";
import ProgressBar from "@/components/ProgressBar";
import NewsSlider from "@/components/slider/NewsSlider";
import { TestimonialSlider3 } from "@/components/slider/TestimonialSlider";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
const page = () => {
  const faqItem = [
    {
      id: 1,
      title: "What areas in Kampala does CheetahNet cover?",
      content:
        "CheetahNet provides high-speed internet services across Kampala and surrounding areas including Nakasero, Kololo, Bugolobi, Ntinda, and many other neighborhoods. We're continuously expanding our fiber network to reach more communities throughout Uganda. Contact us to check availability in your specific area.",
      animationDelay: ".3s",
    },
    {
      id: 2,
      title: "What payment methods do you accept in Uganda?",
      content:
        "We accept multiple payment methods convenient for Ugandan customers including Mobile Money (MTN, Airtel, Africell), bank transfers, and cash payments at our office. Monthly subscriptions can be set up for automatic Mobile Money deductions for hassle-free billing.",
      animationDelay: ".5s",
    },
    {
      id: 3,
      title: "How long does installation take in Kampala?",
      content:
        "Installation typically takes 1-3 business days after your order is confirmed. Our technical team will schedule a convenient time to visit your location in Kampala, install the necessary equipment, and ensure everything is working perfectly before leaving. We provide same-day installation for urgent business needs when possible.",
      animationDelay: ".7s",
    },
    {
      id: 4,
      title: "Do you offer 24/7 customer support in Uganda?",
      content:
        "Yes! Our customer support team is available 24/7 to assist you with any technical issues, billing questions, or service inquiries. You can reach us via phone, email, or WhatsApp. We have local support staff who understand the unique needs of Ugandan customers and can provide assistance in English and local languages.",
      animationDelay: ".9s",
    },
  ];
  return (
    <NetBandLayout header={1}>
      <Breadcrumb pageTitle={"our services"} />
      <section className="service-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">our fucusable services</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              How do we work to help you <br />
              in Startup Business
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-box-items">
                <div className="icon">
                  <i className="flaticon-wifi-router-5" />
                </div>
                <div className="content">
                  <h3>
                    <span>Broadband</span>
                  </h3>
                  <p>We approached WiaTech with complex project deliver</p>
                  <span className="arrow-icon">
                    <i className="fas fa-chevron-right" />
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="service-box-items active">
                <div className="icon">
                  <i className="flaticon-wi-fi" />
                </div>
                <div className="content">
                  <h3>
                    <span>WIFI Internet</span>
                  </h3>
                  <p>We approached WiaTech with complex project deliver</p>
                  <span className="arrow-icon">
                    <i className="fas fa-chevron-right" />
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="service-box-items">
                <div className="icon">
                  <i className="flaticon-satellite-tv" />
                </div>
                <div className="content">
                  <h3>
                    <span>Satellite TV</span>
                  </h3>
                  <p>We approached WiaTech with complex project deliver</p>
                  <span className="arrow-icon">
                    <i className="fas fa-chevron-right" />
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="service-box-items">
                <div className="icon">
                  <i className="flaticon-tv-box" />
                </div>
                <div className="content">
                  <h3>
                    <span>TV box</span>
                  </h3>
                  <p>We approached WiaTech with complex project deliver</p>
                  <span className="arrow-icon">
                    <i className="fas fa-chevron-right" />
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="service-box-items">
                <div className="icon">
                  <i className="flaticon-server" />
                </div>
                <div className="content">
                  <h3>
                    <span>Hosting Service</span>
                  </h3>
                  <p>
                    Our service offerings enhance experience throughout highly
                  </p>
                  <span className="arrow-icon">
                    <i className="fas fa-chevron-right" />
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="service-box-items">
                <div className="icon">
                  <i className="flaticon-satellite-dish" />
                </div>
                <div className="content">
                  <h3>
                    <span>Satelite TV</span>
                  </h3>
                  <p>
                    Our service offerings enhance experience throughout highly
                  </p>
                  <span className="arrow-icon">
                    <i className="fas fa-chevron-right" />
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="service-box-items">
                <div className="icon">
                  <i className="flaticon-signal" />
                </div>
                <div className="content">
                  <h3>
                    <span>Home Internet</span>
                  </h3>
                  <p>
                    Our service offerings enhance experience throughout highly
                  </p>
                  <span className="arrow-icon">
                    <i className="fas fa-chevron-right" />
                  </span>
                </div>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".9s"
            >
              <div className="service-box-items">
                <div className="icon">
                  <i className="flaticon-wifi-router-5" />
                </div>
                <div className="content">
                  <h3>
                    <span>Broadband</span>
                  </h3>
                  <p>We approached WiaTech with complex project deliver</p>
                  <span className="arrow-icon">
                    <i className="fas fa-chevron-right" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Cta Banner Section Start >>*/}
      <section
        className="cta-banner-section bg-cover section-padding"
        style={{ backgroundImage: 'url("assets/img/banner/01.jpg")' }}
      >
        <div className="container">
          <div className="cta-banner-wrapper section-padding pt-0">
            <div className="section-title mb-0">
              <span className="wow fadeInUp">5m+ Trusted Our Clients</span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                Need It advisor For your business ? <br />
                Please Call :{" "}
                <a href="tel:+256771099075" className="theme-color-1">
                  +256 771 099075
                </a>
              </h2>
            </div>
            <Link
              href="contact"
              className="theme-btn hover-white wow fadeInUp"
              data-wow-delay=".5s"
            >
              <span>
                Get a Free Quate
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/*<< Feature Icon Box Section Start >>*/}
      <section className="feature-icon-box-area-2">
        <div className="container">
          <div className="feature-icon-box-wrapper">
            <div className="row g-4">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="icon-box-items">
                  <div className="icon">
                    <i className="flaticon-database" />
                  </div>
                  <div className="content">
                    <h3>Voice Over Protocol</h3>
                    <p>Average time to resolve a cyber attack.</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon-box-items active">
                  <div className="icon">
                    <i className="flaticon-server" />
                  </div>
                  <div className="content">
                    <h3>Data Backup</h3>
                    <p>Average time to resolve a cyber attack.</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="icon-box-items">
                  <div className="icon">
                    <i className="flaticon-connection" />
                  </div>
                  <div className="content">
                    <h3>Fast Connected</h3>
                    <p>Average time to resolve a cyber attack.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Faq Section Start >>*/}
      <section className="faq-section section-padding section-bg-2">
        <div className="container">
          <div className="about-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">
                      freequently Ask Questions
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      have a question in <br />
                      your mind?
                    </h2>
                  </div>
                  <p
                    className=" mt-4 mt-md-0 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    Transmds is the world’s driving worldwide coordinations{" "}
                    <br />
                    supplier — we uphold industry and exchange the
                  </p>
                  <div className="circle-progress-bar-wrapper">
                    <div
                      className="single-circle-bar wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <ProgressBar value={88} />
                      <div className="content">
                        <h6>
                          Organizations <br />
                          work support
                        </h6>
                      </div>
                    </div>
                    <div
                      className="single-circle-bar wow fadeInUp"
                      data-wow-delay=".9s"
                    >
                      <ProgressBar value={93} />
                      <div className="content">
                        <h6>
                          Management &amp; <br />
                          Support Services
                        </h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="faq-content style-2 style-color">
                  <div className="faq-accordion">
                    <NetBandAccordion
                      items={faqItem}
                      eventKey="service"
                      activeKey={"service2"}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Testimonial Section Start >>*/}
      <section className="testimonial-section-2 fix section-padding">
        <div className="container-fluid">
          <TestimonialSlider3 extraClass="pt-0 pb-0 style-2" />
        </div>
      </section>
      {/*<< News Section Start >>*/}
      <section className="news-section-2 fix">
        <div className="container">
          <div className="title-section-area">
            <div className="section-title">
              <span className="wow fadeInUp">News &amp; Blog</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Read Our News &amp; Blogs
              </h2>
            </div>
            <Link
              href="news-details"
              className="theme-btn wow fadeInUp"
              data-wow-delay=".5s"
            >
              <span>
                Explore Our news
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
          <NewsSlider />
        </div>
      </section>
      {/*<< Contact Section Start >>*/}
      <ContactSection />
    </NetBandLayout>
  );
};
export default page;
