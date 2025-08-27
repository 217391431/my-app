import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">Get in Touch</h2>
      <p className="contact-subtitle">
        Feel free to reach out via email or connect on my social platforms.
      </p>

      <div className="contact-links">
        <a
          href="mailto:you@example.com"
          className="contact-btn email"
        >
          Email
        </a>
        <a
          href="https://linkedin.com/in/yourname"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn linkedin"
        >
          LinkedIn
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn github"
        >
          GitHub
        </a>
      </div>
    </section>
  );
};

export default Contact;
