import React from 'react';
import { Link } from 'react-router-dom';
import { FaIndustry, FaUtensils, FaWater, FaMountain, FaCheckCircle, FaArrowRight } from 'react-icons/fa';
import '../styles/Products.css';

const products = [
  {
    id: 1,
    name: 'Industrial Salt',
    description: 'High-purity salt for industrial applications including water treatment, chemical processing, and manufacturing operations.',
    applications: ['Water Treatment', 'Chemical Processing', 'De-icing', 'Manufacturing'],
    icon: FaIndustry,
    color: 'primary',
    purity: '99.5%+',
    packaging: 'Bulk, 50lb bags',
    image: `/images/products/production.jpg`
  },
  {
    id: 2,
    name: 'Food Grade Salt',
    description: 'Premium quality, certified food-grade salt meeting all FDA requirements for food processing and culinary applications.',
    applications: ['Food Processing', 'Restaurants', 'Retail', 'Bakeries'],
    icon: FaUtensils,
    color: 'emerald',
    purity: '99.9%+',
    packaging: '25lb, 50lb bags',
    image: `/images/products/salt_hand.jpg`
  },
  {
    id: 3,
    name: 'Sea Salt',
    description: 'Naturally harvested sea salt with rich mineral content, perfect for gourmet cooking and health-conscious applications.',
    applications: ['Gourmet Cooking', 'Food Industry', 'Health & Wellness', 'Spa Products'],
    icon: FaWater,
    color: 'cyan',
    purity: '98%+ Natural',
    packaging: 'Custom sizes',
    image: `/images/products/salt02.jpg`
  },
  {
    id: 4,
    name: 'Rock Salt',
    description: 'Natural rock salt mined from ancient deposits, ideal for water softening, animal nutrition, and winter road maintenance.',
    applications: ['Water Softening', 'Animal Feed', 'De-icing', 'Industrial Use'],
    icon: FaMountain,
    color: 'teal',
    purity: '98%+',
    packaging: 'Bulk, 80lb bags',
    image: `/images/products/salt03.jpg`
  }
];

const Products = () => {
  return (
    <div className="products-page">
      {/* Hero Header */}
      <section className="products-hero">
        <div className="container">
          <div className="hero-content">
            <h1>Premium Salt Products</h1>
            <p>High-quality salt solutions for every industry and application</p>
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
