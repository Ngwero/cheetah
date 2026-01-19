"use client";
import { useState } from "react";
import { Accordion } from "react-bootstrap";

const NetBandAccordion = ({
  items = [
    {
      id: 1,
      title: "What internet speeds are available in Uganda?",
      content:
        "CheetahNet offers a range of high-speed internet packages from 10 Mbps to 100 Mbps and beyond, suitable for homes and businesses across Kampala and Uganda. Our fiber optic network provides consistent speeds regardless of peak usage times, ensuring reliable connectivity for streaming, video calls, and business operations.",
      animationDelay: ".3s",
    },
    {
      id: 2,
      title: "Is CheetahNet available in my area of Kampala?",
      content:
        "We're continuously expanding our network coverage throughout Kampala and surrounding areas. To check if CheetahNet services are available in your specific location, please contact our customer service team at +256 771 099075 or visit our office at Plot 15, Nakasero Road. We'll verify coverage and schedule installation if available.",
      animationDelay: ".5s",
    },
    {
      id: 3,
      title: "What equipment do I need for CheetahNet installation?",
      content:
        "CheetahNet provides all necessary equipment including the fiber modem, router, and installation cables. Our professional technicians will install everything at your location in Kampala. You only need a power outlet and space for the equipment. We ensure proper setup and testing before completing the installation.",
      animationDelay: ".7s",
    },
    {
      id: 4,
      title: "How reliable is internet service in Uganda with CheetahNet?",
      content:
        "CheetahNet maintains 99.9% uptime through our robust fiber optic infrastructure and backup systems. We monitor our network 24/7 and have local technical teams ready to respond quickly to any issues. Our reliable service ensures your home or business in Uganda stays connected for work, education, and entertainment.",
      animationDelay: ".9s",
    },
  ],
  eventKey = "home1",
  activeKey,
}) => {
  const defaultActiveKey = activeKey ? activeKey : eventKey + items[0].id;
  const [active, setActive] = useState(defaultActiveKey);
  return (
    <Accordion defaultActiveKey={defaultActiveKey}>
      {items.map((item) => (
        <div
          className="accordion-item wow fadeInUp"
          data-wow-delay={item.animationDelay}
          key={item.id}
        >
          <h4 className="accordion-header">
            <Accordion.Toggle
              as={"button"}
              eventKey={eventKey + item.id}
              className={`accordion-button ${
                active == eventKey + item.id ? "" : "collapsed"
              }`}
              onClick={() => setActive(eventKey + item.id)}
            >
              {item.title}
            </Accordion.Toggle>
          </h4>
          <Accordion.Collapse
            className="accordion-collapse"
            eventKey={eventKey + item.id}
          >
            <div className="accordion-body">{item.content}</div>
          </Accordion.Collapse>
        </div>
      ))}
    </Accordion>
  );
};
export default NetBandAccordion;
