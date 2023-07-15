import React from 'react';
import '../styles/footer_styles/footerStyles.css'

function Footer() {
  return (
    <footer>
      <div>
        <h1>TechSage</h1>
        <p>&copy;all rights reserved</p>
      </div>
      <div>
        <h5>Follow Us</h5>
        <div>
          <a href="https://www.github.com/NiharPhansalkar" target="blank">GitHub</a>
          <a href="https://www.linkedin.com/in/nihar-phansalkar-5a0a75220/" target="blank">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
