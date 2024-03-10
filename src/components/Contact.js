import React from "react";
import emailjs from "@emailjs/browser";

import { useRef, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";

const Contact = () => {
  const initialFormData = {
    first_name: "",
    last_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  };

  const [status, setStatus] = useState({});
  const [buttonText, setButtonText] = useState("Send");

  const [formData, setFormData] = useState(initialFormData);
  const [formSubmitted, setFormSubmitted] = useState(false);

  const form = useRef();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ayd4uoi", "template_peksci8", form.current, {
        publicKey: "2PiksmDY6QrznUO9J",
      })
      .then(
        () => {
          alert("Successfuly your message has been sent...");
          setStatus("");
        },
        (error) => {
          alert("FAILED...", error.text);
        }
      );
    setFormSubmitted(true);
    // Reset form after submission
    setFormData(initialFormData);
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>

                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="first_name"
                          value={formData.first_name}
                          placeholder="First Name"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="text"
                          name="last_name"
                          value={formData.last_name}
                          placeholder="Last Name"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="email"
                          name="user_email"
                          value={formData.user_email}
                          placeholder="Email Address"
                          onChange={handleChange}
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          type="tel"
                          value={formData.uses_phone}
                          name="user_phone"
                          placeholder="Phone No."
                          onChange={handleChange}
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          name="message"
                          value={formData.message}
                          placeholder="Message"
                          onChange={handleChange}
                        ></textarea>
                        <button type="submit" value="Send">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
                        </Col>
                      )}
                    </Row>
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
