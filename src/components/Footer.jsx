import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin, Youtube } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
    const { t } = useTranslation();
    return (
        <footer className="footer">
            <div className="container footer-container">
                <div className="footer-section brand">
                    <h3>MK Enterprises</h3>
                    <p>{t('footer.reliableStockist')}</p>
                    <div className="social-links">
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook"><Facebook size={20} /></a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter"><Twitter size={20} /></a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><Instagram size={20} /></a>
                        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><Linkedin size={20} /></a>
                        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube"><Youtube size={20} /></a>
                    </div>
                </div>

                <div className="footer-section links">
                    <h4>{t('footer.quickLinks')}</h4>
                    <ul>
                        <li><Link to="/" onClick={() => window.scrollTo(0, 0)}>{t('nav.home')}</Link></li>
                        <li><Link to="/agriplast" onClick={() => window.scrollTo(0, 0)}>Agriplast</Link></li>
                        <li><Link to="/fasal" onClick={() => window.scrollTo(0, 0)}>Fasal</Link></li>
                        <li><Link to="/map-my-crop" onClick={() => window.scrollTo(0, 0)}>Map My Crop</Link></li>
                        <li><Link to="/contact" onClick={() => window.scrollTo(0, 0)}>{t('nav.contact')}</Link></li>
                        <li><Link to="/faq" onClick={() => window.scrollTo(0, 0)}>FAQ</Link></li>
                    </ul>
                </div>

                <div className="footer-section contact">
                    <h4>{t('footer.contactUs')}</h4>
                    <ul>
                        <li>
                            <MapPin size={18} className="icon" />
                            <a href="https://maps.app.goo.gl/Z4aFBLpUYKPpwvRs6" target="_blank" rel="noopener noreferrer">
                                <p>
                                    F3/F4, Balaji Mall, Kholeswar Road,<br />
                                    Near City Kotwali Police Station,<br />
                                    Akola - 444001, Maharashtra (IN)
                                </p>
                            </a>
                        </li>
                        <li>
                            <Phone size={18} className="icon" />
                            <a href="tel:+917972955294">+91 98765 43210</a>
                        </li>
                        <li>
                            <Mail size={18} className="icon" />
                            <a href="mailto:admin@mksolars.in">admin@mksolars.in</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} MK Enterprises. {t('footer.rights')}</p>
            </div>
        </footer>
    );
};

export default Footer;
