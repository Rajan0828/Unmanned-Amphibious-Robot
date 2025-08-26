import React from 'react';
import { RiPlayCircleFill } from 'react-icons/ri';

import modelUAR from '../assets/model-UAR.png';
import tooltipRight from '../assets/tooltip-right.svg';

const Hardware = () => (
  <section className="model section" id="hardware">
    <h2 className="section_title">Hardware Overview</h2>
    <div className="model_container container grid">
      <div className="model_content">
        <img src={modelUAR} alt="Model Image" className="model_img" />

        <div className="model_tooltip model_tooltip-1">
          <img
            src={tooltipRight}
            alt=""
            className="model_tooltip-img"
          />
          <span className="model_tooltip-text">
            Wireless Location Finder
          </span>
        </div>

        <div className="model_tooltip model_tooltip-2">
          <img
            src={tooltipRight}
            alt=""
            className="model_tooltip-img"
          />
          <span className="model_tooltip-text">
            RT Human Detection
          </span>
        </div>

        <div className="model_tooltip model_tooltip-3">
          <img
            src={tooltipRight}
            alt=""
            className="model_tooltip-img"
          />
          <span className="model_tooltip-text">
            Dual-Terrain Drive
          </span>
        </div>

        <div className="model_tooltip model_tooltip-4">
          <img
            src={tooltipRight}
            alt=""
            className="model_tooltip-img"
          />
          <span className="model_tooltip-text">
            Crash Guard System
          </span>
        </div>
      </div>

      <a
        href="mailto:rajanmolemacaraig28@gmail.com"
        className="model_button button"
      >
        Request Demo <RiPlayCircleFill className="button_icon" />
      </a>
    </div>
  </section>
);

export default Hardware;
