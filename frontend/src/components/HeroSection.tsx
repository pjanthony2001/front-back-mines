import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section className="hero-section bg-primary text-white text-center py-5">
      <div className="container">
        <h1 className="display-4">Welcome International Students</h1>
        <p className="lead">Discover everything you need to thrive in your new academic journey here at MINES.</p>
        <a href="/activities" className="btn btn-light btn-lg mt-3">Explore Activities</a>
      </div>
    </section>
  );
};

export default HeroSection;
