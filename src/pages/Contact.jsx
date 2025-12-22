import React from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import './Contact.css';

const Contact = () => {
    const { t } = useTranslation();

    return (
        <div className="contact-page">
            <div className="contact-hero">
                <div className="container">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        {t('contact.getInTouch')}
                    </motion.h1>
                    <p>{t('contact.subText')}</p>
                </div>
            </div>

            {/* Why Contact Us Section */}
            <div className="container contact-intro">
                <div className="why-contact-grid">
                    <div className="why-contact-card">
                        <h3>{t('contact.whyContact')}</h3>
                        <ul className="reasons-list">
                            <li>{t('contact.reasons.product')}</li>
                            <li>{t('contact.reasons.dealership')}</li>
                            <li>{t('contact.reasons.consultation')}</li>
                            <li>{t('contact.reasons.enterprise')}</li>
                        </ul>
                    </div>
                    <div className="whatsapp-card">
                        <Phone className="icon-lg text-green" />
                        <h3>{t('contact.whatsapp')}</h3>
                        <p>{t('contact.response')}</p>
                        <a href="https://wa.me/917972955294" target="_blank" rel="noopener noreferrer" className="btn-whatsapp">
                            Chat Now
                        </a>
                    </div>
                </div>
            </div>

            <div className="container contact-content">
                <div className="contact-grid" style={{ gridTemplateColumns: '1fr', maxWidth: '800px', margin: '0 auto' }}>
                    {/* Contact Info Side - Now Centered Single Column */}
                    <motion.div
                        className="contact-info-card"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2>{t('contact.infoTitle')}</h2>
                        <div className="info-list">
                            <div className="info-item">
                                <MapPin className="icon" />
                                <div>
                                    <h3>{t('footer.visitUs')}</h3>
                                    <a href="https://maps.app.goo.gl/Z4aFBLpUYKPpwvRs6" target="_blank" rel="noopener noreferrer">
                                        <p>
                                            F3/F4, Balaji Mall, Kholeswar Road,<br />
                                            Near City Kotwali Police Station,<br />
                                            Akola - 444001, Maharashtra (IN)
                                        </p>
                                    </a>
                                </div>
                            </div>

                            <div className="info-item">
                                <Phone className="icon" />
                                <div>
                                    <h3>{t('footer.callUs')}</h3>
                                    <p><a href="tel:+917972955294">+91 7972955294</a></p>
                                </div>
                            </div>

                            <div className="info-item">
                                <Mail className="icon" />
                                <div>
                                    <h3>{t('footer.emailUs')}</h3>
                                    <p><a href="mailto:admin@mksolars.in">admin@mksolars.in</a></p>
                                </div>
                            </div>

                            <div className="info-item">
                                <Clock className="icon" />
                                <div>
                                    <h3>{t('contact.businessHours')}</h3>
                                    <p>{t('contact.monSat')}</p>
                                    <p>{t('contact.sunday')}</p>
                                </div>
                            </div>
                        </div>

                        <div className="map-container">
                            {/* Google Maps Embed Placeholder */}
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3732.0761954780996!2d76.9917408759323!3d20.707130280862938!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd731ee8c6743e1%3A0x6864e9adb5a18dd4!2sBalaji%20Mall!5e0!3m2!1sen!2sin!4v1766254163783!5m2!1sen!2sin"
                                width="100%"
                                height="450"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Google Map"
                            ></iframe>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
