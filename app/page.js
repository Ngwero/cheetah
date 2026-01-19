"use client";
import NetBandAccordion from "@/components/NetBandAccordion";
import Package1 from "@/components/Package";
import ProgressBar from "@/components/ProgressBar";
import Service1 from "@/components/Service";
import BrandSlider from "@/components/slider/BrandSlider";
import Home1 from "@/components/slider/Home1";
import TestimonialSlider from "@/components/slider/TestimonialSlider";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";
import Image from "next/image";
const page = () => {
  return (
    <NetBandLayout header={1}>
      {/*<< Hero Section Start >>*/}
      <Home1 />
      {/*<< Moving Words Section Start >>*/}
      <div className="marque-section pt-0" style={{ paddingTop: '0', paddingBottom: '0' }}>
        <div className="marquee-wrapper text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider service-text">Broadband</span>
                <span className="text-slider style-border" />
                <span className="text-slider service-text">WiFi</span>
                <span className="text-slider style-border" />
                <span className="text-slider service-text">Internet</span>
                <span className="text-slider style-border" />
                <span className="text-slider service-text">TV Streaming</span>
                <span className="text-slider style-border" />
                <span className="text-slider service-text">Fiber Optic</span>
                <span className="text-slider style-border" />
                <span className="text-slider service-text">Home Network</span>
                <span className="text-slider style-border" />
                <span className="text-slider service-text">Business Internet</span>
                <span className="text-slider style-border" />
                <span className="text-slider service-text">Cloud Services</span>
                <span className="text-slider style-border" />
                <span className="text-slider service-text">Broadband</span>
                <span className="text-slider style-border" />
                <span className="text-slider service-text">WiFi</span>
                <span className="text-slider style-border" />
                <span className="text-slider service-text">Internet</span>
                <span className="text-slider style-border" />
                <span className="text-slider service-text">TV Streaming</span>
                <span className="text-slider style-border" />
                <span className="text-slider service-text">Fiber Optic</span>
                <span className="text-slider style-border" />
                <span className="text-slider service-text">Home Network</span>
                <span className="text-slider style-border" />
                <span className="text-slider service-text">Business Internet</span>
                <span className="text-slider style-border" />
                <span className="text-slider service-text">Cloud Services</span>
                <span className="text-slider style-border" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*<< TV Streaming Hero Section Start >>*/}
      <section className="tv-streaming-hero-section fix section-padding">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <div className="streaming-hero-content">
                <h1 className="text-white wow fadeInUp" data-wow-delay=".3s">
                  Enjoy Unlimited movies, TV shows and more.
                </h1>
                <p className="text-white wow fadeInUp" data-wow-delay=".5s">
                  Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.
                </p>
                <div className="pricing-info wow fadeInUp" data-wow-delay=".7s">
                  <span className="price-label">Internet Pack Plans Starting @</span>
                  <div className="price-box">
                    <span className="price-amount">UGX 80,000</span>
                    <span className="price-period">/ month</span>
                  </div>
                </div>
                <div className="hero-button wow fadeInUp" data-wow-delay=".9s">
                  <Link href="/pricing" className="theme-btn">
                    <span>
                      Browse Plans <i className="fas fa-chevron-right" />
                    </span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-lg-6">
              <div className="tv-display-wrapper wow fadeInUp" data-wow-delay=".5s">
                <div className="tv-frame">
                  <div className="tv-screen">
                    <div className="tv-content-scroll">
                      <div className="tv-content-grid tv-scroll-up">
                        {[
                          { title: 'The Dark Knight', poster: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg', fallback: '667eea' },
                          { title: 'The Godfather', poster: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg', fallback: 'f093fb' },
                          { title: 'Pulp Fiction', poster: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg', fallback: '4facfe' },
                          { title: 'Dune', poster: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg', fallback: '43e97b' },
                          { title: 'The Avengers', poster: 'https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg', fallback: 'fa709a' },
                          { title: 'Parasite', poster: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg', fallback: '667eea' },
                          { title: 'Interstellar', poster: 'https://image.tmdb.org/t/p/w500/7d6EY00g1c39SGZOoCJ5Py9nNth.jpg', fallback: 'f093fb' },
                          { title: 'The Shawshank Redemption', poster: 'https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg', fallback: '4facfe' },
                          { title: 'Fight Club', poster: 'https://image.tmdb.org/t/p/w500/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg', fallback: '43e97b' },
                          { title: 'Avengers: Infinity War', poster: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg', fallback: 'fa709a' },
                          { title: 'Gladiator', poster: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg', fallback: '667eea' },
                          { title: 'The Lord of the Rings', poster: 'https://image.tmdb.org/t/p/w500/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg', fallback: 'f093fb' },
                        ].map((movie, idx) => (
                          <div key={`movie-${idx}`} className="tv-poster">
                            <img 
                              src={movie.poster}
                              alt={movie.title}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `https://via.placeholder.com/300x450/${movie.fallback}/ffffff?text=${encodeURIComponent(movie.title)}`;
                              }}
                              loading="lazy"
                            />
                          </div>
                        ))}
                        {/* Duplicate for seamless scroll */}
                        {[
                          { title: 'The Dark Knight', poster: 'https://image.tmdb.org/t/p/w500/1pdfLvkbY9ohJlCjQH2CZjjYVvJ.jpg', fallback: '667eea' },
                          { title: 'The Godfather', poster: 'https://image.tmdb.org/t/p/w500/3bhkrj58Vtu7enYsRolD1fZdja1.jpg', fallback: 'f093fb' },
                          { title: 'Pulp Fiction', poster: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg', fallback: '4facfe' },
                          { title: 'Dune', poster: 'https://image.tmdb.org/t/p/w500/d5NXSklXo0qyIYkgV94XAgMIckC.jpg', fallback: '43e97b' },
                          { title: 'The Avengers', poster: 'https://image.tmdb.org/t/p/w500/RYMX2wcKCBAr24UyPD7xwmjaTn.jpg', fallback: 'fa709a' },
                          { title: 'Parasite', poster: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg', fallback: '667eea' },
                          { title: 'Interstellar', poster: 'https://image.tmdb.org/t/p/w500/7d6EY00g1c39SGZOoCJ5Py9nNth.jpg', fallback: 'f093fb' },
                          { title: 'The Shawshank Redemption', poster: 'https://image.tmdb.org/t/p/w500/2CAL2433ZeIihfX1Hb2139CX0pW.jpg', fallback: '4facfe' },
                          { title: 'Fight Club', poster: 'https://image.tmdb.org/t/p/w500/4m1Au3YkjqsxF8iwQy0fPYSxE0h.jpg', fallback: '43e97b' },
                          { title: 'Avengers: Infinity War', poster: 'https://image.tmdb.org/t/p/w500/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg', fallback: 'fa709a' },
                          { title: 'Gladiator', poster: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg', fallback: '667eea' },
                          { title: 'The Lord of the Rings', poster: 'https://image.tmdb.org/t/p/w500/2u7zbn8EudG6kLlBzUYqP8RyFU4.jpg', fallback: 'f093fb' },
                        ].map((movie, idx) => (
                          <div key={`movie-dup-${idx}`} className="tv-poster">
                            <img 
                              src={movie.poster}
                              alt={movie.title}
                              onError={(e) => {
                                e.target.onerror = null;
                                e.target.src = `https://via.placeholder.com/300x450/${movie.fallback}/ffffff?text=${encodeURIComponent(movie.title)}`;
                              }}
                              loading="lazy"
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="tv-stand">
                    <div className="tv-brand">SAMSUNG</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Feature Section Start >>*/}
      <section className="feature-section fix section-padding">
        <div className="shape-image">
          <img src="assets/img/shape.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="row g-4">
            <div
              className="col-xxl-4 col-xl-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="single-feature-items">
                <div className="content">
                  <span>Features</span>
                  <h3>TV &amp; Streaming</h3>
                </div>
                <div className="icon">
                  <i className="flaticon-smart-tv-1" />
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="single-feature-items active">
                <div className="content">
                  <span>Features</span>
                  <h3>Fast Internet</h3>
                </div>
                <div className="icon">
                  <i className="flaticon-connection" />
                </div>
              </div>
            </div>
            <div
              className="col-xxl-4 col-xl-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="single-feature-items">
                <div className="content">
                  <span>Features</span>
                  <h3>All for Mobile</h3>
                </div>
                <div className="icon">
                  <i className="flaticon-smart-tv-3" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< About Section Start >>*/}
      <section className="about-section fix section-padding pt-0">
        <div className="container">
          <div className="about-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="about-image-items">
                  <div
                    className="about-image bg-cover wow fadeInLeft"
                    data-wow-delay=".3s"
                    style={{
                      backgroundImage: 'url("assets/img/about/about.jpg")',
                    }}
                  >
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="about-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">About CheetahNet</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Get TV streaming with your internet service
                    </h2>
                    <p className="wow fadeInUp" data-wow-delay=".4s" style={{ fontSize: '24px', fontWeight: '600', color: '#ff8c00', marginTop: '15px' }}>
                      Pushing Limits
                    </p>
                  </div>
                  <p
                    className=" mt-4 mt-md-0 wow fadeInUp"
                    data-wow-delay=".5s"
                  >
                    CheetahNet is Uganda's leading internet service provider, 
                    delivering high-speed fiber optic connectivity to homes and 
                    businesses across Kampala. Experience reliable internet with 
                    our award-winning network infrastructure.
                  </p>
                  <div className="circle-progress-bar-wrapper">
                    <div
                      className="single-circle-bar wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <ProgressBar value={88} />
                      <div className="content">
                        <h6>
                          Free Installation <br />
                          Ultrafast Connect
                        </h6>
                      </div>
                    </div>
                    <div
                      className="single-circle-bar wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <ProgressBar value={93} />
                      <div className="content">
                        <h6>
                          Real Technology <br />
                          Solutions
                        </h6>
                      </div>
                    </div>
                  </div>
                  <ul className="about-list wow fadeInUp" data-wow-delay=".7s">
                    <li>
                      <i className="far fa-check me-2" />
                      Professional Team Member
                    </li>
                    <li>
                      <i className="far fa-check me-2" />
                      Awards Winning Internet Solutions Company
                    </li>
                    <li>
                      <i className="far fa-check me-2" />
                      Dedicated Tech Services
                    </li>
                  </ul>
                  <div className="about-author">
                    <div
                      className="about-button wow fadeInUp"
                      data-wow-delay=".8s"
                    >
                      <Link href="about" className="theme-btn">
                        <span>
                          Explore more about
                          <i className="fas fa-chevron-right" />
                        </span>
                      </Link>
                    </div>
                    <div
                      className="author-image wow fadeInUp"
                      data-wow-delay=".9s"
                    >
                      <img src="assets/img/about/author.png" alt="author-img" />
                      <div className="content">
                        <h5 className="mb-2">Modina Theme</h5>
                        <p>Ceo &amp; Founder</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Network Solutions Section Start >>*/}
      <section className="network-solution-section section-padding fix pt-0">
        <div className="container custom-container-2">
          <div className="network-solution-wrapper">
            <div className="section-title text-center">
              <span className="wow fadeInUp">Best Network</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Find Perfect Network <br />
                Solutions
              </h2>
            </div>
            <div className="row">
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".2s"
              >
                <div className="network-solution-items">
                  <div className="icon">
                    <i className="flaticon-connection" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="about">Corporate Internet</Link>
                    </h4>
                    <p>
                      Average time to resolve a cyber attack Average time to
                      resolve
                    </p>
                    <Link href="about" className="link-btn">
                      <span>Discover More</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".4s"
              >
                <div className="network-solution-items">
                  <div className="icon">
                    <i className="flaticon-signal" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="about">Home Internet</Link>
                    </h4>
                    <p>
                      Average time to resolve a cyber attack Average time to
                      resolve
                    </p>
                    <Link href="about" className="link-btn">
                      <span>Discover More</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".6s"
              >
                <div className="network-solution-items">
                  <div className="icon">
                    <i className="flaticon-server" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="about">Hosting &amp; Development</Link>
                    </h4>
                    <p>
                      Average time to resolve a cyber attack Average time to
                      resolve
                    </p>
                    <Link href="about" className="link-btn">
                      <span>Discover More</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay=".8s"
              >
                <div className="network-solution-items">
                  <div className="icon">
                    <i className="flaticon-satellite-dish" />
                  </div>
                  <div className="content">
                    <h4>
                      <Link href="about">Satelite Chanel</Link>
                    </h4>
                    <p>
                      Average time to resolve a cyber attack Average time to
                      resolve
                    </p>
                    <Link href="about" className="link-btn">
                      <span>Discover More</span>
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Choose Package Section Start >>*/}
      <Package1 />
      {/*<< Marque Studies Start >>*/}
      <div className="marque-section marque-section-secondary section-padding pt-0 mt-5">
        <div className="marquee-wrapper text-slider">
          <div className="marquee-inner to-left">
            <ul className="marqee-list d-flex">
              <li className="marquee-item">
                <span className="text-slider">Internet</span>
                <span className="text-slider">Wifi</span>
                <span className="text-slider style-border" />
                <span className="text-slider">broadband</span>
                <span className="text-slider">Tv</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Internet</span>
                <span className="text-slider">Wifi</span>
                <span className="text-slider style-border" />
                <span className="text-slider">broadband</span>
                <span className="text-slider">Tv</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Internet</span>
                <span className="text-slider">Wifi</span>
                <span className="text-slider style-border" />
                <span className="text-slider">broadband</span>
                <span className="text-slider">Tv</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Internet</span>
                <span className="text-slider">Wifi</span>
                <span className="text-slider style-border" />
                <span className="text-slider">broadband</span>
                <span className="text-slider">Tv</span>
                <span className="text-slider style-border" />
                <span className="text-slider">Internet</span>
                <span className="text-slider">Wifi</span>
                <span className="text-slider style-border" />
                <span className="text-slider">broadband</span>
                <span className="text-slider">Tv</span>
                <span className="text-slider style-border" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      {/*<< Service Section Start >>*/}
      <Service1 />
      {/*<< Brand Section Start >>*/}
      <section className="brand-section fix section-padding pt-0">
        <div className="container">
          <div className="brand-wrapper">
            <h6 className="text-center wow fadeInUp" data-wow-delay=".3s">
              1K+ BRANDS TRUST US
            </h6>
            <BrandSlider />
          </div>
        </div>
      </section>
      {/*<< Cta Banner Section Start >>*/}
      <section
        className="cta-banner-section bg-cover section-padding"
        style={{ backgroundImage: 'url("assets/img/banner/02.jpg")' }}
      >
        <div className="container">
          <div className="cta-banner-wrapper section-padding pt-0">
            <div className="section-title mb-0">
              <span className="text-white wow fadeInUp">
                Subscribe Nextflix Tv
              </span>
              <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
                Enjoy Sports Movies, TV Shows &amp; More.
                <br />
                Please Call :{" "}
                <a href="tel:+256771099075" className="text-white">
                  +256 771 099075
                </a>
              </h2>
            </div>
            <Link
              href="service"
              className="theme-btn bg-white wow fadeInUp"
              data-wow-delay=".5s"
            >
              <span>
                View All Services
                <i className="fas fa-chevron-right" />
              </span>
            </Link>
          </div>
        </div>
      </section>
      {/*<< Feature Icon Box Section Start >>*/}
      <section className="feature-icon-box-area">
        <div className="container">
          <div className="feature-icon-box-wrapper">
            <div className="row g-4">
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".3s"
              >
                <div className="icon-box-items">
                  <div className="icon">
                    <i className="flaticon-tv-box-1" />
                  </div>
                  <div className="content">
                    <h3>Smart TV Box</h3>
                    <p>200+ entertainment channels for different age groups</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".5s"
              >
                <div className="icon-box-items active">
                  <div className="icon">
                    <i className="flaticon-smartphone" />
                  </div>
                  <div className="content">
                    <h3>Mobile connection</h3>
                    <p>Use our router to stay online on all your devices.</p>
                  </div>
                </div>
              </div>
              <div
                className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
                data-wow-delay=".7s"
              >
                <div className="icon-box-items">
                  <div className="icon">
                    <i className="flaticon-wifi-router-2" />
                  </div>
                  <div className="content">
                    <h3>Wifi internet</h3>
                    <p>
                      High-speed Internet access that is always on &amp; fast.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Pricing Section Start >>*/}
      <section className="pricing-section fix section-padding">
        <div className="container custom-container-2">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Pricing Plan</span>
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Choose Your Internet <br />
              Pack By Speed
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".2s"
            >
              <div className="pricing-card-items">
                <div className="pricing-header">
                  <h6>Internet</h6>
                  <h3>20 Mbps</h3>
                </div>
                <ul className="icon-items">
                  <li>
                    <i className="flaticon-connection" />
                  </li>
                </ul>
                <ul className="price-list">
                  <li>
                    <i className="far fa-check" />
                    Up to 20 Mbps download speed
                  </li>
                  <li>
                    <i className="far fa-check" />
                    WiFi router included
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Unlimited data usage
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Multiple device connectivity
                  </li>
                </ul>
                <div className="price">
                  UGX 150,000 <span> | month </span>
                </div>
                <Link href="pricing" className="theme-btn">
                  <span>Get started</span>
                </Link>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".4s"
            >
              <div className="pricing-card-items">
                <div className="pricing-header">
                  <h6>Internet</h6>
                  <h3>50 Mbps</h3>
                </div>
                <ul className="icon-items">
                  <li>
                    <i className="flaticon-connection" />
                  </li>
                </ul>
                <ul className="price-list">
                  <li>
                    <i className="far fa-check" />
                    Up to 50 Mbps download speed
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Premium WiFi router included
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Unlimited data usage
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Multiple device connectivity
                  </li>
                </ul>
                <div className="price">
                  UGX 300,000 <span> | month </span>
                </div>
                <Link href="pricing" className="theme-btn">
                  <span>Get started</span>
                </Link>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".6s"
            >
              <div className="pricing-card-items">
                <div className="pricing-header">
                  <h6>Internet</h6>
                  <h3>100 Mbps</h3>
                </div>
                <ul className="icon-items">
                  <li>
                    <i className="flaticon-connection" />
                  </li>
                </ul>
                <ul className="price-list">
                  <li>
                    <i className="far fa-check" />
                    Up to 100 Mbps download speed
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Premium WiFi router included
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Unlimited data usage
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Night turbo-speed boost
                  </li>
                </ul>
                <div className="price">
                  UGX 450,000 <span> | month </span>
                </div>
                <Link href="pricing" className="theme-btn">
                  <span>Get started</span>
                </Link>
              </div>
            </div>
            <div
              className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
              data-wow-delay=".8s"
            >
              <div className="pricing-card-items">
                <div className="pricing-header">
                  <h6>Internet</h6>
                  <h3>200 Mbps</h3>
                </div>
                <ul className="icon-items">
                  <li>
                    <i className="flaticon-connection" />
                  </li>
                </ul>
                <ul className="price-list">
                  <li>
                    <i className="far fa-check" />
                    Up to 200 Mbps download speed
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Premium WiFi router included
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Unlimited data usage
                  </li>
                  <li>
                    <i className="far fa-check" />
                    Business-grade reliability
                  </li>
                </ul>
                <div className="price">
                  UGX 650,000 <span> | month </span>
                </div>
                <Link href="pricing" className="theme-btn">
                  <span>Get started</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Gaming Section Start >>*/}
      <section className="cta-subscribe-section gaming-section fix section-padding">
        <div className="container custom-container-2">
          <div className="cta-subscribe-wrapper">
            <div className="row justify-content-between">
              <div className="col-lg-7 wow fadeInUp" data-wow-delay=".3s">
                <div className="cta-subscribe-image">
                  <img src="assets/img/banner/cta-tv.png" alt="gaming-img" />
                </div>
              </div>
              <div className="col-lg-5 mt-5 mt-md-0">
                <div className="cta-subscribe-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">Gaming</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Ultimate Gaming Experience <br /> Low Latency &amp; High Speed
                    </h2>
                  </div>
                  <p className="mt-3 mt-md-0 wow fadeInUp" data-wow-delay=".5s">
                    Experience lag-free gaming with our ultra-fast internet connection. Perfect for competitive gaming, streaming, and multiplayer sessions with minimal latency.
                  </p>
                  <h4
                    className="cta-sub-title wow fadeInUp"
                    data-wow-delay=".3s"
                  >
                    <span>Subscribe Gaming Package &amp; Get</span> <br />
                    FREE Gaming Router For 1 Month
                  </h4>
                  <div className="subscribe-plan">
                    <h3 className="price wow fadeInUp" data-wow-delay=".5s">
                      <span>Only</span> UGX 320,000<sub>/Mon</sub>
                    </h3>
                    <Link
                      href="pricing"
                      className="link-btn style-2 wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <span>View All Plans</span>{" "}
                      <i className="fas fa-chevron-right" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Cta Parallax Section Start >>*/}
      <div
        className="cta-parallax-section bg-cover"
        style={{ backgroundImage: 'url("assets/img/banner/02.jpg")' }}
      >
        <div className="container">
          <div className="cta-parallax-wrapper text-center">
            <h2 className="text-white wow fadeInUp" data-wow-delay=".3s">
              Need Fast &amp; Secure Broadband! Use <br /> CheetahNet &amp; The
              Real Network
            </h2>
            <div className="button-items">
              <Link
                href="pricing"
                className="theme-btn wow fadeInUp"
                data-wow-delay=".5s"
              >
                <span>
                  View our Plans <i className="fas fa-chevron-right" />
                </span>
              </Link>
              <span className="or">or</span>
              <a
                href="tel:+256771099075"
                className="theme-btn bg-white wow fadeInUp"
                data-wow-delay=".7s"
              >
                <span>
                  +1718-904-4450 <i className="fas fa-chevron-right" />
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/*<< Counter Section Start >>*/}
      <section className="counter-section">
        <div className="container">
          <div className="counter-wrapper">
            <div className="counter-items wow fadeInUp" data-wow-delay=".2s">
              <h2>
                <span className="count">20</span>+
              </h2>
              <p>
                YEARS OF <br />
                EXPERIENCE
              </p>
            </div>
            <div className="counter-items wow fadeInUp" data-wow-delay=".4s">
              <h2>
                <span className="count">220</span>k
              </h2>
              <p>
                CLIENTS IN <br />
                THE WORLD
              </p>
            </div>
            <div className="counter-items wow fadeInUp" data-wow-delay=".6s">
              <h2>
                <span className="count">2,5</span>k
              </h2>
              <p>
                KILOMETERS <br />
                OF FIBERS
              </p>
            </div>
            <div className="counter-items wow fadeInUp" data-wow-delay=".8s">
              <h2>
                <span className="count">991</span>
              </h2>
              <p>
                SATELLITE <br />
                CHANNELS
              </p>
            </div>
          </div>
        </div>
      </section>
      {/*<< Testimonial Section Start >>*/}
      <section className="testimonial-section section-padding fix">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">trusted clients feedback</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Why People Say About Our <br />
              Business Services
            </h2>
          </div>
          <TestimonialSlider />
        </div>
      </section>
      {/*<< Faq Section Start >>*/}
      <section className="faq-section fix section-padding">
        <div className="faq-image">
          <img src="assets/img/faq.png" alt="img" />
        </div>
        <div className="faq-shape">
          <img src="assets/img/faq-shape-1.png" alt="shape-img" />
        </div>
        <div className="container">
          <div className="about-wrapper">
            <div className="row">
              <div className="col-lg-6">
                <div className="faq-content">
                  <div className="section-title">
                    <span className="wow fadeInUp">
                      Our question &amp; answer
                    </span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Have Any Questions About <br />
                      Our CheetahNet Company
                    </h2>
                  </div>
                  <div className="faq-accordion mt-4 mt-md-0">
                    <NetBandAccordion />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* News Section Start */}
      <section className="news-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">news &amp; blog</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Latest News &amp; Updates
            </h2>
          </div>
          <div className="row">
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".3s"
            >
              <div className="news-box-items">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&h=600&fit=crop")' }}
                />
                <div className="news-content">
                  <h4>
                    <Link href="news-details">
                      Fiber Optic Internet: The Future of High-Speed Connectivity
                    </Link>
                  </h4>
                  <ul>
                    <li>
                      <i className="fas fa-folder-open" />
                      Technology
                    </li>
                    <li>
                      <i className="fal fa-user" />
                      CheetahNet Team
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />
                      January 15, 2025
                    </li>
                  </ul>
                  <p>
                    Discover how CheetahNet's fiber optic technology is revolutionizing internet speeds and reliability for homes and businesses across Uganda.
                  </p>
                  <Link href="news-details" className="link-btn style-2">
                    read more <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".5s"
            >
              <div className="news-box-items">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("/assets/img/news/03.jpg")' }}
                />
                <div className="news-content">
                  <h4>
                    <Link href="news-details">
                      CheetahNet Expands Fiber Network to Kampala Suburbs
                    </Link>
                  </h4>
                  <ul>
                    <li>
                      <i className="fas fa-folder-open" />
                      Tips &amp; Guides
                    </li>
                    <li>
                      <i className="fal fa-user" />
                      CheetahNet Team
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />
                      January 10, 2025
                    </li>
                  </ul>
                  <p>
                    Learn essential tips and tricks to boost your WiFi signal strength and improve your internet experience in your Ugandan home.
                  </p>
                  <Link href="news-details" className="link-btn style-2">
                    read more <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="col-xl-4 col-lg-6 col-md-6 wow fadeInUp"
              data-wow-delay=".7s"
            >
              <div className="news-box-items">
                <div
                  className="news-image bg-cover"
                  style={{ backgroundImage: 'url("https://www.mgahinganationalpark.org/wp-content/uploads/2023/12/Kampala-City-2.jpg")' }}
                />
                <div className="news-content">
                  <h4>
                    <Link href="news-details">
                      CheetahNet Expands Coverage to New Areas in Kampala
                    </Link>
                  </h4>
                  <ul>
                    <li>
                      <i className="fas fa-folder-open" />
                      Company News
                    </li>
                    <li>
                      <i className="fal fa-user" />
                      CheetahNet Team
                    </li>
                    <li>
                      <i className="far fa-calendar-alt" />
                      January 5, 2025
                    </li>
                  </ul>
                  <p>
                    We're excited to announce CheetahNet's network expansion bringing high-speed internet to more neighborhoods across Kampala and Uganda.
                  </p>
                  <Link href="news-details" className="link-btn style-2">
                    read more <i className="fas fa-chevron-right" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </NetBandLayout>
  );
};
export default page;
