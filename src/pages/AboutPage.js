import React from 'react';
import './AboutPage.css';

const AboutPage = () => {
  return (
    <div className="about-page">
      <div className="page-header">
        <div className="container">
          <h1>Our Story</h1>
          <p>Discover the journey that made Auz Land Real Estate your trusted partner</p>
        </div>
      </div>

      <div className="section">
        <div className="container">
          <div className="about-content">
            <div className="about-text">
              <h2>Since 2020</h2>
              <p>
                Auz Land Real Estate was founded with a simple mission: to make property 
                transactions seamless, transparent, and beneficial for all parties involved. 
                What started as a small family business in Sydney has grown into one of 
                Australia's most trusted real estate agencies.
              </p>
              <p>
                Our journey began when our founder, John Auzland, recognized the need for 
                a more personal approach to real estate. He believed that buying and selling 
                property should be about more than just transactions—it should be about 
                building relationships and helping families find their perfect homes.
              </p>
            </div>
            
            <div className="about-image">
              <img 
                src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=600&h=400&fit=crop" 
                alt="Auz Land Team" 
              />
            </div>
          </div>
        </div>
      </div>

      <div className="section values-section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            <div className="value-card card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 17L12 22L22 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M2 12L12 17L22 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Integrity</h3>
              <p>We conduct business with honesty, transparency, and ethical practices in everything we do.</p>
            </div>
            
            <div className="value-card card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 17.9391 16.5786 16.9217 15.8284 16.1716C15.0783 15.4214 14.0609 15 13 15H5C3.93913 15 2.92172 15.4214 2.17157 16.1716C1.42143 16.9217 1 17.9391 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C23 18.1478 22.7365 17.3114 22.2426 16.6115C21.7488 15.9116 21.0492 15.3824 20.2426 15.0866C19.4361 14.7908 18.5654 14.7417 17.7288 14.9433C16.8921 15.1449 16.1287 15.5897 15.5307 16.2222" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C16.8604 3.35031 17.623 3.85071 18.1676 4.55232C18.7122 5.25392 19.0148 6.11683 19.0148 7.005C19.0148 7.89317 18.7122 8.75608 18.1676 9.45768C17.623 10.1593 16.8604 10.6597 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Excellence</h3>
              <p>We strive for excellence in every aspect of our service, from property valuations to client communication.</p>
            </div>
            
            <div className="value-card card">
              <div className="value-icon">
                <svg width="48" height="48" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 12L11 14L15 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <h3>Trust</h3>
              <p>Building long-term relationships based on trust, reliability, and consistent delivery of results.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="section team-section">
        <div className="container">
          <h2 className="section-title">Our Team</h2>
          <div className="team-grid">
            <div className="team-member card">
              <img 
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face" 
                alt="John Auzland" 
              />
              <div className="member-info">
                <h3>John Auzland</h3>
                <p className="member-title">Founder & CEO</p>
                <p className="member-bio">
                  With over 30 years of experience in real estate, John leads our company 
                  with passion and expertise.
                </p>
              </div>
            </div>
            
            <div className="team-member card">
              <img 
                src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face" 
                alt="Sarah Mitchell" 
              />
              <div className="member-info">
                <h3>Sarah Mitchell</h3>
                <p className="member-title">Head of Sales</p>
                <p className="member-bio">
                  Sarah brings 15 years of sales experience and a deep understanding of 
                  the Australian property market.
                </p>
              </div>
            </div>
            
            <div className="team-member card">
              <img 
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face" 
                alt="Michael Chen" 
              />
              <div className="member-info">
                <h3>Michael Chen</h3>
                <p className="member-title">Property Manager</p>
                <p className="member-bio">
                  Michael specializes in property management and investment strategies 
                  for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="section stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <span className="stat-number">500+</span>
              <span className="stat-label">Properties Sold</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">4+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Client Satisfaction</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">50+</span>
              <span className="stat-label">Team Members</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage; 