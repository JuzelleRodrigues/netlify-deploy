import React from 'react';
import { Card, Button, Row, Col, ListGroup } from 'react-bootstrap';
import './About.css';

const About: React.FC = () => {
  return (
    <div className="about-me-container">
      <div className="blog-header">
        <div className="image-container">
          <img
            className="background-image"
            src="fastfashion.jpg"
            alt="Background"
          />
        </div>
        <div className="overlay" />
        <div className="content-container">
          <div className="title">
            Insights about my personal and work life, and the in-betweens
          </div>
          <div className="subtitle">20 October 2024 - PERSONAL BLOG</div>
        </div>
      </div>

      <Row className="justify-content-center">
        <Col lg={8} md={10}>
          <Card className="about-me-card">
            <Card.Body>
              <Card.Title className="text-center about-me-title">A Little About Me</Card.Title>
              <Card.Text className="about-me-description">
                I'm a passionate growth hacker with a keen interest in technology, innovation, and digital marketing. I love solving complex problems and turning ideas into reality through creative strategies. With experience in various industries, I’m always looking for new challenges and opportunities to grow both professionally and personally.
              </Card.Text>
              <Button variant="outline-primary" className="about-me-button">Connect with Me</Button>
            </Card.Body>
          </Card>


          <Row className="mt-4">
            <Col md={6}>
              <Card className="work-experience-card">
                <Card.Body>
                  <Card.Title className="text-center">Work Experience</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h5>Growth Hacker at TechCorp</h5>
                      <span>Jan 2020 - Present</span>
                      <p>Lead marketing initiatives that grew user engagement by 200% through data-driven strategies.</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h5>Marketing Strategist at InnovateX</h5>
                      <span>Aug 2017 - Dec 2019</span>
                      <p>Developed multi-channel marketing campaigns that resulted in a 30% increase in revenue.</p>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
            <Col md={6}>
              <Card className="education-card">
                <Card.Body>
                  <Card.Title className="text-center">Education</Card.Title>
                  <ListGroup variant="flush">
                    <ListGroup.Item>
                      <h5>Bachelor's Degree in Marketing</h5>
                      <span>University of ABC</span>
                      <p>Graduated with honors, focusing on digital marketing and data analytics.</p>
                    </ListGroup.Item>
                    <ListGroup.Item>
                      <h5>Certifications</h5>
                      <ul>
                        <li>Google Analytics Certified</li>
                        <li>Facebook Blueprint Certification</li>
                        <li>Growth Hacking Bootcamp</li>
                      </ul>
                    </ListGroup.Item>
                  </ListGroup>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default About;
