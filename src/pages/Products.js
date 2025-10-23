import React from 'react';
import { Link } from 'react-router-dom';
import { FaMountain, FaDroplet, FaCheckCircle, FaArrowRight, FaCertificate, FaUtensils } from 'react-icons/fa';
import '../styles/Products.css';

const products = [
  {
    id: 1,
    name: 'Natural Rock Salt',
    description: 'Premium natural rock salt for de-icing, snow removal, industrial and agricultural use. Sourced from pristine deposits and authorized for use across the entire US market. Our rock salt meets all federal and state specifications for road maintenance, agricultural applications, and industrial processes.',
    applications: ['De-icing & Snow Removal', 'Road Maintenance', 'Industrial Use', 'Agricultural Applications'],
    icon: FaMountain,
    color: 'primary',
    purity: '98%+ Natural',
    packaging: 'Bulk, 50lb bags, Custom quantities',
    specs: 'US Market Authorized - EPA & DOT Compliant',
    image: `${process.env.PUBLIC_URL}/images/products/salt03.jpg`
  },
  {
    id: 2,
    name: 'Industrial Salt Tablets',
    description: 'High-purity pressed salt tablets ideal for water softening, treatment systems, and industrial applications. Engineered for optimal performance in water treatment systems nationwide. Authorized and certified for all US market applications with guaranteed purity and consistency.',
    applications: ['Water Softening', 'Treatment Systems', 'Industrial Applications', 'Residential & Commercial'],
    icon: FaCertificate,
    color: 'cyan',
    purity: '99.5%+',
    packaging: '40lb bags, Bulk quantities',
    specs: 'US Market Authorized - NSF Certified',
    image: `${process.env.PUBLIC_URL}/images/products/production.jpg`
  },
  {
    id: 3,
    name: 'Table Salt',
    description: 'Premium food-grade table salt refined for culinary and food processing applications. Meets all FDA requirements and is authorized for use throughout the US market. Our table salt is iodized and anti-caking treated for optimal performance in food preparation and commercial food production.',
    applications: ['Food Preparation', 'Food Processing', 'Retail Distribution', 'Commercial Kitchens'],
    icon: FaUtensils,
    color: 'emerald',
    purity: '99.9%+',
    packaging: '25lb bags, 50lb bags, Bulk quantities',
    specs: 'US Market Authorized - FDA Approved',
    image: `${process.env.PUBLIC_URL}/images/products/salt_hand.jpg`
  }
];

const Products = () => {
  const productsHeroStyle = {
    backgroundImage: `linear-gradient(135deg, rgba(37, 99, 235, 0.9) 0%, rgba(30, 64, 175, 0.95) 100%), url('/images/products/salt02.jpg')`
  };

  return (
    <div className="products-page">
      {/* Hero Header */}
      <section className="products-hero" style={productsHeroStyle}>
        <div className="container">
          <div className="hero-content">
            <h1>US Market Authorized Salt Products</h1>
            <p>Premium salt solutions certified for nationwide use in de-icing, water treatment, and industrial applications</p>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="products-section">
        <div className="container">
          <div className="products-grid">
            {products.map((product, index) => {
              const IconComponent = product.icon;
              return (
                <div key={product.id} className={`product-card product-${product.color}`} style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="product-image-wrapper">
                    <img src={product.image} alt={product.name} className="product-image" />
                    <div className="product-icon-overlay">
                      <IconComponent className="product-icon" />
                    </div>
                  </div>
                  <div className="product-header">
                    <h3>{product.name}</h3>
                    <div className="product-badges">
                      <span className="badge">{product.purity} Purity</span>
                    </div>
                  </div>
                  <p className="product-description">{product.description}</p>
                  
                  <div className="product-specs">
                    <div className="spec-item">
                      <strong>Packaging:</strong> {product.packaging}
                    </div>
                    {product.specs && (
                      <div className="spec-item">
                        <strong>Certification:</strong> {product.specs}
                      </div>
                    )}
                  </div>
                  
                  <div className="applications">
                    <h4>Applications:</h4>
                    <ul className="applications-list">
                      {product.applications.map((app, index) => (
                        <li key={index}>
                          <FaCheckCircle className="check-icon" />
                          {app}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <Link to="/contact" className="btn btn-primary btn-full">
                    Request Quote <FaArrowRight />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Custom Solutions Section */}
      <section className="custom-solutions">
        <div className="container">
          <div className="solutions-content">
            <h2>Custom Salt Solutions</h2>
            <p>Need a specific type of salt or custom formulation? Our experts can help you find the perfect solution for your unique business requirements.</p>
            <div className="solutions-features">
              <div className="solution-item">
                <FaCheckCircle className="solution-icon" />
                <span>Custom Formulations</span>
              </div>
              <div className="solution-item">
                <FaCheckCircle className="solution-icon" />
                <span>Flexible Packaging</span>
              </div>
              <div className="solution-item">
                <FaCheckCircle className="solution-icon" />
                <span>Volume Discounts</span>
              </div>
              <div className="solution-item">
                <FaCheckCircle className="solution-icon" />
                <span>Expert Consultation</span>
              </div>
            </div>
            <Link to="/contact" className="btn btn-secondary btn-large">
              Contact Our Specialists <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Products;
