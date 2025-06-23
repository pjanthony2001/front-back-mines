// src/pages/ActivitiesPage.tsx

import React from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { CalendarEvent, Clock, GeoAlt } from 'react-bootstrap-icons';
import AppNavbar from '../components/AppNavbar';
import Footer from '../components/Footer';

// --- DATA: You can easily update your events here ---
const upcomingEvents = [
  {
    title: 'Welcome Week Campus Tour',
    category: 'Social',
    date: 'September 5, 2024',
    time: '2:00 PM - 4:00 PM',
    location: 'Meet at Student Union Entrance',
    description: 'New to campus? Join us for a comprehensive tour where we show you all the essential spots, from the library to the best coffee shop!',
    image: '/mines-tour.jpg',
  },
  {
    title: 'Visa Renewal Workshop',
    category: 'Admin Support',
    date: 'September 12, 2024',
    time: '5:00 PM - 6:30 PM',
    location: 'Room 301, Admin Building',
    description: 'Get expert guidance on the visa renewal process. We will cover all the required documents and answer your questions in a Q&A session.',
    image: '/visa-workshop.webp',
  },
  {
    title: 'International Food Festival',
    category: 'Cultural',
    date: 'September 20, 2024',
    time: '6:00 PM onwards',
    location: 'Main University Lawn',
    description: 'Share a dish from your home country and taste flavors from around the world! A fantastic opportunity to meet new friends and celebrate our diversity.',
    image: '/ian-dumplings.jpg',
  },
];


const Activities: React.FC = () => {
  const getBadgeVariant = (category: string) => {
    switch(category.toLowerCase()) {
      case 'social': return 'success';
      case 'admin support': return 'warning';
      case 'cultural': return 'danger';
      default: return 'primary';
    }
  };

  return (
    <>
      <AppNavbar />

      {/* --- HERO SECTION --- */}
      <Container fluid className="bg-primary text-white text-center py-5">
        <h1 className="display-4">Our Events & Activities</h1>
        <p className="lead">Connect, learn, and have fun with our vibrant community.</p>
      </Container>

      {/* --- UPCOMING EVENTS SECTION --- */}
      <Container className="my-5">
        <Row className="text-center mb-4">
          <Col>
            <h2>Upcoming Events</h2>
            <p className="lead text-muted">Don't miss out! Join us for our next adventure.</p>
          </Col>
        </Row>
        <Row>
          {upcomingEvents.map((event) => (
            <Col md={4} key={event.title} className="mb-4 d-flex align-items-stretch">
              <Card className="shadow-sm w-100">
                <Card.Img variant="top" src={event.image} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title className="h5">{event.title}</Card.Title>
                  <Badge pill bg={getBadgeVariant(event.category)} className="mb-2 align-self-start">{event.category}</Badge>
                  <Card.Text className="flex-grow-1">{event.description}</Card.Text>
                  <hr/>
                  <ul className="list-unstyled text-muted small">
                    <li className="mb-2"><CalendarEvent className="me-2"/>{event.date}</li>
                    <li className="mb-2"><Clock className="me-2"/>{event.time}</li>
                    <li><GeoAlt className="me-2"/>{event.location}</li>
                  </ul>
                  <Button variant="primary" className="mt-auto">RSVP / Learn More</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      {/* --- EVENT CATEGORIES SECTION --- */}
      <div className="bg-light py-5">
        <Container>
          <Row className="text-center mb-4">
            <Col>
              <h2>Types of Activities We Host</h2>
            </Col>
          </Row>
          <Row className="text-center">
            <Col md={3} sm={6} className="mb-3">
              <Card className="h-100 p-3 shadow-sm d-flex justify-content-center align-items-center"><h4>Cultural Workshops</h4></Card>
            </Col>
            <Col md={3} sm={6} className="mb-3">
              <Card className="h-100 p-3 shadow-sm d-flex justify-content-center align-items-center"><h4>Social Mixers & Parties</h4></Card>
            </Col>
            <Col md={3} sm={6} className="mb-3">
              <Card className="h-100 p-3 shadow-sm d-flex justify-content-center align-items-center"><h4>Academic & Career Support</h4></Card>
            </Col>
            <Col md={3} sm={6} className="mb-3">
              <Card className="h-100 p-3 shadow-sm d-flex justify-content-center align-items-center"><h4>Sports & Recreation</h4></Card>
            </Col>
          </Row>
        </Container>
      </div>

      <Footer />
    </>
  );
};

export default Activities;