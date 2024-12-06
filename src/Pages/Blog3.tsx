import React from "react";
import { Card, Button, Row, Col } from "react-bootstrap";
import {
  FaCamera,
  FaLightbulb,
  FaTachometerAlt,
  FaCogs,
  FaAdjust,
} from "react-icons/fa";
import "./Blog3.css";

const Blog3: React.FC = () => {
  return (
    <div className="blog-container">
      <div className="blog-header-title">
        <h2>
        A SHOT THAT DESRCIBES YOU <br></br>
          <h5 id="Tagline">
          Visual Representation: Me, in a Nutshell (or a Frame)
          </h5>
        </h2>
      </div>

      <div className="blog-header-details">
        <span className="blog-category">Photography</span>
        <div className="divider"></div>
        <div className="date-info">
          <div className="date-icon">
            <div className="inner-icon"></div>
          </div>
          <span className="blog-date"> 01 NOVember 2024</span>
        </div>
        <div className="divider"></div>
        <div className="author-info">
          <img className="author-image" src="JuzellePhoto.jpg" alt="Author" />
          <span className="author-name">Juzelle Rodrigues</span>
        </div>
      </div>

      {/* Main Blog Section */}
      <div className="blog-layout">
        <div className="blog-image-container">
          <img
            className="blog-image"
            src="3_ThumbnailSize_DescribesYou.jpg"
            alt="Blog Illustration"
          />
        </div>
      </div>

      {/* Right Content */}
      <div className="camera-setup-content">
        <h2>Camera & Other Setup: Capturing Every Detail</h2>
        <p>
          Our production relied on cutting-edge technology for both static and
          dynamic shots:
        </p>
        <div className="setup-details">
          <div className="setup-item">
            <FaCamera className="icon" />
            <h4>Camera Maker & Model</h4>
            <p>APPLE iPhone13 </p>
          </div>

          <div className="setup-item">
            <FaLightbulb className="icon" />
            <h4>Flash Mode</h4>
            <p> No flash, compulsory </p>
          </div>
          <div className="setup-item">
            <FaTachometerAlt className="icon" />
            <h4>Shutter Speed</h4>
            <p>1/6173 sec</p>
          </div>
          <div className="setup-item">
            <FaCogs className="icon" />
            <h4>ISO</h4>
            <p>ISO 50</p>
          </div>
          <div className="setup-item">
            <FaAdjust className="icon" />
            <h4>Focal Length</h4>
            <p>5mm</p>
          </div>
        </div>
        <p>
          These devices allowed us to achieve unparalleled quality, ensuring
          that each scene looked polished and professional.
        </p>
      </div>

      <div className="section text-section">
        <h4>About</h4>
        <p>
          A professional headshot is more than just a picture; it's a visual
          representation of 'YOU' as a 'BRAND'. It can significantly impact your
          professional image, whether you're networking, applying for jobs, or
          building your online presence. A well-executed headshot can convey
          confidence, competence, and approachability - Need of the hour!
        </p>
        <h3>Technical Commentary</h3>
        <h4>Aperture (f/2.2)</h4>
        <p>
          This setting is good for isolating the subject from the background, a
          greater depth of field, ensuring that the entire face is in focus. The
          number could go higher but as per my image tests I really liked the
          way my face looked in the (f/2.2) setting. Not too broad and not too
          long.
        </p>
        <br></br>
        <h4>Shutter Speed (1/33 sec)</h4>
        <p>
          While a faster shutter speed (like 1/125 sec) is generally recommended
          for sharp headshots to minimize motion blur, a slower shutter speed
          like 1/33 sec can be used under certain conditions. In my case the
          camera was kept stable - whilst the room I was clicking the image in
          was not well lit up. Hence, the use of a slower shutter speed to allow
          more light to enter the camera sensor. It proved to be beneficial
          since there was no other external light source.
        </p>
        <br></br>
        <h4>ISO (ISO-606)</h4>
        <p>
          The ISO setting added noise to the image, but since there was no
          external light source and the lighting in the room was not great, a
          higher ISO was the only option, which slightly reduced the overall
          image quality.
        </p>
        <br></br>
        <h4>Focal Length (3mm)</h4>
        <p>
          A 3mm focal length is typically not ideal for a professional headshot.
          50mm or more, is generally preferred for professional photography -
          but in my case the distance between the cameraperson and me was hardly
          around 2 steps, which is why a 3mm focal length was used.
        </p>
      </div>

      {/* Read More Similar Blogs */}
      <div className="related-blogs">
        <h3>Read More Similar Blogs</h3>
        <Row xs={1} sm={2} md={3} className="g-4">
          <Col>
            <Card>
              <Card.Img variant="top" src="Pasta.jpg" />
              <Card.Body>
                <Card.Title>Making the Perfect Spaghetti</Card.Title>
                <Card.Text>
                  Dive into the art of creating cinematic food commercials.
                </Card.Text>
                <Button variant="primary" href="/blog1">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="Henna.jpg" />
              <Card.Body>
                <Card.Title>Mastering Camera Techniques</Card.Title>
                <Card.Text>
                  Learn how to use advanced cameras for dynamic shots.
                </Card.Text>
                <Button variant="primary" href="/blog2">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card>
              <Card.Img variant="top" src="fastfashion.jpg" />
              <Card.Body>
                <Card.Title>Lighting Magic</Card.Title>
                <Card.Text>
                  Explore how lighting enhances the storytelling of your videos.
                </Card.Text>
                <Button variant="primary" href="/blog3">
                  Read More
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Blog3;
