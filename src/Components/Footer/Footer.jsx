
import React from 'react';
import '../../SASS/Footer.css';

const Footer = () => {
  return (
    <footer className="footer" id="footer">
      <div className="footer-left">
        <div className="card">
          <img src="/images/NASA.png" alt="Photo-Nasa" className="card-image" />
          <div className="card-description">
            <h4>Coming soon ...</h4>
            <p>Let's Build future together</p>
          </div>
        </div>
      </div>
      <div className="footer-right">
        <div className="social-icons">
          <a href="https://web.facebook.com/haroune.tanix.7/?locale=fr_FR"><img src="/images/facebook.png" alt="Facebook" /></a>
          <a href="https://wa.me/2120687205365"><img src="/images/whatsap.jpeg" alt="photo-WhatsApp" /></a>
          <a href="https://www.instagram.com/aa_pwv/"><img src="/images/instagram.webp" alt="photo-Instagram" /></a>
        </div>
        <div className="copyright">
          <p>&copy; copyright:__Haroun Data-Analyst</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
