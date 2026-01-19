import Breadcrumb from "@/components/Breadcrumb";
import NetBandAccordion from "@/components/NetBandAccordion";
import BrandSlider from "@/components/slider/BrandSlider";
import NetBandLayout from "@/layouts/NetBandLayout";
import Link from "next/link";

const page = () => {
  const helpCategories = [
    {
      id: 1,
      title: "Getting Started",
      icon: "flaticon-connection",
      description: "New to CheetahNet? Start here to learn the basics",
      items: [
        {
          id: 1,
          title: "How do I sign up for internet service?",
          content:
            "You can sign up for our internet service by visiting our website, calling our customer service at +236 (456) 896 22, or visiting one of our service centers. Our team will help you choose the right package for your needs and schedule installation.",
        },
        {
          id: 2,
          title: "What documents do I need for installation?",
          content:
            "You'll need a valid ID (National ID, Passport, or Driver's License), proof of address (utility bill or rental agreement), and payment for the installation fee of UGX 50,000. Our technician will verify these during the installation appointment.",
        },
        {
          id: 3,
          title: "How long does installation take?",
          content:
            "Installation typically takes 2-4 hours depending on your location and the complexity of the setup. Our technician will arrive at your scheduled time and complete the installation, including router setup and testing.",
        },
        {
          id: 4,
          title: "What equipment do I need?",
          content:
            "We provide a WiFi router with all our packages. You'll just need devices (computers, smartphones, tablets) that support WiFi connectivity. For wired connections, you may need an Ethernet cable, which we can provide.",
        },
      ],
    },
    {
      id: 2,
      title: "Account Management",
      icon: "flaticon-smart-tv-3",
      description: "Manage your account, update information, and view usage",
      items: [
        {
          id: 1,
          title: "How do I access my account online?",
          content:
            "Visit our website and click on 'My Account' or 'Customer Portal'. You'll need your account number and password. If you haven't set up online access, contact our customer service to register your account.",
        },
        {
          id: 2,
          title: "How do I change my password?",
          content:
            "Log into your account, go to 'Account Settings', and select 'Change Password'. Enter your current password and your new password. Make sure your new password is strong and secure.",
        },
        {
          id: 3,
          title: "How do I update my contact information?",
          content:
            "You can update your contact information through your online account portal or by calling customer service. It's important to keep your information current to receive important service updates and billing notifications.",
        },
        {
          id: 4,
          title: "How do I view my data usage?",
          content:
            "Log into your account portal and navigate to 'Usage' or 'Data Usage'. You'll see your current month's usage, historical data, and any data limits. All our packages include unlimited data, so you don't need to worry about overage charges.",
        },
      ],
    },
    {
      id: 3,
      title: "Billing & Payments",
      icon: "flaticon-wifi-router-5",
      description: "Questions about billing, payments, and subscription plans",
      items: [
        {
          id: 1,
          title: "How do I pay my bill?",
          content:
            "You can pay your bill online through your account portal using mobile money (MTN, Airtel), bank transfer, or credit/debit card. You can also pay at our service centers or authorized payment agents. Payment is due monthly on your billing date.",
        },
        {
          id: 2,
          title: "What payment methods do you accept?",
          content:
            "We accept mobile money (MTN Mobile Money, Airtel Money), bank transfers, credit/debit cards (Visa, Mastercard), and cash payments at our service centers. All payments are processed securely.",
        },
        {
          id: 3,
          title: "What is the installation fee?",
          content:
            "The installation fee is UGX 50,000 for all packages. This is a one-time fee that covers equipment setup, router installation, and initial configuration. The fee is payable before or during installation.",
        },
        {
          id: 4,
          title: "Can I change my package plan?",
          content:
            "Yes, you can upgrade or downgrade your package at any time. Changes take effect on your next billing cycle. Contact customer service to discuss package changes and any prorated billing adjustments.",
        },
      ],
    },
    {
      id: 4,
      title: "Technical Support",
      icon: "flaticon-server",
      description: "Troubleshooting, speed issues, and technical assistance",
      items: [
        {
          id: 1,
          title: "My internet is slow. What should I do?",
          content:
            "First, try restarting your router by unplugging it for 30 seconds and plugging it back in. Check if multiple devices are using the internet simultaneously. If the issue persists, contact our technical support team at +236 (456) 896 22 for assistance.",
        },
        {
          id: 2,
          title: "I can't connect to WiFi. How do I fix this?",
          content:
            "Check that your router is powered on and the WiFi indicator is lit. Try restarting your device's WiFi connection. Verify you're using the correct WiFi password (found on the router label). If problems continue, reset the router or contact technical support.",
        },
        {
          id: 3,
          title: "How do I reset my router?",
          content:
            "Locate the reset button on your router (usually a small hole). Use a paperclip to press and hold the button for 10-15 seconds. The router will restart and return to factory settings. You'll need to reconfigure your WiFi settings after resetting.",
        },
        {
          id: 4,
          title: "What internet speeds should I expect?",
          content:
            "Speeds vary by package: 10 Mbps for basic browsing, 20-30 Mbps for streaming and multiple devices, 50-100 Mbps for heavy usage and gaming, and 200 Mbps for business or large households. Actual speeds may vary based on network conditions and device capabilities.",
        },
      ],
    },
  ];

  const quickLinks = [
    {
      id: 1,
      title: "Contact Support",
      description: "Get in touch with our support team",
      icon: "fas fa-headset",
      link: "/contact",
    },
    {
      id: 2,
      title: "View Packages",
      description: "Explore our internet packages",
      icon: "fas fa-box",
      link: "/pricing",
    },
    {
      id: 3,
      title: "Service Status",
      description: "Check for outages or maintenance",
      icon: "fas fa-signal",
      link: "/contact",
    },
    {
      id: 4,
      title: "Account Portal",
      description: "Access your account online",
      icon: "fas fa-user-circle",
      link: "/contact",
    },
  ];

  return (
    <NetBandLayout header={1}>
      <Breadcrumb pageTitle={"Help Center"} />
      
      {/*<< Help Hero Section Start >>*/}
      <section className="help-hero-section fix section-padding">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8 text-center">
              <div className="section-title">
                <span className="wow fadeInUp">Help Center</span>
                <h2 className="wow fadeInUp" data-wow-delay=".3s">
                  How Can We Help You?
                </h2>
                <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                  Find answers to common questions or contact our support team
                  for assistance
                </p>
              </div>
              <div className="help-search-box wow fadeInUp" data-wow-delay=".7s">
                <form>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search for help articles..."
                    />
                    <button className="theme-btn" type="submit">
                      <span>
                        Search <i className="fas fa-search" />
                      </span>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/*<< Quick Links Section Start >>*/}
      <section className="quick-links-section fix section-padding pt-0">
        <div className="container">
          <div className="row g-4">
            {quickLinks.map((link) => (
              <div
                key={link.id}
                className="col-xl-3 col-lg-4 col-md-6 wow fadeInUp"
                data-wow-delay={`.${link.id * 2}s`}
              >
                <Link href={link.link} className="quick-link-card">
                  <div className="icon">
                    <i className={link.icon} />
                  </div>
                  <h4>{link.title}</h4>
                  <p>{link.description}</p>
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*<< Help Categories Section Start >>*/}
      <section className="help-categories-section fix section-padding">
        <div className="container">
          <div className="section-title text-center">
            <span className="wow fadeInUp">Help Topics</span>
            <h2 className="wow fadeInUp" data-wow-delay=".3s">
              Browse by Category
            </h2>
          </div>
          <div className="row g-4 mt-4">
            {helpCategories.map((category) => (
              <div
                key={category.id}
                className="col-lg-6 wow fadeInUp"
                data-wow-delay={`.${category.id * 2 + 1}s`}
              >
                <div className="help-category-card">
                  <div className="category-header">
                    <div className="icon">
                      <i className={category.icon} />
                    </div>
                    <div className="content">
                      <h3>{category.title}</h3>
                      <p>{category.description}</p>
                    </div>
                  </div>
                  <div className="category-items">
                    <NetBandAccordion
                      items={category.items.map((item) => ({
                        id: item.id,
                        title: item.title,
                        content: item.content,
                        animationDelay: `.${item.id * 2}s`,
                      }))}
                      eventKey={`category-${category.id}-`}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*<< Contact Support Section Start >>*/}
      <section className="contact-support-section fix section-padding">
        <div className="container">
          <div className="support-wrapper text-center">
            <div className="section-title">
              <span className="wow fadeInUp">Still Need Help?</span>
              <h2 className="wow fadeInUp" data-wow-delay=".3s">
                Contact Our Support Team
              </h2>
              <p className="mt-3 wow fadeInUp" data-wow-delay=".5s">
                Our customer support team is available 24/7 to assist you with
                any questions or issues
              </p>
            </div>
            <div className="support-contact-info wow fadeInUp" data-wow-delay=".7s">
              <div className="row justify-content-center g-4">
                <div className="col-md-4">
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fas fa-phone" />
                    </div>
                    <h5>Phone Support</h5>
                    <p>
                      <a href="tel:+256771099075">+256 771 099075</a>
                    </p>
                    <span>Available 24/7</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fas fa-envelope" />
                    </div>
                    <h5>Email Support</h5>
                    <p>
                      <a href="mailto:support@cheetahnet.com">
                        support@cheetahnet.com
                      </a>
                    </p>
                    <span>Response within 24 hours</span>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="contact-info-item">
                    <div className="icon">
                      <i className="fas fa-comments" />
                    </div>
                    <h5>Live Chat</h5>
                    <p>Available on website</p>
                    <span>Mon-Fri: 8AM - 8PM</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="support-button mt-5 wow fadeInUp" data-wow-delay=".9s">
              <Link href="/contact" className="theme-btn">
                <span>
                  Contact Us <i className="fas fa-chevron-right" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*<< Brand Section Start >>*/}
      <div className="brand-section-3 fix section-padding pt-0">
        <div className="container">
          <div className="brand-wrapper">
            <BrandSlider />
          </div>
        </div>
      </div>
    </NetBandLayout>
  );
};

export default page;

