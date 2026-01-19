"use client";
import Link from "next/link";
import { useState } from "react";

const Home1 = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    address: "",
    serviceType: "Home"
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <>
      {/* Hero Section */}
      <section className="hero-section hero-1" style={{ 
        background: 'linear-gradient(135deg, #02095b 0%, #0066cc 100%)',
        padding: '40px 0 80px 0',
        minHeight: '600px',
        display: 'flex',
        alignItems: 'center'
      }}>
        <div className="container">
          <div className="row align-items-center">
            {/* Left Side - Text Content */}
            <div className="col-lg-4">
              <div className="hero-content" style={{ color: '#fff' }}>
                <h6 style={{ 
                  fontSize: '16px', 
                  fontWeight: '400', 
                  marginBottom: '15px',
                  color: '#ff8c00'
                }}>
                  Welcome to
                </h6>
                <h1 style={{ 
                  fontSize: '56px', 
                  fontWeight: '700', 
                  lineHeight: '1.2',
                  marginBottom: '20px'
                }}>
                  <span style={{ color: '#fff' }}>CheetahNet</span>{" "}
                  <span style={{ color: '#ff8c00' }}>Fiber</span>
                </h1>
                <p style={{ 
                  fontSize: '18px', 
                  lineHeight: '1.6', 
                  marginBottom: '30px',
                  color: 'rgba(255, 255, 255, 0.9)'
                }}>
                  Experience lightning-fast speeds and dependable connections with CheetahNet Fiber across Uganda.
                </p>
                <p style={{ 
                  fontSize: '20px', 
                  fontWeight: '600', 
                  color: '#ff8c00', 
                  marginBottom: '30px'
                }}>
                  Pushing Limits
                </p>
                <Link 
                  href="/pricing" 
                  className="theme-btn"
                  style={{
                    display: 'inline-block',
                    backgroundColor: '#ff8c00',
                    color: '#fff',
                    padding: '15px 35px',
                    borderRadius: '5px',
                    textDecoration: 'none',
                    fontWeight: '600',
                    fontSize: '16px',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Check Availability
                </Link>
              </div>
            </div>

            {/* Center - Image */}
            <div className="col-lg-4 text-center" style={{ padding: '0 40px' }}>
              <div style={{ 
                position: 'relative',
                zIndex: 1,
                padding: '40px'
              }}>
                <img 
                  src="assets/img/hero/hero-1.svg" 
                  alt="CheetahNet Customer" 
                  style={{
                    width: '100%',
                    maxWidth: '440px',
                    height: '680px',
                    objectFit: 'cover',
                    borderRadius: '10px',
                    margin: '0 auto',
                    display: 'block'
                  }}
                />
              </div>
            </div>

            {/* Right Side - Form */}
            <div className="col-lg-4">
              <div style={{
                backgroundColor: '#fff',
                padding: '20px',
                borderRadius: '10px',
                boxShadow: '0 10px 40px rgba(0,0,0,0.2)'
              }}>
                {/* Service Type Tabs */}
                <div style={{
                  display: 'flex',
                  gap: '4px',
                  marginBottom: '15px',
                  backgroundColor: '#f5f5f5',
                  padding: '4px',
                  borderRadius: '5px'
                }}>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, serviceType: 'Home' }))}
                    style={{
                      flex: 1,
                      padding: '8px',
                      border: 'none',
                      borderRadius: '4px',
                      backgroundColor: formData.serviceType === 'Home' ? '#ff8c00' : 'transparent',
                      color: formData.serviceType === 'Home' ? '#fff' : '#333',
                      fontWeight: '600',
                      fontSize: '13px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Home
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, serviceType: 'Public' }))}
                    style={{
                      flex: 1,
                      padding: '8px',
                      border: 'none',
                      borderRadius: '4px',
                      backgroundColor: formData.serviceType === 'Public' ? '#ff8c00' : 'transparent',
                      color: formData.serviceType === 'Public' ? '#fff' : '#333',
                      fontWeight: '600',
                      fontSize: '13px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Public
                  </button>
                  <button
                    type="button"
                    onClick={() => setFormData(prev => ({ ...prev, serviceType: 'Enterprise' }))}
                    style={{
                      flex: 1,
                      padding: '8px',
                      border: 'none',
                      borderRadius: '4px',
                      backgroundColor: formData.serviceType === 'Enterprise' ? '#ff8c00' : 'transparent',
                      color: formData.serviceType === 'Enterprise' ? '#fff' : '#333',
                      fontWeight: '600',
                      fontSize: '13px',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                  >
                    Enterprise
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit}>
                  <div style={{ marginBottom: '12px' }}>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name*"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        fontSize: '13px',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '12px' }}>
                    <input
                      type="text"
                      name="lastName"
                      placeholder="Last Name*"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        fontSize: '13px',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '12px' }}>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Phone*"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        fontSize: '13px',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '12px' }}>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email Address*"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        fontSize: '13px',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <div style={{ marginBottom: '15px' }}>
                    <input
                      type="text"
                      name="address"
                      placeholder="Full Address*"
                      value={formData.address}
                      onChange={handleInputChange}
                      required
                      style={{
                        width: '100%',
                        padding: '10px 12px',
                        border: '1px solid #ddd',
                        borderRadius: '5px',
                        fontSize: '13px',
                        outline: 'none'
                      }}
                    />
                  </div>
                  <button
                    type="submit"
                    style={{
                      width: '100%',
                      padding: '12px',
                      backgroundColor: '#02095b',
                      color: '#fff',
                      border: 'none',
                      borderRadius: '5px',
                      fontSize: '14px',
                      fontWeight: '600',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.backgroundColor = '#0066cc'}
                    onMouseLeave={(e) => e.target.style.backgroundColor = '#02095b'}
                  >
                    Check Availability
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home1;
