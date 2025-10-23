import React from 'react';
import { Link } from 'react-router-dom';
import { FaGlobeAmericas, FaShieldAlt, FaTruck, FaCheckCircle, FaArrowRight, FaAward, FaHandshake } from 'react-icons/fa';
import '../styles/Home.css';

const Home = () => {
  const heroStyle = {
    backgroundImage: `linear-gradient(135deg, rgba(30, 58, 138, 0.95) 0%, rgba(37, 99, 235, 0.9) 50%, rgba(6, 182, 212, 0.85) 100%), url('/images/products/bo7era.jpg')`
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero" style={heroStyle}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-badge">your business partner</div>
          <h1 className="hero-title">
            Global Salt Solutions for
            <span className="gradient-text"> Your Business</span>
          </h1>
          <p className="hero-subtitle">
            Connecting quality salt producers with businesses worldwide through reliable, 
            efficient, and sustainable supply chain solutions.
          </p>
          <div className="cta-buttons">
            <Link to="/products" className="btn btn-primary">
              Explore Products <FaArrowRight />
            </Link>
            <Link to="/contact" className="btn btn-secondary">Get a Quote</Link>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <div className="stat-number">5+</div>
              <div className="stat-label">Years Experience</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">500+</div>
              <div className="stat-label"> Forecasting Clients</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">99%</div>
              <div className="stat-label">forecasting Satisfaction Rate</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <div className="section-header">
            <h2>Why Choose MRMNSALT ?</h2>
            <p className="section-subtitle">Industry-leading salt brokerage services backed by expertise and reliability</p>
          </div>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <FaGlobeAmericas className="feature-icon" />
              </div>
              <h3>Global Network</h3>
              <p>Extensive connections with salt producers and buyers across six continents, ensuring reliable supply chains</p>
              <ul className="feature-list">
                <li><FaCheckCircle /> International partnerships</li>
                <li><FaCheckCircle /> Multi-region sourcing</li>
                <li><FaCheckCircle /> 24/7 availability</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <FaShieldAlt className="feature-icon" />
              </div>
              <h3>Quality Assurance</h3>
              <p>Rigorous quality control and certification processes for all our salt products and suppliers</p>
              <ul className="feature-list">
                <li><FaCheckCircle /> ISO certified suppliers</li>
                <li><FaCheckCircle /> Lab-tested products</li>
                <li><FaCheckCircle /> Full traceability</li>
              </ul>
            </div>
            <div className="feature-card">
              <div className="feature-icon-wrapper">
                <FaTruck className="feature-icon" />
              </div>
              <h3>Reliable Logistics</h3>
              <p>Efficient shipping and handling solutions with real-time tracking and guaranteed delivery times</p>
              <ul className="feature-list">
                <li><FaCheckCircle /> On-time delivery</li>
                <li><FaCheckCircle /> Flexible shipping</li>
                <li><FaCheckCircle /> Real-time tracking</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services">
        <div className="container">
          <div className="services-content">
            <div className="services-text">
              <h2>Comprehensive Salt Brokerage Services</h2>
              <p>
                At MRMNSALT, we specialize in connecting businesses with the right salt products 
                for their specific needs. Our expertise spans across multiple industries and applications.
              </p>
              <div className="services-list">
                <div className="service-item">
                  <FaAward className="service-icon" />
                  <div>
                    <h4>Premium Sourcing</h4>
                    <p>Access to the finest salt producers globally</p>
                  </div>
                </div>
                <div className="service-item">
                  <FaHandshake className="service-icon" />
                  <div>
                    <h4>Tailored Solutions</h4>
                    <p>Custom formulations and packaging options</p>
                  </div>
                </div>
                <div className="service-item">
                  <FaCheckCircle className="service-icon" />
                  <div>
                    <h4>Quality Guarantee</h4>
                    <p>100% satisfaction with every shipment</p>
                  </div>
                </div>
              </div>
              <Link to="/about" className="btn btn-outline">Learn More About Us</Link>
            </div>
            <div className="services-image">
              <div className="salt-showcase">
                <img src={`${process.env.PUBLIC_URL}/images/products/bo7era.jpg`} alt="Premium Salt Products" className="showcase-main" />
                <img src={`${process.env.PUBLIC_URL}/images/products/bo7era2.jpg`} alt="Salt Production" className="showcase-secondary" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Partner With Us?</h2>
            <p>Let's discuss how we can meet your salt requirements with our premium brokerage services</p>
            <div className="cta-buttons">
              <Link to="/contact" className="btn btn-primary">
                Get Started <FaArrowRight />
              </Link>
              <Link to="/products" className="btn btn-secondary">View Products</Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
