import React from 'react';
import LTE from '../assets/LTE.png';
import Gps from '../assets/Gps.png';
import Lora from '../assets/Lora.png';
import OpenCV from '../assets/OpenCV.png';
import Rpi from '../assets/Rpi.png';
import Yolo from '../assets/Yolo.png';

const techImages = [
  { src: LTE, alt: 'LTE' },
  { src: Gps, alt: 'GPS' },
  { src: Lora, alt: 'LoRa' },
  { src: OpenCV, alt: 'OpenCV' },
  { src: Rpi, alt: 'Raspberry Pi' },
  { src: Yolo, alt: 'YOLO' },
];

const Tech = () => (
  <section className="tech section">
    <h2>Power By Innovation</h2>
    <div className="tech_container container grid">
      {techImages.map((img, i) => (
        <img
          key={i}
          src={img.src}
          alt={img.alt}
          className="tech_img"
        />
      ))}
    </div>
  </section>
);

export default Tech;
