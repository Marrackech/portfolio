
import React from 'react';

import '../../SASS/Contact.css';

const Contact = () => {
  return (
    <div>
      <footer className="footer" id="footer">
        <div className="footer-left">
          <div className='card-contact'>
            <div className="cardd">
              <a href="mailto:harountanane@gmail.com"> 
                <img src="/images/gmail.png" alt="gmail-Photo" className="card-image" />
                <div className="card-description">
                  <h4>Contact ME ..</h4>
                  <p>Let's Build future together</p>
                </div>
              </a>
            </div>
            <div className="cardd">
              <img src="/images/ai-brain.webp" alt="brain-Photo" className="card-image" />
              <div className="card-description">
                <h4>Coming soon ..</h4>
                <p>Let's Build future together</p>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-right">
          <div className="social-icons">
            <a href="https://web.facebook.com/haroune.tanix.7/?locale=fr_FR">
              <img src="/images/facebook.png" alt="photo-Facebook" />
            </a>
            <a href="https://wa.me/2120687295365">
              <img src="/images/whatsap.jpeg" alt="photo-WhatsApp" />
            </a>
            <a href="https://www.instagram.com/aa_pwv/">
              <img src="/images/instagram.webp" alt="photo-Instagram" />
            </a>
            <a href="https://chatgpt.com/">
              <img src="/images/robotHumain.jpeg" alt="photo-Robot" />
            </a>
          </div>
      
         
            <div className='margin'></div>
          
        </div>
      </footer>
    </div>
  );
};

export default Contact;
