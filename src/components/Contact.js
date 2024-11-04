import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact-section">
      <h2>Contact Me</h2>
      <p>Feel free to reach out via the form below or connect with me on social media!</p>

      {/* Contact Form */}
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" rows="4" required></textarea>
        </label>
        <button type="submit">Send</button>
      </form>

      {/* Social Links */}
      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        {/* Add more social links as needed */}
      </div>
    </section>
  );
}

export default Contact;
