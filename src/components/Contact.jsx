import React from 'react';
import '../styles/contact_styles/contactStyles.css';

function Contact() {
  return (
    <div className="contact">
      <main>
        <h1>Contact Us</h1>
        <form>
          <div>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" placeholder="Your Name" required />
          </div>
          <div>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Your email" required />
          </div>
          <div>
            <label htmlFor="message">Message</label>
            <input type="text" id="message" placeholder="Tell us about your query..." required />
          </div>

          <button type="submit">Send</button>
        </form>
      </main>
    </div>
  );
}

export default Contact;
