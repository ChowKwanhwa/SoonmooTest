import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CatPic1 from "../../Assets/CatPic/1.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiOutlineTwitter,

} from "react-icons/ai";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa";
import { GiEagleEmblem } from "react-icons/gi";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
            The purr-fect <br/>world of <br/><span className="purple"> $SOONMOO! </span>
            </h1>
            <p className="home-about-body">
            $SOONMOO isn't just another token; <br/>it's a meme token with that twist, <br/>aligning effortlessly with what's <br/>trending both online and off.  🤷‍♂️
            </p>
            <p className="home-about-body">Inspired by the whimsical nature of <br/>memes and the undeniable charm of our <br/>furry friends, SOONMOO embraces the <br/>unique culture of memes and the <br/>undeniable charm of our feline <br/>companions.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={CatPic1} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/Soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaTelegram />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/soumyajit4419/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaFileContract />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/soumyajit4419"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <GiEagleEmblem />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
