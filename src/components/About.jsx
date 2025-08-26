import React from 'react';
import { RiInformationFill } from 'react-icons/ri';

const About = () => (
  <section className="about section" id="about">
    <div className="about_container container grid">
      <div className="about_data">
        <h2 className="section_title">Flood Response Reinforced</h2>
        <p className="about_description">
          The Unmanned Amphibious Robot (UAR) is designed to assist in
          post-typhoon flood emergencies by navigating both land and
          water. Equipped with LoRa-based communication, real-time
          video streaming, and human detection powered by YOLOv5, the
          UAR helps responders locate victims faster and safer. Its
          autonomous movement, long-range connectivity, and compact
          design make it a reliable tool for modern flood rescue
          operations.
        </p>
        <a
          href="https://sciforum.net/paper/view/21231"
          className="button"
          target="_blank"
        >
          Learn More <RiInformationFill className="button_icon" />
        </a>
      </div>
      <img
        src="src\assets\about-UAR.png"
        alt="About Image"
        className="about_img unselectable"
      />
    </div>
  </section>
);

export default About;
