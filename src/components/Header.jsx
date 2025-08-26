import React, { useState, useEffect } from 'react';
import { RiMenuLine, RiCloseLine } from 'react-icons/ri';

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [blur, setBlur] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    // Blur
    const handleScroll = () => {
      setBlur(window.scrollY >= 50);

      // Highlight active
      const sections = document.querySelectorAll('section[id]');
      sections.forEach((section) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= 150 && rect.bottom >= 150) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`header ${blur ? 'blur-header' : ''}`}
      id="header"
    >
      <nav className="nav container">
        <a href="#home" className="nav_logo">
          UAR
        </a>

        <div
          className={`nav_menu ${showMenu ? 'show-menu' : ''}`}
          id="nav-menu"
        >
          <ul className="nav_list">
            <li className="nav_item">
              <a
                href="#home"
                className={`nav_link ${
                  activeSection === 'home' ? 'active-link' : ''
                }`}
                onClick={() => setShowMenu(false)}
              >
                Home
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#about"
                className={`nav_link ${
                  activeSection === 'about' ? 'active-link' : ''
                }`}
                onClick={() => setShowMenu(false)}
              >
                About
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#hardware"
                className={`nav_link ${
                  activeSection === 'hardware' ? 'active-link' : ''
                }`}
                onClick={() => setShowMenu(false)}
              >
                Overview
              </a>
            </li>
            <li className="nav_item">
              <a
                href="#developers"
                className={`nav_link ${
                  activeSection === 'developers' ? 'active-link' : ''
                }`}
                onClick={() => setShowMenu(false)}
              >
                Developers
              </a>
            </li>
          </ul>

          {/* Close button */}
          <button
            className="nav_close"
            onClick={() => setShowMenu(false)}
          >
            <RiCloseLine size={24} />
          </button>
        </div>

        {/* Toggle button */}
        <button
          className="nav_toggle"
          onClick={() => setShowMenu(true)}
        >
          <RiMenuLine size={24} />
        </button>
      </nav>
    </header>
  );
};

export default Header;
