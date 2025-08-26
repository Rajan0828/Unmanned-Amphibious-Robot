import React from 'react';

const techImages = [
  'src/assets/LTE.png',
  'src/assets/Gps.png',
  'src/assets/Lora.png',
  'src/assets/OpenCV.png',
  'src/assets/Rpi.png',
  'src/assets/Yolo.png',
];

const Tech = () => (
  <section className="tech section">
    <h2>Power By Innovation</h2>
    <div className="tech_container container grid">
      {techImages.map((img, i) => (
        <img key={i} src={img} alt={img} className="tech_img" />
      ))}
    </div>
  </section>
);

export default Tech;
