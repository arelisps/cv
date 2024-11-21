import React from 'react';
import { Link } from 'react-router-dom';

import Main from '../layouts/Main';
import ContactIcons from '../components/Contact/ContactIcons';

const Contact = () => (
  <Main
    title="Contact"
    description="Contact Arelis Picado Solano via email @ arelispicado97@hotmail.com"
  >
    <article className="post" id="contact">
      <header>
        <div className="title">
          <h2>
            <Link to="/contact">Contact</Link>
          </h2>
        </div>
      </header>
      <div className="email-at">
        <p>Feel free to get in touch. You can email me at: <a href="mailto:arelispicado97@hotmail.com">arelispicado97@hotmail.com</a> </p>
      </div>
      <ContactIcons />
    </article>
  </Main>
);

export default Contact;
