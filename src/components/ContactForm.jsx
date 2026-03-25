import React from 'react';

function ContactForm() {
  return (
    <div className="contact-form-container">
      <h2 className="contact-title">Contact Us</h2>
      <form className="contact-form">
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" placeholder="Your name" required />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="your@email.com" required />
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea id="message" name="message" rows="6" placeholder="Your message..." required></textarea>
        </div>
        <button type="submit" className="form-submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;

