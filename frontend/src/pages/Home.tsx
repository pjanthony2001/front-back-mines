// src/pages/Home.tsx

import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card } from 'react-bootstrap';
import AppNavbar from '../components/AppNavbar';
import HeroSection from '../components/HeroSection';
import FeatureCard from '../components/FeatureCard';
import Footer from '../components/Footer';
import '../style/Home.css'; 


interface Feature {
  id: number;
  title: string;
  description: string;
  image: string;
  detailsText: React.JSX.Element; 
}


const features: Feature[] = [
  {
    id: 1,
    title: 'Visa Guidance',
    description: 'Step-by-step help with applications, renewals, and legal paperwork.',
    image: '/visa.jpg',
    detailsText: (
      <>
        Personalized assistance to navigate the complexities of visa and immigration procedures, ensuring a smooth process for all international students. <Link to="https://france-visas.gouv.fr/etudiant" style={{ color: 'white', textDecoration: 'underline' }}>Go to the official French Visa Page.</Link>
      </>
    )
  },
  {
    id: 2,
    title: 'Housing & Accommodation',
    description: 'Essential resources for staying at Maison des Mines or finding private housing options.',
    image: '/housing.webp',
    detailsText: (
      <>Find safe and affordable housing with our help. <Link to="https://www.maisondesmines.com/en/home-page/" style={{ color: 'white', textDecoration: 'underline' }}>Go to the official page of Maison des Mines.</Link></>
    )
  },
  {
    id: 3,
    title: 'Social and Financial Support',
    description: 'Access social services, financial aid, and community resources to help you thrive.',
    image: '/finance.webp',
    detailsText: (
      <>
        We connect you with vital support systems, from financial aid to cultural integration events. <Link to="/contact" style={{ color: 'white', textDecoration: 'underline' }}>Contact us to learn more</Link>.
      </>
    )
  },
];

const Home: React.FC = () => {

  const [activeFeatureId, setActiveFeatureId] = useState<number>(features[0].id);

  const activeFeature = features.find(f => f.id === activeFeatureId);

  const detailsSectionRef = useRef<HTMLDivElement>(null);

  const handleCardClick = () => {
    detailsSectionRef.current?.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  return (
    <>
      <AppNavbar />
      <HeroSection />

      {/* --- FEATURES SECTION --- */}
      <section id="features" className="py-5">
        <Container>
          <Row className="text-center">
            {features.map((feature) => (
              <Col key={feature.id} md={4} className="mb-4">
                <FeatureCard
                  title={feature.title}
                  description={feature.description}
                  isActive={feature.id === activeFeatureId}
                  onHover={() => setActiveFeatureId(feature.id)} // Update state on hover
                  onClick={handleCardClick}
                />
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* --- DETAILS SECTION --- */}
      <section id="feature-details" className="py-5 bg-light" ref={detailsSectionRef}>
        <Container>
          {/* We use a check to make sure activeFeature is found before rendering */}
          {activeFeature && (
            <Card className="text-white shadow">
              <Card.Img src={activeFeature.image} alt={activeFeature.title} style={{ objectFit: 'cover', height: '350px', filter: 'brightness(0.6)' }} />
              <Card.ImgOverlay className="d-flex align-items-center justify-content-end">
                <div className="overlay-content">
                  <h3 className="mb-3">{activeFeature.title}</h3>
                  <p className="lead">{activeFeature.detailsText}</p>
                </div>
              </Card.ImgOverlay>
            </Card>
          )}
        </Container>
      </section>

      <Footer />
    </>
  );
};

export default Home;
