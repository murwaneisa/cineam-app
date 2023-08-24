import React from "react";
import { Button, Col, Container, Image, Row, Stack } from "react-bootstrap";
import { IoIosCall } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail, MdLocationPin } from "react-icons/md";
import "../style/footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col
            md={4}
            className="d-flex align-items-start justify-content-between mb-4 sec-container"
          >
            <div>
              <a href="#" style={{ textDecoration: "none" }}>
                <Image src={"/images/logo2.png"} className="footer-logo" />
              </a>
              <p>Follow Us On Social Media</p>
              <div className="d-flex flex-row  gap-3 align-items-center">
                <div className="icon-btn">
                  <a href="#" style={{ textDecoration: "none" }}>
                    <FaFacebook
                      style={{ color: "#ffffff", fontSize: "24px" }}
                    />
                  </a>
                </div>
                <div className="icon-btn">
                  <a href="#" style={{ textDecoration: "none" }}>
                    <AiFillInstagram
                      style={{ color: "#ffffff", fontSize: "24px" }}
                    />
                  </a>
                </div>
                <div className="icon-btn">
                  <a href="#" style={{ textDecoration: "none" }}>
                    <IoIosCall style={{ color: "#ffffff", fontSize: "24px" }} />
                  </a>
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className="mb-4 sec-container">
            <h3>Meet At Start Cinema</h3>
            <a href="#" style={{ textDecoration: "none" }}>
              <p>About us </p>
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              <p>Privacy Policy </p>
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              <p>Student Reward Program</p>
            </a>
            <a href="#" style={{ textDecoration: "none" }}>
              <p>Terms & Condition</p>
            </a>
          </Col>
          <Col md={4} className="sec-container">
            <h3>Contact Us</h3>
            <div className="d-flex flex-row mb-3  align-items-center">
              <div className="icon-btn">
                <IoIosCall style={{ color: "#ffffff", fontSize: "24px" }} />
              </div>
              <p className="mx-3">073 567 45676</p>
            </div>
            <div className="d-flex flex-row mb-3  align-items-center">
              <div className="icon-btn">
                <MdEmail style={{ color: "#ffffff", fontSize: "24px" }} />
              </div>
              <p className="m-3" style={{ wordBreak: "break-all" }}>
                customer@st.cinema.com
              </p>
            </div>
            <div className="d-flex flex-row mb-3  align-items-center">
              <div className="icon-btn">
                <MdLocationPin style={{ color: "#ffffff", fontSize: "24px" }} />
              </div>
              <p className="m-3" style={{ wordBreak: "break-all" }}>
                Östrakasering5, Kristianstad
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
