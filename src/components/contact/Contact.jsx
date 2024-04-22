import React, { useState } from "react";
import "./Contact.css";
import ScrollTop from "./ScrollTop";
import Zoom from "react-reveal/Zoom";

const Contact = () => {
  const [message, setMessage] = useState(""); // State لتخزين الرسالة المكتوبة في الحقل textarea
  const [subject, setSubject] = useState(""); // State لتخزين موضوع البريد الإلكتروني

  const handleSendMessage = () => {
    const recipient = "zekoahmed812@gmail.com"; // تغيير هذا إلى عنوان البريد الإلكتروني المستلم
    const mailtoLink = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;

    window.location.href = mailtoLink;
  };

  return (
    <section className="contact container section" id="contact">
      <Zoom>
        <h2 className="section__title">Get In Touch</h2>
      </Zoom>

      <div className="contact__container grid">
        <Zoom>
          <div className="contact__info">
            <h3 className="contact__title">Let's talk about everything!</h3>
            <p className="contact__details">
              Don't like forms? Send me an email. 👋
            </p>
          </div>
        </Zoom>

        <form action="" className="contact__form">
          <div className="contact__form-group">
            <Zoom>
              <div className="contact__form-div">
                <input
                  type="text"
                  className="contact__form-input"
                  placeholder="Your Name"
                />
              </div>
            </Zoom>

            <Zoom>
              <div className="contact__form-div">
                <input
                  type="email"
                  className="contact__form-input"
                  placeholder="Your Email"
                />
              </div>
            </Zoom>

            <Zoom>
              <div className="contact__form-div">
                <input
                  type="text"
                  className="contact__form-input"
                  placeholder="Your Subject"
                  value={subject} // ربط قيمة الحقل input بالمتغير subject
                  onChange={(e) => setSubject(e.target.value)} // تحديث قيمة المتغير subject عندما يتم كتابة البيانات
                />
              </div>
            </Zoom>

            <Zoom>
              <div className="contact__form-div contact__form-area">
                <textarea
                  name=""
                  id=""
                  cols="30"
                  rows="10"
                  className="contact__form-input"
                  placeholder="Your Message"
                  value={message} // ربط قيمة الحقل textarea بالمتغير message
                  onChange={(e) => setMessage(e.target.value)} // تحديث قيمة المتغير message عندما يتم كتابة البيانات
                ></textarea>
              </div>
            </Zoom>
          </div>

          <div className="contact__form-group">
            <Zoom>
              <div className="contact__form-div">
                <button className="btn" onClick={handleSendMessage}>
                  Send Message
                </button>
              </div>
            </Zoom>
          </div>
        </form>

        <Zoom>
          <ScrollTop />
        </Zoom>
      </div>
    </section>
  );
};

export default Contact;
