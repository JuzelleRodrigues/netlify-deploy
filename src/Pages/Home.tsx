import React from "react";
import { Card, Col, Row, Carousel, Image } from "react-bootstrap";
import { Link } from "react-router-dom";
import {
  FaFigma,
  FaUnity,
  FaReact,
  FaNode,
  FaGithub,
  FaWordpress,
} from "react-icons/fa";
import "./Home.css";

const Home: React.FC = () => {
  return (
    <div className="home-page">
      <div className="landing-page-container">
        {/* Left Side Content */}
        <div className="content-left">
          <h1 className="intro">Hi,</h1>
          <h2 className="name">I'm Juzelle Rodrigues.</h2>
          <h3 className="designation">
            <span className="typewriter-text">
              A Interaction & Experience Designer, Content Writer, Graphic
              Designer
            </span>
          </h3>
        </div>

        {/* Right Side Image */}
        <div className="content-right">
          <img
            src="3_ThumbnailSize_DescribesYou.jpg"
            alt="Juzelle Rodrigues"
            className="profile-image"
          />
        </div>
      </div>

      {/* Why Choose Me Section */}
      <section className="why-choose-me-section">
        <h2 className="section-title">Why Choose Me</h2>
        <Row className="justify-content-center">
          <Col sm={12} md={6} lg={3}>
            <Card className="why-choose-card">
              <Card.Body>
                <div className="card-icon">🔥</div>
                <Card.Title className="card-title">Quality</Card.Title>
                <Card.Text className="card-description">
                  I provide high-quality solutions tailored to your business.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card className="why-choose-card">
              <Card.Body>
                <div className="card-icon">⚡</div>
                <Card.Title className="card-title">Speed</Card.Title>
                <Card.Text className="card-description">
                  Fast delivery with precision to meet your deadlines.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card className="why-choose-card">
              <Card.Body>
                <div className="card-icon">💡</div>
                <Card.Title className="card-title">Innovation</Card.Title>
                <Card.Text className="card-description">
                  Creative and innovative solutions for your unique needs.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} lg={3}>
            <Card className="why-choose-card">
              <Card.Body>
                <div className="card-icon">🤝</div>
                <Card.Title className="card-title">Collaboration</Card.Title>
                <Card.Text className="card-description">
                  I work closely with you to ensure the best results.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </section>

      {/* Services Offered Section */}
      <section className="services-offered">
        <h2>Services Offered</h2>
        <Carousel className="services-slider">
          {[1, 2, 3, 4, 5].map((num) => (
            <Carousel.Item key={num}>
              <Image src={`service${num}.jpg`} alt={`Service ${num}`} fluid />
            </Carousel.Item>
          ))}
        </Carousel>
      </section>

      {/* Recent Projects Section */}
      <div className="selected-work-container">
        <div className="selected-work-header">
          <div className="title">Recent Projects</div>
        </div>
        <div className="selected-work-content">
          <div className="work-row">
            <div className="work-details">
              <div className="work-info">
                <div className="work-title">Interaction Design</div>
                <div className="tags">
                  <div className="tag">User Research</div>
                  <div className="tag">2023</div>
                </div>
              </div>
              <div className="discover-button">
                <span>Discover</span>
                <div className="arrow"></div>
              </div>
            </div>
            <img
              className="work-image"
              src="Dailyobjects.jpg"
              alt="Work Trinity"
            />
            <img
              className="work-image"
              src="Interview.jpg"
              alt="Work Placeholder"
            />
          </div>
          <div className="work-row">
            <img
              className="work-image"
              src="Plant2.jpg"
              alt="Work Placeholder"
            />
            <img
              className="work-image"
              src="Animation.jpg"
              alt="Work Placeholder"
            />
            <div className="work-details">
              <div className="work-info">
                <div className="work-title">ELLE India</div>
                <div className="tags">
                  <div className="tag">Content Writing</div>
                  <div className="tag">2024</div>
                </div>
              </div>
              <div className="discover-button">
                <span>Discover</span>
                <div className="arrow"></div>
              </div>
            </div>
          </div>
          <div className="all-work-button">
            <span>All Work</span>
          </div>
        </div>
      </div>

      {/* My Skills Section */}
      <section className="my-skills">
        <div className="skills-slider">
          {[FaFigma, FaUnity, FaReact, FaNode, FaGithub, FaWordpress].map(
            (Icon, idx) => (
              <div key={idx} className="skill-item">
                <Icon size={60} />
                <p>
                  {
                    [
                      "Figma",
                      "Unity",
                      "React",
                      "Node.js",
                      "GitHub",
                      "WordPress",
                    ][idx]
                  }
                </p>
              </div>
            )
          )}
        </div>
      </section>

      {/* Testimonials Section */}
      <div className="clients-container">
        <h1>Testimonials</h1>
        <div className="clients-grid">
          <div className="client-card">
            <div className="quote">Exceptional Web and Digital Design</div>
            <div className="description">
              Dianne's creativity exceeded our expectations.
            </div>
            <div className="client-info">
              <img
                className="client-image"
                src="Woman.jpg"
                alt="Annette Black"
              />
              <div className="client-details">
                <div className="client-name">Emily Jones</div>
                <div className="client-role">Marketing Coordinator</div>
              </div>
            </div>
          </div>

          <div className="client-card">
            <div className="quote">
              Art Direction that Perfectly Captured Our Essence
            </div>
            <div className="description">
              The visual identity was flawlessly executed.
            </div>
            <div className="client-info">
              <img
                className="client-image"
                src="Man1.jpg"
                alt="Ralph Edwards"
              />
              <div className="client-details">
                <div className="client-name">Ralph Edwards</div>
                <div className="client-role">Software Development Manager</div>
              </div>
            </div>
          </div>

          <div className="client-card">
            <div className="quote">
              Interaction Design Expertise Delivered Beyond Measure
            </div>
            <div className="description">
              The app's usability exceeded all expectations.
            </div>
            <div className="client-info">
              <img className="client-image" src="Man2.jpg" alt="Jacob Jones" />
              <div className="client-details">
                <div className="client-name">Jacob Jones</div>
                <div className="client-role">Scrum Master</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*Contact*/}
      <div className="contact-container">
        {/* Main Content */}
        <div className="contact-content">
          {/* Left Section */}
          <div className="contact-title">
            <div className="contact-heading">
              <div className="contact-heading-text">Contact</div>
            </div>
          </div>

          {/* Right Section */}
          <div className="contact-description">
            <div className="description-container">
              <div className="contact-subheading">
                Let’s start building your brand’s unique story together.
              </div>
              <div className="contact-text">
                Want to see what a difference a strong brand can make? Request a
                consultation today.
              </div>
              <div className="button-container">
                <Link to="/Contact">
                  <div className="button-text">Get in touch</div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
