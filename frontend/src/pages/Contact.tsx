// src/pages/Contact.tsx

import React, { useState } from 'react';
import { Container, Row, Col, Form, Button, Card } from 'react-bootstrap';
import { Envelope, Telephone, GeoAlt, Clock } from 'react-bootstrap-icons';
import AppNavbar from '../components/AppNavbar';
import Footer from '../components/Footer';

const Contact: React.FC = () => {
  // state for form data
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });


  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Connect to backend
    console.log('Form data submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <>
      <AppNavbar />
      
      <Container className="my-5">
        <Row className="text-center mb-5">
          <Col>
            <h1>Get in Touch</h1>
            <p className="lead text-muted">
              We are here to help you with any questions about student life, visas, housing, or just to say hello!
            </p>
          </Col>
        </Row>

        <Row>
          {/* Column 1: Contact Form */}
          <Col md={7} className="mb-4">
            <Card className="p-4 shadow-sm">
              <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control 
                    type="text" 
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name" 
                    required 
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control 
                    type="email"
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email" 
                    required 
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formSubject">
                  <Form.Label>What is your question about?</Form.Label>
                  <Form.Select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">-- Please choose a topic --</option>
                    <option value="Visa & Immigration">Visa & Immigration</option>
                    <option value="Housing & Accommodation">Housing & Accommodation</option>
                    <option value="Social Events & Clubs">Social Events & Clubs</option>
                    <option value="Academic Support">Academic Support</option>
                    <option value="General Inquiry">General Inquiry</option>
                  </Form.Select>
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>Message</Form.Label>
                  <Form.Control 
                    as="textarea"
                    name="message"
                    value={formData.message}
                    onChange={handleChange} 
                    rows={5} 
                    placeholder="Your detailed message" 
                    required 
                  />
                </Form.Group>
                
                <Button variant="primary" type="submit" className="w-100">
                  Send Message
                </Button>
              </Form>
            </Card>
          </Col>

          {/* Column 2: Contact Details */}
          <Col md={5}>
            <div className="mb-4">
              <h4>Contact Information</h4>
              <p>Reach out to us directly or visit the school during opening hours.</p>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-3">
                  <GeoAlt size={20} className="me-3 text-primary" />
                  <span>Mines Paris PSL, 60 Boulevard Saint-Michel, 75006 Paris, France</span>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <Envelope size={20} className="me-3 text-primary" />
                  <a href="mailto:asti@asso.minesparis.psl.eu" className="text-decoration-none text-dark">asti@asso.minesparis.psl.eu</a>
                </li>
                <li className="d-flex align-items-center mb-3">
                  <Telephone size={20} className="me-3 text-primary" />
                  <span>+33 07 12 34 56 78</span>
                </li>
              </ul>
            </div>

            <div className="mb-4">
              <h4>School Office Hours</h4>
              <ul className="list-unstyled">
                <li className="d-flex align-items-center mb-2">
                  <Clock size={20} className="me-3 text-primary" />
                  <span>Monday - Friday: 9:00 AM - 8:00 PM</span>
                </li>
                <li className="d-flex align-items-center">
                   <div style={{width: '20px'}} className="me-3"></div>
                  <span>Weekends: 9:00 AM - 5:00 PM</span>
                </li>
                <li className="d-flex align-items-center">
                   <div style={{width: '20px'}} className="me-3"></div>
                  <span>Holidays: Closed</span>
                </li>
              </ul>
            </div>

            {/* Google Maps Embed */}
            <div>
              <iframe 
                src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDbPbSAzny76onDAbHOrv7nj6a9yP6hWF8
                &q=Mines+Paris+PSL,+60+Boulevard+Saint-Michel,+75006+Paris,+France"
                width="100%"
                height="250"
                style={{ border: 0, borderRadius: '0.5rem' }}
                allowFullScreen={true}
                loading="lazy"
                title="Office Location Map"
              ></iframe>
            </div>
          </Col>
        </Row>
      </Container>
      
      <Footer />
    </>
  );
};

export default Contact;