import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Avie from '../assets/Avie.png';
import Gab from '../assets/Gab.png';
import Felix from '../assets/Felix.png';
import Rajan from '../assets/Rajan.png';
import Charles from '../assets/Charles.png';
import Eufemia from '../assets/Eufemia.png';

const devs = [
  { name: 'Engr. Aviegail Bobadilla', img: Avie },
  { name: 'Engr. Gabriel Arevalo', img: Gab },
  { name: 'Engr. Felix Valdez', img: Felix },
  { name: 'Engr. Rajan Macaraig', img: Rajan },
  { name: 'Engr. Charles Juarizo', img: Charles },
  { name: 'Engr. Eufemia Garcia', img: Eufemia },
];

const Developers = () => (
  <section className="developer section" id="developers">
    <h2 className="section_title">Meet The Developers</h2>
    <div className="developer_container unselectable">
      <Swiper
        slidesPerView="auto"
        spaceBetween={24}
        loop={true}
        grabCursor={true}
        centeredSlides={true}
        initialSlide={3}
        breakpoints={{
          300: { slidesPerView: 3, spaceBetween: 32 },
          768: { slidesPerView: 3, spaceBetween: 48 },
          1024: { slidesPerView: 3, spaceBetween: 30 },
        }}
      >
        {devs.map((dev, i) => (
          <SwiperSlide key={i} className="developer_article">
            <img
              src={dev.img}
              alt={dev.name}
              className="developer_img"
            />
            <span className="developer_model">{dev.name}</span>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  </section>
);

export default Developers;
