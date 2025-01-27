import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSendMessage = async (event) => {
    event.preventDefault();

    if (!name || !email || !message) {
      setError("Please fill in all fields: Name, Email, and Message.");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address.");
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      await emailjs.send(
        "service_55t82lm",
        "template_is1pn4p",
        {
          from_name: name,
          from_email: email,
          to_name: "Ahmed El-Refay",
          to_email: "eng.ahmed.elrefa3y@gmail.com",
          message: message,
          reply_to: email,
        },
        "HjObGFI75x5ABCKg_"
      );

      setIsSubmitted(true);
      setIsLoading(false);

      setName("");
      setEmail("");
      setMessage("");

      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    } catch (error) {
      console.error("Failed to send email:", error);
      setError("Failed to send message. Please try again later.");
      setIsLoading(false);
    }
  };

  return (
    <section className="contact container section" id="contact">
      <motion.h2
        className="section__title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Get In Touch
      </motion.h2>

      <div className="contact__container grid">
        <motion.div
          className="contact__info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <h3 className="contact__title">Let's talk about everything!</h3>
          <p className="contact__details">
            Don't like forms? Send me an email. 👋
          </p>

          <div className="contact__icons">
            <a
              href="https://wa.me/01122072799"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__icon-link"
            >
              <FaWhatsapp className="contact__icon" />
            </a>
            <a
              href="mailto:eng.ahmed.elrefa3y@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="contact__icon-link"
            >
              <FaEnvelope className="contact__icon" />
            </a>
          </div>
        </motion.div>

        <motion.form
          onSubmit={handleSendMessage}
          className="contact__form"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="contact__form-group">
            <div className="contact__form-div">
              <input
                type="text"
                className="contact__form-input"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
            </div>

            <div className="contact__form-div">
              <input
                type="email"
                className="contact__form-input"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            <div className="contact__form-div contact__form-area">
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Your Message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>
            </div>
          </div>

          {error && <p className="contact-error-message">{error}</p>}

          {isSubmitted ? (
            <p className="contact-success-message">
              Your message has been successfully sent. I will contact you soon.
            </p>
          ) : (
            <div className="contact__form-div">
              <button type="submit" className="btn" disabled={isLoading}>
                {isLoading ? "Sending..." : "Send Message"}
              </button>
            </div>
          )}
        </motion.form>
      </div>
    </section>
  );
};

export default Contact;