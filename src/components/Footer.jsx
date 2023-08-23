import React from "react";
import { Col, Container, Image, Row, Stack } from "react-bootstrap";
import { IoIosCall } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { MdEmail, MdLocationPin } from "react-icons/md";
import "../style/footer.css";

function Footer() {
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col
            md={4}
            className="d-flex align-items-start justify-content-between mb-4"
          >
            <div>
              <Image src={"/images/logo2.png"} className="footer-logo" />
              <p>Follow Us On Social Media</p>
              <div className="d-flex flex-row  gap-3 align-items-center">
                <div className="icon-btn">
                  <FaFacebook style={{ color: "#ffffff", fontSize: "24px" }} />
                </div>
                <div className="icon-btn">
                  <AiFillInstagram
                    style={{ color: "#ffffff", fontSize: "24px" }}
                  />
                </div>
                <div className="icon-btn">
                  <IoIosCall style={{ color: "#ffffff", fontSize: "24px" }} />
                </div>
              </div>
            </div>
          </Col>
          <Col md={4} className="mb-4">
            <h3>Meet At Start Cinema</h3>
            <p>About us </p>
            <p>Privacy Policy </p>
            <p>Student Reward Program</p>
            <p>Terms & Condition</p>
          </Col>
          <Col md={6}>
            <h3>Contact Us</h3>
            <div className="d-flex flex-row mb-3  align-items-center">
              <div className="icon-btn">
                <IoIosCall style={{ color: "#ffffff", fontSize: "24px" }} />
              </div>
              <p className="m-3">+73 567 45676</p>
            </div>
            <div className="d-flex flex-row mb-3 align-items-center">
              <div className="icon-btn">
                <MdEmail style={{ color: "#ffffff", fontSize: "24px" }} />
              </div>
              <p className="m-3">customer@st.cinema. com</p>
            </div>
            <div className="d-flex flex-row mb-3  align-items-center">
              <div className="icon-btn">
                <MdLocationPin style={{ color: "#ffffff", fontSize: "24px" }} />
              </div>
              <p className="m-3">Östrakasering 5, Kristianstad</p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
