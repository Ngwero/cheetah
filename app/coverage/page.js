"use client";
import Breadcrumb from "@/components/Breadcrumb";
import BrandSlider from "@/components/slider/BrandSlider";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";

const CoveragePage = () => {
  const coverageAreas = [
    {
      id: 1,
      title: "Kampala Central",
      description: "Full coverage in Kampala city center and surrounding areas",
      status: "Available",
      speed: "Up to 200 Mbps",
    },
    {
      id: 2,
      title: "Entebbe",
      description: "High-speed internet coverage in Entebbe and nearby regions",
      status: "Available",
      speed: "Up to 100 Mbps",
    },
    {
      id: 3,
      title: "Jinja",
      description: "Reliable broadband service in Jinja and surrounding districts",
      status: "Available",
      speed: "Up to 100 Mbps",
    },
    {
      id: 4,
      title: "Mbarara",
      description: "Fast internet connectivity in Mbarara and western Uganda",
      status: "Available",
      speed: "Up to 50 Mbps",
    },
    {
      id: 5,
      title: "Gulu",
      description: "Northern Uganda coverage with high-speed internet",
      status: "Available",
      speed: "Up to 50 Mbps",
    },
    {
      id: 6,
      title: "Mbale",
      description: "Eastern Uganda coverage with reliable broadband",
      status: "Available",
      speed: "Up to 50 Mbps",
    },
  ];

  return (
    <NetBandLayout header={1}>
      <Breadcrumb pageTitle={"Coverage Areas"} />

      {/*<< Coverage Hero Section Start >>*/}
      <section className="coverage-hero-section fix section-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="coverage-hero-content text-center">
                <h1 className="wow fadeInUp" data-wow-delay=".3s">
                  Check Our Coverage Areas
                </h1>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  Find out if CheetahNet services are available in your area. We're continuously expanding our network to bring high-speed internet to more locations across Uganda.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*<< Coverage Areas Section Start >>*/}
      <section className="coverage-areas-section fix section-padding pt-0">
        <div className="container">
          <div className="row g-4">
            {coverageAreas.map((area, index) => (
              <div
                key={area.id}
                className="col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={`${0.2 + index * 0.1}s`}
              >
                <div className="coverage-card-items">
                  <div className="coverage-header">
                    <h3>{area.title}</h3>
                    <span className="status-badge available">{area.status}</span>
                  </div>
                  <p>{area.description}</p>
                  <div className="coverage-info">
                    <div className="info-item">
                      <i className="flaticon-connection" />
                      <span>{area.speed}</span>
                    </div>
                  </div>
                  <Link href="contact" className="theme-btn">
                    <span>
                      Check Availability <i className="fas fa-chevron-right" />
                    </span>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*<< Coverage Map Section Start >>*/}
      <section className="coverage-map-section fix section-padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="coverage-map-wrapper">
                <div className="section-title text-center">
                  <span className="wow fadeInUp">Coverage Map</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Our Network Coverage
                  </h2>
                </div>
                <div className="map-placeholder wow fadeInUp" data-wow-delay=".5s">
                  <div className="map-content">
                    <i className="flaticon-location" style={{ fontSize: "64px", color: "var(--theme)", marginBottom: "20px" }} />
                    <h4>Interactive Coverage Map</h4>
                    <p>Enter your address to check if CheetahNet is available in your area</p>
                    <div className="address-check-form">
                      <input
                        type="text"
                        placeholder="Enter your address"
                        className="form-control"
                      />
                      <Link href="contact" className="theme-btn">
                        <span>Check Coverage</span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*<< Contact Support Section Start >>*/}
      <section className="contact-support-section fix section-padding pt-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 mx-auto">
              <div className="contact-support-content text-center">
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  Don't See Your Area?
                </h2>
                <p className="wow fadeInUp" data-wow-delay=".5s">
                  We're always expanding our network. Contact us to request coverage in your area or to get updates on when we'll be available near you.
                </p>
                <div className="contact-info-items wow fadeInUp" data-wow-delay=".7s">
                  <div className="contact-info-item">
                    <i className="flaticon-smart-tv-3" />
                    <div className="content">
                      <h6>Call Us</h6>
                      <a href="tel:+256771099075">+256 771 099075</a>
                    </div>
                  </div>
                  <div className="contact-info-item">
                    <i className="flaticon-connection" />
                    <div className="content">
                      <h6>Email Us</h6>
                      <a href="mailto:info@cheetahnet.com">info@cheetahnet.com</a>
                    </div>
                  </div>
                </div>
                <Link href="contact" className="theme-btn wow fadeInUp" data-wow-delay=".9s">
                  <span>
                    Request Coverage <i className="fas fa-chevron-right" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*<< Brand Section Start >>*/}
      <div className="brand-section fix section-padding pt-0">
        <div className="container">
          <div className="brand-wrapper">
            <h6 className="text-center wow fadeInUp" data-wow-delay=".3s">
              1K+ BRANDS TRUST US
            </h6>
            <BrandSlider />
          </div>
        </div>
      </div>
    </NetBandLayout>
  );
};

export default CoveragePage;


