import Breadcrumb from "@/components/Breadcrumb";
import NetBandLayout from "@/layouts/NetBandLayout";
const page = () => {
  return (
    <NetBandLayout header={1}>
      <Breadcrumb pageTitle={"Contact Us"} />
      {/*<< Contact Section Start >>*/}
      <section className="contact-main-area fix section-padding">
        <div className="container">
          <div className="contact-main-wrapper">
            <div className="row g-4">
              <div className="col-lg-6">
                <div className="contact-content">
                  <div className="section-title mb-2">
                    <span className="wow fadeInUp">Get In Touch</span>
                    <h2 className="wow fadeInUp" data-wow-delay=".3s">
                      Contact Us
                    </h2>
                  </div>
                  <p className="mt-4 mt-md-0 wow fadeInUp" data-wow-delay=".4s">
                    Get in touch with CheetahNet for reliable internet services 
                    in Kampala and throughout Uganda. Our team is ready to help 
                    you with any questions about our broadband packages, installation, 
                    or technical support.
                  </p>
                  <div className="row g-4 mt-3">
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".3s">
                      <div className="info-items">
                        <div className="icon">
                          <i className="fas fa-map-marker-alt" />
                        </div>
                        <div className="content">
                          <h5>Location</h5>
                          <p>
                            Plot 15, Nakasero Road, <br />
                            Kampala, Uganda
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".5s">
                      <div className="info-items">
                        <div className="icon">
                          <i className="far fa-phone" />
                        </div>
                        <div className="content">
                          <h5>Phone</h5>
                          <a href="tel:+256771099075">+256 771 099075</a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".7s">
                      <div className="info-items">
                        <div className="icon">
                          <i className="fal fa-envelope" />
                        </div>
                        <div className="content">
                          <h5>Email</h5>
                          <a href="mailto:info@cheetahnet.ug" className="link">
                            info@cheetahnet.ug
                          </a>{" "}
                          <br />
                          <a href="mailto:support@cheetahnet.ug" className="link">
                            support@cheetahnet.ug
                          </a>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 wow fadeInUp" data-wow-delay=".9s">
                      <div className="info-items">
                        <div className="icon">
                          <i className="fad fa-share-alt" />
                        </div>
                        <div className="content">
                          <h5>Social</h5>
                          <p style={{ fontSize: '13px', color: '#666', marginBottom: '10px' }}>
                            Connect with us on social media
                          </p>
                          <div className="social-icon d-flex align-items-center">
                            <a href="https://www.facebook.com/share/1BAur7WwFw/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" title="Facebook">
                              <i className="fab fa-facebook-f" />
                            </a>
                            <a href="https://x.com/CheetahNetUg" target="_blank" rel="noopener noreferrer" title="Follow @CheetahNetUg on X">
                              <i className="fab fa-twitter" />
                            </a>
                            <a href="#">
                              <i className="fab fa-vimeo-v" />
                            </a>
                            <a href="#">
                              <i className="fab fa-pinterest-p" />
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    className="contact-image wow fadeInUp"
                    data-wow-delay=".4s"
                  >
                    <img src="assets/img/contact.jpg" alt="img" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 mt-5 mt-lg-0">
                <div className="contact-form-items">
                  <div className="contact-title">
                    <h3 className="wow fadeInUp" data-wow-delay=".3s">
                      Fill Up The Form
                    </h3>
                    <p className="wow fadeInUp" data-wow-delay=".5s">
                      Your email address will not be published. Required fields
                      are marked *
                    </p>
                  </div>
                  <form action="contact.php" id="contact-form" method="POST">
                    <div className="row g-4">
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".3s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Your Name*"
                          />
                          <div className="icon">
                            <i className="fal fa-user" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".5s"
                      >
                        <div className="form-clt">
                          <input
                            type="text"
                            name="email"
                            id="email"
                            placeholder="Email Address*"
                          />
                          <div className="icon">
                            <i className="fal fa-envelope" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-12 wow fadeInUp"
                        data-wow-delay=".7s"
                      >
                        <div className="form-clt">
                          <textarea
                            name="message"
                            id="message"
                            placeholder="Enter Your Messege here"
                            defaultValue={""}
                          />
                          <div className="icon">
                            <i className="fal fa-edit" />
                          </div>
                        </div>
                      </div>
                      <div
                        className="col-lg-6 wow fadeInUp"
                        data-wow-delay=".8s"
                      >
                        <button type="submit" className="theme-btn">
                          <span>
                            <i className="fal fa-paper-plane" />
                            Get In Touch
                          </span>
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/*<< Map Section Start >>*/}
      <div className="map-section">
        <div className="google-map wow fadeInUp" data-wow-delay=".7s">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3989.7514!2d32.5825!3d0.3476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x177dbd5b5b5b5b5b%3A0x5b5b5b5b5b5b5b5b!2sKampala%2C%20Uganda!5e0!3m2!1sen!2sug!4v1641984054261!5m2!1sen!2sug"
            width="100%"
            height="500"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </NetBandLayout>
  );
};
export default page;
