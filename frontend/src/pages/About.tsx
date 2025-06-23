// src/pages/AboutPage.tsx

import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';
import { Linkedin, Envelope, } from 'react-bootstrap-icons';
import AppNavbar from '../components/AppNavbar';
import Footer from '../components/Footer';

// TODO: Move to Backend
const teamMembers = [
  {
    name: 'Mr Puppy Dogman',
    role: 'President & Founder',
    bio: 'As a former international student, Mr Dogman founded this association to create the community he wished he had. He loves connecting people and organizing cultural events and wagging his tail.',
    image: '/puppy.jpg', 
    linkedin: 'https://fr.linkedin.com/in/c%C3%A9dric-villani',
  },
  {
    name: 'Ms Kitty Catwoman',
    role: 'Visa & Admin Support Lead',
    bio: 'Ms Catwoman is a master of paperwork. She provides workshops and one-on-one sessions to help students navigate the complexities of French administration.',
    image: '/grumpy_cat.jpg', 
    linkedin: 'https://fr.linkedin.com/in/c%C3%A9dric-villani',
  },
  {
    name: 'Dr Rabbit White',
    role: 'Head of Social Events',
    bio: 'Dr White is the life of the party and the heart of our social scene. From city tours to game nights, she helps everyone finds a place to belong, have fun and eat carrots.',
    image: '/european-rabbit.jpg', 
    linkedin: 'https://fr.linkedin.com/in/c%C3%A9dric-villani',
  },
];


const AboutUs: React.FC = () => {
  return (
    <>
      <AppNavbar />

      <Container fluid className="bg-light text-center py-5">
        <h1 className="display-4">About Our Association</h1>
        <p className="lead text-muted">Your home away from home, dedicated to helping you integrate into MINES.</p>
      </Container>
      
      <Container className="my-5">
        <Row className="align-items-center">
          <Col md={6} className="mb-4">
            <Image src="/asti-group-photo.jpg" rounded fluid />
          </Col>
          <Col md={6}>
            <h2 style={{ textAlign: 'center' }} className="mt-4">Our Mission</h2>
            <p>
              To provide comprehensive support for international students at our school, easing their transition into academic and social life. We aim to foster a diverse, inclusive, and vibrant community where every student feels valued, supported, and empowered to achieve their full potential.
            </p>
            <h2 style={{ textAlign: 'center' }} className="mt-4">Our Vision</h2>
            <p>
              To be the central hub for international student life at MINES, creating a seamless integration experience that is recognized for its excellence and warmth. We envision a future where every international student looks back on their time here as a period of growth, friendship, and success.
            </p>
          </Col>
        </Row>
      </Container>

      {/* --- MEET THE TEAM SECTION --- */}
      <div className="bg-light py-5">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2>Meet the Team</h2>
              <p className="lead">The dedicated students behind our mission.</p>
            </Col>
          </Row>
          <Row>
            {teamMembers.map((member) => (
              <Col md={4} key={member.name} className="mb-4 d-flex align-items-stretch">
                <Card className="text-center shadow-sm w-100">
                  <Card.Img variant="top" src={member.image} className="p-3" style={{width: '180px', height: '180px', objectFit: 'cover', margin: 'auto', borderRadius: '50%'}} />
                  <Card.Body className="d-flex flex-column">
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                    <Card.Text className="flex-grow-1">{member.bio}</Card.Text>
                    <div>
                      <a href={member.linkedin} target="_blank" rel="noopener noreferrer" className="text-primary me-3">
                        <Linkedin size={24} />
                      </a>
                      <a href={`mailto:${member.name.split(' ')[0].toLowerCase()}@etu.minesparis.psl.eu`} className="text-primary">
                        <Envelope size={24} />
                      </a>
                    </div>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default AboutUs;