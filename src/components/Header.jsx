import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next'; // Import hook
import './Header.css';
import logo from '../assets/mklogo.svg';

import LanguageSelector from './LanguageSelector'; // Import new component

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation(); // Init hook

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t('nav.home'), path: '/' },
    { name: 'Agriplast', path: '/agriplast' },
    { name: 'Fasal', path: '/fasal' },
    { name: t('nav.useCases'), path: '/use-cases' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <Link to="/" className="logo">
          <img src={logo} alt="MK Enterprises" className="logo-icon" />
          <span className="logo-text">MK Enterprises</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="desktop-nav">
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className={location.pathname === link.path ? 'active' : ''}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <LanguageSelector />
            </li>
          </ul>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="mobile-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>

        {/* Mobile Nav */}
        <div className={`mobile-nav ${isMobileMenuOpen ? 'open' : ''}`}>
          <ul>
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={location.pathname === link.path ? 'active' : ''}
                >
                  {link.name}
                </Link>
              </li>
            ))}
            <li>
              <div style={{ padding: '0.5rem 0', width: '100%' }}>
                <LanguageSelector />
              </div>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
