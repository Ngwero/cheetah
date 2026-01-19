 "use client";

import { Nav, Tab } from "react-bootstrap";

const Package1 = () => {
  return (
    <section
      className="choose-package-section bg-cover section-padding"
      style={{ backgroundImage: 'url("assets/img/choose-bg.jpg")' }}
    >
      <div className="container">
        <div className="choose-package-wrapper">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="choose-package-content">
                <div className="section-title">
                  <span className="wow fadeInUp">CHOOSE PACKAGE</span>
                  <h2 className="wow fadeInUp" data-wow-delay=".3s">
                    Choose Ultra-Fast Internet Package For Usage
                  </h2>
                </div>
                <Tab.Container defaultActiveKey={"tab-1"}>
                  <Nav as={"ul"} className="nav" role="tablist">
                    <Nav.Item
                      as={"li"}
                      className="nav-item wow fadeInUp"
                      data-wow-delay=".3s"
                    >
                      <Nav.Link as={"a"} eventKey="tab-1" href="#tab-1">
                        10 Mbps
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item
                      as={"li"}
                      className="nav-item wow fadeInUp"
                      data-wow-delay=".4s"
                    >
                      <Nav.Link as={"a"} eventKey="tab-2" href="#tab-2">
                        20 Mbps
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item
                      as={"li"}
                      className="nav-item wow fadeInUp"
                      data-wow-delay=".5s"
                    >
                      <Nav.Link as={"a"} eventKey="tab-3" href="#tab-3">
                        30 Mbps
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item
                      as={"li"}
                      className="nav-item wow fadeInUp"
                      data-wow-delay=".6s"
                    >
                      <Nav.Link as={"a"} eventKey="tab-4" href="#tab-4">
                        50 Mbps
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item
                      as={"li"}
                      className="nav-item wow fadeInUp"
                      data-wow-delay=".7s"
                    >
                      <Nav.Link as={"a"} eventKey="tab-5" href="#tab-5">
                        100 Mbps
                      </Nav.Link>
                    </Nav.Item>
                    <Nav.Item
                      as={"li"}
                      className="nav-item wow fadeInUp"
                      data-wow-delay=".8s"
                    >
                      <Nav.Link as={"a"} eventKey="tab-6" href="#tab-6">
                        200 Mbps
                      </Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content className="tab-content">
                    <Tab.Pane eventKey="tab-1" className="tab-pane fade">
                      <div className="choose-tab-price-items">
                        <div className="choose-tab-price-area">
                          <div
                            className="price-monthly wow fadeInUp"
                            data-wow-delay=".3s"
                          >
                            <h5>
                              UGX 90,000<span>/ 1 month</span>
                            </h5>
                          </div>
                          <div
                            className="price-installation wow fadeInUp"
                            data-wow-delay=".5s"
                          >
                            <h5>
                              UGX 50,000<span>/ Installation Fee</span>
                            </h5>
                          </div>
                        </div>
                        <ul className="list wow fadeInUp" data-wow-delay=".7s">
                          <li>
                            <i className="far fa-check" />
                            Up to 10 Mbps download speed
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
                            24/7 customer support
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tab-2" className="tab-pane fade">
                      <div className="choose-tab-price-items">
                        <div className="choose-tab-price-area">
                          <div className="price-monthly">
                            <h5>
                              UGX 150,000<span>/ 1 month</span>
                            </h5>
                          </div>
                          <div className="price-installation">
                            <h5>
                              UGX 50,000<span>/ Installation Fee</span>
                            </h5>
                          </div>
                        </div>
                        <ul className="list">
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
                          <li>
                            <i className="far fa-check" />
                            24/7 customer support
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tab-3" className="tab-pane fade">
                      <div className="choose-tab-price-items">
                        <div className="choose-tab-price-area">
                          <div className="price-monthly">
                            <h5>
                              UGX 200,000<span>/ 1 month</span>
                            </h5>
                          </div>
                          <div className="price-installation">
                            <h5>
                              UGX 50,000<span>/ Installation Fee</span>
                            </h5>
                          </div>
                        </div>
                        <ul className="list">
                          <li>
                            <i className="far fa-check" />
                            Up to 30 Mbps download speed
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
                          <li>
                            <i className="far fa-check" />
                            Priority customer support
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tab-4" className="tab-pane fade">
                      <div className="choose-tab-price-items">
                        <div className="choose-tab-price-area">
                          <div className="price-monthly">
                            <h5>
                              UGX 300,000<span>/ 1 month</span>
                            </h5>
                          </div>
                          <div className="price-installation">
                            <h5>
                              UGX 50,000<span>/ Installation Fee</span>
                            </h5>
                          </div>
                        </div>
                        <ul className="list">
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
                          <li>
                            <i className="far fa-check" />
                            Night turbo-speed boost
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Priority customer support
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tab-5" className="tab-pane fade">
                      <div className="choose-tab-price-items">
                        <div className="choose-tab-price-area">
                          <div className="price-monthly">
                            <h5>
                              UGX 450,000<span>/ 1 month</span>
                            </h5>
                          </div>
                          <div className="price-installation">
                            <h5>
                              UGX 50,000<span>/ Installation Fee</span>
                            </h5>
                          </div>
                        </div>
                        <ul className="list">
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
                            Multiple device connectivity
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Night turbo-speed boost
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Standard installation fee
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Priority customer support
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tab-6" className="tab-pane fade">
                      <div className="choose-tab-price-items">
                        <div className="choose-tab-price-area">
                          <div className="price-monthly">
                            <h5>
                              UGX 650,000<span>/ 1 month</span>
                            </h5>
                          </div>
                          <div className="price-installation">
                            <h5>
                              UGX 50,000<span>/ Installation Fee</span>
                            </h5>
                          </div>
                        </div>
                        <ul className="list">
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
                            Multiple device connectivity
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Night turbo-speed boost
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Standard installation fee
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Dedicated support line
                          </li>
                          <li>
                            <i className="far fa-check" />
                            Business-grade reliability
                          </li>
                        </ul>
                      </div>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Package1;
