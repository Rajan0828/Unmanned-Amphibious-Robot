import React from 'react';
import {
  RiPlayCircleFill,
  RiBookOpenFill,
  RiFacebookCircleFill,
  RiYoutubeFill,
} from 'react-icons/ri';
import homeUAR from '../assets/home-UAR.png';

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home_container container grid">
        <div className="home_content">
          <img
            src={homeUAR}
            alt="UAR"
            className="home_img unselectable"
          />
          <h1 className="home_title unselectable">
            <span className="U">U</span>
            <span className="A">A</span>
            <span className="R">R</span>
          </h1>
        </div>

        <a
          href="https://www.youtube.com/watch?v=S-Vc3vb7zKw"
          className="home_button button"
          target="_blank"
          rel="noopener noreferrer"
        >
          See it in Action{' '}
          <RiPlayCircleFill className="button_icon" />
        </a>

        <div className="home_social">
          <span className="home_social-text">Dive Deeper</span>
          <div className="home_social-links">
            <a
              href="https://sciforum.net/paper/view/21231"
              target="_blank"
              rel="noopener noreferrer"
              className="home_social-link"
            >
              <RiBookOpenFill />
            </a>
            <a
              href="https://www.facebook.com/share/p/1F7FPdVep8/"
              target="_blank"
              rel="noopener noreferrer"
              className="home_social-link"
            >
              <RiFacebookCircleFill />
            </a>
            <a
              href="https://www.youtube.com/watch?v=S-Vc3vb7zKw"
              target="_blank"
              rel="noopener noreferrer"
              className="home_social-link"
            >
              <RiYoutubeFill />
            </a>
          </div>
        </div>
      </div>

      <div>
        <span className="title">"Unmanned Amphibious Robot"</span>
      </div>
    </section>
  );
};

export default Home;
