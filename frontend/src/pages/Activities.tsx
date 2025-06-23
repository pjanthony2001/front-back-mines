// src/pages/ActivitiesPage.tsx

import React, { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Button, Badge } from 'react-bootstrap';
import { CalendarEvent, Clock, GeoAlt } from 'react-bootstrap-icons';
import AppNavbar from '../components/AppNavbar';
import Footer from '../components/Footer';
import { BACKEND_URL } from '../config'; // Import the constant


interface Event {
  title: string;
  category: string;
  date: string;
  time: string;
  location: string;
  description: string;
  image: string;
}

const Activities: React.FC = () => {
  const getBadgeVariant = (category: string) => {
    switch(category.toLowerCase()) {
      case 'social': return 'success';
      case 'admin support': return 'warning';
      case 'cultural': return 'danger';
      default: return 'primary';
    }
  };

  
  const [events, setEvents] = useState<Event[]>([]);

  useEffect(() => {
    const fetchEvents = async () => {
      try {
        const response = await fetch(`${BACKEND_URL}/api/events`);
        const data: Event[] = await response.json();
        setEvents(data);
      } catch (error) {
        console.error("Failed to fetch events:", error);
      }
    };

    fetchEvents();
  }, []);

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
          {events.map((event) => (
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