import React from 'react';
import '../css/ContactMe.css'; 

function ContactMe() {
  return (
    <section id="ContactMe" className="contact-me">
      <h2>Get In Touch</h2>
      <p>
        My inbox is always open. Whether you have a question or just want to say hello, I'll try my best to get back to you! Feel free to mail me about any relevant job updates.
      </p>
      <div className="contact-details">
        <p>
          <strong>Email:</strong> <a href="mailto:arelispicado97@hotmail.com">arelispicado97@hotmail.com</a>
        </p>
        <p>
          <strong>LinkedIn:</strong> <a href="https://linkedin.com/in/arelis-picado-solano" target="_blank" rel="noopener noreferrer">LinkedIn</a>
        </p>
      </div>
    </section>
  );
}

export default ContactMe;