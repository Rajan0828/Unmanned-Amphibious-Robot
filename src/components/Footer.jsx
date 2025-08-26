import React from 'react';
import {
  RiBookOpenFill,
  RiFacebookFill,
  RiYoutubeFill,
  RiSendPlaneFill,
} from 'react-icons/ri';

const Footer = () => (
  <footer className="footer section">
    <div className="footer_container container">
      <div className="footer_content">
        <div className="footer_sponsors">
          <h3 className="footer_title">Partnered Institutions</h3>
          <div className="sponsor_logos">
            <img
              src="src/assets/plm.png"
              alt="PLM Logo"
              className="plm_logo"
            />
            <img
              src="src/assets/dost.png"
              alt="DOST Logo"
              className="dost_logo"
            />
            <img
              src="src/assets/xinyx.png"
              alt="Xinyx Logo"
              className="xinyx_logo"
            />
          </div>
        </div>

        <div className="footer_contact">
          <h3 className="footer_title">Contact / Inquiry</h3>
          <form className="footer_form">
            <textarea
              name="message"
              placeholder="Your Message"
              className="footer_input"
              required
            ></textarea>
            <button type="submit" className="footer_button button">
              Send <RiSendPlaneFill />
            </button>
          </form>

          <div className="footer_social">
            <a
              href="https://sciforum.net/paper/view/21231"
              target="_blank"
              className="footer_social-link"
            >
              <RiBookOpenFill />
            </a>
            <a
              href="https://www.facebook.com/share/p/1F7FPdVep8/"
              target="_blank"
              className="footer_social-link"
            >
              <RiFacebookFill />
            </a>
            <a
              href="https://www.youtube.com/watch?v=S-Vc3vb7zKw"
              target="_blank"
              className="footer_social-link"
            >
              <RiYoutubeFill />
            </a>
          </div>
        </div>
      </div>
      <span className="footer_copy">
        &#169; 2025 Unmanned Amphibious Robot. All Rights Reserved.
      </span>
    </div>
  </footer>
);

export default Footer;
